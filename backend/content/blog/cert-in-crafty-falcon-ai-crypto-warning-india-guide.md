---
title: "CERT-In: CRAFTY FALCON AI Attacks Target India Crypto"
category: "Security"
excerpt: "CERT-In's 4 November advisory names AI-assisted actor CRAFTY FALCON and warns crypto exchanges are now explicitly in its sights — what Indian users should know."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-05T03:50:00+00:00"
faqs:
  - question: "What is CERT-In's CRAFTY FALCON warning?"
    answer: "CERT-In, India's national cybersecurity agency, issued advisory CIAD-2026-0058 on 4 November 2026, updating an earlier 9 October advisory. It designates an AI-assisted threat actor as CRAFTY FALCON and says the campaign is active and escalating. The update explicitly names cryptocurrency exchanges and virtual digital asset service providers among the targeted financial businesses, alongside banks, non-bank lenders, fintech firms and payment companies."
  - question: "Has CERT-In named any hacked crypto exchange or loss figure?"
    answer: "No. According to the reporting on the advisory, CERT-In did not name any specific crypto exchange that was affected and did not quantify losses. It reported that cryptocurrency wallet keys were stolen and funds were siphoned from wallets in some incidents, but those details are not tied in the advisory reporting to a named platform or a total amount. Readers should be cautious about any social media post that fills in those gaps with a name or a figure."
  - question: "I am an Indian crypto user. What should I actually do after this warning?"
    answer: "Keep the basics tight: use a well-established platform, turn on every available security control such as two-factor authentication, keep most funds in a wallet whose seed phrase only you control, and never share that phrase with anyone. Be extra sceptical of messages that push you to act fast, approve an unfamiliar transaction, or move funds to a new wallet. Gains from crypto remain taxed at 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

India's national cybersecurity agency has issued a warning that should interest every Indian crypto user, even though it is not, strictly speaking, a story about a single hack. On 4 November 2026, the Indian Computer Emergency Response Team, known as CERT-In, published an advisory designating an AI-assisted threat actor as CRAFTY FALCON and describing its campaign against financial businesses as active and escalating. The CERT-In CRAFTY FALCON warning matters for crypto users because, for the first time in this campaign, cryptocurrency exchanges are explicitly named among the targets. This guide explains what the advisory says, what it does not say, how the attacks are described as working, and what Indian users should practically do about it.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported cybersecurity advisory; it does not recommend any exchange, coin, or product, and it does not predict prices.

## What CERT-In Actually Said

CERT-In's advisory, numbered CIAD-2026-0058 and dated 4 November 2026, is an update to an earlier advisory, CIAD-2026-0046, dated 9 October 2026. The earlier advisory dealt with threat actors exploiting payment and disbursement APIs for unauthorised fund transfers in financial entities. The new advisory says continued analysis of incidents reported by affected entities revealed a significant escalation of that campaign, and that is why CERT-In has now given the threat actor a name: CRAFTY FALCON.

The list of targeted businesses in the new advisory is broad. It includes non-banking financial companies, digital lending platforms, fintech entities, payment aggregators, payment service providers, and cryptocurrency exchanges and virtual digital asset service providers. That breadth is itself part of the message. This is not described as a crypto-only campaign. It is described as a campaign against the financial system in general, in which crypto exchanges are one of the kinds of business now explicitly in scope.

CERT-In's own characterisation of the threat is blunt. The agency says the threat is active and ongoing, and that its financial incident response unit, CSIRT-Fin, continues to receive reports of successful attacks. Strikingly, it adds that some of those reports came from non-bank lenders and fintech entities that had already received the earlier restricted advisories and had undertaken remediation. In plain language: organisations that knew about the campaign and had tried to fix the weaknesses were still being hit. That detail is why CERT-In urges affected entities to treat the campaign as an immediate and continuing threat rather than as a one-off incident that has already been dealt with.

The advisory was reported on 5 November 2026 by CoinTelegraph, Deccan Chronicle, and several crypto news outlets carrying the same account, which is what brought it to wider attention in India that morning. The reporting agrees on the core facts: the advisory's date and number, the CRAFTY FALCON designation, the explicit inclusion of crypto exchanges, the stolen wallet keys, and the warning that the campaign is still running.

## "Machine Speed": How the Attacks Are Described

The phrase that has travelled furthest from the advisory is "machine speed", and it is worth understanding precisely, because it is not just colourful language. CERT-In describes CRAFTY FALCON as an AI-assisted financial threat actor that surveys its targets with machine intelligence, operates at machine speed, and strikes by invoking the victim's own payment and disbursement APIs.

Each part of that sentence describes a different stage of an attack. Surveying with machine intelligence means using automated tools to probe a target's systems for weaknesses, rather than a person manually testing one thing at a time. Operating at machine speed means the attack chain — the sequence of steps from finding a weakness to exploiting it — runs autonomously and far faster than a human team could respond to it. Striking through the victim's own payment and disbursement APIs means the final step does not necessarily look like a break-in from outside. An API is a standard interface that software systems use to talk to each other, and payment and disbursement APIs are the interfaces that move money. If an attacker can invoke those interfaces, the resulting transfer can look, at least at first, like a legitimate instruction from inside the system.

The advisory names several publicly available AI-driven offensive security tools that analysis identified in the campaign. These include the ARTEX family of language-model-based tools, PentAGI, described as an autonomous multi-agent AI penetration testing system, the Cairn attack search engine, and the CyberStrikeAI framework. According to CERT-In, these tools execute complete attack chains autonomously, generate and refine large numbers of tailored attack scripts in rapid succession, and adapt their payloads based on how the target responds. In other words, the attack does not stop at the first failed attempt. It learns from the response and tries again, differently, and quickly.

For beginners, the important point is not the names of the tools. It is the shift they represent. Traditional security advice often assumes an attacker works slowly, tries a few things, and can be caught by a human reviewing alerts. An automated, adaptive attack compresses that timeline. By the time a human has read an alert, the attack may already have moved several steps further. That is why CERT-In's advice to organisations, discussed below, emphasises automated containment and round-the-clock monitoring rather than just better passwords or a one-time patch.

## What Happened to Crypto Exchanges, Specifically

Here, precision matters, because the reporting on the advisory contains both a clear claim and a clear limit. The clear claim is that cryptocurrency exchanges and virtual digital asset service providers are among the entities targeted, and that in some incidents, cryptocurrency wallet keys were stolen and funds were siphoned from cryptocurrency wallets. Wallet keys are the secret credentials that control a wallet; whoever holds them can move the funds in it. Their theft is therefore a serious outcome, not a minor intrusion.

The clear limit is equally important. CERT-In did not, in the reporting on the advisory, name any specific crypto exchange that was affected, and it did not quantify the losses. CoinTelegraph reported that it had reached out to CERT-In and to several Indian exchanges — CoinDCX, CoinSwitch, WazirX, ZebPay and Mudrex — for comment. That outreach is a sign that the affected platforms, if any in India are confirmed, have not yet been publicly identified through this advisory. Until an exchange itself confirms an incident, or CERT-In names one, any claim that a particular Indian exchange was breached in this campaign is speculation, not fact.

This restraint is worth noting because it cuts against the usual pattern of crypto security news, where a single dramatic incident dominates the headlines. In recent weeks, Indian readers have followed a string of named incidents: the Binance breach, the exchange's replenishment and withdrawal reopening, and a series of smaller exchange and protocol incidents. The CRAFTY FALCON advisory is different. It is a warning about an ongoing campaign across the financial sector, not a post-mortem of one named breach. Treating it as if it were the latter — attaching a familiar exchange's name to it without evidence — would be exactly the kind of misinformation that makes security warnings less useful.

## What CERT-In Advised Organisations to Do

CERT-In's advisory is addressed primarily to financial entities, not to individual users, but its recommendations reveal what the agency thinks the defence must look like against this kind of attacker. The headline recommendation is to treat the campaign as active and escalating, and to heighten security monitoring around the clock, with increased staffing and lowered alert thresholds during holidays, weekends and other low-coverage windows. Attackers, the logic goes, strike when defenders are thinnest. Weekends and holidays are therefore not quiet periods to be relaxed about; they are the periods of greatest risk.

The advisory also points organisations towards automated defences. It advises tuning detection systems for machine-speed, multi-technique attack patterns, parallel attack threads, adaptive payload mutation and continuous non-business-hours operation against a single target, and adopting automated containment. In plain terms: if the attack runs at machine speed, the response must also be partly automated, because a purely human response will always be slower. A system that can isolate a compromised component automatically, before a human has finished reading the alert, is no longer a luxury in this threat model.

For individual users, these organisational recommendations translate into a simpler question: does the platform you use take security this seriously? You cannot inspect a platform's internal monitoring, but you can look for outward signs. Does it publish security updates? Does it offer hardware-key or app-based two-factor authentication, withdrawal allowlists, and address-book controls? Does it communicate promptly when something goes wrong, rather than going silent? Those are imperfect proxies, but they are the ones available to users, and they matter more after a warning like this one than they did before it.

## How This Differs From the Recent Hack Headlines

It is easy to blur this advisory together with the other security stories of the past week, so it is worth drawing the lines clearly. Our earlier guides covered the Binance security incident and its aftermath, the alleged AI-driven surge in crypto hacks reported by Trail of Bits, and a proposal by Binance's former chief executive for a crypto security alliance. Each of those is a different kind of story.

The Binance incident was a named breach at a named exchange, with a detailed attack timeline later published by the exchange itself. The Trail of Bits finding was a research observation about the volume and speed of attacks across the industry. The security alliance proposal was an industry idea for cooperation after the fact. The CRAFTY FALCON advisory is none of those. It is a government cybersecurity agency's warning, based on incidents reported to it by financial entities, that a specific AI-assisted actor is actively targeting the sector, including crypto exchanges, right now.

That distinction also explains why this story deserves its own guide rather than being folded into an earlier one. The earlier guides explain what happened after an incident. This one explains a warning issued before the full damage is known, about a campaign that is still running. The practical lesson is different too. After a named breach, the lesson is usually about that exchange's controls. After a sector-wide warning like this, the lesson is about the whole ecosystem's readiness — and about the habits of individual users, who are the last line of defence when a platform's controls are tested.

| Story | What it is | What is known |
|---|---|---|
| Binance incident (late October) | A named breach at a named exchange | Attack timeline published by Binance; replenishment and phased withdrawal reopening followed |
| Trail of Bits hack-surge finding | Research on attack volume and speed | Attacks running well above recent annual averages, with AI accelerating vulnerability discovery |
| CZ security alliance proposal | An industry cooperation idea | A proposal, not yet a formed alliance, for shared threat intelligence and faster fund freezes |
| CERT-In CRAFTY FALCON advisory (4 November) | A government warning about an ongoing campaign | Crypto exchanges explicitly named as targets; wallet keys stolen in some incidents; no exchange named, no loss total given |

## What Indian Users Should Do Differently

Most of the advice that follows is not new, and that is the point. A warning like this one does not require exotic new tools. It requires doing the unglamorous basics consistently, because an automated attacker tests exactly the gaps that inconsistent habits leave open.

First, turn on every security control your platform offers, and prefer the strongest form available. App-based or hardware-key two-factor authentication is materially stronger than SMS codes, which can be intercepted. Withdrawal allowlists, which restrict withdrawals to addresses you have pre-approved, add a delay and a check that can stop a stolen session from draining funds immediately. If your platform offers transaction confirmations by email or app notification, keep them on, and actually read them.

Second, keep most funds where an exchange breach cannot reach them. The standard safety step remains holding funds you are not actively trading in a wallet whose seed phrase only you control, kept offline where possible. The CRAFTY FALCON reporting specifically mentions stolen wallet keys, which is a reminder that this advice cuts both ways: a self-custody wallet is only safer if its keys are genuinely private. No support agent, no recovery service, and no fellow investor will ever legitimately ask for your seed phrase. Anyone who does is, by definition, running a scam.

Third, be sceptical of urgency. AI-assisted attacks are not only about breaking into systems. The same tools that generate attack scripts can generate convincing phishing messages, fake support chats, and tailored social engineering at scale. A message that pressures you to approve a transaction quickly, move funds to a "safe" wallet, or click a link before an account is "frozen" should be treated as suspect until verified through an independent channel — the platform's official app or website, typed in by you, not a link in the message.

Fourth, keep records in INR from the start. Dates, amounts in rupees, transaction IDs, wallet addresses and platform statements are the materials that make any later report or claim possible. If something does go wrong, those records — gathered now, not reconstructed from memory months later — are what investigators, platforms and courts work with. Gains from crypto remain taxed at 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

Fifth, report quickly if you are targeted. In India, cyber fraud can be reported through the national cybercrime reporting portal and the 1930 helpline, and a complaint to local police or cyber units can start a tracing process while funds may still be freezable. Speed matters for the same reason the advisory stresses machine speed: funds that keep moving are far harder to recover than funds that are frozen early. And ignore recovery scams that follow any public incident. No legitimate recovery process asks a victim to pay an upfront fee in crypto to a new wallet.

## What to Watch Next

Several questions remain open, and they are worth watching rather than assuming answers to.

- **Whether any Indian exchange confirms an incident.** CERT-In has not named one. If an exchange does confirm involvement, that will change the story from a sector warning to a named incident, with its own timeline and user impact.
- **Whether the advisory is updated again.** The 4 November advisory is itself an update to a 9 October advisory. A further update, with more detail on affected entities or mitigations, would signal that the campaign is still evolving.
- **Whether other regulators or exchanges respond publicly.** Public responses from Indian exchanges or industry bodies would show how seriously the sector is taking the warning, and what concrete steps are being taken.
- **Whether the named AI tools appear in other incident reports.** The ARTEX, PentAGI, Cairn and CyberStrikeAI tools named by CERT-In may surface in security research elsewhere, which would help confirm how widespread this method has become.
- **Whether weekend and holiday attacks increase.** CERT-In specifically flagged low-coverage windows. Incident reporting over the coming weekends will be an early test of whether organisations have acted on that part of the advice.

## Keep Learning

- [How to Store Crypto Safely: A Beginner's Guide for India](/blog/how-to-store-crypto-safely-india-beginners-guide) — self-custody basics, seed phrase safety, and how to keep funds out of reach of an exchange breach.
- [7 Common Crypto Scams Targeting Indians](/blog/7-common-crypto-scams-targeting-indians) — the fraud patterns most often aimed at Indian users, and the warning signs to recognise before sending funds.
- [Phishing Emails and Fake Exchange Websites](/blog/phishing-emails-fake-exchange-websites-india-guide) — how lookalike platforms and messages trick users, and how to verify a site before trusting it.

## The Bottom Line

The CERT-In CRAFTY FALCON warning is not a story about one exchange, one theft, or one loss figure, and it should not be reported as if it were. It is a warning from India's national cybersecurity agency that an AI-assisted threat actor is actively targeting financial businesses, that cryptocurrency exchanges are now explicitly among those targets, that wallet keys have been stolen and funds siphoned in some incidents, and that the campaign is still running even against organisations that had already tried to defend themselves. That is a serious message, and its seriousness lies precisely in what it does not claim: no named victim, no total loss, no finished incident to file away.

For Indian users, the takeaway is practical rather than dramatic. Use the strongest security controls available, keep most funds in a wallet only you control, distrust urgency, keep records in INR, and report fast if something goes wrong. The attacker described in this advisory works at machine speed. The defence that works against it is not a single clever trick. It is a set of boring habits, applied consistently, by platforms and by users alike — before the attack arrives, not after it.
