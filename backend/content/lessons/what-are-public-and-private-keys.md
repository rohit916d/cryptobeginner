---
title: What are Public and Private Keys?
level: beginner
order: 8
summary: "Learn the fundamental cryptography behind crypto wallets: how public keys act as your address and private keys act as your digital signature."
read_time: 6
author: Crypto Beginner Editorial Team
created_at: 2026-08-06T10:00:00+00:00
---

When you start exploring cryptocurrency, you will keep hearing two terms: **public key** and **private key**. They sound technical, but they are just the digital security tools that let you own and manage crypto — no bank, no manager, no password-reset email.

In the previous lessons you learned what wallets are and what a public address looks like. This lesson explains the cryptography working underneath: the hidden pair of keys that every wallet quietly manages for you.

## The Mailbox Analogy

Imagine a secure mailbox sitting on a busy sidewalk.

- **The mailbox slot (your public key):** Anyone can walk up and drop a letter inside through the slot. They need to know the address to find the mailbox, but they cannot see what is inside and cannot take anything out.
- **The mailbox key (your private key):** Only you hold this physical key. With it, you can open the locked door, read the contents, and send mail out.

In the crypto world, your **public key** is mathematically turned into your **public address** — the thing you share when you want to receive funds. It is safe to share. Your **private key** is what gives you ownership and control over the funds at that address. **Never share your private key with anyone.**

> **Educational note:** This lesson is for learning purposes only and is not financial advice. Security practices described here are general best practices.

## How the Two Keys Work Together

Public and private keys are a **mathematically linked pair**. They are generated together by your wallet software using advanced cryptography, and they have a special property: data locked with one key can only be unlocked by the other.

Here is what happens step by step when someone sends you crypto:

1. Your friend's wallet looks up your **public address** (derived from your public key).
2. Their wallet records a transaction on the blockchain assigning a specific amount to your address.
3. Those funds now sit at your address, visible to anyone browsing the blockchain.

But nothing physical was ever "sent" anywhere. Crypto never travels like a parcel. A transaction is simply a record saying "these coins now belong to this address."

Now suppose you want to spend those funds. The network will not take your word for it — you must **prove** you are the rightful owner. You do this by using your **private key** to digitally "sign" the transaction. Other computers on the network check your digital signature against your public address. The mathematics guarantees that the signature could only have been created by the private key matching that address — **without ever revealing the private key itself**.

This is the clever part: you prove ownership while keeping your secret completely hidden.

## Why Digital Signatures Are Hard to Fake

A digital signature is not a name written in cursive. It is a long string of characters produced by feeding the transaction details and your private key into a mathematical function. Three properties make it trustworthy:

- **Unforgeable:** Only someone holding the private key can produce a valid signature. No one can imitate it.
- **Tamper-evident:** If even one digit of the transaction is changed after signing — say someone tries to change the amount from ₹1,000 worth of crypto to ₹1,00,000 — the signature becomes invalid and the network rejects it.
- **Verifiable by anyone:** Every computer on the network can confirm the signature is genuine using only the public key. Nobody needs to see the private key.

Because of these properties, strangers all over the world can transact with each other without a trusted middleman verifying identities. The maths does the trusting.

## How Wallets Manage Your Keys

You never see the raw keys in daily use — your wallet handles them for you. Here is what is happening behind the scenes:

1. When you create a wallet, the software generates a random private key (a very long random number) and its matching public key.
2. The wallet hides the private key behind your app password, PIN, fingerprint, or face ID.
3. As a backup, the wallet shows you a **seed phrase** — typically 12 or 24 ordinary words in a specific order. This phrase encodes the information needed to recreate your private keys on any device.

Think of the seed phrase as the master key to every lock in your house. Anyone who has it can regenerate your private keys and take control of your funds from anywhere in the world.

### Try it yourself: mental exercise

Open your wallet app and look at the receive screen. You will see a long string of characters or a QR code — that is your public address, and it is fine to share. Now ask yourself: **where is your seed phrase written down?** If the answer is "I took a screenshot" or "I am not sure," that is a security gap worth fixing (the Security track of this course will walk you through proper backups).

## Common Beginner Mistakes

1. **Treating the private key like a password.** A bank password can be reset by calling customer support. A private key cannot. If you lose it — and have no seed phrase backup — the funds are gone forever.
2. **Storing the seed phrase digitally.** Screenshots, notes apps, emails, and cloud drives can all be hacked or synced to compromised devices. Paper or metal backups stored offline are far safer.
3. **Sharing the private key "for verification."** No legitimate support team, exchange, or app will ever ask for your private key or seed phrase. Anyone who does is running a scam.
4. **Copying the wrong part.** Beginners sometimes accidentally paste their private key where an address was expected, or type their seed phrase into a phishing website. Slow down at this step — double-check which field you are filling.

## India-Specific Context

India's crypto tax rules treat private-key ownership as personal responsibility. Because there is no central authority to appeal to, the government taxes crypto gains at a **flat 30%** (plus applicable surcharge and cess) and deducts **1% TDS** on transfers — but none of these systems can recover funds lost to a leaked private key or a lost seed phrase. Indian exchanges like CoinDCX and CoinSwitch hold custody of keys for you (convenient, but you trust the exchange), while self-custody wallets give you the keys directly (more control, more responsibility). Understanding which model you are using matters before you hold any meaningful amount.

## What to Learn Next

Now that you understand keys and addresses, the next lesson covers **crypto mining** — the process that secures the Bitcoin network and creates new coins. You will see exactly where your signed transactions end up and who confirms them.

## Key Takeaways

- A **public key** (turned into your public address) is safe to share — it only lets people send funds to you.
- A **private key** proves ownership and must never be shared with anyone, ever.
- Digital signatures let you prove you own funds without revealing your secret.
- Your **seed phrase** is the master backup of your private keys — protect it like cash.
- There is no password reset in crypto: losing keys without a backup means losing access permanently.
