---
title: "Zodia Custody Breach: What Indian Crypto Users Must Know"
category: "Security"
excerpt: "Zodia Custody said an intruder accessed limited client data on 24 November. What was exposed, what was not, and what Indian users should do now."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-27T21:50:00+00:00"
faqs:
  - question: "What is Zodia Custody?"
    answer: "Zodia Custody is a cryptocurrency custodian owned by Standard Chartered, the British bank. A custodian holds crypto assets safely on behalf of institutional clients such as funds, exchanges and companies, using offline storage and strict controls. Standard Chartered signed definitive agreements on 21 October 2026 to acquire 100% of Zodia Custody. Its regulated units operate in Singapore, Hong Kong, Australia, the United Arab Emirates and Luxembourg. It is an institutional service, not a retail exchange app."
  - question: "Were any crypto funds stolen in the Zodia Custody breach?"
    answer: "No, according to Zodia Custody itself. The company said an unauthorised party accessed limited client information — publicly available organisation details and, for a small number of clients and employees, a business contact name and an email address. Its investigation had found no unauthorised transactions as of its 26 November statement. No private keys were reported as exposed, which is the important line: without private keys, an attacker cannot move crypto out of custody. The statement is careful, though — it says 'based on our investigation to date', so the finding covers what has been checked so far."
  - question: "I use a crypto exchange in India. What should I do after the Zodia Custody breach?"
    answer: "First, do not panic and do not click any link in an unexpected email or message claiming to be from an exchange or custodian. Leaked names and email addresses are most often used for phishing — fake messages designed to trick you into sharing a password, a one-time code or a seed phrase. Second, check any message by opening the exchange's official app or typing its real web address yourself, never through a link in the message. Third, turn on two-factor authentication, use a unique password, and consider moving long-term holdings to a wallet you control. Indian tax rules do not change because of this incident: gains on crypto are still taxed at a flat 30% with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

## Zodia Custody Breach: What Indian Crypto Users Must Know

Standard Chartered's crypto custodian, Zodia Custody, said on 26 November 2026 that an intruder had accessed limited information about some of its clients and employees. No crypto was reported stolen and no private keys were reported exposed — but the incident still matters for Indian crypto users, because the information that was taken is exactly the kind used to run convincing phishing scams. This guide explains what Zodia Custody is, what happened on 23 and 24 November, what was and was not exposed, and what you should do if you use a crypto exchange or custodian.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security incident; it does not recommend buying, selling or holding any asset, and it is not legal advice.

## What Happened at Zodia Custody

The facts, as reported on 26 November 2026 by Reuters, CoinDesk, Unchained, Decrypt, Cointelegraph, The Straits Times and Channel News Asia, all working from a statement by Zodia Custody chief executive Richard Clark, are:

- **On Monday 23 November, Zodia detected attempts to probe its platform.** As a precaution, it temporarily took its business-to-business (B2B) application programming interface offline — the software link that lets institutional clients' systems connect directly to the platform — and put additional security measures in place before restoring the service.
- **On Tuesday 24 November, monitoring found that an unauthorised party had accessed limited client information.** The data consisted of publicly available details about client organisations and, for a small number of clients and employees, a business contact name and an email address.
- **No unauthorised transactions had been found.** Clark's statement said: "Based on our investigation to date, there have been no unauthorised transactions." That wording matters — it covers the investigation so far, not a final all-clear.
- **Affected clients and regulators were notified.** Zodia said it contacted the clients concerned and informed the relevant regulators. It did not say how many clients were affected, which regulators were told, how the intruder gained access, or who was behind it.
- **No private keys were reported exposed.** The disclosed information did not include the private keys used to authorise crypto transfers, according to reporting on the incident. That is the single most important technical fact in the story: contact details can be misused for scams, but they cannot by themselves move crypto out of custody.

The disclosure came just weeks after Standard Chartered signed definitive agreements on 21 October 2026 to buy all of Zodia Custody. The bank had already been a major shareholder; the deal made the custodian a fully owned part of the bank. Neither Zodia's statement nor the Reuters report linked the intrusion to the acquisition.

## What Is a Custodian, and Why Does This Breach Matter?

A crypto custodian is a company that stores digital assets safely for other people — usually institutions such as investment funds, exchanges and large companies. Instead of each client managing its own private keys, the custodian holds them in protected systems, often in cold storage (offline wallets), with layers of approval before anything can move. The whole point of a custodian is trust: clients hand over the keys to their money because the custodian is supposed to be harder to break into than they are.

That is why a breach at a custodian draws attention even when no money moves. If the safest vault in the building can be probed, every customer starts asking questions — and so do regulators. In Zodia's case, the vault itself was not emptied. What was taken was the address book: names and email addresses. That sounds minor next to a theft of millions, but in crypto security it is a well-known second act. Stolen contact details are the raw material for phishing and impersonation — fake emails, fake support messages and fake websites that look real because they already know your name, your company and which service you use.

CoinDesk made exactly that point in its coverage: the breach highlights phishing and impersonation risks, even though Zodia reported no evidence that the exposed information had been used in such attacks yet. The danger is not what was taken. It is what the taker can do with it next.

## The Same Week: Bithumb's Breach Got Bigger

Zodia was not the only data-theft disclosure of the week, and the parallel is what turns one incident into a pattern worth understanding.

On 25 November, South Korean exchange Bithumb said a follow-up review of its October breach had found far more than it first disclosed. The intrusion into its internal Daou Office groupware system ran from 12 October to 27 October — about 15 days, not the roughly one hour it first reported — and the exposed data now runs to 19 categories, including passport numbers, bank account numbers, copies of identity documents, transaction histories and crypto wallet addresses. More people were affected than the 7,159 first reported, including employees of partner companies, and Bithumb warned customers about fake websites, emails and text messages impersonating the exchange. We covered that expanded disclosure in detail in our Bithumb post.

Two other recent incidents complete the picture. On 6 November, Gnosis Pay disclosed that an unauthorised party had accessed its legacy consumer-card system, exposing full card numbers, expiry dates, CVVs, names, home addresses, linked wallet addresses and more — again with no funds reported lost. And in early November, the SignalPlus incident saw Binance and Deribit revoke all API keys linked to the trading platform after a security issue. The pattern across all four is consistent: attackers are increasingly going after the data around the money — contact details, identity documents, card numbers — rather than the money itself, because that data unlocks the phishing and impersonation scams that do the real damage.

| Incident | Disclosed | What was exposed | Funds stolen? |
|---|---|---|---|
| Zodia Custody | 26 Nov 2026 | Organisation details; names + emails of a small number of clients and staff | None reported |
| Bithumb (updated) | 25 Nov 2026 | 19 categories incl. passports, bank accounts, ID copies, wallet addresses | None confirmed |
| Gnosis Pay | 6 Nov 2026 | Card numbers, CVVs, home addresses, linked wallet addresses | None reported |
| SignalPlus | 5 Nov 2026 | Internal network access; API keys revoked as precaution | Under $82,000 reported |

## What Zodia Custody Is — and Is Not

For a beginner, the name can be confusing, so it is worth being precise about what Zodia Custody does and who it serves.

Zodia Custody is an institutional custodian: it stores crypto for funds, companies and other financial firms. It does not run a retail exchange app, and ordinary Indian investors do not hold accounts with it directly. Its regulated units operate in Singapore, Hong Kong, Australia, the United Arab Emirates and Luxembourg. Standard Chartered agreed in October 2026 to take full ownership of the firm, about five weeks before the breach was disclosed.

That distance from Indian retail is good news and bad news at the same time. The good news is that no Indian retail user's funds were in Zodia's custody, and nothing in the disclosure suggests Indian users were affected. The bad news is that the lesson still applies to every Indian user of any exchange or wallet: the data that gets stolen in these incidents — names, emails, phone numbers — is the same data Indian exchanges hold about you, and it is used the same way everywhere. The FIU-IND registration regime requires Indian exchanges to follow anti-money-laundering and data rules, but no rule can stop a leaked email address from being used to send you a convincing fake message.

## What Indian Users Should Do Now

You do not need to do anything drastic. You do need to do a few simple things, and to keep doing them after this news cycle passes.

**Treat unexpected messages as guilty until proven innocent.** If you receive an email, text or WhatsApp message claiming to be from an exchange, a custodian or a wallet provider — especially one warning of a security problem, a frozen account or a required verification — do not click its links or download its attachments. Open the exchange's official app yourself, or type its real web address into your browser, and check there. Real security teams will not ask you to act through a link in a message.

**Never share a seed phrase or a one-time code.** No legitimate exchange, custodian or support agent will ever ask for your seed phrase (the 12 or 24 words that control a wallet) or for a one-time password sent to your phone. Anyone asking for either is running a scam, however official they sound. This is the single most important rule in crypto security, and it is the rule that leaked contact data is designed to help scammers break — because a message that already knows your name and your exchange feels trustworthy.

**Turn on two-factor authentication and use a unique password.** If your exchange account does not have two-factor authentication switched on, switch it on now, preferably with an authenticator app rather than SMS. Use a password you do not use anywhere else, and consider a password manager. If you reuse one password across many sites, a single data leak can open all of them.

**Check what data your exchange holds about you.** Most Indian exchanges let you see your profile, your registered email and phone number, and your login history. If you see a login or a device you do not recognise, change your password and contact support through the official app. Keep your KYC documents — PAN, Aadhaar, passport — in mind too: if an exchange ever discloses that identity documents were exposed, treat it seriously and watch for identity-theft attempts, not just crypto scams.

**Consider where long-term holdings sit.** Money you trade often can stay on an exchange; money you plan to hold for months or years is safer in a wallet you control, ideally a hardware wallet, with the seed phrase written on paper and stored offline. Self-custody has its own risks — lose the seed phrase and the funds are gone — so it is a choice to research, not a reflex. What matters is that the choice is yours and deliberate, not something you drift into after a breach.

**Remember the tax rules do not change.** A security incident at a foreign custodian does not change Indian crypto tax. Gains on crypto in India are still taxed at a flat 30% (plus applicable surcharge and 4% cess) under Section 115BBH, with 1% TDS under Section 194S on transfers above the specified thresholds, and losses cannot be set off against other income. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. And be careful of anyone who uses this news to sell you a "safe" new token, wallet or recovery service — urgency plus a famous name is the classic shape of a scam.

## What to Watch Next

Three things will tell us whether the Zodia incident stays a footnote or becomes something bigger:

- **The investigation's next update.** Zodia has not said how the intruder got in or who was behind it. Any future statement that names an entry point — a vendor, a phishing email, a software flaw — will matter, because it will tell other custodians what to fix.
- **Whether the exposed data gets used.** The real test is whether phishing campaigns impersonating Zodia, its clients or other custodians appear in the coming weeks. Security researchers and exchanges usually spot these quickly, and Indian users should treat any "Zodia" or custodian-themed message with extra suspicion until the picture is clear.
- **Regulatory follow-up.** Zodia said it informed the relevant regulators. Custodians in Singapore, Hong Kong, Australia, the UAE and Luxembourg answer to different authorities, and any of them could ask for changes to how client data is stored or how incidents are reported. India is watching the same questions through its own lens: the BWA self-regulatory body, FIU-IND registration and the 30% tax framework are all parts of India's cautious approach to crypto, and each new breach abroad is another argument in that debate.

None of those is a prediction. They are the things to check before drawing conclusions about an incident whose most important fact so far is a negative one: no money moved.

## Keep Learning

- [What Is a Crypto Custodian? Explained for Beginners](/blog/what-is-a-crypto-custodian-india-guide)
- [Bithumb Data Breach Widened: 15 Days, Passports Exposed](/blog/bithumb-data-breach-widens-15-days-passports-india-guide)
- [Gnosis Pay Breach: Card Data and Wallet Addresses Exposed](/blog/gnosis-pay-breach-crypto-card-data-india-guide)

## Conclusion

The Zodia Custody breach, disclosed on 26 November 2026, is a small incident with a large lesson. An intruder probed the platform on 23 November and reached limited client information on 24 November — organisation details and, for a small number of clients and employees, a business contact name and an email address. No unauthorised transactions were found, no private keys were reported exposed, and the B2B API was restored after precautionary security measures. For Indian users, the direct impact is nil: Zodia is an institutional custodian with no Indian retail accounts. But the indirect lesson is the one that matters, and it is the same lesson as the Bithumb, Gnosis Pay and SignalPlus incidents of the same month: attackers are stealing the data around the money — names, emails, passports, card numbers — because that data powers the phishing and impersonation scams that actually empty accounts. Check messages through official apps, never share a seed phrase or a one-time code, switch on two-factor authentication, and keep long-term holdings where you control the keys. The vault held this time. The address book did not — and the address book is what the scammers wanted.
