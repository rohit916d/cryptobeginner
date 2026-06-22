"""Backend API tests for Crypto Beginner MVP."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://learn-crypto-mvp.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# -- Health --
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"
    assert "Crypto Beginner" in data.get("service", "")


# -- Market --
def test_market_top(client):
    r = client.get(f"{API}/market/top", timeout=30)
    assert r.status_code == 200, r.text
    body = r.json()
    data = body.get("data", [])
    assert isinstance(data, list)
    assert len(data) == 10, f"Expected 10 coins, got {len(data)}"
    sample = data[0]
    for k in ("id", "name", "symbol", "current_price", "price_change_percentage_24h", "market_cap"):
        assert k in sample


def test_market_global(client):
    r = client.get(f"{API}/market/global", timeout=30)
    assert r.status_code == 200, r.text
    d = r.json().get("data", {})
    assert "total_market_cap_usd" in d
    assert "btc_dominance" in d


# -- Lessons --
def test_lessons_list(client):
    r = client.get(f"{API}/lessons")
    assert r.status_code == 200
    lessons = r.json()
    assert isinstance(lessons, list)
    assert len(lessons) >= 15, f"Expected >=15 lessons, got {len(lessons)}"
    levels = {l.get("level") for l in lessons}
    assert {"beginner", "intermediate", "security"}.issubset({lv.lower() for lv in levels if lv})


def test_lesson_detail(client):
    r = client.get(f"{API}/lessons/what-is-bitcoin")
    assert r.status_code == 200, r.text
    doc = r.json()
    assert doc.get("slug") == "what-is-bitcoin"
    assert doc.get("content"), "Lesson must contain content"


def test_lesson_404(client):
    r = client.get(f"{API}/lessons/does-not-exist-xyz")
    assert r.status_code == 404


# -- Glossary --
def test_glossary(client):
    r = client.get(f"{API}/glossary")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) >= 55, f"Expected >=55 terms, got {len(items)}"
    assert "term" in items[0] and "definition" in items[0]


# -- Blog --
def test_blog_list(client):
    r = client.get(f"{API}/blog")
    assert r.status_code == 200
    posts = r.json()
    assert isinstance(posts, list)
    assert len(posts) >= 8, f"Expected >=8 blog posts, got {len(posts)}"


def test_blog_categories(client):
    r = client.get(f"{API}/blog/categories")
    assert r.status_code == 200
    cats = r.json()
    assert isinstance(cats, list)
    assert len(cats) >= 6, f"Expected >=6 categories, got {len(cats)}"


def test_blog_detail(client):
    r = client.get(f"{API}/blog/bitcoin-explained-for-absolute-beginners")
    assert r.status_code == 200, r.text
    d = r.json()
    assert d.get("slug") == "bitcoin-explained-for-absolute-beginners"
    assert d.get("content")


def test_blog_404(client):
    r = client.get(f"{API}/blog/no-such-post")
    assert r.status_code == 404


# -- Contact --
def test_contact_create_and_validation(client):
    payload = {
        "name": "TEST_User",
        "email": "test_user@example.com",
        "subject": "TEST subject",
        "message": "TEST message body sufficiently long.",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    d = r.json()
    assert d["name"] == payload["name"]
    assert d["email"] == payload["email"]
    assert "id" in d and "created_at" in d


def test_contact_invalid_email(client):
    r = client.post(f"{API}/contact", json={"name": "X", "email": "not-an-email", "message": "hello world"})
    assert r.status_code == 422
