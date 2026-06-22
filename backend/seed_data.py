"""Seed data for CryptoBeginnersHub: lessons, blog posts, and glossary terms."""

LESSONS = [
    # ============== BEGINNER ==============
    {
        "slug": "what-is-bitcoin",
        "title": "What is Bitcoin?",
        "level": "beginner",
        "order": 1,
        "read_time": 6,
        "summary": "Bitcoin is the first decentralized digital currency. Learn what it is, how it works, and why it matters.",
        "content": """## A New Kind of Money

Bitcoin is the world's first decentralized digital currency. It was created in 2009 by an anonymous person (or group) known as **Satoshi Nakamoto**. Unlike the rupees, dollars, or euros in your bank account, Bitcoin is not controlled by any government, bank, or company.

## Why was Bitcoin invented?

The 2008 global financial crisis exposed how fragile traditional banking is. Bitcoin was designed as an alternative: a form of money that does not need banks to function. No middlemen, no central authority, no censorship.

## How does Bitcoin work?

Bitcoin lives on something called a **blockchain** — a public ledger that records every transaction ever made. Thousands of computers around the world keep a copy of this ledger and constantly verify it. This makes Bitcoin extremely difficult to hack or counterfeit.

When you send Bitcoin to someone:
1. Your wallet creates a digital signature using your private key.
2. The transaction is broadcast to the network.
3. Miners bundle transactions into a block and add it to the blockchain.
4. The recipient sees the Bitcoin in their wallet — usually within 10 minutes.

## Key Properties

- **Limited supply**: There will only ever be 21 million Bitcoin.
- **Borderless**: Send it anywhere in the world, 24/7.
- **Pseudonymous**: Transactions are public but tied to wallet addresses, not names.
- **Volatile**: The price can swing significantly. Never invest more than you can afford to lose.

## Educational disclaimer

This page is for education only. It is not financial advice. Always do your own research before interacting with any cryptocurrency.""",
    },
    {
        "slug": "what-is-blockchain",
        "title": "What is Blockchain?",
        "level": "beginner",
        "order": 2,
        "read_time": 5,
        "summary": "Blockchain is the engine that powers most cryptocurrencies. Here's how it really works, in plain English.",
        "content": """## Imagine a Shared Notebook

A blockchain is a special kind of database — think of it as a notebook shared by millions of people around the world. Whenever someone writes a new page (a "block"), everyone updates their copy. Once a page is written, **it can never be erased or changed**.

## Three properties that make blockchain special

1. **Decentralized** — No single person, company, or government controls it.
2. **Transparent** — Anyone can inspect every entry, ever.
3. **Tamper-proof** — Each new block is cryptographically linked to the previous one, like a chain.

## A practical example

When you send Bitcoin to a friend, the transaction is recorded on the Bitcoin blockchain. Years later, anyone can still look up that transaction. But because addresses are pseudonymous, your real name is not attached.

## Beyond money

Blockchain is not only used for cryptocurrency. It powers:
- Decentralized apps (dApps)
- NFTs and digital art
- Supply-chain tracking
- Identity verification

## In one sentence

A blockchain is a public, append-only ledger that lets people coordinate without trusting any central authority.""",
    },
    {
        "slug": "what-is-cryptocurrency",
        "title": "What is Cryptocurrency?",
        "level": "beginner",
        "order": 3,
        "read_time": 5,
        "summary": "Cryptocurrency is digital money secured by cryptography. Learn the basics and types.",
        "content": """## Money for the Internet Age

Cryptocurrency is digital money that uses **cryptography** for security. It lives on a blockchain and can be sent peer-to-peer, anywhere in the world, without a bank.

## Common types

- **Bitcoin (BTC)** — The original, most valuable cryptocurrency. Often called "digital gold."
- **Ethereum (ETH)** — Programmable money. Powers smart contracts, DeFi and NFTs.
- **Stablecoins (USDT, USDC)** — Pegged 1:1 with the US dollar to reduce volatility.
- **Altcoins** — Any cryptocurrency other than Bitcoin (Solana, Cardano, etc.).

## How do you store cryptocurrency?

In a **wallet**. A wallet holds the secret keys that let you spend your coins. There are two main kinds:
- **Hot wallets** — Connected to the internet. Convenient but riskier.
- **Cold wallets** — Offline hardware devices. Slower to use but much safer.

## A reality check

Crypto prices are highly volatile. Many projects fail. Scams are common. Treat this space as you would any high-risk emerging technology — with curiosity and caution.""",
    },
    {
        "slug": "what-is-a-wallet",
        "title": "What is a Wallet?",
        "level": "beginner",
        "order": 4,
        "read_time": 5,
        "summary": "A crypto wallet doesn't actually 'hold' your coins — it holds your keys. Here's what that means.",
        "content": """## Wallets Hold Keys, Not Coins

This is the single most important idea: a crypto wallet does **not** store your coins. Your coins live on the blockchain. The wallet stores your **private keys** — the secret codes that prove you own those coins.

> If someone gets your private key, they get your money. Full stop.

## Types of wallets

| Type | Example | Security | Convenience |
|------|---------|----------|-------------|
| Hot (mobile / browser) | MetaMask, Trust Wallet | Medium | High |
| Cold (hardware) | Ledger, Trezor | Very High | Medium |
| Custodial (exchange) | Binance, Coinbase | You don't own the keys | Highest |

## Seed phrase: your master password

When you create a wallet, you receive a **12 or 24-word seed phrase**. This is the master backup of your wallet. Whoever has it has complete control.

**Golden rules:**
- Write it down on paper. Never digital.
- Never share it with anyone — not even support agents.
- Store copies in two safe physical locations.

## Your first wallet

For learning: a mobile wallet like Trust Wallet is fine.
For holding meaningful value: invest in a hardware wallet.""",
    },
    {
        "slug": "what-is-an-exchange",
        "title": "What is an Exchange?",
        "level": "beginner",
        "order": 5,
        "read_time": 5,
        "summary": "Exchanges are where you trade crypto. Understand centralized vs. decentralized and how to stay safe.",
        "content": """## The Marketplace of Crypto

A crypto exchange is a platform where you can buy, sell, and trade cryptocurrencies. They come in two main flavors.

## Centralized Exchanges (CEX)

Operated by a company. You create an account, complete KYC (identity verification), deposit funds, and trade.

**Examples:** Binance, Coinbase, Kraken, WazirX.

**Pros:** Easy onboarding, high liquidity, fiat support.
**Cons:** You don't truly own your coins — the exchange does. Hacks and bankruptcies (FTX, Mt. Gox) have caused massive losses.

## Decentralized Exchanges (DEX)

Smart contracts on a blockchain. You connect your wallet directly — no account, no KYC.

**Examples:** Uniswap, PancakeSwap, Curve.

**Pros:** You stay in control of your keys. Permissionless.
**Cons:** Higher learning curve, smart-contract risk, no customer support.

## Best practice

> "Not your keys, not your coins."

Use a CEX to buy and sell. Withdraw long-term holdings to a self-custody wallet you control.""",
    },
    # ============== INTERMEDIATE ==============
    {
        "slug": "defi-basics",
        "title": "DeFi Basics",
        "level": "intermediate",
        "order": 1,
        "read_time": 7,
        "summary": "Decentralized Finance lets you lend, borrow, and trade without banks. Here's how it works.",
        "content": """## Banking without Banks

**Decentralized Finance (DeFi)** is a stack of financial services built on public blockchains — primarily Ethereum. Instead of banks and brokers, smart contracts execute everything automatically.

## What can you do in DeFi?

- **Lend & earn interest** — Deposit crypto into protocols like Aave and earn yield.
- **Borrow** — Use crypto as collateral to borrow other crypto.
- **Swap** — Trade tokens instantly on DEXs like Uniswap.
- **Provide liquidity** — Earn fees by adding tokens to liquidity pools.
- **Yield farm** — Move funds across protocols hunting the best returns.

## The risks are real

- **Smart-contract bugs** can drain entire pools in seconds.
- **Impermanent loss** for liquidity providers when prices move.
- **Rug pulls** — anonymous teams disappearing with funds.
- **Liquidation cascades** during volatile market crashes.

## A beginner's mindset

Start with audited blue-chip protocols (Aave, Uniswap, Lido). Use small amounts. Read the docs. Never deposit life-savings.""",
    },
    {
        "slug": "staking",
        "title": "Staking",
        "level": "intermediate",
        "order": 2,
        "read_time": 5,
        "summary": "Staking lets you earn rewards by helping secure a blockchain. Here's how it actually works.",
        "content": """## Earning by Helping Secure the Network

**Staking** is the process of locking up cryptocurrency to help validate transactions on a Proof-of-Stake (PoS) blockchain. In return, you earn rewards — similar to interest on a savings account.

## How it works

1. You lock (stake) tokens through a validator.
2. The blockchain randomly selects validators to confirm new blocks.
3. Validators earn token rewards, which they share with stakers.

## Popular networks that support staking

- Ethereum (ETH)
- Solana (SOL)
- Cardano (ADA)
- Polkadot (DOT)

## Risks to know

- **Lock-up periods**: Funds may be locked for days or weeks.
- **Slashing**: Misbehaving validators get penalized — and so do their stakers.
- **Smart-contract risk** with liquid-staking protocols.
- **Token price volatility** can wipe out your rewards.

## Educational note

This is general information only — not investment advice.""",
    },
    {
        "slug": "smart-contracts",
        "title": "Smart Contracts",
        "level": "intermediate",
        "order": 3,
        "read_time": 5,
        "summary": "Smart contracts are self-executing agreements written in code. They power most of crypto.",
        "content": """## Agreements That Run Themselves

A **smart contract** is code that lives on a blockchain. It automatically executes when specific conditions are met — no lawyers, no escrow, no middleman.

## A simple analogy

Think of a vending machine. You put a coin in, press a button, and a snack falls out. The machine doesn't need a cashier. A smart contract is the same idea — but for money, ownership, and digital agreements.

## What can smart contracts do?

- Send tokens automatically when triggered.
- Lock funds until a date or condition.
- Distribute royalties to NFT creators forever.
- Run entire decentralized exchanges.

## Limitations and risks

- **Bugs are forever** — once deployed, smart-contract code is usually permanent.
- **Exploits can be catastrophic** — hundreds of millions have been lost to bugs.
- **Oracle risk** — contracts rely on external data feeds, which can be manipulated.

## Where they run

Ethereum is the most common platform, but others (Solana, Avalanche, Polygon) also support smart contracts.""",
    },
    {
        "slug": "nfts",
        "title": "NFTs",
        "level": "intermediate",
        "order": 4,
        "read_time": 5,
        "summary": "An NFT proves you own a unique digital item. They are more (and less) than memes about cartoon apes.",
        "content": """## Unique Digital Ownership

An **NFT (Non-Fungible Token)** is a one-of-a-kind token on a blockchain. Unlike Bitcoin where every coin is identical, every NFT is unique — making it perfect for representing ownership of digital art, collectibles, music, in-game items, and even real-world assets.

## What can NFTs represent?

- Digital art and collectibles
- Music albums and royalties
- Domain names (e.g., `.eth`)
- Tickets and memberships
- In-game items

## How they work

1. A creator "mints" an NFT through a smart contract.
2. The smart contract stores: the owner's wallet address, the token's ID, and a link to the media.
3. The NFT can be transferred or sold like any other token.

## The honest reality

NFT prices crashed massively after 2022. Many projects were pure speculation. The technology, however, remains genuinely useful for proving digital ownership.

## Educational reminder

Never buy NFTs (or anything) because of FOMO. Treat them as collectibles, not investments.""",
    },
    {
        "slug": "layer-1-vs-layer-2",
        "title": "Layer 1 vs Layer 2",
        "level": "intermediate",
        "order": 5,
        "read_time": 5,
        "summary": "L1 is the main blockchain. L2 sits on top to make it faster and cheaper. Here's why both matter.",
        "content": """## Two Layers, One Goal: Scale

As blockchains grew popular, they got slow and expensive. The community responded with a layered design.

## Layer 1 (L1) — The Base

The main blockchain. It handles security, consensus, and final settlement.

**Examples:** Bitcoin, Ethereum, Solana, Avalanche.

**Strengths:** Maximum security and decentralization.
**Weakness:** Slower and more expensive at scale.

## Layer 2 (L2) — The Highway

Built on top of an L1, bundling many transactions together and posting summaries back to the L1.

**Examples:** Arbitrum, Optimism, Base, Polygon zkEVM (all on Ethereum); Lightning Network (on Bitcoin).

**Strengths:** Much faster, much cheaper.
**Weakness:** Slightly different security assumptions; requires bridging.

## A simple analogy

L1 is the highway authority — slow but extremely reliable. L2s are bus services running on top — fast and cheap, but they ultimately depend on the highway being there.

## Why beginners should care

Most modern crypto apps run on L2s today. Knowing the difference helps you avoid paying $50 in gas fees when you could pay $0.10.""",
    },
    # ============== SECURITY ==============
    {
        "slug": "crypto-scams",
        "title": "Crypto Scams",
        "level": "security",
        "order": 1,
        "read_time": 6,
        "summary": "Scammers love crypto's irreversibility. Here are the top scam patterns and how to avoid them.",
        "content": """## Crypto Transactions are Final

In crypto, there is no "chargeback." If you send funds to a scammer, they're gone. This is why scams thrive — and why you need to know the patterns.

## Top scam patterns

### 1. Giveaway scams
"Send 1 ETH, get 2 ETH back!" — celebrity impersonator on Twitter/X. **Always fake.**

### 2. Romance / pig-butchering scams
A stranger from a dating app slowly builds trust, then introduces you to a "great" trading platform. You "make profits" but can never withdraw.

### 3. Fake support
Someone on Discord or Telegram DMs you offering "help." They ask for your seed phrase or to "verify" via a malicious link.

### 4. Investment Ponzi schemes
"Guaranteed 1% daily returns!" — Math doesn't lie. If it sounds too good to be true, it always is.

### 5. Job offers
Fake recruiters send you a "coding test" or "wallet test" file that drains your funds when opened.

## Universal red flags

- Urgency ("act now or lose out")
- Guaranteed returns
- Anyone asking for your seed phrase
- Unsolicited DMs
- Links that look almost like the real domain

## Golden rule

**Never share your seed phrase. No legitimate service will ever ask for it.**""",
    },
    {
        "slug": "fake-airdrops",
        "title": "Fake Airdrops",
        "level": "security",
        "order": 2,
        "read_time": 4,
        "summary": "Airdrops can be legitimate — but most are bait. Learn how to spot the difference.",
        "content": """## What is an Airdrop?

An **airdrop** is when a crypto project distributes free tokens to wallets — usually to bootstrap a community or reward early users.

## How scammers weaponize them

1. Tokens magically appear in your wallet.
2. They have an "official" looking name and a website link.
3. You visit the site and connect your wallet to "claim."
4. The site requests a malicious signature — and drains your funds.

## How to stay safe

- **Never interact with random tokens** in your wallet. Just ignore them.
- **Use a burner wallet** for any airdrop you do want to claim.
- **Verify the project** via two official sources (Twitter, Discord, CoinGecko) before connecting.
- **Read every signature request carefully** — never blindly approve.

## Real vs. fake

Real airdrops (Uniswap, Arbitrum, Optimism) are announced publicly, well in advance, with very clear official documentation. If you "discover" an airdrop nobody else is talking about, it's almost certainly a trap.""",
    },
    {
        "slug": "wallet-safety",
        "title": "Wallet Safety",
        "level": "security",
        "order": 3,
        "read_time": 5,
        "summary": "Securing your wallet is the #1 skill in crypto. Here's a beginner-friendly safety checklist.",
        "content": """## Your Wallet, Your Responsibility

In crypto, you are your own bank. That's powerful — and dangerous. Most lost funds aren't due to hacks; they're due to user mistakes.

## The wallet safety checklist

1. **Write down your seed phrase on paper** — never store digitally.
2. **Use two physical backups** — fire-proof safes are ideal.
3. **Buy a hardware wallet** for anything you can't afford to lose.
4. **Verify download URLs** — fake MetaMask sites are everywhere.
5. **Enable a wallet password / biometric lock**.
6. **Use different wallets** for daily use vs. long-term holdings.
7. **Never copy-paste addresses** without double-checking the first and last 4 characters.
8. **Bookmark official dApp URLs** to avoid phishing.

## Advanced (worth it)

- Use a **passphrase** (25th word) on your hardware wallet.
- Use **multi-sig** wallets for very large holdings.
- Run security check apps like **Revoke.cash** quarterly to revoke risky token approvals.

## Final wisdom

You won't lose your funds because someone "hacks" the blockchain. You'll lose them because you fell for one moment of inattention. Build careful habits early.""",
    },
    {
        "slug": "phishing-attacks",
        "title": "Phishing Attacks",
        "level": "security",
        "order": 4,
        "read_time": 5,
        "summary": "Phishing is the #1 attack vector in crypto. Learn the tricks attackers use — and how to defeat them.",
        "content": """## Phishing: The Most Common Crypto Attack

**Phishing** is when an attacker tricks you into giving up credentials or signing a malicious transaction. In crypto, one careless click can drain a wallet in seconds.

## Common phishing vectors

- **Email** — "Your Binance account is locked, click here."
- **Search ads** — Fake MetaMask, fake Uniswap at the top of Google.
- **Discord DMs** — "Mod" asking you to verify.
- **Wallet pop-ups** — Look-alike sites asking to "reconnect."
- **Twitter replies** — A bot impersonating support under a tweet.

## Defenses that actually work

1. **Bookmark official dApp URLs** — never use Google to find them.
2. **Inspect every signature** in your wallet before signing.
3. **Treat every DM as suspicious** — official support never DMs first.
4. **Hover over links** before clicking to see the true URL.
5. **Enable 2FA** (authenticator app, not SMS) on every exchange account.
6. **Use a password manager** — it won't auto-fill on a fake domain.

## A useful habit

Before signing any wallet transaction, ask yourself: "What is this signature giving away?" If you don't know — don't sign.""",
    },
    {
        "slug": "seed-phrase-protection",
        "title": "Seed Phrase Protection",
        "level": "security",
        "order": 5,
        "read_time": 5,
        "summary": "Your seed phrase is the master key to your crypto. Protect it like your life depends on it.",
        "content": """## What is a Seed Phrase?

A **seed phrase** (also called a recovery phrase or mnemonic) is a sequence of 12 or 24 random words. It's the master backup of your wallet — anyone with these words can recreate the wallet and steal everything.

## How to store a seed phrase safely

### DO
- Write it down on **paper** with a pen.
- Keep **two copies** in separate physical locations.
- Consider engraving it on **stainless steel** for fire/water resistance.
- Use a **safe** or safety deposit box for very large holdings.

### DO NOT
- Take a screenshot.
- Type it into Notes, Word, or any cloud document.
- Email it or store it in Google Drive / iCloud.
- Photograph it.
- Share it with anyone — even "support."

## Common ways people lose their seed phrase

- Phone gets lost or stolen with the phrase in Notes.
- Cloud backup gets hacked.
- Spouse/partner sells the device without knowing.
- A "support agent" in Discord asks for it.
- An updated browser extension steals it via fake popup.

## A simple test

If you can't recover your wallet by re-installing the wallet app and typing in your seed — your backup isn't safe enough.

## Final word

Your seed phrase is the **only** thing standing between your crypto and a thief. Treat it with religious seriousness.""",
    },
]


BLOG_POSTS = [
    {
        "slug": "bitcoin-explained-for-absolute-beginners",
        "title": "Bitcoin Explained for Absolute Beginners",
        "category": "Bitcoin",
        "excerpt": "Confused by Bitcoin? Read this 5-minute beginner-friendly guide that explains it without any jargon.",
        "cover_image": "https://images.unsplash.com/photo-1694219782948-afcab5c095d3",
        "read_time": 6,
        "author": "CryptoBeginnersHub Team",
        "content": """If you've ever felt lost trying to understand Bitcoin, you're not alone. Most beginner content jumps straight into mining, hashing, and Merkle trees. Forget all of that for now.

## Bitcoin in one sentence

Bitcoin is **digital money that is not controlled by any bank or government**. It lives entirely on the internet, on a public network that anyone can verify.

## The three big ideas

1. **Bitcoin is scarce** — Only 21 million will ever exist. No one can print more.
2. **Bitcoin is portable** — You can carry millions across borders in your head, just by memorizing 12 words.
3. **Bitcoin is permissionless** — No one can stop you from receiving or sending it.

## What is it actually used for?

- **Store of value** — Like digital gold.
- **Sending money internationally** — Faster and cheaper than banks for large amounts.
- **Inflation hedge** — Especially in countries with unstable currencies.
- **Speculation** — Yes, many people buy it hoping the price goes up. This is risky.

## Should you buy some?

This article is **not financial advice**. Before you ever spend a rupee on crypto, learn how to safely store it, understand the risks, and only invest what you can afford to lose entirely.

Now that you have the big picture, dive into our [Learning Center](/learn) to go deeper.""",
    },
    {
        "slug": "what-is-blockchain-technology",
        "title": "What is Blockchain Technology? A No-Jargon Guide",
        "category": "Blockchain",
        "excerpt": "Blockchain is the engine behind crypto. Here's a clear, beginner-friendly explanation of how it works.",
        "cover_image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        "read_time": 7,
        "author": "CryptoBeginnersHub Team",
        "content": """Blockchain is one of those words people use confidently without really understanding it. Let's fix that.

## Imagine a Google Doc

A Google Doc that anyone in the world can read, anyone can add to (following strict rules), but **no one can ever delete or edit past entries**. That's a blockchain.

## Why does this matter?

Because for the first time, two strangers anywhere in the world can transfer value, sign agreements, and prove ownership of digital things — without trusting any middleman.

## The three pillars

- **Decentralization** — Thousands of computers, not one company, run the network.
- **Cryptography** — Mathematical guarantees that records can't be forged.
- **Consensus** — A rulebook everyone agrees on for adding new entries.

## Beyond crypto

Blockchains power:
- DeFi (decentralized finance)
- NFTs and digital art
- Supply-chain tracking
- Decentralized identity
- Cross-border payments

## A reality check

Blockchain is not a magic solution to every problem. For most everyday tasks, a regular database is faster and cheaper. Blockchain shines where **trustlessness** matters.""",
    },
    {
        "slug": "top-5-crypto-scams-to-avoid",
        "title": "The Top 5 Crypto Scams Beginners Must Avoid",
        "category": "Security",
        "excerpt": "Crypto scams are everywhere. Here's the playbook to spot and avoid the most common ones in 2026.",
        "cover_image": "https://images.unsplash.com/photo-1614064642639-e398cf05badb",
        "read_time": 7,
        "author": "CryptoBeginnersHub Team",
        "content": """Scams in crypto don't slow down. If anything, they evolve every year. Here's our 2026 watchlist.

## 1. Pig-butchering scams
Long-con scams where a stranger befriends you (often via dating apps), builds trust over weeks, then introduces you to a fake "trading platform." Billions lost annually.

## 2. Fake airdrops
Unknown tokens appear in your wallet. The "claim" site drains your funds.

## 3. Approval phishing
You sign a transaction that looks routine. It quietly gives an attacker unlimited approval to spend your tokens.

## 4. Impersonation on Twitter/X
Verified-looking accounts of Vitalik Buterin, Elon Musk, etc., offering "giveaways." Always fake.

## 5. Fake recruiters and "wallet test" jobs
A "recruiter" sends a job interview test that's actually malware.

## A 3-step safety routine

1. **Use a burner wallet** for anything new.
2. **Bookmark official URLs** — never search Google for them.
3. **Read every signature** before approving.

Stay paranoid. In crypto, healthy paranoia is a feature.""",
    },
    {
        "slug": "stablecoins-explained",
        "title": "Stablecoins Explained: USDT, USDC, and Beyond",
        "category": "Altcoins",
        "excerpt": "Stablecoins are crypto's quiet workhorses. Here's what they are, how they work, and why they matter.",
        "cover_image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
        "read_time": 6,
        "author": "CryptoBeginnersHub Team",
        "content": """While Bitcoin gets the headlines, **stablecoins** are quietly becoming the most-used part of crypto.

## What is a stablecoin?

A stablecoin is a cryptocurrency designed to maintain a stable value — almost always pegged 1:1 to the US dollar.

## The big three

- **USDT (Tether)** — The oldest and most-traded. Backed by reserves.
- **USDC (Circle)** — Regulated US-based alternative. Audited regularly.
- **DAI** — Decentralized, backed by other crypto via smart contracts.

## Why are they useful?

- **Send dollars anywhere, 24/7** — instant, no banks.
- **Park during volatility** without leaving crypto.
- **Powers DeFi** — most lending and trading uses stablecoins.
- **Cheaper remittances** — especially for emerging markets.

## Risks

- **Depegs happen** — even brief ones cause panic.
- **Centralized stablecoins can be frozen** by issuers.
- **Reserves transparency** varies between issuers.

Stablecoins are arguably crypto's most useful current innovation — but they aren't risk-free.""",
    },
    {
        "slug": "how-to-create-your-first-crypto-wallet",
        "title": "How to Create Your First Crypto Wallet (Step-by-Step)",
        "category": "Guides",
        "excerpt": "A safe, beginner-friendly walkthrough of setting up your very first crypto wallet — without losing your funds.",
        "cover_image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        "read_time": 8,
        "author": "CryptoBeginnersHub Team",
        "content": """Setting up your first wallet is exciting — but rushed setups are how people lose their savings. Take it slow.

## Step 1: Choose the right wallet for you

- **Just learning?** Use a mobile wallet (Trust Wallet, MetaMask).
- **Storing real value?** Use a hardware wallet (Ledger, Trezor).

## Step 2: Download from the OFFICIAL source

Always go directly to:
- `metamask.io`
- `trustwallet.com`
- `ledger.com`

Never search Google. Ads at the top are often fake.

## Step 3: Create the wallet

The app will show you a 12-word seed phrase. **This is the master key to your wallet.**

## Step 4: Back up the seed phrase

- Write it on paper, by hand.
- Make 2 copies.
- Store in physically secure locations.
- NEVER take a screenshot or type it digitally.

## Step 5: Verify the backup

Most wallets ask you to re-type the seed to confirm. Do this carefully.

## Step 6: Send a TINY test transaction

Before sending real funds, do a $1 test from an exchange. Confirm it arrives.

## Step 7: Bookmark and learn

Bookmark the official wallet site. Spend time learning the interface before depositing anything significant.

Welcome to self-custody.""",
    },
    {
        "slug": "why-everyone-should-learn-crypto",
        "title": "Why Everyone Should Learn the Basics of Crypto",
        "category": "Beginners",
        "excerpt": "Even if you never invest, understanding crypto is becoming a basic digital literacy skill.",
        "cover_image": "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb",
        "read_time": 5,
        "author": "CryptoBeginnersHub Team",
        "content": """You don't need to "be into crypto" to learn about it. Here's why basic crypto literacy is becoming as important as basic internet literacy.

## Reason 1: It's not going away

Crypto has weathered three brutal bear markets. Major institutions, governments, and brands keep building on it.

## Reason 2: Scam protection

The more you understand, the harder it is for scammers to fool you or someone you love.

## Reason 3: Career opportunities

Crypto-related jobs are growing across engineering, design, content, legal, finance, and operations.

## Reason 4: Financial literacy

Crypto forces you to learn about money itself — inflation, custody, scarcity, fees, settlement.

## Reason 5: It's interesting

Honestly, blockchains are one of the most fascinating inventions of our lifetime. Understanding them is its own reward.

## Where to start?

- Read our [Learning Center](/learn).
- Watch the live market on the [Dashboard](/).
- Skim a few [Blog](/blog) posts.

No need to invest. Just learn.""",
    },
    {
        "slug": "defi-vs-traditional-finance",
        "title": "DeFi vs Traditional Finance: A Beginner's Comparison",
        "category": "Guides",
        "excerpt": "DeFi promises to replace banks with code. Here's an honest look at where it shines — and where it doesn't.",
        "cover_image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        "read_time": 7,
        "author": "CryptoBeginnersHub Team",
        "content": """DeFi and traditional finance (TradFi) often get pitched as enemies. The truth is more interesting.

## Where DeFi wins

- **Always-on** — 24/7/365, no business hours.
- **Borderless** — Anyone with internet can use it.
- **Transparent** — Every transaction is publicly auditable.
- **Composable** — Apps can plug into each other like LEGO.

## Where TradFi still wins

- **Consumer protection** — Chargebacks, fraud refunds.
- **Stability** — Regulated and insured deposits.
- **UX** — Decades of polish.
- **Customer service** — Real humans you can call.

## The realistic future

DeFi and TradFi will likely **converge**. Banks will use blockchain rails. DeFi will adopt better UX and compliance. The winners will combine the best of both.

## What this means for you

Don't go all-in on DeFi. Don't ignore it either. Learn enough to participate when it makes sense — and have the wisdom to know when it doesn't.""",
    },
    {
        "slug": "how-to-read-a-crypto-chart",
        "title": "How to Read a Crypto Chart (Beginner's Guide)",
        "category": "Beginners",
        "excerpt": "Candles, volume, market cap — here's how to make sense of what you see on any crypto chart.",
        "cover_image": "https://images.unsplash.com/photo-1640340434855-6084b1f4901c",
        "read_time": 6,
        "author": "CryptoBeginnersHub Team",
        "content": """Crypto charts can look intimidating. Let's break them down.

## The basics

- **Price** — How much one token costs right now.
- **24h change** — How much the price moved in the last 24 hours.
- **Market cap** — Price × total supply. The "size" of the asset.
- **Volume** — How much was traded recently. High volume = high activity.

## Candlesticks

Each candle shows price action over a time period.
- **Green candle** = price closed higher than it opened.
- **Red candle** = price closed lower.
- The "wicks" show the highs and lows reached during that period.

## A critical reminder

Charts show **past** behavior. They do not predict the future. Anyone telling you otherwise is selling something.

## What charts are good for

- Spotting trends ("Is this asset trending up or down recently?")
- Comparing assets
- Watching for support/resistance levels

## What charts are NOT good for

- Picking exact tops or bottoms
- Predicting next week's price
- Making you rich quickly

Read charts to **understand context**, not to time the market.""",
    },
]


GLOSSARY = [
    {"term": "Address", "definition": "A unique identifier (string of letters and numbers) that represents a destination for crypto on a blockchain."},
    {"term": "Airdrop", "definition": "Free distribution of tokens to wallet addresses, often used by projects for marketing or to reward users."},
    {"term": "Altcoin", "definition": "Any cryptocurrency that is not Bitcoin. Examples include Ethereum, Solana, and Cardano."},
    {"term": "AMM", "definition": "Automated Market Maker — a smart contract that lets users swap tokens against a liquidity pool instead of an order book."},
    {"term": "Bitcoin", "definition": "The first decentralized cryptocurrency, created in 2009 by Satoshi Nakamoto. Capped at 21 million units."},
    {"term": "Block", "definition": "A bundle of validated transactions added to a blockchain."},
    {"term": "Blockchain", "definition": "A public, append-only ledger of transactions maintained by a distributed network of computers."},
    {"term": "Bridge", "definition": "A protocol that lets you move tokens between different blockchains."},
    {"term": "Burning", "definition": "Permanently removing tokens from circulation by sending them to an unspendable address."},
    {"term": "CEX", "definition": "Centralized Exchange — a company-run platform for buying and selling crypto (Binance, Coinbase)."},
    {"term": "Cold Wallet", "definition": "A crypto wallet that is offline (e.g., a hardware device), providing strong protection from online attacks."},
    {"term": "Consensus", "definition": "The rule that all nodes in a blockchain network follow to agree on the valid state of the ledger."},
    {"term": "DAO", "definition": "Decentralized Autonomous Organization — an organization governed by smart contracts and token-holder votes."},
    {"term": "DApp", "definition": "Decentralized Application — software that runs on a blockchain instead of a central server."},
    {"term": "DeFi", "definition": "Decentralized Finance — financial services (lending, trading, etc.) built on public blockchains."},
    {"term": "DEX", "definition": "Decentralized Exchange — a peer-to-peer marketplace where users trade crypto without intermediaries."},
    {"term": "Ethereum", "definition": "A programmable blockchain platform that supports smart contracts and a vast ecosystem of dApps."},
    {"term": "Fiat", "definition": "Government-issued currency like USD, EUR, or INR — not backed by a physical commodity."},
    {"term": "Fork", "definition": "A change to a blockchain's protocol. A 'hard fork' creates a new chain; a 'soft fork' is backward-compatible."},
    {"term": "Gas", "definition": "The fee paid to a blockchain network to process a transaction or run a smart contract."},
    {"term": "Halving", "definition": "A Bitcoin event (every ~4 years) that cuts the mining reward in half, slowing new supply."},
    {"term": "Hash", "definition": "A fixed-length cryptographic fingerprint of any input data."},
    {"term": "HODL", "definition": "A meme term meaning to hold crypto long-term, originally from a misspelled forum post in 2013."},
    {"term": "Hot Wallet", "definition": "A wallet connected to the internet — convenient but more vulnerable than cold storage."},
    {"term": "ICO", "definition": "Initial Coin Offering — a fundraising method where a project sells tokens to early supporters."},
    {"term": "Impermanent Loss", "definition": "The loss a liquidity provider can experience when token prices in a pool diverge."},
    {"term": "KYC", "definition": "Know Your Customer — identity verification required by regulated exchanges."},
    {"term": "Layer 1", "definition": "A base blockchain (Bitcoin, Ethereum, Solana) responsible for its own security and consensus."},
    {"term": "Layer 2", "definition": "A scaling solution built on top of a Layer 1 blockchain to process transactions faster and cheaper."},
    {"term": "Liquidity", "definition": "The ease with which an asset can be bought or sold without affecting its price."},
    {"term": "Market Cap", "definition": "Total market value of a cryptocurrency: current price × circulating supply."},
    {"term": "Mining", "definition": "The process of validating transactions and adding blocks to a Proof-of-Work blockchain in exchange for rewards."},
    {"term": "Mint", "definition": "To create new tokens or NFTs on a blockchain."},
    {"term": "NFT", "definition": "Non-Fungible Token — a unique digital asset that proves ownership of a one-of-a-kind item."},
    {"term": "Node", "definition": "A computer that participates in a blockchain network by validating and relaying transactions."},
    {"term": "Oracle", "definition": "A service that brings real-world data (prices, weather, scores) onto a blockchain."},
    {"term": "P2P", "definition": "Peer-to-Peer — direct interaction between users without intermediaries."},
    {"term": "Private Key", "definition": "A secret cryptographic key that proves ownership of a wallet and authorizes transactions."},
    {"term": "Proof of Stake", "definition": "A consensus mechanism where validators are chosen based on the amount of crypto they stake."},
    {"term": "Proof of Work", "definition": "A consensus mechanism where miners solve computational puzzles to add new blocks (used by Bitcoin)."},
    {"term": "Public Key", "definition": "The cryptographic key derived from a private key, used to generate wallet addresses."},
    {"term": "Rug Pull", "definition": "A scam where developers abandon a project and run away with investors' funds."},
    {"term": "Satoshi", "definition": "The smallest unit of Bitcoin (1 BTC = 100,000,000 satoshis). Also the name of Bitcoin's creator."},
    {"term": "Seed Phrase", "definition": "A 12 or 24-word backup of a wallet. Anyone who has it controls the funds."},
    {"term": "Smart Contract", "definition": "Self-executing code on a blockchain that runs automatically when conditions are met."},
    {"term": "Stablecoin", "definition": "A cryptocurrency designed to maintain a stable value, usually pegged to the US dollar."},
    {"term": "Staking", "definition": "Locking up tokens to help secure a Proof-of-Stake blockchain in exchange for rewards."},
    {"term": "Token", "definition": "A unit of value issued on a blockchain. Can represent currency, ownership, utility, or membership."},
    {"term": "TVL", "definition": "Total Value Locked — the total amount of crypto deposited in a DeFi protocol."},
    {"term": "Validator", "definition": "A participant in a Proof-of-Stake network who validates blocks in exchange for rewards."},
    {"term": "Wallet", "definition": "Software or hardware that stores the keys needed to access and manage crypto."},
    {"term": "Whale", "definition": "An individual or entity holding a very large amount of cryptocurrency."},
    {"term": "Whitepaper", "definition": "A formal document published by a crypto project explaining its purpose, technology, and tokenomics."},
    {"term": "Yield Farming", "definition": "Moving crypto across DeFi protocols to chase the highest returns."},
    {"term": "Zero-Knowledge Proof", "definition": "A cryptographic method to prove a statement is true without revealing the underlying data."},
]
