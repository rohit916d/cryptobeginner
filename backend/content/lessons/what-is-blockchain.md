---
title: What is Blockchain?
level: beginner
order: 2
summary: Blockchain is the engine that powers most cryptocurrencies. Here's how it really works, in plain English.
read_time: 6
author: Crypto Beginner Editorial Team
created_at: 2026-08-03T10:00:00+00:00
---

## Imagine a Shared Notebook

In the previous lesson, you learned that Bitcoin runs on something called a blockchain. Now it is time to understand that engine properly — because nearly everything in crypto, from Ethereum to NFTs, is built on some version of it.

Forget the word "blockchain" for a moment. Imagine instead a **notebook shared by millions of people** around the world. Every time something happens — someone sends coins to a friend — the event is written on a new page. Then every person updates their own copy of the notebook to match. Once a page is written, **it can never be erased or changed**. If anyone tries to alter an old page, the millions of other copies instantly expose the lie.

That notebook is the blockchain. Each "page" is a **block**. The pages are bound together in order, forming a **chain** — hence the name.

## Why Not Just Use a Normal Database?

Your bank also keeps a ledger of transactions. The difference is *who controls it*. Your bank's ledger sits on the bank's private servers. The bank can correct it, freeze it, or — in theory — tamper with it, and you would never know. You trust the bank because it is regulated and reputable.

A blockchain flips this around. The ledger is **public and replicated**: instead of one company guarding one copy, thousands of independent computers (called **nodes**) each keep a full copy. Changes are only accepted when the network collectively agrees they are valid. You don't trust any single party — you trust the mathematics and the shared rules everyone follows.

This is why blockchain is sometimes called a **"trustless"** system. That doesn't mean it is untrustworthy — it means you don't *need* to trust anyone for it to work.

## The Three Properties That Make Blockchain Special

### 1. Decentralized

No single person, company, or government controls the network. In India, your bank account can be frozen by court order and your UPI has downtime during maintenance. A decentralized blockchain has no headquarters to raid, no CEO to arrest, and no off-switch. It runs as long as enough nodes stay online.

### 2. Transparent

Anyone can inspect every entry, ever. You can open a **block explorer** (a search engine for blockchains) right now and look at any Bitcoin transaction from 2009. This radical transparency is what lets strangers transact without a referee.

### 3. Tamper-Proof (Immutable)

Each new block contains a cryptographic fingerprint — a **hash** — of the previous block, linking them like a chain. Change one letter in an old block and its fingerprint changes, breaking every link after it. To rewrite history, an attacker would have to redo enormous amounts of work *and* convince the majority of the network to accept it. On large networks like Bitcoin's, this is practically impossible.

**Try it yourself (mentally):** Write the number 7 on paper. Now imagine every subsequent page of your notebook begins with "the last page ended with 7". If someone erases your 7 and writes 9, every later page is suddenly wrong. Finding the forgery takes seconds. Cryptographic hashes work the same way, except the "numbers" are so long that forging one is computationally hopeless.

## Blocks, Transactions, and Confirmation — Step by Step

Let's walk through what happens when Priya in Mumbai sends Bitcoin to Arjun in Delhi:

1. **Transaction created.** Priya's wallet builds a transaction: "send 0.01 BTC from Priya's address to Arjun's address," signed with her private key.
2. **Broadcast.** The transaction is announced to the network, where it waits in a queue called the **mempool** (short for memory pool).
3. **Bundled into a block.** Miners pick transactions from the mempool and bundle them into a candidate block.
4. **Consensus.** Miners compete to solve a difficult puzzle; the winner's block is added to the chain. (You will learn how this puzzle works in the lesson on mining.)
5. **Confirmed.** Once the block is added, the transaction has one **confirmation**. Each block added after it deepens its security. Exchanges typically wait for a few confirmations before crediting your account.

On Bitcoin, a new block arrives roughly every **10 minutes**. That rhythm is not an accident — the network automatically adjusts the puzzle difficulty to keep it steady.

## How Do Thousands of Strangers Agree? (Consensus)

If everyone holds their own copy of the notebook, how do they agree on which new page is legitimate? Through a **consensus mechanism** — a set of rules for reaching agreement without a boss.

The two most common mechanisms:

- **Proof of Work (PoW):** Used by Bitcoin. Miners compete to solve hard puzzles using electricity and computing power. Solving one proves real-world effort was spent, which makes attacks expensive. Think of it as a security system paid for in electricity.
- **Proof of Stake (PoS):** Used by Ethereum and many newer networks. Instead of burning electricity, participants lock up ("stake") their own coins as collateral. If they validate honestly, they earn rewards; if they cheat, they lose their stake. Think of it as a security system paid for in deposits.

Both approaches answer the same question: *what makes it costly to lie?* As long as lying costs more than it earns, the notebook stays honest.

## Blockchain Beyond Money

Blockchains are not only for currency. The same shared-notebook idea powers:

- **Smart contracts and decentralized apps (dApps)** — programs that run on a blockchain exactly as written, with no company operating them. (We will cover these in the intermediate track.)
- **Supply-chain tracking** — a mango's journey from a farm in Maharashtra to a store can be recorded step by step, verifiable by anyone.
- **Digital identity and records** — land titles, certificates, and credentials that no single office can quietly alter.
- **NFTs** — unique digital items whose ownership history is publicly recorded.

Some of these uses are genuinely transformative; others are overhyped experiments. The blockchain is a tool — powerful in the right hands, pointless in the wrong ones. Part of your crypto education is learning to tell the difference.

## What Blockchain Cannot Do

A good student also learns the limits:

- **It cannot fix bad data.** If someone records a lie on the blockchain, the lie becomes permanent. "Garbage in, garbage forever."
- **It is slow compared to normal databases.** Your bank processes thousands of transactions per second; Bitcoin manages about seven. Decentralization has a real cost.
- **It is not free.** As you will learn in the gas fees lesson, using a blockchain costs transaction fees.
- **It does not guarantee privacy.** Everything is public by default on most blockchains.

## In One Sentence

A blockchain is a public, append-only ledger — a notebook that millions of people share, nobody controls, and nobody can erase — which lets strangers coordinate and transact without trusting any central authority.

In the next lesson, we will zoom back out: now that you understand the engine, we will look at the many different kinds of **cryptocurrency** that run on engines like it — and how they differ from one another.

*This lesson is for education only and is not financial advice.*
