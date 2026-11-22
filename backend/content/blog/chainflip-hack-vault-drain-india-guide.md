---
title: "Chainflip Hack: $12M Vault Drain Explained — India Guide"
category: "Security"
excerpt: "Chainflip lost about $12 million on 21 November 2026 — with a valid signature, not a broken contract. How it happened, and what Indian users should do."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-11-22T18:50:00+00:00"
faqs:
  - question: "What happened in the Chainflip hack on 21 November 2026?"
    answer: "On 21 November 2026 at 07:10:59 UTC, a single Ethereum transaction emptied Chainflip's Ethereum vault of 520.22 ETH, about 3.25 million USDC and about 758,000 USDT — roughly $4.86 million. Chainflip Labs later said the same incident also took 122.86 BTC from its Bitcoin vaults, worth about $7.3 million at the weekend's Bitcoin price, bringing the total to roughly $12 million. The protocol went into full safe mode, disabling deposits, withdrawals, swaps and quoting, and Chainflip gave the attacker until 18:38 UTC on 23 November 2026 to return 90% of the funds and keep 10% as a white-hat recovery."
  - question: "How was Chainflip drained if the signature was valid?"
    answer: "The withdrawal carried a valid Schnorr signature from the aggregate key that Chainflip's 150 validators share — at least 100 of them must take part to authorise a vault payout — so the vault's checks passed and it paid out. The giveaway was the nonce, the one-time number attached to every signature: instead of the next number in sequence, around 314,569, the attacker's payload carried a 39-digit number. Bitquery found it was the only one of 299,677 signatures accepted since 2023 that broke the running count. Chainflip has not said how the key was used, and the investigation is ongoing."
  - question: "I used Chainflip or hold FLIP — what should I do now?"
    answer: "Do not use Chainflip's swaps, bridge or quoting while the protocol is in full safe mode, and do not try to move funds through it — deposits, withdrawals and swaps are disabled. If you hold FLIP, remember the token fell 30–34% after the news, so check your own position calmly rather than reacting to headlines. Watch for fake 'recovery' or 'refund' pages and messages: Chainflip will never ask you to connect a wallet or share a seed phrase to claim anything. In India, any loss on crypto cannot be set off against other income and cannot be carried forward, and gains are taxed at a flat 30% with 1% TDS — keep records of every transaction."
---

# Chainflip Hack: $12M Vault Drain Explained — India Guide

A cross-chain swap protocol lost about $12 million in a single transaction on 21 November 2026 — and the most unsettling part is what did not happen. No smart contract was broken. No signature check failed. The vault paid out because the request carried a valid signature from the very key that is supposed to protect it. The only thing wrong was a number that did not fit the sequence — a 39-digit nonce where the next integer should have been. This guide explains what happened in the Chainflip vault drain, how the attacker moved the money in under ten minutes, why the protocol is now frozen in safe mode, and what Indian users should — and should not — do next.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. This guide explains a reported security incident; it does not recommend any token, investment or action, and it does not predict any price movement.

## What Happened: One Transaction, Three Assets, Zero Balance

Chainflip is a decentralised cross-chain swap protocol: users deposit coins into vaults on one chain, and validators pay the other side from the matching vault on the destination chain, with no wrapped tokens in between. On Saturday 21 November 2026, at 07:10:59 UTC, a single Ethereum transaction emptied the protocol's Ethereum vault of everything it held. In block 26,461,896, the vault sent 520.2243399 ETH, 3,249,631.41 USDC and 758,141.33 USDT to a fresh address. The three assets were worth about $4.86 million at the time, with ether near $1,635 at the minute of the drain.

One minute earlier, at 07:09:59 UTC, the wallet that made the call — a brand-new address, `0x78fa4ac2…2db0` — had received its first gas from Tornado Cash, the mixing service that breaks the link between where coins come from and where they go. That wallet's first and only transaction called the vault directly and asked for a batch payment. The recipient, `0x7d14a719…1Eaf`, had no prior balance. In the block before the transaction, the vault held the full amounts; in the block of the transaction, those balances were zero, and the recipient held the matching amounts.

Later the same day, Chainflip Labs said the same incident had also taken 122.86137042 BTC from its Bitcoin vaults. At the weekend's Bitcoin price of roughly $59,500, that is about $7.3 million — bringing the total taken to roughly $12 million across the two legs. The Bitcoin figure is attributed to Chainflip Labs; early reporting on the day had said the vaults on other chains appeared unaffected, and the Bitcoin disclosure came later, so the full picture only emerged over the course of the day.

Security firm Decurity's Defimon Alerts bot flagged the drain at 07:33 UTC, about 22 minutes after it happened, describing it as a compromise of the validator network's aggregate signing key rather than a signature-verification bug. At 09:14 UTC, Chainflip posted that it was aware of a potential exploit affecting its vaults and was putting the protocol into full safe mode: deposits, withdrawals, swaps and quoting disabled. "We're investigating and will share updates here as we learn more," the post said. The protocol has around $13.3 million in total value locked, according to DeFiLlama data cited by CoinDesk — so the drain took a very large share of what the protocol held.

## The Valid Signature: Why the Vault Paid Out

The detail that makes this incident different from most bridge and vault hacks is that nothing in the vault's own checks failed. Chainflip's vaults pay out only when a request carries a valid signature from the aggregate key shared by its validators. Under the protocol's FROST threshold scheme, up to 150 validators form the authority set, and at least 100 of them must take part to produce the aggregate signature that can move funds. The current key lives in a KeyManager contract and rotates every few days.

The attacker's transaction called the vault's `transferBatch` function, gated by `KeyManager.consumeKeyNonce`. The Schnorr signature on the request verified against the live on-chain aggregate key — so the vault paid, exactly as it is designed to do. As Bitquery put it in its investigation, the signature checked out, but its number did not fit.

Every Chainflip signature carries a nonce — a one-time number that the KeyManager records so an old payload cannot be replayed. Normally each nonce is the next integer in sequence. The count stood at 314,568 just before the drain and 314,569 just after. The attacker's payload did not use the next integer. It carried a 39-digit number: 190262553000735942938746936035352881278. Bitquery reviewed every signature the KeyManager has accepted since 2023 — 299,677 of them — and found that the drain was the only one that broke the running count.

That is the fingerprint of the incident, and it is also its biggest unanswered question. A valid signature from a shared key, combined with a nonce that no legitimate signer would produce, points to someone having obtained use of the key — or of the signing process — rather than having found a bug in the vault's code. Chainflip has not said how the key was used, and the investigation is ongoing. The key last rotated on 18 November at 21:53 UTC, about two and a half days before the exploit. About one hour and 42 minutes after the drain, at 08:53 UTC, the validators switched to a new key — 13 hours before the next regular change — and the network has signed nothing on Ethereum since.

## Under Ten Minutes: From Vault to Tornado Cash

The second striking feature of the incident is speed. Within about nine minutes of the drain, the attacker had swapped the 3,249,631.41 USDC and 758,141.33 USDT for about 2,909 ETH and sent nearly all of it to Tornado Cash in 38 separate batches. Security firm AMLBot, cited by The Block, said the laundering was executed with high-speed automation, and noted that the stablecoins moved too fast for USDC issuer Circle and USDT issuer Tether to freeze the tokens — the whole attack took place in under ten minutes.

That speed matters for two reasons. First, it is why the funds are almost certainly gone for good: once coins pass through a mixer, the on-chain trail that investigators use to follow stolen funds is broken, and the window for issuers to freeze stablecoins closed before anyone could act. Second, it is a reminder that the defences around a protocol — key rotation, safe mode, issuer freezes — only help if they act faster than an attacker who has automated every step in advance. The attacker funded a fresh wallet one minute before the drain, called the vault once, converted the stablecoins, and mixed the proceeds, all in the time it takes to make a cup of tea.

The market reacted immediately. Chainflip's FLIP token fell about 30% according to CoinDesk and about 34% according to The Block, with its market capitalisation dropping from about $41.6 million to $27.1 million around the time of publication. That is the market pricing in two things at once: the direct loss, and the harder question of whether users will trust a protocol whose signing key was apparently used against it.

## Safe Mode, the White-Hat Deadline — and the Second Attack in Two Months

With the protocol in full safe mode, deposits, withdrawals, swaps and quoting are disabled. Liquidity providers cannot withdraw until Chainflip exits safe mode, and swaps already in progress are stopped. For users, that means the protocol is effectively frozen: nothing moves in or out while the team investigates.

Chainflip has also set a deadline for the attacker. According to the protocol's own page addressed to the attacker, the person who drained the vaults has until 18:38 UTC on 23 November 2026 to send back 90% of the funds and keep 10% — in which case the whole thing gets filed as a white-hat recovery instead of a theft. The deadline falls in the early hours of 24 November in India. Whether the attacker takes the offer is unknown, and white-hat deadlines of this kind are frequently ignored; the offer exists because the protocol would rather recover most of the money than recover none of it.

This is Chainflip's second major attack in just over two months. In September 2026, a separate exploit took about 736,000 USDT from its Tron vault, caused by a software flaw in how Chainflip processed Tron transaction data. After that incident, validators approved using surplus funds to reimburse liquidity providers. The November attack is different in kind: it targeted the Ethereum vault's cryptographic signing key, not a bug in how transaction data was processed. Two different failure modes in two months is a pattern worth noting, because it suggests the protocol's risk is not confined to one system.

## How This Differs From the Other Bridge Hacks

Cross-chain bridges and vaults have been a recurring target in 2026, and this site has covered several of them. The Chainflip drain is distinct from each in an important way.

The Across Protocol domain hijack, covered here on 11 November, was a social-engineering attack on a domain registrar — the bridge itself was not breached, and the losses came from phishing users who visited a fake site. The Initia hack, also on 11 November, involved compromised rollup infrastructure keys and fabricated transfers from escrow accounts — closer in spirit, but it was a chain halt caused by infrastructure keys, not a valid signature on a live vault. The THORChain halt on 3 November was caused by a one-block reorganisation that returned an extra 10 ETH — a consensus quirk, not a theft. And the CYBER bridge incident reported on 22 November — 5.21 million CYBER tokens minted unbacked on Solana, with Upbit and Bithumb freezing transfers — involved forged bridge messages and an unbacked mint, with about $968,000 in proceeds.

Chainflip stands apart because the vault's own verification passed. There was no fake domain, no reorganisation, no unbacked mint and no code bug to point at. The request was properly signed. That is what makes the incident worrying for anyone who uses cross-chain protocols: the security of a vault is only as strong as the security of the key that signs for it, and when that key is used against the protocol, the vault has no way to know.

## What Indian Users Should Do — and Not Do

If you have used Chainflip, hold FLIP, or hold any crypto in a cross-chain protocol, here is the practical checklist.

**Do not use Chainflip while it is in safe mode.** Deposits, withdrawals, swaps and quoting are disabled. Do not try to move funds through it, and do not attempt to "test" whether it works. Wait for the protocol's own announcement that safe mode has been lifted.

**Do not trust "recovery" or "refund" messages.** Incident announcements reliably spawn fake migration and refund pages built to drain the wallets of holders who follow them. Chainflip will never ask you to connect a wallet, sign a transaction or share a seed phrase to claim anything. Any message that does is a scam. The same applies to fake support accounts on X and Telegram.

**Check your own exposure calmly.** If you hold FLIP, the token fell 30–34% after the news. That is a fact about the market, not a reason to act in a panic. Review your own position, your own records and your own risk tolerance — and remember that this guide is educational, not advice.

**Revoke approvals you no longer need.** If you have given any protocol permission to move your tokens, review those approvals in your wallet and revoke the ones you are not actively using. It is a small habit that limits the damage if a protocol you once trusted is later compromised. The same applies to any bridge or swap service, not only Chainflip.

**Keep records — the tax rules do not change because a protocol was hacked.** In India, gains on transferring virtual digital assets are taxed at a flat 30%, with 1% TDS on transfers, and losses cannot be set off against other income or carried forward. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. If you lost money in this incident, keep every record — transaction hashes, dates, amounts and screenshots — because you will need them for any claim, any tax filing and any future investigation, even though the current rules give no tax relief for the loss.

**Understand what "decentralised" does and does not guarantee.** A protocol can be decentralised in its design — 150 validators, a threshold signature, no single custodian — and still fail if the signing process itself is compromised. Decentralisation spreads trust; it does not remove it. When you use a cross-chain protocol, you are trusting its key management, its validator set and its incident response, not only its code.

## The Bottom Line

On 21 November 2026, one transaction drained Chainflip's Ethereum vault of 520.22 ETH, about 3.25 million USDC and about 758,000 USDT — roughly $4.86 million — and Chainflip Labs later said the same incident also took 122.86 BTC, worth about $7.3 million at the weekend's prices. The signature was valid; the nonce was not. The funds reached Tornado Cash in under ten minutes. The protocol is in full safe mode, FLIP fell by about a third, and the attacker has until 18:38 UTC on 23 November 2026 to return 90% and keep 10% as a white-hat recovery. Chainflip has not said how the key was used, and that unanswered question is the story to watch: until it is answered, the incident is a warning about the one part of a cross-chain protocol that no smart-contract audit can fully protect — the key itself.

## Frequently Asked Questions

### What happened in the Chainflip hack on 21 November 2026?

On 21 November 2026 at 07:10:59 UTC, a single Ethereum transaction emptied Chainflip's Ethereum vault of 520.22 ETH, about 3.25 million USDC and about 758,000 USDT — roughly $4.86 million. Chainflip Labs later said the same incident also took 122.86 BTC from its Bitcoin vaults, worth about $7.3 million at the weekend's Bitcoin price, bringing the total to roughly $12 million. The protocol went into full safe mode, disabling deposits, withdrawals, swaps and quoting, and Chainflip gave the attacker until 18:38 UTC on 23 November 2026 to return 90% of the funds and keep 10% as a white-hat recovery.

### How was Chainflip drained if the signature was valid?

The withdrawal carried a valid Schnorr signature from the aggregate key that Chainflip's 150 validators share — at least 100 of them must take part to authorise a vault payout — so the vault's checks passed and it paid out. The giveaway was the nonce, the one-time number attached to every signature: instead of the next number in sequence, around 314,569, the attacker's payload carried a 39-digit number. Bitquery found it was the only one of 299,677 signatures accepted since 2023 that broke the running count. Chainflip has not said how the key was used, and the investigation is ongoing.

### I used Chainflip or hold FLIP — what should I do now?

Do not use Chainflip's swaps, bridge or quoting while the protocol is in full safe mode, and do not try to move funds through it — deposits, withdrawals and swaps are disabled. If you hold FLIP, remember the token fell 30–34% after the news, so check your own position calmly rather than reacting to headlines. Watch for fake 'recovery' or 'refund' pages and messages: Chainflip will never ask you to connect a wallet or share a seed phrase to claim anything. In India, any loss on crypto cannot be set off against other income and cannot be carried forward, and gains are taxed at a flat 30% with 1% TDS — keep records of every transaction.

## Keep Learning

- [Across Protocol Domain Hijack: Namecheap Attack Explained — India Guide](/blog/across-protocol-domain-hijack-india-guide) — the November domain-hijack attack on a cross-chain bridge, and how phishing sites drained users who visited the fake domain.
- [Initia Hacked Again: $615K Second Breach in 18 Days — India Guide](/blog/initia-hacked-again-615k-blockchain-halt-india-guide) — another November incident where compromised keys let an attacker move funds, and the chain was halted.
- [THORChain Halts Swaps After 10 ETH Refund Bug — India Guide](/blog/thorchain-halts-swaps-10-eth-bug-india-guide) — how a one-block reorganisation froze a cross-chain protocol, and what a halt means for users waiting on swaps.
