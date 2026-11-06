---
title: "SignalPlus Hack: API Keys Revoked — India Safety Guide"
category: "Security"
excerpt: "Binance and Deribit revoked every SignalPlus API key after a hack that began with a fake Teams invite. What happened, and what Indian users should do now."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-06T00:45:00+00:00"
faqs:
  - question: "What happened in the SignalPlus hack?"
    answer: "SignalPlus, a crypto derivatives trading platform, said it was attacked in the early hours of 4 November 2026 after a compromised Telegram account belonging to a third-party vendor contact was used to send a fake Microsoft Teams meeting invitation to one of its engineers. The engineer's computer was compromised, and the attacker later used those access privileges to target SignalPlus's internal network. SignalPlus said losses were under $82,000 and promised full reimbursement to affected users. Binance and Deribit revoked all SignalPlus-linked API keys on 5 November as a precaution, while saying their own systems were unaffected."
  - question: "Are my funds safe if I never used SignalPlus?"
    answer: "If you never connected SignalPlus — or any other third-party tool — to your exchange account, this incident does not directly affect you, because no API key links your account to the affected platform. Binance and Deribit both said their own systems were unaffected and user funds remain safe. The risk in this incident was concentrated on users who had granted SignalPlus API access to their exchange accounts, and especially on accounts without IP whitelisting. It is still a good reminder for every user to review which third-party apps and API keys are connected to their accounts and revoke anything unused."
  - question: "Should Indian users revoke their SignalPlus API keys on other exchanges?"
    answer: "Yes — that is exactly what Binance founder Changpeng Zhao advised on 5 November 2026: if you use SignalPlus on any other exchange platform, revoke those API keys too. SignalPlus also connects to exchanges such as Bybit, OKX, Coincall and Gate.io, and Binance and Deribit can only revoke the keys on their own platforms. Check the API management page of every exchange you use, remove any SignalPlus key, and do not reconnect it until SignalPlus confirms the issue is fully resolved. When you do reconnect any tool in future, enable IP whitelisting and withdrawal restrictions, and give the key only the permissions it actually needs."
---

On 5 November 2026, Binance and Deribit both revoked every API key linked to SignalPlus, a crypto derivatives trading platform, after the company reported a potential security issue. The move came one week after the Binance security incident of 29 October, in which attackers drained roughly $6.3 billion from the exchange's hot wallets, and one day after India's CERT-In warned that an AI-assisted hacking group is actively targeting crypto exchanges. But this time the breach was not at an exchange at all. It was at a third-party tool that sits between traders and exchanges — and that is precisely why it matters for Indian users who connect bots, dashboards and trading terminals to their accounts.

SignalPlus has since confirmed it was hacked, and put the losses at under $82,000, with full reimbursement promised to affected users. The amount is small next to the Binance incident, but the lesson is large: your crypto is only as safe as the weakest tool you have given access to your account.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security incident; it does not recommend any exchange, trading tool or trade, and it does not predict prices.

## What Happened, Step by Step

The sequence of events, as described in SignalPlus's own incident statement and reported by Reuters, Cointelegraph, crypto.news and other outlets on 5 November, runs like this.

First, a Telegram account belonging to a contact at a third-party technology vendor was compromised. The attacker used that account to send a fake Microsoft Teams meeting invitation to a SignalPlus engineer. The invitation looked like it came from a known contact, and opening it compromised the engineer's computer.

Second, the attacker stayed quiet. According to SignalPlus, the intruder remained dormant on the compromised computer before using the engineer's access privileges to attack the company's internal network in the early hours of Wednesday, 4 November.

Third, SignalPlus said it detected suspicious activity early on 4 November and contained the intrusion, then contacted its exchange partners to disable the API credentials connected to customer accounts. The company placed all of its services into maintenance mode while staff reviewed security and coordinated the removal of exchange API connections.

Fourth, on Thursday 5 November, Binance and Deribit acted. Binance said it had "proactively removed all API keys linked to SignalPlus as an immediate precautionary measure" and that its "own systems are unaffected" and "user funds remain safe." Deribit said it had revoked every customer API key connected to SignalPlus and that its investigation found no indication its systems or data had been affected.

Finally, SignalPlus disclosed the scale: losses of less than $82,000, with full reimbursement for all affected users. The company said it expects to bring its services fully back online over the next few days, with restoration happening in phases after a full review, necessary patches and confirmation that operations can resume safely.

One detail in SignalPlus's own statement deserves attention. The company acknowledged that it had not made IP whitelisting mandatory for exchange API key access, and described that omission as a gap in its safeguards. In other words, at least some of the affected accounts had API keys that could be used from any internet address, with no restriction on where requests could come from. That is the detail that turns a small incident into a useful warning for every crypto user.

## What Is an API Key, and Why Does It Matter?

For a beginner, the phrase "API key" can sound technical and abstract. In plain terms, an API key is a password that lets one piece of software talk to your exchange account on your behalf. When you connect a trading bot, a portfolio dashboard, a tax tool or a terminal like SignalPlus to Binance or Deribit, you create an API key on the exchange and hand it to the tool. From then on, the tool can place orders, read your balances and monitor your positions — within the permissions you granted when you created the key.

That convenience is also the risk. An API key is a copy of your access. If the tool holding it is breached, the attacker can potentially use the key the same way the tool does. The key does not usually let an attacker withdraw funds to an arbitrary address — most exchanges let you disable withdrawals on API keys, and you should — but it can let them trade, read your positions and, in the worst case, drain value through bad trades on illiquid markets.

SignalPlus is a Hong Kong-based platform, formed in 2021, that offers options trading dashboards and infrastructure for Deribit, Binance, Bybit, OKX and Coincall. Its users are mainly professional and institutional traders who manage positions across several exchanges through a single screen. That is why the revocations mattered beyond the two exchanges that acted: Binance and Deribit can only revoke keys on their own platforms. A user who connected SignalPlus to Bybit or OKX still has a live key there unless they remove it themselves — which is why Binance founder Changpeng Zhao posted on 5 November: "If you use SignalPlus for any other exchange platform, it's time to revoke all your API keys."

## Why the Exchanges Revoked the Keys

It is worth understanding what the revocations were — and what they were not.

They were a precaution, not a finding that Binance or Deribit had been breached. Both exchanges said their own systems and data were unaffected. Deribit's investigation found no indication of compromise, and Binance said user funds remain safe. The keys were removed because the third-party platform holding them had been breached, and the exchanges could not be sure which keys the attacker might have seen or used.

They were also a hard stop on automation. Deribit warned that trading, monitoring and automation through SignalPlus had stopped working for its customers following the revocations. SignalPlus itself said that disabling an API key does not mean the associated account information or assets were compromised, and that customers can still use the exchanges' official platforms to view and manage their accounts, positions and open orders while SignalPlus remains suspended. In other words, the exchanges cut the bridge, and users were told to walk across on foot — log in directly, check positions and open orders, and manage everything by hand until SignalPlus gives the all-clear.

Binance co-founder Yi He added a wider warning, urging all third-party platforms integrated with Binance to review their security controls, monitor for unusual activity and contact the exchange immediately if they detect any concern. The message is that the threat extends beyond any single company: any tool with API access to exchange accounts is part of the security picture.

## How This Differs From the Binance Hack

Because the two incidents happened a week apart and both involve Binance, it is easy to blur them together. They are different in almost every way that matters.

| Feature | Binance incident (29 Oct 2026) | SignalPlus incident (4–5 Nov 2026) |
|---|---|---|
| What was breached | Binance's own hot wallets | A third-party trading platform |
| How it started | Fake job interview and tampered download, per Binance's report | Fake Teams invite via a compromised vendor Telegram account |
| Amount involved | Roughly $6.3 billion | Under $82,000 |
| Exchange systems affected | Yes — the exchange itself | No — Binance and Deribit said their systems were unaffected |
| User action needed | Wait for phased withdrawal reopening | Revoke SignalPlus API keys on every exchange, check positions directly |
| Reimbursement | SAFU fund and company funds | SignalPlus promised full reimbursement |

The comparison is useful because it shows the two directions from which exchange accounts can be attacked. The Binance incident was a direct attack on the exchange. The SignalPlus incident was an indirect attack through a tool the exchange's users trusted. The second kind is harder to see coming, because the exchange itself did nothing wrong — the weak point was a vendor's Telegram account and an engineer's meeting invite.

## What Indian Users Should Do Now

If you trade on any exchange, Indian or offshore, the SignalPlus incident is a practical checklist, not just a news story. Here is what to do, in order.

**1. Check whether you ever connected SignalPlus.** Look in the API management section of every exchange account you hold — Binance, Deribit, Bybit, OKX, CoinDCX, WazirX, ZebPay and any other. If you find a SignalPlus key, revoke it now. Do not wait for the platform to come back online, and do not reconnect it until SignalPlus confirms the issue is fully resolved.

**2. Review every other API key you have created.** Most users accumulate keys over time: a tax tool here, a portfolio tracker there, a bot tried once and forgotten. Each one is a live copy of your access. Revoke anything you do not actively use, and anything you do not recognise. If you cannot remember what a key was for, that is itself a reason to remove it.

**3. Check your positions and open orders directly.** Binance advised affected users to sign in directly and inspect open orders and active positions. Do that on the exchange's own website or app — not through any third-party tool — and confirm nothing unexpected has been placed or closed.

**4. Enable IP whitelisting on any key you keep.** IP whitelisting restricts an API key so it can only be used from specific internet addresses — your home connection, your server, your office. SignalPlus acknowledged that not requiring this was a gap in its safeguards. On Binance and most major exchanges, whitelisting is a setting on the API key itself. If a tool does not support it, or you cannot set it, think hard about whether that tool should hold a key at all.

**5. Disable withdrawals on every API key.** An API key almost never needs to move funds off the exchange. In the API settings, turn off withdrawal permission and, where the exchange offers it, turn on a withdrawal address whitelist so funds can only go to addresses you have approved. This single setting is the difference between an attacker being able to trade in your account and being able to empty it.

**6. Give each key only the permissions it needs.** A portfolio tracker needs read access, not trading access. A bot needs trading access, not withdrawal access. When you create a key, tick only the boxes the tool actually requires, and nothing else. The fewer permissions a stolen key carries, the less damage it can do.

**7. Never share a seed phrase or a private key with any tool.** No legitimate trading platform, custody service or support agent will ever ask for your seed phrase. If a message — even one that borrows the language of the SignalPlus news — asks you to share a seed phrase, connect your wallet to an unfamiliar site, or send funds to an address to "activate" a service, it is a scam. The SignalPlus incident will produce phishing attempts that copy its wording; treat every unexpected message about it with suspicion.

## The Bigger Pattern: Supply-Chain Attacks on Crypto

Security researchers have a name for this kind of incident: a supply-chain attack. The attacker does not go after the fortress directly. Instead, they compromise a smaller supplier, vendor or tool that the fortress trusts, and ride that trust inside.

The Binance hack itself followed a similar logic — a fake job interview and a tampered download, then lateral movement through a compromised internal AI tool, before the wallet signing service was reached. The SignalPlus attack used a compromised vendor contact and a fake meeting invite. India's CERT-In advisory of 4 November, CIAD-2026-0058, warned that an AI-assisted actor called CRAFTY FALCON is actively targeting crypto exchanges and stealing wallet keys. Different incidents, same pattern: the attacker finds the human or the third party, not the vault.

For Indian users, the practical implication is that exchange security is no longer just about the exchange. It is about every app, bot, dashboard and vendor that touches your account. The Binance incident taught users to ask who holds their coins. The SignalPlus incident adds a second question: who else holds a key to your account?

## India Context: Exchanges, Rules and Tax

For Indian users, a few India-specific points are worth keeping in mind while this story develops.

First, the exchanges involved — Binance and Deribit — are offshore platforms. Indian users who trade on them should remember that India's rules still apply: crypto gains in India are taxed at 30%, with 1% TDS on transfers. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. Using an offshore exchange or an offshore tool does not change the tax treatment of a gain, and it can add reporting complexity, so keep records of every transaction, including any trades placed through a third-party tool.

Second, the regulatory picture is moving. India's FIU-IND registration requirements apply to exchanges serving Indian users, and the RBI and FIU have been examining offshore crypto-linked products in recent weeks. A third-party tool that connects to an offshore exchange sits outside the direct reach of Indian regulators, which means the protections available to you if something goes wrong are the platform's own terms, not an Indian consumer-protection framework. That is a reason to be extra careful about which tools you connect, not a reason to assume the risk is small.

Third, the scams that follow a security incident are often aimed at Indian users specifically. Fake support accounts, lookalike Telegram groups and "recovery" offers appear within hours of a headline, and they frequently target users in India because of the size of the retail market here. If you receive a message claiming to be from SignalPlus, Binance or Deribit about this incident, go to the exchange's official website or app yourself — do not click a link in the message.

## How to Read the Next Headline

If you follow this story further, four checkpoints will tell you more than any single headline.

Check whether SignalPlus restores its services on the schedule it promised — phased restoration over the next few days after a full review and patches. A clean, dated restoration with a published post-mortem would be a good sign. A delay with no explanation would be a reason for caution.

Check whether losses stay at the disclosed figure. SignalPlus put the total under $82,000 and promised full reimbursement. If that figure grows, or if reimbursement is slow, the incident is bigger than first reported.

Check whether other exchanges or tools report similar issues. Yi He's warning to third-party platforms suggests Binance expects the problem to be wider than one company. If other trading terminals or tools report incidents in the same week, that points to a campaign rather than a one-off.

And check whether IP whitelisting becomes standard. The most useful outcome of this incident would be for every trading platform to require it, and for every exchange to make it the default for new API keys. If that happens, a small hack will have produced a lasting improvement in how the whole industry handles delegated access.

## The Bottom Line

The SignalPlus incident is small in money and large in meaning. A fake meeting invitation, sent from a compromised vendor's Telegram account, led to a breach that forced two of the world's largest crypto exchanges to revoke every key connected to the platform. Losses were under $82,000, reimbursement has been promised, and no exchange system was breached. But the episode shows how a third-party tool can become the weak point in an otherwise secure account — and how a single missing safeguard, IP whitelisting, can turn a contained incident into a warning for an entire industry.

For Indian users, the action is simple and immediate. Revoke any SignalPlus keys on every exchange you use. Review every other API key you hold. Turn off withdrawals on keys, turn on IP whitelisting, and give each key only the permissions it needs. And remember the rule that every security story of the past two weeks has pointed to: know who holds your coins, know who holds a key to your account, and keep both lists as short as you can.

## Keep Learning

- [What Is the SAFU Fund? Binance Safety Net Explained](/blog/what-is-safu-fund-binance-safety-net-india-guide)
- [What is a Crypto Hot Wallet vs Cold Wallet?](/blog/what-is-a-crypto-hot-wallet-vs-cold-wallet)
- [How to Store Crypto Safely: The Complete Safety Playbook for Indians](/blog/how-to-store-crypto-safely-india-beginners-guide)
