---
title: "iPhone iOS Flaw Puts Crypto Wallet Keys at Risk: India Guide"
category: "Security"
excerpt: "Binance warned on 10 November 2026 that an iOS flaw called worse_query could let malicious apps read wallet seed phrases. What Indian iPhone users should do."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-10T18:47:00+00:00"
faqs:
  - question: "What is the worse_query iOS flaw, and does it affect my iPhone?"
    answer: "Worse_query is a publicly released sandbox escape for iOS 26 and iOS 27, published on GitHub on 8 November 2026 by a researcher known as forcequitOS. On iPhones running affected versions, it can let one app read local files belonging to other apps — the kind of files that can hold wallet seed phrases, private keys and login credentials. Binance named iOS 26.7.1, 27.0.1 and 27.2 as affected versions, while the researcher's own notes describe a wider range, from iOS 26.0 through 26.7.2 and iOS 27.2. Apple released iOS 27.2.1 and iOS 26.7.3 on 9 November, but its published security notes do not name worse_query or confirm that the flaw is fixed."
  - question: "Has any crypto been stolen using worse_query?"
    answer: "No. As of 10 November 2026, neither Binance nor the researcher behind the flaw had reported any confirmed theft or exploitation involving worse_query. The warning is about risk, not about a confirmed attack: the flaw makes it possible for a malicious app to read other apps' files, but reading a file does not automatically reveal a usable private key, and no wallet app has been named as exposed. That is why the advice is precautionary — remove untrusted apps and update your device — rather than a claim that funds have been lost."
  - question: "I use an iPhone in India. What should I do right now?"
    answer: "First, update your iPhone to the latest official iOS version and update all apps through the App Store. Second, delete any app installed from an untrusted source — sideloaded apps and manually signed IPA files are the main risk, because the flaw needs a malicious app on the phone to work. Third, check your wallet app: if you ever stored a seed phrase as a screenshot, note or plain file, move it to a hardware wallet or a secure offline backup and delete the copy. If you suspect your phone was compromised, Binance advises moving funds to a new wallet created on a clean device and resetting all active login sessions. India's 30% crypto tax and 1% TDS are unchanged by this — this is a security issue, not a tax or regulation change."
---

On Tuesday, 10 November 2026, Binance issued an urgent public warning to iPhone users: a newly disclosed iOS flaw called worse_query could let a malicious app read files belonging to other apps on the same phone — including the seed phrases, private keys and login credentials that control crypto wallets. The warning landed on the exchange's official X account and was picked up within hours by Bitcoin Magazine, The Hacker News, crypto.news, Cyber Insider, Cybersecurity News and Bitcoin.com, all carrying the same core facts. This guide explains what worse_query is, which iPhones it affects, what is still unconfirmed, and the exact steps Indian iPhone users should take — without the panic, and without any claim that has not actually been made.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security warning; it does not recommend any exchange, token or investment, and it does not claim that any theft has happened.

## What Happened: Binance's Warning on 10 November

The story starts two days before the warning. On Sunday, 8 November 2026, a security researcher who posts as forcequitOS, working with another researcher known as 0xjohnny, published a proof of concept on GitHub called worse_query. The researcher described it as "a zero-day sandbox escape for iOS 26 and 27, again" — the word "again" because it is the successor to an earlier technique the same researcher had released under the name bad_query.

A proof of concept is a working demonstration that a vulnerability is real. Publishing one is a common practice in security research: it lets other researchers, and the company responsible for the software, verify the flaw and build a fix. It also, inevitably, lets anyone else study the technique — which is why the timing of warnings around a public proof of concept matters.

On 10 November, Binance warned its users about the flaw on X. The exchange's message, quoted in full by several outlets, read:

> "A vulnerability (worse_query) affecting iOS 26.7.1, 27.0.1, and 27.2 allows malicious apps to read local files from other apps, putting seed phrases, private keys, and login credentials at risk across the entire ecosystem. This is an iOS-level issue, not unique to Binance."

That last sentence matters, and it is the reason this story is bigger than one exchange. Binance was not reporting a breach of its own systems. It was warning about a flaw in Apple's operating system that could affect any wallet app, any exchange app, and indeed any app that stores sensitive data in local files on an iPhone.

## What Worse_Query Actually Does: A Sandbox Escape, Explained Simply

To understand why this warning is serious, it helps to understand how iPhones normally keep apps apart. Every app on an iPhone lives inside its own "sandbox" — a sealed container that the operating system enforces. One app is not supposed to be able to read another app's files, just as one flat in a building is not supposed to have a key to the flat next door. Your wallet app's files are meant to be readable only by your wallet app.

Worse_query is a "sandbox escape": a technique that breaks out of that container. Blockchain security firm SlowMist described it as a container sandbox escape rather than a jailbreak — an important distinction. A jailbreak gives the phone's owner full control over the device, usually on purpose. A sandbox escape lets one app silently reach into another app's private storage, which is something no app should ever be able to do.

If a malicious app can read other apps' files, the risk depends on what those files contain. Wallet apps are supposed to store seed phrases and private keys in encrypted form, in the iPhone's secure enclave or in the iOS keychain, where even a sandbox escape should not easily reach them. But not every app does this perfectly, and users themselves often store sensitive material in plain files: a screenshot of a seed phrase, a note containing a recovery phrase, a keystore file saved to the phone, or browser cache data. SlowMist's security chief, known as 23pds, warned specifically that untrusted IPA packages could use this access to expose wallet recovery phrases, keystores or browser cache data stored without encryption. The flaw does not automatically drain wallets — but it removes one of the walls that normally protects them.

The practical point is this: worse_query on its own is not a theft. It is a door. Whether anything walks through that door depends on whether a malicious app is installed on the phone, and on how the wallet app and the user store their secrets. That is why every piece of advice attached to this warning is about the apps on your phone, not about the exchange or the blockchain.

## Which iPhones Are Affected, and Is There a Fix?

Here the picture is messier than the headline suggests, and the uncertainty is part of the story.

Binance named three iOS versions in its warning: iOS 26.7.1, iOS 27.0.1 and iOS 27.2. Those are the versions listed as tested in the release notes of WQ Files, a file-browser app built on the technique by developer Christoph Kolbicz — one of the first tools to reimplement worse_query for practical use.

The researcher's own project documentation describes a wider range: iOS 26.0 through iOS 26.7.2, and iOS 27.2. That matters because it means phones that have not updated to the very latest versions could be affected even if they are not on one of the three versions Binance named.

Then there is the question of the fix. Apple released iOS 27.2.1 and iOS 26.7.3 on 9 November 2026, one day after the proof of concept went public. Those updates fixed two iMessage flaws and several Bluetooth bugs, according to their published security notes. But neither update's notes name worse_query, and neither describes a sandbox escape fix of this kind. Apple, as a matter of policy, does not disclose, discuss or confirm security issues until it has investigated them.

So as of 10 November, no fix for worse_query has been confirmed. SlowMist's 23pds has stated that iOS 27.2.1 blocks the technique, according to Bitcoin.com, but that claim has no independent confirmation from Apple. The Hacker News, in its 10 November report, was blunt: "No fix for the escape has been confirmed." The honest position for a reader is therefore to update to the latest iOS anyway — because the latest release may fix it, and it certainly fixes other flaws — while not assuming the update alone closes this particular hole.

This uncertainty is also why the advice centres on removing untrusted apps. If the flaw cannot be reached by a malicious app, it cannot be used. Updating iOS is still worth doing; it just is not a guarantee for this specific vulnerability yet.

## No Confirmed Thefts — and Why That Distinction Matters

It is worth stating plainly, because security headlines rarely do: as of 10 November 2026, no cryptocurrency theft has been publicly attributed to worse_query. Binance said it had not identified any confirmed incidents involving cryptocurrency theft through the vulnerability, and a Binance spokesperson told crypto.news that the warning was based on published technical evidence rather than on any attack the company had seen. The researcher behind the flaw has not reported any attacks either, and no wallet app has been named as exposed.

That does not make the warning unimportant. Security warnings work best when they arrive before the damage, not after it. The proof of concept is public, the technique is documented, and tools built on it already exist. The window between a public proof of concept and the first real-world abuse is exactly the window in which removing a sideloaded app or updating a phone actually helps.

It does mean readers should be careful about what they repeat. Claims that worse_query "has stolen crypto" or that a particular wallet "has been hacked" are not supported by anything published so far. The verified facts are narrower: a sandbox escape exists, it can expose files, no theft has been confirmed, and no patch has been confirmed. Everything in this guide stays inside those facts.

## How This Is Different From the DarkSword iPhone Thefts

Indian readers who follow crypto security news may feel a sense of déjà vu. Only a few days ago, on 6–7 November, reports emerged of a separate investigation by blockchain analytics firm Bitquery into thefts from hundreds of TRON wallets, linked to a chain of iOS vulnerabilities known as DarkSword and Coruna. That story involved at least $4.06 million in USDT taken from 365 wallets between 5 October and 4 November 2026, and it was the subject of our earlier guide on iPhone crypto theft.

Worse_query is a different flaw, and the difference matters for what you should do about it.

The DarkSword story was about a chain of six vulnerabilities that let attackers compromise iPhones and steal seed phrases directly, with real victims and real losses already traced on-chain. The fixes for those vulnerabilities shipped in iOS 18.7.7 and iOS 26.3, and the advice was about updating and checking whether your wallet had been drained.

Worse_query is about a single sandbox escape with no confirmed victims yet, no confirmed patch, and a risk that depends on which apps are installed on your phone. The advice is therefore about the apps themselves: removing anything from an untrusted source, and making sure your seed phrase is not sitting in a plain file where any app could read it.

The two stories do share one lesson, and it is the lesson that keeps repeating in iPhone crypto security: your phone is a computer that runs other people's code, and the security of your crypto depends as much on what you install as on what the wallet app does. That lesson is worth taking seriously even when no theft has been confirmed.

## The Bigger Context: A Bad Fortnight for Crypto Security

The worse_query warning did not arrive in a vacuum. It came less than two weeks after Binance's 29 October security breach, in which around $6.3 billion in digital assets were stolen — described by several outlets as possibly the largest cryptocurrency theft to date. Since then, the industry has been living through a rolling series of security stories: the FBI's attribution of the Binance theft to North Korean actors, the laundering of stolen funds through memecoins and decentralised exchanges, exchange security warnings from India's own CERT-In, and the DarkSword iPhone investigation.

That context explains why Binance moved quickly to warn users about an iOS flaw that is not even its own. After a $6.3 billion breach, an exchange has every reason to be loud about the next risk, even one that belongs to Apple. It also explains why the warning was picked up so fast: security researchers, journalists and users are all primed to pay attention to crypto security news right now.

For Indian readers, there is a second layer of context. India has been at the centre of enforcement action in the same period: the Enforcement Directorate's searches at CoinDCX and Delta Exchange over alleged FEMA violations, the AP CID's ₹15 crore fraud bust, and the ED's Chennai arrests in a ₹400 crore cyber-fraud case. None of those are connected to worse_query — they are enforcement stories, not software flaws — but together they explain why Indian crypto users are seeing security warnings from every direction at once. The practical response is the same in each case: check your own setup, rather than waiting for someone else's.

## What Indian iPhone Users Should Do Now

The advice from Binance, SlowMist and the security press converges on a short list. None of it requires buying anything, and none of it requires technical skill.

**1. Update iOS and every app to the latest official version.** Go to Settings, then General, then Software Update, and install the newest release. Then update your apps through the App Store. The latest iOS may or may not block worse_query — that is unconfirmed — but it closes other known flaws, and staying current is the single most effective habit in phone security.

**2. Delete any app installed from an untrusted source.** This is the most important step for this specific flaw. Worse_query needs a malicious app on the phone to work, and the realistic way such an app arrives is through sideloading: apps installed from outside the App Store, manually signed IPA files, or apps from links shared in Telegram groups, forums or direct messages. Binance's warning names exactly this: delete apps installed from untrusted sources, such as sideloaded or manually signed IPA files. If you do not remember where an app came from, that is a reason to remove it, not to keep it.

**3. Check how your seed phrase is stored.** If your recovery phrase exists anywhere as a screenshot, a photo, a note, a message to yourself, or a plain text file on the phone, it is exactly the kind of data a sandbox escape could read. Move it to a proper backup: write it on paper and store it somewhere safe, or use a hardware wallet. Then delete the digital copy from the phone — and from the recently-deleted folder and any cloud backup that holds it. A seed phrase should never live in the same device as the wallet it protects.

**4. Use the wallet app's own security features.** Turn on biometric lock and, where the app supports it, a separate app passcode. Make sure your wallet app is updated to its latest version, since wallet developers patch their own storage practices independently of Apple. If your wallet offers a "hide balance" or "lock on exit" option, turn it on.

**5. If you suspect compromise, act as if it happened.** Binance's advice for anyone who suspects their information has been exposed is specific: move your funds to a new wallet created on a clean device, and reset all active login sessions. Do not create the new wallet on the same phone you suspect is compromised. If you use the same password or seed phrase anywhere else, change those too — and never share a seed phrase or password with anyone claiming to help you, whether they contact you by phone, message or email.

**6. Watch out for worse_query scams.** A high-profile security warning attracts impersonators fast. Expect fake "iOS security update" messages, fake wallet support accounts offering to "check" your phone, and fake tools claiming to scan for worse_query. Apple does not push security updates through Telegram, WhatsApp or email links, and no legitimate support agent will ever ask for your seed phrase. If you are a victim of fraud in India, report it on the National Cyber Crime Reporting Portal at cybercrime.gov.in or call the 1930 helpline.

## What Has Not Changed for Indian Users

A security warning is not a tax change, and it is not a regulation change, so the rules Indian crypto users live under are untouched by this story.

Gains on transferring virtual digital assets are still taxed at a flat 30% plus a 4% cess — 31.2% in total — with no set-off of losses, and sales still attract 1% TDS under Section 194S. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. Exchanges registered with FIU-IND still have the same reporting obligations, and the Enforcement Directorate's ongoing investigations into Indian exchanges are a separate matter from this iOS flaw.

What has changed is the risk picture for one specific group: iPhone users who hold crypto and have sideloaded apps, or who store seed phrases in plain files on their phones. For everyone else, the warning is a reminder rather than an emergency — but it is a reminder worth acting on, because the fix is free and takes minutes.

## What to Watch Next

Three things will determine how this story develops, and all three are worth watching over the coming days.

The first is Apple's response. If Apple confirms a fix — either in a new iOS release or in an update to the security notes for iOS 27.2.1 and iOS 26.7.3 — that will settle the patch question. Until then, the status is "unconfirmed", and any claim of a definite fix should be treated with caution.

The second is whether any confirmed exploitation appears. Security researchers and blockchain analytics firms will be watching for wallets drained through this technique, and for malicious apps in the wild that use it. The first confirmed case, if one comes, will change the advice from precautionary to urgent — and it will be reported widely.

The third is the wider pattern of iOS crypto security. Worse_query is the second iPhone wallet-security story in a week, after DarkSword, and it follows a month in which the largest exchange hack in history was carried out partly through a fake job interview and a tampered download. The common thread is not the technology: it is that attackers go after the human and the device, not just the exchange. The users who stay safe are the ones who treat their phone as the front line, not an afterthought.

## The Bottom Line

On 8 November 2026, researcher forcequitOS published worse_query, a sandbox escape for iOS 26 and 27, on GitHub. On 10 November, Binance warned iPhone users that the flaw could let malicious apps read local files from other apps, putting seed phrases, private keys and login credentials at risk on iOS 26.7.1, 27.0.1 and 27.2 — while stressing that this is an iOS-level issue, not a Binance issue. Apple released iOS 27.2.1 and iOS 26.7.3 on 9 November, but its published notes do not name worse_query or confirm a fix, and no theft has been confirmed through the flaw as of 10 November, according to Binance, crypto.news and The Hacker News.

For Indian iPhone users, the action list is short and free: update iOS and all apps, delete any app from an untrusted source, get your seed phrase out of plain files on the phone, and if you suspect compromise, move funds to a new wallet on a clean device. The flaw is real, the risk is real, and the fix — for now — is in your own hands, in the apps you choose to keep on your phone.

## Keep Learning

- [iPhone Crypto Theft: How DarkSword Stole Seed Phrases — India Guide](/blog/iphone-crypto-theft-darksword-india-guide)
- [CERT-In Warns of AI-Powered Attacks on Crypto Exchanges: India Guide](/blog/cert-in-crafty-falcon-ai-crypto-warning-india-guide)
- [How the Binance Hack Happened: Fake Job Interview and Tampered Download](/blog/how-binance-hack-happened-fake-job-interview-india-guide)
