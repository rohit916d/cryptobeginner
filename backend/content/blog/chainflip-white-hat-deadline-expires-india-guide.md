---
title: "Chainflip White-Hat Deadline Expires: No Funds Returned"
category: "Security"
excerpt: "Chainflip's 18:38 UTC deadline passed with nothing returned. The incident report reveals how the attacker broke in — and what it means for Indian users."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-24T00:50:00+00:00"
faqs:
  - question: "What was Chainflip's white-hat offer to the attacker?"
    answer: "Chainflip Labs offered the person behind the 21 November vault drain a deal: return 110.57523337 BTC and 2,618.1 ETH — 90% of the stolen value — by 18:38 UTC on 23 November 2026, and keep the remaining 10%, roughly $1.2 million, as a bounty. If both payments had arrived on time, Chainflip said it would treat the incident as a white-hat recovery and withdraw its reports and complaints to law enforcement. The deadline passed with nothing arriving at the two return addresses, so the offer has now expired."
  - question: "How did the attacker get into Chainflip's vaults?"
    answer: "According to Chainflip's incident report, published on 23 November, the attacker registered a validator account with the minimum stake, which was enough for other validators to accept peer-to-peer connections from it. The attacker then exploited a memory-safety flaw in a third-party networking library used by the validator software, ran code on validator machines, and extracted the key shares stored there. On the Ethereum side, the vault executed a transfer carrying a valid signature but with a signing nonce outside the normal sequence — and a review of 299,677 signatures accepted since 2023 found exactly one anomalous case: the drain itself. Chainflip notes some steps of the account are not yet fully confirmed."
  - question: "I use cross-chain protocols — what should I do after an incident like this?"
    answer: "First, check the protocol's official channels before moving any funds — never trust recovery links, refund forms or support messages that arrive by DM or in random groups, because scammers flood every major hack with fake recovery offers. Second, understand that money parked in a protocol's vaults or liquidity pools is not covered by any Indian deposit protection or exchange insurance; if the protocol loses it, recovery depends entirely on what the team can negotiate or pay from its own resources. Third, keep records of everything you deposit and withdraw, with dates and amounts, because any profit is taxed at a flat 30% in India with 1% TDS rules applying, and the tax rules were current as of September 2026."
---

## Chainflip's White-Hat Deadline Has Passed — and Nothing Came Back

On Saturday 21 November 2026, someone drained roughly $12 million from the vaults of Chainflip, a cross-chain swap protocol. On Monday 23 November, Chainflip Labs published its incident report and waited for an answer to the unusual offer it had made to the attacker: keep 10% of the haul as a bounty, return the other 90% by 18:38 UTC, and the whole thing would be treated as a white-hat recovery, with law-enforcement complaints withdrawn.

The deadline came and went. According to reports published after it expired, nothing had arrived at the two return addresses Chainflip had published. The offer is over, the money is still missing, and the protocol remains switched off while its users wait for answers about what happens to their funds.

This guide explains what the offer was, what the incident report revealed about how the attack worked, what happens now that the deadline has expired, and what Indian users of cross-chain protocols should take away from it.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose.

## What the White-Hat Offer Actually Was

Chainflip's offer was published on its own website and written into an on-chain message, so the attacker could hardly miss it. The terms, as reported by CoinDesk, Cointelegraph, crypto.news and Gadgets 360, were simple:

- **Return 110.57523337 BTC** to one published address.
- **Return 2,618.1 ETH** to a second published address.
- **Keep the remaining 10%**, worth roughly $1.2 million, as a bounty.
- **Deadline: 18:38 UTC on Monday 23 November 2026** — that is 00:08 IST on Tuesday 24 November.

If both payments had arrived before the deadline, Chainflip said it would treat the incident as a white-hat recovery, ask no further questions, and withdraw its reports and complaints to law enforcement agencies.

Two details of the offer deserve a closer look, because they show how the team was thinking. First, the ether figure — 2,618.1 ETH — is far larger than the 520.2243399 ETH actually taken from the Ethereum vault. That is because the offer asked for the stablecoin portion of the haul (3,249,631.41 USDC and 758,141.33 USDT) to be repaid in ether instead, after the attacker had already swapped those stablecoins into ether. The bitcoin figure, by contrast, is a straightforward 90% of the 122.86137042 BTC taken.

Second, the offer was a price, not a forecast. A bounty costs the protocol nothing if the alternative — courts and police recovering the money — is unlikely to return more than 90% in any useful timeframe. It also sets a standing 10% discount for future attackers, and it promises to withdraw reports that prosecutors, not Chainflip, ultimately control. The offer existing at all told us less about the team's confidence than about how few other options it had.

## The Incident Report: How the Attack Worked

Chainflip published its incident report on Monday 23 November, and it gives the fullest account yet of how a protocol protected by a 100-of-150 validator threshold signature scheme was drained. The headline figures changed slightly in the report, too: the total haul is now put at about $12.6 million, because a further 10.48 BTC was taken from the vault later on the morning of 21 November, taking the bitcoin total to 133.34 BTC.

Here is the sequence, as Chainflip describes it:

**Preparation.** The attacker funded a wallet from Tornado Cash on 11 November, bought FLIP tokens, and registered a validator account on 20 November. The minimum stake was enough for other validators to accept peer-to-peer connections from the attacker's machine. Chainflip says it has since obtained the server used to register the validator account, along with related identity clues, and is continuing to track the flow of the stolen funds.

**The break-in.** The attacker exploited a memory-safety flaw in a third-party networking library used by the validator software. That flaw let the attacker run code on validator machines and extract the key shares stored there. Chainflip notes that some steps of this account are not yet fully confirmed, and the exact path by which the signing key was obtained has not been disclosed in full technical detail — so the fix cannot yet be checked from outside.

**The drain.** On the Ethereum side, the vault executed a transfer carrying a valid signature but with a signing nonce outside the normal sequence. Chainflip reviewed all 299,677 signatures accepted by the contract since 2023 and found exactly one anomalous case: the transaction that drained the vault. The nonce in question was a 39-digit number — 190262553000735942938746936035352881278 — against a sequence that had reached only around 314,569. The attacker then moved the ether proceeds through Tornado Cash in 38 batches within about nine minutes, too fast for stablecoin issuers to freeze anything.

**The aftermath.** Chainflip rotated the signing key about 13 hours ahead of schedule and moved into full safe mode: deposits, withdrawals, swaps and price quotes all suspended. The bitcoin leg, by contrast, was not mixed in the same run — which is why the recovery offer was addressed to its holder.

One thing the report makes clear is that this was not a smart-contract bug in the usual sense. The vault contract did what it was told to do by a validly signed instruction. The failure was in how the signing keys were protected on validator machines — a reminder that a protocol's security is only as strong as the weakest piece of software its validators run.

## What Happens Now That the Deadline Has Expired

With the deadline gone and no funds returned, the situation for Chainflip and its users is straightforward, and not encouraging:

**The protocol is still off.** Chainflip remains in full safe mode, with deposits, withdrawals, swaps and quoting suspended since Saturday. There is no announced reopening date. Its total value locked sits near $13.7 million, and its 24-hour trading volume is effectively zero — because nothing can trade while the protocol is off, there is no revenue coming in to rebuild what the vaults lost.

**There is no compensation plan.** No per-user accounting of losses has been published, and no plan for making liquidity providers whole has been announced. Founder Simon Harman said on X on 22 November that he remains "relatively confident we can get back and running despite the significant losses to LPs", but confidence is not a plan, and a security investigation must be completed before any restart.

**The token has collapsed.** FLIP traded near $0.23 on Monday, down roughly a quarter over the previous 24 hours, after touching an all-time low of about $0.12 over the weekend. This was the protocol's second exploit in ten weeks: in September, its Tron vault lost around 736,000 USDT. That smaller incident was reimbursed — this time, no such promise has been made, and the scale is far larger. November's haul is roughly 16 times the September reimbursement.

**The legal route continues.** Chainflip's law-enforcement reports and complaints, which the offer would have withdrawn, now stand. Tracing efforts continue, but tracing is not recovery: the ether was mixed within minutes, and the bitcoin sits in addresses the team can watch but cannot touch.

## Why This Matters for Indian Users

Most Indian readers will never have used Chainflip — it is a niche cross-chain protocol, not an Indian exchange. But the lessons of this incident apply to every Indian user who has ever parked money in a protocol, a liquidity pool, or a bridge:

**Your funds in a protocol have no safety net.** Money sitting in an exchange's custody in India is at least held by a registered entity with a compliance team and a bank account you can complain to. Money sitting in a protocol's vaults is governed by code and by a validator set you will never meet. There is no deposit insurance, no chargeback, and no regulator who will make you whole. If the protocol loses it, recovery depends entirely on what the team manages to negotiate — as this week's failed bounty shows — or on what it still holds in reserve.

**A white-hat bounty is not a recovery.** When a protocol offers an attacker 10% to return the rest, it is worth asking what that implies about its other options. In this case the offer expired with nothing returned, and the users are exactly where they were on Saturday: waiting, with no compensation plan and no reopening date.

**"Fully backed" and "audited" are not the same as safe.** Chainflip's vaults were protected by a threshold signature scheme requiring 100 of 150 validators to sign. That sounds robust — and it was, against the threat it was designed for. The attack went around it entirely, through a networking library on validator machines. When you judge a protocol, ask not just whether it was audited, but what was audited, and whether the audit covered the software its validators actually run.

**Scammers follow every big hack.** After an incident like this, fake recovery offers, refund forms and "support" accounts flood social media and messaging groups. Chainflip's real offer was published on its own website and written on-chain. Anything asking you to connect a wallet, sign a transaction, or share a seed phrase to "recover" funds is a scam. Legitimate teams never ask for your seed phrase.

**Keep records, whatever happens.** If you have ever used a cross-chain protocol, keep a record of what you deposited, what you withdrew, and when. Any profit is taxed at a flat 30% in India, with 1% TDS rules applying in many cases, and losses cannot be set off against gains. Exchange records will not show a protocol transaction — your own notes are the only record.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## How to Judge a Cross-Chain Protocol Before You Trust It

This incident is a useful checklist for any Indian user considering a bridge or cross-chain swap service. None of these questions guarantees safety, but a protocol that cannot answer them clearly is a protocol to be careful with:

1. **Who holds the keys?** Is it a small multisig, a large validator set, or a single operator? A bigger set helps, but only if the key shares themselves are protected.
2. **What happens if the protocol pauses?** Can you still withdraw, or does a pause lock your funds in place? Chainflip's users are locked in with no reopening date.
3. **Is there a published incident history?** A protocol that has been exploited before and explains what changed is more trustworthy than one that hides it. Chainflip's September incident was public; the question is whether the fix went deep enough.
4. **What is the compensation policy?** Before you deposit, find out in writing what happens if the protocol is hacked. "We will make users whole" is a promise; a reserve fund or insurance policy is a mechanism. The two are not the same.
5. **Is the team reachable and accountable?** A named team with a public track record is easier to hold to account than an anonymous one. Chainflip's founder has spoken publicly throughout this incident, which is more than many hacked protocols manage.

## The Bottom Line

Chainflip gave its attacker a clear, generous exit: keep about $1.2 million, return the rest by 18:38 UTC on 23 November, and walk away with the incident filed as a white-hat recovery. The deadline passed with nothing returned. The incident report has since explained how the attack worked — a validator account, a memory-safety flaw in a third-party library, and a signing nonce that broke the count — but an explanation is not a recovery.

For the protocol's liquidity providers, the questions that matter now are the ones with no answers yet: when, if ever, does the protocol reopen, and who pays for the roughly $12.6 million hole? For everyone else, the lesson is simpler and older than this incident: money you park in a protocol is money you have handed to code and to strangers, with no safety net underneath. Understand that before you deposit, not after the deadline passes.

## Keep Learning

- [Chainflip Vault Drain: $12M Stolen in Cross-Chain Hack — India Guide](/blog/chainflip-hack-vault-drain-india-guide) — the original 21 November incident, the stolen amounts, and the white-hat offer while its deadline was still open.
- [THORChain Halts Swaps After 10 ETH Refund Bug — India Guide](/blog/thorchain-halts-swaps-10-eth-bug-india-guide) — how a one-block reorganisation froze a cross-chain protocol, and what a halt means for users waiting on swaps.
- [How Stolen Crypto Is Traced: Chainalysis, Arkham and the Binance Trail — India Guide](/blog/how-stolen-crypto-traced-india-guide) — how investigators follow stolen funds across chains, and why tracing is not the same as recovery.
