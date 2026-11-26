---
title: "Bitcoin Hashrate Hijacking: How Miners' Work Gets Stolen"
category: "Security"
excerpt: "Braiins warns attackers are hijacking Bitcoin miners' work via unencrypted Stratum V1 and BGP tricks — 1,000+ sites hit in one second. How it works and the fix."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/bitcoin.jpg"
created_at: "2026-11-26T04:22:00+00:00"
faqs:
  - question: "What is Bitcoin hashrate hijacking?"
    answer: "It is a network-level attack in which an attacker reroutes the internet traffic between Bitcoin miners and their mining pool, impersonates the pool, and claims the miners' work under the attacker's own account. No miner is hacked and no pool is breached: the attacker exploits the fact that the Stratum V1 mining protocol sends everything in plain text, with no way for a miner to verify that the server on the other end is really its pool. The rerouting is done by manipulating BGP, the system that tells networks where to send internet traffic. Braiins, the mining software firm that disclosed the campaign on 25 November 2026, says the attacks are a live threat and that any miner still on plain Stratum V1 is a target, on any pool."
  - question: "How would I know if my miner was hijacked?"
    answer: "The clearest sign is a mismatch: your machines keep running at full power, but your pool dashboard shows zero hashrate — the work is going to someone else's account. Braiins says the first reports came from miners who saw share difficulty in the hundreds of millions, far above anything a pool sets for a single machine; in one log from three Antminer S19s in Brazil, the difficulty climbed in steps to 536,870,912. Check the pool address on every machine, including backup pools: if it starts with stratum+tcp://, the connection is unencrypted and can be hijacked. The fix is Stratum V2, or Stratum V1 over TLS with certificate verification — or a local proxy that encrypts the connection for older machines."
  - question: "I hold Bitcoin in India but I don't mine. Does this affect me?"
    answer: "Not directly — the attack steals mining rewards, not coins from wallets, and it does not touch exchanges or holders. But it matters to Indian users in two ways. First, anyone in India who mines, even with a single machine pointed at a global pool, faces exactly the same risk, because the attack works on the connection, not on the location. Second, it is a reminder that unencrypted connections are a weak point everywhere in crypto, not only in mining. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

## Bitcoin Hashrate Hijacking: How Miners' Work Gets Stolen

Bitcoin hashrate hijacking is happening at scale, and the attacker does not need to hack a single miner or breach a single pool. That is the warning mining software firm Braiins issued on 25 November 2026, after documenting a campaign that rerouted miners' connections to an impostor pool and claimed their work under the attacker's own account. On 20 November, more than a thousand mining sites lost their pool connection in the same second. Each attack diverted between 0.6 and 1.9 exahashes per second of computing power — work that kept running at full speed while the miners who produced it earned nothing.

The disclosure, reported the same day by Decrypt, Bitcoin.com, CoinTelegraph, CoinStats and ethnews, is the second mining hijack to make headlines in November. But it works by a different mechanism from the first. The Luxor incident two weeks earlier was a software breach: attackers got into a fleet-management tool and pointed customer machines at a different pool. This one needs no breach at all. It exploits two long-known weaknesses — an unencrypted mining protocol from 2012, and the internet's trust-based routing system — and Braiins says it is still a live threat.

This guide explains what Braiins found, how the hijack works step by step, why the miners hit by it could not see it happening, how this differs from the Luxor hijack, and what miners — including the small and home miners in India — should check now.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security incident affecting Bitcoin miners; it does not recommend buying, selling, holding or mining any asset.

## What Braiins Reported

Braiins published its security alert on Wednesday, 25 November 2026, and the facts it sets out are unusually specific. The alert opens with three points it clearly wanted no reader to miss: Braiins' own services were not compromised; the attack is widespread and still a live threat; and it targets the connection between miners and pools, hijacking the unencrypted connection from the miners' side.

The campaign, as documented by Braiins and reported across the five outlets carrying the story, unfolded in three waves:

| Dates | Where | Episodes | Size of one episode | Length |
|---|---|---|---|---|
| 7–12 Nov 2026 | Latin America, mostly Brazil and Argentina | 19 | 120 to 400 miner sites, 36 to 174 PH/s | 1.5 minutes to 3 hours |
| 16 Nov 2026 | Brazil | 1, captured packet by packet | 3 miners in the capture | 3 minutes |
| 20 Nov 2026 | Mostly Europe | 4 | 1,050 to 1,600 miner sites, 0.6 to 1.9 EH/s | 6 to 49 minutes |

Two features of that table stand out. The first is the escalation: the diverted hashrate grew more than tenfold in two weeks, from tens of petahashes in the Latin American wave to nearly two exahashes in the European wave. Braiins described the short, escalating bursts as the attacker "testing the waters". The second is the synchronisation: on 20 November, more than a thousand mining sites were hit in the same second. That is not a series of individual compromises. It is a single routing change, applied once, that swept up every miner whose traffic crossed it.

Braiins also reported that public routing data shows the same technique aimed at address blocks that host the Stratum endpoints of most of the large pools. That is the part of the alert with the widest implication: the attacker is not picking on one pool. The technique works against any pool that accepts plain Stratum V1 connections — and Braiins says the vast majority of Bitcoin hashrate globally still uses exactly that.

## How the Hijack Works

The attack has two ingredients, and neither one is new. Understanding both is the whole story, because the attack is not a piece of malware and not a password theft. It is a man-in-the-middle attack built from a protocol flaw and a routing flaw, combined.

**Ingredient one: Stratum V1 is unencrypted.** Stratum V1, introduced in 2012, is the protocol that carries work between a Bitcoin mining machine (an ASIC) and its mining pool. The pool sends the miner jobs — the block templates to hash — and the miner sends back shares, proofs of work that count toward the pool's rewards. On plain Stratum V1, all of that travels in clear text, and the miner has no way to verify that the party on the other end of the connection is who it claims to be. There is no encryption and no server authentication. If something else answers when the miner calls its pool, the miner cannot tell the difference.

**Ingredient two: BGP can be manipulated.** The Border Gateway Protocol, or BGP, is the trust-based system that tells independent networks where to route internet traffic. When a network announces that it owns a block of internet addresses, other networks generally believe it. An attacker can announce a narrower, more specific block of addresses that includes a pool's Stratum endpoint — and networks that fail to validate the route will then funnel miners' connections to the attacker's infrastructure instead of the real pool.

Put together, the sequence runs like this. A miner's connection to its pool drops. The miner reconnects to the same hostname and the same IP address — or so it believes. In reality, the traffic has been rerouted, and the server answering is the attacker's. That server sends the miner real Bitcoin mining jobs and raises the difficulty step by step, so the miner keeps working at full power. The shares the miner produces are submitted under the attacker's account at a separate pool, and the rewards go to the attacker. The miner's own pool dashboard, meanwhile, shows zero hashrate — because from the real pool's point of view, the miner simply stopped showing up.

The difficulty numbers in Braiins' logs show how brazen the impersonation is. In early November, logs from three Antminer S19s in Brazil showed the same sequence on each machine: the connection dropped, the miner reconnected, and the difficulty then climbed in steps to 536,870,912 — a figure hundreds of millions of times higher than anything a pool sets for a single machine. In one log, the difficulty was raised step by step to 2,147,483,640. Those are not subtle changes. They are the fingerprint of a fake pool that needs the miner to do enormous amounts of work per share, because the attacker is harvesting that work for itself.

## Why the Miners Hit Could Not See It

The cruelest part of this attack is how invisible it is on site. A miner whose wallet is drained notices immediately. A miner whose machines are hijacked this way notices nothing at all — until they check a dashboard somewhere else.

The machines keep hashing at full power. There is no slowdown, no error message, no alarm. The fans spin, the power draw is normal, and the miner on the floor looks exactly as it did the day before. The only thing that changes is where the work goes, and the miner has no local display for that. Braiins put it plainly in its alert: hijacked machines kept hashing at full power while their pool dashboards showed zero hashrate, making the theft nearly invisible on site.

That is why the first reports came from miners who happened to look at their dashboards and saw the mismatch, or who noticed share difficulty figures that made no sense. A single miner checking a dashboard once a day can lose hours of work before noticing. A large farm with automated monitoring would spot the zero-hashrate reading quickly — but a small operator, or a home miner with one or two machines, might not check for days. The attack episodes lasted between 90 seconds and 49 minutes each, which sounds short, but at 1.9 exahashes per second, even a six-minute episode diverts an enormous amount of work, and the campaign ran 24 episodes across two weeks.

There is a second reason the attack stayed invisible: nothing was broken. In the Luxor incident, a tool was compromised and machines were visibly repointed. Here, the miners' own equipment, their pool accounts, their balances and their payout settings were all untouched. Braiins stressed that point in its alert: pool accounts, balances and payout settings are not affected. The attack happens entirely on the network between the miner and the pool. That is also why it is so hard to attribute. There is no malware sample to analyse, no breached server to forensically examine, and no compromised credential to rotate. There is only a routing announcement, made and then withdrawn, and a set of logs showing difficulty figures that should never appear.

## How This Differs From the Luxor Hijack

Two weeks before the Braiins alert, Bitcoin mining had already had its first hijack story of the month. Over the weekend of 14–15 November 2026, attackers compromised Commander, the fleet-management tool run by mining services provider Luxor, and redirected customer hashrate to the OCEAN mining pool. Initial reports put the diverted power at about 13 exahashes per second, though Luxor has not confirmed that figure, and the confirmed loss was small — about 0.162 BTC, roughly $10,500 — because Luxor spotted the changes and patched the tool within two hours.

The two incidents share a headline — miners' work stolen — but almost nothing else, and the difference matters for anyone deciding what to fix.

The Luxor attack was a **software breach**. Somebody got into a specific company's tool, changed settings inside it, and the damage was bounded by how many customers used that tool and how fast the company reacted. Luxor patched it in two hours and promised full compensation. It was, in the end, a contained incident with a fix that belonged to one company.

The Braiins attack is a **protocol and network flaw**. Nobody's software was breached. The weakness sits in Stratum V1 itself, which every pool that accepts plain connections shares, and in the internet's routing system, which no single company controls. The fix does not belong to one company either: it requires miners to change how they connect, pools to offer secure connection options, and network operators to validate the routes they accept. And unlike the Luxor incident, which is over, Braiins says this threat is live — the attacks were still happening when the alert was published, and the technique has been aimed at the endpoints of most large pools.

There is also a difference in who is exposed. The Luxor incident affected just over a dozen customer accounts using one tool. The Braiins attack affects, in the firm's own words, any miner still on plain Stratum V1 — which it says is the vast majority of Bitcoin hashrate globally. That is why Braiins' alert reads less like an incident report and more like an industry-wide warning.

## The Fix: What Miners and Pools Must Do Now

Braiins' alert is unusual in one respect: it does not only describe the problem, it names the fixes, and it says they exist today and must be applied now across the entire mining industry. There are three of them, and they cover every kind of setup.

**1. Move to Stratum V2.** Stratum V2 is the successor protocol, and it fixes the root cause: it encrypts the connection and authenticates the pool, so a miner can verify that the server on the other end is really its pool. Braiins says its pool offers Stratum V2 today, and it urges miners to switch where their miner and pool support it — using the pool's official V2 address and key, not an address from a message or a forum post.

**2. Use Stratum V1 over TLS with certificate verification.** For miners that cannot move to Stratum V2 yet, the intermediate fix is to run Stratum V1 over TLS — the same kind of encryption that protects a website connection — on firmware that verifies the pool's certificate. The certificate check is the essential part: encryption without verification still leaves the miner unable to tell a real pool from an impostor. Braiins released Braiins OS 26.11 alongside the alert, adding TLS certificate and hostname verification and protections against automatic transitions back to unencrypted connections.

**3. Use a local proxy for older machines.** Miners whose equipment supports neither Stratum V2 nor TLS are not left without an option. Braiins released a free Stratum V2 proxy that runs on a small machine inside the miner's own network and secures the connection from the farm to the pool, so even old hardware benefits from encryption.

There is one check every miner should do today, whatever their setup: look at the pool address configured on every machine, **including every backup pool**. If any pool URL starts with `stratum+tcp://`, that connection is unencrypted and can be hijacked. Braiins' alert is explicit that this includes backup pools — the fallback connection a miner switches to when the main one drops is exactly the connection an attacker wants to control, because the miner switches to it precisely when something has gone wrong.

Pools and software providers have their own part. Braiins urged pools to offer Stratum V1 over TLS and, ideally, Stratum V2, to send miners their secure addresses and setup instructions, and to alert their customers today rather than waiting. It also urged network operators to validate the routes they accept, so that a fraudulent BGP announcement does not get believed in the first place.

## This Is Not a New Weakness — the Scale Is New

One of the most striking things about the Braiins alert is how old the weakness is. The firm has been warning about hashrate hijacking since 2020, when it published its own security analysis of the financial risks of unencrypted mining communications. The routing trick itself is older still: Dell SecureWorks documented the same technique stealing roughly $83,000 in mining rewards back in 2014. And a 2017 study by researchers at ETH Zurich examined how internet routing attacks could disrupt Bitcoin mining and generate financial losses. The industry has known, for more than a decade, that plain Stratum V1 plus unauthenticated routing equals stealable hashrate.

What changed in November 2026 is the scale and the brazenness. In 2014, the documented theft was $83,000. In the Luxor incident two weeks ago, the confirmed take was about $10,500. In this campaign, the attacker diverted up to 1.9 exahashes per second across 1,600 sites in a single episode — and did it four times in one day, in Europe, after two weeks of smaller test runs in Latin America. The diverted power is still a fraction of one percent of the whole Bitcoin network, so this is not a threat to the network itself. But for the miners hit, it was 100% of their earnings for the minutes the attack ran — and the tenfold growth in two weeks suggests the attacker was learning how far the technique could be pushed.

That trajectory is the real warning in the alert. The early-November episodes were small and short: 120 to 400 sites, 36 to 174 petahashes, sometimes only 90 seconds long. By 20 November they were an order of magnitude larger and hitting more than a thousand sites in a single second. Braiins' characterisation — "testing the waters" — implies the attacker was calibrating, and that the campaign may not have peaked. The fix exists, but it only works if it is adopted before the next wave, not after it.

## What This Means for Indian Miners and Crypto Users

Most Indian readers will never run a mining machine. But the ones who do — the small operators and home miners who point a machine or two at a global pool — face exactly the same risk as the farms in Brazil and Europe, because the attack works on the connection, not on the location. A miner in India using a plain `stratum+tcp://` address is as exposed as any other, and the check is the same: confirm the pool address on every machine including backups, move to Stratum V2 or TLS with certificate verification, and watch the pool dashboard for a hashrate reading that does not match what the machines are doing.

For Indian users who hold crypto rather than mine it, the direct impact is nil — no wallet, exchange or holder is touched by this attack. The indirect lessons are worth carrying, though. The first is that unencrypted connections are a weak point everywhere in crypto, not only in mining: if a service you use still offers a plain-text connection option, treat that as a risk, not a convenience. The second is that the most dangerous attacks are often the ones with no visible symptom. A miner's dashboard showing zero hashrate while the machines run at full power is the mining version of an account that looks fine until the statement arrives — and the defence in both cases is the same unglamorous habit of checking the numbers you expect to see, regularly, rather than assuming they are right.

On the tax side, nothing about this incident changes Indian rules for miners. Income from mining is treated as income from virtual digital assets, taxed at a flat 30% (plus applicable surcharge and 4% cess) under Section 115BBH, with 1% TDS under Section 194S on transfers above the specified thresholds, and losses cannot be set off against other income. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## Timeline: How the Campaign Unfolded

| Date | What happened |
|---|---|
| 2012 | Stratum V1 introduced: the protocol that carries work between miners and pools, with no encryption and no server authentication. |
| 2014 | Dell SecureWorks documents the same BGP routing trick stealing roughly $83,000 in mining rewards. |
| 2017 | ETH Zurich researchers publish a study on how internet routing attacks could disrupt Bitcoin mining and cause financial losses. |
| 2020 | Braiins publishes its own security analysis warning about hashrate hijacking, and begins urging adoption of the encrypted Stratum V2 protocol. |
| 7–12 Nov 2026 | First wave: 19 episodes in Latin America, mostly Brazil and Argentina, 120–400 miner sites each, 36–174 PH/s diverted. |
| 14–15 Nov 2026 | Luxor's Commander fleet-management tool is compromised and customer hashrate is redirected to the OCEAN pool — a different mechanism, covered in our Luxor guide. |
| 16 Nov 2026 | A Brazil episode is captured packet by packet: 3 miners, 3 minutes, difficulty climbing in steps. |
| 20 Nov 2026 | Largest wave: 4 episodes, mostly Europe, 1,050–1,600 miner sites each, 0.6–1.9 EH/s diverted, 6–49 minutes each; more than 1,000 sites hit in the same second. |
| 25 Nov 2026 | Braiins publishes its security alert, releases Braiins OS 26.11 with TLS certificate and hostname verification, and a free Stratum V2 proxy for older machines. Decrypt, Bitcoin.com, CoinTelegraph, CoinStats and ethnews report the alert the same day. |

## Keep Learning

- [Bitcoin Mining Hijack: Luxor's 13 EH/s Rerouted to OCEAN](/blog/luxor-bitcoin-mining-hijack-commander-india-guide) — the other mining hijack this month, through a compromised fleet-management tool rather than the network — and how the two attacks differ.
- [What Is a Crypto Mining Pool? Shared Mining Explained](/blog/what-is-a-crypto-mining-pool-india-guide) — how mining pools work, why miners join them, and what the connection between a miner and its pool actually carries.
- [What Is Hash Rate? Mining Power Explained for Beginners](/blog/what-is-a-hash-rate-mining-power-explained) — what petahashes and exahashes mean, and how to read the numbers in a story like this one.

## The Bottom Line

Bitcoin hashrate hijacking, as Braiins documented it on 25 November 2026, is a theft that needs no hacking. An attacker announces a false internet route, impersonates a mining pool over an unencrypted connection, and collects the miners' work under its own account — while the miners keep running at full power and their dashboards quietly show zero. The campaign grew tenfold in two weeks, from 36 petahashes in Latin America to 1.9 exahashes in Europe, and more than a thousand sites were hit in a single second on 20 November. Braiins says the threat is still live, and that the same technique has been aimed at the endpoints of most of the large pools.

The fix is known, it exists today, and it is free: Stratum V2, or Stratum V1 over TLS with certificate verification, or a local proxy for machines that support neither. The check takes a minute — look at every pool address, including backups, and if any of them starts with `stratum+tcp://`, change it. The weakness behind this attack has been documented since 2014 and warned about by Braiins since 2020. The reason it is still working in November 2026 is not that nobody knew. It is that knowing was never enough — somebody has to change the connection.
