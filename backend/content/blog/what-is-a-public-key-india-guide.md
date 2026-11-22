---
title: "What Is a Public Key? How Crypto Addresses Are Made"
category: "Wallets"
excerpt: "A public key is the middle link between your private key and your wallet address. Learn how it works, why it is safe to share, and how addresses are made."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/wallets.jpg"
created_at: "2026-11-22T13:22:05+00:00"
faqs:
  - question: "Is it safe to share my public key?"
    answer: "Yes. A public key is designed to be shared. It lets anyone verify that a transaction was signed by you, but it cannot be used to spend your crypto or to work backwards to your private key. Only your private key — or your seed phrase — can move funds, so keep those completely secret. If anyone asks for your private key to 'verify' your public key, it is a scam."
  - question: "Is my public key the same as my wallet address?"
    answer: "No, they are two different things. Your public key is a long cryptographic number derived from your private key. Your wallet address is a shorter, user-friendly version made by hashing your public key and adding a checksum. Think of the public key as your full name on a document and the address as a short account number people actually use to send you funds."
  - question: "Can someone steal my crypto if they know my public key?"
    answer: "No. Knowing a public key only lets someone verify signatures and derive your wallet address, which is public information anyway. Stealing crypto requires your private key or seed phrase. That is exactly why the system works: you can share the public half freely while the private half stays locked away with you."
---

# What Is a Public Key? How Crypto Addresses Are Made

Every time you receive crypto, three pieces of cryptography work together behind the scenes: your private key, your public key, and your wallet address. Most beginners only ever see the address — the short string they copy and paste. The public key sits quietly in the middle, doing the most important job in the whole system: proving you own your crypto without ever revealing your secret.

Understanding the public key is worth the effort, because it clears up the confusion that scammers exploit. Once you know what each key does, you will never fall for a fake "verify your public key" website, and you will never panic when someone asks for your wallet address.

> **Educational content only.** This is not financial advice. Your public key is safe to share — your private key never is.

## What Is a Public Key?

A public key is a long string of numbers and letters that is mathematically linked to your private key. It is one half of a key pair: the private key stays secret, and the public key can be shown to anyone.

The word "public" is doing real work here. The entire design of crypto relies on the idea that the public key can travel openly across the internet while the private key never leaves your device. Anyone who has your public key can check that a transaction really came from you, but they cannot spend your crypto, and they cannot work backwards to find your private key.

A useful analogy is a padlock and its key. Your private key is the physical key you keep in your pocket. Your public key is the padlock itself — you can hand out copies of the padlock to anyone, and anyone can use it to lock a box that only your key can open. In crypto, the roles are similar: the public key lets the network verify your signatures, and only the private key can create them.

Public keys look intimidating. A Bitcoin public key is a very long string of characters, and an Ethereum public key is 128 hexadecimal characters long. You almost never need to read one by eye — your wallet software handles it silently. What matters is understanding what it does, not memorising what it looks like.

## The Three-Step Chain: Private Key, Public Key, Address

Crypto wallets are built on a one-way chain. Each step is easy to go forward and practically impossible to reverse:

1. **Private key** — a secret random number, created when your wallet is set up. Only you should ever see it.
2. **Public key** — derived from the private key using a special kind of maths called elliptic curve cryptography. Anyone can see it.
3. **Wallet address** — made by running the public key through a hashing function and adding a checksum, so it becomes shorter and easier to share.

The one-way nature is the whole point. Your wallet can turn your private key into a public key, and your public key into an address, but nobody can run the chain backwards. Seeing your address tells an attacker nothing about your public key's private partner, and seeing your public key tells them nothing about your private key.

| Piece | Who can see it? | What does it do? |
| --- | --- | --- |
| Private key | Only you | Signs transactions and proves ownership |
| Public key | Anyone | Lets the network verify your signatures |
| Wallet address | Anyone | Receives funds; the string people send crypto to |
| Seed phrase | Only you | The backup that recreates your private key |

If you remember only one row of that table, make it the first: the private key is the only secret. Everything else in the chain is designed to be public.

## How Is a Public Key Made?

When you create a wallet, the software first generates a private key — a random 256-bit number. "Random" matters here: the wallet uses your device's secure random-number generator, which is why a properly created wallet is effectively impossible to guess.

Next, the wallet applies elliptic curve cryptography to that private key. Without going into the maths, the idea is simple: a private key is a number, and the public key is a point on a mathematical curve calculated from that number. The calculation works in one direction only. It is easy to multiply the point by the number, but reversing the calculation — finding the number from the point — would take longer than the age of the universe with today's computers.

This is why your public key is safe to share. It is not a scrambled version of your private key that a clever attacker can unscramble. It is a one-way derivation: the maths guarantees that knowing the result reveals nothing useful about the input.

One detail you may come across is that public keys can be "compressed" or "uncompressed." Both forms represent the same key; the compressed form is simply shorter, which saves space on the blockchain. Modern wallets use the compressed form by default, and you never need to choose between them.

## Public Key vs Wallet Address: What Is the Difference?

Beginners often use "public key" and "wallet address" as if they mean the same thing. They do not, and the difference matters.

Your public key is a cryptographic value used for verification. Your wallet address is a shorter, friendlier identifier derived from your public key so that people can send you funds without copying a huge string.

Here is how the address is made, in plain steps:

1. **Start with the public key** — the long cryptographic value from the previous step.
2. **Hash it** — run it through a hashing function, which squeezes it into a fixed-length fingerprint. Bitcoin uses two rounds of hashing; Ethereum uses one.
3. **Add a checksum** — a few extra characters are attached so that wallets can detect typos. If you mistype one character of an address, the checksum fails and the wallet warns you instead of sending your funds into the void.
4. **Encode it** — the result is written in a readable format. Bitcoin addresses start with `1`, `3`, or `bc1`; Ethereum addresses start with `0x`.

Because addresses are just hashed public keys, one wallet can safely generate many addresses — one for each transaction, if you like — and they all trace back to the same keys. That is why your wallet can show you a fresh receiving address every time you ask, and why reusing the same address for everything is unnecessary.

The practical rule is simple: share your address freely, and never worry about sharing it. The address is public by design.

## What Public Keys Actually Do: Verifying Signatures

The public key's real job appears when you send crypto. Here is what happens in plain language:

1. You tell your wallet to send an amount to someone's address.
2. Your wallet uses your **private key** to create a digital signature on that transaction — a kind of unforgeable stamp that says "the owner of these funds approved this."
3. The network uses your **public key** to check the signature. The check confirms two things: the transaction was approved by the owner of the funds, and nobody has tampered with it since it was signed.
4. If the check passes, the transaction is added to the blockchain. If it fails, the network rejects it.

Notice what the network never sees: your private key. It only sees the signature and the public key, and the maths of the signature proves the private key was involved without ever exposing it. That is the elegant trick at the heart of crypto — proof of ownership without revealing the secret.

This is also why "signing a message" is a real thing in crypto. If someone asks you to prove you own a wallet — for example, to recover an account — your wallet can sign a short message with your private key. Anyone can verify the signature with your public key, confirming ownership without you handing over any secret. A genuine request will always work this way. A request that asks for the private key itself is a scam, every single time.

## Where Do You Actually See a Public Key?

In everyday use, almost never — and that is fine. Your wallet hides the public key and shows you the address instead. But there are a few places where public keys appear:

- **Block explorers** — when you look up a transaction, the explorer may show the public key that signed it. This is normal; the public key is public information.
- **Watch-only wallets** — these import a public key (or an extended public key, called an xpub) so you can track balances without any ability to spend. The xpub is a special public key that can generate all the addresses of a wallet, which is why it should be shared carefully — it reveals your full transaction history, even though it cannot move funds.
- **Hardware wallets** — when you connect a hardware wallet to an app, the app reads the public key from the device so it can show your balance. The private key never leaves the device.

If a website, message, or support agent ever asks you to paste your public key somewhere to "verify" or "unlock" your wallet, stop. Legitimate tools never need you to paste a key into a random form. Real verification happens through signed messages, not through pasting secrets into a website.

## Public Key Scams Indians Should Know

Because public keys sound technical, scammers use the term to confuse people. Watch for these patterns:

- **"Verify your public key" pages** — a fake exchange or support page asks you to enter your seed phrase or private key to "verify" your public key. Verification never requires your private key. Close the page.
- **Fake wallet apps** — a cloned wallet app asks for your private key during setup, claiming it needs to "generate your public key." A real wallet generates keys itself and never asks you to type a private key in.
- **Telegram "support"** — someone in a group offers to fix a stuck transaction if you share your public key and private key together. They only need the private key to drain your wallet. Real support never asks for it.
- **xpub phishing** — someone asks for your extended public key (xpub) to "help you track your portfolio." An xpub cannot spend funds, but it exposes your entire wallet history and balances. Share it only with tools you genuinely trust.

The defence is always the same: your private key and seed phrase stay with you, offline, and out of every form, chat, and screenshot. Your public key and address can go anywhere.

## Public Keys and India: What Beginners Should Know

In India, most beginners first meet public keys without realising it. When you buy crypto on an Indian exchange such as CoinDCX, WazirX, or ZebPay, the exchange holds the private keys and you log in with a password. You never see a public key at all, because the exchange manages the cryptography for you.

That changes when you move to self-custody — withdrawing crypto to a wallet where you hold the keys yourself. Then the chain becomes yours: your wallet generates the private key, derives the public key, and shows you the address. This is full ownership, and it comes with full responsibility. There is no password reset and no support team that can recover a lost private key.

A few India-specific habits make the learning curve safer:

- **Start with a small test transfer.** Before moving a large amount from an exchange to your own wallet, send a tiny amount first, confirm it arrives, and only then send the rest.
- **Keep records.** Note the date, amount, and purpose of each transfer. When you later sell, your records make filing easier.
- **Remember the tax angle.** Moving crypto between your own wallets is not the same as selling it, but any sale or swap is a taxable transfer under Indian rules.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## A 5-Minute Public Key Check

You do not need to understand elliptic curves to use public keys safely. This short routine covers what matters:

1. **Know the chain** — private key (secret) → public key (shareable) → address (shareable). If you can say that in one breath, you understand the system.
2. **Check the address, not the key** — when receiving crypto, verify the full address character by character, and use a small test transfer for large amounts.
3. **Never paste a private key** — no website, app, or support agent ever needs it. A request for it is a scam, whatever reason is given.
4. **Treat your xpub carefully** — it cannot spend funds, but it reveals your whole wallet history. Share it only with tools you trust.
5. **Back up the seed phrase offline** — your seed phrase recreates your private key. Write it on paper, store it somewhere safe, and never photograph it or store it in the cloud.

## The Bottom Line

A public key is the bridge between your secret and the world. It is derived from your private key by one-way maths, it lets the network verify your signatures without ever seeing your secret, and it is the raw material from which your wallet address is made.

You will rarely see a public key in daily use, and you never need to memorise one. What you do need is the mental model: the private key signs, the public key verifies, and the address receives. Hold that picture in your head, keep the private half secret, and the rest of crypto's key system falls into place.

If you want to go deeper, your next reads are the private key guide and the wallet address guide — together, the three posts cover the complete key system every crypto owner should understand.
