---
title: Staking
level: intermediate
order: 2
summary: Staking lets you earn rewards by helping secure a blockchain. Here's how it actually works.
read_time: 6
author: Crypto Beginner Editorial Team
created_at: 2026-08-22T10:00:00+00:00
---
In the mining lesson, you learned how Proof of Work secures networks through raw computing power. This lesson covers the alternative: **Proof of Stake**, where networks are secured by locked-up coins instead of electricity — and where anyone holding those coins can participate through **staking**.

> **Educational note:** This lesson explains how staking works. It is general information only — not investment advice, and not a suggestion to stake anything.

## What is Staking?

**Staking** is the process of locking up cryptocurrency to help validate transactions on a Proof-of-Stake blockchain. In return for helping secure the network, you earn rewards — paid in the network's own tokens.

The savings-account comparison is useful but imperfect. A bank pays you interest from the profits it makes lending your money. A blockchain pays stakers newly created tokens (plus a share of transaction fees) because their locked-up coins are literally what keeps the network honest. Your stake is a security deposit: behave honestly, earn rewards; try to cheat, lose part of your deposit.

## How It Works, Step by Step

1. **You lock (stake) tokens** through a **validator** — a computer that participates in confirming new blocks. You can run your own validator (technically demanding, often requires a large minimum stake) or **delegate** your tokens to someone else's validator (much simpler).
2. **The network selects validators** to confirm new blocks, with selection weighted by how much is staked. More stake means more chances to be selected — but selection also includes randomness so no single validator dominates.
3. **Selected validators confirm blocks** and earn rewards in new tokens plus transaction fees.
4. **Rewards are shared** with the people who delegated to that validator, minus a small commission the validator keeps for running the infrastructure.

When you delegate, your tokens never leave your control in the sense that the validator cannot spend them — but they are locked and subject to the network's rules, including penalties.

## Where Can You Stake?

Many major networks use Proof of Stake. The concept is the same everywhere, though the details differ:

- **Ethereum (ETH)** — the largest staking network; validators secure the chain that powers most DeFi.
- **Solana (SOL)** — known for high-speed transactions, secured by staked SOL.
- **Cardano (ADA)** and **Polkadot (DOT)** — other large networks with their own staking designs.

Indian exchanges also offer "staking" as a one-click feature: you keep coins on the exchange, and the exchange stakes them on your behalf and shares rewards. This is convenient but means trusting the exchange with your assets — the same custody trade-off you learned about in the Beginner track.

### Try it yourself: mental exercise

Imagine two options for the same network: (A) delegate your tokens to a validator yourself, earning the full reward minus a 5% commission, with your tokens locked for two weeks; or (B) use your exchange's one-click staking, earning slightly less, with instant withdrawal but the exchange holding custody. Which risks worry you more — the lock-up, or trusting the exchange? There is no single right answer; noticing the trade-off is the skill.

## Liquid Staking: A Useful Twist

Normal staking locks your tokens — you cannot use them elsewhere while they earn rewards. **Liquid staking** protocols solve this by giving you a receipt token representing your staked position. You can trade or use that receipt token in DeFi while the underlying tokens keep earning staking rewards.

This is clever and adds a whole extra layer of smart-contract risk: now you are trusting both the blockchain's staking mechanism *and* the liquid-staking protocol's code. Several large liquid-staking protocols have operated for years, but the layered risk is real and worth understanding before touching it.

## The Risks, Honestly Stated

- **Lock-up periods.** Staked funds are often locked for days or weeks (unstaking on some networks takes a fixed unbonding period). If prices crash during the lock-up, you cannot sell.
- **Slashing.** If your validator misbehaves — going offline repeatedly or, worse, trying to cheat — the network destroys ("slashes") part of the staked tokens, including yours. Choosing a reliable validator matters.
- **Smart-contract risk.** Liquid staking and exchange staking add code and custodians between you and your tokens. Bugs or insolvency at any layer can cost you.
- **Reward dilution and volatility.** Staking rewards are paid in the network's token. If that token's price falls 40% while you earned 5% in rewards, you are still down overall. Rewards do not protect against price drops.
- **Tax complexity.** In India, staking rewards are taxable income when received, and later selling those reward tokens can trigger the 30% capital-gains tax as well. Two taxable events from one activity — track both.

## Common Beginner Mistakes

1. **Treating the reward rate as guaranteed interest.** Staking rewards vary with network conditions and are paid in a volatile asset. "8% APY" does not mean what 8% means in a bank fixed deposit.
2. **Ignoring the lock-up.** Beginners stake, then panic when they cannot withdraw during a price drop. Always check the unbonding period before you stake.
3. **Delegating to the highest-commission or most obscure validator** without checking its track record. A validator with a history of downtime puts your stake at slashing risk.
4. **Staking through random websites.** Fake "staking platforms" are a classic scam: you deposit tokens, the website shows fake growing rewards, and withdrawals never work. Stake only through your wallet's built-in delegation or reputable exchanges.
5. **Forgetting taxes.** Many beginners discover India's staking tax treatment only at filing time. Record every reward the day you receive it.

## Staking vs. Mining: A Quick Recap

| | Mining (Proof of Work) | Staking (Proof of Stake) |
|---|---|---|
| Secures the network with | Computing power and electricity | Locked-up tokens |
| Anyone can participate? | Only with expensive hardware | Yes — by delegating, with modest amounts |
| Energy use | Very high | Very low |
| Main risk to participants | Hardware and electricity costs | Lock-ups, slashing, price volatility |

## Key Takeaways

- **Staking** means locking tokens to help validate a Proof-of-Stake blockchain, earning token rewards in return.
- You can run a validator or delegate to one; delegation is the realistic path for beginners.
- **Liquid staking** lets you use staked positions elsewhere but adds another layer of smart-contract risk.
- Real risks: lock-up periods, slashing, smart-contract failures, and reward tokens losing value.
- In India, staking rewards are taxable on receipt, and selling them later can be taxed again — keep records.
- General information only. Nothing here is investment advice or a suggestion to stake.
