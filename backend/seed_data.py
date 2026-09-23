"""Seed data for Crypto Beginner: lessons, blog posts, and glossary terms."""

LESSONS = [
    # ============== BEGINNER ==============
    {
        "slug": "what-is-bitcoin",
        "title": "What is Bitcoin?",
        "level": "beginner",
        "order": 1,
        "read_time": 8,
        "summary": "Bitcoin is the first decentralized digital currency. Learn what it is, how it works, and why it matters.",
        "content": """## A New Kind of Money

Bitcoin is the world's first decentralized digital currency. It was created in 2009 by an anonymous person (or group) known as **Satoshi Nakamoto**, who published a nine-page white paper describing a system for electronic cash that needed no trusted third party. Unlike the rupees, dollars, or euros sitting in your bank account, Bitcoin is not issued or controlled by any government, central bank, or company. It exists purely as entries on a shared digital ledger that anyone in the world can verify.

## Why was Bitcoin invented?

The 2008 global financial crisis exposed how fragile traditional banking really is. Banks failed, governments printed money to bail them out, and millions of people watched their savings lose value or become temporarily inaccessible. Bitcoin was designed as a direct response: a form of money that does not depend on banks, cannot be printed at will by a central authority, and cannot be frozen or censored by a single institution. The very first block of the Bitcoin blockchain, mined in January 2009, contained a hidden message referencing a newspaper headline about bank bailouts — a quiet reminder of exactly the problem Bitcoin was trying to solve.

## How does Bitcoin actually work?

Bitcoin lives on something called a **blockchain** — a public ledger that records every single transaction ever made since 2009. Thousands of independent computers around the world, called nodes, each keep a full copy of this ledger and constantly check it against the rules of the network. This distributed structure makes Bitcoin extremely difficult to hack, alter, or shut down, because there is no single server or office that an attacker could target.

When you send Bitcoin to someone, a fairly elegant process happens behind the scenes:

1. Your wallet software creates a digital signature using your private key, proving that you — and only you — authorized the transfer.
2. This signed transaction is broadcast out to the peer-to-peer network.
3. Specialized computers called miners collect pending transactions, bundle them into a "block," and compete to add that block to the chain by solving a computational puzzle.
4. Once the block is added, the transaction is considered confirmed, and the recipient typically sees the funds in their wallet within about ten minutes.

## Key properties that make Bitcoin unique

- **Limited supply**: The Bitcoin protocol guarantees that there will only ever be 21 million coins in existence. This hard cap is enforced by code, not by policy that can be changed on a whim.
- **Borderless**: You can send Bitcoin to anyone, anywhere on the planet, at any hour of the day, without asking permission from a bank or government.
- **Pseudonymous**: Every transaction is publicly visible on the blockchain, but it is tied to a wallet address rather than a real-world name, offering a layer of privacy.
- **Volatile**: Bitcoin's price has historically swung by large percentages within short periods. It has gone through multiple boom-and-bust cycles, and past performance is never a guarantee of future results.
- **Divisible**: A single Bitcoin can be split into 100 million smaller units called satoshis, so you don't need to buy a whole coin to participate.

## Common misconceptions worth clearing up

Many newcomers assume Bitcoin transactions are completely anonymous, but they are actually traceable on the public ledger by anyone with the right tools. Others assume mining is done on a home laptop; in reality, competitive mining today relies on specialized industrial hardware. It's also worth knowing that "buying Bitcoin" on most apps usually just gives you an IOU from that company unless you withdraw the coins to a wallet where you control the private keys yourself.

## Educational disclaimer

This page is for education only. It is not financial advice. Cryptocurrency markets carry significant risk, and prices can fall as quickly as they rise. Always do your own research, understand the technology, and never invest more than you can comfortably afford to lose.""",
    },
    {
        "slug": "what-is-blockchain",
        "title": "What is Blockchain?",
        "level": "beginner",
        "order": 2,
        "read_time": 7,
        "summary": "Blockchain is the engine that powers most cryptocurrencies. Here's how it really works, in plain English.",
        "content": """## Imagine a Shared Notebook

A blockchain is a special kind of database — think of it as a notebook shared simultaneously by millions of people around the world. Whenever someone writes a new page (called a "block"), everyone holding a copy of the notebook updates it at the same time. Once a page is written and accepted by the network, it becomes essentially permanent: it can never be secretly erased, edited, or rewritten by any single participant.

## Three properties that make blockchain special

1. **Decentralized** — No single person, company, or government owns or controls the notebook. Copies are spread across thousands of independent computers, so there is no central point of failure.
2. **Transparent** — Anyone with an internet connection can inspect every entry ever recorded, going all the way back to the very first block. This openness is very different from a traditional bank ledger, which only the bank can see.
3. **Tamper-proof** — Each new block contains a cryptographic fingerprint (called a hash) of the block before it. This links every block into a chain, so changing even a tiny detail in an old block would break the fingerprint of every block that comes after it — making tampering practically impossible without the entire network noticing.

## How blocks actually get added

Adding a new block isn't as simple as typing text into a notebook. Depending on the blockchain, a mechanism called a consensus algorithm decides who gets to add the next block and verifies that the transactions inside it are valid. Bitcoin uses Proof-of-Work, where computers compete by solving a mathematical puzzle. Many newer blockchains, including Ethereum since 2022, use Proof-of-Stake, where validators lock up coins as collateral instead of burning electricity. Either way, the goal is the same: make sure no single actor can rewrite history or spend the same coin twice.

## A practical example

When you send Bitcoin to a friend, the transaction is broadcast to the network and eventually recorded permanently on the Bitcoin blockchain. Years later, anyone — a curious stranger, a journalist, or a regulator — can still look up that exact transaction using a block explorer website. However, because wallet addresses are pseudonymous strings of letters and numbers, your real name is not directly attached to the transaction unless you've linked your identity to that address somewhere else, such as on an exchange that requires ID verification.

## Public vs. private blockchains

Most of what people talk about — Bitcoin, Ethereum, Solana — are public blockchains: anyone can join, read the ledger, and submit transactions. There are also private or permissioned blockchains used by businesses and consortiums, where only approved participants can read or write data. These are popular for supply-chain tracking or interbank settlement, where full public transparency isn't desired but the tamper-resistant structure of a blockchain is still useful.

## Beyond just money

Blockchain technology is not limited to cryptocurrency. It also powers:

- **Decentralized apps (dApps)** — software that runs on a blockchain instead of a single company's server.
- **NFTs and digital art** — provable ownership records for unique digital items.
- **Supply-chain tracking** — recording the journey of a product from factory to shelf so it can't be faked.
- **Identity verification** — letting people prove credentials without relying on one central database.
- **Voting systems** — experimental projects exploring tamper-resistant digital elections.

## Trade-offs worth understanding

Blockchains aren't free lunches. Because every node stores a full copy of the ledger and verifies every transaction, blockchains are generally slower and more resource-intensive than a traditional centralized database. This is often called the "blockchain trilemma" — the challenge of balancing decentralization, security, and speed all at once. Different blockchains make different trade-offs among these three goals.

## In one sentence

A blockchain is a public, append-only ledger that lets people and machines coordinate and transact with one another without needing to trust any single central authority.""",
    },
    {
        "slug": "what-is-cryptocurrency",
        "title": "What is Cryptocurrency?",
        "level": "beginner",
        "order": 3,
        "read_time": 7,
        "summary": "Cryptocurrency is digital money secured by cryptography. Learn the basics and types.",
        "content": """## Money for the Internet Age

Cryptocurrency is digital money that uses **cryptography** — the mathematics of secure communication — to control the creation of new units and verify the transfer of funds. It lives on a blockchain and can be sent peer-to-peer, anywhere in the world, without needing a bank, a payment processor, or any other middleman to approve the transaction.

## What makes something a "cryptocurrency"?

At its core, a cryptocurrency is simply an entry in a distributed ledger, secured by cryptographic signatures. When you "own" cryptocurrency, what you actually own is a private key that lets you prove control over a certain balance recorded on that ledger. This is a fundamentally different model from a bank account, where the bank's internal database is the single source of truth and you are trusting them to maintain it honestly.

## Common types of cryptocurrency

- **Bitcoin (BTC)** — The original cryptocurrency, launched in 2009. Often referred to as "digital gold" because of its fixed supply and role as a long-term store of value for many holders.
- **Ethereum (ETH)** — Much more than just a currency. Ethereum is a programmable blockchain that powers smart contracts, decentralized finance (DeFi) applications, and NFTs.
- **Stablecoins (USDT, USDC, DAI)** — Tokens designed to hold a steady value, usually pegged 1:1 with the US dollar, making them useful for trading and payments without the wild price swings of other coins.
- **Altcoins** — A catch-all term for any cryptocurrency other than Bitcoin, including projects like Solana, Cardano, Avalanche, and thousands of smaller tokens, each with different goals and technology.
- **Utility and governance tokens** — Coins that grant holders specific rights within an application, such as voting on protocol changes or paying for services on a particular network.

## How is new cryptocurrency created?

Different networks use different methods. Bitcoin releases new coins to miners as a reward for successfully adding a block, a process that halves roughly every four years until the full 21 million supply is reached. Proof-of-Stake networks like Ethereum instead reward validators who lock up existing coins to help secure the network. Some tokens are also pre-minted entirely at launch and distributed through sales, airdrops, or team allocations rather than ongoing mining or staking.

## How do you store cryptocurrency?

Cryptocurrency is stored in a **wallet**, which is really just software or hardware that manages the private keys proving your ownership of coins on the blockchain. There are two broad categories:

- **Hot wallets** — Apps or browser extensions connected to the internet, such as mobile wallets. They are convenient for everyday use but more exposed to hacking attempts and malware.
- **Cold wallets** — Physical hardware devices that keep your private keys completely offline. They are slower to use for frequent transactions but offer much stronger protection for larger holdings.

## Why does cryptocurrency have value?

This is one of the most debated questions in the space. Supporters point to scarcity, the cost and energy required to secure the network, growing real-world adoption, and the utility of programmable money for things like remittances or decentralized applications. Critics argue that much of the value is speculative and driven by market sentiment rather than underlying cash flows. As with any asset, price is ultimately determined by what buyers and sellers agree it's worth at a given moment.

## A reality check

Crypto prices are highly volatile, and it is common for coins to lose 50% or more of their value within months. Many projects launched with big promises have failed or turned out to be outright scams. Regulation is still evolving in most countries, including India, so the legal and tax treatment of crypto can change. Treat this space the way you would any high-risk emerging technology — with genuine curiosity, careful research, and caution about how much of your money you put at risk.""",
    },
    {
        "slug": "what-is-a-wallet",
        "title": "What is a Wallet?",
        "level": "beginner",
        "order": 4,
        "read_time": 7,
        "summary": "A crypto wallet doesn't actually 'hold' your coins — it holds your keys. Here's what that means.",
        "content": """## Wallets Hold Keys, Not Coins

This is the single most important idea to understand as a beginner: a crypto wallet does **not** actually store your coins inside it. Your coins always live on the blockchain, as entries in that shared public ledger. What the wallet really stores is your **private keys** — long, secret strings of characters that mathematically prove you have the right to spend the coins associated with a particular address.

> If someone else gets your private key, they get complete control of your money. There is no password reset, no customer service line, and no way to reverse the damage. Full stop.

## How a wallet actually works

Every wallet is built around a key pair: a private key, which you must keep completely secret, and a public key (or address derived from it), which you can freely share with others so they can send you funds. When you want to make a transaction, your wallet software uses the private key to create a digital signature. The network checks that signature against your public address to confirm you are authorized to move those funds — all without your private key ever being revealed.

## Types of wallets

| Type | Example | Security | Convenience |
|------|---------|----------|-------------|
| Hot (mobile / browser) | MetaMask, Trust Wallet | Medium | High |
| Cold (hardware) | Ledger, Trezor | Very High | Medium |
| Custodial (exchange) | Binance, Coinbase, WazirX | You don't own the keys | Highest |
| Paper wallet | Printed keys/QR codes | High if stored well | Low |

Hot wallets are apps installed on a phone or browser, always connected to the internet, which makes them convenient for daily transactions but somewhat more exposed to malware and phishing. Cold wallets are physical devices that generate and store your keys completely offline, signing transactions internally so your private key never touches an internet-connected computer. Custodial wallets, offered by exchanges, are the easiest to use because the company manages the keys on your behalf — but this also means you are trusting that company not to freeze your account, get hacked, or go bankrupt.

## Seed phrase: your master password

When you create a non-custodial wallet, you are shown a **12 or 24-word seed phrase** (sometimes called a recovery phrase). This sequence of words is a human-readable backup of your private keys. Whoever possesses this phrase can restore your wallet on any device and gain full control over the funds inside it — no PIN or password required.

**Golden rules for your seed phrase:**
- Write it down on paper with a pen. Never store it digitally, in a screenshot, a notes app, or an email draft.
- Never share it with anyone — not a friend, not a "support agent," not even a family member unless it's for inheritance planning with proper precautions.
- Store copies in at least two separate, safe physical locations, ideally protected from fire and water damage.
- Consider a metal backup plate for long-term holdings, since paper can degrade or burn.

## Custodial vs. non-custodial: know the difference

If you buy crypto on an exchange and simply leave it there, you have a custodial wallet — you're trusting the platform the way you trust a bank. If you move that crypto to a wallet where only you hold the seed phrase, you have a non-custodial wallet — full responsibility, and full control, rests with you. The popular saying in the crypto community, "not your keys, not your coins," captures this trade-off well.

## Choosing your first wallet

For learning purposes and small amounts, a reputable mobile wallet like Trust Wallet or MetaMask is perfectly fine to get comfortable with sending, receiving, and interacting with apps. Once you start holding an amount of value that would genuinely hurt to lose, it's worth investing in a hardware wallet. The extra step of physically confirming each transaction on a small screen adds a meaningful layer of protection against malware and remote attackers.""",
    },
    {
        "slug": "what-is-an-exchange",
        "title": "What is an Exchange?",
        "level": "beginner",
        "order": 5,
        "read_time": 7,
        "summary": "Exchanges are where you trade crypto. Understand centralized vs. decentralized and how to stay safe.",
        "content": """## The Marketplace of Crypto

A crypto exchange is a platform where you can buy, sell, and trade cryptocurrencies — either against traditional currency like rupees and dollars, or against other cryptocurrencies. Think of it as the meeting point between people who want to buy crypto and people who want to sell it, with the exchange providing the infrastructure, order matching, and (in most cases) custody of funds while you trade. Exchanges generally come in two main flavors, each with a very different philosophy.

## Centralized Exchanges (CEX)

A centralized exchange is operated by a company that manages the platform, matches buy and sell orders, and typically holds users' funds on their behalf. To use one, you usually create an account, complete KYC (Know Your Customer) identity verification by uploading a government ID, deposit funds through bank transfer or card, and then place trades.

**Examples:** Binance, Coinbase, Kraken, WazirX, CoinDCX.

**Pros:**
- Easy onboarding for beginners, with intuitive apps and customer support.
- High liquidity, meaning large orders can usually be filled quickly at fair prices.
- Direct support for depositing and withdrawing fiat currency like INR or USD.
- Advanced trading tools such as limit orders, stop-losses, and charts.

**Cons:**
- You don't truly own your coins while they sit on the exchange — the exchange controls the private keys, not you.
- Centralized exchanges are attractive targets for hackers, and history has several painful examples: the Mt. Gox collapse in 2014 and the FTX bankruptcy in 2022 both wiped out billions of dollars belonging to users who had left funds on the platform.
- Accounts can be frozen or restricted based on the exchange's internal policies or regulatory pressure.

## Decentralized Exchanges (DEX)

A decentralized exchange runs entirely on smart contracts deployed on a blockchain, with no central company controlling user funds. Instead of creating an account, you connect your own wallet directly to the platform's website and trade straight from your wallet, with the smart contract handling the swap automatically.

**Examples:** Uniswap, PancakeSwap, Curve, dYdX.

**Pros:**
- You retain full control of your private keys and funds at all times — the exchange never takes custody.
- Permissionless access: no account creation, no KYC, no geographic restrictions in most cases.
- Transparent pricing and liquidity pools that anyone can inspect on-chain.

**Cons:**
- Steeper learning curve for beginners unfamiliar with wallets and gas fees.
- Smart-contract risk — a bug or exploit in the underlying code can lead to loss of funds.
- No customer support line to call if you make a mistake, such as sending funds to the wrong address.
- Prices can be affected by "slippage" on low-liquidity token pairs.

## How to choose between them

Many experienced crypto users end up using both types of exchange for different purposes. A centralized exchange is often the easiest way to convert rupees or dollars into crypto for the first time, thanks to simple bank integrations and customer support. A decentralized exchange becomes more useful once you're already holding crypto in your own wallet and want to swap between tokens, access newer projects, or participate in DeFi without handing custody to a third party.

## Best practice

> "Not your keys, not your coins."

A widely repeated piece of wisdom in the crypto community is to use a centralized exchange primarily as an on-ramp and off-ramp — buying and selling crypto for regular money — while withdrawing anything you intend to hold for the medium or long term to a self-custody wallet that only you control. This limits your exposure if an exchange ever gets hacked, freezes withdrawals, or shuts down unexpectedly.

## A note on regulation

Exchange regulation varies significantly by country and continues to evolve. In India, for example, crypto exchanges are required to register with the Financial Intelligence Unit and comply with KYC and tax reporting rules. Always check the current regulatory status and reputation of any exchange before depositing significant funds, and never treat an exchange balance as equivalent to money sitting safely in an insured bank account.""",
    },
    # ============== INTERMEDIATE ==============
    {
        "slug": "defi-basics",
        "title": "DeFi Basics",
        "level": "intermediate",
        "order": 1,
        "read_time": 8,
        "summary": "Decentralized Finance lets you lend, borrow, and trade without banks. Here's how it works.",
        "content": """## Banking without Banks

**Decentralized Finance**, commonly shortened to **DeFi**, is a broad stack of financial services built on public blockchains — most prominently Ethereum, though many other chains now host their own DeFi ecosystems. Instead of relying on banks, brokers, and clearinghouses to move money and enforce agreements, DeFi uses smart contracts: self-executing code that carries out financial logic automatically, transparently, and without asking anyone's permission.

## Why DeFi caught on

Traditional finance often requires paperwork, credit checks, business hours, and geographic restrictions. DeFi flips this model: anyone with an internet connection and a crypto wallet can access lending markets, exchanges, and savings products instantly, at any hour, from anywhere in the world. Every rule is written directly into open-source code that anyone can inspect, rather than hidden inside a bank's internal policies.

## What can you actually do in DeFi?

- **Lend & earn interest** — Deposit crypto into lending protocols like Aave or Compound, and borrowers pay interest that gets distributed to depositors, similar to a savings account but without a bank in the middle.
- **Borrow** — Put up crypto as collateral (usually worth more than the loan itself) to borrow other crypto, often used by traders who don't want to sell their long-term holdings.
- **Swap tokens** — Trade one cryptocurrency for another instantly using decentralized exchanges like Uniswap, powered by automated market maker algorithms rather than traditional order books.
- **Provide liquidity** — Deposit pairs of tokens into a liquidity pool so others can trade against them, earning a share of trading fees in return.
- **Yield farm** — Actively move funds between different protocols chasing the highest available returns, often by combining lending, staking, and liquidity provision strategies.
- **Use derivatives and insurance** — More advanced DeFi platforms now offer synthetic assets, options, and protocol-level insurance against smart-contract failure.

## How lending and borrowing actually works

Most DeFi lending is **overcollateralized**, meaning if you want to borrow $100 worth of a token, you typically need to deposit $150 or more worth of a different token as collateral. If the value of your collateral falls too close to the value of your loan, the protocol automatically liquidates part of your position to protect lenders — all without a human loan officer involved.

## The risks are real

- **Smart-contract bugs** can be exploited by hackers to drain entire liquidity pools within minutes, and there have been losses reaching hundreds of millions of dollars from single incidents.
- **Impermanent loss** affects liquidity providers when the price of the two tokens in a pool moves apart, sometimes leaving them with less value than if they had simply held the tokens.
- **Rug pulls** occur when anonymous teams launch a token or protocol, attract deposits, and then disappear with the funds.
- **Liquidation cascades** can happen during sharp market crashes, where falling collateral values trigger a wave of automatic liquidations that push prices down even further.
- **Regulatory uncertainty** — many governments are still figuring out how to classify and regulate DeFi activity, which could affect access or taxation in the future.

## A beginner's mindset

If you're curious about DeFi, start by researching well-established, audited protocols with a long track record, such as Aave, Uniswap, or Lido, rather than brand-new projects promising unusually high returns. Use only small amounts you're comfortable losing while you learn how transactions, gas fees, and wallet approvals work. Read the protocol's documentation, understand exactly what you're signing before approving any transaction, and never deposit funds you can't afford to lose completely — DeFi has no customer support line and no deposit insurance.""",
    },
    {
        "slug": "staking",
        "title": "Staking",
        "level": "intermediate",
        "order": 2,
        "read_time": 7,
        "summary": "Staking lets you earn rewards by helping secure a blockchain. Here's how it actually works.",
        "content": """## Earning by Helping Secure the Network

**Staking** is the process of locking up cryptocurrency to help validate transactions and secure a blockchain that uses a Proof-of-Stake (PoS) consensus mechanism. In return for committing your tokens and helping keep the network honest, you earn rewards — a process often compared to earning interest on a savings account, though the underlying mechanics and risks are quite different.

## Why Proof-of-Stake exists

Older blockchains like Bitcoin use Proof-of-Work, where miners compete using massive amounts of computing power and electricity to add new blocks. Proof-of-Stake was designed as a more energy-efficient alternative: instead of burning electricity, validators put their own money at risk by staking tokens. If they act honestly, they earn rewards. If they try to cheat the network, they can lose part of their staked tokens — an economic incentive to behave correctly.

## How staking actually works

1. You lock (stake) your tokens, either by running your own validator node or by delegating your tokens to an existing validator.
2. The blockchain protocol randomly selects validators, often weighted by how much they have staked, to propose and confirm new blocks.
3. Validators earn newly issued tokens and/or transaction fees as a reward for their work.
4. If you delegated your tokens to a validator rather than running your own, that validator shares a portion of the rewards with you, usually keeping a small commission.

## Running a validator vs. delegating

Running your own validator node typically requires a minimum amount of tokens (32 ETH for Ethereum, for example), technical setup, and reliable uptime — if your node goes offline too often, you can be penalized. Most everyday users instead delegate their tokens to a professional validator or use a liquid staking service, which handles the technical complexity in exchange for a small fee.

## Popular networks that support staking

- **Ethereum (ETH)** — Moved fully to Proof-of-Stake in 2022 during "The Merge."
- **Solana (SOL)** — Known for very fast block times and low staking barriers.
- **Cardano (ADA)** — Uses a staking model with no minimum lock-up requirement in many wallets.
- **Polkadot (DOT)** — Uses "nominated proof of stake," where token holders nominate trusted validators.

## Liquid staking: staking without losing flexibility

Traditional staking can lock your tokens for a period, making them unavailable for trading or other uses. Liquid staking protocols like Lido solve this by giving you a separate token representing your staked position, which you can trade, use as collateral in DeFi, or sell — while your original tokens continue earning staking rewards in the background.

## Risks to know before you stake

- **Lock-up periods**: Depending on the network, staked funds may be locked for anywhere from a few days to several weeks before you can withdraw them.
- **Slashing**: If a validator misbehaves or has poor uptime, a portion of the staked tokens — including those delegated by other users — can be forfeited as a penalty.
- **Smart-contract risk**: Liquid staking protocols and staking pools rely on smart contracts, which can contain bugs or be exploited.
- **Token price volatility**: Even attractive staking yields can be wiped out if the underlying token's price falls sharply during the staking period.
- **Validator selection matters**: Choosing an unreliable or dishonest validator can reduce your rewards or expose you to slashing risk.

## Educational note

This page is general information only and not investment advice. Staking rewards, lock-up terms, and risks vary significantly between networks and providers, so always research the specific protocol carefully before committing funds.""",
    },
    {
        "slug": "smart-contracts",
        "title": "Smart Contracts",
        "level": "intermediate",
        "order": 3,
        "read_time": 7,
        "summary": "Smart contracts are self-executing agreements written in code. They power most of crypto.",
        "content": """## Agreements That Run Themselves

A **smart contract** is a piece of code that lives permanently on a blockchain. It automatically executes its programmed logic when specific conditions are met — no lawyers, no escrow agent, no middleman required to enforce the agreement. Once deployed, a smart contract runs exactly as written, every single time, for anyone who interacts with it.

## Where the idea came from

The concept of a "smart contract" predates blockchain itself — computer scientist Nick Szabo described the idea in the 1990s as a way to embed contract terms directly into computer protocols. Blockchains like Ethereum, launched in 2015, made this idea practical for the first time by providing a decentralized computer that anyone could deploy code to, with the results enforced by thousands of independent network participants rather than one company's servers.

## A simple analogy

Think of a vending machine. You insert a coin, press a button, and a snack falls out automatically — no cashier required to complete the transaction. A smart contract works on the same principle, except instead of snacks it can automatically handle money, ownership records, voting, or almost any other digital agreement, as long as the conditions can be clearly defined in code.

## What can smart contracts actually do?

- **Send tokens automatically** when a specific trigger occurs, such as a payment being received or a deadline passing.
- **Lock funds** until a certain date or condition is met, useful for savings plans, vesting schedules, or escrow arrangements.
- **Distribute royalties** to NFT creators automatically and forever, every time their artwork is resold on a marketplace.
- **Power entire decentralized exchanges**, automatically matching trades and calculating prices without a company running an order book.
- **Run decentralized autonomous organizations (DAOs)**, where community votes are tallied and executed directly by code.
- **Manage complex DeFi products** like lending pools, insurance protocols, and yield-generating vaults.

## How a smart contract gets created and used

A developer writes the contract's logic in a programming language such as Solidity (the most common language on Ethereum), tests it thoroughly, and then deploys it to the blockchain — a process that costs a network fee known as "gas." Once deployed, anyone can interact with the contract by sending it a transaction, and the results are recorded permanently and transparently on the blockchain for anyone to verify.

## Limitations and risks

- **Bugs are often permanent** — once a smart contract is deployed, its code is usually extremely difficult or impossible to change, meaning any mistake in the original logic stays in place unless the developers built in an upgrade mechanism from the start.
- **Exploits can be catastrophic** — because smart contracts frequently hold large amounts of money, security flaws have led to hundreds of millions of dollars in losses across the industry over the years.
- **Oracle risk** — many smart contracts need real-world data (like a token's current price) to function. This data comes from services called oracles, and if an oracle is manipulated or fails, the smart contract can behave incorrectly.
- **Gas costs** — every interaction with a smart contract requires paying a network fee, which can become expensive during periods of high network congestion.
- **Legal uncertainty** — the enforceability of smart contracts under traditional law is still being worked out in many jurisdictions.

## Where smart contracts run

Ethereum remains the most widely used platform for smart contracts and has the largest ecosystem of developers and audited protocols. Other blockchains, including Solana, Avalanche, Polygon, and BNB Chain, also support smart contracts, often with different trade-offs around speed, cost, and programming languages, giving developers a range of platforms to choose from depending on their needs.""",
    },
    {
        "slug": "nfts",
        "title": "NFTs",
        "level": "intermediate",
        "order": 4,
        "read_time": 7,
        "summary": "An NFT proves you own a unique digital item. They are more (and less) than memes about cartoon apes.",
        "content": """## Unique Digital Ownership

An **NFT**, short for **Non-Fungible Token**, is a one-of-a-kind token recorded on a blockchain. The word "fungible" means interchangeable — one rupee note is identical in value to any other rupee note, and one Bitcoin is identical to any other Bitcoin. NFTs are the opposite: each one is unique and cannot be exchanged on a one-to-one basis for another, which makes them useful for representing ownership of things that are inherently one-of-a-kind, such as digital art, collectibles, music, in-game items, and even certain real-world assets.

## How NFTs relate to the underlying asset

It's important to understand what an NFT actually contains. In most cases, the token itself stores a small amount of data on the blockchain — the owner's wallet address, a unique ID, and a link pointing to the actual media file, which is often stored elsewhere (on a service like IPFS or a regular web server) rather than directly on the blockchain due to storage costs. This means owning an NFT is really about owning a verifiable, blockchain-recorded claim of authenticity and provenance, not necessarily exclusive rights to view or copy the underlying image or file, which anyone can often still see online.

## What can NFTs represent?

- **Digital art and collectibles** — the most well-known use case, from generative art projects to single hand-crafted pieces.
- **Music albums and royalties** — artists can sell NFTs tied to songs or albums, sometimes with built-in royalty payments on future resales.
- **Domain names** — blockchain-based domains such as those ending in `.eth` are represented and traded as NFTs.
- **Tickets and memberships** — event tickets or exclusive community access passes that are harder to counterfeit than paper tickets.
- **In-game items** — weapons, skins, or land in blockchain-based games that players can genuinely own and trade outside the game itself.
- **Real-world asset tokenization** — emerging experiments in representing real estate deeds or certificates through NFTs.

## How NFTs are created and traded

1. A creator "mints" an NFT by deploying or interacting with a smart contract, which generates a new unique token and records the creator as its first owner.
2. The smart contract permanently stores key details: the current owner's wallet address, the token's unique identifier, and a reference to the associated media or metadata.
3. The NFT can then be listed for sale, auctioned, or transferred on marketplaces such as OpenSea or Blur, with the blockchain recording every change of ownership.
4. Many NFT smart contracts include a royalty mechanism, automatically paying the original creator a percentage every time the NFT is resold.

## The honest reality of the NFT market

NFT trading volumes and prices grew explosively during 2021, driven partly by genuine interest in digital art and partly by intense speculation. Prices for most collections crashed significantly after 2022, and many projects that promised roadmaps, utility, or long-term value turned out to be low-effort speculation or outright scams. That said, the underlying technology remains genuinely useful for proving digital ownership and provenance, and serious use cases in ticketing, gaming, and digital identity continue to develop even as speculative trading has cooled considerably.

## Things to watch out for

- **Wash trading** — some reported sales volumes are artificially inflated by traders selling NFTs to themselves.
- **Copyright confusion** — buying an NFT of an image does not automatically grant you copyright over that image unless explicitly stated in the terms.
- **Rug pulls** — anonymous project teams sometimes abandon a collection after the initial sale, leaving buyers with worthless tokens.
- **Platform risk** — marketplaces can change their fee structures, royalty enforcement, or even shut down.

## Educational reminder

Never buy NFTs, or any digital asset, purely because of fear of missing out (FOMO). Treat them as speculative collectibles rather than guaranteed investments, and only spend what you would be comfortable losing entirely.""",
    },
    {
        "slug": "layer-1-vs-layer-2",
        "title": "Layer 1 vs Layer 2",
        "level": "intermediate",
        "order": 5,
        "read_time": 7,
        "summary": "L1 is the main blockchain. L2 sits on top to make it faster and cheaper. Here's why both matter.",
        "content": """## Two Layers, One Goal: Scale

As blockchains grew popular, a fundamental problem became obvious: the more people who wanted to use a network, the slower and more expensive it became. A blockchain that can only process a handful of transactions per second simply cannot support millions of everyday users the way traditional payment networks can. The community responded with a layered design that splits work between a highly secure base layer and faster, cheaper layers built on top of it.

## Layer 1 (L1) — The Base

A Layer 1 is the main, foundational blockchain itself. It handles the most critical jobs: security, consensus among participants, and final settlement of transactions. Everything that happens on layers built on top of it ultimately depends on the L1 for its guarantees of safety and permanence.

**Examples:** Bitcoin, Ethereum, Solana, Avalanche.

**Strengths:** Maximum security and decentralization, since these networks are secured by large numbers of independent validators or miners spread around the world.
**Weakness:** Processing transactions directly on an L1 tends to be slower and, during busy periods, considerably more expensive, since every single node on the network must process and store every transaction.

## Layer 2 (L2) — The Highway

A Layer 2 is a separate system built on top of an L1 that handles transactions faster and cheaper, while still relying on the underlying L1 for final security. Most L2s work by bundling together large batches of transactions off the main chain and then posting a compressed summary (or cryptographic proof) back to the L1, inheriting much of its security without repeating all of its work.

**Examples:** Arbitrum, Optimism, Base, and Polygon zkEVM (all built on Ethereum); the Lightning Network (built on Bitcoin).

**Strengths:** Much faster transaction speeds and dramatically lower fees, often a fraction of what the same transaction would cost directly on the L1.
**Weakness:** Slightly different security assumptions depending on the specific L2 design, and users typically need to "bridge" assets between the L1 and L2, which introduces its own risks and occasional delays.

## The main types of Layer 2 technology

- **Optimistic rollups** (used by Arbitrum and Optimism) assume transactions are valid by default and only run a full check if someone challenges them within a set time window, which is why withdrawals back to the L1 can take about a week.
- **Zero-knowledge (ZK) rollups** (used by zkSync and Polygon zkEVM) generate a cryptographic proof that a batch of transactions is valid, allowing much faster withdrawals since the proof itself guarantees correctness.
- **State channels** (like Bitcoin's Lightning Network) let two parties transact rapidly and privately between themselves, only settling the final balance on the main chain when the channel closes.
- **Sidechains** are separate blockchains that run in parallel to an L1 with their own security model, connected via a bridge, offering high speed but generally weaker security guarantees than rollups.

## A simple analogy

Think of the Layer 1 as the highway authority: slow to build new roads and expensive to maintain, but extremely reliable and trusted by everyone. Layer 2s are like bus and metro services running on top of that highway system — fast, cheap, and convenient for daily use, but ultimately dependent on the highway infrastructure being there and secure underneath them.

## Why beginners should care

Most modern crypto applications, from DeFi platforms to NFT marketplaces, now run primarily on Layer 2 networks rather than directly on Ethereum's base layer. Understanding the difference helps you avoid unnecessarily paying $30–$50 in gas fees for a transaction that could cost a fraction of a rupee on an L2, and it also helps you understand why an app might ask you to "bridge" your funds before you can start using it.""",
    },
    # ============== SECURITY ==============
    {
        "slug": "crypto-scams",
        "title": "Crypto Scams",
        "level": "security",
        "order": 1,
        "read_time": 7,
        "summary": "Scammers love crypto's irreversibility. Here are the top scam patterns and how to avoid them.",
        "content": """## Crypto Transactions are Final

In traditional banking, if you get scammed, you can often call your bank and request a chargeback. In crypto, there is no such safety net. Once a transaction is confirmed on the blockchain, it is permanent and irreversible — there is no customer service line to call, no fraud department to dispute the charge, and no way to claw the funds back. This finality is exactly why crypto has become such a magnet for scammers, and why understanding common scam patterns is one of the most valuable skills you can build before putting real money into this space.

## Top scam patterns to recognize

### 1. Giveaway scams
A fake celebrity or company account on social media posts something like "Send 1 ETH to this address and receive 2 ETH back as part of our giveaway!" This is always fake, no matter how convincing the profile picture, verified badge, or comment section (often filled with bots) may look. No legitimate giveaway ever requires you to send crypto first.

### 2. Romance and "pig-butchering" scams
A stranger reaches out on a dating app or social media, builds a relationship over weeks or months, and eventually introduces you to a "great investment opportunity" — usually a fake trading platform they control. Early on, you may even be allowed to withdraw a small profit to build trust. Once you deposit a larger amount, withdrawals mysteriously stop working, and the scammer disappears.

### 3. Fake support scams
Someone messages you on Discord, Telegram, or Twitter/X claiming to be "support" for a wallet or exchange you use. They ask you to "verify your wallet" through a malicious link, or worse, ask directly for your seed phrase or private key. Legitimate support staff never need your seed phrase to help you.

### 4. Investment Ponzi schemes
Platforms promising "guaranteed 1% daily returns" or similarly unrealistic, fixed profits are almost always Ponzi schemes, where early investors are paid using money from newer investors rather than genuine trading profits. The scheme collapses once new deposits slow down, and most participants lose their money.

### 5. Fake job offers
Scammers posing as recruiters offer high-paying remote crypto jobs, then send a "coding test," "wallet integration test," or software download that secretly contains malware designed to steal wallet credentials the moment it's opened.

### 6. Pump-and-dump schemes
A group coordinates to buy a low-value token together, hype it aggressively on social media to attract outside buyers, and then sell off their holdings at the inflated price — leaving latecomers holding a token that quickly crashes back down.

## Universal red flags to watch for

- Urgency or pressure ("act now or miss out forever")
- Promises of guaranteed or unusually high returns
- Anyone asking for your seed phrase or private key, under any circumstance
- Unsolicited direct messages offering help, investment advice, or opportunities
- Website links that look almost identical to a real domain but with a subtle misspelling
- Requests to install unfamiliar software or browser extensions

## What to do if you suspect a scam

Stop all communication immediately, do not send any further funds, and never attempt to "recover" lost funds by paying an additional fee to someone who contacts you claiming they can help — this is itself a very common follow-up scam targeting people who already lost money once.

## Golden rule

**Never share your seed phrase or private key with anyone, for any reason. No legitimate service, exchange, or support agent will ever need it to help you.** If you internalize this single rule, you will avoid the vast majority of crypto scams in existence today.""",
    },
    {
        "slug": "fake-airdrops",
        "title": "Fake Airdrops",
        "level": "security",
        "order": 2,
        "read_time": 7,
        "summary": "Airdrops can be legitimate — but most are bait. Learn how to spot the difference.",
        "content": """## What is an Airdrop?

An **airdrop** is when a crypto project distributes free tokens directly to a large number of wallet addresses, usually as a way to bootstrap a community, reward early users of a protocol, or build awareness before a bigger launch. Legitimate airdrops have made some early users genuinely wealthy — for example, people who used Uniswap or Arbitrum before their token launches received substantial free token distributions simply for having interacted with the platform earlier. This history of real rewards is exactly what scammers exploit to make fake airdrops believable.

## How scammers weaponize airdrops

1. Tokens with an official-sounding name suddenly and unexpectedly appear in your wallet, without you doing anything to receive them.
2. The token often includes a website link in its name or description, appearing helpfully right inside your wallet app or a block explorer.
3. Curious, you visit the linked site, which looks polished and professional, and it invites you to "claim" your free tokens by connecting your wallet.
4. Once connected, the site requests you sign a transaction or message — but this signature isn't actually claiming anything. It's secretly authorizing the attacker's contract to drain tokens or NFTs from your wallet.

## Why this works so well

The scam exploits curiosity and the fear of missing out. Most people have heard stories of others getting rich from a surprise airdrop, so finding free tokens sitting in their own wallet feels exciting rather than suspicious. Scammers also rely on the fact that most people don't carefully read what a wallet signature request actually authorizes before clicking "approve" or "sign."

## How to stay safe from fake airdrops

- **Never interact with unexpected tokens** that appear in your wallet. Simply ignore them — you don't need to sell, transfer, or even acknowledge them for them to be harmless sitting there.
- **Use a separate "burner" wallet** with little to no valuable assets if you do want to experiment with claiming airdrops, keeping your main holdings completely isolated from the risk.
- **Verify the project through at least two independent official sources** — such as the project's verified Twitter/X account and their official Discord — before ever connecting your main wallet to a claim site.
- **Read every signature request carefully.** Wallets like MetaMask show what permissions you're granting; if the request looks vague, overly broad, or unfamiliar, decline it.
- **Never pay a "gas fee" or "unlock fee"** to claim a supposedly free airdrop — legitimate airdrops never require you to pay anything to receive free tokens, beyond the standard network fee for your own claim transaction, if any.

## Real airdrops vs. fake ones

Genuine, well-known airdrops are typically announced publicly and well in advance, through the project's official blog, verified social media accounts, and community channels, often with a detailed eligibility criteria page you can check without connecting a wallet. If you "discover" an airdrop that nobody else in your network or on official channels is discussing, and it just appeared out of nowhere in your wallet, treat it as a scam until proven otherwise.

## What to do if you already connected your wallet to a suspicious site

If you've already interacted with a fake airdrop site, immediately use a token approval checker tool such as Revoke.cash to review and revoke any permissions you may have unknowingly granted. Move any remaining valuable assets in that wallet to a fresh, uncompromised wallet as an extra precaution, since some malicious contracts can be designed to drain funds even after the initial interaction.""",
    },
    {
        "slug": "wallet-safety",
        "title": "Wallet Safety",
        "level": "security",
        "order": 3,
        "read_time": 7,
        "summary": "Securing your wallet is the #1 skill in crypto. Here's a beginner-friendly safety checklist.",
        "content": """## Your Wallet, Your Responsibility

In crypto, there's a saying that captures a fundamental shift in responsibility: you are your own bank. This is empowering — nobody can freeze your account or deny you a transaction — but it's also unforgiving, because there's no institution to bail you out if something goes wrong. Data from wallet security firms consistently shows that the majority of lost crypto funds aren't the result of sophisticated blockchain hacks; they come from simple, preventable user mistakes like weak backups, careless clicking, or falling for social engineering.

## The wallet safety checklist

1. **Write down your seed phrase on paper, using a pen** — never store it as a screenshot, in a notes app, in a password manager's notes field, or anywhere connected to the internet.
2. **Keep at least two physical backups** in separate locations, ideally protected from fire, flooding, or theft, such as a home safe and a trusted family member's house.
3. **Buy a hardware wallet** for any amount of crypto you genuinely could not afford to lose. The one-time cost is trivial compared to the security it provides.
4. **Always verify download URLs and app store listings** before installing wallet software — fake MetaMask and Trust Wallet apps and websites are a persistent and effective scam vector.
5. **Enable a strong password and biometric lock** on your wallet app, in addition to your seed phrase backup.
6. **Use separate wallets for different purposes** — a "hot" wallet with small amounts for daily use and experimentation, and a separate, more secure wallet for long-term holdings you rarely touch.
7. **Never blindly copy-paste wallet addresses.** Malware exists that silently swaps a copied address for an attacker's address on your clipboard, so always double-check the first and last four characters match what you expect before sending.
8. **Bookmark official dApp URLs directly** rather than searching for them each time, since fake sponsored search results impersonating popular apps are common.

## Advanced protections worth considering

- **A passphrase (sometimes called the "25th word")** adds an extra custom word on top of your standard seed phrase on hardware wallets, creating a hidden wallet that's useless to anyone who only has your base seed phrase.
- **Multi-signature ("multi-sig") wallets** require approval from multiple separate keys or people before a transaction can go through, which is especially valuable for larger holdings, shared funds, or business treasuries.
- **Periodic token approval audits** using a tool like Revoke.cash help you find and cancel old permissions you may have granted to dApps or contracts you no longer use or trust, closing a common attack surface.
- **Consider wallet insurance or custody services** for very large holdings, where professional custodians offer institutional-grade security in exchange for a fee.

## Building good habits early

Security isn't a one-time setup — it's an ongoing set of habits. Get into the routine of pausing before every transaction to ask what exactly you're signing, resist urgency in any message asking you to act quickly, and treat any unsolicited contact about your wallet with default suspicion. The earlier in your crypto journey you build these habits, the less likely you are to make a costly mistake once your holdings grow.

## Final wisdom

You are far more likely to lose your funds to your own moment of carelessness — a copied address, a rushed click, a shared seed phrase — than to someone directly "hacking" a blockchain itself, which remains extraordinarily difficult on major networks. Treat your wallet with the same seriousness you would treat a safe full of cash, because in practice, that's exactly what it is.""",
    },
    {
        "slug": "phishing-attacks",
        "title": "Phishing Attacks",
        "level": "security",
        "order": 4,
        "read_time": 7,
        "summary": "Phishing is the #1 attack vector in crypto. Learn the tricks attackers use — and how to defeat them.",
        "content": """## Phishing: The Most Common Crypto Attack

**Phishing** is when an attacker tricks you into revealing sensitive information or approving a malicious transaction by pretending to be someone or something trustworthy. In traditional online life, phishing might cost you a password that can be reset. In crypto, phishing is far more dangerous: one careless click or one blind signature can drain a wallet completely and permanently within seconds, with no way to reverse the damage.

## Why crypto phishing is especially effective

Crypto phishing often doesn't need to steal a password at all. Instead, it tricks you into personally signing a transaction that hands over control of your assets — technically, you approved it yourself, which makes it much harder to dispute or recover compared to a stolen credit card number. Attackers also benefit from the genuine complexity of the space; many newcomers don't fully understand what a wallet signature actually authorizes, making it easier to disguise a harmful request as a routine one.

## Common phishing vectors to watch for

- **Email** — Messages claiming "Your Binance account is locked, click here to verify" that link to a fake login page designed to steal your exchange credentials.
- **Search engine ads** — Fake MetaMask, Uniswap, or wallet download pages appearing as the very first sponsored result on Google, sometimes ranking above the real official site.
- **Discord and Telegram DMs** — Someone posing as a "moderator" or "admin" reaching out to help with a problem you posted about publicly, then asking you to verify your wallet through a link.
- **Fake wallet pop-ups** — Look-alike websites that mimic a real dApp's "reconnect your wallet" prompt to capture a malicious signature.
- **Twitter/X replies** — A bot account replying to a real company's support tweet, impersonating official support and offering to help.
- **Fake browser extensions** — Malicious clones of popular wallet extensions listed in browser stores, designed to look identical to the real thing.

## Defenses that actually work

1. **Bookmark official dApp and exchange URLs directly** — never rely on searching for them each time, since search ads and even some search results can be compromised.
2. **Inspect every signature request in your wallet** before approving it — modern wallets show what permissions or actions you're granting, and a vague or overly broad request is a red flag.
3. **Treat every unsolicited direct message as suspicious**, no matter how official it looks. Legitimate support teams almost never initiate contact through DMs.
4. **Hover over links before clicking** to check the actual destination URL, since displayed text can easily be made to look different from where a link actually leads.
5. **Enable two-factor authentication (2FA)** using an authenticator app rather than SMS, since SIM-swapping attacks can intercept text-message codes.
6. **Use a password manager** for exchange logins — a password manager will refuse to auto-fill your credentials on a fake domain, even one that looks visually identical to the real site.
7. **Keep wallet software and browser extensions updated**, since developers frequently patch security vulnerabilities that attackers try to exploit.

## Understanding what you're signing

Wallet transactions generally fall into a few categories: sending funds directly, approving a smart contract to spend a specific token on your behalf, or signing an off-chain message. Attackers frequently disguise approval requests as something harmless, hoping you'll click through without reading. Before signing anything, pause and ask: What exactly is this authorizing? For how much? For how long? If the answer isn't completely clear, it's safer to decline and research further.

## A useful habit to build

Make it a personal rule that you never sign a wallet transaction while distracted, rushed, or under any sense of urgency created by the request itself. Attackers rely on speed and pressure to prevent careful thinking. Slowing down for even thirty extra seconds to actually read a transaction request is, in practice, one of the single most effective defenses against crypto phishing that exists.""",
    },
    {
        "slug": "seed-phrase-protection",
        "title": "Seed Phrase Protection",
        "level": "security",
        "order": 5,
        "read_time": 8,
        "summary": "Your seed phrase is the master key to your crypto. Protect it like your life depends on it.",
        "content": """## What is a Seed Phrase?

A **seed phrase**, also called a recovery phrase or mnemonic phrase, is a sequence of 12 or 24 randomly generated words that acts as the master backup for your entire crypto wallet. Behind the scenes, this phrase mathematically generates all of your wallet's private keys, meaning anyone who obtains these words can fully recreate your wallet on any device, anywhere in the world, and gain complete control over every asset inside it — with no password, PIN, or additional verification required.

## Why the seed phrase matters more than anything else

Every other security measure in crypto — passwords, biometric locks, two-factor authentication — protects access to an app or account. The seed phrase is fundamentally different: it protects the underlying assets themselves, independent of any app, company, or device. Even if your phone is destroyed, lost, or stolen, and even if the wallet company that made your app goes out of business entirely, your seed phrase alone is enough to fully recover your funds using any compatible wallet software.

## How to store a seed phrase safely

### What you should do
- Write it down on **physical paper** using a pen, immediately when your wallet is created.
- Keep **at least two copies** stored in separate physical locations, so a single fire, flood, or theft can't wipe out your only backup.
- Consider engraving your seed phrase onto a **stainless steel plate**, which is far more resistant to fire and water damage than paper over a long time horizon.
- For very large holdings, consider a **bank safety deposit box** or a home safe rated for fire resistance.
- Double-check every word is spelled correctly and in the exact order shown, since a single mistake can make the backup useless.

### What you should never do
- Take a **screenshot** or photograph of your seed phrase with your phone.
- Type it into a **Notes app, Word document, spreadsheet**, or any other digital file.
- Email it to yourself, or store it in **cloud storage** like Google Drive, iCloud, or Dropbox.
- Store it in a **password manager**, unless that specific manager is designed and audited for this exact purpose — most general password managers are not built for this.
- Share it with **anyone**, including people claiming to be customer support, family members you haven't planned inheritance with carefully, or "helpful" strangers online.

## Common ways people accidentally lose their seed phrase

- A phone is lost, stolen, or sold, and the seed phrase had been carelessly saved in the Notes app.
- A personal cloud backup account is hacked, exposing a photo or document containing the phrase.
- A family member or partner sells or gives away an old device without realizing it, or the paper backup itself, contains something valuable.
- A scammer posing as "support" in a Discord or Telegram server convinces someone to type their seed phrase into a fake "wallet verification" website.
- A malicious or compromised browser extension silently captures the phrase when it's typed or pasted during wallet setup.

## A simple test for your backup

A genuinely reliable backup should let you fully recover your wallet from scratch: uninstall your wallet app, reinstall it on a different device, and restore it using only your written seed phrase. If this process works smoothly and shows the correct balance, your backup is solid. If you're ever unsure whether your written copy is accurate or complete, test it in a low-stakes way before you rely on it for anything significant.

## What to do if you suspect your seed phrase is compromised

If there's any chance your seed phrase has been seen, photographed, or typed into an untrusted website, treat it as compromised immediately. Create a brand-new wallet with a fresh seed phrase, and transfer all of your assets to it as quickly as possible — waiting even a short time gives an attacker who has your phrase every opportunity to move your funds first.

## Final word

Your seed phrase is the single point of failure that stands between your crypto holdings and anyone who might want to take them. Every other security precaution in this space is secondary to protecting these words. Treat them with the seriousness you would give the only key to a vault holding everything you own — because that is exactly what they are.""",
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
    "author": "Crypto Beginner Team",
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
    "author": "Crypto Beginner Team",
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
    "author": "Crypto Beginner Team",
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
    "author": "Crypto Beginner Team",
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
    "author": "Crypto Beginner Team",
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
    "author": "Crypto Beginner Team",
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
    "author": "Crypto Beginner Team",
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
    "author": "Crypto Beginner Team",
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
