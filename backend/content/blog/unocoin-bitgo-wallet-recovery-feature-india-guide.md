---
title: "Unocoin BitGo Wallet Recovery: How Funds Moved While Frozen"
category: "Security"
excerpt: "Unocoin says transfers from its BitGo wallets were signed outside the custodian's platform while frozen — possibly via a wallet recovery feature."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-13T12:52:00+00:00"
faqs:
  - question: "What is the BitGo wallet recovery feature Unocoin is talking about?"
    answer: "BitGo's multisignature wallets include a recovery feature that lets a wallet holder access funds if BitGo itself becomes unavailable — for example, if the custodian's service goes down or the holder can no longer reach the platform. Unocoin said on 13 November 2026 that it suspects this feature may have been misused to sign transfers outside BitGo's platform while its enterprise account was frozen. The exchange has not confirmed how the transfers happened, and BitGo has not publicly commented on the claim."
  - question: "How could money move if Unocoin's BitGo account was frozen?"
    answer: "A freeze at a custodian works at the platform level: BitGo stops processing transactions through its own systems. But a cryptocurrency transfer is ultimately just a message signed with the right private keys and broadcast to the blockchain. If someone holds the keys — or a recovery key that can stand in for the platform — they can sign and broadcast a transfer from outside the custodian's systems entirely, and no platform freeze can stop it. That is what Unocoin says appears to have happened, and it is the core lesson of this incident."
  - question: "Is my money on Unocoin safe, and what should I do?"
    answer: "Unocoin has not confirmed whether any digital assets were lost, and it has not announced a date for restoring deposits and withdrawals — all services remain suspended as of 13 November 2026. If you hold funds on Unocoin, do not act on messages claiming to recover them, do not share seed phrases or login details with anyone, and rely only on Unocoin's official channels for updates. The exchange says more than 90% of customer funds are in cold storage, but that is the company's own statement and has not been independently verified."
---

On Friday 13 November 2026, Indian crypto exchange Unocoin gave the first detailed account of how suspicious transfers left wallets linked to its custodian, BitGo — and the explanation raises a question every crypto user should understand. Unocoin said BitGo froze its enterprise account on 6 November at Unocoin's own request, and that the freeze "worked as intended". Yet the transfers under investigation were signed and broadcast outside BitGo's platform. The exchange suspects the answer is a wallet recovery feature built into BitGo's multisignature wallets — a feature designed to let a wallet holder reach their funds if the custodian becomes unavailable — and that someone may have misused it. This guide explains what the Unocoin BitGo wallet recovery feature is, why a freeze did not stop the transfers, what is still unconfirmed, and what Indian users should do.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a published exchange statement; it does not recommend buying, selling or holding any asset, and it does not predict where prices will go.

## What Happened: The Facts at a Glance

The facts, as reported on 13 November 2026 by Cointelegraph, TokenPost, CryptoBreaking, KuCoin and GazeWire, all drawing on Unocoin's own statement, are:

- **Unocoin first detected unauthorised activity on 6 November.** The exchange spotted suspicious activity that day and asked BitGo to freeze its enterprise account. BitGo did so on 6 November, and Unocoin says the freeze worked as intended.
- **Services were suspended after further activity.** Unocoin detected more activity and suspended all services on Monday 9 November. Deposits and withdrawals have remained halted since then, with no date announced for restoring them.
- **The transfers were signed outside BitGo's platform.** Unocoin said the transactions under investigation were signed and broadcast outside BitGo's platform — which is why the freeze did not stop them. A platform freeze controls what happens inside the platform. It cannot control a transaction signed with the right keys somewhere else.
- **A recovery feature is the suspected route.** BitGo's multisignature wallets include a recovery feature that lets wallet holders access funds if BitGo becomes unavailable. Unocoin suspects this feature may have been misused. The exchange has not established how the transfers occurred, and it has not confirmed whether any digital assets were lost.
- **No loss figure and no restart date.** As of 13 November, Unocoin has not said how much, if anything, was taken, and it has not announced when deposits and withdrawals will resume. Its website was returning errors on 12 November, and logins have been disabled since 9 November.
- **Indian users are searching for answers.** Google Trends data for India on 13 November shows "Unocoin" spiking to the maximum interest value of 100 at 13:22 IST, with "unocoin login" as the breakout rising query — the search pattern of users trying to reach an exchange they cannot log into. Maharashtra and Karnataka were the top regions for the searches.

Two points deserve emphasis because they are easy to misread. First, Unocoin has not confirmed that the recovery feature was actually misused — it says it suspects so, and that it has not yet established how the transfers happened. The recovery-feature explanation is the exchange's leading hypothesis, not a proven fact. Second, the freeze working "as intended" and money still moving are not a contradiction. They describe two different layers: the custodian's platform, which behaved as designed, and the blockchain, which does not ask any platform for permission.

## What Is a Multisig Wallet Recovery Feature?

To understand why this matters, it helps to understand what a multisignature wallet is and why a recovery feature exists at all.

A multisignature — or "multisig" — wallet does not have a single private key. It has several, and a transaction needs a set number of them to be valid — for example, two out of three keys. The point is that no single person, and no single system, can move the funds alone. In an institutional setup, the keys are typically split between the exchange, the custodian and a backup holder. That split is what makes multisig attractive to exchanges: even if one key is stolen, the funds cannot move without the others.

But that same design creates a risk. If the custodian disappears — if it goes out of business, if its systems fail, or if the exchange loses access to the platform — the funds could be locked forever. So custodians build a recovery path: a way for the wallet holder to reach the funds without the custodian's platform, usually through a recovery key or a key-recovery service that the holder controls. BitGo's version of this is a recovery feature that lets a wallet holder access funds if BitGo becomes unavailable. It is a safety net for a real problem, and it is a standard part of institutional custody.

The problem is that a safety net is also an attack surface. A recovery path that can move funds without the custodian's platform is, by definition, a path that bypasses the custodian's controls — including a freeze. If an attacker obtains the recovery key, or the credentials needed to use the recovery service, they can sign transactions from outside the platform, and the freeze never sees them. That is what Unocoin suspects happened here: not a failure of the freeze, but a route around it.

This is not a flaw unique to BitGo or to Unocoin. Any custody arrangement that includes a recovery path has the same trade-off. The recovery feature exists because the alternative — funds permanently locked if the custodian fails — is worse. But it means the security of the funds depends on the security of the recovery path just as much as on the security of the platform itself. Whoever holds the recovery key holds a second way into the wallet, and that key needs the same protection as the keys it backs up.

## Why a Freeze Did Not Stop the Transfers

The confusion in this story comes from the word "frozen". In everyday language, frozen money cannot move. In crypto custody, it depends on what exactly was frozen.

When Unocoin asked BitGo to freeze its enterprise account, BitGo stopped its own systems from processing transactions for that account. That is a platform-level freeze: the custodian will not sign, will not broadcast, and will not cooperate with any transfer request that comes through its platform. Unocoin says that freeze worked as intended, and there is no evidence in the reporting that it did not.

But a cryptocurrency transfer does not need the custodian's platform. A transfer is a message signed with the right private keys and broadcast to the blockchain network. Anyone who holds the keys can create that message, sign it, and send it to the network directly — from their own computer, through any node, without touching the custodian at all. The blockchain does not check whether an account is frozen. It checks only whether the signature is valid.

That is the gap the recovery feature opens. If the recovery path gives the holder a key — or a way to obtain one — that can sign transactions independently, then the holder (or anyone who has taken that key) can move funds while the platform freeze is in place. The freeze stops the front door. The recovery feature is a second door, and it was designed to be usable without the custodian.

This is also why the distinction between "the freeze worked" and "money moved" is not a contradiction, and why Unocoin's statement is carefully worded. The exchange is saying two things at once: the custodian did its job, and the funds still moved — because the route used was outside the custodian's control. Whether that route was the recovery feature, and who used it, is exactly what the investigation has not yet established.

## How This Differs From the Breach Post

This site published a post on 12 November about the Unocoin security breach itself, and it is worth saying plainly why this post is not a repeat of it.

The 12 November post covered the incident: suspicious activity on 6 November, unauthorised server access on 9 November, all services suspended, infrastructure compromised, a server rebuild estimated at four to five working days, enterprise-account freezes confirmed with BitGo and Fireblocks, outgoing transactions from a BitGo-held ether wallet detected on 12 November, and no confirmed loss figure. It also noted that blockchain analysts at Arkham had flagged about 81,000 Unocoin-attributed addresses showing zero balances, with no independent link to the breach confirmed, and that the company says more than 90% of customer funds are in cold storage.

This post covers something different: the mechanism. The 12 November post reported that outgoing transactions had been detected from a BitGo-held wallet. This post explains, from Unocoin's own 13 November statement, how those transfers could have happened while the account was frozen — the suspected misuse of a multisignature wallet recovery feature, and the fact that the transfers were signed and broadcast outside BitGo's platform. The breach post is the what. This post is the how, and the how is a lesson about custody design that applies far beyond Unocoin.

It also adds the search evidence. The 12 November post was written before Indian users' reaction could be measured. On 13 November, Google Trends data for India shows "Unocoin" spiking to the maximum interest value of 100 at 13:22 IST, with "unocoin login" as the breakout rising query — the pattern of customers trying to reach an exchange they cannot log into. That spike is the reason this post exists: it is the question Indian users are actually asking, and the recovery-feature explanation is the answer Unocoin has given.

## What Unocoin Has and Has Not Confirmed

It is important to separate what is known from what is not, because the gaps in this story are where rumours grow.

**Confirmed, from Unocoin's own statement:** suspicious activity was detected on 6 November; BitGo froze the enterprise account on 6 November at Unocoin's request; the freeze worked as intended; further activity was detected and all services were suspended on Monday 9 November; the transfers under investigation were signed and broadcast outside BitGo's platform; deposits and withdrawals remain suspended with no resumption date announced.

**Suspected, not confirmed:** that a recovery feature in BitGo's multisignature wallets was misused. Unocoin says it suspects this, and that it has not established how the transfers occurred. BitGo has not publicly commented on the claim, and did not respond to a request for comment before Cointelegraph published its 13 November report.

**Not confirmed:** whether any digital assets were lost, and if so, how much. Unocoin has not given a loss figure. The company says more than 90% of customer funds are held in cold storage — wallets kept offline — but that is the company's own statement and has not been independently verified. The Arkham data showing about 81,000 Unocoin-attributed addresses at zero balances has not been independently linked to the breach.

**Also unconfirmed:** any connection to the warning issued by India's cybersecurity agency, CERT-In, on 5 November, which described an AI-assisted campaign targeting crypto exchanges and other financial firms. Cointelegraph's 13 November report notes the warning and states explicitly that no connection to Unocoin's incident has been established. The two events happened in the same week, but a shared week is not evidence of a shared cause.

## What This Means for Indian Users

The Unocoin incident is, first and foremost, an Indian story. Unocoin is one of India's oldest crypto exchanges, founded in 2013, and its users are Indian. The lessons of the recovery-feature question apply to anyone who keeps funds on an exchange, but they land hardest on the people who are currently unable to log in.

**If you hold funds on Unocoin, use only official channels.** Unocoin has not announced a resumption date, and its website was returning errors on 12 November. The only reliable source of information about your funds is Unocoin's own official announcements. Do not act on messages, emails or social-media posts claiming to offer early withdrawals, recovery of funds, or compensation — every major exchange incident produces a wave of secondary scams that target exactly the worried users searching "unocoin login", and those scams ask for the one thing you should never share: your seed phrase or your login details.

**Understand what "your funds are on an exchange" means.** When you keep crypto on an exchange, you do not hold the private keys — the exchange and its custodian do. That is the trade-off of convenience: the exchange handles the keys, and you trust its systems, its custodian and its recovery procedures. The Unocoin case shows that this trust extends to the recovery path as well. A freeze, a suspension and a cold-storage claim are all controls inside the exchange's world. The blockchain itself does not enforce them. The practical lesson is the one every crypto guide repeats because it keeps being proven: funds you keep on an exchange are exposed to the exchange's risks, and the only way to remove that exposure is to hold your own keys in self-custody — which carries its own risks, and is a decision to make carefully, not in a panic.

**Check the recovery path on any service you use.** If you use a custodial wallet or an exchange that advertises a recovery feature, ask how that feature is protected. Who holds the recovery key? How is it stored? Can it be used without the custodian's knowledge? These are fair questions to ask any custodian, and the answers matter as much as the headline security claims. A recovery feature is not a weakness in itself — it is a necessary safety net — but it is a second door into the wallet, and it deserves the same scrutiny as the first.

**The CERT-In warning is a separate reason to be careful.** On 5 November, India's Computer Emergency Response Team warned of an AI-assisted campaign targeting crypto exchanges and other financial firms. No connection to Unocoin has been established, but the warning is a reminder that the threat to Indian exchanges is active and current. The same habits apply: verify any message from an exchange through a second channel, never install software or run a command because a message told you to, and treat any urgent request for a seed phrase or a password as a scam by default.

**Indian rules and taxes are unchanged.** Crypto gains in India are taxed at a flat 30% plus a 4% cess, with 1% TDS on transfers, and none of that changed on 13 November. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. The Unocoin incident also has no connection to the Enforcement Directorate's searches at CoinDCX and Delta Exchange, which are a separate investigation into alleged offshore routing of customer funds — but the two stories share a theme Indian users should note: the safety of funds held on Indian exchanges is now a live question in both law enforcement and the market.

## What to Watch Next

Four things will show whether 13 November was the day the Unocoin story was explained, or the day it got more complicated — and none of them is a prediction.

- **Whether Unocoin confirms a loss figure.** The exchange has not said whether any digital assets were lost. A confirmed figure — or a confirmed zero — would settle the most important question for its users. Until then, every number circulating on social media is unverified.
- **Whether the recovery-feature explanation is confirmed.** Unocoin suspects the recovery feature was misused, but it has not established how the transfers happened. Confirmation would require evidence of how the recovery path was used, and by whom — and a statement from BitGo, which has not publicly commented.
- **When services resume.** Deposits and withdrawals have been suspended since 9 November, with no date announced. The earlier estimate of four to five working days to rebuild servers was given on 12 November. A resumption date, or a further delay, will be the first concrete sign of how far the recovery has got.
- **Whether other exchanges review their own recovery paths.** If the recovery-feature explanation is confirmed, the question will not stay with Unocoin. Every exchange and custodian that offers a recovery path will face the same question: how is that path protected, and who can use it without the platform's knowledge? Watch for statements from other Indian exchanges and custodians in the coming days.

None of these is a signal to act on by itself. They are the facts to watch while the investigation runs, and they are the facts that will determine whether 13 November is remembered as the day Unocoin explained how its frozen wallets moved, or as the day the explanation raised harder questions than the breach itself.

## The Bottom Line

On Friday 13 November 2026, Unocoin said BitGo froze its enterprise account on 6 November at Unocoin's request, that the freeze worked as intended — and that the suspicious transfers under investigation were signed and broadcast outside BitGo's platform, possibly through a wallet recovery feature in BitGo's multisignature wallets. The exchange has not confirmed how the transfers happened, has not confirmed whether any digital assets were lost, and has not announced a date for restoring deposits and withdrawals. Indian users are already searching for answers: "Unocoin" spiked to maximum interest on Google Trends India at 13:22 IST, with "unocoin login" as the breakout query. The lesson of the story is structural, not personal: a custodian freeze controls the platform, not the blockchain, and any recovery path that can move funds without the platform is a second door into the wallet — one that needs the same protection as the first. For Indian users, the practical points are to rely only on Unocoin's official channels, to treat every "recovery" offer as a scam, to understand that funds on an exchange carry the exchange's risks, and that the 30% tax and 1% TDS are unchanged. What happens next depends on the investigation, on whether BitGo responds, and on whether a loss figure is ever confirmed — none of which can be known in advance.

## Keep Learning

- [Unocoin Security Breach: Services Suspended in India](/blog/unocoin-security-breach-services-suspended-india-guide) — the incident itself: what happened on 6 and 9 November, the server rebuild, and what was known on 12 November.
- [South Korea Lets Exchanges Freeze Funds on Hack Fears](/blog/south-korea-fsc-freeze-withdrawals-suspicion-india-guide) — the other side of the freeze question: South Korea's decision to let exchanges block withdrawals on suspicion alone, and why India has no equivalent rule.
- [CERT-In: CRAFTY FALCON AI Attacks Target India Crypto](/blog/cert-in-crafty-falcon-ai-crypto-warning-india-guide) — India's cybersecurity agency warning about AI-assisted attacks on crypto exchanges, issued on 5 November.
