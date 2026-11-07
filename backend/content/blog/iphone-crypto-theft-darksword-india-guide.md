---
title: "iPhone Crypto Theft: ₹38 Crore Stolen in One Month"
category: "Security"
excerpt: "Bitquery traced $4.06M in USDT drained from 365 wallets in a month, linked to iPhone exploit kits. What Indian users must check and fix today."
read_time: 14
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-07T00:50:00+00:00"
faqs:
  - question: "What is the iPhone crypto theft that Bitquery investigated?"
    answer: "Blockchain analytics firm Bitquery investigated a month of reported wallet drains and found at least $4.06 million in USDT — about ₹38 crore — taken from 365 wallets on the TRON network between 5 October and 4 November 2026. The funds were funnelled through 43 collector addresses linked by a single shared fee wallet. Bitquery matched one theft to a publicly reported iPhone case, and security researchers link similar thefts to the DarkSword and Coruna iOS exploit kits, which can steal seed phrases from an unpatched iPhone. But Bitquery stressed it could not confirm that every one of the 365 wallets belonged to an iPhone user, or that DarkSword was behind all of them."
  - question: "How do I know if my iPhone is at risk from DarkSword?"
    answer: "DarkSword targets iPhones running iOS 18.4 through 18.7, and the related Coruna kit targets iOS 13.0 through 17.2.1, according to a Trust Wallet advisory published on 6 November 2026. Apple has patched the vulnerabilities — the fixes are in iOS 18.7.7 and iOS 26.3 — so the first check is your iOS version: go to Settings, then General, then Software Update, and install the latest version available for your phone. If your iPhone cannot update to a patched version, Trust Wallet recommends turning on Lockdown Mode, which reduces the attack surface. The risk is highest if you keep a wallet recovery phrase saved in your phone's Photos or Notes apps."
  - question: "My wallet was drained without me approving anything. What should I do?"
    answer: "If your seed phrase or private key has been exposed, changing your wallet password or revoking token approvals is not enough — the attacker can simply sign transactions from their own device. The recommended recovery, from both Bitquery and security firm SlowMist, is to create a brand-new wallet with a brand-new recovery phrase on a clean, fully updated device, move any remaining funds there immediately, and treat the old recovery phrase as permanently compromised. Never type your recovery phrase into any website, and never share it with anyone claiming to be support — official support will never ask for it."
---

iPhone crypto theft is the freshest security story in crypto this week: blockchain analytics firm Bitquery traced at least **$4.06 million in USDT — about ₹38 crore — drained from 365 wallets in a single month**, and the trail points at exploit kits that can steal a wallet's recovery phrase straight from an unpatched iPhone. The investigation, verified on 5 November 2026 and reported on 6 November, is a warning that lands directly on Indian self-custody users: the danger is not a hacked exchange or a phishing link you clicked, but the phone in your pocket holding your seed phrase.

This guide explains what Bitquery actually found, what the DarkSword and Coruna exploit kits are, what the investigation could and could not prove, and — most importantly — the exact steps Indian users should take today to check whether they are exposed. Every figure here is attributed to its source, and where the evidence is uncertain, we say so plainly.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security investigation; it does not recommend any wallet, coin or trade.

## What Bitquery Found: $4.06 Million From 365 Wallets

Bitquery's investigation began with a month of reported wallet drains and followed the money on-chain. Researcher Gaurav Agarwal linked the thefts through a single shared fee wallet that funded 43 short-lived collector addresses. Here are the headline numbers, as Bitquery reported them:

| What Bitquery counted | Figure |
|---|---|
| USDT taken on TRON (minimum) | At least $4.06 million (~₹38.12 crore) |
| TRON wallets emptied | 365 |
| Collector addresses | 43, plus 1 shared fee wallet |
| Time window | 5 October to 4 November 2026 |
| Worst single day | 25 October (~31% of the total) |
| Median USDT loss per wallet | $1,029 |
| Wallets losing over $100,000 each | 8 wallets, together 63% of the total |
| Losses on 8 other blockchains | At least $103,000 from 65 wallets |

The rupee figure comes from btcmedia.news, which converted the $4.06 million at ₹93.89 to the dollar — The Hindu's provisional USD/INR close on 6 November — giving roughly ₹38.12 crore. Bitquery's count is deliberately conservative: it only counted a wallet as a victim when a single payment took **all** of its USDT, so partial drains are excluded and the true total is higher. Of the 365 wallets, 89 lost only TRX, while 276 lost USDT. The same stolen keys also emptied wallets on Ethereum, BNB Chain, Solana and five other networks, which is exactly what you would expect if the attacker had the victims' seed phrases: one recovery phrase can control wallets on many chains at once.

The pattern Bitquery found is strikingly mechanical. On TRON, moving USDT costs a small amount of TRX as a fee, so the attacker first sent each victim a few TRX — just enough to pay the fee — and then the victim's entire USDT balance left seconds later, followed by any leftover TRX. In one case on 25 October, a wallet received 18 TRX and sent its entire balance of 519,093 USDT to a collector address just 18 seconds later. That speed and uniformity is the fingerprint of an automated operation, not 365 separate accidents.

## What Is DarkSword — and What Is Coruna?

The exploit kits at the centre of this story are not new, but the Bitquery investigation is the first time their damage has been measured in such detail.

**DarkSword** is an iOS exploit chain disclosed on 18 March 2026 by Google's Threat Intelligence Group, together with security firms Lookout and iVerify. It chains together six separate iOS vulnerabilities to escape the Safari browser's sandbox — the security boundary that is supposed to keep a web page away from the rest of the phone — and gain access to system memory. Once inside, it can extract passwords, messages and data stored in the phone's Keychain, including crypto wallet information. Security researchers describe it as a complete exploit chain and infostealer written in JavaScript that can collect and exfiltrate targeted data within seconds or at most minutes.

The attack needs no tap, no download and no transaction approval from the victim. Simply loading a booby-trapped page in Safari on a vulnerable iPhone can trigger the chain. That is what makes it so dangerous for crypto users: there is no suspicious transaction to reject, because the attacker steals the keys and then signs transactions from their own device.

DarkSword targets iPhones running **iOS 18.4 through 18.7**. A separate, related kit called **Coruna** targets older versions, **iOS 13.0 through 17.2.1**, according to a Trust Wallet advisory published on 6 November 2026. In October 2026, internet-scanning firm Censys reported finding five exposed servers hosting an operational DarkSword and Coruna exploitation platform, and described the operation as commercial exploitation-as-a-service, with reseller accounts and device quotas — though Censys could not attribute it to a named actor.

**What the kits hunt for:** according to Censys and security firm SlowMist, the toolkits contain modules that specifically target at least 18 cryptocurrency wallet apps — including MetaMask, Phantom, Trust Wallet, Coinbase, imToken, TokenPocket, TronLink and OKX — and can search the phone's Photos and Notes apps for recovery phrases. That last detail is the one that matters most for ordinary users: if your 12- or 24-word seed phrase exists as a screenshot in Photos or a note in Notes, a compromised phone can hand it to an attacker without you ever opening your wallet app.

**The fixes exist.** Apple has patched the vulnerabilities used in the DarkSword chain, with all fixes in place by **iOS 26.3**, and **iOS 18.7.7** provides protections against DarkSword web attacks, according to Macworld and the security advisories. The problem is not that no fix exists — it is that phones which skipped updates remain exposed.

## How the Thefts Worked, Step by Step

Putting Bitquery's on-chain findings together with the security researchers' technical work gives a clear picture of the attack chain:

**Step 1: The victim visits a malicious page.** The exploit is delivered through Safari — a booby-trapped web page, possibly reached through an ad, a shortened link or a compromised site. No app needs to be installed and no permission needs to be granted.

**Step 2: The exploit chain runs silently.** DarkSword chains six iOS vulnerabilities to escape the browser sandbox and gain elevated access to the phone. Google's investigation documented a data-mining payload called GHOSTBLADE used in some campaigns, and observed attacks on users in Ukraine, Saudi Arabia, Turkey and Malaysia.

**Step 3: The seed phrase is harvested.** The toolkit searches the phone for wallet data — saved credentials, local wallet databases, and recovery phrases stored in Photos or Notes. If it finds a usable private key or recovery phrase, the attacker now controls the wallet completely.

**Step 4: The funds are drained automatically.** The attacker's system sends a small amount of TRX to the victim's wallet to cover transaction fees, then moves the entire USDT balance to a collector address within seconds. The 43 collector addresses Bitquery identified were all funded from the same shared fee wallet, which is how the whole network was linked together.

**Step 5: The trail is spread across chains.** Because a single seed phrase can control wallets on many blockchains, the same keys emptied wallets on Ethereum, BNB Chain, Solana and five other networks — at least $103,000 more, on top of the $4.06 million on TRON.

Notice what is absent from every step: the victim never approves a transaction, never enters a password on a fake site, and never sees a warning. That is why the usual advice — "check the address before you approve" — does not help here. The defence has to happen before the attack, at the level of the device and the seed phrase itself.

## What Bitquery Could Not Prove — and Why That Matters

Honest reporting requires saying what the evidence does not show, and Bitquery was careful about this. Three caveats matter:

**Not every victim is confirmed to be an iPhone user.** Bitquery matched the investigation's starting point to one publicly reported iPhone theft — the amount and timing of a single transaction matched a published account — but blockchain records cannot reveal which phone or wallet app each victim was using. The firm explicitly said it could not confirm that all 365 losses were caused by iPhone vulnerabilities or by DarkSword, and its study does not establish a DarkSword-specific loss total.

**There is no evidence of a Trust Wallet app bug.** Bitquery found no evidence of a flaw in the Trust Wallet app itself, and stressed that the risk sits in the device that holds the seed, not in any one wallet application. A separate social-media claim that Trust Wallet users lost about $1.1 million surfaced on 5 November 2026, but it gave no wallet addresses and remains unverified. Trust Wallet has not confirmed that total.

**Individual cases are unconfirmed.** Two individual cases circulated alongside the investigation. On 3 November, a Trust Wallet user reported 3,830 USDT vanishing without any transaction approval — but the cause of that transfer has not been confirmed, and nothing so far ties it to DarkSword. In a separate October case, a user reported losing 68,327 USDT from a Trust Wallet on an iPhone on 15 October and attributed the theft to DarkSword himself, but that attribution is the victim's own assessment, not a confirmed finding.

These caveats do not make the story less serious — $4.06 million traced to a single fee-wallet network is a real, measured loss. But they do mean the correct headline is "a theft network drained 365 wallets, and iPhone exploit kits are the leading explanation", not "DarkSword stole exactly $4.06 million". For Indian users, the practical lesson is the same either way: a seed phrase stored on a phone is only as safe as the phone itself.

## Why This Matters So Much for Indian Users

India is one of the world's largest crypto markets by user count, and self-custody — holding crypto in your own wallet rather than on an exchange — is increasingly common among Indian users who want control of their funds. That makes this story directly relevant in ways that go beyond the global headlines:

**Self-custody means the phone is the bank.** On an exchange, a hack is the exchange's problem to fix. In self-custody, your seed phrase is the only thing standing between your funds and anyone who obtains it. There is no customer support to reverse a transfer, no password reset, and no insurance. If your seed phrase is stolen, the funds are gone — and, as the Bitquery case shows, they can be gone within seconds.

**Many Indian users keep seeds in Photos or Notes.** It is common for beginners to screenshot their recovery phrase during wallet setup, or to save it in a notes app "just for now". That habit turns an iPhone exploit into a wallet exploit. A seed phrase should exist only on paper or metal, stored offline, in a place only you can reach. It should never be a photo, a note, a cloud document, or a message to yourself.

**The USDT premium makes losses bigger in rupees.** Indian users already pay a premium for USDT — The Crypto Times' India USDT Premium Index showed a 6 Nov 2026 fix of about +5.97%, meaning one USDT cost about ₹100.18 against a reference rate near ₹94.64. When USDT is drained from an Indian wallet, the rupee value of the loss is higher than the dollar figure suggests, because the same USDT would have cost more rupees to buy in the first place.

**Tax still applies to what remains.** If you do recover funds or realise gains, remember the Indian tax picture: gains on crypto are taxed at a flat 30%, plus a 1% TDS on transfers above the threshold, and losses cannot be set off against other income. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. A theft is not a taxable gain, but keep records of what happened — dates, amounts, wallet addresses and any police or exchange correspondence — because clear records matter if you ever need to explain the loss.

**This is the second major security warning in two days.** On 5 November, we covered CERT-In's CRAFTY FALCON advisory, which warned that crypto exchanges are among the targets of an AI-assisted threat actor. The two stories are different — one targets exchanges, the other targets individual phones — but together they describe a security environment where both the platforms and the devices Indian users rely on are under active attack.

## What To Do Right Now: A Checklist for Indian iPhone Users

If you hold crypto in a self-custody wallet on an iPhone, work through this list today. It takes about fifteen minutes and it closes the exact gaps this investigation exposed.

**1. Update your iPhone immediately.** Go to Settings, then General, then Software Update, and install the latest iOS version available for your device. The DarkSword vulnerabilities are fixed in iOS 18.7.7 and iOS 26.3. If your phone cannot update to a patched version, turn on Lockdown Mode (Settings, then Privacy and Security, then Lockdown Mode), which reduces the attack surface — Trust Wallet specifically recommends this for devices that cannot be updated.

**2. Get your seed phrase off your phone.** Search your Photos and Notes for any screenshot or note containing your recovery phrase, and delete it — then delete it from the Recently Deleted folder too. Write the phrase down on paper, store it somewhere safe and offline, and never photograph it again. If you have ever stored your seed phrase in a cloud-synced notes app, treat that phrase as exposed and move to step 4.

**3. Check your wallets for unexpected activity.** Open each wallet app and review recent transactions. Look for any outgoing transfer you did not make, however small. Remember that the attacker sends a small amount of TRX first — an unexpected incoming TRX payment followed by an outgoing USDT transfer is the exact pattern Bitquery documented.

**4. If you suspect compromise, start fresh — do not just change a password.** If your seed phrase may have been exposed, changing your wallet password or revoking token approvals is not enough, because the attacker already has the keys and can sign from their own device. Create a brand-new wallet with a brand-new recovery phrase on a clean, fully updated device, transfer any remaining funds there immediately, and never reuse the old recovery phrase. SlowMist gives the same advice: treat old recovery phrases and private keys as compromised and never reuse them.

**5. Never type your seed phrase into a website.** No legitimate support team will ever ask for your recovery phrase. Security researchers found a fake Trust Wallet site (trastwallet[.]cam) asking visitors to connect wallets to "review transfers" — that is a scam. Only ever enter your seed phrase into a wallet app you installed yourself, on a device you trust, and only when you are deliberately restoring a wallet.

**6. Be careful what you open in Safari.** Because the exploit can trigger from a malicious web page, be cautious with links from unknown sources, shortened URLs, and crypto-related ads. Keep your browser updated along with your operating system, and consider Lockdown Mode if you regularly visit unfamiliar crypto sites.

## How This Differs From the Exchange Hacks

Readers who have followed our recent coverage may wonder how this story relates to the Binance incident and the CoinDCX deposit-wallet event. The answer is that it is a different kind of attack, and confusing them leads to the wrong defences.

The Binance incident was an attack on an exchange's internal systems — a compromised laptop, a service container, and a wallet signing service — and Binance covered the losses from its SAFU fund and company funds. The CoinDCX event was a deposit-wallet incident at an exchange. In both cases, the user's own device was not the target, and the exchange took responsibility for making users whole.

The iPhone wallet drains are the opposite: the exchange is not involved at all, and there is nobody to reimburse you. The attack targets the user's own phone, and the user's own seed phrase is the prize. That is why the advice is different too — updating iOS and taking your seed phrase off your phone would not have helped against an exchange hack, and an exchange's SAFU fund will not help against a stolen seed phrase. Self-custody gives you control, and with control comes the responsibility for the device that holds the keys.

## The Bottom Line

Bitquery's investigation found at least $4.06 million in USDT — about ₹38 crore — drained from 365 TRON wallets between 5 October and 4 November 2026, funnelled through 43 collector addresses linked by a single fee wallet, with at least $103,000 more taken from 65 wallets on eight other chains. The leading explanation, supported by Google, Lookout, iVerify, Censys and SlowMist, is the DarkSword and Coruna iOS exploit kits, which can steal seed phrases from unpatched iPhones through a booby-trapped Safari page without the victim approving anything. But Bitquery itself was careful: it could not confirm that every victim used an iPhone, or that DarkSword caused every loss, and it found no evidence of a bug in any wallet app.

For Indian users, the lesson is practical and urgent. Update your iPhone to the latest iOS, get your seed phrase out of Photos and Notes and onto paper, and if you have any reason to think your phrase was exposed, create a fresh wallet on a clean device and move your funds. The thieves in this story did not need your password, your approval or your cooperation — they needed your phone to be out of date and your seed phrase to be on it. Fixing those two things is the whole defence, and it takes fifteen minutes.

## Keep Learning

- [What Is a Crypto Seed Phrase? A Beginner's Guide](/blog/what-is-a-crypto-seed-phrase-a-beginner-s-guide)
- [How to Store Crypto Safely in India: A Beginner's Guide](/blog/how-to-store-crypto-safely-india-beginners-guide)
- [Crypto Hacks in 2026: AI-Powered Attacks Explained](/blog/crypto-hacks-2026-ai-attacks-india-guide)
