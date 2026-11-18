---
title: "Lighter API Key Hack: $10M USDC Stolen, India Guide"
category: "Security"
excerpt: "A leaked API key let an attacker move $10.4M in USDC out of Lighter via a public pool — no withdrawal needed. What API keys are, and how to lock yours down."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-18T04:20:00+00:00"
faqs:
  - question: "What happened in the Lighter API key incident?"
    answer: "On 16 November 2026, an attacker used a trader's compromised API key on Lighter, a decentralised perpetual futures exchange built on Ethereum, to move funds through one of the platform's public pools instead of making a normal withdrawal. Blockchain investigators at Bitquery traced a withdrawal of about 10.39 million USDC, while Lookonchain and Onchain Lens estimated total losses at $15.5 million. Lighter's Security Council recovered about $5 million in USDC and returned it to the affected trader, and deposits and withdrawals were restored on Monday. Lighter says its protocol and smart contracts were not exploited — the loss came from leaked trading credentials."
  - question: "What is a crypto API key, and why is it dangerous if leaked?"
    answer: "An API key is a pair of credentials — a public key and a secret key — that lets an app, a trading bot or a portfolio tracker act on your exchange account without you logging in. Many traders create one to automate trades or sync their portfolio. The danger is that a key with trading permission can place orders, move funds between account features and, as the Lighter incident showed, interact with products such as public pools — even when the key is not allowed to withdraw to an outside wallet. Whoever holds the key can act as you, so a leaked key is effectively a leaked login with a narrower, but still powerful, set of powers."
  - question: "How can Indian crypto users protect their API keys?"
    answer: "First, give every key the smallest permissions it needs — trading only if it must trade, and never withdrawal permission unless you genuinely need it. Second, restrict the key to specific IP addresses where the exchange offers that option, so a stolen key is useless from anywhere else. Third, create keys only through the exchange's official app or website, never through third-party signing tools, and rotate or delete keys you no longer use. Finally, if you ever suspect a key has leaked, revoke it immediately from the exchange's API settings and check your recent account activity. The tax rules are unchanged: gains on crypto are taxed at a flat 30% plus a 4% cess, with 1% TDS on sales. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

A single leaked API key moved more than $10 million out of a crypto exchange this week — without a single normal withdrawal. On 16 November 2026, an attacker used a trader's compromised API key on Lighter, a decentralised perpetual futures exchange built on Ethereum, to route funds through one of the platform's public pools and out the other side. Lighter says its protocol and smart contracts were never breached. The weak point was a credential, and the route around the exchange's withdrawal controls was a product feature working exactly as designed. For Indian traders who use API keys for bots, portfolio trackers and tax tools, this incident is a practical warning about a tool most users set up once and then forget.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security incident and how API keys work; it does not recommend any exchange, product or trade, and it makes no prediction about future prices.

## What Happened: The Facts at a Glance

The facts below are drawn from Lighter's own postmortem and announcements, and from same-day reporting by Coin360, GazeWire and TradingView/NewsBTC on 18 November 2026. Where a figure comes from an independent investigator rather than the exchange, this guide says so.

| Fact | Detail |
|---|---|
| What happened | A trader's compromised API key was used to move funds through a Lighter public pool |
| When it happened | 16 November 2026 |
| What was traced onchain | A withdrawal of 10,393,057 USDC, traced by Bitquery |
| Larger loss estimate | $15.5 million, estimated by Lookonchain and Onchain Lens |
| What was recovered | About $5 million in USDC, returned to the affected trader by Lighter's Security Council |
| What was not disclosed | The total amount stolen, and the identity of the affected trader |
| Root cause, per Lighter | API keys generated with signing software outside its official SDKs; the software reused nonces, letting the private key be calculated from two public signatures |
| What Lighter says was not affected | Its protocol, smart contracts and infrastructure |
| Immediate response | Withdrawals and public-pool creation suspended; Guardian Mode activated; operations restored on Monday |
| What changed afterwards | Wallet signatures now required for public-pool transfers; API key signatures made non-public; IP allowlists and per-key permissions planned |

The numbers disagree, and the disagreement itself is part of the story. Bitquery traced a specific withdrawal of 10.39 million USDC. Lookonchain and Onchain Lens put the estimated losses higher, at $15.5 million, and suggested the compromised trading account belonged to Abraxas Capital, a crypto asset manager. Lighter has not disclosed a total stolen figure and has not identified the trader, so the Abraxas connection has not been established through the exchange's own disclosures. What is confirmed is the $5 million the exchange says it recovered and returned, and the fact that deposits and withdrawals are back to normal.

## What Is an API Key, in Plain Language?

An API key is a pair of credentials — a public key and a secret key — that lets a program act on your exchange account without you typing in a password each time. If you have ever connected a portfolio tracker to an exchange, run a trading bot, or let a tax tool pull your trade history automatically, you have probably created one. The key is a kind of spare login: it cannot do everything your password can, but it can do whatever permissions you gave it when you created it.

The permissions are the whole story. When you create an API key, the exchange usually asks what it may do: read your balances and trade history, place and cancel orders, move funds between parts of your account, and — on many platforms — withdraw to an outside wallet. Most users tick the boxes quickly and move on. That is the habit this incident punishes, because a key's permissions define exactly what an attacker can do with it, and those permissions are often far broader than the job the key was created for.

There is a common misunderstanding worth clearing up first. Many traders believe that switching off withdrawal permission makes an API key safe. The Lighter incident shows why that belief is incomplete. The attacker never made a normal withdrawal from the compromised account. Instead, they used a feature of the platform — public pools — to move the money sideways and then out. A key that can trade can still lose you money if someone else holds it, as Lighter itself put it in its postmortem. Withdrawal limits are one lock on one door; they do not help if another door is open.

## How the Attack Worked, Step by Step

Lighter's postmortem describes a sequence that is clever precisely because it uses the platform's own rules. It is worth following slowly, because the mechanism is the lesson.

First, the attacker created a public pool using the compromised trader's account. On Lighter, a public pool is a shared fund that other users can put money into, receiving shares in return. Creating one is a normal feature, and the compromised API key had permission to do it.

Second, the attacker minted shares in that pool through a second account under their own control. At this point the attacker owned shares in a pool that held, so far, nothing of value.

Third, the attacker transferred the trader's funds into the pool — without issuing any additional shares for that deposit. This is the heart of the trick. Because no new shares were created for the money going in, the value of each existing share rose. The shares the attacker already held were suddenly worth much more, because the pool now contained the trader's money.

Fourth, the attacker redeemed those shares and withdrew the proceeds. The money left the platform through the attacker's own account, in a transaction that looked, to the system's rules, like an ordinary pool redemption.

No withdrawal was ever made from the victim's account. No smart contract was exploited, according to Lighter. The attacker simply used a legitimate feature in a way its designers had not guarded against — moving money between accounts through a pool, where the normal withdrawal controls did not apply. That is why Lighter's first fix was not a patch to a contract, but a change to the rules: an API key alone can no longer approve transfers into public pools. Those now require a signature from the account's wallet.

## The Nonce Mistake That Gave Away the Key

The other half of the story is how the attacker got the key in the first place — or, more precisely, how they got the private key behind it. Lighter traced the compromised API keys to signatures generated using signing software outside its official software development kits. That software reused nonces.

A nonce, in this context, is a one-time number used when creating a cryptographic signature. The rule is simple and absolute: a nonce must never be used twice with the same key. If the same nonce and the same key appear in two signatures that are both publicly visible, anyone who can see both signatures can work backwards and calculate the private key. It is one of the oldest known failure modes in cryptography, and it is exactly what happened here.

This matters for a practical reason. Traders sometimes use unofficial tools — a script found online, a third-party signing utility, a bot framework that brings its own signing code — because they are convenient or because they add a feature the official tools lack. Lighter says its official SDKs were not involved, and that its protocol, smart contracts and infrastructure were not compromised. The failure was in software the exchange did not write and could not control, used by a trader who presumably had no idea it was reusing nonces. The lesson is not that unofficial tools are always dangerous; it is that the signing step is the most sensitive part of the whole setup, and it is the worst place to trust code you have not vetted.

There is a useful comparison here. The incident is different in kind from the big exchange hacks of the past few weeks. The Binance incident in late October involved attackers getting inside the exchange's own systems over weeks. The Lighter incident involved no break-in at the exchange at all. One trader's credentials were exposed through a signing flaw, and the platform's own features did the rest. That is a narrower failure — and a more personal one, because the defence against it sits with the individual user, not with the exchange's security team.

## Why This Is Not Just a Lighter Problem

Lighter is a decentralised perpetual futures exchange, a niche product that most Indian beginners will never use. But the pattern it exposes is universal, and it applies directly to the accounts Indian users actually hold.

API keys are everywhere in Indian crypto. Traders on CoinDCX, WazirX, ZebPay and CoinSwitch create them for bots that trade on their behalf, for portfolio apps that track holdings across exchanges, and for tax tools that need trade history to calculate gains. Each of those keys is a credential with real power, and each one is created in a settings page that most users visit once and never return to. Old keys accumulate. Keys created for a tool that was abandoned months ago keep working. Keys with withdrawal permission granted "just in case" sit quietly in a database, waiting for the one day they are needed — by their owner, or by someone else.

The SignalPlus incident covered on this site earlier is a useful parallel: there too, API keys were at the centre of the story, and the response was to revoke the affected keys. The details differ, but the shape is the same — a credential, not a contract, was the way in. And the Robinhood insider-trading case covered on this site this week shows the other side of the same coin: on Hyperliquid, another perpetual futures venue, the risk came from a person with inside access rather than a leaked key, but the effect was the same — someone who should not have been able to move a market could.

There is also a timing point worth noting. The incident landed in a week when the wider market was already nervous. Bitcoin was trading near $64,600 on the morning of 18 November, according to Indian market coverage, down roughly 12% over seven days, with the Fear & Greed Index at 12 — deep in the "extreme fear" zone — and US spot Bitcoin ETFs recording about $1.07 billion in net outflows over the previous week. None of that caused the Lighter incident, and nothing in this guide suggests it did. But nervous markets are when users are most likely to reach for new tools, new bots and new shortcuts — and that is when a carelessly created API key is most likely to be the thing that gets exploited.

## What Indian Users Should Do Now

If you use API keys anywhere — on an Indian exchange, on an international one, or on a decentralised platform — the following steps are worth taking this week, in order of importance.

First, audit your keys. Open the API settings page on every exchange you use and look at what is actually there. Most traders are surprised. Delete every key you do not recognise, every key tied to a tool you no longer use, and every key you created for a one-off experiment. A key that does not exist cannot be stolen.

Second, shrink the permissions on the keys you keep. Give each key only what its job requires. A portfolio tracker needs read-only access — it should never be able to trade. A trading bot needs trading permission, but it almost never needs withdrawal permission. If a key has withdrawal access and you cannot say exactly why, switch it off. This is the single most effective change most users can make, and it takes about a minute per key.

Third, restrict keys by IP address wherever the exchange offers the option. An IP allowlist means the key only works from the addresses you specify — typically your home connection or your server. A stolen key used from anywhere else simply fails. Lighter has said it plans to add IP allowlists; most large centralised exchanges already offer them. Use them.

Fourth, create keys only through the exchange's official app or website, and sign transactions only with the exchange's official tools or SDKs. Do not paste your credentials into third-party signing software, scripts from forums, or tools you have not vetted. The Lighter incident is a direct demonstration of what can go wrong when the signing step is handed to code you do not control. If a tool needs your secret key to work, that is a reason to be suspicious, not a reason to trust it.

Fifth, rotate your keys regularly. Deleting an old key and creating a fresh one takes a few minutes, and it limits the damage if a key was copied at some point without your knowledge. Treat API keys the way you would treat a password you suspect might have leaked: replace it rather than hoping for the best.

Sixth, if you ever suspect a key has leaked, revoke it immediately from the exchange's API settings, then check your recent account activity — orders, transfers, pool interactions, anything you do not recognise. Do not wait to confirm the leak. Revoking a key costs nothing and can be undone by creating a new one; leaving a leaked key active costs whatever the attacker can move.

Finally, report what you find. If you discover unauthorised activity, tell the exchange through its official support channel inside the app, and report the incident to the government's cybercrime helpline at 1930 or through the National Cyber Crime Reporting Portal. Reporting helps the exchange trace the route the attacker used, and it helps other users, because a technique that works once tends to be tried again.

## The Tax and Regulation Position Is Unchanged

For completeness: this incident changes nothing about the tax or regulatory position of Indian crypto users. Gains on crypto transfers are taxed at a flat 30% plus a 4% cess, with 1% TDS on sales, and those rules apply whether or not you use API keys. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

The regulatory picture is also unchanged. API keys are a feature of the exchange or platform you use, not a regulated product in themselves, and no Indian regulator has issued guidance about them. That is worth understanding: the safety of your API keys is, for now, a matter between you and the platform. There is no rule requiring exchanges to limit key permissions by default, and no regulator will step in if a key you created is misused. The protection has to come from your own settings.

One more context point for Indian users: Bitcoin was trading near $64,600, or roughly ₹60 lakh on Indian exchanges, on the morning of 18 November, with the India premium — the gap between what Indians pay and the world price converted at the rupee rate — at about +11% in live readings. That price and that premium are background context for the market, not a consequence of this incident, and nothing in this guide should be read as a comment on where prices go next.

## What to Watch Next

Three things will determine how this story develops, and all three are worth watching over the coming days.

The first is whether the $15.5 million estimate is confirmed or revised. Lighter has not disclosed a total stolen figure, and the gap between Bitquery's traced $10.39 million withdrawal and the larger estimate leaves real uncertainty about the scale. If Lighter publishes a fuller accounting, or if investigators trace further movements, the picture will sharpen — and the amount recovered, currently about $5 million, may change too.

The second is whether other platforms find the same hole. The public-pool transfer trick is specific to Lighter's design, but the underlying idea — moving funds through a product feature that sits outside withdrawal controls — could exist elsewhere. Watch for other perpetual futures venues and decentralised exchanges announcing permission changes for similar features, as Lighter has now done. If they do, that will tell you the industry took the lesson seriously.

The third is the Abraxas question. Lookonchain and Onchain Lens suggested the compromised account belonged to Abraxas Capital. That connection has not been established through Lighter's own disclosures, and no statement from Abraxas has been reported. If the account holder is confirmed, it will matter — because the victim here was not a beginner, but a sophisticated trading operation, and the flaw was in the signing software it used. That would make the warning sharper, not weaker: if a professional operation can lose a key to a nonce-reuse bug, anyone can.

## The Bottom Line

On 16 November 2026, an attacker used a trader's compromised API key to move funds through a public pool on Lighter, a decentralised perpetual futures exchange — routing around withdrawal controls entirely. Bitquery traced a withdrawal of about 10.39 million USDC; independent investigators estimated total losses at $15.5 million, a figure Lighter has not confirmed. The exchange's Security Council recovered about $5 million and returned it, and deposits and withdrawals were restored on Monday. The root cause, according to Lighter, was signing software outside its official tools that reused nonces, allowing the private key to be calculated from two public signatures. No smart contract was exploited, and no protocol was breached. The loss came from a credential.

For Indian users, the practical meaning is straightforward. API keys are powerful, they accumulate quietly, and the permissions you grant them define exactly what an attacker can do. Audit your keys, shrink their permissions, restrict them by IP address, create them only through official tools, and revoke anything you no longer use. A key that can trade can still lose you money if someone else holds it — and the cheapest time to learn that is before it happens to you.

## Keep Learning

- [SignalPlus Hack: API Keys Revoked — India Safety Guide](/blog/signalplus-hack-api-keys-revoked-india-guide)
- [Secure Crypto Exchange Account: Complete 2FA Checklist](/blog/how-to-secure-crypto-exchange-account-india-guide)
- [Robinhood Insider Trading on Hyperliquid: India Guide](/blog/robinhood-insider-trading-hyperliquid-india-guide)
