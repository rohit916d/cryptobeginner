# Crypto Beginner — Product Requirements Document

**Brand**: Crypto Beginner
**Domain**: cryptobeginner.in
**Tagline**: Learn Crypto From Zero
**Mission**: Beginner-friendly crypto education — no hype, no financial advice.

---

## Original Problem Statement
Build Version-1 MVP of a beginner-friendly crypto education platform with: dark dashboard, top-10 live crypto prices (CoinGecko), market stats, Learning Center, Crypto Dictionary, Blog system, About, Contact, Privacy Policy, Terms, Disclaimer, Cookie Policy. Focus on beautiful dark amber/gold UI and SEO. NO auth, admin panel, quiz system, or AI assistant for V1.

## User Personas
1. **Absolute beginner** — heard about Bitcoin, knows nothing, wants safe entry point.
2. **Casual learner** — knows basics, wants to go deeper without trading hype.
3. **Security-conscious newcomer** — worried about scams, wants safety-first content.

## Core Requirements (static)
- Dark amber/gold premium theme, mobile-responsive
- SEO-friendly (dynamic titles, OG tags, sitemap, robots, JSON-LD)
- CoinGecko-powered live market data, 60s auto-refresh
- Educational content only — explicit "not financial advice" disclaimers
- No third-party JS trackers, ad-free

## Implemented (Feb 2026)
- **Backend** (FastAPI + MongoDB): `/api/market/top`, `/api/market/global` (CoinGecko proxy + 55s cache), `/api/lessons`, `/api/lessons/:slug`, `/api/blog`, `/api/blog/:slug`, `/api/blog/categories`, `/api/glossary`, `POST /api/contact`. Dynamic `/sitemap.xml` and `/robots.txt` from `PUBLIC_SITE_URL`. CORS restricted to `cryptobeginner.in` + preview domain.
- **Frontend pages**: Home dashboard (hero + market stats + top-10 table + path tiles), Learning Center w/ 3 tracks, 15 lesson details, Crypto A-Z Dictionary (55 terms + search + alphabet), Blog (8 articles + 6 categories), Blog detail, About, Contact (DB-only), Privacy, Terms, Disclaimer, Cookie Policy, custom 404.
- **SEO**: per-route titles, meta descriptions, canonical, OG/Twitter cards, JSON-LD (`WebSite`, `LearningResource`, `BlogPosting`), favicon.svg, og-image.svg.
- **QA**: All 13 backend tests passing. All frontend flows verified by testing agent.
- **Deployment hygiene**: Removed Made-with-Emergent badge & PostHog default key; pinned `webpack-dev-server@4.15.2` to fix CRA5 boot error.

## Backlog (next phases)
**P0** (next sprint)
- Cookie Policy / GDPR cookie consent banner
- Production CoinGecko API key (paid tier) for higher rate limits
- Newsletter capture (email list) for monetization

**P1**
- Quiz System (Beginner + Intermediate) with score tracking
- AI Crypto Guide chatbot (educational only — Claude Sonnet 4.5 or GPT-5.2)
- Tools: Profit Calculator, SIP Calculator, Compound Growth
- Auth + saved articles + learning progress

**P2**
- Admin panel (manage articles, lessons, categories)
- Multi-language (Hindi + English UI)
- Image-rich lesson illustrations
- Sponsored education partnerships
