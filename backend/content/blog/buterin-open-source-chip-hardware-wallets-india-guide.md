---
title: "Buterin's Open-Source Chip Plan for Hardware Wallets"
category: "Security"
excerpt: "Vitalik Buterin says hardware wallets need open-source chips: 'Not your silicon, not your keys.' Ledger's CTO disagrees. What the debate means for Indian users."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/wallets.jpg"
created_at: "2026-11-28T03:50:00+00:00"
faqs:
  - question: "What is Vitalik Buterin's open-source chip proposal for hardware wallets?"
    answer: "In a blog post published on 26 November 2026, Ethereum co-founder Vitalik Buterin argued that the security chips inside hardware wallets should be open all the way down to their factory blueprints, so independent specialists can check whether the chip in your hand matches the published design. His point is that owning your private keys is not enough if you cannot trust the chip that protects them — in his words, 'Not your silicon, not your keys.' He also suggested the chip industry could split into performance hardware and security hardware, with the secure kind possibly far less efficient but still good enough for wallets."
  - question: "Why does Ledger's CTO disagree with open-source hardware wallet chips?"
    answer: "Ledger chief technology officer Charles Guillemet has argued that open source is not, by itself, a security property, and that publishing a chip design cannot prove the chip you actually buy matches that design. In August 2026 he called the idea of simply building an open-source secure element 'mostly wishful thinking', pointing to the Coldcard case, where a randomness bug reportedly sat in publicly available code for more than five years and was missed by at least 15 independent security reviews. His view is that closed designs make exploitation harder, and that Ledger's approach mainly protects against whoever gets hold of a device, while Buterin's mainly focuses on whoever made it."
  - question: "I use a hardware wallet in India. What should I check right now?"
    answer: "Buy only from the manufacturer's official store or an authorised reseller, never from a random marketplace listing, and check the packaging and tamper-evident seals before you set the device up. Install the latest firmware from the official app, and generate a fresh recovery phrase on the device itself — never use a pre-filled phrase and never share it with anyone, including someone claiming to be support staff. If you bought from an unofficial seller, consider moving your crypto to a brand-new wallet with a fresh phrase. Indian tax rules do not change because of a hardware debate: gains on crypto are still taxed at a flat 30% with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

## Buterin's Open-Source Chip Plan for Hardware Wallets: India Guide

Hardware wallets are supposed to be the safest place to keep crypto. You buy a small device, it generates your private keys offline, and it never shows those keys to the internet. But on 26 November 2026, Ethereum co-founder Vitalik Buterin published a blog post arguing that this safety story has a hole in it: the chip itself. If you cannot trust the silicon inside the device, he wrote, then owning your private keys is not enough. His proposed fix is radical — make the chips open, all the way down to the factory drawings, so independent experts can inspect them. Ledger, the biggest hardware wallet maker, disagrees. This guide explains what Buterin actually proposed, why the timing matters, what the other side says, and what Indian hardware wallet owners should do about it.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a published security debate and how to check a hardware wallet; it does not recommend buying, selling or holding any asset, and it is not legal advice.

## What Buterin Proposed on 26 November 2026

The facts, as reported on 27–28 November 2026 by Bitcoin.com News, KuCoin, BloomingBit, The Coin Rise and other outlets, are:

- **The post is called "A shallow dive into open-source chip design."** Buterin published it on 26 November 2026. It is about secure hardware in general, but hardware wallets are its central example.
- **His core claim is about trust, not code.** Buterin argues that software audits mean little if the physical chip underneath can be secretly altered. Publishing a chip's source code, or describing what it is supposed to do, tells an auditor nothing about whether the manufactured hardware actually matches that description.
- **The fix is openness down to the factory floor.** He proposes that chip designs should be published as Graphic Design System (GDS) files — the detailed geometric blueprints used in chip fabrication — so that independent researchers have a reference to check manufactured chips against. In his words, "In order for computation to be democratized, the hardware layer must be open for participation and tinkering too. In order for computation to be secure, the hardware layer must be open and inspectable."
- **Inspection is possible, but only on samples.** Buterin pointed to optical inspection techniques, including a method called IRIS, that specialists can use to examine chips for unauthorised physical changes. Some checks can be done with infrared imaging; subtler tampering may require taking a chip apart layer by layer, which destroys it. That means only a sample of chips could ever be fully inspected — not the exact chip sitting in your wallet. He also said chips need to be designed to be more "inspection-friendly" in the first place.
- **He named a realistic manufacturing target.** Buterin wrote that 25-nanometre fabrication is a realistic near-term target for open-source chip production — far behind the cutting edge, but enough for a wallet, which does not need the latest processor to sign a transaction.
- **He expects the industry to split in two.** His forecast is that hardware will divide into "performance hardware", optimised purely for speed, and "security hardware", built around transparency and independent verification. The secure kind, he wrote, may be ten times less efficient or more — "but it will be efficient enough for almost everything we care about."

The slogan that sums the whole argument up is his own: "Not your silicon, not your keys." It is a deliberate echo of the old crypto saying "not your keys, not your coins", extended one layer deeper — from who holds the keys to who made the chip that holds them.

## Why This Landed Now: The Implant Incidents

Buterin's post did not arrive in a vacuum. It came weeks after the hardware wallet industry was hit by its worst tampering scare in years, and the details of that scare are exactly the threat his proposal is aimed at.

In October 2026, Ledger said that malicious implants had been found in devices sold through a reseller called CryptoBilis. The implants were hidden extra circuit boards that captured users' recovery phrases and sent them out over mobile networks. Ledger suspended sales through that reseller in Southeast Asia and Hong Kong, tightened its distribution rules, and began offering X-ray inspections after tampered units turned up outside that region as well.

In November 2026, Trezor said it had found similar implants in three of its Safe 5 wallets, also sold through CryptoBilis. The company pushed out a firmware update designed to block the implants from capturing data, and cut its authorised reseller network by roughly 80%. We covered that incident in detail in our Trezor spy implants guide.

Buterin's post cites cases of exactly this kind — attackers physically modifying hardware wallets before they reach their buyers, including concealed implants with hidden eSIM components capable of transmitting a user's recovery phrase once the device is activated. As Bitcoin.com News noted, tampered chips are a threat that has not caused known losses yet — no customer in the recent incidents has reported losing funds. But the incidents proved that the supply chain between factory and buyer is a real attack surface, not a theoretical one. That is the gap Buterin's proposal is trying to close.

It is also worth noting that this is not Buterin's first warning on this theme. At his Devcon 8 keynote in Mumbai on 3 November 2026, he warned about hardware trust with the line "not your silicon, not your life", as part of a broader talk about open, secure and verifiable technology. The 26 November post is the detailed version of that warning, aimed specifically at the chips inside wallets.

## The Pushback: Ledger's CTO Says Open Source Is Not Enough

The most prominent critic of Buterin's idea is the company whose products it would affect most. Ledger chief technology officer Charles Guillemet, who is leaving the company at the end of the year, has been sceptical of open-source chip security for months — and his objections are specific, not dismissive.

- **You cannot prove the chip matches the design.** Guillemet's central argument, made in August 2026, is that open source is not a security property on its own. Publishing a chip design gives you a reference, but there is no way to prove that the physical chip a customer actually buys matches the published specification. A factory could publish one design and ship another, and no buyer could tell the difference without destroying their own device to check it.
- **"Mostly wishful thinking."** His verdict on the idea of simply building an open-source secure element was blunt: "You might think: 'Then build an open-source secure element.' That sounds elegant. It is mostly wishful thinking." His point is that openness of the design does not solve the verification problem — it moves it.
- **Many eyes do not guarantee security.** Guillemet pointed to the Coldcard case from earlier in 2026, where a randomness bug reportedly sat in publicly available code for more than five years and was missed by at least 15 independent security research and review efforts. If that many reviewers can miss a bug in open code, he argues, openness alone is not the safety net people assume it is.
- **Closed source has a defensive value.** "Anyone who has done offensive security knows this," Guillemet said, arguing that closed designs make exploitation harder because an attacker cannot simply study the design to find its weaknesses.

As Bitcoin.com News summarised the divide, the two sides are protecting against different attackers. Ledger's approach mainly protects against whoever gets hold of a device after it is sold — a thief, a snooper, a tampered reseller unit. Buterin's approach mainly focuses on whoever made the device in the first place — a compromised factory, a malicious supplier, a state-level actor with access to the production line. Both threats are real. The argument is about which one to design for first.

## The Middle Ground: Layered Security

Not every manufacturer has picked a side. The most interesting response to the debate may be the one that tries to combine both approaches — and it comes from Trezor, the company that was itself hit by the implant scare.

Trezor's newer Safe 7 wallet uses a layered design: certified sealed chips, open-design chips, and a main microcontroller, each doing a different job. The idea is that no single layer has to be trusted completely. Earlier in 2026, Ledger's own Donjon security team bypassed the firmware signature check on the TROPIC01 chip — the open-design chip used in the Safe 7 — using a laser. Trezor's response was that the layered design means that one vulnerability alone cannot expose user PINs or funds, because the other layers still hold.

That layered model is, in practice, what Buterin's proposal and Guillemet's criticism both point toward: open where openness helps verification, sealed and certified where secrecy helps defence, and never a single point of failure. The debate is not really open versus closed. It is about how much of the chip should be inspectable, who does the inspecting, and what happens when inspection finds something wrong.

For users, the practical difference between the two philosophies is smaller than the headlines suggest. Neither Buterin's proposal nor Ledger's approach changes what you should do with the wallet you already own. Both sides agree on the basics: buy from a trusted source, keep your recovery phrase offline and private, and update your firmware. Where they disagree is about what the industry should build next — and that argument will play out over years, not weeks.

## Open Chips vs Closed Chips: The Trade-Off

| Question | Buterin's open-chip view | Ledger's closed-chip view |
|---|---|---|
| What is the main threat? | Whoever made the chip — a compromised factory or supplier | Whoever gets the device — a thief, a tampered reseller unit |
| What does openness give you? | Independent experts can compare real chips against published designs | Little — you still cannot prove the shipped chip matches the design |
| What does secrecy give you? | Nothing — it hides flaws from defenders too | Attackers cannot study the design to find weaknesses |
| What is the cost? | Slower, less efficient chips; only samples can be fully inspected | You must trust the manufacturer's certifications and audits |
| What is the evidence it works? | No tampered-chip losses yet, but implants were found in the wild | Coldcard's open code still hid a bug for 5+ years despite 15+ reviews |

Neither side has a complete answer, and the honest reading of the debate is that both are describing real risks. A chip can be compromised at the factory, and a chip can be compromised after it leaves the factory. The implant incidents of October and November 2026 were the second kind — tampering by a reseller, not by a chipmaker. Buterin's argument is that the first kind is harder to detect and would be worse if it ever happened, so the industry should start building for it now, before it does.

## What Indian Hardware Wallet Owners Should Do

The debate about chip design will take years to settle. Your own security does not have to wait for it. Here is what matters now, in India specifically:

- **Buy only from the official store or an authorised reseller.** The October and November implant cases both trace back to one reseller, CryptoBilis, selling through its own store and marketplace shops. In India, that means buying from the manufacturer's own website or a reseller listed on it — not from a random listing on a marketplace, a social media seller, or a "deal" that is far below the official price. A cheap wallet from an unknown seller is the single biggest risk in this whole story.
- **Check the device before you set it up.** Inspect the packaging and any tamper-evident seals. When you switch the wallet on for the first time, it should ask you to generate a fresh recovery phrase. If it shows you a phrase that is already filled in, or comes with a card that has a phrase printed on it, stop — that device may have been used or tampered with. Contact the manufacturer before you put any crypto on it.
- **Generate a fresh phrase on the device itself.** Your recovery phrase is the master key to your crypto. It should be created by your wallet, in front of you, and written down by you on paper — never typed into a website, photographed, or shared with anyone, including someone claiming to be support staff. No legitimate company will ever ask for it.
- **Install firmware updates from the official app only.** Trezor's November firmware update blocked the implants found so far from capturing new data, but it could not protect a phrase that was already stolen before the update. Updates help, but they are not a substitute for a fresh phrase on a clean device.
- **If you bought from an unofficial seller, start over.** If your wallet came from a marketplace seller or a reseller you cannot verify, the safest move is to create a brand-new wallet on a device bought from an official source, generate a completely fresh recovery phrase, and move your crypto there. Do not simply update the old device and keep using the same phrase — if the phrase was already copied, the attacker can use it at any time, even months later.
- **Tax rules do not change because of a hardware debate.** Whatever happens in the chip-design argument, Indian tax treatment of crypto stays the same until the law changes: gains are taxed at a flat 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

One more practical point for Indian buyers: hardware wallets are usually imported, and the price you pay in rupees already includes shipping, customs and the seller's margin. That makes the temptation to buy a cheaper unit from an unverified seller stronger — and the risk exactly the same as anywhere else in the world. The saving is small. The downside, if the device was tampered with, is everything on it.

## Why This Debate Matters Beyond Wallets

Buterin's post is about hardware wallets, but its argument reaches further. The same question — can you trust a chip you cannot inspect? — applies to phones, laptops, and every device that handles private keys, passwords and personal data. His forecast of a split between performance hardware and security hardware is really a claim about where computing is heading: a world in which the fastest chips are built for AI and gaming, and a separate, slower, fully inspectable class of chips is built for the things that must not be compromised.

That split has not happened yet, and it may never happen in the form Buterin imagines. Chip fabrication is enormously expensive, and a 25-nanometre open production line is still a long way from a product you can buy. But the debate itself is already changing behaviour: manufacturers are publishing more about their designs, cutting unreliable resellers, and adding layers of defence that do not depend on any single chip being perfect. The implant scares of October and November did more to change the industry in a month than years of argument did — and Buterin's post is, in part, an attempt to make sure the lesson sticks.

For Indian users, the takeaway is simpler than the debate. The chip inside your wallet matters, and the people who make wallets are now arguing in public about how to make it trustworthy. You do not need to pick a side in that argument. You need to buy from a source you can verify, keep your recovery phrase to yourself, and treat any device with an unknown history as untrusted until proven otherwise.

## Keep Learning

- [Trezor Spy Implants: Safe 5 Wallets Tampered in India](/blog/trezor-spy-implants-safe-5-india-guide) — the November 2026 implant incident that frames this debate: what Trezor found, how the implants worked, and what to do if you bought from CryptoBilis.
- [Cold Wallet Setup Guide: Your First Hardware Wallet](/blog/cold-wallet-setup-guide-first-hardware-wallet) — step-by-step setup for a first hardware wallet, including how to generate and store your recovery phrase safely.
- [Vitalik Buterin's Devcon 8 Keynote in Mumbai: India Guide](/blog/vitalik-buterin-devcon-8-keynote-india-guide) — the 3 November 2026 keynote where Buterin first warned "not your silicon, not your life", and the open, secure and verifiable technology vision behind it.
- [How to Store Crypto Safely: The Complete Safety Playbook for Indians](/blog/how-to-store-crypto-safely-india-beginners-guide/) — the full storage playbook behind the chip debate: hot vs cold wallets, seed phrase safety and a simple system for storing crypto safely in India.

## The Bottom Line

Vitalik Buterin says hardware wallets cannot be trusted until their chips are open to inspection — "Not your silicon, not your keys." Ledger's CTO says openness alone proves nothing, because you cannot verify that the chip you bought matches the design that was published. Both are describing real risks: tampering at the factory, and tampering after the sale. The implant incidents of October and November 2026 proved the second risk is real; Buterin's post is a warning to build for the first before it happens too. For Indian users, the action is the same whichever side wins the argument: buy from an official source, generate a fresh recovery phrase on the device, keep that phrase offline and private, and treat any wallet with an unknown history as untrusted. The chip debate will take years. Your security starts with the next device you buy.
