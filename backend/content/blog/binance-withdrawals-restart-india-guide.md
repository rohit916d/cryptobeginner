---
title: "Binance Withdrawals Restart: What Indian Users Must Know"
category: "Security"
excerpt: "Binance aims to restart withdrawals in phases after its $6.3B breach, with 80% of funds covered and a reserves report due 2 Nov. What Indian users must check."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-10-31T00:46:00+00:00"
faqs:
  - question: "Are Binance withdrawals open again?"
    answer: "Not yet, as of the morning of 31 October 2026 in India. Binance's second progress notice, published on 30 October, said it aimed to start resuming withdrawals in phases within about 34 hours, subject to security checks being completed. That points to around 1 November, but it is a target, not a guarantee, and different tokens and networks may return at different times. Check Binance's official announcements before assuming any withdrawal route is open."
  - question: "Does '80% of funds covered' mean users get only 80% of their money back?"
    answer: "No, that is not what Binance said. The exchange said it has set aside more than $6.34 billion in company funds, of which more than $5 billion is held in the exact tokens that were taken, covering about 80 percent of the loss, and that it is buying the remainder through market and over-the-counter channels. It also repeated its pledge to cover all losses through its SAFU fund and company funds, with no losses passed on to users. The 80 percent figure describes how much of the replacement funding was already in place in matching tokens, not a haircut on user balances."
  - question: "What will Binance's proof-of-reserves report actually prove?"
    answer: "A proof-of-reserves report is meant to show that an exchange holds assets backing the balances it owes customers, at a stated snapshot time and for a stated scope of assets. It is a useful check, but it is not a full audit of a company's finances, and its value depends on exactly what is included, when the snapshot was taken, and whether liabilities are shown alongside assets. When the report appears, read its stated scope before treating it as a clean bill of health for everything the exchange does."
---

Binance, the world's largest crypto exchange, has moved from broad reassurance to specific milestones in its response to the security incident of late October 2026. In a second progress notice published on 30 October, its co-chief executives said the exchange had already covered about 80 percent of the roughly $6.3 billion loss in matching tokens, aimed to start resuming withdrawals in phases within about 34 hours, and planned a first proof-of-reserves snapshot within 12 hours, with results due by Monday, 2 November.

For Indian users, this is the most practical update since withdrawals were paused. It does not mean withdrawals are open, and it does not close the story. But it gives users something concrete to watch: a phased restart, a funding figure, and a reserve report with a date attached. This guide explains what each part of the notice actually says, what it does not say, and what Indian users should check before moving any funds.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This article explains a developing exchange incident in general terms; it is not advice about any individual's funds, exchange choice, or withdrawal decisions.

## What Happened, in One Recap

On the evening of 29 October 2026 (UTC), Binance said its hot wallets were compromised and that an attacker had moved roughly $6.3 billion in token assets across multiple blockchains. Its initial investigation pointed to a compromised laptop belonging to a DevOps engineer, which may have given the attacker access to an internal service container used to submit unauthorised withdrawal transactions. A later update said the investigation had uncovered additional points of breach beyond that laptop, and that further technical findings were expected within about 48 hours of the second notice.

The exchange paused withdrawals while it rebuilt its withdrawal service and reviewed endpoint devices, cloud services, key management, and transaction-signing systems. Deposits and unaffected services continued to operate, according to Binance, after a brief initial suspension. Around $3 billion in affected assets was frozen on-chain with the help of industry partners, though frozen assets are not the same as recovered funds: freezing stops stolen tokens from moving further, but it does not automatically return them to the exchange or to users.

The incident also reached India directly. CoinDCX, which uses Binance as a liquidity provider for some futures products, temporarily moved its futures service to "reduce-only" mode, preventing users from opening new positions or increasing existing ones, while deposits and withdrawals on CoinDCX itself remained available. That knock-on effect is a useful reminder that an incident at one large exchange can change the behaviour of other platforms that depend on it, even when those platforms were not themselves breached.

## What Progress Notice Number Two Actually Says

The second notice, signed by co-CEOs Yi He and Richard Teng and reported on 30 October by outlets including Cointelegraph, TokenPost, and PANews, as well as in Binance's own news update, contains four distinct claims. Each deserves to be read separately, because they are not equally certain.

First, the funding claim. Binance said it has prepared more than $6.34 billion in company funds to cover the loss, including more than $5 billion held in the exact tokens that were taken — USDC, USDT, BTC, ETH, BNB, and others — which it described as about 80 percent of the stolen total. The remainder, it said, is being purchased through market and over-the-counter channels. The distinction between a dollar amount and matching tokens matters: an exchange that owes customers a particular asset needs access to that asset itself, not merely the equivalent value in something else, before it can settle withdrawals in that asset. That is one reason a phased restart, token by token, makes operational sense.

Second, the restart claim. Binance said it was working to resume withdrawals in phases within about 34 hours of the notice, subject to security checks being completed. Read carefully, this is a target with a condition attached, not a promise that every withdrawal will work at a single moment. Reporting of the notice put the implied window at around 1 November, with some outlets calculating roughly 11:17 IST on Sunday, 1 November, based on the notice's timing. Binance itself has not confirmed a single reopening moment for all assets and networks, and its own reporting stressed that restoration depends on validating the rebuilt systems. Until Binance confirms a phase is live, users should treat any specific time as an estimate.

Third, the reserves claim. Binance said it planned to take its first proof-of-reserves snapshot within 12 hours of the notice and publish the results before Monday, 2 November. A proof-of-reserves exercise is designed to let users verify that the exchange holds assets backing customer balances. Its usefulness depends on details that will only be visible when the report appears: which assets are covered, the exact snapshot time, whether liabilities are disclosed alongside assets, and whether an independent party verified the figures. A snapshot also captures a single moment. It can show that backing existed at that moment; it cannot by itself prove that every past transaction was handled correctly, or that future operations will be safe.

Fourth, the investigation claim. Binance said no evidence of wallet private key leakage had been found so far, and that further technical findings, followed by a full post-mortem report, would be published. That is a preliminary finding, not a final conclusion, and the post-mortem — covering what happened, what was learned, and what safeguards are being added — is the document that will matter most for judging whether the rebuilt withdrawal service is genuinely safer than the one that was attacked.

## Why a Phased Restart, Not a Single Reopening

Beginners often assume that once an exchange says withdrawals are back, everything works at once. Large exchanges rarely reopen that way after a security incident, and there are good reasons for the caution.

Different tokens live on different blockchains and use different signing and settlement systems. A rebuilt withdrawal service has to be tested for each one, and a flaw that affects one network may not affect another. Reopening in phases lets the exchange test each route under real conditions, watch for anomalies, and pause a single route without shutting everything down again. It also limits the damage if a problem is found late: a fault discovered during a small first phase is far less costly than one discovered after every route has been reopened at full volume.

For users, the practical consequence is patience with an extra step. When withdrawals return, they may return for some tokens before others, and for some networks before others. A user who holds several assets should not assume that because one withdrawal succeeded, all of them will. Equally, a delay for one token is not, by itself, evidence of a new problem — it may simply be that token's phase has not started yet. The reliable source in each case is Binance's own phased announcements, not a social media post claiming that everything is open or that everything is still closed.

## What Indian Users Should Check Before Withdrawing

The days around a phased restart are exactly when mistakes and scams cluster. A short checklist, applied calmly, covers most of the risk.

Start with the official channel only. Binance said users should rely only on its official channels for updates. That advice matters more than usual right now, because fake support accounts, fake "withdrawal help" services, and phishing pages tend to appear within hours of any high-profile incident. No genuine support team will ask you to share a seed phrase, a password, or a one-time code, and no genuine restart requires you to send funds to a new address first. Any message that creates urgency — "withdraw now or lose everything", "verify within one hour" — should be treated as a warning sign in itself.

Next, check the specific asset and network. When a phase opens, confirm that the token you hold and the network you plan to use are actually included, and that the withdrawal address and network match. Sending a token on the wrong network is one of the most common and least recoverable beginner errors, and it is more likely when users rush during a restart window. If anything about the route looks unfamiliar, wait and re-check rather than guessing.

Then, consider how much to keep on any exchange. The Binance incident, like the CoinDCX incident days earlier, underlines a distinction this site has stressed before: a blockchain network and a centralised exchange that holds your funds are two different things. The Bitcoin network was not reported to be compromised in this incident; the reported problem was inside the exchange's own systems. For funds you do not plan to trade soon, self-custody — holding crypto in a wallet you control, with a seed phrase stored offline and never shared — removes exchange risk entirely, though it replaces it with the responsibility of securing your own keys. There is no risk-free option, only a choice about which risk you prefer to carry, and that choice should be made deliberately, not in a panic during a restart.

Finally, keep the tax picture in mind. Moving crypto between your own wallets is not the same as selling it, but selling on an Indian exchange can trigger tax consequences. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. If a restart prompts you to sell rather than simply withdraw, check the tax position first, and keep records of the transaction, including dates, amounts in INR, and the platform involved.

## What This Update Does Not Settle

It is tempting to read a confident progress notice as the end of the story. It is not, and the notice itself leaves several important questions open.

The first is attribution. Investigators at TRM Labs, Chainalysis, and Elliptic have linked the theft to North Korea's TraderTraitor group, and Binance has not itself named an attacker. Attribution by investigators is a professional assessment based on tracing and tradecraft patterns; it is not the same as a formal government finding, and it does not by itself determine whether frozen funds will be recovered or how long any legal process might take. Users should treat the attribution as credible but provisional, and should not let it change any practical decision about their own funds.

The second is recovery. About $3 billion frozen on-chain is a significant figure, but frozen is not recovered, and recovered is not the same as restored to users. The path from a frozen address to a returned balance involves legal and technical steps that take time, and Binance's own funding plan — covering losses from its own funds rather than waiting for recovery — is precisely what makes the withdrawal restart possible without waiting for that process. The two tracks, company funding and asset recovery, should not be confused with each other.

The third is the proof-of-reserves report itself. Until it appears, with its scope and methodology visible, no one outside Binance can verify the claim it will make. When it does appear, the right questions are specific: does it cover all customer assets or only some? Does it show liabilities as well as assets? Who verified it, and at what snapshot time? A report that answers those questions clearly is worth more than a headline that merely says reserves were published.

The fourth is the post-mortem. The technical findings due within about 48 hours of the second notice, and the fuller post-mortem promised afterwards, will say more about lasting safety than any funding figure can. A funding figure answers the question "can users be made whole?" A post-mortem answers the question "will this happen again?" Both matter, and the second takes longer to judge.

## Frequently Asked Questions

**Are Binance withdrawals open again?**

Not yet, as of the morning of 31 October 2026 in India. Binance's second progress notice, published on 30 October, said it aimed to start resuming withdrawals in phases within about 34 hours, subject to security checks being completed. That points to around 1 November, but it is a target, not a guarantee, and different tokens and networks may return at different times. Check Binance's official announcements before assuming any withdrawal route is open.

**Does "80% of funds covered" mean users get only 80% of their money back?**

No, that is not what Binance said. The exchange said it has set aside more than $6.34 billion in company funds, of which more than $5 billion is held in the exact tokens that were taken, covering about 80 percent of the loss, and that it is buying the remainder through market and over-the-counter channels. It also repeated its pledge to cover all losses through its SAFU fund and company funds, with no losses passed on to users. The 80 percent figure describes how much of the replacement funding was already in place in matching tokens, not a haircut on user balances.

**What will Binance's proof-of-reserves report actually prove?**

A proof-of-reserves report is meant to show that an exchange holds assets backing the balances it owes customers, at a stated snapshot time and for a stated scope of assets. It is a useful check, but it is not a full audit of a company's finances, and its value depends on exactly what is included, when the snapshot was taken, and whether liabilities are shown alongside assets. When the report appears, read its stated scope before treating it as a clean bill of health for everything the exchange does.

## The Bottom Line

Binance's second progress notice is the first update in this incident that gives users dates and figures instead of only reassurance: a phased withdrawal restart targeted at around 1 November, about 80 percent of the loss already covered in matching tokens, a proof-of-reserves snapshot due before 2 November, and a post-mortem to follow. Each of those milestones is conditional — on security checks, on market purchases completing, on the report's scope — and none of them should be treated as already achieved before the evidence appears.

For Indian users, the right posture over the next few days is watchful rather than hurried. Follow Binance's official announcements phase by phase, verify the asset and network before any withdrawal, ignore any message that asks for a seed phrase or an urgent transfer, and use the pause to decide deliberately how much of your crypto you want to keep on any exchange at all. The restart, when it comes, will reward the users who checked twice — and the proof-of-reserves report, when it lands, will reward the users who read past the headline.

## Keep Learning

- [Binance Security Incident: What Happened and What Indian Users Should Know](/blog/binance-security-incident-india-guide)
- [What Is Proof of Reserves? A Beginner's Guide for India](/blog/what-is-proof-of-reserves-india-guide)
- [What Is the SAFU Fund? Binance's Safety Net Explained for India](/blog/what-is-safu-fund-binance-safety-net-india-guide)
