---
title: "BitMart and Mercado Bitcoin Hacks: Same Attackers?"
category: "Security"
excerpt: "BitMart and Mercado Bitcoin were hacked on 2 November, with on-chain data linking the attacks. What is proven, what is not, and what Indian users should do."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-04T18:50:00+00:00"
faqs:
  - question: "Were BitMart and Mercado Bitcoin really hacked by the same attackers?"
    answer: "That has not been proven. What is established is a strong on-chain link: blockchain data firm Bitquery traced about $391,000 from wallets it links to BitMart to the same receiving addresses used in the Mercado Bitcoin theft, with the BitMart-linked activity starting roughly 53 minutes before the larger attack. BitMart's founder has said the company's preliminary investigation suggests the same group may be responsible. A shared destination address is meaningful evidence, but it does not by itself prove who the attackers are or how they got in, and neither company has published a full technical account yet."
  - question: "Did customers lose money in the Mercado Bitcoin hack?"
    answer: "Mercado Bitcoin has said customers will not lose assets because of the incident, and that balances remain recorded in customer accounts. That is the company's assurance, not an independently verified audit, and it is different from saying everything is back to normal: the exchange paused services after the incident and has said it will reopen gradually, function by function, as each passes security checks, with no calendar date announced. Until withdrawals and deposits are fully working again, users should follow the exchange's official channels rather than rumours."
  - question: "I am an Indian user with funds on a global exchange. What should I do after a week like this?"
    answer: "Do not panic-move your funds through unfamiliar services in the middle of a scare — that is exactly when impersonation scams spike. Instead, check the exchange's official announcements, confirm its Indian standing (exchanges serving Indian users must register with India's Financial Intelligence Unit), turn on the strongest authentication available, and set a withdrawal allowlist if the platform offers one. For funds you are not actively trading, self-custody in a wallet whose seed phrase only you control is the standard safety step. Keep records of dates and amounts in INR: gains remain taxed at 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

Two crypto exchanges, on two continents, were hacked on the same day — and blockchain evidence suggests the same attackers may have hit both. On 3 November 2026, BitMart founder Sheldon Xia confirmed that his exchange had also been breached on 2 November, the same day Brazil's Mercado Bitcoin suffered a major security incident. Independent blockchain analysis then connected the two events: funds from wallets linked to BitMart flowed to the same addresses used in the Mercado Bitcoin theft, starting less than an hour before the larger attack. This guide explains what each company has confirmed, what the on-chain evidence actually shows, what remains unproven, and what Indian users should take from a week in which exchange security has dominated crypto news.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains reported security incidents; it does not recommend any exchange, coin, or product, and it does not predict prices.

## What Happened at Mercado Bitcoin

Mercado Bitcoin, one of Brazil's largest crypto exchanges, announced on 2 November 2026 that it had identified and contained a security incident in one of its systems. The company temporarily stopped deposits and withdrawals, told customers they had suffered no loss, and said no customer data had leaked. The practical effect, however, was immediate: users could not move funds in or out while the exchange investigated.

The scale of the incident has been described differently by different sources, and beginners should understand why. Mercado Bitcoin first put the assets involved at about $38 million, with about $11 million blocked with the help of industry partners. On 3 November it revised those figures to about $36.3 million affected and $12.9 million blocked. Security firm Hypernative reportedly spotted more than $40 million moving suspiciously, Arkham traced at least $46 million, and Chainalysis estimated roughly $49 million in total while saying it had helped coordinate the freezing of nearly $10 million. These numbers are not contradictions so much as snapshots taken at different times, using different methods, as the picture developed. The honest summary is that tens of millions of dollars in assets were involved, and a meaningful share — roughly a third by the company's own revised figures — had been blocked within a day.

Two distinctions matter here, and they are worth learning because they recur in almost every exchange incident. First, "blocked" does not mean "returned". Blocking means the assets have been flagged or frozen somewhere in the system so they cannot simply be cashed out; getting them back to the exchange is a separate, slower process. Second, a "no customer loss" assurance is not the same as normal service. Mercado Bitcoin has said customer assets are guaranteed and balances remain recorded in accounts, but it has also said it will reopen gradually, function by function, as each passes security checks — and it has given no date for full restoration. Access and loss are two different things, and users waiting for withdrawals care about both.

## What BitMart Confirmed — and What It Did Not

BitMart's confirmation came a day later, and in an unusually candid form. On 3 November 2026, founder Sheldon Xia posted on X that the exchange had been hacked the previous day, writing that the amount involved was small and that the company had acted quickly to investigate and strengthen security. The post came after blockchain transactions surfaced showing funds moving from wallets associated with BitMart to an address linked to the Mercado Bitcoin exploit — in other words, the on-chain trail appeared before the public confirmation.

What Xia did not say is as important as what he did. He did not quantify the loss, did not identify which systems were affected, and did not say whether customer balances, deposits, or withdrawals were affected. That gap matters because BitMart is in an unusual position: the exchange announced a wind-down in July 2026 and is undergoing restructuring, yet users still hold funds on the platform — Xia has separately said advisers met with the top 50 users who still held funds there. He also acknowledged that BitMart's security team is currently severely understaffed, while saying the team is doing everything it can to safeguard data and assets. For users, the combination of an ongoing restructuring, a reduced security team, and an unquantified breach is a reason for caution, not for panic — but it is not a combination to ignore either.

## The On-Chain Link: Why Analysts Suspect One Group

The reason this story is bigger than two separate incidents is the blockchain trail connecting them. Blockchain data firm Bitquery reported that about $391,000 was drained, mostly from wallets it links to BitMart, across the Base, Arbitrum, and Optimism networks, beginning approximately 53 minutes before the first Mercado Bitcoin funds moved. Bitquery labelled the Arbitrum and Optimism source wallets as BitMart hot wallets — the internet-connected wallets exchanges use for day-to-day operations.

The more striking detail is a shared destination. According to the analysis, a wallet labelled "BitMart 21" sent ether to the same address that subsequently received 2,852.07 ETH from the Ethereum hot wallet Bitquery identified as Mercado Bitcoin's. Both transactions occurred on 2 November. When two supposedly separate thefts route funds to the same receiving address within the same hour, investigators treat that as strong evidence of a common operator.

Strong evidence is not proof, and the distinction matters. A shared receiving address shows the funds ended up in the same place; it does not, by itself, establish who controlled that address, how either exchange was breached, or whether the same people ran both intrusions. BitMart's own framing reflects that caution: its preliminary investigation "suggests" the same group may be responsible. No law enforcement agency has publicly attributed these two incidents, and neither company has published a technical post-mortem. Beginners should therefore treat "same attackers" as the leading hypothesis with real evidence behind it — not as an established fact.

## Why This Week, Why So Many Incidents

The Mercado Bitcoin and BitMart incidents did not arrive in isolation. They came days after the 29 October 2026 Binance hack, described as the largest recorded crypto theft at about $6.3 billion, and in the same week as a suspected theft of more than $133 million flagged by blockchain investigator ZachXBT. Our earlier guides covered the Binance attack method, the industry's proposed security alliance response, and the suspected European theft in detail. Taken together, the cluster raises an obvious question: is something systematically wrong, or is this a coincidence of timing?

The honest answer is that nobody can say yet, and the two explanations are not mutually exclusive. Security researchers have documented a genuine surge in AI-assisted attacks through 2026, with attackers finding vulnerabilities faster and automating laundering at unprecedented speed. At the same time, a cluster of incidents does not prove a single cause: different exchanges, different systems, and different attacker groups can all be active in the same week, and heightened media attention after a giant incident means smaller incidents that might previously have gone unnoticed now get reported and connected. The practical lesson does not depend on resolving that question. A period of elevated, visible risk is precisely when basic security hygiene matters most, and when scam attempts riding on the news multiply.

It is also worth noting what this cluster is not. It is not evidence that every exchange is unsafe, and it is not a reason to conclude that crypto itself has been "hacked" — in these incidents, exchange hot wallets and internal systems were targeted, not the underlying blockchains. Bitcoin, Ethereum, and other major networks continued to operate normally throughout. The risk being discussed is custody risk: the risk that comes from leaving funds on a platform that someone else controls.

## What This Means for Users in India

Neither Mercado Bitcoin nor BitMart is an Indian exchange, and neither incident directly changes Indian law. But the story reaches Indian users through three channels.

**First, Indian users trade on global platforms.** Many Indian crypto users hold accounts on international exchanges alongside Indian platforms such as CoinDCX, WazirX, and ZebPay. When a global platform pauses withdrawals or reports a breach, the effects — frozen funds, delayed transfers, and a wave of impersonation scams — reach Indian users quickly, even if their own funds sit elsewhere. A user who has never traded on Mercado Bitcoin may still receive a phishing message pretending to be its support team, or a fake "recovery service" offering to retrieve funds from a hack they were never part of.

**Second, the Indian regulatory picture is a useful filter.** Exchanges serving users in India must register with India's Financial Intelligence Unit (FIU-IND). Registration is not a guarantee of security — registered platforms can still be attacked, as the WazirX incident of July 2024 showed — but an unregistered platform operating in India is a warning sign worth taking seriously. When choosing where to keep funds, Indian users should check FIU registration, the platform's withdrawal and custody arrangements, and whether it publishes proof-of-reserves or audit information. None of those checks makes a platform safe, but together they separate platforms that accept scrutiny from platforms that avoid it.

**Third, the tax position is unchanged but the record-keeping lesson is fresh.** Gains from crypto remain taxed at 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. If you ever need to claim a loss, prove a deposit, or reconcile a frozen balance, the records that matter are dates, amounts in INR, transaction IDs, and exchange statements — gathered now, not reconstructed from memory months later.

## A Practical Checklist for the Next Incident

The next exchange incident is a matter of when, not if, and the checklist below is the same one our earlier security guides recommend. It is worth repeating because it is what actually protects users while companies investigate:

1. **Do not panic-move funds.** Shifting assets through unfamiliar services in the middle of a scare is how users lose money to secondary scams. If your exchange has paused withdrawals, wait for its official announcement rather than trusting a third party that promises a workaround.
2. **Use official channels only.** Bookmark the exchange's real domain and support pages. No legitimate exchange will ever ask for your seed phrase, your password, or an urgent transfer to a "safe" wallet — any message that does is a scam, however convincing it looks.
3. **Turn on the strongest authentication available.** Hardware security keys or authenticator apps are stronger than SMS codes. If the platform offers a withdrawal allowlist — restricting withdrawals to addresses you have pre-approved — enable it; the built-in delay can stop a theft even if an attacker gets into your account.
4. **Keep trading funds and savings separate.** Funds you are not actively trading are safer in a wallet whose seed phrase only you control, kept offline where possible. An exchange account is convenient for trading; it is not a savings account, and no exchange's assurances change that.
5. **Verify before believing attribution claims.** Early reports after a hack often conflict: figures get revised, attacker identities get asserted and withdrawn, and rumours outrun evidence. Treat company statements as the company's account, investigator findings as evidence to weigh, and social media claims as unverified until a credible source confirms them.
6. **Keep records in INR.** Dates, amounts, transaction IDs, and statements — stored somewhere you control — make tax filing and any future claim far easier than reconstructing trades from memory.

## What to Watch Next

Several open questions will determine how this story develops, and each is worth watching in the coming days:

- **A BitMart loss figure and technical account.** Whether BitMart quantifies the breach, explains how attackers got in, and clarifies the effect on customer balances will say a lot about how seriously the restructuring-era exchange is treating the incident.
- **Mercado Bitcoin's reopening timetable.** A gradual, function-by-function reopening is the responsible approach, but users will judge it by delivery: which functions return, in what order, and whether any further issues emerge during restoration.
- **A formal attribution.** If law enforcement or a major security firm attributes the twin incidents to a specific group, that would move the story from hypothesis to finding — and would raise the question of whether the same group is probing other exchanges.
- **Whether other exchanges report same-day anomalies.** The 53-minute gap between the BitMart-linked activity and the Mercado Bitcoin theft raises an obvious question: were other platforms probed or hit on 2 November and have simply not said so yet?
- **The industry response.** The Binance hack has already prompted calls for an industry-wide security alliance. If the Mercado Bitcoin and BitMart incidents accelerate that conversation from proposal to programme — shared threat intelligence, cross-audits, faster coordinated freezes — that would be a concrete, positive outcome of a bad week.

## Keep Learning

- [How the Binance Hack Happened: Fake Job Interview, Tampered Download, Internal AI Tool](/blog/how-binance-hack-happened-fake-job-interview-india-guide) — the attack method behind the largest crypto theft on record, and what Binance's own report did and did not establish.
- [Crypto Hacks in 2026: AI-Powered Attacks and How to Stay Safe](/blog/crypto-hacks-2026-ai-attacks-india-guide) — the wider surge in AI-assisted attacks that frames this week's incidents, with a safety checklist for Indian users.
- [What Is Crypto Impersonation? A Beginner's Security Guide](/blog/what-is-crypto-impersonation-a-beginner-s-security-guide) — how fake support accounts, recruiters, and lookalike websites trick users after a major hack, and how to spot them before any damage is done.

## The Bottom Line

The BitMart and Mercado Bitcoin incidents matter for two reasons. The first is what they show: two exchanges breached on the same day, with blockchain evidence pointing to a shared operator, in a week already defined by the largest crypto theft on record. The second is what they do not yet show: no proven attacker identity, no published technical account from either company, no BitMart loss figure, and no reopening date from Mercado Bitcoin. Both halves of that picture deserve equal weight.

For Indian users, the takeaway is practical rather than dramatic. Check the standing of any platform you use, use the strongest authentication it offers, keep funds you are not trading somewhere only you control, ignore anyone who contacts you urgently about a hack, and keep clean records in INR for tax time. The industry may or may not build the security alliance it is currently debating. Your own habits do not need to wait for it — and in a week like this one, they are the protection you can count on today.
