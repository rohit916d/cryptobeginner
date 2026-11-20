---
title: "Ethereum Glamsterdam Delay: What May 2027 Means in India"
category: "Ethereum"
excerpt: "Ethereum's Glamsterdam upgrade could slip to May 2027 after developers flagged smart-contract risks. What the three timelines mean for Indian ETH users."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/crypto.jpg"
created_at: "2026-11-20T15:54:30+00:00"
faqs:
  - question: "What is the Glamsterdam upgrade?"
    answer: "Glamsterdam is the next major planned upgrade — a hard fork — for the Ethereum network, aimed at increasing the network's capacity and efficiency. A hard fork is a coordinated change to the rules all Ethereum software follows, and it has to be tested on test networks before it touches real user funds. Glamsterdam's headline changes involve repricing how much it costs to create and access the network's permanent storage, known as state. The upgrade has no confirmed mainnet date: under its current specifications it could activate as early as mid-January 2027, but if developers revise the specifications, activation could slip to April or May 2027."
  - question: "Does the Glamsterdam delay affect my Ether in India?"
    answer: "No. A delayed upgrade does not change your Ether balance, your wallet, or your ability to send and receive ETH on Indian exchanges such as CoinDCX, WazirX or ZebPay. The delay is about the timetable for a network upgrade, not about anyone's funds. Ethereum keeps running exactly as it does today while developers decide on the specifications. The only people who need to pay close attention are developers whose smart contracts could be affected by the gas-pricing changes — and even for them, the Ethereum Foundation and security researchers have contacted at least 50 affected companies directly."
  - question: "Why would changing gas prices break smart contracts?"
    answer: "Smart contracts are programs that live permanently on Ethereum, and many were written years ago with the assumption that certain operations cost a certain amount of gas — the fee unit that pays for computation. EIP-8037 would raise the cost of creating new state, such as deploying a contract or adding data to storage, and EIP-8038 would change the cost of reading and modifying existing state. If those costs change, a contract that was carefully designed to fit inside a gas limit might no longer fit, or might behave differently. ChainSecurity's assessment found 200 compatibility findings, including three high-severity cases, and an Ethereum Foundation researcher estimated that 10,000 to 15,000 of roughly 90 million deployed contracts could be affected. That is why developers are moving slowly rather than pushing the upgrade out on schedule."
---

# Ethereum Glamsterdam Delay: What May 2027 Means in India

Ethereum's next major upgrade, Glamsterdam, may not arrive until May 2027 — four months later than the earliest date developers had in mind. The reason is not a bug in the code or a disagreement about the upgrade's goal. It is a safety question: the upgrade would change how much it costs to use Ethereum's permanent storage, and security researchers have found that the change could break smart contracts that are already running. At a meeting of Ethereum's core developers on 19 November 2026, the people responsible for the upgrade laid out three possible timelines, and none of them is a decision yet. This guide explains what Glamsterdam is, why the gas-pricing change is risky, what the three timelines are, and what — if anything — the delay means for an Indian reader holding or using Ether.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported network-upgrade discussion; it does not recommend any token, investment or action, and it does not predict any price movement.

## What Happened at the 19 November Meeting

The news comes from the All Core Developers meeting held on Thursday, 19 November 2026, and was reported the same day and the next morning by Cointelegraph, crypto.news, Crowdfund Insider, Coinotag and BitcoinWorld, all drawing on the same meeting. The facts are consistent across every report, because they all trace back to what was said on the call.

The headline is that Glamsterdam could be pushed back as far as May 2027 if developers decide to modify its specifications to fix the smart-contract compatibility problems. That "if" matters: no decision has been reached yet. The meeting produced scenarios and a process for deciding, not a new date. Here are the three timelines the developers discussed:

| Scenario | What has to happen | Earliest mainnet activation |
| --- | --- | --- |
| Current specifications kept | No changes to the gas-pricing proposals; testing resumes on schedule | Mid-January 2027 |
| Decision deferred to January | Developers wait until January to decide whether to change the specifications | Late February or early March 2027 |
| Specifications revised | Developers rewrite the gas-pricing rules to reduce compatibility risks | April or May 2027 |

The meeting's chair, Ethereum Foundation researcher Ansgar Dietrichs, considered late January or early February a more realistic timeframe than the mid-January best case. A test-network rehearsal on Hoodi — the testnet where upgrades are trialled before they touch real user funds — has been tentatively proposed for the week of 14 December, with 16 and 17 December discussed as possible dates, and the go-ahead for that rehearsal is due at the next consensus-layer call on 26 November. The final decision on the specifications is expected in January.

This is not the first delay Glamsterdam has suffered. A testnet activation on Hoodi originally scheduled for 26 October was already postponed after the compatibility concerns surfaced, and core developers have committed to holding no fork until the issues are resolved. The November meeting is therefore best understood as the moment the delay stopped being open-ended and acquired a shape: three named scenarios, a tentative testnet date, and a decision month.

## What Glamsterdam Is

Glamsterdam is the next major planned upgrade to Ethereum — a hard fork, which is a coordinated change to the rules that all Ethereum software follows. Its aim is to increase the network's capacity and efficiency: to let Ethereum do more, more cheaply, without changing what it fundamentally is. Upgrades of this kind happen regularly in Ethereum's history, and each one goes through the same sequence — proposal, testing on testnets, then activation on the main network where real funds live. The testing stage exists precisely so that problems are found before they can affect users, and Glamsterdam is currently stuck in that stage for a good reason.

The part of the upgrade causing the trouble is gas repricing. Gas is the fee unit that pays for computation on Ethereum: every operation a smart contract performs costs a certain amount of gas, and the price of gas is set by the network's rules. Two proposals in Glamsterdam would change those rules for operations involving Ethereum's permanent database, known as state — the storage where contracts and their data live forever.

EIP-8037 proposes raising the cost of creating new state, which includes deploying a smart contract and adding information to storage. EIP-8038 addresses the cost of accessing and modifying existing state. The idea behind both is to bring Ethereum's gas prices closer to the real cost of running the network: some operations are currently cheaper than they should be, given the burden they place on the computers that run Ethereum. Repricing them would make the network more efficient and harder to abuse. The problem is that the existing prices are not just numbers in a table — they are assumptions baked into millions of contracts that were written years ago.

## Why Changing Gas Prices Can Break Contracts

A smart contract is a program that lives permanently on Ethereum, and it was written with the gas prices of its time in mind. Developers who built a contract calculated, carefully, how much gas each of its operations would cost, and designed it to fit inside the gas limits that users and applications allow. If the price of an operation changes, a contract that was carefully designed to fit might no longer fit — it could run out of gas partway through, fail, or behave differently from the way its authors intended. In the worst case, a contract holding user funds could become unusable or, as ChainSecurity warned in October, could be exposed to exploitation.

The scale of the problem became clearer through the autumn. Blockchain security firm ChainSecurity warned in October that the proposed gas-pricing changes could disrupt existing smart contracts and potentially expose them to exploitation, and that warning is what prompted the postponement of the Hoodi testnet fork originally scheduled for 26 October. In an assessment completed on 18 November, ChainSecurity disclosed 200 compatibility findings across investigations coordinated by the Ethereum Foundation, including three high-severity cases. At the 19 November meeting, Ethereum Foundation developer Rahul Kothari said the foundation, ChainSecurity and security firm Dedaub had collectively contacted at least 50 companies whose projects appeared potentially exposed. The three high-severity cases had either been addressed or were expected to be resolved by mid-December.

At a developers' meeting on 16 November, an Ethereum Foundation researcher estimated that as many as 10,000 to 15,000 of roughly 90 million deployed contracts could be affected by the repricing changes — far beyond the 13 real-world examples identified in October. That number is an estimate, not a count of contracts that will definitely break, and it counts contracts that could be affected, not contracts that hold significant funds. But it explains why the developers are moving slowly: the risk is not to one application but to a long tail of programs, many of whose authors may not even be watching the upgrade process.

There is also a genuine dilemma inside the decision, and the developers discussed it openly at the meeting. Changes intended to protect some contracts could disrupt others, because every specification change can break assumptions that nobody has yet identified. One participant warned that each change could break invariants — the internal guarantees a contract relies on — that are not yet known to be broken. That is why the decision has stalled rather than been resolved: the safe path is not obvious, and rushing it would trade one set of risks for another.

## How This Differs From What This Site Already Covered

This site has mentioned Glamsterdam before, but only in passing. The Devcon 8 conference guide from 3 November noted that the upgrade had "no new mainnet date after an October notice postponed a testnet activation on the Hoodi testnet", and the Vitalik Buterin keynote guide from the same day listed the Glamsterdam timeline as a thread to follow as it developed — with the explicit advice to follow it "as proposals and discussions until they become confirmed changes". Neither post covered the November meeting, the three timelines, the ChainSecurity findings, the 50-company outreach, or the tentative Hoodi date of 16–17 December. This post covers the new development: the upgrade now has named scenarios, a tentative testnet rehearsal, and a decision month, where before it had only an open-ended delay.

The same care applies to the related topic of the next upgrade after Glamsterdam, known as Hegotá. At the 19 November meeting, developers also discussed reducing Hegotá's scope to accelerate its post-quantum features — the work that would protect Ethereum against future quantum computers. No decision was reached on that either, and client teams are due to submit their positions on Hegotá ahead of further discussions in two weeks. It is a thread to watch, not a story to overstate.

## What This Means for Indian Readers

For most Indian readers, the direct effect of a Glamsterdam delay is close to zero — and that is the most important thing to understand. A delayed upgrade does not change your Ether balance, your wallet, or your ability to send and receive ETH. Indian exchanges such as CoinDCX, WazirX and ZebPay continue to operate exactly as before, and Ethereum itself keeps running while developers decide on the specifications. Nothing about the delay requires any action from a holder.

The market context is worth stating plainly, because the delay arrives during a difficult week for crypto. Ether traded at about $1,733 on 20 November, down about 2.3% in 24 hours, while Bitcoin traded at about $61,500, down about 2.7%, and the Crypto Fear & Greed Index stood at 12, in "Extreme Fear" territory. At roughly ₹93.45 to the dollar, $1,733 is about ₹1.62 lakh per Ether — though the price Indians actually pay is higher: at the 19 November fix of The Crypto Times India Premium Index, one Ether cost ₹1,87,905.85 in India against a world price of $1,801.97, a premium of +11.59%. That premium exists because moving money into and out of Indian exchanges is constrained by banking rules, taxes and limited liquidity, so the Indian price can detach from the global price for days at a time. The Glamsterdam discussion is not the cause of the price fall — the selling is driven by the same forces this site has covered all month, from Federal Reserve rate-hike expectations to record ETF outflows — and the delay itself says nothing about where the price goes next.

Three groups of Indian readers should pay attention, each for a different reason.

**Holders of Ether** need nothing except patience. Upgrades are routine, delays are routine, and a delay caused by safety checks is the system working as designed. Your funds are not at risk from a postponed testnet step, and no one needs to move, convert or "upgrade" their Ether because of Glamsterdam. Any message telling you to do so is a scam — see the warning below.

**Developers building on Ethereum** have the most to gain from following this story. If you maintain a smart contract, the question is whether it relies on the gas costs that EIP-8037 and EIP-8038 would change — particularly contracts that create state, deploy other contracts, or make heavy use of storage access. The Ethereum Foundation and the security firms have already contacted at least 50 companies; if your project is affected, the responsible step is to review the ChainSecurity findings and the meeting notes, and to test your contracts against the proposed repricing on a testnet when the Hoodi rehearsal runs. India has a large Ethereum developer community, and the Devcon 8 conference in Mumbai earlier this month brought many of those developers together — the Glamsterdam discussion is, in part, a conversation they are already part of.

**Traders and learners** should treat the delay as information about how Ethereum is governed, not as a signal about the price. Ethereum's upgrades are decided in public, in recorded developer meetings, with security firms publishing their findings and disagreements aired openly. That transparency is a feature: it is why a problem affecting 10,000 contracts was caught on a testnet instead of on the main network. The lesson is about process — slow, public, cautious — rather than about any single asset.

The tax reality is unchanged. Gains on transferring virtual digital assets in India are taxed at a flat 30% plus a 4% cess — 31.2% in total — with no set-off of losses, and sales attract 1% TDS under Section 194S. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. A delayed network upgrade does not change Indian tax, does not create an exemption, and does not change which platforms an Indian resident is allowed to use.

## The Scam Warning

A delayed upgrade is exactly the kind of technical news scammers repackage. Expect messages claiming that Ether must be "migrated", "upgraded" or "moved to a new chain" because of Glamsterdam, or offering early access to a new version of Ethereum. None of that is real: there is no migration, no action holders need to take, and no new token associated with the upgrade. Other messages may pose as Ethereum Foundation staff or as support for a wallet or exchange, and ask for a seed phrase, password or OTP to "protect" funds during the upgrade. Treat any message that asks for a seed phrase, password or OTP — or that promises returns from an upgrade, a migration or a "new Ethereum" — as a scam. Report fraud on India's National Cyber Crime Reporting Portal at cybercrime.gov.in or the 1930 helpline, and never share a seed phrase or password with anyone claiming to help.

## What to Watch Next

Four dates and decisions will show which of the three timelines Glamsterdam follows.

The first is the consensus-layer call on 26 November, which is due to give the go-ahead — or not — for the Hoodi testnet rehearsal tentatively scheduled for the week of 14 December. If that rehearsal is confirmed, the current-specifications timeline stays alive; if it slips, the January decision point moves closer.

The second is the Hoodi rehearsal itself, tentatively 16–17 December. A testnet fork is where the repricing changes meet real contracts in a safe environment, and its results will tell developers whether the compatibility problems are contained or wider than expected.

The third is the specification decision expected in January. That is the moment the three scenarios collapse into one: either the current specifications stand and activation can come as early as mid-January, or the specifications are revised and activation moves to April or May. Until that decision, every date attached to Glamsterdam is provisional, and any report that states a firm date should be treated with suspicion.

The fourth is the Hegotá discussion in the next two weeks, when client teams submit their positions on whether the next upgrade's scope should be reduced to accelerate post-quantum work. It will not change Glamsterdam's timetable, but it will show how developers are thinking about the upgrade after it.

## The Bottom Line

On 19 November 2026, Ethereum's core developers met and laid out three possible timelines for the Glamsterdam upgrade: mid-January 2027 if the current specifications are kept, late February or early March if the decision waits until January, and April or May 2027 if the specifications are revised. No decision has been reached. The cause of the uncertainty is specific and documented: the upgrade would reprice the gas cost of creating and accessing Ethereum's permanent storage through EIP-8037 and EIP-8038, and ChainSecurity's assessment found 200 compatibility findings, including three high-severity cases, with an estimated 10,000 to 15,000 of roughly 90 million deployed contracts potentially affected. A testnet rehearsal on Hoodi is tentatively scheduled for 16–17 December, with the go-ahead due on 26 November, and the final decision is expected in January. For Indian readers, the delay changes nothing about holding or using Ether — no migration, no action, no change to the 30% tax plus 1% TDS — and the cautious, public way the decision is being made is the upgrade process working as it should.

## Keep Learning

- [Devcon 8 Mumbai: Ethereum's Biggest Conference Comes to India](/blog/devcon-8-mumbai-ethereum-conference-india-guide)
- [Vitalik Buterin's Devcon 8 Keynote: What He Said About AI, Hardware and Crypto's Future](/blog/vitalik-buterin-devcon-8-keynote-india-guide)
- [What Is the Ethereum Virtual Machine? How Smart Contracts Run](/blog/what-is-ethereum-virtual-machine-india-guide)
