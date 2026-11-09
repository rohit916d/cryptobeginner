---
title: "What Is a Funding Rate? Crypto Perpetual Costs Explained"
category: "Trading"
excerpt: "Funding rates are the payments that keep perpetual crypto contracts near the spot price. Learn how they work, what they cost, and the traps to avoid."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/trading-basics.jpg"
created_at: "2026-11-09T05:23:00+00:00"
faqs:
  - question: "Do I pay a funding rate on every crypto trade?"
    answer: "No. Funding rates apply only to perpetual futures contracts, not to spot buying on an exchange. If you buy Bitcoin on an Indian exchange and hold it in your account, no funding rate applies. You only encounter funding rates when you open a perpetual contract position, which is a leveraged derivative — a product most beginners should avoid until they fully understand the risks."
  - question: "Is a high funding rate a signal that the price will fall?"
    answer: "Not reliably. A high positive funding rate shows that many traders are long and paying shorts, which means sentiment is crowded on one side — but crowded trades can stay crowded for a long time, and prices can keep rising while funding stays high. Treat the funding rate as a cost and a sentiment gauge, never as a price prediction."
  - question: "Can I earn money by collecting funding rates?"
    answer: "In theory, holding the side that receives funding payments earns small periodic payments — but this is not free money. You carry the full price risk of an open leveraged position, funding rates can flip sign at any time, and exchange fees eat into the payments. Many so-called funding-rate arbitrage bots promoted on Telegram and YouTube are scams, so be very cautious of anyone promising risk-free funding income."
---

# What Is a Funding Rate? Crypto Perpetual Costs Explained

If you have ever looked at a crypto derivatives screen, you may have seen a small percentage labelled "funding rate" next to a trading pair. It looks harmless — often something like 0.01% — but for anyone trading perpetual contracts, it is a real cost that adds up quietly, every few hours, for as long as a position stays open.

A funding rate is a periodic payment exchanged between traders who hold long positions and traders who hold short positions in a perpetual futures contract. It is the mechanism that keeps the price of a perpetual contract close to the price of the actual crypto asset. This guide explains how funding rates work, who pays whom, what they cost in real money, and the traps beginners in India should watch out for.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. Perpetual contracts are leveraged products that can lose money quickly, and this guide explains how they work so you can understand them, not so you can trade them.

## What Is a Funding Rate?

A funding rate is a small fee that changes hands between long and short traders on perpetual futures contracts. Unlike a normal exchange fee, it is not paid to the exchange. It is paid directly from one group of traders to the other.

To understand why it exists, first understand what a perpetual contract is. A perpetual contract is a derivative that lets traders bet on the price of a crypto asset without owning it and without an expiry date. Traditional futures contracts expire on a fixed date, which forces their price to meet the real price at expiry. Perpetual contracts never expire, so they need another mechanism to stay tied to the real price. That mechanism is the funding rate.

Here is the simple idea: when the perpetual contract price rises above the actual spot price, long traders pay short traders. When the perpetual price falls below the spot price, short traders pay long traders. The payment pushes traders in the direction that brings the contract price back toward the spot price.

## Why Funding Rates Exist

Imagine a perpetual contract for Bitcoin trading at ₹1,00,00,000 while Bitcoin itself trades at ₹99,00,000 on spot exchanges. The contract is more expensive than the real asset. That gap should not last, because traders could profit from the difference — but perpetual contracts have no expiry date to force the two prices together.

The funding rate solves this. When the contract trades above spot, the funding rate turns positive, and longs pay shorts. Paying a fee makes holding a long position less attractive, so some longs close their positions, which pushes the contract price down toward the spot price. At the same time, receiving a payment makes shorting more attractive, which adds selling pressure and also pushes the price down.

The reverse happens when the contract trades below spot. The funding rate turns negative, shorts pay longs, and the incentives push the price back up. The funding rate is, in effect, a small tug that keeps the derivative anchored to reality.

## How Funding Rates Are Calculated

Every exchange calculates funding rates slightly differently, but the logic is similar everywhere. The rate has two main ingredients:

1. **The interest rate component.** This reflects the difference between the cost of borrowing the quote currency (such as USDT or INR) and the cost of borrowing the base crypto asset. On most exchanges this part is tiny and often fixed at a small value such as 0.01% per funding interval.
2. **The premium component.** This measures how far the perpetual contract price has drifted from the spot price. The bigger the gap, the bigger this component, and the stronger the push back toward the spot price.

Funding payments usually happen every 8 hours — at fixed times such as 00:00, 08:00 and 16:00 UTC on many platforms — though some exchanges use 1-hour or 4-hour intervals. The exact rate is recalculated continuously and only the rate in force at the funding time is actually charged.

The important point for a beginner is not the formula. It is that the funding rate is a market-driven number: it rises when traders are heavily long and falls (or turns negative) when traders are heavily short.

## Positive vs Negative Funding Rates

The sign of the funding rate tells you which side is paying and which side is receiving.

| Funding rate | Market situation | Who pays | Who receives |
|---|---|---|---|
| Positive | Perpetual price above spot; more traders long | Long positions | Short positions |
| Negative | Perpetual price below spot; more traders short | Short positions | Long positions |
| Near zero | Contract price close to spot; balanced market | Almost nobody | Almost nobody |

A positive funding rate is the most common situation in a rising market, because more traders want to be long. A negative rate is less common but appears during sharp sell-offs, when traders rush to short.

Note that the funding rate is expressed as a percentage of your position size, not of your margin. This matters enormously when leverage is involved, as the example below shows.

## Who Pays Whom: A Worked Example

Suppose you open a long perpetual position worth ₹1,00,000, and the funding rate at the next funding time is 0.01% per 8-hour interval. You would pay ₹10 to the short side at that funding time (0.01% of ₹1,00,000). That sounds tiny. But funding is charged three times a day, so over a month it adds up to roughly ₹900 — nearly 1% of your position size per month, even before exchange trading fees.

Now add leverage. Suppose you opened that ₹1,00,000 position with only ₹10,000 of your own money, using 10x leverage. The funding payment is still ₹10 per interval, because it is calculated on the full position size. Relative to your ₹10,000 margin, that is 0.1% per interval, or roughly 9% per month. A rate that looked negligible suddenly becomes a serious drag on your money.

And funding rates are not always 0.01%. During very crowded market moves they can spike much higher — sometimes to 0.1% or more per 8-hour interval. At that level, a leveraged long position can lose a large share of its margin to funding payments alone within days, even if the price barely moves.

## What Funding Rates Cost a Beginner in India

For Indian users, there are a few extra things to keep in mind:

- **Most FIU-IND registered Indian exchanges offer spot trading only.** Perpetual contracts are generally found on offshore platforms. Before using any platform, check whether it is FIU-IND registered and whether it accepts Indian users — using an unregistered offshore platform carries compliance and fund-recovery risks.
- **Funding is charged in crypto, not rupees.** Payments are usually settled in the contract's quote asset, such as USDT, which adds a conversion step if you eventually want rupees.
- **Funding stacks with other costs.** Trading fees, spreads, and — for Indian tax purposes — the 1% TDS deducted on crypto transfers by registered exchanges all sit on top of funding costs. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.
- **The cost is silent.** Unlike a trading fee that appears on an order ticket, funding payments are deducted automatically from your margin at each funding time. Many beginners only notice them when their position balance has quietly shrunk.

The honest summary: funding rates are a real, recurring cost of holding perpetual positions. They are easy to ignore and expensive to ignore.

## What Funding Rates Cannot Tell You

Because funding rates reflect trader sentiment, beginners often treat them as trading signals. Be careful. Here is what a funding rate can and cannot do:

- **It can show crowding.** A very high positive rate means many traders are long and paying to stay long. That tells you sentiment is one-sided, which is useful context.
- **It cannot predict prices.** Crowded trades can stay crowded. Prices can keep rising for weeks while funding stays high, and every trader waiting for a fall keeps paying. Using a high funding rate as a reason to short is a guess, not a strategy.
- **It cannot tell you when a move will happen.** Funding rates describe the present, not the future. A rate can flip from positive to negative within a single 8-hour interval if sentiment changes.
- **It is not a measure of value.** A high funding rate says nothing about whether a crypto asset is fairly priced. It only says something about the derivatives market around it.

If you see an influencer claim that a funding rate "predicts" a price move with certainty, treat that as a red flag about the influencer, not as information about the market.

## Funding Rate Risks and Common Traps

**The funding-rate "arbitrage" scam.** A common scam promoted on Telegram, WhatsApp and YouTube promises risk-free income from "funding rate arbitrage bots" or "funding farming". The pitch is that you can collect funding payments risk-free. In reality, there is no risk-free version: you carry price risk, rates flip, and fees eat the profit. Worse, many of these schemes ask you to deposit crypto into a fake platform or share wallet access — and the deposit is never seen again. No legitimate opportunity needs you to send crypto to a stranger's wallet.

**Holding leveraged positions for weeks.** Beginners sometimes open a leveraged perpetual position and forget about it. Funding payments keep draining the margin every 8 hours. Combined with normal price movement, this is one of the most common ways beginners lose money on derivatives without ever making a "bad trade".

**Chasing the receiving side.** Some traders flip to the short side just to collect funding payments during a hot market. But shorting into a rising market to earn a small funding payment is like picking up coins in front of a steamroller — the price move against you can be many times larger than the funding you collect.

**Confusing funding with fees.** Funding is not an exchange fee, and it does not go to the exchange. If an exchange advertises "zero fees", funding payments can still apply on perpetual contracts. Always read the contract details before opening a position.

## A 5-Minute Funding Rate Check

If you ever consider a perpetual contract — and most beginners should not — run through this quick check first:

1. **Read the funding rate and the interval.** Is it charged every 8 hours or every hour? What is the current rate?
2. **Work out the monthly cost.** Multiply the rate by three intervals a day and thirty days, on the full position size. If that number surprises you, the position is too big or too leveraged.
3. **Check whether you even need a perpetual.** If you simply want to own a crypto asset, spot buying on a registered Indian exchange has no funding rate at all.
4. **Confirm the platform.** Is it FIU-IND registered? Can you withdraw INR through UPI or bank transfer? If the answers are unclear, do not deposit funds.
5. **Assume the rate can flip.** Never plan around receiving funding payments. Treat any payment you receive as a bonus, not income.

## Frequently Asked Questions

**Do I pay a funding rate on every crypto trade?**

No. Funding rates apply only to perpetual futures contracts, not to spot buying on an exchange. If you buy Bitcoin on an Indian exchange and hold it in your account, no funding rate applies. You only encounter funding rates when you open a perpetual contract position, which is a leveraged derivative — a product most beginners should avoid until they fully understand the risks.

**Is a high funding rate a signal that the price will fall?**

Not reliably. A high positive funding rate shows that many traders are long and paying shorts, which means sentiment is crowded on one side — but crowded trades can stay crowded for a long time, and prices can keep rising while funding stays high. Treat the funding rate as a cost and a sentiment gauge, never as a price prediction.

**Can I earn money by collecting funding rates?**

In theory, holding the side that receives funding payments earns small periodic payments — but this is not free money. You carry the full price risk of an open leveraged position, funding rates can flip sign at any time, and exchange fees eat into the payments. Many so-called funding-rate arbitrage bots promoted on Telegram and YouTube are scams, so be very cautious of anyone promising risk-free funding income.

## The Bottom Line

A funding rate is the small, regular payment that keeps perpetual crypto contracts anchored to the real price of the asset. Longs pay shorts when the contract trades above spot; shorts pay longs when it trades below. The rate looks tiny — often 0.01% per interval — but it is charged on the full position size, several times a day, which makes it a serious cost for leveraged positions held over days or weeks.

For most Indian beginners, the practical lesson is simple: if you buy crypto on the spot market through a registered Indian exchange, funding rates never touch you. They only matter if you step into perpetual contracts — and if you do, understand the funding cost before you open the position, not after your margin has quietly drained away.

If you found this guide useful, read our explainers on [crypto futures](/blog/what-are-crypto-futures-explained-india-guide) and [leverage](/blog/crypto-leverage-explained-why-beginners-should-avoid-it) next — both explain the products where funding rates actually apply, and why most beginners are better off without them.
