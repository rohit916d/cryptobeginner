---
title: "Where Is the Stolen Binance Crypto Now? $3.1B Update"
category: "Security"
excerpt: "Elliptic's 6 November update traces the $6.43B Binance theft: $2.85B frozen, $3.11B still in attacker wallets, almost nothing cashed out. The full picture."
read_time: 12
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-07T04:25:00+00:00"
faqs:
  - question: "Where is the crypto stolen from Binance now?"
    answer: "According to blockchain analytics firm Elliptic, in its report updated on 6 November 2026, about $3.11 billion of the $6.43 billion stolen from Binance on 29 October still sits in addresses linked to the theft, mostly in ETH and Bitcoin. A further $2.85 billion — about 44% of the total — has been frozen or seized, mostly stablecoins that issuers such as Tether and Circle froze within an hour of the theft. Only about $124 million has been converted into Bitcoin, and Elliptic says almost none of the money has actually been cashed out into spendable currency."
  - question: "Can stolen crypto be frozen or recovered?"
    answer: "It depends on the asset. Stablecoins such as USDT and USDC can be frozen by their issuers — Tether and Circle froze more than $2.3 billion within an hour of the Binance theft — because the issuer controls a blacklist in the token's smart contract. Native coins such as Bitcoin and ETH cannot be frozen by anyone, which is why the attackers have been converting other assets into them. Funds that reach a regulated exchange or an over-the-counter broker can also be seized if the exchange blocks the tainted addresses, which is why Elliptic published a free blocklist of nearly 18,000 linked addresses."
  - question: "Does the Binance hack affect Indian users' money on the exchange?"
    answer: "Binance says users did not lose money from the theft: it set aside $6.34 billion from its SAFU fund, a Bitcoin reserve, part of its Futures Insurance Fund and its corporate treasury, and by 1 November it had replaced about 95% of the affected assets. On 6 November Binance said users could verify that their balances are backed at least 1:1 using the zero-knowledge proof for its latest proof-of-reserves snapshot. Indian users should still treat the episode as a reminder to check an exchange's proof of reserves, keep only trading funds on exchanges, and never trust anyone offering to 'recover' stolen crypto for a fee."
---

Where is the stolen Binance crypto now? Eight days after the largest crypto theft on record, blockchain analytics firm Elliptic published an updated accounting of the money — and the picture is stranger than most people expected. About **$3.11 billion of the $6.43 billion taken from Binance on 29 October 2026 — roughly ₹29,200 crore — is still sitting in wallets linked to the theft**, mostly in ETH and Bitcoin, and has barely moved. Another **$2.85 billion has been frozen or seized**. And almost none of it — under 1% — has actually been turned into money anyone can spend.

This guide explains where every part of the $6.43 billion sits, how investigators are tracking it across 16 blockchains, why the attackers are converting everything into Bitcoin, and what it means for Indian users. Every figure is attributed to its source, and where the evidence is an assessment rather than a fact, we say so.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported blockchain investigation; it does not recommend any coin, exchange or trade.

## The Money, Bucket by Bucket: $6.43 Billion Accounted For

Elliptic's report, written by co-founder Tom Robinson and last updated on 6 November 2026, divides the stolen funds into four buckets. The table below is taken from Elliptic's figures as reported by Decrypt and CoinStats:

| Where the stolen crypto sits | Amount | Share of $6.43B |
|---|---|---|
| Frozen or seized | $2.85 billion (~₹26,750 crore) | 44.3% |
| Still in addresses linked to the theft | $3.11 billion (~₹29,200 crore) | 48.4% |
| Converted into Bitcoin | ~$124 million (~₹1,160 crore) | 1.9% |
| Cashed out into spendable money | Negligible — none identified | Under 1% |

Two points about the arithmetic matter. First, the converted Bitcoin is a subset of the $3.11 billion still held in linked addresses, not a separate bucket — the 1,650 BTC sits in newly created Bitcoin addresses that Elliptic links to the theft. Second, Elliptic's figures are running estimates taken at slightly different points in a fast-moving case, so they do not reconcile exactly to the theft total. The rupee conversions use the rate of about ₹93.89 to the dollar cited in Indian reporting on 6 November, and are approximate.

The headline is the split: nearly half the money was stopped before it could move, and nearly half of it is stuck in plain sight on public blockchains. That is the opposite of how a bank robbery works, and it is the reason this story is still unfolding a week later.

## How $2.85 Billion Was Frozen Before It Could Move

The largest single success in the case happened within about an hour of the theft. When the attackers took roughly $6.43 billion between 20:05 and 23:56 UTC on 29 October, a large share of it was in stablecoins — USDT and USDC. Those tokens have a feature that Bitcoin and ETH do not: their issuers can freeze specific addresses.

Tether's CEO Paolo Ardoino said Tether froze more than 1.567 billion USDT, and Circle's CEO Jeremy Allaire said Circle froze more than 800 million USDC, both in coordination with law enforcement. Together with seizures by partners, about $2.85 billion — 44% of the haul — was frozen or seized. Elliptic notes that about $786 million in stablecoins was converted into other assets before the freezes landed, which is why the frozen total is lower than the stablecoin share of the theft.

This is the part of the story that surprises beginners most, because it cuts against the popular idea that crypto is untraceable and unstoppable. Stablecoins are issued by companies, and those companies maintain blacklists in the token's smart contract. When law enforcement or the exchange flags an address, the issuer can freeze the tokens in it, and the freeze is instant and global. That is also why the attackers immediately started converting their stablecoins into assets nobody can freeze — which is where the rest of the story begins.

## The $3.11 Billion That Has Not Moved

The most striking number in Elliptic's update is the money that has gone nowhere. About $3.11 billion remains in addresses linked to the theft, and Elliptic says it is "very likely" still held by North Korea — an assessment, not a proven fact. The FBI attributed the theft on 31 October to North Korean hackers it calls TraderTraitor; North Korea has denied involvement.

The unmoved money is concentrated in a small number of wallets:

- **Bitcoin:** the 18,270 BTC stolen from Binance — worth about $1.5 billion at the time of the theft — was split into 19 addresses on the day of the hack and has not moved since.
- **Ethereum:** the nine largest Ethereum addresses hold 89% of the attacker's ETH, and none of them has moved since 30 October.

Why would thieves sit on billions of dollars for a week? Because moving it is the hard part. Every address linked to the theft is now on watchlists: Elliptic says it has labelled nearly 18,000 addresses tied to the theft, screens against them in its own products, and published a free blocklist so other firms can do the same. Any regulated exchange or broker that receives funds from those addresses is expected to freeze them. So the attackers face a problem no bank robber has: the money is visible to everyone, forever, and spending it requires finding a counterparty willing to take tainted funds.

## How the Laundering Actually Works

The money that is moving is moving through an industrial-scale operation. Elliptic describes the laundering as "highly complex and clearly automated", and the scale behind that sentence is large: **more than 20,000 wallets across 16 blockchains, at least 36 services, and at least 65,000 transactions** in the first eight days.

Here is how the main routes work, according to Elliptic's report:

**The TRON route — about $220 million.** Most of the laundering so far has run through Tron. A single distribution wallet sent 684.6 million TRX to hundreds of new addresses over 51 hours — including through the night in Pyongyang, according to Elliptic — and almost all of it was then bridged to Ethereum. TRON was chosen because it is fast and cheap, which matters when you need to split funds across thousands of wallets.

**The Solana route — about $87 million.** All of the stolen Solana has now been swapped, bridged or mixed. We covered this route in detail in our earlier guide: the attackers moved SOL into USDC, bridged it, and converted it into ETH and then BTC, much of it through the cross-chain service THORChain.

**The XRP route — about $50 million moved, $226 million still to go.** The attackers have started laundering the stolen XRP, with about $50 million swapped so far, mostly through THORChain into BTC. About $226 million in XRP is still sitting in linked addresses, waiting its turn.

**Coinjoins and privacy pools — small amounts.** About 33 BTC, worth around $2.5 million, has gone through Wasabi-style coinjoins, where many users' coins are mixed together to break the trail. About $1.1 million in ETH and SOL has been deposited into the Privacy Cash pool, which paused deposits for about a day after the deposits were noticed.

The pattern across all of these routes is the same: split the money into many small pieces, move each piece through a different service or chain, and gradually convert everything into Bitcoin. Bitcoin is the destination because it is the hardest asset to freeze and the easiest to sell through over-the-counter brokers.

## Why "Converted to Bitcoin" Is Not "Cashed Out"

This is the distinction that most coverage of the story gets wrong, and it is the key to understanding why $3.11 billion is still sitting in wallets a week later.

Converting stolen ETH into Bitcoin is not laundering in the sense of getting clean money out. It is changing the shape of the money while it stays on public blockchains. As CoinStats put it in its coverage of the Elliptic report: every swap, bridge and coinjoin in the chain stays visible on a public ledger. What the attackers have bought in eight days is distance from the moment of theft, not an exit.

The exit needs a counterparty — an exchange, a broker, or an over-the-counter desk willing to accept the funds and hand over fiat currency or clean crypto. That is where eight figures of tainted Bitcoin becomes somebody's compliance file. Regulated firms screen deposits against the same blocklists Elliptic published, and the FBI has published the attacker addresses and urged services to block them. So the final step — turning Bitcoin into spendable money — is the step the attackers have barely started. Elliptic says a negligible amount, under 1%, has likely been cashed out.

Elliptic expects the remaining ETH to be gradually swapped into Bitcoin and then cashed out through over-the-counter brokers and exchanges over a period of months — the same pattern seen after the 2025 Bybit hack, where the attackers converted stolen funds to USDT on Tron and moved them through suspected Chinese OTC services. That is a forecast based on precedent, not a certainty, and the timeline could stretch much longer if the blocklists hold.

## What Binance Has Done Since the Theft

For users, the other half of the story is what happened to the exchange itself. Binance says it set aside $6.34 billion from its Secure Asset Fund for Users (SAFU), a Bitcoin reserve, part of its Futures Insurance Fund and its corporate treasury to cover the theft, and by 1 November it had replaced about 95% of the affected assets. The remaining 5% is mainly less liquid tokens that Binance is still buying through exchanges and over-the-counter desks.

Binance has also continued restoring services in phases, and on 6 November the exchange said users could now verify that their balances are backed at least 1:1 using the zero-knowledge proof for its latest proof-of-reserves snapshot. A proof of reserves is a cryptographic check that lets users confirm the exchange holds enough assets to cover all customer balances, without the exchange revealing individual account details. It does not prove the exchange is safe from future attacks, but it does answer the specific question of whether customer funds are still there.

That distinction matters. The theft was an attack on Binance's internal systems — a compromised laptop, a service container and a wallet signing service, according to Binance's own incident report — and the exchange covered the losses from its own funds. That is very different from a case where an exchange simply loses customer money and has nothing to pay it back with. Indian users who trade on any exchange should understand the difference, because it is the difference between a bad week and a total loss.

## What This Means for Indian Users

The Elliptic report is a story about North Korean hackers and billions of dollars, but it carries four practical lessons for Indian crypto users:

**1. Stablecoins are not as censorship-proof as they look.** Many Indian users hold USDT because it feels like digital dollars. The Binance case shows that Tether and Circle can and do freeze USDT and USDC in flagged addresses within an hour. That is a feature when the funds are stolen, and it is a risk to understand if you hold stablecoins as a store of value. Native crypto such as Bitcoin cannot be frozen by any company — but it can be blocked by every regulated exchange the moment it is linked to a theft.

**2. Check proof of reserves before you trust an exchange with large sums.** After the hack, Binance published a new proof-of-reserves snapshot with a zero-knowledge proof that users can verify themselves. Other exchanges publish similar attestations. Before keeping a large balance on any platform, check whether it publishes proof of reserves, whether the attestation is recent, and whether an independent firm signed it. An exchange that will not show its reserves is asking you to trust it blindly.

**3. The "recovery" scams have already started.** Whenever billions in stolen crypto make headlines, scammers follow. Expect fake "Binance refund" pages, Telegram groups claiming to return stolen funds, and people offering to "recover" your crypto for a fee. Binance's SAFU fund covers exchange users, not random wallet holders, and no legitimate recovery service will ask you for your seed phrase or an upfront payment. If someone contacts you about the Binance hack, assume it is a scam until proven otherwise.

**4. Your own security still matters more than any exchange's.** The Binance theft targeted the exchange's internal systems, not individual users. But the same week brought a separate investigation into iPhone wallet drains, where attackers stole seed phrases from unpatched phones. Exchange safety and personal safety are two different problems, and fixing one does not fix the other. Keep your devices updated, keep your seed phrase off your phone and on paper, and keep only trading funds on exchanges.

## The Bottom Line

Elliptic's update, published 6 November 2026, gives the clearest picture yet of the largest crypto theft on record. Of the $6.43 billion taken from Binance on 29 October, about $2.85 billion was frozen or seized — mostly stablecoins stopped by their issuers within an hour. About $3.11 billion still sits in addresses linked to the theft, concentrated in 19 Bitcoin addresses and nine large Ethereum addresses that have not moved in a week. Only about $124 million has been converted into Bitcoin, and almost none of it has been cashed out. The laundering operation behind the moving funds spans more than 20,000 wallets, 16 blockchains and 36 services, but every step of it is visible on public ledgers — and that visibility is exactly what is keeping the money stuck.

For Indian users, the lesson is not that crypto is unsafe, and not that it is safe. It is that crypto is traceable in ways cash is not, that stablecoins can be frozen by their issuers, and that the difference between losing money and getting it back often comes down to which exchange you use, what proof it publishes, and how carefully you guard your own keys. The $3.11 billion sitting in those wallets is a reminder of all three at once.

## Keep Learning

- [How Stolen Crypto Is Traced: Blockchain Forensics Explained](/blog/how-stolen-crypto-traced-india-guide)
- [Binance Stolen SOL Laundering via THORChain Explained](/blog/binance-stolen-sol-thorchain-laundering-india-guide)
- [FBI Attributes Binance Hack to North Korea: What It Means](/blog/fbi-north-korea-binance-hack-attribution-india-guide)
