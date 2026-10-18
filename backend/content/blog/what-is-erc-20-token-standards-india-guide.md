---
title: "What Is an ERC-20 Token? Token Standards Explained"
category: "Ethereum"
excerpt: "Learn what an ERC-20 token is, how token standards work on Ethereum, why wallets support them, and what Indian beginners must check before transfers."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/crypto.jpg"
created_at: "2026-10-18T13:23:18+00:00"
faqs:
  - question: "What is an ERC-20 token in simple words?"
    answer: "An ERC-20 token is a digital token built on Ethereum following one shared rulebook, so any standard wallet or exchange can recognise, store, and transfer it in the same way. The standard covers basic actions such as checking a balance and sending tokens. It says nothing about whether a token is safe or valuable."
  - question: "Is an ERC-20 token the same as Ethereum (ETH)?"
    answer: "No. ETH is Ethereum's own coin, used to pay network fees, while an ERC-20 token is created by a project using a smart contract on top of Ethereum. Think of Ethereum as the road network and ERC-20 tokens as different vehicles that travel on it while following the same traffic rules."
  - question: "Are ERC-20 token transfers taxable in India?"
    answer: "Selling or transferring crypto, including ERC-20 tokens, is a taxable event under India's virtual digital asset rules, and exchanges may deduct TDS on sales. Keep records of every transfer with dates and rupee values. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing."
---

# What Is an ERC-20 Token? Token Standards Explained

An ERC-20 token is one of the first terms Indian beginners meet after buying crypto on an exchange, usually when a wallet or withdrawal screen asks them to choose a network. The idea is simple: ERC-20 is a shared rulebook that lets thousands of tokens work in the same wallets, apps, and exchanges. Understanding it helps you avoid the costly mistake of sending a token on the wrong network.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. A token following a standard says nothing about whether that token is safe or worth buying.

## A Simple Analogy: One Plug Shape, Many Devices

Think of the standard three-pin plug used across India. Any appliance built for that plug fits any proper socket in any home, whether the appliance is a fan, a charger, or a lamp. Manufacturers do not invent a new plug for every product, and you do not need a different socket for every brand.

ERC-20 plays the same role for tokens on Ethereum. Before standards existed, every token project could invent its own way of recording balances and transfers. Each wallet and exchange would then need custom work for every single token — slow, expensive, and error-prone. With one shared rulebook, a wallet that supports ERC-20 can support almost any ERC-20 token automatically.

## What Does ERC Actually Mean?

ERC stands for Ethereum Request for Comment. It is the name given to a technical proposal shared with the Ethereum developer community for discussion. When a proposal is widely adopted, it becomes a standard developers follow.

The number is simply the proposal's sequence number. ERC-20 was the twentieth proposal, and it became the standard for one specific job: fungible tokens. Fungible means every unit is identical and interchangeable — one unit of the token equals any other unit, just as one ₹100 note equals another ₹100 note. That is different from an NFT, where each item is unique.

It also helps to separate two words beginners often mix up:

| Term | Meaning | Everyday comparison |
|---|---|---|
| Coin | The main asset of its own blockchain, like ETH on Ethereum | The road network itself |
| Token | An asset created on top of an existing blockchain by a smart contract | A vehicle travelling on the road |
| Token standard | The shared rulebook every such token follows | The traffic rules all vehicles obey |

ETH itself is not an ERC-20 token. It is Ethereum's coin, and it is also the asset used to pay the network fee — called gas — whenever you move an ERC-20 token.

## What the ERC-20 Rulebook Actually Requires

The standard lists a small set of functions every ERC-20 contract must include. Knowing what they do explains what your wallet is really asking for.

| Function (in plain words) | What it does |
|---|---|
| Total supply | States how many tokens exist in total |
| Balance check | Shows how many tokens an address holds |
| Transfer | Sends tokens from your address to another address |
| Approve | Lets you grant an app permission to move a set amount on your behalf |
| Allowance | Shows how much of that permission is still unused |
| Transfer from | Lets an approved app complete the move within that permission |

Two lessons hide inside this table. First, your balance is not stored inside your wallet app — it is recorded by the token's smart contract on the blockchain, and the wallet simply reads it. Second, the approve function is powerful: approving a token means granting an app spending permission. Granting it to a fake or malicious site is a well-known way beginners lose tokens, so approvals deserve the same caution as payments.

## Why the Standard Matters to You as a User

Because ERC-20 is predictable, everyday crypto actions become simpler and safer to check:

- **One wallet, many tokens.** A single Ethereum wallet address can receive ETH and many different ERC-20 tokens, because they all follow the same rules.
- **Easy exchange support.** Exchanges such as CoinDCX, WazirX, and ZebPay can list and process ERC-20 tokens without building a new system for each one.
- **Consistent app behaviour.** DeFi apps can accept, swap, or lend ERC-20 tokens through the same steps, which is why so many tokens look and feel similar inside apps.
- **Verifiable details.** Anyone can open the token's contract on a block explorer and check its name, symbol, decimals, and total supply before trusting it.

None of this makes a token a good purchase. The standard only describes how a token behaves technically — like how a plug describes shape, not whether the appliance behind it is well made.

## Other Standards You Will See Alongside ERC-20

Once you understand ERC-20, the neighbouring names become much less intimidating:

| Standard | Used for | Key difference |
|---|---|---|
| ERC-20 | Fungible tokens | Every unit identical and interchangeable |
| ERC-721 | NFTs | Every token unique, with its own identity |
| ERC-1155 | Mixed collections | One contract can hold both identical and unique items |

You may also see BEP-20 on the BNB Chain. It was modelled closely on ERC-20, so it feels familiar — but it runs on a different network. This is the single most important practical point in this whole guide: **similar does not mean interchangeable.** An ERC-20 token must travel on Ethereum (or a network that clearly supports it). Sending it to an address through the wrong network can make it hard — sometimes impossible — to recover.

## The India Angle: Networks, Fees, and Tax

For Indian users, ERC-20 usually appears at three moments: depositing to an exchange, withdrawing to a personal wallet, and using a DeFi app. At each moment, pause on the network selection screen. Indian exchanges clearly label supported networks for each token; the receiving side and the sending side must match exactly, and the contract address should match the one the exchange or project's official site lists.

Remember the fee side too. Moving an ERC-20 token requires ETH for gas, and that fee changes with network demand. On a small transfer, the fee can feel large compared with the amount moved — one more reason to always make a small test transfer first when using a new wallet or network.

On tax, treat ERC-20 tokens like any other crypto: profits on sale or transfer fall under India's virtual digital asset rules, and TDS can apply on exchange sales. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing. Keeping the date, token name, quantity, and rupee value of each transfer makes filing far easier later.

## Two Risks Every Beginner Should Know

**Fake tokens with real names.** Anyone can create a token and give it the same name and symbol as a famous one, because a name is just text inside a contract. What identifies a token is its contract address. If you add a token to your wallet using an address copied from a random Telegram or WhatsApp message, you may be looking at a worthless copy — or being lured toward a scam approval.

**Unlimited approvals.** Some apps ask for permission to spend an unlimited amount of a token. If that app is fake or later compromised, the permission can be misused. Prefer limited approvals where the app offers them, review old approvals with a reputable checking tool, and disconnect sites you no longer use.

## A Five-Minute Check Before You Send or Receive

1. Confirm the token's contract address on the project's official website or a block explorer — never from a chat message alone.
2. Confirm the network on both sides says the same thing, such as ERC-20/Ethereum on both screens.
3. Check you hold enough ETH in the sending wallet to pay the gas fee.
4. Send a small test amount first, and wait for it to arrive before moving the rest.
5. Save the transaction details — date, amount, and rupee value — for your tax records.

## Conclusion

ERC-20 is not a coin and not a recommendation — it is a rulebook. It defines how fungible tokens on Ethereum record balances, move between addresses, and grant spending permissions, so that wallets, exchanges, and apps can all work with them in the same way. For an Indian beginner, the practical takeaways are small but powerful: identify tokens by contract address, always match the network on both sides, respect approvals, keep ETH for gas, and keep records for tax. Practise opening any token's contract address on a block explorer — that five-minute habit protects you far more than any tip in a chat group.
