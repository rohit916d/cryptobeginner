---
title: "What Is a Liquidity Pool? How AMM Pools Work in India"
category: "DeFi"
excerpt: "Learn what a liquidity pool is, how AMM pools power decentralised exchanges, and the risks Indian beginners should know — impermanent loss, bugs and scams."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/defi.jpg"
created_at: "2026-11-07T13:22:55+00:00"
faqs:
  - question: "What is a liquidity pool in simple words?"
    answer: "A liquidity pool is a shared pot of two crypto assets locked inside a smart contract on a decentralised exchange. Instead of matching buyers with sellers, the exchange lets anyone swap directly against this pot. The people who deposit the assets are called liquidity providers, and they earn a small share of the trading fees in return."
  - question: "Can you lose money in a liquidity pool?"
    answer: "Yes, and beginners should understand how before going anywhere near one. If the prices of the two pooled assets move apart, you can end up with less value than simply holding them — this is called impermanent loss. On top of that, smart-contract bugs, fake pools, and project teams that disappear with the funds are real risks. Nothing in a pool is guaranteed, and in India there is no regulator or insurance that covers these losses."
  - question: "Do I need a liquidity pool to buy crypto in India?"
    answer: "No. Most Indian beginners buy crypto on a centralised exchange such as CoinDCX, WazirX or ZebPay, using UPI or bank transfer, and never touch a liquidity pool. Pools belong to the decentralised finance (DeFi) world — they are useful to understand, but they are not a requirement for buying, holding or learning about crypto."
---
# What Is a Liquidity Pool? How AMM Pools Work in India

A **liquidity pool** is one of the building blocks of decentralised finance, yet most beginners have never heard of it — even though it quietly powers almost every swap that happens on a decentralised exchange. If you have ever wondered how a website with no company behind it can let strangers trade crypto with each other at any hour, the answer is usually a liquidity pool.

This guide explains what a liquidity pool is in plain language, how the automated market maker (AMM) behind it sets prices, who puts crypto into these pools and why, and — most importantly — the risks Indian beginners should understand before going anywhere near one.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This article explains a concept; it is not a recommendation to use any pool, exchange or token.

## What Is a Liquidity Pool, in Plain Words?

Imagine a small currency-exchange counter at an airport. It keeps a stock of rupees on one side and dollars on the other. Travellers walk up, hand over one currency, and receive the other. The counter never needs to find another traveller going the opposite way — it trades against its own stock.

A liquidity pool works the same way, except the "counter" is a smart contract — a piece of code running on a blockchain — and the "stock" is a pair of crypto assets locked inside it. For example, a pool might hold Ether (ETH) on one side and the stablecoin USDT on the other. Anyone who wants to swap ETH for USDT can do so instantly, trading directly against the pool rather than waiting for another person to take the opposite side of the trade.

The word "liquidity" simply means how easily something can be bought or sold without the price moving much. A pool with a large amount of crypto in it is "deep" — big trades barely move its price. A pool with very little in it is "shallow" — even a modest trade can shift the price sharply, which is exactly where beginners get hurt.

Pools exist on decentralised exchanges (DEXs) such as Uniswap and PancakeSwap. Unlike a centralised Indian exchange, a DEX has no company, no customer-support desk and no one holding your funds. Everything — the pool, the pricing and the trade itself — is handled by code.

## Why Do Decentralised Exchanges Need Liquidity Pools?

Traditional exchanges use an **order book**. Buyers post the price they are willing to pay, sellers post the price they are willing to accept, and the exchange matches them. This works well when thousands of people are trading the same asset every minute, as they do for Bitcoin on a large Indian exchange.

But decentralised exchanges face a different problem. There are thousands of small tokens, and many of them have only a handful of traders. An order book for such a token would sit mostly empty — a buyer might wait hours or days for a seller to appear. That is the problem liquidity pools were invented to solve.

Instead of matching people with each other, a DEX matches people with a pool. The pool is always there, always ready to trade, 24 hours a day. This design is called an **automated market maker (AMM)**, because the market is "made" automatically by a formula in the smart contract, not by human traders posting orders.

The most common formula is beautifully simple: the pool keeps the product of its two balances constant. If a pool holds 10 ETH and 30,000 USDT, the product is 300,000. When someone buys ETH from the pool, the ETH balance falls, so the USDT balance must rise to keep the product at 300,000 — and that shift is what changes the price. The more of one asset you take out, the more expensive the next unit becomes. This is why large trades in small pools suffer heavy **slippage** — the price you actually get is worse than the price shown when you started.

For an Indian beginner, the practical takeaway is this: on a DEX, you are not trading with a person. You are trading with a pot of crypto governed by a formula, and the size of that pot decides how fair your price will be.

## How a Liquidity Pool Works, Step by Step

Here is a simplified walkthrough of what happens when someone swaps crypto through a pool. No technical background is needed to follow it.

**Step 1: The pool is created.** Someone — often the project team behind a token — creates a pool for a pair, say a new token paired with USDT, and deposits an initial amount of both assets. From that moment, the pair can be traded.

**Step 2: A trader arrives.** Suppose you hold USDT and want the new token. You connect a self-custody wallet (such as MetaMask) to the DEX website and enter the amount you want to swap.

**Step 3: The formula sets the price.** The smart contract looks at the pool's current balances and calculates how many tokens your USDT buys. It also shows you the **price impact** — how much your trade itself will move the price — and the fee you will pay.

**Step 4: The swap executes.** Your USDT goes into the pool, the tokens come out to your wallet, and the pool's balances update. The whole thing happens in one blockchain transaction, usually within seconds, though you also pay a network fee (gas) for the transaction.

**Step 5: Fees are shared.** A small percentage of every trade — often around 0.3% — is kept by the pool and distributed to the people who deposited assets into it. This is the reward that attracts deposits in the first place.

Notice what is missing from this picture: there is no company checking your identity, no customer support, and no undo button. If you send the wrong token, pick the wrong network, or approve a malicious contract, the transaction is final. That irreversibility is the single most important difference between a DEX pool and an Indian exchange, where at least a support team exists.

## Who Puts Crypto Into a Pool — and Why?

The people who deposit assets into a pool are called **liquidity providers (LPs)**. When they deposit, they receive a receipt token — often called an LP token — which represents their share of the pool and lets them withdraw their portion later.

People provide liquidity mainly for one reason: to earn a share of the trading fees. If a pool handles a lot of trading volume, the fees can add up. This sounds attractive, and it is the headline that draws many beginners in. But the fee income is only half the story. The other half is the risk, and it is usually larger than beginners expect.

A simple way to think about it: providing liquidity means you are agreeing to hold a changing mix of two assets, and to let strangers trade against your money at formula-set prices. When the market moves sharply — which crypto does regularly — the pool automatically sells the asset that is rising and buys the one that is falling. You end up holding more of the weaker asset and less of the stronger one. That drift is called **impermanent loss**, and it is explained in the risks section below.

Liquidity providers also have to trust the smart contract completely. If the contract has a bug, or if the project team built a hidden backdoor into it, the entire pool can be drained. Unlike a bank deposit, there is no deposit insurance and no regulator to complain to.

## Liquidity Pool vs Order Book: What's the Difference?

Both systems let people trade crypto, but they work in very different ways. This table sums up the contrast for a beginner.

| Feature | Liquidity pool (AMM) | Order book (centralised exchange) |
|---|---|---|
| Who you trade with | A smart-contract pool | Another person (buyer/seller) |
| Who sets the price | A formula based on pool balances | Supply and demand from posted orders |
| Availability | 24/7, even for tiny tokens | Depends on enough buyers and sellers |
| Identity check (KYC) | Usually none | Mandatory on Indian exchanges |
| Customer support | None — code only | Support desk exists |
| Reversing a mistake | Not possible | Sometimes possible via support |
| Main costs | Trading fee + network (gas) fee | Trading fee + spread, sometimes 1% TDS |

Neither system is "better" in every situation. Order books suit beginners buying well-known crypto with rupees on a regulated Indian exchange. Liquidity pools suit the long tail of tokens that no centralised exchange lists — which is also where most of the scams live.

## The Risks Indian Beginners Must Know

Understanding the risks matters more than understanding the mechanics, because the mechanics are simple and the risks are not. Here are the five that catch beginners most often.

**1. Impermanent loss.** This is the signature risk of providing liquidity. Suppose you deposit equal values of two assets into a pool, and one of them doubles in price while the other stays flat. The pool's formula will have sold much of the rising asset as traders bought it. When you withdraw, you hold less of the winner than if you had simply kept both assets in your wallet. The loss is called "impermanent" because it disappears if prices return to where they started — but in crypto, prices often do not return. Fee income can offset it, but often does not.

**2. Smart-contract bugs.** A pool is only as safe as its code. A bug can let an attacker drain the pool, freeze withdrawals, or mint unlimited tokens. Even well-known projects have been hacked. Beginners cannot realistically audit code themselves, which is why an unaudited pool should be treated as an experiment, not an investment.

**3. Rug pulls and fake pools.** Anyone can create a pool for any token, including a fake copy of a real one. A common scam is to create a pool for a worthless token, attract deposits with promises of huge returns, and then withdraw all the real assets, leaving the pool worthless. Our separate guide on rug pulls explains the red flags in detail — the short version is that a pool with an anonymous team, no audit and a locked-liquidity claim you cannot verify is a pool to avoid entirely.

**4. Fake tokens and copycat pools.** Scammers create tokens with the same name and symbol as popular ones and set up pools for them. A beginner searching for a token by name can easily land in the fake pool. Always verify a token's contract address from the project's official website or documentation — never from a Telegram group, a YouTube comment or a forwarded message.

**5. Stablecoin depeg and thin pools.** Some pools pair a token with a stablecoin. If that stablecoin loses its peg — drifting below its intended value — the pool's maths quietly shifts against you. And in a thin pool with little deposited, even a normal trade can move the price several percent, turning an ordinary swap into an expensive mistake.

On top of these, Indian users face a practical problem: if something goes wrong on a DEX, there is no Indian authority to report it to in the way you can report a fraud on a registered exchange. You can still file a complaint on the National Cybercrime Reporting Portal (cybercrime.gov.in) or call the 1930 helpline, but recovering funds from an anonymous smart contract is, in practice, extremely unlikely.

## A 5-Minute Check Before Touching Any Pool

If you ever decide to study pools hands-on — with an amount you are fully prepared to lose — run through this checklist first. It will not make a pool safe, but it filters out the most obvious traps.

| Check | What to look for |
|---|---|
| Is the token real? | Contract address matches the project's official site or docs |
| Is the pool audited? | A public audit report from a known firm, not just a claim |
| Is liquidity locked? | Verifiable lock (not a screenshot) for a meaningful period |
| Is the pool deep enough? | Enough deposited value that your trade moves the price only slightly |
| Who controls it? | No single wallet able to change the rules or drain the pool |
| Can you explain the risk? | If you cannot explain impermanent loss, you are not ready |

A useful habit is to start with **testnets** — free practice networks where tokens have no real value — and with tiny amounts on well-established pools. Reading our guides on DEXs, yield farming and impermanent loss first will also help, because those three topics are the natural next steps after this one.

## Liquidity Pools and Indian Tax

Any gains from crypto in India are taxed at a flat 30%, with a 1% TDS deducted on many transactions, and losses cannot be set off against gains. Activity on a decentralised exchange does not escape this: swapping one crypto for another inside a pool, earning trading fees, or withdrawing from a pool can each count as a taxable event, and the 1% TDS rules still apply where a transaction goes through a registered exchange or a specified person.

Because DEX activity happens outside Indian exchanges, keeping records is entirely your responsibility. Save the transaction hash, the date, the amounts of both assets, and the rupee value at the time of the transaction for every swap and every withdrawal. Without those records, filing your return becomes guesswork — and guesswork is expensive when the tax department asks questions.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## Frequently Asked Questions

### What is a liquidity pool in simple words?

A liquidity pool is a shared pot of two crypto assets locked inside a smart contract on a decentralised exchange. Instead of matching buyers with sellers, the exchange lets anyone swap directly against this pot. The people who deposit the assets are called liquidity providers, and they earn a small share of the trading fees in return.

### Can you lose money in a liquidity pool?

Yes, and beginners should understand how before going anywhere near one. If the prices of the two pooled assets move apart, you can end up with less value than simply holding them — this is called impermanent loss. On top of that, smart-contract bugs, fake pools, and project teams that disappear with the funds are real risks. Nothing in a pool is guaranteed, and in India there is no regulator or insurance that covers these losses.

### Do I need a liquidity pool to buy crypto in India?

No. Most Indian beginners buy crypto on a centralised exchange such as CoinDCX, WazirX or ZebPay, using UPI or bank transfer, and never touch a liquidity pool. Pools belong to the decentralised finance (DeFi) world — they are useful to understand, but they are not a requirement for buying, holding or learning about crypto.

## The Bottom Line

A liquidity pool is a clever solution to a real problem: it lets decentralised exchanges offer instant trading even for tokens with almost no traders. The automated market maker formula does the job of a whole trading floor, and the people who supply the assets earn a share of the fees for doing so.

But clever does not mean safe. Impermanent loss, smart-contract bugs, fake pools and rug pulls make liquidity pools one of the riskier corners of crypto — a place where the losses are real, the reversals are impossible, and no Indian regulator or insurer stands behind you. For most Indian beginners, the right move is simply to understand the concept, as you now do, and to keep your actual buying on a registered exchange with UPI deposits, proper records and an amount you can afford to lose.

If this guide helped, the natural next reads are our explainers on decentralised exchanges, yield farming and impermanent loss — together, they complete the picture of how DeFi actually works, risks included.
