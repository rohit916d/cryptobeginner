---
title: "Trezor Skladon Breach: 27,000 Orders Exposed, India Guide"
category: "Security"
excerpt: "Trezor says shipping partner Skladon was breached, exposing names, phones and home addresses for about 27,000 hardware wallet orders. What Indian buyers must know."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-17T12:52:00+00:00"
faqs:
  - question: "I bought a Trezor between August and November 2026. Was my order affected?"
    answer: "It may have been, if your order was shipped by Skladon. Trezor says the exposed records cover about 27,000 orders placed between 9 August and 7 November 2026, and that it emailed every affected customer it could still reach. Skladon does not ship to the United States, so American buyers were not affected — but orders shipped to India and other countries outside the US were in scope. If you ordered in that window and received no email from Trezor, check your spam folder first, then treat your name, phone number, email and delivery address as exposed as a precaution. The device itself and your recovery phrase were not part of the breach."
  - question: "Can the attackers steal my crypto with my name, address and phone number?"
    answer: "Not directly. The exposed records did not include wallet backups, PINs or passphrases, because neither Trezor nor Skladon holds that information — your recovery phrase lives only on paper or metal in your own possession. The real danger is impersonation: with your name, phone number, delivery address and the exact product you bought, a scammer can call, text or email sounding like genuine Trezor support and pressure you into revealing your recovery phrase or installing fake software. Trezor says some affected customers have already reported scam calls. Trezor will never call you or ask for your wallet backup, so any call that does is a scam."
  - question: "Should I stop using my Trezor hardware wallet?"
    answer: "No. Trezor says its own systems were not compromised and your device is secure — this breach hit a shipping partner's customer records, not the devices, the firmware or the secure chip inside them. Keep using the wallet as normal, but treat any unexpected call, text or email about your order as suspicious, never share your recovery phrase with anyone, and verify any Trezor communication through the company's official website or app rather than through a link or number in a message you received."
---

On Monday 16 November 2026, hardware wallet maker Trezor disclosed that one of its shipping partners had been breached — and that the attacker had likely walked away with the personal details of about 27,000 people who had bought a hardware wallet. The Trezor Skladon breach did not touch a single device, a single line of firmware or a single recovery phrase. What it exposed was arguably more dangerous in a different way: the names, phone numbers, home addresses and email addresses of people who are publicly known, to the attacker, to own cryptocurrency hardware. For Indian buyers, who order Trezor devices from abroad and have them delivered to their homes, that combination — a home address plus proof of crypto ownership — is exactly the kind of information that powers the next wave of phishing calls, fake support scams and, in the worst cases, physical threats.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported data breach; it does not recommend any product or service, and it does not claim that any Indian customer's data was among the exposed records.

## What Happened: The Facts at a Glance

The story broke on 16 November 2026, when Trezor published its disclosure and posted about it on X. The facts, as reported on 16–17 November 2026 by Decrypt, Unchained, Cyber Insider, Blockchain Academics, BitcoinWorld, Spendnode, The Crypto Guide, PANews and crypto.news, are:

| Fact | Detail |
|---|---|
| What happened | Attacker accessed the systems of Skladon, a Trezor shipping partner, and likely exported customer order records |
| When the access happened | 7 November 2026 |
| When Trezor was told | 15 November 2026 — eight days after the access |
| When Trezor disclosed it | 16 November 2026 |
| How many orders affected | About 27,000 orders placed between 9 August and 7 November 2026 |
| What was exposed | Full names, phone numbers, delivery addresses, email addresses, and order details (product bought, date, price paid) |
| What was NOT exposed | Wallet backups, PINs and passphrases — neither company holds them |
| Trezor's own systems | Not compromised, according to Trezor; devices remain secure |
| Who was NOT affected | Customers in the United States — Skladon does not ship there |
| What is already happening | Some affected customers have already reported scam calls |
| How the attacker got in | Not stated — the investigation is still ongoing |

Trezor's own notice, dated 15 November 2026, says Skladon told the company that day that someone had gained unauthorised access to its systems on 7 November, and that Trezor believes the attacker exported data for roughly 27,000 orders. Trezor says it emailed every affected customer it could still reach, and that it notified the applicable data protection authority. The company has not said how the attackers got into Skladon's systems, and the investigation remains open as of 17 November.

## The Timeline: Eight Days of Silence

The dates matter here, because they show how long the exposed data sat in unknown hands before anyone was warned.

Skladon's systems were accessed on 7 November 2026. For eight days, nothing was said publicly. Skladon notified Trezor on 15 November — a full week later — and Trezor disclosed the incident on 16 November, the same day it posted about it on X. The orders in the exposed set span three months, from 9 August to 7 November 2026, which means the attacker had access to a full quarter of Skladon's order history for Trezor customers, not just a single day's shipments.

That eight-day gap between the breach and the notification is the detail that has drawn the most criticism. In that window, the attacker had time to copy the records, sort them, and begin using them. Trezor says some affected customers have already reported scam calls — calls that could only be made with the stolen contact details. The gap is also the reason Trezor is changing its own rules: the company says it is cutting its standard order-data retention period from 90 days to 45 days, and requiring its shipping partners to follow the same policy, so that a future breach exposes a smaller window of orders. It also began offering pickup without a home address in 18 European countries on 16 November — an option that, notably, does not help Indian buyers, who still need home delivery.

## What Was Exposed — and What Was Not

The exposed records are the kind that support targeted social engineering, and that is precisely why this breach matters even though no crypto was stolen.

Each exposed record ties together a full name, a phone number, a delivery address, an email address, and the details of what that person bought and what they paid for it. On its own, a name and an address are not secret — they appear on parcels and bills every day. Combined with proof that the person bought a hardware wallet, they become something else: a verified list of people who own cryptocurrency, with their home addresses and phone numbers attached. An attacker calling from that list does not have to guess whether the person on the other end owns crypto. They already know.

What was not exposed is equally important, and Trezor has been clear about it. No wallet backups, no PINs and no passphrases were part of the incident, because neither Trezor nor Skladon holds that information. A recovery phrase exists only where the owner wrote it down. The devices themselves were not compromised, the firmware was not touched, and Trezor's own systems were not breached. Nobody can drain a Trezor wallet with the stolen records alone. The danger is entirely in what the records let an attacker pretend to be — and who they let the attacker find.

## How This Differs From the Trezor Spy-Implants Story

Regular readers may remember that this site published a guide on 14 November about a very different Trezor incident: hidden spy implants found inside three Trezor Safe 5 hardware wallets bought from a reseller called CryptoBilis between 20 August and 23 September 2026. That story was about tampered devices — a secret circuit board hidden between the main board and the screen, with a cellular module that copied recovery phrases and displayed passphrases and sent them over a mobile network. It was a hardware supply-chain attack, and the defence was to buy only from authorised sellers and to check the device.

This post is about something different, and the distinction matters for what you should do next. The Skladon breach is a data breach at a shipping partner. No device was opened, no circuit board was planted, and no firmware was altered. The wallets that arrived in those 27,000 parcels are, as far as anyone has reported, genuine and uncompromised. The risk is not in the device on your desk. It is in the fact that someone now knows your name, your phone number, your home address, and that a Trezor was delivered to that address. The spy-implants story was about verifying hardware. This story is about verifying the people who contact you claiming to be from Trezor.

There is one more difference worth noting. The CryptoBilis implants were found in devices bought through one reseller, and the exposure was limited to three confirmed devices out of 48 customers who came forward. The Skladon breach exposed about 27,000 orders — a far larger group, spread across many countries, with no way for most of them to know whether their own record was among those exported. Trezor says the attacker "likely" exported the data, which is the careful language of an investigation that is still running, but the company has treated the exposure as real: it emailed the affected customers and notified a data protection authority.

## The Third Vendor Breach This Year

The Skladon incident is not Trezor's first vendor problem this year — it is the third. In August 2026, Trezor disclosed a breach at a different shipping company, ShipMonk, and expanded that disclosure in September after learning that older records were also exposed. Earlier in the year, a breach at Brevo, another partner, also exposed customer data. Each incident hit a different partner, and each time Trezor's own systems stayed secure while a vendor's customer records did not.

That pattern is the real lesson of the Skladon breach, and it applies far beyond Trezor. A hardware wallet company can secure its own devices and its own servers and still have its customers exposed through a shipping partner, an email provider or a support vendor. The customer's data lives in more places than the customer ever sees, and each of those places is a target. Trezor's response — cutting retention from 90 days to 45 and pushing the same rule onto its partners — is an acknowledgement of exactly that: the less data a vendor holds, and the shorter it holds it, the smaller the damage when a vendor is breached. But the change does not help the 27,000 orders already exposed, and it does not change the fact that the records are now out there.

## What It Means for Indians

No Indian customer has been individually confirmed as affected, and Trezor has not published a country-by-country breakdown of the 27,000 orders. But the geography of the breach points directly at buyers outside the United States: Skladon does not ship to the US, so American buyers were not affected, which means the exposed orders were shipped to Europe, Asia and the rest of the world — including India. Indian buyers order Trezor devices from the company's international store and have them delivered to Indian addresses, and those orders fall squarely inside the window the breach covers.

For an Indian buyer, the exposure carries three specific risks. The first is the scam call. Trezor says some affected customers have already reported scam calls, and the pattern is well established: a caller who knows your name, your address and the exact model you bought sounds like genuine support, and then creates urgency — a "security update", a "firmware problem", a "verification step" — to get you to read out your recovery phrase or install software from a link they send. In India, where phone-based fraud is already widespread and where many people are used to receiving genuine calls from delivery companies and banks, a caller who already knows your order details is unusually convincing. Remember the one rule that defeats every version of this scam: Trezor will never call you, and it will never ask for your wallet backup. Any call that does either of those things is a scam, no matter how much it knows about you.

The second risk is physical. A home address combined with proof that a hardware wallet — and therefore cryptocurrency — is kept at that address is the kind of information that has, in other countries, led to targeted robberies of crypto holders. India has not seen a reported case tied to this breach, and no Indian victim has been named, but the risk is the reason security-conscious buyers use work addresses, parcel lockers or pickup points where they are available. Trezor's new no-home-address pickup option covers 18 European countries; it does not cover India, so Indian buyers should think carefully about which delivery address they use for future orders, and about who else has access to that address.

The third risk is the email channel. The exposed records include email addresses, and the next wave of this breach will almost certainly be phishing emails that quote your order details — the model you bought, the date, the price — to make a fake support message look real. A phishing email that knows what you bought is far more persuasive than a generic one. The defence is the same as ever: never click a link in an email about your wallet; go to the company's official website yourself, and check there.

The Indian context also includes the tax rules, which are unchanged by this incident. Gains on crypto transfers are still taxed at a flat 30% plus a 4% cess, and sales still attract 1% TDS. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. A data breach does not change what you owe, but it does change what you should keep: save Trezor's disclosure email, any scam calls or messages you receive, and the dates and times, in case you need them for a police complaint.

One more Indian angle matters. India has no equivalent of the European data-protection rules that forced Trezor to notify a data protection authority, and no mandatory breach-disclosure timeline that would have forced Skladon to tell Trezor faster than eight days. Indian users of global services should assume the first reliable warning will come from the company or from independent security reporting, not from a regulator — and that the warning may arrive days after the data has already been used.

## What to Do Now: A Safety Checklist

If you bought a Trezor between 9 August and 7 November 2026 and it was shipped to an address outside the United States, work through these steps.

First, check your email — including the spam folder — for Trezor's notification. The company says it emailed every affected customer it could still reach. If you received it, your order was in the exposed set, and you should treat all the details in it as known to the attacker. If you did not receive it, do not assume you are safe: Trezor says it emailed the customers it could "still reach", which leaves room for addresses it no longer had or could not contact. If you ordered in the window and your delivery address was outside the US, assume exposure as a precaution.

Second, decide in advance how you will handle any call, text or email about your Trezor. The rule is simple and absolute: Trezor will never call you, and it will never ask for your wallet backup, your PIN or your passphrase. If a caller claims to be from Trezor and asks for any of those things, hang up. If an email or text asks you to click a link to "verify" your wallet or install an "urgent update", delete it and go to Trezor's official website yourself. Tell the people in your household the same rule, because a scammer who calls your home may reach a family member first.

Third, review the places your exposed details can be used. Change the password on the email account tied to your Trezor order, and turn on two-factor authentication for that email and for your exchange accounts. If you used the same phone number or email address for your exchange accounts, make sure those accounts have withdrawal allowlisting switched on where it is offered, so that even a compromised login cannot send funds to a new address. Consider whether the phone number in the exposed records is one you still use for banking or exchange OTPs, and whether it is worth changing.

Fourth, watch for the physical risk. If your home address was in the exposed set, be careful about who you tell that you own a hardware wallet, and consider using a different delivery address — a workplace, a trusted family member's address, or a parcel service — for future orders. Do not post photos of your device, its packaging or your order confirmation on social media. The fewer people who can connect your name to a hardware wallet at your address, the better.

Fifth, check your wallet the way you normally would, and do not panic about the device itself. Your Trezor is secure, your recovery phrase was not exposed, and the breach did not give anyone access to your funds. Open Trezor Suite, confirm your balances are as expected, and check that your firmware is up to date through the official app — never through a link in a message. If you bought your device from a reseller rather than directly from Trezor, read the separate guide on the CryptoBilis spy implants, because that incident is the one that affects the hardware itself.

Finally, report it if you are targeted. In India, cyber fraud can be reported on the National Cyber Crime Reporting Portal at cybercrime.gov.in, or by calling 1930, and to your local police station. Keep the caller's number, the message, the date and time, and a screenshot of anything you received. Recovery of stolen crypto is rare, but reports help investigators link cases together — and a scam call that quotes your Trezor order details is evidence that the breach data is being used.

## What to Watch Next

Four things will determine how this story develops, and all four are worth watching over the coming days.

The first is the full picture of who was affected. Trezor has not published a country breakdown, and it has not said whether the 27,000 figure is final or will grow as the investigation continues. Watch for an updated disclosure: if the number rises, or if specific countries are named, the advice for buyers in those countries becomes more urgent.

The second is the investigation into how Skladon was breached. Trezor has not said how the attacker got in, and Skladon has not published its own account. A proper post-mortem should explain the intrusion route, whether the attacker still holds access, and what changes Skladon is making. Until that appears, the "likely exported" wording means the exposure should be treated as real, not hypothetical.

The third is the scam wave. The scam calls Trezor has already reported are likely the beginning, not the end: stolen contact lists are typically used for weeks or months, and the calls tend to get more polished as the scammers learn what works. Watch for reports of new Trezor impersonation scripts, fake support numbers, and phishing emails quoting order details — and warn anyone you know who bought a hardware wallet in the last three months.

The fourth is the pattern across the industry. This is the third vendor breach to hit Trezor this year, after ShipMonk and Brevo, and it follows a month in which a major exchange was breached, a shipping partner was breached at another company, and a supply-chain attack hit 178 websites. Watch whether other hardware wallet makers and crypto companies start naming their vendors, cutting data retention, or offering address-free delivery — the measures that would actually shrink the next breach.

## The Bottom Line

On 16 November 2026, Trezor disclosed that its shipping partner Skladon had been breached on 7 November, and that the attacker likely exported the records of about 27,000 orders placed between 9 August and 7 November — names, phone numbers, home addresses, email addresses and order details. Trezor's own systems and devices were not compromised, and no recovery phrase, PIN or passphrase was exposed, because neither company holds them. But some affected customers have already reported scam calls, and the exposed data is exactly what a convincing impersonation scam needs. This is the third vendor breach to hit Trezor this year, after ShipMonk and Brevo.

For Indian buyers, the practical message is narrow and clear. Your device is safe. Your recovery phrase is safe. What is not safe is any phone call, text or email that claims to be from Trezor and asks for your backup, your PIN or your passphrase — because the people making those calls now know your name, your address and what you bought. Trezor will never call you and never ask for your wallet backup. Treat every such contact as a scam, check your email for Trezor's notification, tighten the security on the accounts tied to your order, and report any attempt on cybercrime.gov.in or by calling 1930. A hardware wallet protects your keys. Only you can protect the information that says you own one.

## Keep Learning

- [Trezor Spy Implants: Tampered Safe 5 Wallets and the CryptoBilis Reseller](/blog/trezor-spy-implants-safe-5-india-guide)
- [iPhone Crypto Theft: DarkSword and Coruna Seed-Phrase Stealing Explained](/blog/iphone-crypto-theft-darksword-india-guide)
- [Optimjack Malware Hit 178 Sites: India Crypto Safety Guide](/blog/optimjack-optimizely-malware-178-sites-india-guide)
