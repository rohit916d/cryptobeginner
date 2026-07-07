from fastapi import FastAPI, APIRouter, HTTPException, Response
from fastapi.responses import PlainTextResponse
from starlette.middleware.cors import CORSMiddleware

from dotenv import load_dotenv

from motor.motor_asyncio import AsyncIOMotorClient

from pydantic import BaseModel, Field, EmailStr

from pathlib import Path

from datetime import datetime, timezone, timedelta

from typing import Optional

import asyncio
import logging
import os
import requests
import uuid

from seed_data import LESSONS, BLOG_POSTS, GLOSSARY


# ----------------------------------------------------
# ENV
# ----------------------------------------------------

ROOT_DIR = Path(__file__).parent

load_dotenv(ROOT_DIR / ".env")


MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

COINGECKO_API_KEY = os.getenv("COINGECKO_API_KEY")
NEWSDATA_API_KEY = os.getenv("NEWSDATA_API_KEY")


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

_market_cache = {
    "data": None,
    "ts": None
}

_global_cache = {
    "data": None,
    "ts": None
}

_news_cache = {
    "data": None,
    "ts": None
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
        min_length=5,
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
async def get_top_coins():

    now = datetime.now(timezone.utc)

    if (
        _market_cache["data"]
        and _market_cache["ts"]
        and (now - _market_cache["ts"]) < CACHE_TTL
    ):
        return {
            "data": _market_cache["data"],
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
                "per_page": 10,
                "page": 1,
                "sparkline": "false",
                "price_change_percentage": "24h"
            },
            timeout=15
        )

        response.raise_for_status()

        coins = response.json()

        data = []

        for coin in coins:

            data.append({
                "id": coin.get("id"),
                "name": coin.get("name"),
                "symbol": coin.get("symbol", "").upper(),
                "image": coin.get("image"),
                "current_price": coin.get("current_price"),
                "price_change_percentage_24h": coin.get("price_change_percentage_24h"),
                "market_cap": coin.get("market_cap"),
                "market_cap_rank": coin.get("market_cap_rank"),
                "total_volume": coin.get("total_volume")
            })

        _market_cache["data"] = data
        _market_cache["ts"] = now

        return {
            "data": data,
            "cached": False
        }

    except Exception as e:

        logger.exception(e)

        if _market_cache["data"]:

            return {
                "data": _market_cache["data"],
                "cached": True,
                "stale": True
            }

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


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

        news = []

        news = []

for item in raw.get("results", []):

    title = (item.get("title") or "").lower()
description = (item.get("description") or "").lower()

text = title + " " + description

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