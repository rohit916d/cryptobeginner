---
title: "Gnosis Pay Breach: Crypto Card Data Exposed in India"
category: "Security"
excerpt: "Gnosis Pay disclosed a data breach on 6 November: hackers accessed card details, home addresses and linked wallet addresses. What Indian card users must know."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-08T04:25:00+00:00"
faqs:
  - question: "Was any money stolen in the Gnosis Pay breach?"
    answer: "No, according to Gnosis Pay. The company says customer funds were not affected and its separate enterprise platform, which powers white-label card programmes for other businesses, was untouched. What was exposed was personal and card information — not money. That distinction matters, but it does not make the breach harmless: the exposed data can be used for targeted phishing and identity fraud, which is why affected users still need to act."
  - question: "I used a Gnosis Pay card in India. What should I do now?"
    answer: "First, check your email for a message from Gnosis Pay — the company says it emailed every affected customer with details of exactly what was taken from their account. Do not click links in that email; instead, open the Gnosis Pay app or website yourself and follow the instructions there. Expect to replace the card, watch your statements for unfamiliar charges, and be extra suspicious of any message that mentions your crypto wallets by address. If you no longer use the card, remember the branded cards stop working on 20 December 2026 anyway."
  - question: "Are crypto debit cards safe to use in India?"
    answer: "A crypto debit card carries the same risks as any payment card, plus one extra risk: it links your real-world identity to your crypto wallet addresses. In India, crypto cards also sit under active regulatory scrutiny — the RBI and the Financial Intelligence Unit have been examining offshore prepaid crypto cards, and several users have had access blocked. If you use one, treat it like any card: use strong, unique passwords, turn on every verification step available, keep only small balances on it, and never share your seed phrase or wallet private keys with anyone."
---

Crypto card provider Gnosis Pay has disclosed a data breach that exposed customer card details, home addresses and linked cryptocurrency wallet addresses. The company says it detected unauthorised access on **3 November 2026** to the system behind its own branded cards, and disclosed the incident on **6 November**. Customer funds were not affected, according to the company — but the combination of data that was exposed is exactly the combination that makes targeted scams possible, and that is why this **Gnosis Pay breach** matters to Indian users even though the company is based in Europe.

This guide explains what happened, what data was exposed, why the leak of card details together with wallet addresses is more dangerous than either leak on its own, and what Indian crypto-card users should do now. Every figure is attributed to its source, and nothing here is a prediction or a recommendation about any coin, exchange or card.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported data breach; it does not recommend any card, exchange or trade.

## What Gnosis Pay Said Happened

Gnosis Pay's own account of the incident is short, and it leaves two important questions unanswered — how many customers were affected, and exactly what data was taken from each of them. Here is what the company has confirmed.

On 3 November 2026, Gnosis Pay's monitoring systems detected unauthorised access to the system that powers its branded consumer cards. The company says containment began within two hours of detection, that it replaced the compromised security credentials, and that it fixed the vulnerability that allowed the breach. The incident became public on 6 November, when Gnosis Pay published a blog post and a message on X from its @gnosispay account saying: "We had a data breach affecting the system powering Gnosis Pay-branded cards (our B2C business line) that resulted in the exposure of certain customer information."

The breach was limited to one part of the business. Gnosis Pay runs two card operations. The first is its consumer business — the Gnosis Pay-branded cards that individual customers use to spend stablecoins through Visa debit cards linked to their crypto wallets. The second is its enterprise platform, which powers white-label card programmes for fintech firms, wallets and neobanks. According to the company, only the consumer system was affected; the enterprise platform was not touched.

That distinction matters for a second reason: the consumer system was already scheduled to close. Gnosis Pay had announced in September 2026 that its branded consumer cards would stop working at 23:59 UTC on **20 December 2026**, so the company could focus on its partner programmes. The breach therefore hit a system that was already on its way out — but the data it held was live, and it is still usable by whoever took it.

| Date | What happened |
|---|---|
| 3 November 2026 | Gnosis Pay's monitoring detects unauthorised access to the consumer card system; containment begins within two hours |
| 6 November 2026 | Gnosis Pay discloses the breach publicly, emails affected customers, and notifies partners, the card issuer and data protection authorities |
| 7 November 2026 | CoinDesk and other outlets report the breach, with details from customer notifications |
| 20 December 2026 | Gnosis Pay-branded consumer cards are scheduled to stop working (previously announced in September) |

Gnosis Pay has not said how many customers were affected, and it has not published a list of the data types that were taken. Its public statement refers only to "certain customer information". The company says it emailed each affected customer with details of exactly what was taken from their account — so the full picture exists, but only in individual emails, not in a public disclosure.

## What Data Was Exposed

The gap between the company's vague public statement and the detail in the customer notifications is the most important part of this story, and it was filled in by reporting on 7 November.

Cointelegraph reported that it had reviewed notifications sent to affected customers, and that those notifications listed full payment card numbers, expiry dates and CVV codes, along with names, home addresses, linked wallet addresses, email addresses, phone numbers and nationalities. In some cases, IBAN and BIC bank details appeared as well. That is not a partial leak of a few fields. It is, for the customers affected, close to a complete identity file: the card, the address, the contact details and the crypto wallets, all in one place.

One affected customer made the point publicly. Lefteris Karapetsas, founder of the crypto portfolio tracker Rotki, shared the email he received from Gnosis Pay on X, saying the exposed data included his name, his full home address, his card number and every wallet address linked to his account. His case is useful because it shows the shape of the exposure in concrete terms: an attacker who has that file does not need to guess who the victim is, where they live, or which wallets belong to them. All of it is written down together.

It is worth being precise about what has and has not been confirmed. Gnosis Pay itself has not published the list of exposed fields, so the detailed list comes from reporting on the customer notifications, not from the company's public statement. The company has also not said whether the exposed data differs from one customer to another. What is confirmed by the company is that unauthorised access happened, that customer information was exposed, that funds were not affected, and that the enterprise platform was untouched.

The cards themselves were issued by Monavate Limited under a licence from Visa Europe. Gnosis Pay, which was unveiled in 2023, lets customers spend stablecoins through Visa debit cards linked to their crypto wallets — the card draws on the wallet, so the card and the wallet are two ends of the same account. That design is exactly what makes this breach different from an ordinary card-data leak.

## Why Card Data Plus Wallet Addresses Is a Dangerous Mix

An ordinary card-data breach is bad enough: a stolen card number, expiry date and CVV can be used for fraudulent online purchases until the card is cancelled. But a breach that ties a card to a home address and to a set of crypto wallet addresses creates risks that go further, and Indian users should understand all three of them.

**First, the doxxing risk.** A wallet address on its own is pseudonymous — it is a string of characters that does not, by itself, name its owner. That pseudonymity is one of the reasons many people are comfortable holding crypto. When a wallet address is leaked alongside a name and a home address, the pseudonymity is gone. Anyone holding the leaked file can look up the wallet on a public blockchain explorer and see its balance and its transaction history, and now they know exactly whose balance and history it is. For a person holding a meaningful amount of crypto, that is a physical-safety concern as well as a financial one.

**Second, the targeted phishing risk.** Most phishing messages are generic — a fake exchange email sent to thousands of people, hoping a few will click. A phisher holding this leaked file does not need to be generic. They can write to a named person, at their real email address, mention their real card number or their real wallet address, and claim to be Gnosis Pay, their bank, or a crypto exchange offering help with the breach. That message will look far more convincing than a generic scam, because it contains true personal details. The standard advice — never click links in emails about your money — matters more than usual when the attacker already knows your details.

**Third, the identity-fraud risk.** A name, home address, phone number, email address and nationality, combined with card and bank details, is most of what is needed to attempt identity fraud: opening accounts, passing verification checks, or social-engineering a support team at another service. The risk is not theoretical. It is the reason data-protection law treats this combination of fields as sensitive, and it is why Gnosis Pay says it notified the relevant data protection authorities.

None of this means money was stolen. Gnosis Pay is clear that funds were not affected, and there is no report of funds being taken in this incident. But a data breach is not measured only by what was stolen on the day. It is measured by what the stolen data allows an attacker to do in the weeks and months afterwards — and this file allows a lot.

## What Gnosis Pay Is Doing Now

Gnosis Pay's response has three parts, and each of them tells users something about how seriously the company takes the incident.

The first is the immediate technical response. The company says it replaced the compromised security credentials and fixed the vulnerability that allowed the breach, with containment beginning within two hours of detection. It has not published a technical explanation of how the attackers got in, or who is behind the attack, so the root cause is still unknown in public.

The second is monitoring and verification. Gnosis Pay says it has stepped up monitoring of card activity and wallets for fraud, and it has made 3D Secure — the extra verification step that asks for a password or a code before an online payment goes through — mandatory for all online card payments until the consumer platform is retired. That is a sensible precaution: if a stolen card number is tried online, the extra step blocks the payment unless the attacker also has the cardholder's phone or password.

The third is the shutdown timetable. The consumer platform was already scheduled for retirement on 20 December 2026, and Gnosis Pay says that plan has not changed. The branded cards will stop working at 23:59 UTC on that date. That gives affected users about six weeks from the disclosure to wind down their use of the card — but it also means the exposed card details remain a live risk until the cards are cancelled or expire, so users should not wait for the shutdown to act.

There is also a wider context that Indian readers should know. This is not Gnosis Pay's first security incident. In June 2026, attackers exploited a software vulnerability in the company's wallet system and drained about $1.5 million; that money was later reimbursed, according to reporting at the time. The November breach is different — data, not funds — but two incidents in five months is a pattern that users are entitled to weigh when they decide which services to trust. The company's card business has also been shrinking: its October card spending was about $6.1 million, down by nearly half from $12.05 million a year earlier.

## What It Means for Indian Users

Gnosis Pay is a European service, and most Indian crypto users have never held one of its cards. But the breach still matters in India for three reasons, and the first is the most direct: some Indians do use crypto cards, and this breach shows what can go wrong with them.

Crypto cards have been a live topic in India for months. On 2 November 2026, The Economic Times reported that the Reserve Bank of India and the Financial Intelligence Unit were examining offshore prepaid crypto cards, and that several users had already had their access blocked. The cards let users spend crypto through a Visa or Mastercard, usually by converting it to fiat at the point of sale — which is attractive in a country where crypto cannot be spent directly in shops. But they sit in a regulatory grey area: India has no licensing regime for crypto cards, and the RBI and FIU scrutiny reported in November suggests the authorities are not comfortable with how some of them operate.

The Gnosis Pay breach adds a security angle to that regulatory one. A crypto card is not just a payment card. It is a bridge between your bank-style identity — name, address, phone number — and your crypto wallets. When that bridge leaks, the two sides of your financial life are joined in a single file. Indian users of any crypto card, not just Gnosis Pay, should treat this breach as a prompt to check what their own card provider holds about them, and what would happen if that data leaked.

The second reason is the phishing wave that usually follows a breach like this. The CERT-In advisory of 4 November 2026, about the AI-assisted actor it calls CRAFTY FALCON, warned that Indian crypto exchanges were being targeted and that wallet keys were being stolen and funds siphoned. That warning was about a different threat, but the defence is the same: attackers in this market are organised, they use personal data to make their messages convincing, and the most effective protection is to slow down, verify through official channels, and never share a seed phrase or a private key with anyone — no genuine support team will ever ask for one.

The third reason is tax and record-keeping. If you used a crypto card and you are an Indian resident, your tax obligations do not depend on which card or platform you used. Gains on crypto are taxed at a flat 30% with 1% TDS on sales, and you still need to report the income when you file your return — including any crypto you spent through a card, which counts as a disposal for tax purposes.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## A Checklist If You Used Gnosis Pay — or Any Crypto Card

If you held a Gnosis Pay-branded card, work through these steps in order. Most of them apply to any crypto card, so they are worth doing even if you never used Gnosis Pay.

**1. Find the email Gnosis Pay sent you.** The company says it emailed every affected customer with details of exactly what was taken from their account. Search your inbox for Gnosis Pay, and read that email — but do not click any link inside it. Open the Gnosis Pay app or type the website address yourself, and follow the instructions there. Phishing emails about this breach are already a realistic possibility, and the genuine email is the one you verify by going to the source yourself.

**2. Replace the card and watch your statements.** If your card number, expiry date and CVV were exposed, the card should be treated as compromised even though no money was taken. Ask for a replacement, and check your statements for unfamiliar charges over the next few weeks. If you see a charge you do not recognise, report it to the card issuer — Monavate, in Gnosis Pay's case — immediately.

**3. Expect targeted phishing, and plan for it.** Assume that someone now has your name, address, email, phone number and wallet addresses. That means a message that mentions your wallet address by its first and last characters is not proof that the sender is genuine — it is proof that the sender has the leaked file. Be suspicious of any message about your crypto that arrives by email, SMS or a messaging app, and verify it through the official app or website before acting on it.

**4. Do not move funds in a panic.** Gnosis Pay says funds were not affected, and there is no reason to rush crypto out of a wallet because its address was exposed. An address being known is not the same as an address being compromised — your funds are protected by your private keys and seed phrase, not by the secrecy of the address. Moving funds hastily, especially to an unfamiliar service, can create more risk than it removes. If you do decide to move funds, use a wallet and an address you control, double-check the destination, and keep records for tax purposes.

**5. Tighten the accounts the leaked data could unlock.** Change the password on your Gnosis Pay account, and on any other account that shares the same password or the same email address. Turn on two-factor authentication everywhere it is offered. If any service lets you set up a verbal password or a note on your account, add one — it makes social-engineering attacks harder.

**6. Remember the 20 December deadline.** The Gnosis Pay-branded cards stop working on 20 December 2026. If you still hold one, plan to stop using it before then and move any remaining balance out in good time. Do not leave it to the last day, when support queues and withdrawal processing may be slow.

## The Wider Pattern: A Bad Month for Crypto Security

The Gnosis Pay breach is the latest in a run of security stories that has dominated crypto news for over a week, and the pattern is worth naming because it shows how many different kinds of risk Indian users are facing at once.

On 30 October 2026, Binance disclosed a security incident in which attackers made unauthorised withdrawals worth billions of dollars; the exchange has since frozen or recovered much of the money, but the incident is still being unwound through withdrawal reopenings and proof-of-reserves updates. In the same week, India's Enforcement Directorate searched premises linked to CoinDCX and Delta Exchange over alleged offshore routing of Indian users' trades, and the US Treasury moved to cut MEXC off from the American financial system. CERT-In warned that an AI-assisted actor was targeting Indian crypto exchanges. And on 6 November, the same day Gnosis Pay disclosed its breach, the FBI formally attributed the Binance incident to North Korea's TraderTraitor group.

These stories are different in kind — a hack, a data breach, a regulatory investigation, a sanctions action, a warning. What they share is the consequence for ordinary users: the platforms and services you rely on can change suddenly, and the information you gave them when you signed up can end up in someone else's hands. No single precaution covers all of it, which is why the boring basics matter more than ever: strong, unique passwords; two-factor authentication; a hardware wallet or a well-guarded seed phrase for holdings you do not need to spend; and a habit of verifying every message about your money through the official channel, not through a link someone sent you.

## What to Watch Next

Four things matter from here. **Whether Gnosis Pay names the number of affected customers** is the first: the company has said it emailed each affected customer individually, but a public count would show the scale of the breach, and regulators in Europe will expect one. **Whether the exposed data is used in phishing campaigns** is the second: the real damage from a breach like this shows up in the weeks afterwards, in the inboxes of the people whose data was taken. **What happens to the consumer cards on 20 December** is the third: the shutdown is already scheduled, but affected users need a clean wind-down, not a last-minute scramble. **Whether other card providers disclose similar incidents** is the fourth: Gnosis Pay is not the only company running crypto cards on a legacy system, and the question now is whether its breach was an isolated failure or a sign of a wider weakness in how card providers handle the link between identity and wallets.

## The Bottom Line

On 3 November 2026, attackers gained unauthorised access to the system behind Gnosis Pay's branded consumer cards, exposing customer information that, according to reporting on the customer notifications, included full card numbers, expiry dates and CVV codes, names, home addresses, email addresses, phone numbers and linked cryptocurrency wallet addresses. Gnosis Pay disclosed the breach on 6 November, said customer funds were not affected and its enterprise platform was untouched, and made 3D Secure mandatory for online payments until the consumer cards are retired on 20 December 2026. The company has not said how many customers were affected.

For Indian users, the breach is a reminder that a crypto card links your real-world identity to your crypto wallets, and that when that link leaks, the danger is not a stolen card number on its own — it is a complete file that lets an attacker find your wallets, know where you live, and write a phishing message that sounds like it comes from someone who knows you. Check the email Gnosis Pay sent you, replace the card, watch your statements, and treat every message about your crypto with suspicion until you have verified it through the official channel.

## Keep Learning

- [Crypto Cards in India: RBI Scrutiny Explained for Beginners](/blog/crypto-cards-india-rbi-scrutiny-guide)
- [iPhone Crypto Theft: ₹38 Crore Stolen in One Month](/blog/iphone-crypto-theft-darksword-india-guide)
- [CERT-In: CRAFTY FALCON AI Attacks Target India Crypto](/blog/cert-in-crafty-falcon-ai-crypto-warning-india-guide)
