---
title: "Initia Hacked Again: $615K Lost as Blockchain Halts"
category: "Security"
excerpt: "Initia halted its blockchain on 10 November after a second hack in 18 days drained about $615,000. What happened, why the token surged, and the India angle."
read_time: 10
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-11T09:46:15+00:00"
faqs:
  - question: "What happened to Initia on 10 November 2026?"
    answer: "Initia halted its layer-1 blockchain at 06:18 UTC on 10 November 2026 after finding unauthorised transfers from escrow accounts that hold assets bridged to its rollups. The team said compromised rollup infrastructure keys let an attacker fabricate IBC transfers, moving about $605,000 in USDC and $10,000 in other tokens off the chain through Noble — roughly $615,000 in total by its preliminary estimate. Security firm CertiK counted about $636,000 across 16 transfers. Neither figure is final, and the investigation is ongoing."
  - question: "Why did the INIT token price rise after the hack?"
    answer: "INIT rose more than 60% in the 24 hours after the halt, according to CoinGecko data cited by crypto.news, with some trackers recording gains of up to 80%. A token can rise after bad news for many reasons — short covering, speculative buying, low liquidity on a small token, or traders betting on a recovery — and none of them means the network is safe. A price move is a market reaction, not a verdict on the security of the chain, and it says nothing about whether affected users will be made whole."
  - question: "I hold crypto on a small blockchain or rollup in India. What should I check?"
    answer: "Check whether your assets sit in an escrow or bridge contract rather than in your own wallet, and whether the project has published a clear status update. In India, any sale of crypto is a taxable transfer: gains are taxed at a flat 30% plus a 4% cess (31.2% in total), with no set-off of losses against other income, and sales attract 1% TDS. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. The safest habit is keeping long-term holdings in self-custody, with your seed phrase stored offline and never shared."
---

Initia, a layer-1 blockchain backed by Binance Labs, halted its network on 10 November 2026 after a second security breach in less than three weeks drained about $615,000 from escrow accounts. The chain stopped producing blocks at 06:18 UTC, in coordination with its validators, after the team found unauthorised transfers from accounts that hold assets bridged to Initia's rollups. The attacker, according to Initia, used compromised rollup infrastructure keys to fabricate transfers between blockchains. And in the strangest twist of the story, Initia's own token, INIT, surged more than 60% in the 24 hours after the halt. This guide explains what happened, how the two hacks are connected, why a token can pump after a hack, and what Indian crypto users should take away from it.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a published security incident; it does not recommend buying, selling or holding any asset, and it does not predict where prices will go.

## What Happened: A Chain Halted at 06:18 UTC on 10 November

The facts, as reported on 10 November by Gadgets 360, crypto.news, Protos, cryptonews.net and other outlets, are:

- Initia halted its layer-1 blockchain at **06:18 UTC on 10 November 2026**, in coordination with its validators, as a protective measure.
- The team said it had identified **unauthorised transfers from escrow accounts** on the Initia layer-1 that hold assets bridged to several rollups in its ecosystem.
- The attacker used **compromised rollup infrastructure keys** to fabricate Inter-Blockchain Communication (IBC) transfers — the messages blockchains use to move assets between each other.
- About **$605,000 in USDC and $10,000 in other tokens** left the network through Noble, a blockchain best known as a gateway for USDC — roughly **$615,000 in total** (about ₹5.7 crore) by Initia's preliminary estimate.
- Security firm **CertiK counted about $636,000 in suspicious outflows across 16 successful IBC transfers** to Noble — a higher figure than Initia's estimate. Neither number is final, and the investigation is ongoing.
- Initia said **most of the remaining assets moved out of the escrow accounts are still on its own halted chain**, which means they may be recoverable through validator coordination, since nothing can move while block production is stopped.
- The team has **not announced when block production will resume** or whether affected users will be reimbursed, and it has **not confirmed whether the November incident involved the same attacker** as the October one.

Initia's own words, posted on X on 10 November, were: "The Initia L1 was halted at 06:18 UTC on November 10 in coordination with validators as a protective measure. We took this step after identifying unauthorized transfers from the escrow accounts on the Initia L1 that hold assets bridged to several rollups." The project said it is working with security specialists, validators and cryptocurrency exchanges to determine the incident's full scope.

## The Second Hack in 18 Days — and a $3.3 Million Total

The November incident is not Initia's first. On **23 October 2026**, the network suffered an exploit that cost it about **$2.7 million**, after a flaw in the software engine that runs Initia allowed an attacker to create fake balances and cash out. The network was halted then too, and it only **resumed operations on 2 November** — just over a week before the new attack — after upgrades that included an independently audited MoveVM patch and the isolation of the attacker's remaining forged balances.

Add the two incidents together and the picture is stark. Protos, reporting on 10 November, put the combined losses at **more than $3.3 million in three weeks** — and noted that this is **more than the chain's remaining total value locked (TVL)**. TVL is the total value of assets deposited in a blockchain's apps and contracts; when cumulative hack losses exceed it, the project has effectively lost more to attackers than users currently have locked in the system. That is a measure of how small Initia's remaining ecosystem is, and how serious the damage has been relative to its size.

Initia is not an obscure project. Protos notes that its backers include **Binance Labs, Delphi Ventures and HackVC**, and the chain describes itself as a base layer and central liquidity hub for "interwoven rollups" — smaller blockchains built on top of it. The point is not that backing prevents hacks. It is that even well-funded, well-connected projects can be breached twice in under three weeks when the weak point is not the main chain's code but the keys that control its infrastructure.

## How the Attack Worked: Fabricated IBC Transfers from Escrow Accounts

To understand the November hack, it helps to know three pieces of the machinery involved.

**Escrow accounts.** When assets move from Initia's main chain to one of its rollups, they are held in escrow accounts — locked wallets on the main chain that store the assets while a matching representation circulates on the rollup. The escrow account is the vault. If someone can move assets out of it without authorisation, the assets backing the rollup's tokens are gone.

**IBC transfers.** The Inter-Blockchain Communication protocol is the standard way Cosmos-ecosystem blockchains talk to each other. A transfer is a message: one chain says "release this much of that asset to this address on the other chain," and the receiving chain acts on it. The system works because the messages are trusted — they are supposed to come only from authorised infrastructure.

**Rollup infrastructure keys.** This is where the November attack struck. Initia says the attacker held compromised rollup infrastructure keys — the credentials that operate the machinery connecting the rollups to the main chain. With those keys, the attacker could **fabricate IBC transfers**: send messages that looked legitimate, instructing the escrow accounts to release assets, when no real user or rollup had requested a transfer at all.

That is an important distinction from the October exploit. The October incident was, by the reporting, a **software flaw** — a bug in the engine that let an attacker mint fake balances. The November incident was, by Initia's own account, a **key compromise** — stolen credentials used to issue fake instructions. Different weakness, same result: unauthorised assets out the door, chain halted, users waiting.

It is also worth noting what the attack was not. Initia has not said that individual users' wallets were drained, and the reporting so far describes the losses as coming from the project's escrow accounts, not from users' personal wallets. That matters for Indian readers who hold INIT or use Initia's rollups: the direct losses reported are the project's bridged assets, not a sweep of user wallets. But the distinction offers limited comfort — if the escrow backing your rollup tokens is drained, the tokens on the rollup may be backed by nothing, and the halt means nothing on the chain can move at all until validators restart it.

## Why Did INIT Surge 60% After a Hack?

The most counter-intuitive fact in this story is the price. While the chain was halted and the team was confirming a second breach, **INIT gained 61.31% over 24 hours**, according to CoinGecko data cited by crypto.news, with trading volume reaching about $84.81 million. Other trackers recorded even bigger moves — Pickaxe reported gains of as much as 80%, with INIT reaching around $0.234. Gadgets 360's headline put it plainly: the network paused after a $615,000 breach "as INIT surges 60 percent."

A token rising after a hack looks absurd, but it is not unprecedented, and it is not a sign that the hack was harmless. Several forces can produce it:

**Short covering.** Traders who had bet on INIT falling buy the token back to close their positions, and that buying pushes the price up. A halt announcement can trigger exactly this kind of forced buying.

**Speculative buying on small tokens.** INIT is a small, thinly traded token. On a small token, even modest buying can move the price by tens of percent. A few large buyers — or traders betting that the halt will be resolved and the price will recover — can create a sharp spike that has little to do with the project's fundamentals.

**The "buy the dip" reflex.** Some traders treat any sharp fall as a buying opportunity, regardless of the cause. After a hack, the price often drops first; buyers step in hoping for a rebound; the rebound itself attracts more buyers. The move feeds on itself.

**Low liquidity and exchange effects.** When a chain halts, deposits and withdrawals of its token can freeze on exchanges, while trading continues. That imbalance — trading open, transfers closed — can distort prices in ways that have nothing to do with value.

None of these explanations means the network is safe, the funds are recoverable, or the project will recover. A price chart is a record of what traders did; it is not a security audit. Beginners should treat a post-hack price surge as a curiosity and a warning about how thin markets behave — not as evidence that the hack does not matter. The only facts that matter for users are whether the chain restarts, whether the escrow shortfall is covered, and whether affected users are reimbursed. As of 10 November, none of those questions had an answer.

## The Bigger Pattern: Infrastructure Keys Are the New Weak Point

The Initia incident fits a pattern that has defined crypto security in 2026. The year's biggest story — the Binance hack of 29 October, which we have covered extensively — began with a compromised laptop and a fake job interview, not with a broken smart contract. The SignalPlus incident in early November began with a fake Teams invite through a compromised vendor's Telegram account. The CERT-In warning of 5 November named an AI-assisted actor targeting crypto exchanges and their wallet keys. And the stolen-SOL laundering we covered on 5 November moved through THORChain after keys and wallets were compromised, not after a protocol bug.

The lesson is consistent: **attackers increasingly go after the keys, credentials and people around a protocol, rather than the protocol's code itself.** Code can be audited; a MoveVM patch can be independently reviewed, as Initia's was after the October exploit. But infrastructure keys — the credentials that operate bridges, rollups, escrow accounts and admin functions — are only as safe as the people and systems that hold them. When they leak, the attacker does not need to find a bug. They can simply issue instructions the system is designed to obey.

For a beginner, the practical translation is simple. When you evaluate a blockchain or an app, the question is not only "is the code audited?" but also "who holds the keys, and what happens if those keys are stolen?" A project that cannot answer the second question clearly — or that holds large escrow balances under a small number of infrastructure keys — carries a risk that no audit can remove.

## What This Means for Indian Crypto Users

Initia is a small chain with a small Indian user base, and the direct impact on most Indian readers is limited. But the incident carries four lessons that apply to anyone in India who holds crypto on smaller chains, rollups or bridges:

**Small chains carry concentrated risk.** A large exchange or a major blockchain can absorb a $615,000 loss. For a small chain, the same amount can exceed its remaining TVL. If you hold assets on a small layer-1 or rollup, understand that the project's ability to make users whole after an incident is far weaker than a large exchange's — and that a halt can freeze your assets indefinitely while the team investigates.

**Bridged assets are only as safe as the escrow.** When you move assets onto a rollup or across a bridge, the originals sit in an escrow account. If that escrow is drained, the tokens you hold on the other side may be backed by nothing. Before using a bridge or a rollup, it is worth checking how the escrow is secured, who holds its keys, and whether the project has published any proof of reserves or security review for it.

**A halt freezes everything, not just the stolen funds.** When Initia stopped block production, nothing on the chain could move — not the stolen assets, but also not legitimate users' transactions. That is the right protective step, and it is also a reminder: assets on a halted chain are inaccessible until validators restart it, and no restart date had been announced as of 10 November.

**Selling has a tax cost in India.** In India, selling crypto is a taxable transfer. Gains are taxed at a flat 30% plus a 4% cess (31.2% in total), with no set-off of losses against other income, and sales attract 1% TDS on the sale value. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. That tax treatment applies whether you sell in a panic after a hack headline or as part of a planned decision — and it is worth understanding before acting on any market news.

## A Safety Checklist for Small-Chain and Rollup Users

If you hold crypto anywhere beyond the largest exchanges and blockchains, this incident is a good prompt to run through a short checklist:

1. **Know where your assets actually sit.** Are they in your own wallet, on an exchange, or locked in a bridge or rollup escrow? If you cannot answer that, you do not know your real risk.
2. **Prefer self-custody for long-term holdings.** A hardware wallet or a properly secured self-custody wallet puts your coins under your own keys, not under a project's infrastructure keys. Keep your seed phrase offline, on paper or metal, and never type it into a website or app.
3. **Check a project's incident history before using it.** Initia's October exploit was public knowledge before the November attack. A project that has been breached once deserves extra scrutiny before you trust it a second time — and a second breach in 18 days is a strong signal to wait for a clear, published fix.
4. **Watch for the official status, not the price.** After an incident, the facts that matter are the team's status updates, the restart date, and any reimbursement plan. The token price will move long before those facts exist, and it can move in either direction for reasons that have nothing to do with your safety.
5. **Treat "backed by big names" as context, not protection.** Binance Labs, Delphi Ventures and HackVC backed Initia. That backing did not prevent two breaches in three weeks. A famous investor list is not a security guarantee.
6. **Be wary of social-media urgency.** After a halt, fake "support" accounts and phishing links multiply. Never click a link promising a refund, a recovery tool or an urgent migration, and never share your seed phrase with anyone claiming to help.

## The Bottom Line

Initia halted its blockchain on 10 November 2026 after attackers used compromised rollup infrastructure keys to fabricate IBC transfers and drain about $615,000 from escrow accounts — the project's second breach in 18 days, taking total losses past $3.3 million, more than the chain's remaining total value locked. The chain stopped at 06:18 UTC, most of the moved assets remain frozen on the halted network, and no restart date or reimbursement plan had been announced. Meanwhile the INIT token surged more than 60%, a reminder that a price move after a hack is a market reaction, not a safety verdict. For Indian users, the lesson is not about Initia specifically but about the pattern it represents: infrastructure keys are now the weak point, bridged assets depend on escrow security, and small chains can be frozen — and emptied — faster than most users expect. Check where your assets actually sit, keep long-term holdings in self-custody, and judge a project by its published fixes and status updates, not by its token price.

## Keep Learning

- [What is a Crypto Bridge? Interoperability Explained](/blog/what-is-a-crypto-bridge-interoperability-explained) — how bridges and escrow accounts move assets between blockchains, and why the escrow is the part that matters most when something goes wrong.
- [Crypto Hacks in 2026: Why AI-Powered Attacks Are Surging](/blog/crypto-hacks-2026-ai-attacks-india-guide) — the wider 2026 pattern behind this incident: key compromises, AI-assisted attacks and why infrastructure, not just code, is now the target.
- [What Is Self-Custody? Taking Crypto Off Exchanges Safely](/blog/what-is-self-custody-india-guide) — how to store your own coins safely, protect your seed phrase, and decide when self-custody makes sense for you.
