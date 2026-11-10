---
title: "Binance Pool Shuts Down Today: What Indian Miners Must Do"
category: "Bitcoin"
excerpt: "Binance Pool — once over 2% of Bitcoin mining — closes today, 10 November 2026. What shuts down at 12:30 IST, and the checklist for Indian miners."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/bitcoin.jpg"
created_at: "2026-11-10T04:25:00+00:00"
faqs:
  - question: "Is Binance Pool really shutting down today?"
    answer: "Yes. Binance announced in October 2026 that it would discontinue Binance Pool and related services on 10 November 2026 at 07:00 UTC, which is 12:30 IST. From that time, miners are disconnected, Stratum URLs and mining endpoints stop working, and no new hashrate submissions or mining shares are accepted or credited. The block-reward service, Cloud Mining, Pool Savings and the Transaction Accelerator all end at the same cutoff. Binance Pool pages remain viewable until 24 November 2026 at 07:00 UTC, giving users a short window to check records and settlements."
  - question: "I used Binance Cloud Mining or Pool Savings — what happens to my money?"
    answer: "Cloud Mining and Pool Savings both end with the shutdown, and only mining shares submitted before the 07:00 UTC cutoff on 10 November are included in the final reward calculation, according to Binance's notice. Binance has asked users to finish any pending account or identity-verification steps by 10 November 2026 at 23:59 UTC so that any eligible settlements can be processed. Check your Binance Pool dashboard before the pages go offline on 24 November, note down your final balances and reward figures, and keep screenshots and transaction records. If anything looks wrong, raise it through Binance's official support channels — never through a Telegram or WhatsApp contact claiming to help with refunds."
  - question: "Does the Binance Pool shutdown affect Bitcoin's security or price?"
    answer: "In practical terms, no. Binance Pool mined only one of roughly 925 Bitcoin blocks in the week before the shutdown — about 0.11% of network production — and found no blocks at all in the final 24 hours. The Bitcoin network is secured by miners all over the world, so one small pool closing does not change how the network works or how secure it is. Its miners simply point their machines at other pools. This guide does not predict what will happen to Bitcoin's price, and no pool shutdown by itself is a reason to buy or sell."
---

Binance Pool — the Bitcoin mining pool run by the world's largest crypto exchange — shuts down today, 10 November 2026, at 07:00 UTC, which is 12:30 IST. After more than six years in operation, and after mining over 22,000 Bitcoin blocks since its launch in April 2020, the pool is being switched off. In its final week it found just one block out of roughly 925 mined across the whole Bitcoin network. This guide explains what is closing, why it is closing, what happens to miners and cloud-mining users, and the checklist Indian users should work through before the deadlines pass.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported service shutdown; it does not recommend any mining pool or service, and it does not predict any price movement.

## What Happened: The Shutdown in One Paragraph

Binance announced in October 2026 that it would discontinue Binance Pool and all related services on 10 November 2026. The cutoff is 07:00 UTC on Tuesday, 10 November — 12:30 in the afternoon in India. From that moment, Binance disconnects miners, disables its Stratum URLs and mining endpoints, and stops accepting, processing or crediting hashrate submissions and mining shares received afterwards. The shutdown covers the block-reward service, Cloud Mining, Pool Savings and the Transaction Accelerator, along with related features such as mining APIs and hashrate alerts. Binance Pool pages stay viewable until 24 November 2026 at 07:00 UTC, and users have been asked to finish any pending account or identity-verification steps by 10 November at 23:59 UTC so that eligible settlements can be processed.

The story was confirmed in detail by CoinDesk on 9 November 2026, using data from mempool.space, and covered the same day by Gadgets 360, TradersUnion, CoinCourier and Analytics Insight, all reporting the same timeline and the same set of closing services.

## What Is a Mining Pool, in Plain Words?

Bitcoin mining is the process by which computers compete to add new blocks of transactions to the Bitcoin blockchain. Each block carries a reward — newly created Bitcoin plus the transaction fees in that block. A single home miner, or even a small mining farm, will almost never win a block on its own, because the competition is enormous. So miners join a pool: they combine their computing power, the pool wins blocks far more often, and the rewards are shared out in proportion to the work each miner contributed.

The share of the network's total computing power that a pool controls is its hashrate share. A pool with 2% of the network's hashrate should, on average, find about 2% of the blocks. That is why the numbers from Binance Pool's final week are so striking: one block out of roughly 925 is about 0.11%, a tiny fraction of what the pool once produced. Block discovery is partly a matter of luck, so a single quiet week is not by itself proof of how much power a pool still has — but the longer trend points the same way, as the next section shows.

## The Numbers Behind the Decline

The figures reported on 9 November 2026 tell the story of a pool that had already faded long before its formal closing date.

| Measure | Figure | Source |
|---|---|---|
| Blocks found in final 7 days | 1 of ~925 (about 0.11%) | CoinDesk / mempool.space |
| Blocks found in final 24 hours | 0 | CoinDesk / mempool.space |
| Last identified block | 974,743, mined 01:15 UTC, 6 Nov 2026 | CoinDesk / mempool.space |
| Reward in that last block | About 3.134 BTC, including fees, across 1,353 transactions | CoinDesk |
| Computing power, December 2025 | About 26 exahashes per second (EH/s) | CoinDesk |
| Computing power, October 2026 | About 9.2 EH/s — a fall of roughly 65% | CoinDesk |
| Pool's peak share of the network | Over 2% of Bitcoin's computing power | Analytics Insight |
| Blocks mined since launch (April 2020) | More than 22,000 | mempool.space, via PBX Science |
| Attributed hashrate on 9 Nov dashboard | About 1.05 EH/s | CoinCourier / mempool.space |

Two caveats matter for readers. First, block discovery is probabilistic: a pool can have real computing power and still go days without finding a block, so one block in a week is not a precise measure of the pool's remaining hashrate. Second, the attributed hashrate on a public dashboard is an estimate based on the blocks a pool is seen to find, not a direct reading of the machines connected to it. Even with those caveats, the direction is clear — from about 26 EH/s in December 2025 to about 9.2 EH/s in October 2026, a drop of roughly two-thirds in ten months, with rival pools such as Foundry USA, AntPool and F2Pool named in the coverage as the operations absorbing the departing computing power.

## Why Is Binance Closing the Pool?

Binance's own reason, as stated in its October announcement, is short: the closure follows an "ongoing review of products and services". The exchange offered no more specific explanation, and no reporting has tied the decision to any single cause.

That is worth stating plainly, because the timing invites speculation. The announcement came in October 2026, the same month Binance suffered a major security incident on 29 October in which billions of dollars of crypto were stolen from its hot wallets. The shutdown is a product decision about a mining service, not part of the incident response, and Binance has not linked the two. Readers should not assume a connection that neither Binance nor any reporting has established.

What is established is the business picture: a pool that once handled more than 2% of Bitcoin's computing power had fallen to a fraction of that share, its computing power had dropped by about 65% in under a year, and the exchange decided the service no longer justified its place in the product line. Exchanges regularly review and retire services — and Binance has been closing or reshaping products across its platform through 2026, including the phased withdrawal reopenings that followed the October incident.

## What Exactly Shuts Down at 12:30 IST

The closure is not just the pool itself. Four named services end at the same cutoff, plus the supporting features around them.

**1. Binance Pool (block-reward service).** The core service: miners point their machines at Binance's Stratum servers, contribute hashrate, and earn a share of block rewards. From 07:00 UTC on 10 November, miners are disconnected and new shares are not accepted or credited.

**2. Cloud Mining.** The service that let users buy hashrate contracts without owning machines. Contracts end with the shutdown; only shares submitted before the cutoff count towards the final reward calculation.

**3. Pool Savings.** The savings product tied to the pool. It closes with the rest of the service, so users should check their balances and settlement figures before the pages go offline.

**4. Transaction Accelerator.** The tool that let users pay to speed up a stuck Bitcoin transaction. It ends at the same time, so anyone with a pending transaction should use an alternative route — or simply wait for the network to confirm it at the normal pace.

On top of those four, Binance is disabling mining APIs, hashrate notifications, mining endpoints and related features. The practical message for any miner still pointed at Binance Pool is simple: repoint your hardware to a different pool before the cutoff, or the work your machines do after it will not be credited.

## What Indian Miners and Cloud-Mining Users Must Do

If you used Binance Pool, Cloud Mining or Pool Savings, work through this checklist before the deadlines pass. The dates are in both UTC and IST so there is no confusion.

**1. Repoint your hardware before 12:30 IST today (07:00 UTC, 10 November).** Any miner still connected to Binance Pool's Stratum servers will be disconnected at the cutoff, and shares submitted after it will not be accepted or credited. Switch your machines to your new pool's Stratum address before then, and confirm on the new pool's dashboard that your hashrate is showing up.

**2. Finish verification by 05:29 IST on 11 November (23:59 UTC, 10 November).** Binance has asked users to complete any pending account or identity-verification steps by this time so that eligible settlements can be processed. Do it early — verification queues can be slow on a deadline day.

**3. Check your final balances and rewards now.** Open your Binance Pool dashboard and note your Pool Savings balance, your Cloud Mining contract status, and your final reward figures. Take screenshots and save them. The pool pages remain viewable until 07:00 UTC on 24 November (12:30 IST), but after that date the record may be harder to reach.

**4. Understand the final reward calculation.** Only mining shares submitted before the 07:00 UTC cutoff are included in the final reward calculation, according to Binance's notice. Shares submitted after the cutoff will not be credited, and outstanding payments and refunds are subject to the exchange's terms and account requirements. If a payment looks wrong, raise it through Binance's official support channels.

**5. Pick your next pool on facts, not on promises.** The largest pools by reported share include Foundry USA, AntPool and F2Pool, which the coverage names as the operations gaining from Binance Pool's decline. When comparing pools, look at the fee structure, the payout method and minimum payout, the pool's reliability record, and whether it supports the payout currency and wallet you use. Be wary of any pool promising unusually high returns — in mining, as elsewhere in crypto, a return that looks too good to be true usually is.

**6. Do not trust "refund" messages.** Shutdowns attract scammers. No genuine Binance message will ask for your seed phrase, your password, or a payment to "release" your mining rewards. If someone contacts you on Telegram, WhatsApp or X claiming to help recover Binance Pool funds, treat it as a scam. Use only Binance's official support channels, and report fraud on India's National Cyber Crime Reporting Portal at cybercrime.gov.in or the 1930 helpline.

## The Tax Angle for Indian Miners

Mining rewards are crypto income, and Indian tax law treats them as such. Gains on transferring virtual digital assets are taxed at a flat 30% plus a 4% cess — 31.2% in total — with no set-off of losses, and sales attract 1% TDS under Section 194S. That applies to mining rewards you sell or swap just as it applies to crypto you buy on an exchange. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

The shutdown itself creates a small piece of tax housekeeping. If you earned mining rewards through Binance Pool or Cloud Mining during 2026, keep the final reward figures and the dates you received them — they are part of your income record for the year, and the pool pages go offline on 24 November. Export or screenshot your history now rather than trying to reconstruct it from wallet records months later. If you are unsure how mining income should be reported, speak to a qualified tax professional; this guide is educational, not tax advice.

## What the Shutdown Means for Bitcoin Itself

For the Bitcoin network, the closure is a footnote rather than an event. Binance Pool's share of block production had already fallen to about 0.11% in its final week, and the network's total computing power is spread across many pools and miners in many countries. When one small pool closes, its miners move to other pools and the network carries on exactly as before. There is no gap in block production, no change to how transactions are confirmed, and no effect on the security of the network that a beginner needs to worry about.

The bigger picture is about the mining business, not about Bitcoin. Mining has consolidated over the years into fewer, larger pools, and the economics of running a pool — servers, support, compliance, and thin margins — favour scale. A pool that drops from 26 EH/s to 9 EH/s is a pool whose business case has weakened, and Binance's decision to retire it rather than rebuild it is consistent with that trend. For anyone learning about mining, the lesson is that pools are businesses with their own economics, and even a pool run by the world's largest exchange can shrink and close.

## What to Watch Next

Three things will show whether this closure is a one-off product decision or part of a wider reshaping of Binance's services.

The first is what happens to the pool's remaining miners. If most of them land at the largest pools, the network's mining power becomes slightly more concentrated — a trend worth watching, since Bitcoin's security depends on mining power staying spread out rather than piling into a handful of pools.

The second is whether Binance retires or reshapes other services in the same review. The exchange has already been through a turbulent autumn — the October security incident, the phased withdrawal reopenings, and now a product closure. Watch Binance's own announcements for what comes next, and treat any claim about a new closure as unconfirmed until Binance itself says so.

The third is the settlement experience for Cloud Mining and Pool Savings users. If final rewards and refunds are processed smoothly before the 24 November page cutoff, the closure will pass quietly. If users report missing or delayed settlements, that will be the story to follow — and the reason to have your screenshots and records ready now.

## The Bottom Line

Binance Pool, launched in April 2020 and once responsible for more than 2% of Bitcoin's mining, shuts down today, 10 November 2026, at 07:00 UTC (12:30 IST). The block-reward service, Cloud Mining, Pool Savings and the Transaction Accelerator all end at the same cutoff, and miners still pointed at Binance's servers need to repoint their hardware before then. The pool's decline — from about 26 EH/s in December 2025 to about 9.2 EH/s in October, and just one block in its final week — explains the decision better than any single event does, and Binance's stated reason is an ongoing review of its products and services.

For Indian users, the action list is short: repoint your miners, finish verification by 23:59 UTC today, check and record your final balances before the pool pages go offline on 24 November, and do not trust anyone offering to "recover" your mining rewards. For Bitcoin itself, the network carries on unchanged — one small pool closing is not a network event. The closure is a reminder that in crypto, even services run by the biggest names can be switched off, and that keeping your own records is the one habit that always pays.

## Keep Learning

- [What Is a Crypto Mining Pool? How Pool Mining Works in India](/blog/what-is-a-crypto-mining-pool-india-guide)
- [What Is Hash Rate? Mining Power Explained for Beginners](/blog/what-is-a-hash-rate-mining-power-explained)
- [Binance Security Incident Explained: What Happened and What Indian Users Should Do](/blog/binance-security-incident-india-guide)
