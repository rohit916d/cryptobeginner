---
title: What is Crypto Mining?
level: beginner
order: 9
summary: Discover how crypto mining works, why it secures public networks, and how new digital coins are created without needing heavy technical jargon.
read_time: 6
author: Crypto Beginner Editorial Team
created_at: 2026-08-08T10:00:00+00:00
---

When people hear the word "mining," they picture workers underground with pickaxes, searching for gold or diamonds. Crypto mining happens entirely on computers — but the name fits, because miners also do hard, expensive work to pull something valuable out of the ground. The "ground" is mathematics, and the "gold" is a secure, trustworthy network.

This lesson builds on the previous ones: you have learned what blockchains and keys are. Now you will learn who confirms your transactions and keeps the whole ledger honest — without any bank or government in charge.

> **Educational note:** This guide is for learning only and is not financial advice. It describes how the technology works, not whether you should participate in it.

## Why a Blockchain Needs Miners at All

Imagine a giant public notebook shared across thousands of computers worldwide. Every time someone sends digital coins to someone else, that transfer must be written into the notebook. This is the **blockchain** — a shared, permanent record of every transaction.

But here is the problem: if anyone could write in the notebook whenever they wanted, a fraudster could write fake entries — "Ravi sent me 1,000 coins" — even though Ravi never agreed. So the network needs rules for **who** gets to add new pages, and **how** everyone else verifies those pages are legitimate.

Transactions are grouped into bundles called **blocks**. To add a new block to the permanent history, computers must first solve a puzzle.

## The Guessing Game: Proof of Work

Think of the puzzle as a massive, high-speed guessing game. Each mining computer takes the pending transactions, adds a random number, and runs everything through a mathematical function called a **hash**. The network demands that the result start with a certain number of zeroes.

The catch: you cannot calculate the answer — you can only **guess**. The computer tries billions of random combinations per second until it finds one whose hash has enough leading zeroes. The more powerful the computer, the more guesses per second, and the better its odds.

When a miner's computer finally finds a valid answer, it broadcasts the solution and the new block to the rest of the network. Every other computer can quickly check the work:

1. Is the puzzle solution correct?
2. Are all transactions in the block valid (correct signatures, no double-spending)?

If the checks pass, the block is permanently added to the blockchain. This system is called **Proof of Work** — miners prove they did real computational work to earn the right to add a block.

### Try it yourself: mental exercise

Imagine a lock with a 60-digit combination and no shortcut to find it — you can only guess. At one guess per second, you would never finish in your lifetime. Now picture 10 million people together trying billions of guesses per second. Someone finds it roughly every 10 minutes. That is Bitcoin mining in a nutshell: an army of machines racing to guess first.

## Why Would Anyone Bother? The Rewards

Running powerful mining computers costs real money — hardware, electricity, cooling, maintenance. Why do miners spend it?

The network pays them. A successful miner receives two rewards:

1. **Newly created coins:** The network automatically creates a fixed amount of brand-new cryptocurrency and gives it to the miner who solved the puzzle — this is how new coins enter circulation, with no central bank involved.
2. **Transaction fees:** Every transaction in the block carries a small fee, paid by the sender. These fees go to the miner as a tip for including the transaction.

This reward system is the genius of the design: it pays independent people all over the world to cooperate and keep the system honest. Attacking the network would require outspending all honest miners combined — enormously expensive — while playing by the rules earns steady income. Honesty becomes the profitable strategy.

## What Miners Actually Secure

When miners confirm a block, they lock its transactions into history. To rewrite history and spend the same coins again, an attacker would have to redo all the puzzle-solving work for that block *and* every block after it, faster than the rest of the network combined. With thousands of miners worldwide, that is practically impossible. That is how the ledger becomes trustworthy without a central authority.

## Not All Networks Mine: Proof of Stake

Mining (Proof of Work) famously secures Bitcoin. But it has real costs: massive electricity use and expensive hardware. Many newer networks use an alternative called **Proof of Stake**.

Instead of racing to solve puzzles, participants **lock up (stake)** their existing coins as a security deposit. The network randomly selects stakers to confirm new blocks. If a selected staker tries to cheat, part of their deposit is destroyed as punishment — a mechanism called **slashing**. Honest stakers earn rewards, similar to miners.

Here is a simple comparison:

| | Proof of Work (mining) | Proof of Stake |
|---|---|---|
| Security comes from | Computing power | Locked-up coins |
| Energy use | Very high | Very low |
| Hardware needed | Specialised machines | Ordinary computer |
| Used by | Bitcoin | Ethereum, Solana, Cardano |

Both systems aim at the same goal: a secure, decentralised ledger that nobody controls alone. The Staking lesson in the Intermediate track goes much deeper into how Proof of Stake works in practice.

## Mining in India: What Beginners Should Know

A few India-specific realities are worth knowing:

- **Electricity cost matters.** Indian residential electricity tariffs vary widely by state (roughly ₹5–₹10+ per unit in many cities). Mining profitability depends almost entirely on cheap electricity — at Indian rates, home mining is almost never profitable.
- **Heat and hardware wear.** Mining machines run hot and loud, 24 hours a day. In Indian summers, cooling costs alone can erase any earnings.
- **It is competitive now.** Mining is dominated by large operations with thousands of specialised machines. A regular laptop has effectively zero chance — and would overheat while earning almost nothing.
- **Taxes apply.** Mining rewards count as taxable income in India, and the 30% crypto tax regime applies to gains on those coins. There is no special exemption for miners.

## Common Beginner Mistakes

1. **Downloading "mining apps" for phones.** Most are scams or pay nothing meaningful. Genuine mining requires dedicated hardware.
2. **Cloud-mining contracts.** Websites that sell you "mining power" for a fee have a long history of fraud. Many are Ponzi schemes.
3. **Ignoring electricity costs.** Beginners calculate gross rewards and forget the power bill — which is usually larger.

## Key Takeaways

- Mining is computers competing to solve puzzles so they can add verified blocks to the blockchain.
- Miners earn rewards in new coins plus transaction fees — this is how networks pay for their own security.
- Mining prevents double-spending and keeps the ledger trustworthy without a central authority.
- Not all networks mine: many now use Proof of Stake instead, which secures the network with locked-up coins rather than raw computing power.
- For beginners in India, mining is a topic to **understand**, not a side hustle to start — the economics no longer favour individuals.
