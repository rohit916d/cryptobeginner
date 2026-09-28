---
title: Smart Contracts
level: intermediate
order: 3
summary: Smart contracts are self-executing agreements written in code. They power most of crypto.
read_time: 6
author: Crypto Beginner Editorial Team
created_at: 2026-08-24T10:00:00+00:00
---

The DeFi lesson introduced smart contracts as the engine behind decentralised finance. This lesson goes under the hood: what smart contracts actually are, what they can and cannot do, and why their strengths and weaknesses shape everything else in crypto.

> **Educational note:** This lesson is about understanding technology. It is not financial advice.

## Agreements That Run Themselves

A **smart contract** is a program stored on a blockchain. It automatically executes when specific conditions are met — no lawyers, no escrow agents, no middlemen, no one to call when something goes wrong.

The classic analogy is a **vending machine**. You put a coin in, press a button, and a snack falls out. The machine does not need a cashier, does not negotiate, and does not make exceptions. It follows its instructions exactly. A smart contract is the same idea, extended to money, ownership, and digital agreements: *if X happens, then do Y — automatically, every time.*

Here is a concrete example. Suppose two friends make a bet on a cricket match. Instead of trusting one person to hold the money, they lock funds into a smart contract programmed with: "when the match ends, check the official result; send the full amount to the winner's address." Once the result is known, the contract pays out by itself. Nobody can change the terms mid-game, and nobody can run away with the money.

## Why "Smart" and Why "Contract"?

The name is slightly misleading, so let us unpack it:

- **"Contract"** because it encodes the terms of an agreement: who gets what, under which conditions. Like a legal contract it defines obligations — but unlike one, it enforces itself.
- **"Smart"** only means it executes without human intervention. Smart contracts are not intelligent: they cannot exercise judgement or understand intent. They do exactly what the code says — including when the code says something the author did not intend.

That last point is the source of most smart-contract disasters, as you will see below.

## What Can Smart Contracts Do?

Once you grasp the vending-machine idea, the possibilities open up:

- **Send tokens automatically** when triggered — salaries, subscriptions, or payouts that execute on schedule.
- **Lock funds** until a date or condition is met — like a digital fixed deposit with no bank.
- **Run decentralised exchanges** — the swapping and lending you read about in the DeFi lesson are all smart contracts under the hood.
- **Manage digital ownership** — NFTs (next lesson) are smart contracts that track who owns a unique token.
- **Distribute royalties automatically** — an artist's contract can send them a cut every time their work is resold, with no record label involved.
- **Govern organisations** — decentralised groups use smart contracts for voting and treasury management, executing decisions automatically.

### Try it yourself: mental exercise

Think of one agreement in your daily life that needs a trusted middleman — a landlord holding a security deposit, or a shopkeeper holding advance payment for an order. Now imagine replacing that middleman with a vending machine that physically cannot cheat. Which parts become safer? Which become riskier? (Hint: what happens in a genuine dispute — say the order arrived damaged? A vending machine cannot hear your complaint.)

## The Hard Limitations

### Code is law — including the bugs

Once deployed, a smart contract is usually **permanent**. There is no edit button and no admin panel to fix a typo. If the code contains a flaw, anyone who finds it can exploit it. Hundreds of millions of dollars have been lost to smart-contract bugs over the years.

### They cannot see the real world

A smart contract lives entirely on the blockchain. It cannot check a cricket score, a stock price, or the weather by itself. It relies on **oracles** — external data feeds that report real-world information onto the chain. If an oracle reports wrong or manipulated data, the contract will happily execute on lies. Oracle manipulation has caused some of the largest DeFi thefts in history.

### They cannot handle ambiguity

Human contracts have phrases like "reasonable effort" and courts to interpret them. Smart contracts have none of that. If a situation was not anticipated in the code, the contract either does nothing or does the wrong thing — and there is no judge to appeal to. This is why the bet example works (a match has a clear winner) but "pay the freelancer if the work is good" does not (good is subjective).

### Gas costs money

Every smart-contract interaction requires a transaction on the blockchain, which means paying **gas fees**. Complex contracts cost more to run. On busy networks, a single interaction can cost more than the transaction is worth — which is why small users often get priced out during network congestion.

## Where Smart Contracts Run

**Ethereum** is the oldest and most-used platform for smart contracts, hosting the majority of DeFi. Major alternatives include **Solana** (very fast, cheap execution), **Polygon** (works alongside Ethereum with lower fees), and **Avalanche** and **BNB Chain** — each with its own trade-offs in speed, cost, and decentralisation.

They are not fully interchangeable: a contract written for Ethereum does not automatically run on Solana. Developers choose platforms based on their needs, and users end up interacting with several.

## How to Evaluate a Smart Contract (as a Non-Programmer)

You do not need to read code to apply basic due diligence:

1. **Has it been audited?** Reputable projects pay independent security firms to review their code and publish the reports. No audit is a red flag; multiple audits from known firms is a good sign — though never a guarantee.
2. **How long has it held value safely?** A contract securing large amounts for years without incident has survived real-world attack attempts. A brand-new contract has survived nothing.
3. **Is the team public?** Anonymous teams are not automatically scams, but they remove accountability. Public teams with reputations at stake behave differently.
4. **Can the code be upgraded or paused?** Some contracts include admin controls that let developers fix bugs — useful, but it also means someone holds power over your funds. Know which model you are dealing with.

## Smart Contracts and India

Indian developers are active builders in the smart-contract space, and Indian users interact with these contracts daily through wallets and DeFi apps. Two things to keep in mind locally: every interaction costs gas (paid in the network's token, which you buy with INR on an exchange first), and every interaction — swaps, claims, deposits — can be a taxable event under India's 30% crypto tax regime. The convenience of "one click" hides a trail of tax-relevant transactions.

## Key Takeaways

- A **smart contract** is code on a blockchain that executes automatically when conditions are met — like a vending machine for agreements.
- They power DeFi, NFTs, automated payments, royalties, and on-chain governance.
- Their core weaknesses: bugs are permanent, they cannot see the real world without oracles, they cannot handle ambiguity, and every interaction costs gas.
- Ethereum is the most common platform; Solana, Polygon, Avalanche, and BNB Chain are major alternatives.
- Non-programmers can still evaluate risk: audits, track record, team transparency, upgrade controls, and independent reviews.
- Educational content only — not financial advice.
