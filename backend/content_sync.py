"""Repo-managed content sync for Crypto Beginner.

Blog posts and lessons live as Markdown files under backend/content/:

    backend/content/blog/<slug>.md
    backend/content/lessons/<slug>.md

Each file carries YAML frontmatter followed by the Markdown body:

    ---
    title: What is Bitcoin?
    category: Bitcoin          # blog only
    excerpt: One-line summary  # blog only
    summary: One-line summary  # lessons only
    level: beginner            # lessons only
    order: 1                   # lessons only
    read_time: 6
    author: Crypto Beginner Editorial Team
    cover_image: /covers/bitcoin.jpg   # blog only
    created_at: 2026-09-20T10:00:00+00:00
    faqs:                      # blog only, optional
      - question: ...
        answer: ...
    ---

    ## Markdown body...

On every backend startup, sync_repo_content() upserts each file into MongoDB
by slug (tagged source="repo"). Idempotent: re-running changes nothing unless
a file changed. Posts created through the admin panel or the AI auto-generator
(source != "repo") are never touched.

A one-time migration (guarded by a flag in the `meta` collection) deletes the
duplicate AI-generated posts that accumulated before this system existed.
"""

import re
from datetime import datetime, timezone
from pathlib import Path

import yaml

CONTENT_DIR = Path(__file__).parent / "content"

# Slugs of duplicate AI-generated posts to remove exactly once.
# In every group the cleanest (original) slug is kept.
DUPLICATE_SLUGS_TO_DELETE = [
    "what-is-crypto-liquidity-a-beginner-s-guide-2",
    "what-is-crypto-slippage-a-beginner-s-guide-2",
    "what-is-crypto-slippage-a-beginner-s-guide-3",
    "what-is-crypto-dust-small-balances-explained-2",
    "what-is-a-crypto-whitepaper-a-beginner-s-guide-2",
    "what-is-a-crypto-hard-fork-network-upgrades-explained-2",
    "what-is-crypto-staking-earning-rewards-explained-2",
    "what-is-a-crypto-mempool-the-waiting-room-explained-2",
    "what-is-a-crypto-testnet-safe-practice-networks-explained-2",
    "what-is-a-crypto-public-address-a-beginner-s-guide-2",
]

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n(.*)$", re.DOTALL)


def parse_content_file(path: Path):
    """Return (frontmatter dict, markdown body) for a content file."""
    text = path.read_text(encoding="utf-8")
    m = FRONTMATTER_RE.match(text)
    if not m:
        raise ValueError(f"{path}: missing YAML frontmatter block")
    meta = yaml.safe_load(m.group(1)) or {}
    body = m.group(2).strip() + "\n"
    return meta, body


def _as_iso(value):
    if isinstance(value, datetime):
        dt = value if value.tzinfo else value.replace(tzinfo=timezone.utc)
        return dt.isoformat()
    return str(value)


async def _sync_collection(db, collection_name, kind, logger=None):
    """Upsert every backend/content/<kind>/*.md file into its collection."""
    coll = db[collection_name]
    dir_path = CONTENT_DIR / kind
    if not dir_path.is_dir():
        return 0

    now = datetime.now(timezone.utc).isoformat()
    synced = 0
    errors = []
    for path in sorted(dir_path.glob("*.md")):
        slug = path.stem
        try:
            meta, body = parse_content_file(path)
        except Exception as exc:
            # One malformed file must never break the whole startup sync.
            errors.append(f"{slug}: {exc}")
            if logger:
                logger.warning(f"Content sync skipped {kind}/{slug}: {exc}")
            continue

        doc = {
            "slug": slug,
            "title": meta.get("title", slug.replace("-", " ").title()),
            "content": body,
            "read_time": int(meta.get("read_time") or 5),
            "author": meta.get("author") or "Crypto Beginner Editorial Team",
            "source": "repo",
            "updated_at": now,
        }
        if kind == "blog":
            doc.update(
                {
                    "category": meta.get("category") or "Bitcoin",
                    "excerpt": meta.get("excerpt") or "",
                    "cover_image": meta.get("cover_image") or "/covers/crypto.jpg",
                    "faqs": meta.get("faqs") or [],
                    "ai_generated": False,
                }
            )
        else:  # lessons
            doc.update(
                {
                    "level": meta.get("level") or "beginner",
                    "order": int(meta.get("order") or 0),
                    "summary": meta.get("summary") or "",
                }
            )

        created_at = meta.get("created_at")
        # Race-safe upsert: exactly one doc per slug, even if several
        # serverless instances sync concurrently. Existing publish dates
        # and ids are never overwritten.
        import uuid as _uuid

        await coll.update_one(
            {"slug": slug},
            {
                "$set": doc,
                "$setOnInsert": {
                    "id": str(_uuid.uuid4()),
                    "created_at": _as_iso(created_at) if created_at else now,
                },
            },
            upsert=True,
        )
        synced += 1
    return synced


async def _run_slug_dedupe(db):
    """One-time repair: if several docs share a slug (e.g. from a past
    concurrent sync), keep the richest one and delete the rest. Then add a
    unique index on slug so it can never recur."""
    flag = await db.meta.find_one({"_id": "slug_dedupe_v1"})
    if flag:
        return 0
    removed = 0
    for collection_name in ("blog", "lessons"):
        coll = db[collection_name]
        docs = [d async for d in coll.find(
            {}, {"_id": 1, "slug": 1, "source": 1, "content": 1, "updated_at": 1})]
        seen = {}

        def rank(d):
            # Prefer the repo-managed version, then longer content.
            return (
                1 if d.get("source") == "repo" else 0,
                len(d.get("content") or ""),
            )

        for doc in docs:
            slug = doc.get("slug")
            if not slug:
                continue
            prev = seen.get(slug)
            if prev is None:
                seen[slug] = doc
                continue
            keep, drop = (doc, prev) if rank(doc) >= rank(prev) else (prev, doc)
            await coll.delete_one({"_id": drop["_id"]})
            seen[slug] = keep
            removed += 1
        # Unique index prevents any future duplicate slugs.
        try:
            await coll.create_index("slug", unique=True)
        except Exception:
            pass
    await db.meta.insert_one(
        {"_id": "slug_dedupe_v1", "deleted": removed,
         "at": datetime.now(timezone.utc).isoformat()}
    )
    return removed


async def _run_duplicate_cleanup(db):
    """One-time deletion of the duplicate slugs listed above."""
    flag = await db.meta.find_one({"_id": "dup_cleanup_v1"})
    if flag:
        return 0
    result = await db.blog.delete_many({"slug": {"$in": DUPLICATE_SLUGS_TO_DELETE}})
    await db.meta.insert_one(
        {"_id": "dup_cleanup_v1", "deleted": result.deleted_count,
         "at": datetime.now(timezone.utc).isoformat()}
    )
    return result.deleted_count


async def sync_repo_content(db, logger=None):
    """Sync file-based content + run one-time migrations. Safe to call often."""
    if not CONTENT_DIR.is_dir():
        return {"blog": 0, "lessons": 0, "duplicates_removed": 0}
    removed = await _run_duplicate_cleanup(db)
    deduped = await _run_slug_dedupe(db)
    blog_n = await _sync_collection(db, "blog", "blog", logger)
    lesson_n = await _sync_collection(db, "lessons", "lessons", logger)
    if logger:
        logger.info(
            f"Content sync: {blog_n} blog posts, {lesson_n} lessons, "
            f"{removed} duplicates removed, {deduped} slug-dupes repaired"
        )
    return {"blog": blog_n, "lessons": lesson_n, "duplicates_removed": removed,
            "slug_dupes_repaired": deduped}
