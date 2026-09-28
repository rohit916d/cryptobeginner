---
title: What is a Wallet?
level: beginner
order: 4
summary: A crypto wallet doesn't actually 'hold' your coins — it holds your keys. Here's what that means.
read_time: 6
author: Crypto Beginner Editorial Team
created_at: 2026-08-07T10:00:00+00:00
---

## Wallets Hold Keys, Not Coins

Here is the single most important idea in this entire course, so let's say it plainly: **a crypto wallet does not store your coins.** Your coins live on the blockchain — the shared public notebook from the earlier lessons. What the wallet stores are your **private keys**: secret codes that prove you own those coins and let you spend them.

Compare it with your bank. When you open your banking app, you see a balance — but the money isn't "in" your phone. It is an entry in the bank's database, and your login password proves you may move it. A crypto wallet works the same way, except there is no bank: your private key *is* the proof of ownership, and there is no customer support to call if you lose it.

> If someone gets your private key, they get your money. Full stop. There is no reversal, no fraud department, no chargeback.

Understanding this changes how you think about everything else in crypto. "Sending crypto to your wallet" really means "recording on the blockchain that your keys now control those coins." The wallet is just the tool that manages the keys.

## The Three Pieces: Address, Public Key, Private Key

Every wallet gives you three related things. Think of them like a house:

- **Private key** — the master key to the house. A long secret number. Whoever holds it controls everything inside. **Never share it with anyone, ever.**
- **Public key** — derived from the private key, like the house's street address listed in a directory. It is safe to let the network see it.
- **Wallet address** — a shorter, shareable version of the public key. This is what you give people so they can *send* you crypto — like sharing your UPI ID. It looks like a random string of letters and numbers, for example `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`.

Notice the one-way relationship: the private key can generate the public key and address, but no one can work backwards from an address to your private key.

## Types of Wallets

| Type | Examples | Security | Convenience |
|------|----------|----------|-------------|
| Hot wallet (mobile / browser app) | Trust Wallet, MetaMask, Phantom | Medium | High |
| Cold wallet (hardware device) | Ledger, Trezor | Very high | Medium |
| Custodial wallet (exchange account) | CoinDCX, CoinSwitch, Binance | You don't own the keys | Highest |

Let's unpack each one, because beginners constantly mix them up.

### Hot Wallets — Convenient but Exposed

A hot wallet is an app on your phone or a browser extension, connected to the internet. It is free, takes two minutes to set up, and is perfect for learning and small amounts.

The trade-off: because it lives on an internet-connected device, it is exposed to malware, phishing sites, and fake apps. Treat a hot wallet like the cash in your physical wallet — fine for daily spending money, not for your life savings.

### Cold Wallets — Maximum Security

A cold wallet (hardware wallet) is a small physical device that stores your private keys **offline**. Transactions are signed inside the device, so your keys never touch your computer or the internet — even if your laptop is full of viruses, the keys stay safe.

Hardware wallets cost money (typically a few thousand rupees) and are slightly slower to use. They are the right choice once you hold amounts you would genuinely miss. Buy them **only from the official manufacturer** — a second-hand device could be tampered with.

### Custodial Wallets — Someone Else Holds the Keys

When you buy crypto on an Indian exchange like CoinDCX or CoinSwitch and leave it there, you are using a **custodial** wallet: the exchange holds the private keys, not you. Logging into the exchange is like logging into a bank — convenient, with password recovery and support.

The catch is the famous saying: **"Not your keys, not your coins."** If the exchange is hacked, freezes withdrawals, or goes bankrupt — and history has examples like Mt. Gox and FTX — your crypto is at risk, and Indian users of a foreign exchange may have little legal recourse.

The sensible pattern most experienced users follow: **buy on an exchange, then move significant holdings to a wallet you control.** You will learn exactly how exchanges work in the next lesson.

## The Seed Phrase: Your Master Backup

When you create a non-custodial wallet (hot or cold), you receive a **seed phrase** — 12 or 24 ordinary English words in a specific order, something like:

> *candle river mountain ...*

This phrase is the master backup of your entire wallet. From those words, every private key in the wallet can be regenerated. Lose your phone? The seed phrase restores everything on a new device. But the reverse is equally true: **anyone who sees your seed phrase owns your wallet completely.**

### The Golden Rules of Seed Phrases

1. **Write it on paper, with a pen.** Never store it digitally — no screenshots, no notes app, no email to yourself, no cloud drive. Every digital copy is a future hack waiting to happen.
2. **Never share it with anyone.** No support agent, no exchange employee, no "verification bot" will ever legitimately ask for it. Anyone who asks is a scammer — this single rule would prevent most crypto theft in India.
3. **Store copies in two separate safe physical locations.** A fire or flood shouldn't be able to wipe out your only backup. A home safe plus a trusted family member's locker, for example.
4. **Never type it into a website** unless you are deliberately restoring a wallet you trust, on a device you trust.

Beginners lose crypto to seed-phrase mistakes more than to any hacker. Take these rules seriously from day one.

## Your First Wallet: A Sensible Path

- **For learning:** Install a reputable mobile hot wallet and practice with tiny amounts. Get comfortable sending, receiving, and reading addresses.
- **For holding meaningful value:** Invest in a hardware wallet from the official manufacturer, and guard the seed phrase like the title deed to your house.
- **For buying in India:** You will use an exchange account first (KYC required), then withdraw to your own wallet — the next lesson explains why.

## Common Beginner Mistakes

1. **Sending crypto to the wrong address.** Blockchain transactions are irreversible. Always copy-paste addresses, double-check the first and last characters, and send a tiny test amount first.
2. **Storing the seed phrase as a phone screenshot.** This is the most common way beginners get drained. Paper only.
3. **Trusting "support" DMs.** Real support never asks for your seed phrase or private key. Scammers impersonate exchanges on Telegram, X, and WhatsApp daily in India.
4. **Keeping everything on an exchange long-term.** Fine for trading; risky for storage. Exchanges are businesses, not vaults.

Next lesson: **exchanges** — where most Indians actually buy their first crypto, how centralized and decentralized exchanges differ, and how to use them without getting burned.

*This lesson is for education only and is not financial advice.*
