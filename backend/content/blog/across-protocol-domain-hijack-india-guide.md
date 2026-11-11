---
title: "Across Domain Hijack: $350K Stolen in Phishing Attack"
category: "Security"
excerpt: "Across Protocol's website was hijacked on 10 November via Namecheap — a fake page drained about $350,000. What happened, and how Indian users can stay safe."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-11T12:47:00+00:00"
faqs:
  - question: "What happened to Across Protocol on 10 November 2026?"
    answer: "At about 18:45 UTC on 10 November 2026, an attacker took control of Across Protocol's web address, across.to, through what Across described as a social engineering attack on its domain registrar, Namecheap. The real website was replaced with a phishing page that tricked visitors into signing token approvals. Across was alerted within 15 minutes, warned users to stay away, and regained control of the domain at about 01:16 UTC on 11 November, with help from Namecheap's founder. The bridge's smart contracts were not compromised — the attack targeted only the website."
  - question: "How did the attackers steal about $350,000?"
    answer: "The phishing page asked visitors to sign token approvals — EIP-2612 permit signatures, Permit2 authorisations and direct token approvals — which gave the attacker's contracts permission to move funds out of their wallets. Security firm GoPlus estimated losses of about $350,000 across six blockchains: Ethereum, Arbitrum, Base, BNB Chain, Ink and Plasma. Across has not confirmed that figure or the number of affected users, and has promised a full post-mortem. It has also said all affected users will be made whole."
  - question: "I visited across.to on 10 November. What should I do now?"
    answer: "If you connected a wallet, signed anything or sent a transaction on across.to on 10 November, treat your approvals as compromised. Check which token approvals you granted that day and revoke them — type revoke.cash into your browser yourself rather than clicking any revocation link sent by message or email. Message Across through its verified X account (@AcrossProtocol) with your transaction details if you lost funds. In India, any sale of crypto is a taxable transfer: gains are taxed at a flat 30% plus a 4% cess (31.2% in total), with no set-off of losses against other income, and sales attract 1% TDS. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

Across Protocol, one of the largest crypto bridges, lost control of its own website on 10 November 2026 — not to a smart-contract bug, but to a social engineering attack on the company that registers its web address. For a few hours, anyone who visited across.to saw a convincing fake version of the site, and anyone who signed what it asked them to sign may have handed an attacker permission to drain their wallet. Security firm GoPlus estimated losses of about $350,000 across six blockchains. Across says the domain is back under its control, all systems are working normally, and every affected user will be made whole. This guide explains what happened, how a domain hijack works, why it is different from the hacks that have dominated November, and what Indian crypto users should check tonight.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a published security incident; it does not recommend buying, selling or holding any asset, and it does not predict where prices will go.

## What Happened: A Domain Hijack at 18:45 UTC on 10 November

The facts, as reported on 10–11 November by Cointelegraph, crypto.news, CryptoTimes, defiprime and The Block, are:

- At about **18:45 UTC on 10 November 2026** (00:15 IST on 11 November), an attacker gained control of Across Protocol's domain, **across.to**, through what Across described as a **social engineering attack on Namecheap**, the company that registers the domain.
- The attacker replaced the real website with a **phishing page** designed to look like the genuine Across interface, and redirected visitors to it.
- Across said it was **alerted within 15 minutes** and immediately worked to shut the site down. At about **19:05 UTC**, it posted its first public warning on X: do not visit the app, do not connect a wallet, and do not sign any transaction or approval there until further notice.
- Security response group **SEAL911** flagged across.to as a phishing site with major wallet providers, triggering browser and in-wallet warnings. **Cloudflare** first marked the domain as at risk and later removed its DNS records, preventing visitors from reaching the fake page.
- In a disclosure published at about **22:13 UTC**, Across said that "despite our best efforts, @Namecheap has been unresponsive" — it could not yet secure the domain enough to restore service.
- At about **01:16 UTC on 11 November** (06:46 IST), Across announced the domain was **back under its control and all systems were working normally**. The team credited **Namecheap founder Richard Kirkendall** with helping to secure the account, and said an investigation had been opened.
- Across's statement was clear: **"All affected users will be made whole. We'll share a full post-mortem in the coming days."** No reimbursement timetable and no confirmed loss figure have been published yet.
- **API users and third-party integrations were not affected.** The attack targeted the web front end, not the bridge's smart contracts or its underlying infrastructure.

Across is not a small project. According to The Block, citing DefiLlama data, it ranked **third by 30-day bridge transfer volume** at the time of the attack, having processed approximately **$5.9 billion in bridge transfers in the prior 30 days**. A bridge that large going dark — and worse, being impersonated — is a serious event for the whole ecosystem, because bridges are the plumbing that moves assets between blockchains.

## How the Attack Worked: Social Engineering, Not a Smart-Contract Bug

To understand this incident, it helps to separate two things that beginners often confuse: the blockchain, and the website that sits in front of it.

**A domain name is rented, not owned.** Every website address is registered through a registrar — in this case, Namecheap. The registrar holds the account that controls where the address points. Whoever controls that account controls what visitors see when they type the address into a browser.

**Social engineering means tricking a person, not breaking code.** Across says the attacker gained control through a social engineering attack on Namecheap — in other words, by deceiving someone at or around the registrar into handing over access, rather than by exploiting a software vulnerability. The exact method has not been published; Across has promised a full post-mortem, and Namecheap has not commented publicly on how it happened. What matters for users is the result: the attacker could point across.to at a server of their own choosing.

**DNS is the phone book of the internet.** When you type across.to, your browser asks the Domain Name System where to go. The attacker changed that answer. Visitors who typed the correct address — the real address, spelled correctly — still landed on the fake site. That is what makes a domain hijack so dangerous: the usual advice to "check the URL" does not help, because the URL itself was correct.

**The phishing page harvested approvals, not passwords.** The fake site asked visitors to sign token approvals: EIP-2612 permit signatures, Permit2 authorisations, and direct token approvals. These are standard crypto mechanisms that let an app move your tokens on your behalf — a bridge needs your approval to move your tokens across chains. But an approval given to an attacker's contract is a blank cheque: once signed, the attacker can drain the approved tokens from your wallet at any time, even after the fake site is taken down. That is why Across's recovery guidance stresses revoking approvals, not just closing the tab.

This is an important distinction from most of the hacks covered on this site. The Binance theft of 29 October began with a compromised laptop and a fake job interview. The Initia exploit of 10 November used compromised cloud and infrastructure keys. The SignalPlus incident began with a fake Teams invite. In each of those cases, the attacker got inside the project's own systems. Here, the project's own systems were never breached. The bridge's contracts were untouched, no private keys were stolen, and no code was exploited. The attacker simply took over the signpost pointing to the front door — and then stood at the door, collecting approvals from everyone who walked in.

## The $350,000 Question: What GoPlus Estimated — and What Across Has Not Confirmed

The loss figure in this story needs careful handling, because it comes from one third-party estimate, not from the victim.

Security platform **GoPlus estimated total user losses at approximately $350,000** (about ₹3.3 crore) across **six blockchain networks: Ethereum, Arbitrum, Base, BNB Chain, Ink and Plasma**. The losses, according to GoPlus and crypto.news, came through malicious token approvals and permit signatures signed on the phishing page.

But **Across has not independently confirmed that figure**, and has not disclosed the total value of funds lost or the exact number of affected users. The $350,000 should therefore be treated as an estimate — the best available number, from a reputable security firm, but not a confirmed total. The real figure could be higher or lower, and it will only become clear when Across publishes its post-mortem or a confirmed accounting.

That caveat matters for two reasons. First, the attack window was short: Across was alerted within 15 minutes, warned users within 20 minutes, and Cloudflare removed the fake site's DNS records the same evening. A short window limits how many people can be caught. Second, approvals are not the same as immediate theft: an attacker who collects approvals can drain wallets later, at their leisure, so the full damage may take time to surface. Users who signed something on 10 November should not assume they are safe just because nothing has left their wallet yet — an approval granted that day can still be used.

The other number worth noting is what was **not** lost. Across confirmed that its API users and third-party integrations were unaffected, because those routes do not go through the hijacked website. The bridge's contracts held their funds. The damage was confined to people who visited the website during the hijack window and signed approvals there. That is a smaller blast radius than a protocol exploit — but for the people caught in it, the loss is just as real.

## Why This Attack Is Different From the Other November Hacks

November 2026 has been the worst month for crypto security in years, and this site has covered much of it: the $6.3 billion Binance theft, the Initia chain halt, the SignalPlus API-key revocations, the CERT-In warning about AI-assisted attackers, the DarkSword iPhone wallet drain, and the Gnosis Pay card-data breach. The Across hijack belongs in that sequence, but it teaches a different lesson from the rest.

**Most hacks attack the code. This one attacked the trust layer around it.** Smart contracts can be audited, and Across's contracts were fine. But a bridge is more than its contracts: it is a website, a domain registration, a registrar account, and a set of human processes. The attacker found the weakest link in that chain and pulled it. No audit of Across's code would have caught a social engineering attack on Namecheap.

**The registrar is a single point of failure for every crypto project.** Every exchange, bridge and wallet app depends on a registrar to keep its address pointing at the right server. If a registrar's support process can be socially engineered, then any project's front door can be swapped — and the project's own security team may not be able to get it back quickly, as Across discovered when it found Namecheap unresponsive for hours. The fact that the domain was ultimately restored with the personal help of Namecheap's founder, rather than through a routine support process, says something about how fragile that recovery path is.

**Frontend attacks punish users who do everything right.** The victims here did not click a suspicious link in a random message. They typed the correct address — or followed a bookmark — and arrived at a site that looked exactly like the real one, because in one important sense it was the real address. The only defences available to them were to notice that something was off, to refuse to sign an approval they did not expect, or to check the project's official X account before connecting. That is a thin line of defence, and it is why Across's own warning — issued within 20 minutes — mattered so much.

**The recovery is a promise, not yet a fact.** Across has said all affected users will be made whole, and that is a strong commitment. But no reimbursement plan, no claim process and no confirmed loss figure have been published yet. The post-mortem, promised in the coming days, is where the details should appear: how the registrar was compromised, how many users were affected, how much was lost, and how reimbursement will work. Until then, the promise should be treated as a commitment to watch, not as money already returned.

## What This Means for Indian Crypto Users

Across is a bridge, and bridges matter to Indian users for a practical reason: moving crypto between blockchains is how many Indians use decentralised apps, cheaper networks and new chains. You might hold USDT on Ethereum and want it on Base, or move funds to a chain where a particular app lives. Every one of those moves passes through a bridge's website — and through the approval step that this attack exploited.

Four lessons apply directly:

**Approvals are the most dangerous thing you sign.** A token approval is not a payment; it is permission for someone else to move your tokens later. Many users sign approvals casually, because legitimate apps ask for them constantly. The Across attack shows why that habit is risky: an approval signed on a hijacked site is indistinguishable, to the blockchain, from an approval signed on the real one. Before signing any approval, check what token it covers, what amount it allows, and which contract it authorises. If the amount is unlimited and you do not recognise the contract, stop.

**A correct URL is not proof of a safe site.** This is the hardest lesson in the whole incident. Every safety guide, including this site's, tells users to check the address bar. In a domain hijack, the address bar shows the right address and the wrong site. The only reliable cross-checks are the project's official communication channels — its verified X account, its status page, or a second source confirming the site is safe — and the simple habit of pausing before signing anything you were not expecting to sign.

**Revoking approvals is a skill worth learning before you need it.** If you used across.to on 10 November, you should check and revoke any approvals granted that day. The tool Across itself points users to is revoke.cash — type the address into your browser yourself, never click a revocation link sent to you by message or email, because fake revocation links are the classic second wave after a phishing attack. Connect your wallet, look for approvals granted on 10 November to contracts you do not recognise, and revoke them. It costs a small network fee per revocation, and it closes the door the attacker opened.

**Selling in a panic has a tax cost in India.** News of a hack often triggers a rush to sell or move assets. In India, selling crypto is a taxable transfer: gains are taxed at a flat 30% plus a 4% cess (31.2% in total), with no set-off of losses against other income, and sales attract 1% TDS on the sale value. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. That tax treatment applies whether you sell in a panic after a hack headline or as part of a planned decision — and it is worth understanding before acting on any market news. Moving assets between your own wallets is not a sale; selling them for rupees or another crypto is.

## A Safety Checklist After a Domain Hijack

Whether or not you use Across, this incident is a good prompt to tighten a few habits:

1. **If you visited across.to on 10 November, check your approvals today.** Connect to revoke.cash (typed by hand, not clicked from a message) and review every approval granted on 10 November. Revoke anything you do not recognise, and anything granted to an unknown contract.
2. **If you lost funds, report it through official channels only.** Message Across through its verified X account (@AcrossProtocol) with your transaction details, as the team has asked. Do not trust anyone who messages you first offering to help recover funds — recovery scams follow every hack.
3. **Never sign an approval you were not expecting.** A bridge needs an approval to move your tokens, but it should ask for it at the moment you initiate a transfer, for the token and amount you chose. An approval request that appears on arrival, before you have done anything, is a red flag.
4. **Bookmark the sites you use, and check official channels before connecting after an incident.** Bookmarks do not protect against a domain hijack — the bookmark points at the same hijacked address — but they do protect against lookalike domains. And a 30-second check of a project's verified X account before connecting can catch a warning like Across's, issued within 20 minutes of the attack.
5. **Keep long-term holdings in self-custody.** Funds in your own wallet, under your own keys, cannot be taken by a hijacked website unless you sign an approval handing them over. A hardware wallet adds a physical confirmation step that makes blind signing much harder. Keep your seed phrase offline, on paper or metal, and never type it into any website.
6. **Treat unlimited approvals as a risk, not a convenience.** Many apps ask for unlimited approval so you do not have to approve again next time. Where possible, approve only the amount you need for the transaction in front of you, and revoke approvals you no longer use. It takes a minute, and it limits what any single bad signature can cost you.
7. **Watch for the post-mortem.** Across has promised a detailed write-up. When it appears, it should explain how the registrar was compromised and what has changed to prevent a repeat. That is the document that will show whether the lesson has actually been learned — by Across, and by the industry.

## The Bottom Line

On 10 November 2026, Across Protocol lost control of its own website for several hours after a social engineering attack on its domain registrar, Namecheap. A phishing page at the real address, across.to, tricked visitors into signing token approvals, and security firm GoPlus estimated about $350,000 in losses across six blockchains — a figure Across has not yet confirmed. The bridge's smart contracts were untouched, API users were unaffected, and the domain was restored in the early hours of 11 November with help from Namecheap's founder. Across has promised that all affected users will be made whole and that a full post-mortem is coming. For Indian users, the lesson is not about Across specifically but about the weak point this attack exposed: a crypto project is only as safe as the domain registration, the registrar's processes, and the approvals its users sign. Check your approvals if you visited the site on 10 November, revoke anything suspicious, and remember that a correct URL is no longer, on its own, proof of a safe site.

## Keep Learning

- [What is a Crypto Bridge? Interoperability Explained](/blog/what-is-a-crypto-bridge-interoperability-explained) — how bridges and escrow accounts move assets between blockchains, and why the front end is as important as the contracts behind it.
- [Crypto Hacks in 2026: Why AI-Powered Attacks Are Surging](/blog/crypto-hacks-2026-ai-attacks-india-guide) — the wider 2026 pattern behind this incident: key compromises, social engineering and why infrastructure, not just code, is now the target.
- [What Is Self-Custody? Taking Crypto Off Exchanges Safely](/blog/what-is-self-custody-india-guide) — how to store your own coins safely, protect your seed phrase, and decide when self-custody makes sense for you.
