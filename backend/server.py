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