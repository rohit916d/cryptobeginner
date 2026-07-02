from fastapi import FastAPI, APIRouter, HTTPException, Response
from fastapi.responses import PlainTextResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime, timezone, timedelta
import requests
import json
import websockets

from seed_data import LESSONS, BLOG_POSTS, GLOSSARY

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

COINGECKO_API_KEY = os.getenv("COINGECKO_API_KEY")

app = FastAPI(title="Crypto Beginner API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# -------- In-memory cache for CoinGecko (avoid rate limits) --------
_market_cache = {"data": None, "ts": None}
_global_cache = {"data": None, "ts": None}
CACHE_TTL = timedelta(seconds=55)


# -------- Models --------
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(min_length=5, max_length=4000)


# -------- Health --------
@api_router.get("/")
async def root():
    return {"service": "Crypto Beginner API", "status": "ok"}


# -------- Market: CoinGecko proxy with caching --------
@api_router.get("/market/top")
async def get_top_coins():
    now = datetime.now(timezone.utc)
    if _market_cache["data"] and _market_cache["ts"] and (now - _market_cache["ts"]) < CACHE_TTL:
        return {"data": _market_cache["data"], "cached": True}
    try:
        resp = await asyncio.to_thread(
            requests.get,
            "https://api.coingecko.com/api/v3/coins/markets",
            params={
                "vs_currency": "usd",
                "order": "market_cap_desc",
                "per_page": 10,
                "page": 1,
                "sparkline": "false",
                "price_change_percentage": "24h",
            },
            timeout=10,
        )
        resp.raise_for_status()
        data = resp.json()
        slim = [
            {
                "id": c.get("id"),
                "name": c.get("name"),
                "symbol": (c.get("symbol") or "").upper(),
                "image": c.get("image"),
                "current_price": c.get("current_price"),
                "price_change_percentage_24h": c.get("price_change_percentage_24h"),
                "market_cap": c.get("market_cap"),
                "total_volume": c.get("total_volume"),
                "market_cap_rank": c.get("market_cap_rank"),
            }
            for c in data
        ]
        _market_cache["data"] = slim
        _market_cache["ts"] = now
        return {"data": slim, "cached": False}
    except Exception as e:
        logger.error(f"CoinGecko top fetch failed: {e}")
        if _market_cache["data"]:
            return {"data": _market_cache["data"], "cached": True, "stale": True}
        raise HTTPException(status_code=503, detail="Market data temporarily unavailable")


@api_router.get("/market/global")
async def get_global_stats():
    now = datetime.now(timezone.utc)
    if _global_cache["data"] and _global_cache["ts"] and (now - _global_cache["ts"]) < CACHE_TTL:
        return {"data": _global_cache["data"], "cached": True}

    try:
        headers = {}

        if COINGECKO_API_KEY:
            headers["x-cg-demo-api-key"] = COINGECKO_API_KEY

        resp = await asyncio.to_thread(
            requests.get,
            "https://api.coingecko.com/api/v3/global",
            headers=headers,
            timeout=10
        )

        resp.raise_for_status()
        raw = resp.json().get("data", {})
        slim = {
            "total_market_cap_usd": raw.get("total_market_cap", {}).get("usd"),
            "total_volume_usd": raw.get("total_volume", {}).get("usd"),
            "btc_dominance": raw.get("market_cap_percentage", {}).get("btc"),
            "eth_dominance": raw.get("market_cap_percentage", {}).get("eth"),
            "active_cryptocurrencies": raw.get("active_cryptocurrencies"),
            "markets": raw.get("markets"),
            "market_cap_change_percentage_24h_usd": raw.get("market_cap_change_percentage_24h_usd"),
        }
        _global_cache["data"] = slim
        _global_cache["ts"] = now
        return {"data": slim, "cached": False}
    except Exception as e:
        logger.error(f"CoinGecko global fetch failed: {e}")
        if _global_cache["data"]:
            return {"data": _global_cache["data"], "cached": True, "stale": True}
        raise HTTPException(status_code=503, detail="Global stats temporarily unavailable")


# -------- Lessons --------
@api_router.get("/lessons")
async def list_lessons(level: Optional[str] = None):
    query = {"level": level} if level else {}
    cur = db.lessons.find(query, {"_id": 0, "content": 0}).sort([("level", 1), ("order", 1)])
    return await cur.to_list(200)


@api_router.get("/lessons/{slug}")
async def get_lesson(slug: str):
    doc = await db.lessons.find_one({"slug": slug}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Lesson not found")
    return doc


# -------- Glossary --------
@api_router.get("/glossary")
async def list_glossary():
    cur = db.glossary.find({}, {"_id": 0}).sort("term", 1)
    return await cur.to_list(1000)


# -------- Blog --------
@api_router.get("/blog")
async def list_blog(category: Optional[str] = None):
    query = {"category": category} if category else {}
    cur = db.blog.find(query, {"_id": 0, "content": 0}).sort("created_at", -1)
    return await cur.to_list(500)


@api_router.get("/blog/categories")
async def list_blog_categories():
    cats = await db.blog.distinct("category")
    return sorted(cats)


@api_router.get("/blog/{slug}")
async def get_blog(slug: str):
    doc = await db.blog.find_one({"slug": slug}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Article not found")
    return doc


# -------- Contact --------
@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact(payload: ContactCreate):
    submission = ContactSubmission(**payload.model_dump())
    await db.contact_submissions.insert_one(submission.model_dump())
    return submission


# -------- SEO files served from backend (also re-routed to frontend) --------
@app.get("/robots.txt", response_class=PlainTextResponse)
async def robots():
    base = os.environ.get("PUBLIC_SITE_URL", "https://cryptobeginner.in")
    return f"User-agent: *\nAllow: /\nSitemap: {base}/sitemap.xml\n"


@app.get("/sitemap.xml")
async def sitemap():
    base = os.environ.get("PUBLIC_SITE_URL", "https://cryptobeginner.in")
    urls = [
        "/", "/learn", "/dictionary", "/blog",
        "/about", "/contact", "/privacy", "/terms", "/disclaimer", "/cookie-policy",
    ]
    lessons = await db.lessons.find({}, {"_id": 0, "slug": 1}).to_list(500)
    blogs = await db.blog.find({}, {"_id": 0, "slug": 1}).to_list(500)
    urls += [f"/learn/{lesson['slug']}" for lesson in lessons]
    urls += [f"/blog/{b['slug']}" for b in blogs]

    items = "\n".join([f"  <url><loc>{base}{u}</loc></url>" for u in urls])
    xml = f"""<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
{items}
</urlset>"""
    return Response(content=xml, media_type="application/xml")


# -------- Startup: seed DB --------
@app.on_event("startup")
async def seed_db():
    try:
        # Lessons
        if await db.lessons.count_documents({}) == 0:
            await db.lessons.insert_many(LESSONS)
            logger.info(f"Seeded {len(LESSONS)} lessons")
        # Blog
        if await db.blog.count_documents({}) == 0:
            posts_to_insert = []
            for i, post in enumerate(BLOG_POSTS):
                new_post = post.copy()
                new_post["id"] = str(uuid.uuid4())
                new_post["created_at"] = (datetime.now(timezone.utc) - timedelta(days=i * 2)).isoformat()
                posts_to_insert.append(new_post)
            await db.blog.insert_many(posts_to_insert)
            logger.info(f"Seeded {len(posts_to_insert)} blog posts")
        # Glossary
        if await db.glossary.count_documents({}) == 0:
            await db.glossary.insert_many(GLOSSARY)
            logger.info(f"Seeded {len(GLOSSARY)} glossary terms")
    except Exception as e:
        logger.error(f"Seeding failed: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
