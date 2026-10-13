---
title: "What Is Yield Farming? DeFi Rewards and Risks Explained"
category: "DeFi"
excerpt: "Yield farming explained for Indian beginners: how DeFi pools pay rewards, where those rewards really come from, and the risks to check first."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/defi.jpg"
created_at: "2026-10-13T05:22:07+00:00"
faqs:
  - question: "What is yield farming in simple words?"
    answer: "Yield farming means placing crypto into a DeFi protocol, such as a liquidity pool or lending market, so the protocol can use it and pay rewards in return. The yield is not guaranteed. Rewards change with trading activity, token prices, and protocol rules, and the value you withdraw can be less than the value you deposited."
  - question: "Where do yield farming rewards actually come from?"
    answer: "Rewards usually come from three sources: trading fees paid by users of a pool, interest paid by borrowers, or new tokens issued by a protocol to attract deposits. If a reward cannot be explained by fees or interest, it is often paid from token issuance, which can lose value quickly if many people sell it."
  - question: "How is yield farming taxed in India?"
    answer: "Indian users should record the date, amount, and INR value of every deposit, reward, and withdrawal, because transfers of virtual digital assets can have tax consequences. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing, and consider professional tax advice for DeFi activity."
---

# What Is Yield Farming? DeFi Rewards and Risks Explained

Yield farming is one of the most searched DeFi ideas because the word "yield" sounds calm and safe, like interest in a bank account. It is neither calm nor guaranteed. In simple terms, yield farming means moving crypto into a decentralised finance protocol so that the protocol can use that crypto for trading or lending, and paying you a reward for supplying it. Understanding where that reward comes from, and what can go wrong, matters far more than the headline percentage shown on a website.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose.

## What Yield Farming Actually Means

Imagine a currency-exchange counter at an airport. For the counter to work, it must hold a stock of different currencies in advance, so travellers can swap one currency for another without waiting for a specific buyer. In DeFi, a liquidity pool plays a similar role. Instead of one company stocking the counter, many ordinary users deposit tokens into a shared pool run by a smart contract. Traders swap through that pool and pay a small fee. The people who supplied the tokens share those fees.

That act of supplying tokens to earn a share of fees or other rewards is the core of yield farming. The "farming" part comes from the habit of moving funds between protocols to chase higher rewards, and from extra reward tokens that some protocols hand out to attract deposits. The "yield" is simply everything you receive back on top of your deposit — fees, interest, or reward tokens combined.

Three related terms often get mixed up, so it helps to separate them clearly.

| Activity | What you supply | Main source of reward | Extra complexity |
|---|---|---|---|
| Staking | One token locked to help secure a network | Network rewards set by protocol rules | Usually the simplest of the three |
| Lending | One asset supplied to a lending market | Interest paid by borrowers | Borrower and liquidation rules matter |
| Liquidity providing | Usually two tokens supplied to a trading pool | A share of trading fees | Impermanent loss can reduce returns |
| Yield farming | Assets moved across pools or protocols to combine rewards | Fees plus interest plus incentive tokens | Highest complexity and most moving parts |

## How a Liquidity Pool Pays Rewards, Step by Step

Most beginners meet yield farming through a liquidity pool on a decentralised exchange, often called a DEX. The flow below is the common pattern, although each protocol has its own rules.

### 1. You deposit a pair of tokens

Many pools ask for two tokens in equal value, for example a stablecoin and another crypto asset. An automated market maker, a pricing formula inside the smart contract, uses the pooled tokens to quote a price for every swap. You do not choose a buyer. The pool itself is the counterparty for traders.

### 2. You receive a receipt token

After depositing, the protocol usually gives you a liquidity provider token, often shortened to LP token. Think of it as a cloakroom receipt. It represents your share of the pool, not a fixed amount of either original token. Keep it safe, because whoever holds that receipt can normally claim the corresponding share when withdrawing.

### 3. Traders pay fees into the pool

Every swap through the pool pays a fee. That fee is added to the pool or distributed under the protocol's rules, so each LP share can become worth slightly more over time if trading is active and nothing else goes wrong. This is the most understandable source of yield: real users paid real fees for a service your deposit helped provide.

### 4. Some protocols add incentive tokens

To attract deposits quickly, a protocol may also pay its own newly issued token on top of trading fees. This can make the displayed reward rate look very high in the early days. The catch is that the reward is paid in that new token, whose market price can fall sharply, especially if many farmers sell it as soon as they receive it. A high reward paid in a falling token can be worth far less in rupees than the headline suggests.

### 5. You withdraw — and the amounts may differ

When you withdraw, you receive your share of the pool as it stands at that moment, which may be a different mix of the two tokens than you deposited. If one token's price moved a lot against the other, the pool's automatic rebalancing leaves you with more of the token that fell and less of the token that rose. That effect is called impermanent loss, and it is explained in the risks section below.

## Why the Displayed APY Can Mislead Beginners

DeFi sites often show a large number labelled APY or APR. APY usually assumes rewards are reinvested and compounded, while APR is the simpler annual rate without compounding. Both are estimates based on recent activity, not promises for the next year. A pool that was busy yesterday may be quiet tomorrow, incentive tokens may stop, and the reward token's price may change.

A useful habit is to ask three questions about any displayed rate. First, in which token is the reward paid, and can that token lose value? Second, does the rate depend on a temporary incentive programme? Third, does the calculation include losses, fees, and the cost of moving funds? If a site shows only a big percentage with no clear breakdown, treat that percentage as marketing, not as a reliable expectation. Any scheme, in DeFi or on Telegram, that promises a fixed daily return is describing something very different from normal pool fees, and guaranteed-return language is a classic scam warning sign.

## The Real Risks Behind the Rewards

**Impermanent loss.** If you supply two tokens and one rises or falls strongly against the other, withdrawing can give you less total value than simply holding the two tokens in your wallet would have given you. Trading fees sometimes offset this difference and sometimes do not. The word "impermanent" is misleading, because the loss becomes permanent the moment you withdraw at those prices.

**Smart contract risk.** Your funds sit inside code, not inside a bank vault. A bug, a poorly designed upgrade, or a compromised admin key can freeze or drain a pool. Well-known protocols reduce this risk with audits and time in the market, but no audit turns code into a guarantee.

**Reward-token and depeg risk.** If rewards are paid in a new token, that token can collapse. If a pool contains a stablecoin, that stablecoin can also lose its peg temporarily or, in rare cases, permanently. Your deposit is then exposed to an asset you may not have studied at all.

**Rug pull risk.** In a small, unknown pool, the creators may control most of the liquidity or hold special permissions that let them change rules or drain funds. This is why anonymous teams, unaudited contracts, and locked-liquidity claims that cannot be verified deserve extra caution.

**Approval and fake-site risk.** Using DeFi means approving a smart contract to spend tokens from your wallet. A fake website that copies a real protocol can trick you into approving a malicious contract instead. Bookmark official sites, verify contract addresses from official documentation, and review approvals in your wallet before signing. Never enter your recovery phrase on a farming website — a legitimate protocol never needs it.

**Fees and small balances.** Moving funds between wallets, pools, and networks costs network fees on every step. For a small deposit in rupees, those fixed costs, plus exchange fees when you first buy crypto with INR, can consume a large share of any reward. A strategy that looks reasonable on a large deposit can be pointless on a small one simply because of friction.

## Yield Farming in the Indian Context

Most Indian beginners first buy crypto in INR on an exchange such as CoinDCX, WazirX, or ZebPay, paying by UPI or bank transfer. Yield farming itself does not happen there. It happens in self-custody wallets connected to DeFi protocols, which means you must withdraw crypto to your own wallet, choose the correct network, and manage your own security. There is no customer support desk that can reverse a wrong-network transfer or a malicious approval.

Records matter from the very first step. Save the exchange receipt for your INR purchase, the withdrawal details, each deposit and withdrawal from a pool, and the INR value of rewards when you receive and when you later transfer them. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. In practice, gains on transfers of virtual digital assets are taxed at a flat 30% in India and 1% TDS applies on consideration for transfers in many situations, while the treatment of DeFi rewards can be fact-specific. Because losses generally cannot be set off in the usual way, a farming result that looks positive on a protocol dashboard can look very different after tax. Keep clean records and take professional advice for your own situation rather than relying on social media summaries.

Also check platform status carefully. Offshore and decentralised services may not be registered in the same way as Indian exchanges, and rules around access can change. Understanding the mechanism first, with the official documentation open, is safer than copying a wallet address or a strategy from a video comment.

## A Beginner's Checklist Before Touching Any Pool

Before depositing into any pool, answer these questions in writing. Where does the yield come from — fees, borrower interest, or new tokens? What is impermanent loss in this specific pair likely to look like if prices move sharply? Is the contract address verified from official documentation, and is the site the real one? What are the total fees to enter and exit, counted in INR? Can I explain how to withdraw, step by step, before I deposit? And have I set up a record sheet for dates, amounts, and INR values? If any answer is "I don't know", the educational next step is to keep reading and practise reading pool documentation, not to deposit and hope the dashboard teaches you.

## Frequently Asked Questions

### What is yield farming in simple words?

Yield farming means placing crypto into a DeFi protocol, such as a liquidity pool or lending market, so the protocol can use it and pay rewards in return. The yield is not guaranteed. Rewards change with trading activity, token prices, and protocol rules, and the value you withdraw can be less than the value you deposited.

### Where do yield farming rewards actually come from?

Rewards usually come from three sources: trading fees paid by users of a pool, interest paid by borrowers, or new tokens issued by a protocol to attract deposits. If a reward cannot be explained by fees or interest, it is often paid from token issuance, which can lose value quickly if many people sell it.

### How is yield farming taxed in India?

Indian users should record the date, amount, and INR value of every deposit, reward, and withdrawal, because transfers of virtual digital assets can have tax consequences. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing, and consider professional tax advice for DeFi activity.

## Conclusion

Yield farming is not a bank deposit with a crypto label. It is supplying assets to trading pools and lending markets in return for fees, interest, or incentive tokens, while carrying impermanent loss, smart contract, depeg, and scam risks yourself. For Indian beginners, the most valuable first skill is not finding the highest displayed APY. It is tracing exactly where a reward comes from, counting the full cost in INR, verifying the real contract, and keeping tax-ready records. If a yield cannot be explained in plain words, that is your answer: pause, research further, and let the opportunity pass until it can be.
