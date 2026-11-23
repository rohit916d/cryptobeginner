---
title: "What Are Bitcoin Ordinals? NFTs on Bitcoin Explained"
category: "Bitcoin"
excerpt: "Bitcoin Ordinals inscribe images and text onto satoshis, creating Bitcoin-native NFTs. Here's how they work, what they cost, and the risks to know."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/bitcoin.jpg"
created_at: "2026-11-15T13:22:13+00:00"
faqs:
  - question: "Are Bitcoin Ordinals the same as NFTs on Ethereum?"
    answer: "They are similar in spirit but different in design. Ethereum NFTs are usually smart-contract tokens that point to an image stored elsewhere, while an Ordinal inscription stores the image or text data itself inside a Bitcoin transaction. That makes Ordinals fully on-chain, but it also means creating one costs Bitcoin network fees and there is no smart-contract marketplace logic built in."
  - question: "Can Indians buy Bitcoin Ordinals?"
    answer: "Technically yes, through Ordinals-compatible wallets and marketplaces, but there is no SEBI-regulated Ordinals marketplace in India. You would typically buy Bitcoin on an FIU-IND registered Indian exchange, move it to a compatible wallet, and then use an Ordinals marketplace. Every sale is taxed at a flat 30% in India, with 1% TDS on transfers above the threshold, so keep full records."
  - question: "Can you lose money with Bitcoin Ordinals?"
    answer: "Yes, in several ways. Inscription fees can be high when the Bitcoin network is busy, Ordinal prices are extremely volatile, and fake collections are common. There is also a real risk of accidentally spending an inscribed satoshi as ordinary Bitcoin if your wallet does not recognise it. Only use money you can afford to lose, and never treat Ordinals as an investment."
---

# What Are Bitcoin Ordinals? NFTs on Bitcoin Explained

For years, Bitcoin was known for one thing: being digital money. NFTs, meanwhile, lived almost entirely on other blockchains like Ethereum and Solana. Then, in early 2023, a new idea called Bitcoin Ordinals changed that picture. Suddenly, images, text, and even small apps could be written directly onto Bitcoin itself — and a whole new market of Bitcoin-native digital collectibles appeared almost overnight.

**Bitcoin Ordinals** are a way of creating NFT-like assets on Bitcoin by "inscribing" data onto individual satoshis, the smallest units of Bitcoin. If you have ever wondered how NFTs can exist on a blockchain that was never designed for them, this guide explains it in plain language — how Ordinals work, how they differ from Ethereum NFTs, what they cost, and the risks Indian beginners should understand before going anywhere near them.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. Ordinals are experimental digital collectibles, not an investment product.

## What Is a Bitcoin Ordinal, Really?

To understand Ordinals, start with the smallest piece of Bitcoin. One bitcoin can be divided into 100 million satoshis, often shortened to "sats". Until recently, every satoshi was treated as identical and interchangeable — one sat was the same as any other, just like one rupee coin is the same as another.

Ordinal theory, created by developer Casey Rodarmor, changes that by giving every satoshi a serial number based on the order in which it was mined. The very first satoshi ever mined is number 0, the next is number 1, and so on. Once satoshis have individual numbers, they can be tracked, identified, and treated as unique — even though they are still just satoshis.

An Ordinal is simply a satoshi that has had extra data attached to it. That data is called an inscription. The inscription can be an image, a piece of text, a short video clip, or even a small piece of code. The inscribed satoshi then becomes a one-of-a-kind digital item that lives on the Bitcoin blockchain, and it can be bought, sold, or held like any other collectible.

Think of it this way: a normal satoshi is like a blank page in a notebook. An inscribed satoshi is the same page, but with a drawing on it. The page itself has not changed — it is still part of the same notebook — but the drawing makes that particular page special and different from all the others.

## How Inscriptions Actually Work

Inscriptions became possible because of two earlier Bitcoin upgrades: SegWit (2017) and Taproot (2021). Together, they created extra space inside Bitcoin transactions for arbitrary data, in a part of the transaction called the witness data. Ordinals use that space to store the inscribed content.

Here is the process in simple steps:

1. **Choose the content.** The creator picks an image, text, or other file to inscribe. Larger files cost more, because Bitcoin charges fees based on how much data a transaction carries.
2. **Create the inscription transaction.** Special wallet software builds a Bitcoin transaction that writes the content into the witness data and attaches it to a specific satoshi.
3. **Pay the fee.** The inscription is confirmed like any other Bitcoin transaction. When the network is busy, fees rise, and inscribing a large image can become expensive.
4. **The Ordinal exists.** Once confirmed, the inscribed satoshi is a permanent part of Bitcoin's history. Anyone can verify it by looking up the transaction on a block explorer.

One important detail: the inscription data lives entirely on Bitcoin. There is no separate server holding the image, and no link that can break later. That is the feature Ordinals supporters talk about most — the art is stored on the blockchain itself, not just pointed to by it.

But that permanence comes with a cost. Bitcoin blocks have a size limit, and inscriptions compete with ordinary payments for that limited space. When inscription activity surges, the network gets congested, transaction fees rise for everyone, and ordinary users sending Bitcoin to family or an exchange end up paying more. This sparked a long-running debate in the Bitcoin community about whether the network should be used this way at all.

## Ordinals vs NFTs on Ethereum: What's Different?

If you already know how NFTs work on Ethereum, the comparison below shows where Ordinals diverge.

| Feature | Bitcoin Ordinals | Ethereum NFTs |
|---|---|---|
| **How the asset is stored** | Data inscribed directly on Bitcoin, fully on-chain | Usually a token that points to an image stored off-chain |
| **Underlying technology** | Ordinal theory + Taproot witness data | Smart contracts (ERC-721 / ERC-1155 standards) |
| **Smart contracts** | None — Bitcoin has no general smart-contract layer | Yes — contracts handle ownership, royalties, and trading rules |
| **Royalties to creators** | No built-in royalty system | Often supported by marketplace rules, not guaranteed |
| **Fees** | Paid in BTC, rise with network congestion | Paid in ETH (gas), also rise with congestion |
| **Wallet support** | Needs a special Ordinals-compatible wallet | Supported by most mainstream crypto wallets |
| **Permanence** | Content stored on Bitcoin forever | Image may disappear if the hosting server goes down |

The biggest practical difference for a beginner is the wallet. A normal Bitcoin wallet does not understand Ordinals. If you receive an inscribed satoshi in an ordinary wallet and later spend your Bitcoin, the wallet might spend that special satoshi as if it were any other — and your Ordinal would be gone, sent away as part of a routine payment. Ordinals wallets are designed to keep inscribed satoshis separate and protect them from accidental spending.

## Why Ordinals Became So Popular So Quickly

When Ordinals launched in January 2023, the idea spread fast for a few reasons. First, it was genuinely new: Bitcoin had never hosted NFT-like assets before, and collectors were curious. Second, scarcity felt real — the most popular early collections were limited to 10,000 inscriptions, and demand outpaced supply. Third, Ordinals inspired a wave of experiments built on top of them, including BRC-20, an experimental standard for creating fungible tokens on Bitcoin using the same inscription technique, and later Runes, another token experiment launched in 2024.

That excitement also pushed Bitcoin transaction fees sharply higher at times. Miners earned more from fees, which some people celebrated as good for Bitcoin's long-term security, while others argued it priced out people using Bitcoin for ordinary payments. Both views are still debated today.

For Indian users, the practical lesson is simpler: Ordinals are a cultural and technical experiment, not a new kind of money. Their prices swing wildly, the market is thin and unregulated, and most of the value comes from speculation and collecting — not from any income or utility the asset produces.

## How Indians Can Explore Ordinals Safely

There is no SEBI-regulated Ordinals marketplace in India, and no Indian exchange currently offers a built-in Ordinals trading desk. Exploring Ordinals therefore means using international wallets and marketplaces, which adds extra steps and extra risk. If you only want to learn, you can do all of this without spending a rupee — just read, watch, and observe.

If you do decide to explore further, here is the general flow, explained for education:

1. **Buy Bitcoin on a registered Indian exchange.** Use an FIU-IND registered platform, complete KYC, and pay via UPI or bank transfer. Keep your purchase records.
2. **Set up an Ordinals-compatible wallet.** Wallets built for Ordinals, such as Xverse or Unisat, can receive, display, and protect inscribed satoshis. A regular Bitcoin wallet cannot do this safely.
3. **Move a small amount of Bitcoin.** Transfer only a small test amount first, and confirm it arrives before moving more. Always double-check the address and the network.
4. **Use a marketplace carefully.** Ordinals marketplaces list inscriptions for sale, usually priced in Bitcoin. Check the collection's official links, verify the inscription number, and be aware that there is no buyer protection or refund process.
5. **Keep records of everything.** Every purchase and sale is a taxable event in India, so save transaction IDs, dates, and INR values.

Remember that using an international marketplace does not remove your Indian tax obligations. Your crypto activity is taxable in India regardless of where the platform is based.

## Risks and Scams Every Beginner Should Know

Ordinals carry all the usual crypto risks, plus a few of their own. Here are the ones that matter most:

- **Fake collections.** Scammers copy popular Ordinals collections and list lookalikes on marketplaces. Always verify a collection through its official website or social accounts, and check the inscription number — not just the image.
- **Accidental spending.** As mentioned above, sending an inscribed satoshi from a wallet that does not recognise Ordinals can destroy the collectible. Never store an Ordinal in a wallet that is not Ordinals-aware.
- **High and unpredictable fees.** Inscribing or trading during busy periods can cost far more than expected. Fees are paid in Bitcoin and cannot be refunded if a transaction fails or a trade falls through.
- **Extreme price swings.** Ordinal prices are driven by hype and thin trading. A collection that is popular today can lose most of its value in days, and there may be no buyers at all when you want to sell.
- **No consumer protection.** There is no regulator, ombudsman, or chargeback process for Ordinals trades. If you send Bitcoin to a scammer, or buy a fake, the money is almost certainly gone.
- **Wallet drainer links.** Fake "claim your free Ordinal" pages and airdrop links are common on social media and messaging apps. Connecting your wallet to a malicious site can empty it in seconds. Never connect your main wallet to an unfamiliar site, and never share your recovery phrase with anyone.

If something feels urgent — a "limited mint closing in 10 minutes" or a "free Ordinal for the first 100 people" — slow down. Urgency is the scammer's favourite tool, and genuine collections do not need to rush you.

## A 5-Minute Checklist Before Touching Ordinals

Use this quick check before spending anything on Ordinals:

1. Can you explain in your own words what an inscription is? If not, keep learning first.
2. Is your wallet Ordinals-compatible, and have you tested it with a tiny amount?
3. Have you verified the collection from its official source — not a forwarded message or a random post?
4. Do you know the total fee, including the Bitcoin network fee, before you confirm?
5. Are you using only money you can afford to lose completely?
6. Have you saved the transaction details for your tax records?

If the answer to any of these is no, stop and fix that step first. There is no deadline in crypto — the market will still be there tomorrow.

## Frequently Asked Questions

### Are Bitcoin Ordinals the same as NFTs on Ethereum?

They are similar in spirit but different in design. Ethereum NFTs are usually smart-contract tokens that point to an image stored elsewhere, while an Ordinal inscription stores the image or text data itself inside a Bitcoin transaction. That makes Ordinals fully on-chain, but it also means creating one costs Bitcoin network fees and there is no smart-contract marketplace logic built in.

### Can Indians buy Bitcoin Ordinals?

Technically yes, through Ordinals-compatible wallets and marketplaces, but there is no SEBI-regulated Ordinals marketplace in India. You would typically buy Bitcoin on an FIU-IND registered Indian exchange, move it to a compatible wallet, and then use an Ordinals marketplace. Every sale is taxed at a flat 30% in India, with 1% TDS on transfers above the threshold, so keep full records.

### Can you lose money with Bitcoin Ordinals?

Yes, in several ways. Inscription fees can be high when the Bitcoin network is busy, Ordinal prices are extremely volatile, and fake collections are common. There is also a real risk of accidentally spending an inscribed satoshi as ordinary Bitcoin if your wallet does not recognise it. Only use money you can afford to lose, and never treat Ordinals as an investment.

## The Bottom Line

Bitcoin Ordinals proved something surprising: the world's oldest and simplest blockchain can host digital collectibles, even though it was never designed to. Inscriptions store art and text directly on Bitcoin, making them permanent and verifiable — but also expensive to create, hard to trade safely, and vulnerable to scams and mistakes.

For Indian beginners, Ordinals are best treated as a learning topic, not a starting point for investing. Understand how satoshis, inscriptions, and fees work first. If you ever explore further, use a compatible wallet, verify everything from official sources, start small, and keep complete records.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

Your next step is simple: open a Bitcoin block explorer, look up any recent inscription transaction, and see the data for yourself. Understanding how it works is worth far more than owning one.

## Keep Learning

- [What is Crypto Satoshis? Small Bitcoin Units Explained](/blog/what-is-crypto-satoshis-small-bitcoin-units-explained/) — explains what crypto satoshis is and why it matters
- [What Is a Bitcoin Bridge? How BTC Moves to Other Networks](/blog/what-is-a-bitcoin-bridge/) — explains what a bitcoin bridge is and why it matters
- [What is Crypto Halving? Bitcoin Halving Explained](/blog/what-is-crypto-halving-bitcoin-halving-explained/) — explains what crypto halving is and why it matters
