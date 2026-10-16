---
title: "What Is Impermanent Loss? Liquidity Risk Explained"
category: "DeFi"
excerpt: "Impermanent loss explained for Indian beginners: why liquidity pools can return less than holding, with a simple INR example and safety checks."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/defi.jpg"
created_at: "2026-10-13T13:22:48+00:00"
faqs:
  - question: "What is impermanent loss in simple words?"
    answer: "Impermanent loss is the gap between what your two tokens would be worth if you had simply held them in your wallet and what they are worth after sitting in a liquidity pool. The pool automatically rebalances as prices move, so you end up holding more of the token that fell and less of the token that rose."
  - question: "Can trading fees make up for impermanent loss?"
    answer: "Sometimes, but not always. Busy pools earn more in trading fees, which can offset a small price move. A large or fast price move can easily create a gap bigger than all the fees earned. Fees are never guaranteed, so beginners should treat them as a possible offset, not as protection."
  - question: "How does impermanent loss affect Indian users for tax?"
    answer: "Indian users should record the deposit date, token amounts, INR values, fees earned, and withdrawal values for every pool, because later transfers can have tax consequences. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

# What Is Impermanent Loss? Liquidity Risk Explained

Impermanent loss is the hidden cost that surprises many beginners the first time they supply tokens to a liquidity pool. You deposit two tokens, the pool shows fees building up, and everything looks positive — yet when you withdraw, the total value can be lower than if you had simply held the same two tokens in your own wallet. Nothing was stolen and no one made an error. The gap comes from the way the pool itself works. Understanding impermanent loss before you ever use a pool is one of the most useful DeFi lessons a beginner can learn.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose.

## What Impermanent Loss Actually Means

A liquidity pool is a shared pot of two tokens held by a smart contract on a decentralised exchange, often called a DEX. Traders swap one token for the other through the pool instead of trading directly with another person. Users who deposit tokens into the pot are called liquidity providers. They earn a small share of the trading fees, and in return the pool is allowed to rebalance their deposit automatically.

That automatic rebalancing is the source of impermanent loss. The pool always tries to keep the two sides balanced in value according to its pricing formula. If one token rises in price, traders buy it from the pool until the price inside the pool matches the wider market. As a result, the pool ends up holding less of the token that rose and more of the token that stayed flat or fell. If one token falls, the opposite happens and the pool accumulates more of the falling token.

Impermanent loss compares two outcomes for the same starting deposit:

| Outcome compared | What happens to your two tokens |
|---|---|
| Simply holding | Amounts stay exactly as you bought them; only prices change |
| Supplying to a pool | Amounts change as the pool rebalances; you hold more of the weaker token |
| The difference | That difference in total value is the impermanent loss |

The key point is that the loss is measured against holding, not against your original deposit in rupees. Your pool position can even be worth more in INR than when you deposited and still show impermanent loss, because holding would have been worth even more. That is why the concept confuses beginners: it is a relative loss, not always an absolute one.

## How a Pool Creates the Loss, Step by Step

### 1. You deposit two tokens in equal value

Most classic pools ask for two tokens of equal value. For a simple illustration, imagine a pool holding Token A and a stablecoin designed to track the US dollar. You deposit the equivalent of ₹10,000 in total — ₹5,000 of Token A and ₹5,000 of the stablecoin. At deposit time, suppose Token A is worth ₹100, so your share represents 50 units of Token A plus the stablecoin side.

### 2. The outside price of Token A moves

Crypto prices move around the clock. If Token A doubles to ₹200 on the wider market, traders quickly notice that the pool is still pricing it near the old level. They buy Token A from the pool with stablecoins until the pool price catches up. This buying is normal and expected — it is how the pool stays in line with the market.

### 3. Your mix of tokens has changed

After that buying, the pool holds fewer units of Token A and more stablecoins than before. Your share reflects that new mix. You now own less of the token that doubled and more of the token that stayed the same. If Token A had halved instead, traders would have sold it into the pool, and you would end up holding more of the token that fell.

### 4. You compare with simply holding

Had you held, you would still have all 50 units of Token A, now worth twice as much, plus your unchanged stablecoin. In the pool, part of that gain was traded away automatically during rebalancing. The shortfall between the holding value and the pool value is the impermanent loss. Trading fees earned along the way may reduce the shortfall, but they do not remove the mechanism.

## A Simple INR Example Without the Maths Fog

Exact pool maths uses a formula, but beginners do not need the formula to grasp the size of the effect. The table below uses rounded, illustrative numbers only to show the direction and scale. It is not a price prediction and it does not describe any real token.

| Price move of Token A | Value if you just held ₹10,000 | Approx. pool value before fees | Approx. gap vs holding |
|---|---|---|---|
| No change | ₹10,000 | ₹10,000 | ₹0 |
| Rises 25% | ₹11,250 | About ₹11,180 | Small, under 1% |
| Doubles | ₹15,000 | About ₹14,140 | Around 5–6% |
| Halves | ₹7,500 | About ₹7,070 | Around 5–6% |
| Falls 75% | ₹6,250 | About ₹5,000 | Around 20% |

Two lessons stand out. First, small price moves create only a small gap, which busy pools can sometimes cover with fees. Second, the gap grows quickly as the move gets bigger, in either direction. A token that doubles can create impermanent loss just as a token that crashes can, because in both cases the two tokens in the pair have moved far apart. What matters is how much the prices diverge from each other, not whether the market went up or down.

Pairs behave differently depending on what is inside them. Two stablecoins that both track the same currency usually stay close in price, so divergence is typically small, although depeg risk still exists. A volatile token paired with a stablecoin can diverge a lot. Two volatile tokens can diverge in complicated ways if they move in opposite directions. Reading a pool therefore starts with reading the pair, not the fee percentage on the screen.

## Why the Word Impermanent Is Misleading

The loss is called impermanent because, in theory, if prices return exactly to where they were when you deposited, the pool mix returns to its original balance and the gap disappears. In practice, prices rarely return neatly to an old level, and the moment you withdraw at different prices, the result is locked in. At withdrawal, there is nothing temporary about it.

A better mental model is to call it divergence loss in your head. The pool has a built-in habit: it gradually sells the token that is rising and buys the token that is falling, in order to keep quoting a fair market price to traders. That habit is useful for traders. For the provider, it means giving up part of the upside of the stronger token and taking on more of the weaker one. Fees are the payment providers receive for accepting that trade-off.

## Can Trading Fees Offset the Loss?

Sometimes, yes. If a pool handles a large volume of trades and prices move only modestly, the fees collected can be larger than the divergence gap, leaving the provider ahead of simply holding. This is most likely in heavily used pools over periods of steady trading.

But three cautions matter for beginners. First, fee income is not fixed — a quiet week earns far less than a busy week, and dashboards that show annual rates are extrapolating recent activity, not promising a year of it. Second, the biggest price moves often happen fast, in hours, while fees build slowly. A single sharp move can create a gap that months of fees would not cover. Third, entering and leaving a pool itself costs money: network fees on each transaction, plus the exchange fees and spreads you paid when you first bought crypto with INR through UPI or bank transfer on an Indian exchange such as CoinDCX, WazirX, or ZebPay. On a small deposit, those fixed costs eat a large share of any fee income before impermanent loss is even counted.

Any person or group promising that pool fees will definitely cover losses, or advertising fixed daily returns from liquidity, is misdescribing how pools work. Guaranteed-return language is a well-known scam pattern in India, especially in Telegram and WhatsApp groups, and it should end the conversation immediately.

## Impermanent Loss in the Indian Context

For Indian beginners, the practical side matters as much as the maths. Liquidity pools live in self-custody wallets connected to DeFi protocols, not inside your exchange account. That means no support team can reverse a deposit made to a fake pool website, a wrong contract, or an incorrect network. Verifying the official site and contract address from the protocol's own documentation is a basic safety habit, and your recovery phrase should never be typed into any pool or farming page.

Records are equally important. Keep a simple sheet with the date of each deposit, the tokens and amounts, their INR value at deposit, fees earned, and the amounts and INR value at withdrawal. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. In general, gains on transfers of virtual digital assets are taxed at a flat 30% in India and 1% TDS applies on consideration for transfers in many situations, while the tax treatment of specific DeFi rewards and withdrawals can depend on the facts. Because Indian rules generally do not allow losses to be set off in the usual way, a pool result that looks mildly positive on screen can look different after tax. Clean records and professional advice for your own situation are worth far more than summaries on social media.

## A Beginner's Check Before Judging Any Pool

Use these questions to study a pool on paper before risking anything. How far apart could the two tokens realistically move, given both are volatile or one is meant to be stable? How much trading volume does the pool actually handle, and are the displayed fees based on a few busy days? What will it cost in INR to enter, move funds between networks if needed, and exit? Can you explain, in plain words, why your token mix will be different at withdrawal? And have you recorded the deposit details for tax purposes?

If you cannot answer the first question confidently, the honest conclusion is that you do not yet understand the main risk of that pool. Learning the mechanism first — as you are doing in this guide — is the correct order. Pools do not reward speed; they reward accurate expectations.

## Frequently Asked Questions

### What is impermanent loss in simple words?

Impermanent loss is the gap between what your two tokens would be worth if you had simply held them in your wallet and what they are worth after sitting in a liquidity pool. The pool automatically rebalances as prices move, so you end up holding more of the token that fell and less of the token that rose.

### Can trading fees make up for impermanent loss?

Sometimes, but not always. Busy pools earn more in trading fees, which can offset a small price move. A large or fast price move can easily create a gap bigger than all the fees earned. Fees are never guaranteed, so beginners should treat them as a possible offset, not as protection.

### How does impermanent loss affect Indian users for tax?

Indian users should record the deposit date, token amounts, INR values, fees earned, and withdrawal values for every pool, because later transfers can have tax consequences. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## Conclusion

Impermanent loss is not a bug, a scam, or bad luck. It is the built-in cost of how liquidity pools rebalance: you hold more of the token that weakened and less of the token that strengthened, and the gap versus simply holding grows as prices diverge. Fees can sometimes cover a small gap, but they are never a guarantee, and the loss becomes real the moment you withdraw. For Indian beginners, the valuable skill is not chasing the highest fee display. It is reading the pair inside a pool, estimating how far those two prices could move apart, counting every cost in INR, and keeping tax-ready records. If you can explain impermanent loss in your own words, you already understand DeFi pools better than most people who deposit into them.


## Keep Learning

If you found this guide useful, these related guides will help you go deeper:

- [What Are Governance Tokens? Voting Rights Explained](https://cryptobeginner.in/blog/what-are-governance-tokens-india-guide)
- [What Is Yield Farming? DeFi Rewards and Risks Explained](https://cryptobeginner.in/blog/what-is-yield-farming-defi-rewards-india-guide)
- [What Are Wrapped Tokens? WBTC Explained for Beginners](https://cryptobeginner.in/blog/what-are-wrapped-tokens-wbtc-india-guide)
