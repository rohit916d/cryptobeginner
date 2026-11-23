---
title: "What Is an OCO Order? One-Cancels-the-Other Explained"
category: "Trading"
excerpt: "Learn what an OCO order is, how its two linked orders work on Indian crypto exchanges, and the risks beginners should understand before using one."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/trading-basics.jpg"
created_at: "2026-11-20T05:22:07+00:00"
faqs:
  - question: "What does OCO mean in crypto trading?"
    answer: "OCO stands for One-Cancels-the-Other. It is a pair of linked orders — usually a take-profit limit order and a stop-loss stop-limit order — placed at the same time. When one of the two orders fills, the exchange automatically cancels the other. This lets a trader set both a target exit and a safety exit in advance, without watching the screen all day."
  - question: "Can an OCO order guarantee I sell at my chosen price?"
    answer: "No. The limit leg of an OCO can only fill if the market reaches your price, and the stop-limit leg can slip or fail to fill if the price moves sharply past it, because a stop-limit order still needs a buyer at or above your limit price. Crypto trades 24 hours a day and prices can gap, so a stop does not promise an exact exit price. Treat an OCO as a plan, not a guarantee."
  - question: "Do Indian crypto exchanges support OCO orders?"
    answer: "Support varies by exchange, so check the order options on your own platform before assuming OCO is available. Some Indian exchanges offer it directly, while others only offer the separate limit and stop-limit orders you would use to build the same plan manually. Whatever you trade, remember that crypto gains in India are taxed at a flat 30% and a 1% TDS applies on many trades, so keep your order and sale records."
---

# What Is an OCO Order? One-Cancels-the-Other Explained

Imagine you buy some Bitcoin on an Indian exchange and then you have to leave for work. You would like to sell it for a profit if the price rises to a level you have in mind — but you would also like to cut your loss if the price falls below a level you can accept. Without the right tool, you would need to stare at the price chart all day, or place one order and hope you are awake when the other one is needed. An OCO order solves exactly this problem: it lets you set both exits at once, and the exchange cancels whichever one you no longer need.

OCO stands for One-Cancels-the-Other. It is a pair of orders linked together, so that when one of them fills, the other is cancelled automatically. For a beginner, it is less about advanced trading and more about planning ahead: you decide your target and your safety net before the market moves, instead of making emotional decisions while it is moving.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains how OCO orders work; it does not tell you whether or when to use one.

## What an OCO Order Actually Is

An OCO order is not a single order type. It is a container that holds two orders at the same time:

1. **A take-profit limit order** — "sell my crypto if the price rises to this level."
2. **A stop-loss stop-limit order** — "sell my crypto if the price falls to this level."

Both orders sit live on the exchange at once. The moment one of them fills, the other disappears. That is the whole idea: you can only sell the same coins once, so you must never have both orders live after one of them has done its job. The exchange handles that cancellation for you.

Think of it like a train ticket with two possible destinations. You book a ticket that says "if the train goes north, get off at the profit station; if it goes south, get off at the safety station." You only travel one way, so whichever station you reach first, the other ticket is torn up automatically.

An OCO is most commonly used to sell a coin you already hold, but on exchanges that support it, the same structure can also be used to open a position — for example, to buy if the price breaks upward or dips downward. For beginners, the sell-side use is the natural starting point, and that is what this guide focuses on.

## A Worked Example in Rupees

Numbers make the idea concrete. Suppose you buy 0.01 Bitcoin at ₹50,00,000 per Bitcoin. Your total cost is ₹50,000, before fees. You decide two things in advance:

- You would be happy to take a profit if Bitcoin reaches ₹55,00,000. That would make your 0.01 BTC worth ₹55,000 — a ₹5,000 gain before fees and tax.
- You want to limit your loss if Bitcoin falls to ₹45,00,000. That would make your 0.01 BTC worth ₹45,000 — a ₹5,000 loss before fees and tax.

With an OCO order, you place both instructions together:

- **Limit order (take profit):** sell 0.01 BTC at ₹55,00,000.
- **Stop-limit order (stop loss):** trigger at ₹45,00,000, with a limit price of ₹44,90,000.

Now three outcomes are possible, and each one is handled automatically:

- **Price rises to ₹55,00,000.** The limit order fills, you sell at your target, and the stop-loss order is cancelled. Your profit is locked in.
- **Price falls to ₹45,00,000.** The stop-limit order is triggered, you sell near your safety level, and the take-profit order is cancelled. Your loss is limited to roughly the amount you planned.
- **Price stays between the two levels.** Neither order fills, and both stay live until you cancel them or they expire. You can change or remove them at any time.

Notice the stop-limit leg has two prices: a trigger price (₹45,00,000) and a limit price (₹44,90,000). The trigger wakes the order up; the limit is the lowest price you are willing to accept. That small gap matters, because in a fast-moving market the price can fall past your trigger before your order finds a buyer. If the price drops below your limit price before the order fills, the order may stay open and unfilled — which is why a stop-limit is not a guaranteed exit.

## The Two Orders Inside an OCO, Explained

### The take-profit limit order

A limit order only fills at your price or better. If you set a sell limit of ₹55,00,000, the exchange will not sell your Bitcoin for less than that. The trade-off is that the order only fills if the market actually reaches your price. If Bitcoin rises to ₹54,90,000 and then falls again, your order stays unfilled and you keep holding.

### The stop-loss stop-limit order

A stop-limit order has two parts. The **stop (trigger) price** is the level that activates the order. The **limit price** is the worst price you will accept once it activates. When the market touches the trigger, the exchange places a normal limit order at your limit price.

Why two prices instead of one? Because a plain stop order would sell at whatever price is available next, which in a fast crash could be far below your trigger. The limit price protects you from a terrible fill — but it also means the order might not fill at all if the price plunges straight past your limit. Every stop order is a trade-off between certainty of price and certainty of execution, and the stop-limit version chooses price certainty.

## How to Place an OCO Order on an Indian Exchange

Exact screens differ by exchange, but the steps follow the same pattern:

1. **Open the trading page** for the pair you hold, such as BTC/INR.
2. **Find the OCO option** in the order panel. Some exchanges label it "OCO", others "One-Cancels-the-Other" or "OCO (Limit + Stop-Limit)". If you cannot find it, your exchange may not offer it — check its help pages before assuming.
3. **Enter the quantity** — the amount of crypto the OCO should sell. This cannot exceed what you hold.
4. **Set the limit price** — your take-profit level, above the current price for a sell OCO.
5. **Set the stop price and limit price** — your safety level, below the current price, with a small gap between the trigger and the limit.
6. **Review the summary** carefully: quantity, both prices, and the estimated fees.
7. **Confirm the order** and check that both legs appear as open orders.

Once placed, you can cancel the whole OCO at any time, and cancelling it removes both legs together. You can also modify the prices on most exchanges by cancelling and re-placing the order.

## OCO vs Other Order Types

Beginners often confuse OCO with the order types it is built from. Here is how they differ:

| Order type | What it does | What happens to the other order |
|---|---|---|
| **Market order** | Buys or sells immediately at the best available price | There is no other order |
| **Limit order** | Buys or sells only at your price or better | There is no other order |
| **Stop-limit order** | Triggers at a stop price, then becomes a limit order | There is no other order |
| **Trailing stop order** | Stop price moves up as the market rises, never down | There is no other order |
| **OCO order** | Two linked orders — one limit, one stop-limit — placed together | When one fills, the other is cancelled automatically |

The key difference is the pairing. A plain stop-loss order on its own cannot also lock in a profit. A plain limit order on its own cannot protect you from a fall. An OCO does both at once, which is why traders use it when they cannot watch the market continuously.

Compared with a trailing stop, an OCO is simpler to understand but less flexible: its stop level is fixed, so it does not follow the price upward. A trailing stop protects more of a rising profit, but it also has its own risks, such as being triggered by a brief dip. Neither tool is "better" in general — they solve different problems.

## Why Beginners Find OCO Orders Useful

An OCO order appeals to beginners for a few honest reasons:

- **It removes the need to watch the screen.** Crypto trades 24 hours a day, seven days a week. Nobody can watch it all the time, and an OCO keeps your plan running while you sleep or work.
- **It turns a decision into a plan.** You choose your target and your safety level when you are calm, rather than deciding in the middle of a fast price move.
- **It limits emotional trading.** A pre-set exit is harder to ignore than a vague intention to "sell if it falls too much". Many beginners hold losing positions far too long because they keep moving their own goalposts.
- **It costs nothing extra to place.** The exchange charges the normal trading fee only on the order that fills. The cancelled leg costs nothing.

These are real advantages — but they only help if the plan itself is sensible. An OCO cannot fix a bad target, a stop placed too close to the current price, or a position that was too large to begin with.

## The Risks and Limits of OCO Orders

OCO orders are a planning tool, not a safety guarantee. Beginners should understand these limits before using one:

### 1. Your stop can fail in a fast fall

If the price plunges suddenly — during a sharp sell-off, a technical glitch, or a thinly traded pair — it can fall straight past your stop-limit's limit price. Your order then sits unfilled while the price keeps falling. This is the single most important OCO risk: a stop-limit is not a guaranteed exit.

### 2. A stop placed too close gets triggered by normal noise

Crypto prices swing by several percent in a normal day. If your stop sits just 2% below the current price, an ordinary dip can trigger it, and the price may recover minutes later. This is sometimes called getting "stopped out" — your plan worked exactly as written, but the plan itself was too tight.

### 3. Low-liquidity pairs behave badly

On small or thinly traded pairs, there may not be enough buyers near your prices. A limit order can sit unfilled for hours, and a stop-limit order can fill at a worse price than expected. OCO orders work best on liquid pairs such as BTC/INR or ETH/INR on a large exchange.

### 4. Fees and tax still apply

Every filled OCO leg is a trade, so the exchange's trading fee applies, and the sale is a taxable event. In India, gains from selling crypto are taxed at a flat 30%, and a 1% TDS is deducted on many crypto transactions. An OCO that sells your coins does not change any of that — so keep the order confirmation and the sale record for your tax filing.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

### 5. Not every exchange offers OCO

Some Indian exchanges do not support OCO at all, and those that do may offer it only on certain pairs or only on their website and not in the app. If your exchange lacks it, you can still build the same plan manually with a separate limit order and a separate stop-limit order — but then you must remember to cancel the other one yourself when one fills, because the exchange will not do it for you.

### 6. Fake "OCO bot" scams

Be wary of Telegram groups, apps, or websites that promise an "OCO trading bot" or guaranteed profits from OCO strategies. No order type can guarantee profit, and any tool that asks for your exchange API keys with withdrawal permission, or asks you to deposit crypto first, is a scam. Never share your seed phrase, passwords, or OTPs with anyone.

## A 5-Minute Checklist Before Placing an OCO

Use this routine before you confirm any OCO order:

1. **Check the pair and quantity.** Is this the right coin, the right pair (BTC/INR, not BTC/USDT by mistake), and the right amount?
2. **Sanity-check both prices.** Is the take-profit level above the current price and the stop level below it? A reversed OCO will behave in ways you did not intend.
3. **Leave room for normal movement.** Is your stop far enough below the current price that an ordinary daily swing will not trigger it?
4. **Check the limit gap.** Is the stop-limit's limit price close to its trigger price, so the order has a realistic chance of filling?
5. **Confirm fees and tax.** Do you know the trading fee, and have you noted that the sale will be a taxable event?
6. **Know how to cancel.** Do you know where the open-orders list is, so you can cancel or change the OCO later?

If any answer is unclear, do not place the order yet. Read your exchange's help page for OCO orders first, or practise the steps on a small amount you can afford to lose.

## The Bottom Line

An OCO order is a simple, useful planning tool: one limit order to take a profit, one stop-limit order to limit a loss, linked so that whichever fills first cancels the other. It lets you step away from the screen with a plan in place, and it protects you from the most common beginner mistake — having no exit plan at all.

But it is still only a plan. It cannot guarantee your exit price, it cannot protect you from a fast crash, and it cannot make a trade profitable. Used with realistic prices, liquid pairs, and a clear understanding of its limits, an OCO is a solid part of a beginner's toolkit. Used as a "set and forget" safety net, it can give a false sense of security.

Start by understanding the two orders inside it, practise with small amounts, and keep records of every trade. The best trading tool is still the one between your ears — and it works best when the plan was written before the market started moving.

## Keep Learning

- [What Is a Trailing Stop Order? Beginner's Guide India](/blog/what-is-a-trailing-stop-order-india-guide/) — explains what a trailing stop order is and why it matters
- [Market Order vs Limit Order: Crypto Orders Explained](/blog/market-order-vs-limit-order-india-guide/) — compares market order vs limit order so you can choose with confidence
- [What Is a Bid-Ask Spread? The Hidden Cost in Every Trade](/blog/what-is-a-bid-ask-spread-india-guide/) — explains what a bid-ask spread is and why it matters
