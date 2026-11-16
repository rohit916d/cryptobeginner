---
title: "Coinone Data Breach: Passwords, IDs Exposed in Vendor Hack"
category: "Security"
excerpt: "Coinone says an attacker broke into its outsourced support provider, exposing customer passwords and ID numbers. What leaked, and what Indian users should do."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-16T03:50:00+00:00"
faqs:
  - question: "What happened in the Coinone data breach?"
    answer: "On 15 November 2026, South Korean exchange Coinone said an attacker had broken into the servers of MetaM, the outside company that runs its customer support. The intrusion happened around 4 a.m. Korean time on 12 November. The attacker viewed or copied customer support records — chat transcripts and notes from phone calls — which can include names, phone numbers, email addresses, dates of birth, bank account numbers, passwords, national ID numbers, home addresses, wallet addresses and transaction IDs. Only customers who had contacted support are affected, and Coinone has not said how many people that is."
  - question: "Was any crypto stolen from Coinone?"
    answer: "No loss of crypto has been reported. Coinone says its account, trading and wallet systems run on infrastructure separate from MetaM's servers, and it has found no sign that those systems were touched. The breach is a data exposure, not a theft of funds — but the exposed details can be used for phishing and identity theft, which is why Coinone warned customers directly. Anyone who shared a password with support should change it, including on any other site where the same password is used."
  - question: "I use an Indian crypto exchange. What should I do after the Coinone breach?"
    answer: "The lesson is about support desks, not about one exchange. Never share a password, seed phrase, OTP or 2FA code with any support agent — no legitimate support team needs them. If you ever typed a password into a support chat, change it now and change it everywhere you reused it. Treat any message claiming to be from an exchange — especially one that quotes details from an old support conversation — as suspicious until you verify it through the exchange's official app or website. Turn on 2FA, use a unique password for each exchange, and keep your seed phrase offline."
---

On 15 November 2026, South Korean crypto exchange Coinone told its customers something no exchange wants to say: an attacker had broken into the servers of the company that answers its support calls, and the records from those conversations — including passwords and national ID numbers — may now be in the attacker's hands. No crypto was reported stolen. The exchange's trading and wallet systems were, by its own account, never touched. But the breach matters anyway, because the data that leaked is exactly the data a scammer needs to impersonate the exchange itself.

> **Educational content only.** This is not financial advice. This guide explains a data breach and the safety steps users can take; it does not recommend any exchange, token or action.

## What Happened: The Facts at a Glance

Coinone published its notice at 08:00 Korean time on Sunday, 15 November 2026. The story was reported the same day by Cointelegraph, crypto.news, Bitcoin.com News, CoinStats, Coindaro, PlainBTC, BasisDesk and CoinLab, with Korean outlets Hankook Ilbo and Financial News carrying the details of the notice. The facts, as reported across those sources, are:

- **The target was not Coinone itself, but its support vendor.** The attacker accessed servers run by MetaM Co., Ltd., the outside company that handles Coinone's customer consultations — chat and phone support.
- **The intrusion happened on Thursday, 12 November, at about 04:00 Korean time** (19:00 UTC on 11 November). MetaM told Coinone at about 09:20 the same morning.
- **The public notice came three days later**, on 15 November — roughly 76 hours after the intrusion began, and about 70 hours after Coinone says it learned of it.
- **The attacker viewed or copied customer support records.** The server held what customers typed or said during support sessions: chat transcripts and notes on phone calls.
- **Coinone has not said how many customers are affected.** It says it will notify affected customers separately and set up a lookup through which customers can check whether their data were affected.
- **The exchange reported the incident to three South Korean authorities**: the Korea Internet and Security Agency (KISA), the Personal Information Protection Commission (PIPC) and the Financial Supervisory Service (FSS).
- **Support has moved to email only for now**, the attacker's IP addresses and access routes have been blocked, and monitoring has been stepped up.

Coinone is South Korea's third-largest crypto exchange by trading volume, behind the two market leaders. At the time of the reporting, its 24-hour trading volume was about 4,540 bitcoin — roughly $298 million at a bitcoin price near $65,700 — according to a CoinGecko profile cited in the coverage.

## What Was Exposed — and What Was Not

Coinone's notice lists eleven types of information that may have been in the support records. Which fields were exposed for any given person depends on what that person told support during their own conversation. The list, as reported by Cointelegraph and the Korean press, is:

| Data type | Why it matters |
|---|---|
| Name | Identifies the victim for targeted phishing |
| Phone number | Used for smishing and fake support calls |
| Email address | The channel for most phishing messages |
| Date of birth | An identity anchor, hard to change |
| Bank account number | Enables payment fraud and social engineering |
| Password | Direct account access if reused elsewhere |
| National resident registration number | Korea's core identity number — cannot be reissued at will |
| ID card issue date | Another identity anchor used in verification |
| Home address | Enables physical and postal fraud |
| Crypto wallet address | Lets scammers track holdings and craft fake transfer warnings |
| Transaction IDs (TXIDs) | Lets scammers quote real past transactions to sound legitimate |

The passwords are the most sensitive item on the list — and the most revealing. Customers mention passwords in support chats far more often than they should: when they cannot log in, many send their password along with the problem, even though no reputable provider ever asks for it. Coinone therefore advised anyone who had ever shared a password in a support conversation to change it, including on any other service where the same password is used.

Equally important is what Coinone says was **not** touched. The exchange states that its member accounts, trading systems and crypto wallets run on infrastructure separate from MetaM's servers, and that it has found no sign of a direct intrusion into them. No loss of customer funds has been reported. The scope and exact sequence of the attack are still being investigated with the vendor and outside specialists, and Coinone says it will publish new findings promptly.

## The Warning That Matters Most: Impersonation

Coinone's warning to customers was unusually specific. It said fraudsters could impersonate the exchange using details from earlier support conversations. That is the real risk here, and it is worth understanding clearly.

A phishing message is easy to ignore when it is generic. It is much harder to ignore when the sender already knows your name, your phone number, the date you last contacted support, the wallet address you asked about, and the transaction ID from a transfer that went wrong. With those details, a scammer can write a message that reads like a genuine follow-up to a conversation you actually had — and then ask you to "verify" your account, click a link, or share a code.

This is why the breach is a security story even though no crypto was stolen. The stolen records are raw material for the next attack, aimed at the same customers, and the attack will arrive wearing the exchange's own voice.

## The Third Korean Exchange Incident in Three Weeks

The Coinone breach does not stand alone. It is the third data or security scare at a South Korean exchange in less than three weeks:

- **27 October:** Bithumb detected unauthorised access to its groupware and confirmed the breach a day later, with employee data involved.
- **6 November:** Gopax suspended deposits, withdrawals and trading after a hack-threat email, and moved its holdings to cold wallets while it investigated.
- **12 November:** the Coinone/MetaM support-vendor breach — the subject of this guide.

The pattern has not gone unnoticed in Seoul. South Korea's Financial Services Commission had already found security deficiencies at 130 of 555 financial firms it inspected, and on 12 November it decided to issue a no-action letter letting exchanges block deposits and withdrawals on mere suspicion of a hack, rather than only after a breach is clearly established. That decision, which we covered in a separate guide, cited the $6.3 billion Binance hack as proof that fast blocking is decisive.

The three incidents are different in kind — a groupware breach, a hack-threat halt, and a vendor data leak — but they share a shape: the weak point was not the trading engine. It was the systems around it.

## Why Support Desks Are the Weak Link

Exchanges spend heavily on securing their trading engines and wallets. Cold storage, multi-signature wallets, withdrawal allowlists and transaction monitoring are now standard. But customer support sits outside that fortress, and it has to: support agents need to see enough about a customer to help them, which means support systems hold real personal data, and they are often run by outside vendors with their own security standards.

The Coinone case shows the shape of the risk. The exchange's own systems were not breached. The breach happened at a contractor, in a system whose job was to store conversations. And the data in those conversations was richer than any database the exchange itself would hold, because customers volunteer details in a chat that they would never put on a form — including, in some cases, their passwords.

The same pattern has appeared elsewhere this year. The Binance hack in late October began with a compromised laptop and a fake job interview, not with a direct attack on the exchange's wallets. The lesson is consistent: attackers go where the defences are thinnest, and support desks — with their chat logs, their outside vendors and their human agents — are often the thinnest point.

## What Indian Users Should Do

Coinone is a Korean exchange, and most Indian readers will never have held an account there. The breach still matters in India for two reasons. First, Indian exchanges also outsource parts of their support, and the same vendor risk applies. Second, the phishing that follows a breach like this is not limited by geography: the techniques — impersonating support, quoting real transaction details, asking for a password or a code — are the same ones Indian users already face every day.

Here is the checklist, drawn from Coinone's own advice and standard security practice:

1. **Never share a password, seed phrase, OTP or 2FA code with support.** No legitimate support agent needs any of them. If someone claiming to be support asks, stop the conversation.
2. **If you ever typed a password into a support chat, change it now.** Change it on that exchange and everywhere else you reused it. Password reuse is what turns a support-chat leak into an account takeover.
3. **Treat "follow-up" messages with suspicion.** If a message quotes details from an old support conversation — your wallet address, a transaction ID, the date you last wrote in — verify it through the exchange's official app or website, never through a link in the message.
4. **Use a unique password for every exchange, and turn on 2FA.** A password manager makes this practical. SMS-based 2FA is better than nothing; app-based 2FA is better still.
5. **Keep your seed phrase offline, on paper, in a safe place.** Never type it into a chat, a form, a website or a photo. Support will never ask for it, and anyone who does is a scammer.
6. **Check the sender, not just the message.** Scammers now copy exchange logos, email layouts and support scripts. Verify the domain, the handle and the channel — and when in doubt, open the app yourself and ask.
7. **Watch for the delayed attack.** Breach data is often used weeks or months later, after the headlines fade. A convincing "Coinone support" message arriving in December is still this breach.

India has no equivalent of South Korea's new no-action letter rule, and FIU-IND registration — which Indian exchanges must hold — is an anti-money-laundering requirement, not a security guarantee. That means the practical protection for an Indian user is the same as it is everywhere: assume support data can leak, and behave as if it already has.

## How This Differs From Our Other Korea Coverage

We have covered South Korea's exchange-security crackdown in two earlier guides: the Gopax halt and the wider FSC inspection findings, and the FSC's no-action letter decision that lets exchanges freeze withdrawals on suspicion of a hack. This guide covers a different event — a confirmed data breach at a third exchange, through an outsourced support vendor — with a different lesson. The earlier guides were about exchanges protecting funds; this one is about a support vendor exposing the personal data that scammers use to target customers after the fact. The facts, the timeline and the checklist here are specific to Coinone and MetaM.

## Keep Learning

- [Gopax Halt: South Korea's Exchange-Security Crackdown Explained](/blog/gopax-hack-threat-halt-korea-exchange-crackdown-india-guide) — the 6 November halt that started this wave, and the FSC's findings across 130 firms.
- [South Korea Lets Exchanges Freeze Withdrawals on Hack Suspicion](/blog/south-korea-fsc-freeze-withdrawals-suspicion-india-guide) — the FSC no-action letter decision of 12 November, and how it compares with India's rules.
- [What Is a Crypto Seed Phrase? Backup and Recovery Explained](/blog/what-is-a-crypto-seed-phrase-backup-recovery-explained) — how to store the one secret that must never reach a support chat.

## Frequently Asked Questions

### What happened in the Coinone data breach?

On 15 November 2026, South Korean exchange Coinone said an attacker had broken into the servers of MetaM, the outside company that runs its customer support. The intrusion happened around 4 a.m. Korean time on 12 November. The attacker viewed or copied customer support records — chat transcripts and notes from phone calls — which can include names, phone numbers, email addresses, dates of birth, bank account numbers, passwords, national ID numbers, home addresses, wallet addresses and transaction IDs. Only customers who had contacted support are affected, and Coinone has not said how many people that is.

### Was any crypto stolen from Coinone?

No loss of crypto has been reported. Coinone says its account, trading and wallet systems run on infrastructure separate from MetaM's servers, and it has found no sign that those systems were touched. The breach is a data exposure, not a theft of funds — but the exposed details can be used for phishing and identity theft, which is why Coinone warned customers directly. Anyone who shared a password with support should change it, including on any other site where the same password is used.

### I use an Indian crypto exchange. What should I do after the Coinone breach?

The lesson is about support desks, not about one exchange. Never share a password, seed phrase, OTP or 2FA code with any support agent — no legitimate support team needs them. If you ever typed a password into a support chat, change it now and change it everywhere you reused it. Treat any message claiming to be from an exchange — especially one that quotes details from an old support conversation — as suspicious until you verify it through the exchange's official app or website. Turn on 2FA, use a unique password for each exchange, and keep your seed phrase offline.

## The Bottom Line

The Coinone breach is a reminder that the most dangerous leak is not always the one that steals money. An attacker who takes support records does not need to break into a wallet: the names, phone numbers, passwords and transaction IDs in those records are enough to build a convincing impersonation, and impersonation is how most crypto theft actually happens. Coinone's systems held. Its vendor's did not. For users — in Korea, in India, anywhere — the defence is the same: never give support your password, never reuse one, and never trust a message just because it knows something about you.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.
