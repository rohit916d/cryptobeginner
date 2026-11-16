---
title: "iOS 27.2.1 Does Not Fix the Crypto Wallet Bug: India Guide"
category: "Security"
excerpt: "iOS 27.2.1 does not fix worse_query, the researcher confirms — and a file-manager app already uses the flaw. What Indian iPhone users must do now."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-16T18:51:08+00:00"
faqs:
  - question: "Does updating to iOS 27.2.1 fix the worse_query crypto wallet flaw?"
    answer: "No, according to the researcher who published the flaw. On 10 November 2026, forcequitOS said on X that worse_query is 'not patched in iOS 27.2.1 and 27.3 beta 1'. Apple's own security notes for iOS 27.2.1 list nine fixes — covering AirPlay, Bluetooth, iMessage and other areas — but none of them names worse_query or a sandbox escape. Apple has published no advisory, CVE or statement about the flaw as of mid-November 2026, so there is no official fix to point to."
  - question: "Has any crypto been stolen using worse_query yet?"
    answer: "No confirmed theft has been reported as of 14 November 2026. Binance said on 10 November that it had found no confirmed incidents involving cryptocurrency theft through worse_query, and no wallet app has been named as exposed. However, Tech Times reported on 12 November that at least one file-manager app already uses the technique to read, change and delete other apps' data — which means the flaw has moved from a research demonstration to something packaged in real software. The risk is live even though no wallet theft has been confirmed."
  - question: "I use an iPhone in India. What should I do about worse_query right now?"
    answer: "First, install iOS 27.2.1 anyway — it fixes nine other real flaws, including one that let a remote attacker join an iMessage group chat. Second, delete any app installed from an untrusted source, especially sideloaded apps and manually signed IPA files, because the flaw needs a malicious app on the phone to work. Third, check that your seed phrase is not stored as a screenshot, note or plain file on the phone — move it to paper or a hardware wallet and delete the digital copy. If you suspect your phone was compromised, move funds to a new wallet created on a clean device. India's 30% crypto tax and 1% TDS are unchanged by this — this is a security issue, not a tax or regulation change."
---

On 9 November 2026, Apple released iOS 27.2.1, and millions of iPhone users installed it assuming the week's most alarming security warning was handled. It was not. The flaw in question is worse_query, a sandbox escape for iOS 26 and iOS 27 that can let one app read the private files of other apps — including the files that can hold crypto wallet seed phrases, private keys and login credentials. On 10 November, the researcher who published the flaw said plainly that it is not fixed in iOS 27.2.1, nor in the first iOS 27.3 beta. Apple's own security notes agree, in their own way: they list nine fixes for iOS 27.2.1, and none of them is worse_query. This guide explains what has changed since our earlier warning, what is now confirmed, and the exact steps Indian iPhone users should take — without the panic, and without any claim that has not actually been made.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security flaw; it does not recommend any exchange, token or investment, and it does not claim that any theft has happened.

## How This Is Different From Our Earlier Warning

On 11 November, we published a guide on the worse_query warning itself: Binance's 10 November alert, the 8 November publication of the proof of concept, the affected iOS versions, and the advice for Indian iPhone users. That guide ended with the patch question open — Apple's 9 November updates did not name worse_query, so no fix had been confirmed, but a fix had not been ruled out either. It also carried one claim that has since been contradicted: that SlowMist's security chief had said iOS 27.2.1 blocks the technique.

This post is about what happened next, and it changes the picture in three ways.

First, the researcher behind the flaw has now confirmed directly that the update does not fix it. On 10 November, forcequitOS posted on X that worse_query is "not patched in iOS 27.2.1 and 27.3 beta 1". The post was seen more than 56,000 times. That is a direct statement from the person who wrote the proof of concept, and it overrides the earlier, second-hand suggestion that the update might have closed the hole.

Second, Apple's silence has now lasted long enough to be a fact in itself. Apple released iOS 27.2.1 and iOS 26.7.3 on 9 November, and by 12–14 November it had still published no advisory, no CVE and no statement about worse_query. The researcher says the flaw was reported to Apple on 20 October, and that Apple did not review the report until 9 November — the same day the updates shipped.

Third, the flaw has moved from a research demonstration to something packaged in real software. Tech Times reported on 12 November that at least one file-manager app already uses the technique to read, change and delete other apps' data. That is a new development: the proof of concept is no longer only sitting on GitHub for researchers to study. It is inside an app that ordinary users can install.

None of this means a theft has happened. As of 14 November, no cryptocurrency theft has been publicly attributed to worse_query. But the three developments together mean the advice has changed: updating iOS is still worth doing, but it can no longer be treated as the fix for this particular flaw. The protection now rests on what is installed on the phone.

## What Worse_Query Is, in Plain Language

Every app on an iPhone lives inside its own "sandbox" — a sealed container that the operating system enforces. One app is not supposed to be able to read another app's files, just as one flat in a building is not supposed to have a key to the flat next door. Your wallet app's files are meant to be readable only by your wallet app.

Worse_query is a "sandbox escape": a technique that breaks out of that container. Blockchain security firm SlowMist described it as a container sandbox escape rather than a jailbreak — an important distinction. A jailbreak gives the phone's owner full control over the device, usually on purpose. A sandbox escape lets one app silently reach into another app's private storage, which is something no app should ever be able to do.

The researcher, who posts as forcequitOS and worked with another researcher known as 0xjohnny, published the proof of concept on GitHub on 8 November 2026, describing it as "a zero-day sandbox escape for iOS 26 and 27, again". The word "again" is there because it is the successor to an earlier technique the same researcher released under the name bad_query.

If a malicious app can read other apps' files, the risk depends on what those files contain. Wallet apps are supposed to store seed phrases and private keys in encrypted form, in the iPhone's secure enclave or in the iOS keychain, where even a sandbox escape should not easily reach them. But not every app does this perfectly, and users themselves often store sensitive material in plain files: a screenshot of a seed phrase, a note containing a recovery phrase, a keystore file saved to the phone, or browser cache data. SlowMist's security chief, known as 23pds, warned specifically that untrusted IPA packages could use this access to expose wallet recovery phrases, keystores or browser cache data stored without encryption.

There is an important limit to the risk, and it is worth stating clearly. The iOS keychain is not among the paths that worse_query's documentation lists as readable, and even raw access to the keychain database file would yield encrypted secrets rather than readable passwords. The flaw does not automatically drain wallets — it removes one of the walls that normally protects them. Whether anything walks through that opening depends on whether a malicious app is installed on the phone, and on how the wallet app and the user store their secrets.

## The Update That Did Not Fix It: iOS 27.2.1

Apple released iOS 27.2.1 and iOS 26.7.3 on 9 November 2026, one day after the proof of concept went public. For iOS 27.2.1, Apple's published security notes list nine fixes. They cover AirPlay, Bluetooth and CoreUtils pairing, brotli compression, rapportd, two iMessage group-chat flaws and one App Intents issue, described as CVE-2026-113963 and credited to a different researcher, László Várady. None of the nine entries mentions worse_query. None of them describes a sandbox escape.

That is the entire official record. Apple, as a matter of policy, does not disclose, discuss or confirm security issues until it has investigated them. But the absence is now confirmed from two directions at once: the notes do not name the flaw, and the researcher who published it says the flaw is still present in the updated software.

The timeline matters here, because it explains the confusion. The updates shipped on 9 November, the day after the proof of concept was published. The researcher's statement that the flaw is not patched came on 10 November, the same day Binance issued its warning. In between, a claim circulated that iOS 27.2.1 blocks the technique, attributed to SlowMist's 23pds. That claim was reported by Bitcoin.com and repeated in our earlier guide with the caveat that it had no independent confirmation from Apple. The researcher's own statement now contradicts it directly, and the researcher's statement is the stronger evidence: it comes from the person who wrote the code, testing the software the claim was about.

There is a second version in the same position. The first iOS 27.3 beta is also affected, according to the researcher. That means the flaw is not a quirk of one release that the next update will quietly sweep away — as of mid-November, it is present in Apple's current stable release and in the beta of the next one.

None of this means iOS 27.2.1 is useless. It fixes nine real flaws, including one that could let a remote attacker join an iMessage group chat and receive its messages, and several Bluetooth pairing bugs. Installing it is still the right thing to do. It simply does not fix this particular flaw, and anyone who installed it believing it did should know that now.

## An App Already Uses the Technique

The most consequential new fact is also the least technical. According to Tech Times, reporting on 12 November, at least one file-manager app already uses the worse_query technique to read, change and delete other apps' data. The proof of concept is no longer only a research artefact. It has been packaged into software that a user can install on a phone.

This was, in a sense, predictable. The proof of concept was published on GitHub on 8 November, and its README is emphatic that the technique is "not relevant to a jailbreak and never will be" — it is a developer tool, not a jailbreak. But a technique that lets one app read another app's files is useful to anyone building a file manager, and useful to anyone building something malicious. The same code serves both purposes, and the user installing the app cannot tell from the outside which purpose it serves.

A tool built on the technique already existed before this report. WQ Files, a file-browser app built by developer Christoph Kolbicz, reimplements worse_query for practical use, and its release notes were the source of the three iOS versions Binance named in its warning: iOS 26.7.1, 27.0.1 and 27.2. The researcher's own documentation describes a wider range: iOS 26.0 through 26.7.2, and iOS 27.2. An analysis by security firm Ostorlab found that a tool built on the technique also claims iOS 27.2.1 as affected.

The route a malicious app takes onto a phone is also now clearer. The proof of concept needs an App Group container — a feature that normally lets related apps share information. Tools such as AltStore and SideStore, and paid signing services, install apps outside the App Store, and they create the required App Group automatically. That is the realistic delivery mechanism: not a hacked App Store, but an app installed from outside it, through a channel the user chose.

This is why every piece of advice attached to this story is about the apps on the phone, not about the exchange or the blockchain. The flaw cannot be used unless a malicious app is installed. Remove the app, and the door stays shut.

## No Confirmed Thefts — and Why the Distinction Still Matters

It is worth stating plainly, because security headlines rarely do: as of 14 November 2026, no cryptocurrency theft has been publicly attributed to worse_query. Binance said on 10 November that it had found no confirmed incidents involving cryptocurrency theft through the vulnerability, and a Binance spokesperson told crypto.news that the warning was based on published technical evidence rather than on any attack the company had seen. No wallet app has been named as exposed, and neither Binance nor the security researchers have identified a specific wallet application whose private keys were successfully extracted.

That does not make the warning unimportant. Security warnings work best when they arrive before the damage, not after it. The proof of concept is public, the technique is documented, tools built on it already exist, and at least one app is already using it. The window between a public proof of concept and the first real-world abuse is exactly the window in which removing a sideloaded app or updating a phone actually helps.

It does mean readers should be careful about what they repeat. Claims that worse_query "has stolen crypto" or that a particular wallet "has been hacked" are not supported by anything published so far. The verified facts are narrower: a sandbox escape exists, Apple's latest update does not fix it, the researcher says it is also present in the next beta, an app already uses the technique, and no theft has been confirmed. Everything in this guide stays inside those facts.

## What Indian iPhone Users Should Do Now

The advice from Binance, SlowMist and the security press converges on a short list. None of it requires buying anything, and none of it requires technical skill. The order matters: the first step is the least important for this specific flaw, and the second is the most important.

**1. Install iOS 27.2.1 anyway — but know what it does and does not do.** Go to Settings, then General, then Software Update, and install the newest release. Then update your apps through the App Store. The update fixes nine other real flaws, including the iMessage group-chat issue, and staying current is the single most effective habit in phone security. What it does not do, according to the researcher who published worse_query, is fix worse_query. Do not treat the update as the end of the job.

**2. Delete any app installed from an untrusted source.** This is the most important step for this specific flaw. Worse_query needs a malicious app on the phone to work, and the realistic way such an app arrives is through sideloading: apps installed from outside the App Store, manually signed IPA files, or apps from links shared in Telegram groups, forums or direct messages. Binance's warning names exactly this: delete apps installed from untrusted sources, such as sideloaded or manually signed IPA files. If you do not remember where an app came from, that is a reason to remove it, not to keep it. Pay particular attention to any file-manager or utility app installed outside the App Store, now that at least one such app is reported to use this technique.

**3. Check how your seed phrase is stored.** If your recovery phrase exists anywhere as a screenshot, a photo, a note, a message to yourself, or a plain text file on the phone, it is exactly the kind of data a sandbox escape could read. Move it to a proper backup: write it on paper and store it somewhere safe, or use a hardware wallet. Then delete the digital copy from the phone — and from the recently-deleted folder and any cloud backup that holds it. A seed phrase should never live in the same device as the wallet it protects. SlowMist made the same point to wallet developers: sensitive data should not be stored in plaintext on the phone at all.

**4. Use the wallet app's own security features.** Turn on biometric lock and, where the app supports it, a separate app passcode. Make sure your wallet app is updated to its latest version, since wallet developers patch their own storage practices independently of Apple. If your wallet offers a "hide balance" or "lock on exit" option, turn it on.

**5. If you suspect compromise, act as if it happened.** Binance's advice for anyone who suspects their information has been exposed is specific: move your funds to a new wallet created on a clean device, and reset all active login sessions. Do not create the new wallet on the same phone you suspect is compromised. If you use the same password or seed phrase anywhere else, change those too — and never share a seed phrase or password with anyone claiming to help you, whether they contact you by phone, message or email.

**6. Watch out for worse_query scams.** A high-profile security warning attracts impersonators fast. Expect fake "iOS security update" messages, fake wallet support accounts offering to "check" your phone, and fake tools claiming to scan for worse_query. Apple does not push security updates through Telegram, WhatsApp or email links, and no legitimate support agent will ever ask for your seed phrase. If you are a victim of fraud in India, report it on the National Cyber Crime Reporting Portal at cybercrime.gov.in or call the 1930 helpline.

## How This Differs From the DarkSword iPhone Thefts

Indian readers who follow crypto security news may feel a sense of déjà vu. A few days before the worse_query warning, reports emerged of a separate investigation by blockchain analytics firm Bitquery into thefts from hundreds of TRON wallets, linked to a chain of iOS vulnerabilities known as DarkSword and Coruna. That story involved at least $4.06 million in USDT taken from 365 wallets between 5 October and 4 November 2026, and it was the subject of our earlier guide on iPhone crypto theft.

Worse_query is a different flaw, and the difference matters for what you should do about it.

The DarkSword story was about a chain of six vulnerabilities that let attackers compromise iPhones and steal seed phrases directly, with real victims and real losses already traced on-chain. The fixes for those vulnerabilities shipped in iOS 18.7.7 and iOS 26.3, and the advice was about updating and checking whether your wallet had been drained.

Worse_query is about a single sandbox escape with no confirmed victims yet, no confirmed patch, and a risk that depends on which apps are installed on your phone. The advice is therefore about the apps themselves: removing anything from an untrusted source, and making sure your seed phrase is not sitting in a plain file where any app could read it.

The two stories do share one lesson, and it is the lesson that keeps repeating in iPhone crypto security: your phone is a computer that runs other people's code, and the security of your crypto depends as much on what you install as on what the wallet app does. That lesson is worth taking seriously even when no theft has been confirmed.

## What Has Not Changed for Indian Users

A security warning is not a tax change, and it is not a regulation change, so the rules Indian crypto users live under are untouched by this story.

Gains on transferring virtual digital assets are still taxed at a flat 30% plus a 4% cess — 31.2% in total — with no set-off of losses, and sales still attract 1% TDS under Section 194S. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. Exchanges registered with FIU-IND still have the same reporting obligations, and the Enforcement Directorate's ongoing investigations into Indian exchanges are a separate matter from this iOS flaw.

What has changed is the risk picture for one specific group: iPhone users who hold crypto and have sideloaded apps, or who store seed phrases in plain files on their phones. For everyone else, the warning is a reminder rather than an emergency — but it is a reminder worth acting on, because the fix is free and takes minutes.

## What to Watch Next

Three things will determine how this story develops, and all three are worth watching over the coming days.

The first is Apple's response. If Apple confirms a fix — either in a new iOS release or in an update to the security notes for iOS 27.2.1 and iOS 26.7.3 — that will settle the patch question. Until then, the status is "not fixed", according to the researcher, and any claim of a definite fix should be treated with caution. The first iOS 27.3 beta is also affected, so the fix, when it comes, will need a new release or a new beta to be visible.

The second is whether any confirmed exploitation appears. Security researchers and blockchain analytics firms will be watching for wallets drained through this technique, and for malicious apps in the wild that use it. The first confirmed case, if one comes, will change the advice from precautionary to urgent — and it will be reported widely. The file-manager app reported on 12 November is the first sign that the technique is being used outside research, and it is the development to watch most closely.

The third is the wider pattern of iOS crypto security. Worse_query is the second iPhone wallet-security story in a month, after DarkSword, and it follows a period in which the largest exchange hack in history was carried out partly through a fake job interview and a tampered download. The common thread is not the technology: it is that attackers go after the human and the device, not just the exchange. The users who stay safe are the ones who treat their phone as the front line, not an afterthought.

## The Bottom Line

On 8 November 2026, researcher forcequitOS published worse_query, a sandbox escape for iOS 26 and 27, on GitHub. On 10 November, Binance warned iPhone users that the flaw could let malicious apps read local files from other apps, putting seed phrases, private keys and login credentials at risk. Apple released iOS 27.2.1 and iOS 26.7.3 on 9 November, but the researcher's own statement on 10 November is that the flaw is not patched in iOS 27.2.1 or in the first iOS 27.3 beta, and Apple's published security notes list nine fixes for iOS 27.2.1, none of which names worse_query or a sandbox escape. By 12 November, Tech Times reported that at least one file-manager app already uses the technique. No theft has been confirmed through the flaw as of 14 November, according to Binance, crypto.news and The Hacker News.

For Indian iPhone users, the action list is short and free: install iOS 27.2.1 for its other fixes, delete any app from an untrusted source, get your seed phrase out of plain files on the phone, and if you suspect compromise, move funds to a new wallet on a clean device. The flaw is real, the update does not fix it, and the protection — for now — is in your own hands, in the apps you choose to keep on your phone.

## Keep Learning

- [iPhone iOS Flaw Puts Crypto Wallet Keys at Risk: India Guide](/blog/ios-worse-query-flaw-crypto-wallets-india-guide)
- [iPhone Crypto Theft: How DarkSword Stole Seed Phrases — India Guide](/blog/iphone-crypto-theft-darksword-india-guide)
- [CERT-In Warns of AI-Powered Attacks on Crypto Exchanges: India Guide](/blog/cert-in-crafty-falcon-ai-crypto-warning-india-guide)
