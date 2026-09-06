from fastapi import FastAPI, APIRouter, HTTPException, Response, Request
from fastapi.responses import PlainTextResponse
from starlette.middleware.cors import CORSMiddleware

from dotenv import load_dotenv

from motor.motor_asyncio import AsyncIOMotorClient

from pydantic import BaseModel, Field, EmailStr

from pathlib import Path

from datetime import datetime, timezone, timedelta

from typing import List, Optional

import asyncio
import base64
import hashlib
import hmac
import json
import logging
import os
import re
import requests
import time
import uuid
import google.genai

print("Google GenAI Version:", google.genai.__version__)

from google import genai
from seed_data import LESSONS, BLOG_POSTS, GLOSSARY


# ----------------------------------------------------
# ENV
# ----------------------------------------------------

ROOT_DIR = Path(__file__).parent

load_dotenv(ROOT_DIR / ".env")


MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

client_ai = genai.Client(api_key=GEMINI_API_KEY)
COINGECKO_API_KEY = os.getenv("COINGECKO_API_KEY")
NEWSDATA_API_KEY = os.getenv("NEWSDATA_API_KEY")
CRON_SECRET = os.getenv("CRON_SECRET")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")
import os

print("MONGO_URL =", repr(os.getenv("MONGO_URL")))

client = AsyncIOMotorClient(MONGO_URL)

db = client[DB_NAME]


# ----------------------------------------------------
# FASTAPI
# ----------------------------------------------------

app = FastAPI(title="Crypto Beginner API")

api_router = APIRouter(prefix="/api")


logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)


# ----------------------------------------------------
# CACHE
# ----------------------------------------------------

CACHE_TTL = timedelta(seconds=55)

NEWS_CACHE = timedelta(minutes=10)

_market_cache = {}

_global_cache = {
    "data": None,
    "ts": None
}

_news_cache = {
    "data": None,
    "ts": None
}

_search_cache = {}


def _normalize_coin(coin: dict) -> dict:
    return {
        "id": coin.get("id"),
        "name": coin.get("name"),
        "symbol": coin.get("symbol", "").upper(),
        "image": coin.get("image"),
        "current_price": coin.get("current_price"),
        "price_change_percentage_24h": coin.get("price_change_percentage_24h"),
        "market_cap": coin.get("market_cap"),
        "market_cap_rank": coin.get("market_cap_rank"),
        "total_volume": coin.get("total_volume"),
        "sparkline_7d": (coin.get("sparkline_in_7d") or {}).get("price", [])
    }


DEMO_STARTING_BALANCE = 10000.0


async def _get_prices_usd(ids: list) -> dict:
    """Batch-fetch live USD prices for a list of CoinGecko coin ids."""
    ids = [i for i in ids if i]
    if not ids:
        return {}

    headers = {}
    if COINGECKO_API_KEY:
        headers["x-cg-demo-api-key"] = COINGECKO_API_KEY

    response = await asyncio.to_thread(
        requests.get,
        "https://api.coingecko.com/api/v3/simple/price",
        headers=headers,
        params={"ids": ",".join(ids), "vs_currencies": "usd"},
        timeout=15
    )
    response.raise_for_status()
    payload = response.json() or {}
    return {cid: (payload.get(cid) or {}).get("usd") for cid in ids}


async def _get_price_usd(coin_id: str):
    prices = await _get_prices_usd([coin_id])
    return prices.get(coin_id)


# ----------------------------------------------------
# FUTURES (leverage) — isolated-margin math helpers
# ----------------------------------------------------

def _futures_unrealized(position: dict, current_price: float):
    entry = position["entry_price"]
    qty = position["quantity"]
    if position["side"] == "long":
        pnl = (current_price - entry) * qty
    else:
        pnl = (entry - current_price) * qty
    margin = position["margin"] or 1e-9
    pnl_pct = (pnl / margin) * 100
    return pnl, pnl_pct


def _futures_is_liquidated(position: dict, current_price: float) -> bool:
    liq = position.get("liquidation_price")
    if liq is None:
        return False
    if position["side"] == "long":
        return current_price <= liq
    return current_price >= liq


def _futures_check_tp_sl(position: dict, current_price: float):
    side = position["side"]
    tp = position.get("take_profit")
    sl = position.get("stop_loss")
    if side == "long":
        if tp is not None and current_price >= tp:
            return "take_profit"
        if sl is not None and current_price <= sl:
            return "stop_loss"
    else:
        if tp is not None and current_price <= tp:
            return "take_profit"
        if sl is not None and current_price >= sl:
            return "stop_loss"
    return None


async def _sync_futures_positions(device_id: str):
    """
    Fetches this device's OPEN futures positions, marks-to-market against live
    prices, and auto-closes anything that has hit its take-profit, stop-loss,
    or liquidation price — crediting/debiting the virtual cash balance as it
    goes. Returns (open_positions_enriched, locked_margin, unrealized_pnl,
    current_cash_balance).
    """
    positions = await db.demo_positions.find({"device_id": device_id, "status": "open"}).to_list(200)

    account = await db.demo_accounts.find_one({"device_id": device_id})
    cash_balance = (account or {}).get("cash_balance", DEMO_STARTING_BALANCE)

    if not positions:
        return [], 0.0, 0.0, cash_balance

    ids = list({p["coin_id"] for p in positions})
    try:
        prices = await _get_prices_usd(ids)
    except Exception as e:
        logger.exception(e)
        prices = {}

    open_out = []
    locked_margin = 0.0
    unrealized_total = 0.0

    for p in positions:
        price = prices.get(p["coin_id"])
        if price is None:
            # Can't mark-to-market right now — keep position open, skip trigger checks.
            locked_margin += p["margin"]
            open_out.append({**p, "current_price": p["entry_price"], "pnl": 0.0, "pnl_pct": 0.0})
            continue

        liquidated = _futures_is_liquidated(p, price)
        reason = "liquidation" if liquidated else _futures_check_tp_sl(p, price)

        if reason:
            close_price = (
                p["liquidation_price"] if reason == "liquidation"
                else (p["take_profit"] if reason == "take_profit" else p["stop_loss"])
            )
            pnl, _ = _futures_unrealized(p, close_price)
            pnl = max(pnl, -p["margin"])  # isolated margin — never lose more than you put up
            cash_balance = cash_balance + p["margin"] + pnl

            await db.demo_positions.update_one(
                {"id": p["id"]},
                {"$set": {
                    "status": "closed",
                    "close_price": close_price,
                    "close_reason": reason,
                    "pnl": pnl,
                    "closed_at": datetime.now(timezone.utc).isoformat(),
                }}
            )
            await db.demo_accounts.update_one(
                {"device_id": device_id},
                {"$set": {"cash_balance": cash_balance}},
                upsert=True,
            )
        else:
            pnl, pnl_pct = _futures_unrealized(p, price)
            locked_margin += p["margin"]
            unrealized_total += pnl
            open_out.append({**p, "current_price": price, "pnl": pnl, "pnl_pct": pnl_pct})

    open_out.sort(key=lambda p: p.get("opened_at", ""), reverse=True)
    return open_out, locked_margin, unrealized_total, cash_balance


# ----------------------------------------------------
# MODELS
# ----------------------------------------------------

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str
    created_at: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


class ContactCreate(BaseModel):

    name: str = Field(min_length=1, max_length=120)

    email: EmailStr

    subject: Optional[str] = Field(
        default=None,
        max_length=200
    )

    message: str = Field(
        min_length=1,
        max_length=5000
    )

class ChatRequest(BaseModel):
    message: str = Field(
        min_length=1,
        max_length=4000
    )


class DemoTradeRequest(BaseModel):
    device_id: str = Field(min_length=8, max_length=100)
    coin_id: str = Field(min_length=1, max_length=100)
    symbol: str = Field(min_length=1, max_length=20)
    name: str = Field(min_length=1, max_length=100)
    image: Optional[str] = None
    side: str = Field(pattern="^(buy|sell)$")
    quantity: float = Field(gt=0)


class FuturesOpenRequest(BaseModel):
    device_id: str = Field(min_length=8, max_length=100)
    coin_id: str = Field(min_length=1, max_length=100)
    symbol: str = Field(min_length=1, max_length=20)
    name: str = Field(min_length=1, max_length=100)
    image: Optional[str] = None
    side: str = Field(pattern="^(long|short)$")
    leverage: float = Field(ge=1, le=50)
    margin: float = Field(gt=0)
    take_profit: Optional[float] = Field(default=None, gt=0)
    stop_loss: Optional[float] = Field(default=None, gt=0)


class FuturesCloseRequest(BaseModel):
    device_id: str = Field(min_length=8, max_length=100)
    position_id: str = Field(min_length=1, max_length=100)


# ----------------------------------------------------
# HEALTH
# ----------------------------------------------------

@api_router.get("/")
async def root():
    return {
        "service": "Crypto Beginner API",
        "status": "ok"
    }

# ----------------------------------------------------
# MARKET API
# ----------------------------------------------------

@api_router.get("/market/top")
async def get_top_coins(page: int = 1, per_page: int = 10):

    page = max(1, min(page, 20))
    per_page = max(1, min(per_page, 50))
    cache_key = f"{page}_{per_page}"

    now = datetime.now(timezone.utc)

    cached_entry = _market_cache.get(cache_key)
    if (
        cached_entry
        and cached_entry.get("data")
        and cached_entry.get("ts")
        and (now - cached_entry["ts"]) < CACHE_TTL
    ):
        return {
            "data": cached_entry["data"],
            "cached": True
        }

    try:

        headers = {}

        if COINGECKO_API_KEY:
            headers["x-cg-demo-api-key"] = COINGECKO_API_KEY

        response = await asyncio.to_thread(
            requests.get,
            "https://api.coingecko.com/api/v3/coins/markets",
            headers=headers,
            params={
                "vs_currency": "usd",
                "order": "market_cap_desc",
                "per_page": per_page,
                "page": page,
                "sparkline": "true",
                "price_change_percentage": "24h"
            },
            timeout=15
        )

        response.raise_for_status()

        coins = response.json()

        data = [_normalize_coin(coin) for coin in coins]

        _market_cache[cache_key] = {"data": data, "ts": now}

        return {
            "data": data,
            "cached": False
        }

    except Exception as e:

        logger.exception(e)

        if cached_entry and cached_entry.get("data"):

            return {
                "data": cached_entry["data"],
                "cached": True,
                "stale": True
            }

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# ----------------------------------------------------
# MARKET SEARCH — find any coin by name/symbol
# ----------------------------------------------------

@api_router.get("/market/search")
async def search_coins(q: str = ""):

    q = (q or "").strip()
    if len(q) < 1:
        return {"data": []}

    now = datetime.now(timezone.utc)
    cache_key = f"search_{q.lower()}"
    cached_entry = _search_cache.get(cache_key)
    if (
        cached_entry
        and cached_entry.get("ts")
        and (now - cached_entry["ts"]) < CACHE_TTL
    ):
        return {"data": cached_entry["data"], "cached": True}

    try:
        headers = {}
        if COINGECKO_API_KEY:
            headers["x-cg-demo-api-key"] = COINGECKO_API_KEY

        search_resp = await asyncio.to_thread(
            requests.get,
            "https://api.coingecko.com/api/v3/search",
            headers=headers,
            params={"query": q},
            timeout=15
        )
        search_resp.raise_for_status()
        matches = (search_resp.json() or {}).get("coins", [])[:15]

        if not matches:
            _search_cache[cache_key] = {"data": [], "ts": now}
            return {"data": []}

        ids = [m.get("id") for m in matches if m.get("id")]
        order = {cid: i for i, cid in enumerate(ids)}

        markets_resp = await asyncio.to_thread(
            requests.get,
            "https://api.coingecko.com/api/v3/coins/markets",
            headers=headers,
            params={
                "vs_currency": "usd",
                "ids": ",".join(ids),
                "order": "market_cap_desc",
                "sparkline": "true",
                "price_change_percentage": "24h"
            },
            timeout=15
        )
        markets_resp.raise_for_status()
        coins = markets_resp.json()

        data = [_normalize_coin(c) for c in coins]
        data.sort(key=lambda c: order.get(c["id"], 999))

        _search_cache[cache_key] = {"data": data, "ts": now}

        return {"data": data, "cached": False}

    except Exception as e:
        logger.exception(e)
        if cached_entry and cached_entry.get("data"):
            return {"data": cached_entry["data"], "cached": True, "stale": True}
        raise HTTPException(status_code=500, detail=str(e))


# ----------------------------------------------------
# MARKET CATEGORIES — browse by coin category (meme, DeFi, etc.)
# ----------------------------------------------------

MARKET_CATEGORIES = [
    {"id": "meme-token", "label": "Meme Coins"},
    {"id": "decentralized-finance-defi", "label": "DeFi"},
    {"id": "smart-contract-platform", "label": "Layer 1"},
    {"id": "layer-2", "label": "Layer 2"},
    {"id": "artificial-intelligence", "label": "AI"},
    {"id": "gaming", "label": "Gaming"},
    {"id": "stablecoins", "label": "Stablecoins"},
    {"id": "exchange-based-tokens", "label": "Exchange Tokens"},
]


@api_router.get("/market/categories")
async def get_categories():
    return {"data": MARKET_CATEGORIES}


@api_router.get("/market/category/{category_id}")
async def get_coins_by_category(category_id: str, page: int = 1, per_page: int = 20):

    valid_ids = {c["id"] for c in MARKET_CATEGORIES}
    if category_id not in valid_ids:
        raise HTTPException(status_code=404, detail="Unknown category")

    page = max(1, min(page, 20))
    per_page = max(1, min(per_page, 50))

    now = datetime.now(timezone.utc)
    cache_key = f"cat_{category_id}_{page}_{per_page}"
    cached_entry = _search_cache.get(cache_key)
    if (
        cached_entry
        and cached_entry.get("ts")
        and (now - cached_entry["ts"]) < CACHE_TTL
    ):
        return {"data": cached_entry["data"], "cached": True}

    try:
        headers = {}
        if COINGECKO_API_KEY:
            headers["x-cg-demo-api-key"] = COINGECKO_API_KEY

        response = await asyncio.to_thread(
            requests.get,
            "https://api.coingecko.com/api/v3/coins/markets",
            headers=headers,
            params={
                "vs_currency": "usd",
                "category": category_id,
                "order": "market_cap_desc",
                "per_page": per_page,
                "page": page,
                "sparkline": "true",
                "price_change_percentage": "24h"
            },
            timeout=15
        )
        response.raise_for_status()
        coins = response.json()
        data = [_normalize_coin(c) for c in coins]

        _search_cache[cache_key] = {"data": data, "ts": now}

        return {"data": data, "cached": False}

    except Exception as e:
        logger.exception(e)
        if cached_entry and cached_entry.get("data"):
            return {"data": cached_entry["data"], "cached": True, "stale": True}
        raise HTTPException(status_code=500, detail=str(e))


# ----------------------------------------------------
# DEMO / PAPER TRADING — practice trading, no real money
# ----------------------------------------------------

@api_router.get("/demo/account/{device_id}")
async def get_demo_account(device_id: str):
    if not device_id or len(device_id) < 8 or len(device_id) > 100:
        raise HTTPException(status_code=400, detail="Invalid device id")

    account = await db.demo_accounts.find_one({"device_id": device_id})
    if not account:
        account = {
            "device_id": device_id,
            "cash_balance": DEMO_STARTING_BALANCE,
            "holdings": {},
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        await db.demo_accounts.insert_one(dict(account))

    holdings = account.get("holdings", {}) or {}
    ids = list(holdings.keys())

    try:
        prices = await _get_prices_usd(ids) if ids else {}
    except Exception as e:
        logger.exception(e)
        prices = {}

    holdings_out = []
    holdings_value = 0.0
    for cid, h in holdings.items():
        qty = h.get("quantity", 0)
        avg_price = h.get("avg_price", 0)
        price = prices.get(cid)
        if price is None:
            price = avg_price
        value = price * qty
        cost_basis = avg_price * qty
        holdings_value += value
        holdings_out.append({
            "coin_id": cid,
            "symbol": h.get("symbol"),
            "name": h.get("name"),
            "image": h.get("image"),
            "quantity": qty,
            "avg_price": avg_price,
            "current_price": price,
            "value": value,
            "pnl": value - cost_basis,
            "pnl_pct": ((value - cost_basis) / cost_basis * 100) if cost_basis else 0,
        })

    holdings_out.sort(key=lambda h: h["value"], reverse=True)

    # Mark-to-market open futures positions (auto-closes anything that hit
    # its TP / SL / liquidation price, updating cash_balance as a side effect).
    open_positions, futures_margin_locked, futures_unrealized_pnl, cash_balance = (
        await _sync_futures_positions(device_id)
    )

    total_value = cash_balance + holdings_value + futures_margin_locked + futures_unrealized_pnl
    total_pnl = total_value - DEMO_STARTING_BALANCE

    return {
        "device_id": device_id,
        "cash_balance": cash_balance,
        "holdings": holdings_out,
        "holdings_value": holdings_value,
        "futures_margin_locked": futures_margin_locked,
        "futures_unrealized_pnl": futures_unrealized_pnl,
        "futures_open_count": len(open_positions),
        "total_value": total_value,
        "starting_balance": DEMO_STARTING_BALANCE,
        "total_pnl": total_pnl,
        "total_pnl_pct": (total_pnl / DEMO_STARTING_BALANCE * 100),
    }


@api_router.post("/demo/trade")
async def execute_demo_trade(payload: DemoTradeRequest):
    device_id = payload.device_id

    account = await db.demo_accounts.find_one({"device_id": device_id})
    if not account:
        account = {
            "device_id": device_id,
            "cash_balance": DEMO_STARTING_BALANCE,
            "holdings": {},
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        await db.demo_accounts.insert_one(dict(account))

    try:
        price = await _get_price_usd(payload.coin_id)
    except Exception as e:
        logger.exception(e)
        price = None

    if price is None:
        raise HTTPException(status_code=400, detail="Could not fetch a live price for this coin right now")

    total_cost = price * payload.quantity
    holdings = account.get("holdings", {}) or {}
    cash_balance = account.get("cash_balance", DEMO_STARTING_BALANCE)

    if payload.side == "buy":
        if total_cost > cash_balance + 1e-6:
            raise HTTPException(status_code=400, detail="Insufficient virtual balance for this trade")

        existing = holdings.get(payload.coin_id)
        if existing:
            new_qty = existing["quantity"] + payload.quantity
            new_avg = ((existing["avg_price"] * existing["quantity"]) + total_cost) / new_qty
            holdings[payload.coin_id] = {
                **existing,
                "quantity": new_qty,
                "avg_price": new_avg,
            }
        else:
            holdings[payload.coin_id] = {
                "symbol": payload.symbol.upper(),
                "name": payload.name,
                "image": payload.image,
                "quantity": payload.quantity,
                "avg_price": price,
            }
        new_cash = cash_balance - total_cost

    else:  # sell
        existing = holdings.get(payload.coin_id)
        if not existing or existing.get("quantity", 0) < payload.quantity - 1e-9:
            raise HTTPException(status_code=400, detail="You don't hold enough of this coin to sell that amount")

        remaining = existing["quantity"] - payload.quantity
        if remaining <= 1e-9:
            holdings.pop(payload.coin_id, None)
        else:
            holdings[payload.coin_id] = {**existing, "quantity": remaining}
        new_cash = cash_balance + total_cost

    await db.demo_accounts.update_one(
        {"device_id": device_id},
        {"$set": {"cash_balance": new_cash, "holdings": holdings}},
        upsert=True,
    )

    transaction = {
        "id": str(uuid.uuid4()),
        "device_id": device_id,
        "coin_id": payload.coin_id,
        "symbol": payload.symbol.upper(),
        "name": payload.name,
        "image": payload.image,
        "side": payload.side,
        "quantity": payload.quantity,
        "price": price,
        "total": total_cost,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.demo_transactions.insert_one(dict(transaction))

    return {
        "ok": True,
        "cash_balance": new_cash,
        "transaction": transaction,
    }


@api_router.get("/demo/transactions/{device_id}")
async def get_demo_transactions(device_id: str, limit: int = 20):
    limit = max(1, min(limit, 100))
    cursor = db.demo_transactions.find({"device_id": device_id}).sort("created_at", -1).limit(limit)
    txs = await cursor.to_list(length=limit)
    for t in txs:
        t.pop("_id", None)
    return {"data": txs}


@api_router.post("/demo/reset/{device_id}")
async def reset_demo_account(device_id: str):
    await db.demo_accounts.update_one(
        {"device_id": device_id},
        {"$set": {"cash_balance": DEMO_STARTING_BALANCE, "holdings": {}}},
        upsert=True,
    )
    await db.demo_transactions.delete_many({"device_id": device_id})
    await db.demo_positions.delete_many({"device_id": device_id})
    return {"ok": True}


# ----------------------------------------------------
# DEMO FUTURES — leveraged long/short with TP / SL, virtual money only
# ----------------------------------------------------

MAX_LEVERAGE = 50
MAINTENANCE_BUFFER = 0.0  # simplified: liquidation = 100% of margin lost


@api_router.post("/demo/futures/open")
async def open_futures_position(payload: FuturesOpenRequest):
    device_id = payload.device_id

    account = await db.demo_accounts.find_one({"device_id": device_id})
    if not account:
        account = {
            "device_id": device_id,
            "cash_balance": DEMO_STARTING_BALANCE,
            "holdings": {},
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        await db.demo_accounts.insert_one(dict(account))

    # Settle any pending auto-closes first so we check margin against fresh cash.
    _, _, _, cash_balance = await _sync_futures_positions(device_id)

    leverage = max(1.0, min(payload.leverage, MAX_LEVERAGE))

    if payload.margin > cash_balance + 1e-6:
        raise HTTPException(status_code=400, detail="Insufficient virtual balance for this margin")

    try:
        price = await _get_price_usd(payload.coin_id)
    except Exception as e:
        logger.exception(e)
        price = None

    if price is None or price <= 0:
        raise HTTPException(status_code=400, detail="Could not fetch a live price for this coin right now")

    # Validate TP/SL are on the correct side of entry for this direction.
    if payload.side == "long":
        if payload.take_profit is not None and payload.take_profit <= price:
            raise HTTPException(status_code=400, detail="Take-profit must be above the entry price for a long")
        if payload.stop_loss is not None and payload.stop_loss >= price:
            raise HTTPException(status_code=400, detail="Stop-loss must be below the entry price for a long")
        liquidation_price = price * (1 - 1 / leverage) * (1 - MAINTENANCE_BUFFER)
    else:
        if payload.take_profit is not None and payload.take_profit >= price:
            raise HTTPException(status_code=400, detail="Take-profit must be below the entry price for a short")
        if payload.stop_loss is not None and payload.stop_loss <= price:
            raise HTTPException(status_code=400, detail="Stop-loss must be above the entry price for a short")
        liquidation_price = price * (1 + 1 / leverage) * (1 + MAINTENANCE_BUFFER)

    size = payload.margin * leverage
    quantity = size / price

    position = {
        "id": str(uuid.uuid4()),
        "device_id": device_id,
        "coin_id": payload.coin_id,
        "symbol": payload.symbol.upper(),
        "name": payload.name,
        "image": payload.image,
        "side": payload.side,
        "leverage": leverage,
        "margin": payload.margin,
        "size": size,
        "quantity": quantity,
        "entry_price": price,
        "liquidation_price": liquidation_price,
        "take_profit": payload.take_profit,
        "stop_loss": payload.stop_loss,
        "status": "open",
        "close_price": None,
        "close_reason": None,
        "pnl": None,
        "opened_at": datetime.now(timezone.utc).isoformat(),
        "closed_at": None,
    }
    await db.demo_positions.insert_one(dict(position))

    new_cash = cash_balance - payload.margin
    await db.demo_accounts.update_one(
        {"device_id": device_id},
        {"$set": {"cash_balance": new_cash}},
        upsert=True,
    )

    position.pop("_id", None)
    return {"ok": True, "cash_balance": new_cash, "position": position}


@api_router.get("/demo/futures/positions/{device_id}")
async def list_futures_positions(device_id: str):
    open_positions, locked_margin, unrealized_pnl, cash_balance = await _sync_futures_positions(device_id)
    for p in open_positions:
        p.pop("_id", None)
    return {
        "data": open_positions,
        "locked_margin": locked_margin,
        "unrealized_pnl": unrealized_pnl,
        "cash_balance": cash_balance,
    }


@api_router.post("/demo/futures/close")
async def close_futures_position(payload: FuturesCloseRequest):
    device_id = payload.device_id

    # Run the auto-close sweep first — the position may already have hit
    # its TP/SL/liquidation, in which case there's nothing left to close.
    await _sync_futures_positions(device_id)

    position = await db.demo_positions.find_one({
        "id": payload.position_id,
        "device_id": device_id,
        "status": "open",
    })
    if not position:
        raise HTTPException(status_code=404, detail="Open position not found (it may have already closed)")

    try:
        price = await _get_price_usd(position["coin_id"])
    except Exception as e:
        logger.exception(e)
        price = None

    if price is None:
        raise HTTPException(status_code=400, detail="Could not fetch a live price for this coin right now")

    pnl, _ = _futures_unrealized(position, price)
    pnl = max(pnl, -position["margin"])

    account = await db.demo_accounts.find_one({"device_id": device_id}) or {}
    cash_balance = account.get("cash_balance", DEMO_STARTING_BALANCE)
    new_cash = cash_balance + position["margin"] + pnl

    await db.demo_positions.update_one(
        {"id": position["id"]},
        {"$set": {
            "status": "closed",
            "close_price": price,
            "close_reason": "manual",
            "pnl": pnl,
            "closed_at": datetime.now(timezone.utc).isoformat(),
        }}
    )
    await db.demo_accounts.update_one(
        {"device_id": device_id},
        {"$set": {"cash_balance": new_cash}},
        upsert=True,
    )

    return {"ok": True, "cash_balance": new_cash, "close_price": price, "pnl": pnl}


@api_router.get("/demo/futures/history/{device_id}")
async def get_futures_history(device_id: str, limit: int = 20):
    limit = max(1, min(limit, 100))
    cursor = (
        db.demo_positions
        .find({"device_id": device_id, "status": "closed"})
        .sort("closed_at", -1)
        .limit(limit)
    )
    items = await cursor.to_list(length=limit)
    for i in items:
        i.pop("_id", None)
    return {"data": items}


# ----------------------------------------------------
# GLOBAL MARKET
# ----------------------------------------------------

@api_router.get("/market/global")
async def get_global_market():

    now = datetime.now(timezone.utc)

    if (
        _global_cache["data"]
        and _global_cache["ts"]
        and (now - _global_cache["ts"]) < CACHE_TTL
    ):
        return {
            "data": _global_cache["data"],
            "cached": True
        }

    try:

        headers = {}

        if COINGECKO_API_KEY:
            headers["x-cg-demo-api-key"] = COINGECKO_API_KEY

        response = await asyncio.to_thread(
            requests.get,
            "https://api.coingecko.com/api/v3/global",
            headers=headers,
            timeout=15
        )

        response.raise_for_status()

        raw = response.json()["data"]

        data = {
            "total_market_cap_usd": raw["total_market_cap"]["usd"],
            "total_volume_usd": raw["total_volume"]["usd"],
            "btc_dominance": raw["market_cap_percentage"]["btc"],
            "eth_dominance": raw["market_cap_percentage"]["eth"],
            "active_cryptocurrencies": raw["active_cryptocurrencies"],
            "markets": raw["markets"],
            "market_cap_change_percentage_24h_usd":
                raw["market_cap_change_percentage_24h_usd"]
        }

        _global_cache["data"] = data
        _global_cache["ts"] = now

        return {
            "data": data,
            "cached": False
        }

    except Exception as e:

        logger.exception(e)

        if _global_cache["data"]:

            return {
                "data": _global_cache["data"],
                "cached": True,
                "stale": True
            }

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# ----------------------------------------------------
# CRYPTO NEWS
# ----------------------------------------------------

@api_router.get("/news")
async def crypto_news():

    now = datetime.now(timezone.utc)

    if (
        _news_cache["data"]
        and _news_cache["ts"]
        and (now - _news_cache["ts"]) < NEWS_CACHE
    ):
        return {
            "data": _news_cache["data"],
            "cached": True
        }

    try:

        response = await asyncio.to_thread(
            requests.get,
            "https://newsdata.io/api/1/latest",
            params={
                "apikey": NEWSDATA_API_KEY,
                "q": "crypto",
                "language": "en",
                "category": "business,technology",
                "size": 10
            },
            timeout=20
        )

        response.raise_for_status()

        raw = response.json()

        if raw.get("status") != "success":
            raise ValueError(f"newsdata.io returned an error: {raw.get('results') or raw.get('message') or raw}")

        news = []

        keywords = [
            "crypto",
            "bitcoin",
            "btc",
            "ethereum",
            "eth",
            "blockchain",
            "binance",
            "solana",
            "xrp",
            "dogecoin",
            "cardano",
            "altcoin",
            "web3",
            "defi",
            "nft",
            "stablecoin"
        ]

        for item in raw.get("results", []):

            title = (item.get("title") or "").lower()
            description = (item.get("description") or "").lower()

            text = title + " " + description

            if not any(keyword in text for keyword in keywords):
                continue

            if not item.get("image_url"):
                continue

            if not item.get("title"):
                continue

            news.append({
                "title": item.get("title"),
                "description": item.get("description"),
                "image": item.get("image_url"),
                "link": item.get("link"),
                "source": item.get("source_name"),
                "date": item.get("pubDate")
            })

        _news_cache["data"] = news
        _news_cache["ts"] = now

        return {
            "data": news,
            "cached": False
        }

    except Exception as e:

        logger.exception(e)

        if _news_cache["data"]:
            return {
                "data": _news_cache["data"],
                "cached": True,
                "stale": True
            }

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    
    # ----------------------------------------------------
# LESSONS
# ----------------------------------------------------

@api_router.get("/lessons")
async def list_lessons(level: Optional[str] = None):

    query = {}

    if level:
        query["level"] = level

    lessons = await db.lessons.find(
        query,
        {"_id": 0, "content": 0}
    ).sort([
        ("level", 1),
        ("order", 1)
    ]).to_list(500)

    return lessons


@api_router.get("/lessons/{slug}")
async def lesson_detail(slug: str):

    lesson = await db.lessons.find_one(
        {"slug": slug},
        {"_id": 0}
    )

    if not lesson:
        raise HTTPException(404, "Lesson not found")

    return lesson


# ----------------------------------------------------
# GLOSSARY
# ----------------------------------------------------

@api_router.get("/glossary")
async def glossary():

    data = await db.glossary.find(
        {},
        {"_id": 0}
    ).sort(
        "term",
        1
    ).to_list(1000)

    return data


# ----------------------------------------------------
# BLOG
# ----------------------------------------------------

@api_router.get("/blog")
async def blogs(category: Optional[str] = None):

    query = {}

    if category:
        query["category"] = category

    data = await db.blog.find(
        query,
        {"_id": 0, "content": 0}
    ).sort(
        "created_at",
        -1
    ).to_list(500)

    return data


@api_router.get("/blog/categories")
async def blog_categories():

    return await db.blog.distinct("category")


@api_router.get("/blog/{slug}")
async def blog_detail(slug: str):

    article = await db.blog.find_one(
        {"slug": slug},
        {"_id": 0}
    )

    if not article:
        raise HTTPException(404, "Article not found")

    return article


# ----------------------------------------------------
# CONTACT
# ----------------------------------------------------

@api_router.post("/contact")
async def contact(payload: ContactCreate):

    submission = ContactSubmission(
        **payload.model_dump()
    )

    await db.contact_submissions.insert_one(
        submission.model_dump()
    )

    return submission


# ----------------------------------------------------
# ROBOTS
# ----------------------------------------------------

@app.get(
    "/robots.txt",
    response_class=PlainTextResponse
)
async def robots():

    return """User-agent: *
Allow: /

Sitemap: https://cryptobeginner.in/sitemap.xml
"""


# ----------------------------------------------------
# SITEMAP
# ----------------------------------------------------

@app.get("/sitemap.xml")
async def sitemap():

    base = "https://cryptobeginner.in"

    urls = [
        "/",
        "/learn",
        "/dictionary",
        "/blog",
        "/about",
        "/contact",
        "/privacy",
        "/terms",
        "/disclaimer",
        "/cookie-policy"
    ]

    lessons = await db.lessons.find(
        {},
        {"slug": 1}
    ).to_list(500)

    blogs = await db.blog.find(
        {},
        {"slug": 1}
    ).to_list(500)

    for lesson in lessons:
        urls.append(
            "/learn/" + lesson["slug"]
        )

    for blog in blogs:
        urls.append(
            "/blog/" + blog["slug"]
        )

    xml = """<?xml version="1.0" encoding="UTF-8"?>"""

    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

    for url in urls:

        xml += f"""
<url>
<loc>{base}{url}</loc>
</url>
"""

    xml += "</urlset>"

    return Response(
        content=xml,
        media_type="application/xml"
    )

# ----------------------------------------------------
# STARTUP
# ----------------------------------------------------

@app.on_event("startup")
async def startup():

    try:

        # Seed Lessons
        if await db.lessons.count_documents({}) == 0:

            await db.lessons.insert_many(LESSONS)

            logger.info(f"Seeded {len(LESSONS)} lessons")

        # Seed Blog
        if await db.blog.count_documents({}) == 0:

            posts = []

            for i, post in enumerate(BLOG_POSTS):

                p = post.copy()

                p["id"] = str(uuid.uuid4())

                p["created_at"] = (
                    datetime.now(timezone.utc) -
                    timedelta(days=i)
                ).isoformat()

                posts.append(p)

            await db.blog.insert_many(posts)

            logger.info(f"Seeded {len(posts)} blog posts")

        # Seed Glossary
        if await db.glossary.count_documents({}) == 0:

            await db.glossary.insert_many(GLOSSARY)

            logger.info(f"Seeded {len(GLOSSARY)} glossary terms")

    except Exception as e:

        logger.exception(e)


# ----------------------------------------------------
# SHUTDOWN
# ----------------------------------------------------

@app.on_event("shutdown")
async def shutdown():

    client.close()

    logger.info("MongoDB Closed")

# ----------------------------------------------------
# CHATBOT
# ----------------------------------------------------

@api_router.post("/chat")
async def chat(req: ChatRequest):
    try:

        response = client_ai.models.generate_content(
            model="gemini-flash-lite-latest",
            contents=f"""
You are Crypto Beginner AI.

Rules:
- Answer ONLY about cryptocurrency.
- If the question is unrelated, reply:
'I specialize in Cryptocurrency and Blockchain education.'

Question:
{req.message}
"""
        )

        return {
            "reply": response.text
        }

    except Exception as e:
        print("Gemini Error:", e)

        return {
            "reply": str(e)
        }

# ----------------------------------------------------
# AUTO CONTENT GENERATION (daily cron)
# ----------------------------------------------------

BLOG_CATEGORIES = ["Bitcoin", "Blockchain", "DeFi", "Wallets", "Security", "NFTs", "Regulation", "Trading Basics"]
LESSON_LEVELS = ["beginner", "intermediate", "security"]

CONTENT_SAFETY_RULES = """
Rules you must always follow:
- This is EDUCATIONAL content for complete beginners. Never give financial advice.
- Never predict future prices or tell the reader to buy/sell anything.
- Never claim a specific coin is a "good investment" or guaranteed to rise.
- Be factually careful: crypto facts change fast, so avoid absolute claims about
  "the current price", "the current market cap", or anything that goes stale.
  Focus on timeless concepts, mechanics, and how things work.
- Tone: clear, simple, no hype, no jargon without explaining it first.
- If the topic touches investing/trading, include a brief, natural disclaimer
  that this is not financial advice.
"""


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return re.sub(r"-+", "-", text).strip("-")[:80]


async def unique_slug(collection, base_slug: str) -> str:
    slug = base_slug
    i = 2
    while await collection.find_one({"slug": slug}, {"_id": 0, "slug": 1}):
        slug = f"{base_slug}-{i}"
        i += 1
    return slug


def extract_json(raw: str) -> dict:
    raw = raw.strip()
    if raw.startswith("```"):
        raw = re.sub(r"^```[a-zA-Z]*\n?", "", raw)
        raw = re.sub(r"\n?```$", "", raw)
    match = re.search(r"\{.*\}", raw, re.DOTALL)
    if not match:
        raise ValueError("No JSON object found in model output")
    return json.loads(match.group(0))


async def generate_blog_post():
    existing = await db.blog.find({}, {"_id": 0, "title": 1}).sort("created_at", -1).limit(40).to_list(40)
    existing_titles = [d["title"] for d in existing]

    prompt = f"""
You are a content writer for CryptoBeginner.in, a beginner crypto education site.

{CONTENT_SAFETY_RULES}

Write ONE new blog article on a specific, beginner-friendly crypto topic
(pick from categories like {", ".join(BLOG_CATEGORIES)}, or a related one).
Do NOT repeat any of these already-published titles (pick something genuinely
different, ideally a specific angle rather than a generic repeat):
{chr(10).join("- " + t for t in existing_titles) if existing_titles else "(none yet)"}

Respond with ONLY a single valid JSON object, no markdown fences, no commentary,
in exactly this shape:
{{
  "title": "string, specific and clear, under 70 characters",
  "category": "one of {BLOG_CATEGORIES}",
  "excerpt": "1-2 sentence summary, under 160 characters",
  "read_time": integer minutes (realistic, 4-9),
  "content": "600-900 words in Markdown. Use ## headers to structure it. End with a short, natural call-to-action linking to /learn using markdown link syntax.",
  "faqs": [
    {{"question": "a real question a beginner would type into Google about this topic", "answer": "a clear, 1-3 sentence answer"}},
    {{"question": "a second distinct, realistic question", "answer": "a clear, 1-3 sentence answer"}},
    {{"question": "a third distinct, realistic question", "answer": "a clear, 1-3 sentence answer"}}
  ]
}}
"""

    response = client_ai.models.generate_content(
        model="gemini-flash-lite-latest",
        contents=prompt,
    )

    data = extract_json(response.text)

    for field in ("title", "category", "excerpt", "content"):
        if not data.get(field):
            raise ValueError(f"Missing field in generated post: {field}")

    slug = await unique_slug(db.blog, slugify(data["title"]))
    category_kw = re.sub(r"[^a-zA-Z]+", "-", data.get("category", "crypto")).lower()

    post = {
        "id": str(uuid.uuid4()),
        "slug": slug,
        "title": data["title"],
        "category": data.get("category", "Bitcoin"),
        "excerpt": data["excerpt"],
        "cover_image": f"https://source.unsplash.com/1200x630/?{category_kw},crypto,finance",
        "read_time": int(data.get("read_time", 5)),
        "author": "Crypto Beginner AI",
        "content": data["content"],
        "faqs": data.get("faqs") if isinstance(data.get("faqs"), list) else [],
        "created_at": datetime.now(timezone.utc).isoformat(),
        "ai_generated": True,
    }

    await db.blog.insert_one(post.copy())
    post.pop("_id", None)
    return post


async def generate_lesson():
    counts = {}
    for level in LESSON_LEVELS:
        counts[level] = await db.lessons.count_documents({"level": level})
    target_level = min(counts, key=counts.get)

    existing = await db.lessons.find({}, {"_id": 0, "title": 1}).to_list(200)
    existing_titles = [d["title"] for d in existing]
    max_order = await db.lessons.find({"level": target_level}, {"_id": 0, "order": 1}).sort("order", -1).limit(1).to_list(1)
    next_order = (max_order[0]["order"] + 1) if max_order else 1

    prompt = f"""
You are writing one new lesson for CryptoBeginner.in's structured "{target_level}"
learning track.

{CONTENT_SAFETY_RULES}

Do NOT repeat any of these already-published lesson titles:
{chr(10).join("- " + t for t in existing_titles) if existing_titles else "(none yet)"}

Respond with ONLY a single valid JSON object, no markdown fences, no commentary,
in exactly this shape:
{{
  "title": "string, under 60 characters, e.g. 'What is a Seed Phrase?'",
  "summary": "1-2 sentence summary, under 160 characters",
  "read_time": integer minutes (realistic, 4-8),
  "content": "500-800 words in Markdown, ## headers, written for someone with zero background, appropriate for the '{target_level}' level.",
  "faqs": [
    {{"question": "a real question a beginner would type into Google about this topic", "answer": "a clear, 1-3 sentence answer"}},
    {{"question": "a second distinct, realistic question", "answer": "a clear, 1-3 sentence answer"}},
    {{"question": "a third distinct, realistic question", "answer": "a clear, 1-3 sentence answer"}}
  ]
}}
"""

    response = client_ai.models.generate_content(
        model="gemini-flash-lite-latest",
        contents=prompt,
    )

    data = extract_json(response.text)

    for field in ("title", "summary", "content"):
        if not data.get(field):
            raise ValueError(f"Missing field in generated lesson: {field}")

    slug = await unique_slug(db.lessons, slugify(data["title"]))

    lesson = {
        "slug": slug,
        "title": data["title"],
        "level": target_level,
        "order": next_order,
        "read_time": int(data.get("read_time", 5)),
        "summary": data["summary"],
        "content": data["content"],
        "faqs": data.get("faqs") if isinstance(data.get("faqs"), list) else [],
        "ai_generated": True,
    }

    await db.lessons.insert_one(lesson.copy())
    lesson.pop("_id", None)
    return lesson


@api_router.get("/admin/auto-generate")
async def auto_generate_content(request: Request):
    if not CRON_SECRET:
        raise HTTPException(500, "CRON_SECRET is not configured on the server")

    auth_header = request.headers.get("authorization", "")
    if auth_header != f"Bearer {CRON_SECRET}":
        raise HTTPException(401, "Unauthorized")

    result = {"blog_post": None, "lesson": None, "errors": []}

    try:
        result["blog_post"] = await generate_blog_post()
    except Exception as e:
        logger.error(f"Auto blog generation failed: {e}")
        result["errors"].append(f"blog: {e}")

    # Lessons are curriculum-ordered, so generate less often — roughly every
    # 3rd day — to avoid the track growing faster than it can be curated.
    if datetime.now(timezone.utc).timetuple().tm_yday % 3 == 0:
        try:
            result["lesson"] = await generate_lesson()
        except Exception as e:
            logger.error(f"Auto lesson generation failed: {e}")
            result["errors"].append(f"lesson: {e}")

    return result


# ----------------------------------------------------
# ADMIN PANEL (auth + data endpoints)
# ----------------------------------------------------

ADMIN_TOKEN_TTL = 60 * 60 * 12  # 12 hours


def make_admin_token() -> str:
    if not ADMIN_PASSWORD:
        raise HTTPException(500, "ADMIN_PASSWORD is not configured on the server")
    payload = json.dumps({"exp": int(time.time()) + ADMIN_TOKEN_TTL})
    payload_b64 = base64.urlsafe_b64encode(payload.encode()).decode()
    sig = hmac.new(ADMIN_PASSWORD.encode(), payload_b64.encode(), hashlib.sha256).hexdigest()
    return f"{payload_b64}.{sig}"


def verify_admin_token(token: str) -> bool:
    if not ADMIN_PASSWORD or not token or "." not in token:
        return False
    payload_b64, sig = token.rsplit(".", 1)
    expected_sig = hmac.new(ADMIN_PASSWORD.encode(), payload_b64.encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(sig, expected_sig):
        return False
    try:
        payload = json.loads(base64.urlsafe_b64decode(payload_b64.encode()))
    except Exception:
        return False
    return payload.get("exp", 0) > time.time()


def require_admin(request: Request):
    auth_header = request.headers.get("authorization", "")
    token = auth_header[7:] if auth_header.startswith("Bearer ") else ""
    if not verify_admin_token(token):
        raise HTTPException(401, "Unauthorized")


class AdminLogin(BaseModel):
    password: str


@api_router.post("/admin/login")
async def admin_login(payload: AdminLogin):
    if not ADMIN_PASSWORD:
        raise HTTPException(500, "ADMIN_PASSWORD is not configured on the server")
    if not hmac.compare_digest(payload.password, ADMIN_PASSWORD):
        raise HTTPException(401, "Incorrect password")
    return {"token": make_admin_token()}


@api_router.get("/admin/contact-submissions")
async def list_contact_submissions(request: Request):
    require_admin(request)
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return {"data": items}


@api_router.get("/admin/content")
async def list_ai_content(request: Request):
    require_admin(request)
    posts = await db.blog.find({"ai_generated": True}, {"_id": 0, "content": 0}).sort("created_at", -1).to_list(200)
    lessons = await db.lessons.find({"ai_generated": True}, {"_id": 0, "content": 0}).to_list(200)
    return {"blog_posts": posts, "lessons": lessons}


class ManualBlogPost(BaseModel):
    title: str = Field(min_length=1, max_length=140)
    category: str = Field(default="Bitcoin", max_length=40)
    excerpt: str = Field(min_length=1, max_length=300)
    content: str = Field(min_length=1)
    cover_image: Optional[str] = None
    read_time: int = Field(default=5, ge=1, le=60)
    faqs: Optional[List[dict]] = None


@api_router.get("/admin/blog")
async def admin_list_blog(request: Request):
    require_admin(request)
    posts = await db.blog.find({}, {"_id": 0, "content": 0}).sort("created_at", -1).to_list(300)
    return {"data": posts}


@api_router.post("/admin/blog")
async def admin_create_blog(payload: ManualBlogPost, request: Request):
    require_admin(request)

    slug = await unique_slug(db.blog, slugify(payload.title))
    category_kw = re.sub(r"[^a-zA-Z]+", "-", payload.category or "crypto").lower()

    post = {
        "id": str(uuid.uuid4()),
        "slug": slug,
        "title": payload.title,
        "category": payload.category or "Bitcoin",
        "excerpt": payload.excerpt,
        "cover_image": payload.cover_image or f"https://source.unsplash.com/1200x630/?{category_kw},crypto,finance",
        "read_time": payload.read_time,
        "author": "Crypto Beginner",
        "content": payload.content,
        "faqs": payload.faqs or [],
        "created_at": datetime.now(timezone.utc).isoformat(),
        "ai_generated": False,
    }

    await db.blog.insert_one(post.copy())
    post.pop("_id", None)
    return post


@api_router.delete("/admin/blog/{slug}")
async def admin_delete_blog(slug: str, request: Request):
    require_admin(request)
    result = await db.blog.delete_one({"slug": slug})
    if result.deleted_count == 0:
        raise HTTPException(404, "Post not found")
    return {"deleted": slug}
    
# ----------------------------------------------------
# ROUTER
# ----------------------------------------------------

app.include_router(api_router)


# ----------------------------------------------------
# CORS
# ----------------------------------------------------

app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "*"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)


# ----------------------------------------------------
# RUN SERVER
# ----------------------------------------------------

if __name__ == "__main__":

    import uvicorn

    uvicorn.run(

        "server:app",

        host="0.0.0.0",

        port=8001,

        reload=True

    )