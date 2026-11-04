---
title: "Binance Stolen SOL Laundering via THORChain Explained"
category: "Security"
excerpt: "Arkham and Lookonchain tracked about 81% of stolen Solana moving via THORChain after swaps resumed. What the trail shows, and what Indian users should do."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-04T21:52:00+00:00"
faqs:
  - question: "How much of the stolen Solana had moved through THORChain?"
    answer: "According to blockchain data platform Arkham, as reported on 4 November 2026, wallets it links to the Binance hackers still held 182,443 SOL, worth about $16.9 million, or roughly 18.8% of the 970,522 SOL taken in the exploit. That implies about 81% of the stolen Solana had already moved from those wallets. The figure covers the Solana portion of the theft only, not the full $6.3 billion Binance loss, and it is based on Arkham's wallet labelling, which is an investigator's assessment rather than a court finding."
  - question: "Did THORChain's restart cause the laundering?"
    answer: "No — the restart did not create the laundering, but it removed an obstacle to it. THORChain had halted swaps on several networks on 31 October after an Ethereum block reorganisation exposed a refund bug that paid out 10 ETH a vault had never received. Blockchain analysts said that halt delayed the movement of stolen funds. When THORChain resumed trading on most chains on Wednesday 4 November, the cross-chain route the attackers were reportedly using became available again, and on-chain trackers reported fresh movement the same day."
  - question: "I am an Indian user. Does the movement of stolen Solana affect my funds?"
    answer: "Not directly, unless you held funds on a platform that was itself breached or that paused withdrawals. The risk for most Indian users is secondary: phishing messages, fake support accounts, and bogus recovery services that exploit hack headlines. Check only official exchange announcements, use the strongest authentication available, and keep clean records in INR — gains remain taxed at 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

About 81% of the Solana stolen in the Binance hack had already moved from the attackers' wallets by 4 November 2026, according to blockchain data reported that day — and the trail runs through THORChain, a cross-chain swap protocol whose own trading had only just resumed after a four-day halt. The Binance stolen SOL laundering story is the latest chapter in the largest crypto theft on record, and it is worth understanding properly, because it shows how stolen crypto actually moves, why a seemingly unrelated technical bug briefly slowed it down, and why none of this changes what ordinary users should do. This guide explains what Arkham and Lookonchain reported, the route the funds reportedly took, what is proven and what is not, and what Indian users should take from it.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains reported security incidents; it does not recommend any exchange, coin, or product, and it does not predict prices.

## What Arkham and Lookonchain Reported on 4 November

The new development arrived on Wednesday 4 November, in two linked pieces of on-chain reporting. First, blockchain data platform Arkham reported that wallets it groups under the "Binance hacker" entity still held 182,443 SOL, worth about $16.9 million. That balance represented roughly 18.8% of the 970,522 SOL attributed to the exploit. The arithmetic is what produced the headline figure: if less than a fifth of the stolen Solana remained in those wallets, about 81% had already been moved elsewhere.

Second, on-chain tracker Lookonchain described the route on the same day. According to its account, the attackers split the stolen Solana across multiple wallets, sold it for USDC — a dollar-pegged stablecoin — bridged those proceeds to the Ethereum network, bought ether, and finally swapped that ether for bitcoin through THORChain. Cointelegraph, Gadgets 360, CoinDesk, and other outlets carried the same figures and the same route on 4 November, all citing Arkham and Lookonchain as the underlying sources.

Three cautions belong right at the start, because they shape everything that follows. The 81% figure describes the Solana slice of the theft, not the whole $6.3 billion loss — Solana was only one part of a much larger haul that also included other tokens. The wallet groupings come from Arkham's labelling of addresses it associates with the attackers; that is careful blockchain analysis, but it is not the same as a bank statement or a court finding, and different analysts can draw the boundaries of a wallet cluster differently. And the route itself is a description of transactions that analysts observed on public blockchains — it shows where funds went, not, by itself, who sat at the keyboard.

| What was reported | Figure | Source of the figure |
|---|---|---|
| Solana attributed to the Binance exploit | 970,522 SOL | Arkham, via 4 November reporting |
| Solana still in hacker-linked wallets | 182,443 SOL (about $16.9 million, about 18.8%) | Arkham, via 4 November reporting |
| Share of stolen Solana already moved | About 81% | Derived from the two figures above |
| Reported conversion route | SOL to USDC, bridged to Ethereum, to ether, then to bitcoin via THORChain | Lookonchain, 4 November |
| Earlier THORChain volume estimate | About $48.3 million swapped, about $42.7 million received after fees and slippage | Investigator SomaXBT, analysis dated 1 November |

The last row of that table needs a note of its own. The $48.3 million estimate, attributed to investigator SomaXBT, dates from 1 November and describes an earlier wave of THORChain swaps, with roughly 12% lost to fees and price movement during conversion. It is not the same measurement as the 4 November Solana figures, and the two should not be added together. What it does show is that the THORChain route was already in use before the halt, not invented after the restart.

## The Route, Step by Step, in Plain Language

For beginners, the reported route can sound like jargon, but each step has a simple purpose that investigators say is typical of large-scale laundering. Understanding the purposes — without going into operational detail — is what makes the story useful rather than merely alarming.

**Splitting across wallets.** The first reported step was dividing the stolen Solana among many wallets rather than keeping it in one place. On a public blockchain, every transaction is visible, so a single wallet holding nearly a million stolen tokens is easy to watch. Splitting the funds makes the trail harder to follow in real time, even though the transactions themselves remain visible to anyone who looks.

**Selling for USDC.** The next reported step was selling Solana for USDC, a stablecoin designed to track the US dollar. The purpose investigators attribute to this step is stability: unlike Solana, whose price moves sharply, a dollar-pegged token holds its value while the holder decides what to do next. It also moves the funds into a form that is widely accepted across different blockchains and trading venues.

**Bridging to Ethereum.** The proceeds were then reportedly bridged to Ethereum — moved from the Solana network to the Ethereum network through a cross-chain bridge. Different blockchains do not naturally talk to each other, so a bridge is the mechanism that carries value from one network to another. Each crossing creates a new set of transactions on a new chain, which is one reason investigators describe laundering as a chain of hops rather than a single jump.

**Buying ether, then swapping for bitcoin via THORChain.** Finally, the funds were reportedly used to buy ether and then swapped for bitcoin through THORChain. THORChain is a decentralised cross-chain protocol: instead of trading on a centralised exchange with accounts and order books, users swap assets across blockchains directly through liquidity pools run by the protocol's node operators. That is why the protocol matters to this story. A swap from ether to bitcoin through THORChain does not pass through a single company's compliance desk in the way a centralised exchange withdrawal would, and the resulting bitcoin can then be held in fresh wallets that have no visible link to the original theft beyond the on-chain trail.

None of this means the funds became invisible. Every step described above happened on public blockchains, and that is precisely how Arkham and Lookonchain were able to report it. The laundering story of 2026 is not a story of untraceable money; it is a story of money that is traceable but hard to stop, because freezing it requires coordinated action by stablecoin issuers, blockchain validators, node operators, and exchanges — each of which controls only one link in the chain.

## Why THORChain's Restart Mattered

The timing is what turns this from a routine laundering update into a distinct development. THORChain had not been operating normally in the days before 4 November. On 31 October, an Ethereum block reorganisation — a brief disagreement between parts of the network about which block was valid — erased a deposit THORChain had already recorded. Its refund process then paid out 10 ETH that the vault had never received. An automatic solvency check caught the shortfall within minutes, and node operators paused swaps across 10 networks, including Bitcoin, Ethereum, Solana, Tron, and BNB Smart Chain, while the flaw was examined. Our earlier guide covered that halt in detail.

Analysts said the halt had a side effect nobody planned: it delayed the laundering. Chainalysis, whose findings we covered in our tracing guide, described automated laundering patterns in this incident that it had not seen before — thousands of transactions executed at machine speed. A paused cross-chain protocol removed one of the fastest available routes for converting ether into bitcoin, and the laundering flow slowed while swaps were down.

On Wednesday 4 November, THORChain restored trading on Bitcoin, Ethereum, and several other chains. CoinDesk reported the same day that THORChain's native token, RUNE, rose about 10% over the previous 24 hours as trading resumed — a market reaction to the restart, not a judgement on the laundering itself, and certainly not a reason for any user to buy or sell anything. What matters for this story is the sequence: the route reopened, and on-chain trackers reported fresh movement through it the same day. The halt did not prevent laundering, and the restart did not cause it, but the two events are linked in a way that shows how infrastructure downtime can briefly change the pace of a theft's aftermath.

That link also raises an uncomfortable question that investigators and the protocol's own community will have to answer. THORChain's node operators were explicitly asked by the US Federal Bureau of Investigation, in its 31 October alert attributing the Binance hack to North Korea's TraderTraitor group, to block transactions linked to the attackers. A decentralised protocol does not have a single compliance officer who can freeze an account, and its operators have to decide, individually and collectively, whether and how to act on such requests. The resumption of swaps, followed by reported laundering through the protocol, puts that question in sharp practical terms. It is a governance question for THORChain, not a question individual users can resolve — but it is worth knowing it exists, because it explains why "decentralised" and "unstoppable" are not synonyms, and why they are not opposites either.

## What Is Proven, What Is Assessed, and What Is Not Known

After a week of fast-moving claims about this hack, it is worth sorting this development into three buckets, because the buckets matter more than any single figure.

**Established facts.** Binance suffered a breach on 29 October 2026 estimated at about $6.3 billion, the largest crypto theft on record. Binance has said about $2.85 billion was frozen or intercepted, and that it had replenished roughly 98% of affected tokens by Tuesday 4 November. THORChain halted swaps on 31 October after a reorganisation-related refund bug, and resumed trading on most chains on 4 November. Those are company and protocol statements, reported widely.

**Investigator assessments.** The FBI has attributed the attack to North Korea's TraderTraitor group; North Korea has denied the claim, as we covered in our earlier guide. Arkham's wallet groupings and the 81% figure, Lookonchain's route description, and SomaXBT's $48.3 million estimate are investigator findings based on public blockchain data. They are strong, specific, and corroborated across multiple outlets on 4 November — which is why this guide treats them as the best available account — but they remain assessments, open to revision as more transactions are analysed.

**Not known.** Nobody has published proof of how the laundering operation is organised day to day, who controls each wallet in the chain, or what share of the moved funds can still be frozen. Binance's replenishment figure and the laundering figure describe different things: replenishment means the exchange has set aside matching assets for affected users, not that the stolen assets themselves have been recovered. A user reading "98% replenished" alongside "81% of stolen Solana moved" is not reading a contradiction. The first is about making users whole; the second is about where the stolen tokens went. Both can be true at the same time, and in this case, on the reported figures, both are.

## What This Means for Users in India

The movement of stolen Solana does not directly change the balance of any Indian user's account, and it does not change Indian law. But it reaches Indian users through the same channels as every other chapter of this incident, and those channels are worth naming clearly.

**First, the scam wave that follows the headlines.** After every major hack, fake support accounts, lookalike websites, and bogus "recovery services" multiply. A message claiming to help you recover funds from the Binance hack, or warning that your account is linked to the stolen Solana, should be treated as a scam unless it comes through an official channel you already trust. No legitimate exchange will ever ask for your seed phrase, your password, or an urgent transfer to a "safe" wallet. Our earlier guides on impersonation and on the Binance attack method explain these tricks in detail, and they are worth re-reading precisely when the headlines are loudest.

**Second, the platform check that actually matters.** If you use a global exchange, check whether it is registered with India's Financial Intelligence Unit (FIU-IND) where it serves Indian users, what its withdrawal and custody arrangements are, and whether it publishes proof-of-reserves or audit information. Registration is not a guarantee of security — registered platforms can still be attacked, as the WazirX incident of July 2024 showed — but a platform that avoids scrutiny is a warning sign. For funds you are not actively trading, the standard safety step remains self-custody in a wallet whose seed phrase only you control, kept offline where possible.

**Third, records, not rumours.** If you ever need to prove a deposit, claim a loss, or reconcile a frozen balance, the records that matter are dates, amounts in INR, transaction IDs, and exchange statements — gathered now, not reconstructed from memory months later. Gains from crypto remain taxed at 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. Price moves reported alongside hack news — including the reported rise in RUNE on THORChain's restart — are market reactions to headlines, not guidance about what any token will do next, and this guide makes no prediction about any of them.

## What to Watch Next

Several open questions will determine how this chapter develops:

- **Whether more of the remaining Solana moves.** About 18.8% of the stolen Solana was still in hacker-linked wallets on 4 November. Whether that remainder moves, stalls, or gets frozen will show how much of the trail is still actionable.
- **Whether any of the moved funds are frozen.** Stablecoin issuers and exchanges have frozen billions in this incident already. The test of the THORChain route is whether bitcoin received through it can be identified and blocked when it next touches a regulated venue.
- **How THORChain's operators respond.** The protocol's community and node operators now face, in public, the exact blocking question the FBI raised on 31 October. Their answer will shape how decentralised protocols handle law-enforcement requests in future incidents.
- **Whether the FBI's attribution is tested further.** North Korea's denial stands against the FBI's attribution, and further evidence — or its absence — will determine whether the attribution hardens or remains contested.
- **Whether Binance publishes a fuller account.** Binance's incident report described the attack method in unusual detail. A follow-up addressing the laundering trail, and what its own freezing efforts have achieved chain by chain, would close one of the largest remaining gaps.

## Keep Learning

- [How the Binance Hack Happened: Fake Job Interview, Tampered Download, Internal AI Tool](/blog/how-binance-hack-happened-fake-job-interview-india-guide) — the attack method behind the largest crypto theft on record, and what Binance's own report did and did not establish.
- [THORChain Halts Swaps After 10 ETH Bug](/blog/thorchain-halts-swaps-10-eth-bug-india-guide) — the reorganisation, the refund flaw, and the halt that briefly delayed the laundering described here.
- [How Stolen Crypto Is Traced](/blog/how-stolen-crypto-traced-india-guide) — the automated laundering patterns Chainalysis found in this incident, and the limits of tracing even when every transaction is public.

## The Bottom Line

The 4 November reporting adds a precise, dated, and independently corroborated fact to the Binance story: by the time THORChain resumed trading, about 81% of the stolen Solana had already moved from the attackers' wallets, through a route that ran from Solana to USDC, across a bridge to Ethereum, into ether, and finally into bitcoin via THORChain. That fact does not change who was attacked, who investigators blame, or whether affected users will be made whole — Binance's replenishment effort is a separate matter from the fate of the stolen tokens. What it does change is the picture of the aftermath: the laundering did not stop when the headlines moved on, a technical halt slowed it for a few days, and its resumption coincided with the reopening of the very route it uses.

For Indian users, the practical takeaway is unchanged and deliberately boring. Use official channels only, turn on the strongest authentication available, keep trading funds and savings separate, ignore anyone who contacts you urgently about a hack, and keep clean records in INR. The investigators will keep tracing the Solana. Your job is to make sure the next headline about it is something you read about, not something that happens to you.
