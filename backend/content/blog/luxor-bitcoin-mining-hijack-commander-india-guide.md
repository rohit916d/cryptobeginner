---
title: "Bitcoin Mining Hijack: Luxor's 13 EH/s Rerouted to OCEAN"
category: "Security"
excerpt: "Attackers hijacked Luxor's Commander tool and rerouted Bitcoin hashrate to the OCEAN pool. What happened, what was lost, and what Indian miners should know."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/bitcoin.jpg"
created_at: "2026-11-16T04:20:00+00:00"
faqs:
  - question: "What happened in the Luxor Bitcoin mining hijack?"
    answer: "Over the weekend of 14–15 November 2026, attackers compromised Commander, the fleet-management tool run by Bitcoin mining services provider Luxor, and redirected customer hashrate to the OCEAN mining pool. The intrusion began at about 6 p.m. Pacific time on Saturday, 14 November, and Luxor confirmed the breach on Sunday, 15 November. Initial reports put the diverted power at about 13 exahashes per second — roughly 1.4% of the Bitcoin network — but Luxor has not confirmed that figure, saying the incident affected just over a dozen customer accounts. Luxor patched Commander within two hours of detecting the changes and promised full compensation to affected customers."
  - question: "How much Bitcoin did the attackers actually get?"
    answer: "Far less than the headline hashrate figure suggests. A Bitcoin address identified by hosting firm CoreX as linked to the incident received two payouts from the OCEAN pool totalling about 0.162 BTC, worth roughly $10,500 at the time. One of those payouts, in block 975,995 in the early hours of Monday, 16 November, was for 0.08088977 BTC. The attackers' take was small because Luxor spotted the changes and patched the tool within two hours, limiting how long the diverted hashrate kept earning for the wrong address."
  - question: "I mine or hold Bitcoin in India. What should I do after the Luxor hijack?"
    answer: "If you do not use Luxor's Commander tool, this incident does not touch your machines directly — but the lesson applies to any mining setup. Check your mining dashboard regularly and confirm your hashrate is actually pointed at the pool you chose; a hijack shows up as hashrate going somewhere unexpected. Use strong, unique passwords and two-factor authentication on every mining management account, and keep the software that manages your machines updated. Never share remote-access credentials with anyone, and treat any message offering to 'optimise' or 'manage' your miners as suspicious until you verify it through the provider's official channels."
---

Over the weekend of 14–15 November 2026, attackers broke into a tool that manages Bitcoin mining machines — not to steal coins from a wallet, but to steal the machines' work itself. The target was Commander, the fleet-management platform run by Bitcoin mining services provider Luxor. For a few hours, customer computing power that should have been earning rewards for its owners was instead pointed at the OCEAN mining pool, paying out to an address the attackers controlled. Luxor says it patched the flaw within two hours of spotting it and will reimburse every affected customer in full. The confirmed loss is small — about 0.162 BTC, roughly $10,500. But the company's chief executive says the attack came through a "sophisticated AI-enabled vector", and his warning — that attacks like this will only get more frequent — is the part of the story that matters most for anyone in crypto, including in India.

> **Educational content only.** This is not financial advice. This guide explains a security incident and the safety steps users can take; it does not recommend any exchange, token, mining service or action.

## What Happened: The Facts at a Glance

The incident was reported on 16 November 2026 by Cointelegraph, with same-day coverage from TradingView, Traders Union, Coinotag, Basis Desk, Blockchain Academics and GazeWire. The facts, as reported across those sources, are:

- **The target was Luxor's Commander tool.** Commander is a fleet-management platform that lets mining operators monitor and control their machines — which pool they point at, how they are configured, and how they are performing — from one dashboard.
- **The intrusion began at about 6:00 p.m. Pacific time on Saturday, 14 November.** Hosting company CoreX Hosting flagged the attack publicly on X on Sunday, 15 November, saying a large-scale compromise of mining machines was under way and that affected devices were being pointed at a single Bitcoin address on the OCEAN mining pool.
- **Luxor confirmed the breach on Sunday, 15 November.** The company said just over a dozen customer accounts using Commander were affected, and that it patched the vulnerability within two hours of detecting the unauthorised changes, then began restoring affected machines to their original pool settings.
- **The first estimates were much bigger than the confirmed scope.** Initial reports suggested about 64,000 mining machines representing roughly 13 exahashes per second (EH/s) had been redirected — about 1.4% of the Bitcoin network. Luxor has confirmed neither figure. The company says the incident affected just over a dozen customer accounts, and the machine count and the 13 EH/s figure remain unconfirmed.
- **The attackers' confirmed take was about 0.162 BTC, roughly $10,500.** A Bitcoin address identified by CoreX as associated with the incident received two payouts from the OCEAN pool totalling that amount. One of them — 0.08088977 BTC in block 975,995, generated in the early hours of Monday, 16 November — arrived even after CoreX had announced the attack was over.
- **No data was leaked, according to Luxor.** The company says no customer data was exfiltrated, and it has promised full compensation to affected customers plus a comprehensive technical post-mortem.
- **Luxor paused most of its product work in response.** The company said it would pause much of its feature development, invest in its own graphics processors to strengthen in-house AI-powered security, and publish its findings.

At the time of the reporting, Bitcoin was trading at about $64,952, according to Basis Desk — near $65,000, after a sharp correction over the previous week.

## How a Mining Hijack Works

To understand why this attack matters, it helps to understand what a mining management tool actually controls. Bitcoin mining is a competition: machines around the world race to solve a puzzle, and the winner earns newly created Bitcoin plus transaction fees. A single machine almost never wins on its own, so miners join mining pools — groups that combine their computing power and split the rewards. A fleet-management tool like Commander sits above all of this: it is the remote control for hundreds or thousands of machines, deciding which pool each machine points at and how it is configured.

That makes the tool a single point of failure. If an attacker gains control of it, they do not need to touch any individual machine. They simply change the pool setting, and every machine under that tool's control starts working for the attacker's pool address instead of its owner's. The machines keep running normally — their fans spin, their lights blink, their dashboards may even look healthy — but the rewards flow somewhere else. The theft is silent, and it is only visible if someone checks where the hashrate is actually going.

This is different from the crypto thefts most people know about. In an exchange hack, the attacker moves coins out of a wallet. In a mining hijack, the attacker never touches a wallet at all: they redirect the work, and the pool pays them for it. The amount they earn depends entirely on how long the redirection lasts before someone notices. In the Luxor case, that window was about two hours — which is why the confirmed take was only about 0.162 BTC even though the reported hashrate involved was enormous.

| Detail | Reported figure | Status |
|---|---|---|
| Machines redirected | ~64,000 | Initial report; not confirmed by Luxor |
| Hashrate redirected | ~13 EH/s (~1.4% of network) | Initial estimate; not confirmed by Luxor |
| Customer accounts affected | Just over a dozen | Confirmed by Luxor |
| Time to patch | Within 2 hours of detection | Confirmed by Luxor |
| Attacker payouts | ~0.162 BTC (~$10,500) | Traced on-chain by CoreX |
| Data leaked | None | Stated by Luxor |
| Compensation | Full reimbursement promised | Promised by Luxor |

The gap between the first estimates and the confirmed figures is worth pausing on. The 64,000-machine and 13 EH/s numbers came from CoreX Hosting's early public accounting, and they travelled fast because they sound dramatic — 1.4% of the entire Bitcoin network, hijacked. Luxor's own account is narrower: just over a dozen customer accounts. Both can be partly true at once — a dozen large customers can operate tens of thousands of machines — but until Luxor publishes its post-mortem, the larger numbers should be treated as an early estimate, not a confirmed fact.

## The AI Angle: A "Dark Forest"

The most quoted line of the incident came from Luxor's chief executive, Nick Hansen. In a post on X on Sunday, he said the attack came through a "sophisticated AI-enabled vector", without specifying how artificial intelligence was used, and warned that these types of attacks will only get more frequent over time. Cointelegraph's headline for the story carried his phrase: an AI "dark forest" — a reference to the idea that attackers are increasingly operating in spaces defenders cannot easily see or predict.

Hansen's claim should be read carefully. He did not say what the AI did — whether it found the vulnerability, automated the intrusion, or adapted the attack as Luxor responded. The mechanism is, for now, unspecified. What is not in doubt is the direction of travel. AI-assisted attacks on crypto infrastructure have been surfacing all year, and this incident is the latest in a sequence: in October 2026, Chainalysis disclosed that an attacker had used what it called "offensive agentic techniques" to access its systems; on 4 November 2026, India's own cybersecurity agency, CERT-In, warned that a group it calls CRAFTY FALCON was using AI-powered tools to attack financial companies, including cryptocurrency exchanges, stealing wallet keys and siphoning funds — a warning we covered in a separate guide; and Trail of Bits research, reported earlier this month, found crypto hacks running 71% above the 2022–2025 annual average, with AI finding vulnerabilities faster than before.

The Luxor incident fits that pattern: an attack on infrastructure rather than on wallets, using automation to move fast, against a target — a mining management platform — that had not previously been a headline hacking target. The CEO's response is also part of the pattern: Luxor said it would invest in its own graphics processors to build in-house AI-powered defences, effectively answering AI-assisted attack with AI-assisted defence.

For readers in India, the CERT-In connection is the most direct one. The CRAFTY FALCON warning explicitly named crypto exchanges among the targets of AI-assisted attacks, and it described wallet keys being stolen and funds siphoned. The Luxor attack shows the same tools being turned on a different part of the crypto stack — mining infrastructure — and the lesson is the same: the weak point is rarely the blockchain itself, which has never been hacked, but the software and services built around it.

## Why Mining Infrastructure Is a Target

Mining has had a difficult few weeks, which is part of why this incident landed the way it did. Bitcoin has fallen sharply from its October highs — it was trading near $65,000 on 16 November, after testing the $62,000 region — and mining economics have tightened with it. An analysis dated 14 November put hashprice, the dollars a miner earns per day from one petahash per second of computing power, at roughly $31.60, with a breakeven level for many miners near $31.89, according to the last dated Luxor print from 9 November. When hashprice sits near breakeven, the least efficient machines stop paying for their electricity, and their owners switch them off. That squeeze showed up in the network itself: Bitcoin's mining difficulty fell by more than 9% in mid-November, the largest adjustment in months, as hashrate came off.

Against that backdrop, a mining hijack is a double blow. A miner already earning close to breakeven loses hours of rewards entirely — and, worse, the machines keep burning electricity while they earn for someone else. The confirmed 0.162 BTC take suggests the actual diverted window was shorter or the diverted hashrate smaller than the first estimates, but either way, the victims paid the electricity and someone else collected the reward.

The incident also comes just a week after another piece of mining news: Binance Pool, one of the largest mining pools, shut down on 10 November, ending its Pool Savings, Cloud Mining and Transaction Accelerator services. That shutdown and this hijack are different events — one is a business decision, the other is an attack — but together they underline the same point for miners: the infrastructure you depend on can change or fail with little warning, and the tools you use to manage your machines are themselves a security surface.

## What Indian Miners and Holders Should Do

Most Indian readers will not use Luxor's Commander tool. Luxor's customers are mainly larger mining operators, and India has no large-scale domestic Bitcoin mining industry — electricity costs, heat and the 30% tax on crypto income make industrial mining a hard business here. But the lessons of this incident apply to anyone who mines, holds crypto, or uses any remote-management tool:

1. **Check where your hashrate actually points.** If you mine, even at a small scale, look at your pool dashboard regularly and confirm your machines are pointed at the pool you chose. A hijack shows up as hashrate going somewhere unexpected, or as rewards dropping without explanation.
2. **Treat mining management accounts like bank accounts.** Use a strong, unique password and turn on two-factor authentication for every dashboard that can change where your machines point. An attacker who gets into that account gets your hashrate.
3. **Keep management software updated.** Luxor patched Commander within two hours of detection. The patch only helps customers who apply it. Update mining firmware and management tools promptly, and do not run outdated versions.
4. **Never share remote-access credentials.** No legitimate support agent, pool operator or "optimisation" service needs your login. Anyone asking for it is either a scammer or a risk you do not need.
5. **Watch for the delayed second attack.** The 0.162 BTC the attackers collected is small, but the incident also showed that at least one payout arrived after the attack was publicly declared over. If you were affected, keep monitoring your machines and your payouts for days afterwards, not just hours.
6. **Do not trust a message just because it knows your setup.** Attackers who compromise a management platform learn who the customers are and how their operations are configured. A convincing message quoting your pool, your hashrate or your machine count is still a message — verify it through the provider's official app or website before acting on it.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. Mining rewards are treated as income from virtual digital assets in India, so any mining income is taxed at the flat 30% rate, with 1% TDS applying on transfers above the threshold.

## How This Differs From Our Other Security Coverage

The same weekend saw a separate incident at Kava Lend, a lending protocol, where an attacker drained about 55.2 million KAVA tokens — roughly $3.76 million at pre-attack prices — through a flaw in the protocol's interest calculations, and sold most of them on another network. That was a smart-contract exploit in a lending app. The Luxor incident is different: it was a breach of a mining management tool, the theft was of computing work rather than tokens, and the confirmed loss was about $10,500, not millions.

Our earlier guides in this area cover different events too. The CERT-In CRAFTY FALCON warning, published on 5 November, is about an AI-assisted actor targeting Indian financial firms and crypto exchanges — the threat landscape this incident sits inside, not the incident itself. The Binance Pool shutdown, covered on 10 November, is a business closure, not an attack. And the Coinone data breach, covered earlier today, is a support-vendor data leak at a Korean exchange — again a different event, with a different lesson. No earlier guide on this site covers the Luxor Commander hijack, and none of the facts, figures or checklists here are repeated from those posts.

## Keep Learning

- [Bitcoin Mining Difficulty Falls 9.13%: India Guide](/blog/bitcoin-mining-difficulty-falls-9-percent-india-guide) — why the network's difficulty dropped sharply in mid-November, what hashprice near breakeven means, and what it tells you about miner economics.
- [CERT-In: CRAFTY FALCON AI Attacks Target India Crypto](/blog/cert-in-crafty-falcon-ai-crypto-warning-india-guide) — India's cybersecurity agency's warning about AI-assisted attacks on crypto exchanges, and the safety checklist for Indian users.
- [Binance Pool Shuts Down Today: What Indian Miners Must Do](/blog/binance-pool-shutdown-india-guide) — the 10 November shutdown of one of the largest mining pools, and the checklist for miners who used its services.

## Frequently Asked Questions

### What happened in the Luxor Bitcoin mining hijack?

Over the weekend of 14–15 November 2026, attackers compromised Commander, the fleet-management tool run by Bitcoin mining services provider Luxor, and redirected customer hashrate to the OCEAN mining pool. The intrusion began at about 6 p.m. Pacific time on Saturday, 14 November, and Luxor confirmed the breach on Sunday, 15 November. Initial reports put the diverted power at about 13 exahashes per second — roughly 1.4% of the Bitcoin network — but Luxor has not confirmed that figure, saying the incident affected just over a dozen customer accounts. Luxor patched Commander within two hours of detecting the changes and promised full compensation to affected customers.

### How much Bitcoin did the attackers actually get?

Far less than the headline hashrate figure suggests. A Bitcoin address identified by hosting firm CoreX as linked to the incident received two payouts from the OCEAN pool totalling about 0.162 BTC, worth roughly $10,500 at the time. One of those payouts, in block 975,995 in the early hours of Monday, 16 November, was for 0.08088977 BTC. The attackers' take was small because Luxor spotted the changes and patched the tool within two hours, limiting how long the diverted hashrate kept earning for the wrong address.

### I mine or hold Bitcoin in India. What should I do after the Luxor hijack?

If you do not use Luxor's Commander tool, this incident does not touch your machines directly — but the lesson applies to any mining setup. Check your mining dashboard regularly and confirm your hashrate is actually pointed at the pool you chose; a hijack shows up as hashrate going somewhere unexpected. Use strong, unique passwords and two-factor authentication on every mining management account, and keep the software that manages your machines updated. Never share remote-access credentials with anyone, and treat any message offering to 'optimise' or 'manage' your miners as suspicious until you verify it through the provider's official channels.

## The Bottom Line

The Luxor hijack is a small theft with a large warning inside it. The confirmed loss — about 0.162 BTC, roughly $10,500 — is tiny next to the $6.3 billion Binance hack or the $3.76 million Kava Lend drain of the same weekend. But the mechanism is new in an important way: attackers compromised the tool that tells mining machines where to work, and the company's own chief executive says the attack came through an AI-enabled vector that will only get more frequent. The blockchain itself was never at risk — no block was rewritten, no wallet was emptied. The risk was in the software around it, and it was contained because Luxor spotted the change within two hours and patched it. For miners and holders alike, the defence is unglamorous and effective: watch where your hashrate points, lock down the accounts that control it, update your software, and never trust a message just because it knows something about your setup.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.
