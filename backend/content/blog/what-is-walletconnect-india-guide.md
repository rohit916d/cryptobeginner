---
title: "What Is WalletConnect? Connect Your Wallet to dApps Safely"
category: "Wallets"
excerpt: "Learn what WalletConnect is, how it links your wallet to dApps with a QR code, and how Indian users can spot fake prompts and revoke risky connections."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/wallets.jpg"
created_at: "2026-11-27T21:22:09+00:00"
faqs:
  - question: "Is WalletConnect itself a wallet?"
    answer: "No. WalletConnect is not a wallet and it never holds your crypto. It is an open protocol that lets your existing wallet talk to a website or app (a dApp) for a short time. Your coins and tokens stay in your own wallet, and every action still needs your approval inside the wallet before anything happens."
  - question: "Can WalletConnect drain my wallet?"
    answer: "WalletConnect on its own cannot move your funds. What can drain a wallet is a malicious dApp or a fake prompt that asks you to sign a dangerous transaction — for example, an unlimited approval for your tokens — and you approve it without reading it. That is why you should only connect to websites you trust, read every approval screen carefully, and disconnect when you are done."
  - question: "How do I disconnect WalletConnect from a dApp?"
    answer: "Open your wallet app, go to its connections or sessions page (often called Connected Sites or WalletConnect Sessions), find the dApp, and tap Disconnect. You can also disconnect from the dApp's own interface. Make it a habit to review and clear old sessions once a month, and check your token approvals on a block explorer after any connection you are unsure about."
---

# What Is WalletConnect? Connect Your Wallet to dApps Safely

Imagine you walk into a shop, but instead of handing over your wallet at the counter, you scan a code with your phone and approve each payment yourself, one at a time. That is roughly how WalletConnect works for crypto. It is the bridge that lets your crypto wallet talk to a website or app — a decentralised app, or dApp — without ever giving the website your private key or your seed phrase.

If you have ever tried to swap tokens on a decentralised exchange, claim an airdrop, or mint an NFT, you have probably seen a button that says "Connect Wallet" and a QR code. In many cases, that QR code is WalletConnect doing its job. For Indian beginners who are moving beyond buying crypto on an exchange and starting to explore DeFi, NFTs and Web3 apps, understanding this one tool removes a lot of confusion — and a lot of risk.

> **Educational content only.** This is not financial advice. WalletConnect is a connection tool, not an investment product — and connecting to the wrong website can put your funds at risk, so learn the safety rules before you connect to anything.

## What Is WalletConnect, in Plain Language?

WalletConnect is an open-source protocol — a shared set of rules — that lets a crypto wallet and a website or app communicate with each other securely. It was created in 2018 and is now used by hundreds of wallets and thousands of dApps. Think of it as a universal remote control: one standard that works across many wallets, instead of every website needing its own way to talk to every wallet.

The key idea is simple. Your wallet stays on your phone (or in your browser extension), your private keys never leave it, and the website only gets a temporary, limited connection. When the website wants you to do something — send tokens, approve a swap, sign a message — it sends a request. Your wallet shows you the request, and nothing happens until you tap approve.

WalletConnect is not a wallet, not an exchange, and not a token-selling platform. It does not hold your crypto, it does not know your balance unless the dApp asks, and it cannot move funds by itself. It is the messenger between your wallet and the dApp.

## Why WalletConnect Exists

Before WalletConnect, connecting a wallet to a website was awkward. Desktop users relied on browser extensions, and mobile users had almost no good way to use dApps at all — you could not easily connect the wallet on your phone to a website open on your laptop.

WalletConnect solved this with a simple idea: a relay server passes encrypted messages between the wallet and the dApp, and the two sides pair by scanning a QR code or tapping a deep link. The relay cannot read the messages, because they are encrypted with keys that only your wallet and the dApp share. It is a bit like a postman who carries a sealed envelope — the postman can deliver it, but cannot read what is inside.

Today, the main version is WalletConnect v2 (also called WalletConnect 2.0). The older v1 was switched off in 2023, so if you ever see a very old guide telling you to use v1, ignore it. Version 2 supports many blockchains at once, so one session can work with Ethereum, Polygon, BNB Chain and others without reconnecting each time.

## How WalletConnect Works, Step by Step

Here is what actually happens when you connect, in everyday terms:

**1. The dApp asks to connect.** You visit a decentralised exchange, an NFT marketplace or a lending app and tap "Connect Wallet". You pick WalletConnect from the list of options, and the dApp shows a QR code.

**2. You scan the code with your wallet.** Open your wallet app on your phone, find the WalletConnect or scanner option, and point your camera at the code. If you are on the same phone, tapping the option opens your wallet directly through a deep link instead.

**3. Your wallet asks for permission.** Before anything connects, your wallet shows you the dApp's name, its website address, and which blockchains it wants to use. This is your moment to check: is this the real website, spelled correctly? A fake site that looks almost identical is the most common trap, so read the address carefully.

**4. A session starts.** Once you approve, a session is created. The dApp can now send requests to your wallet — but only requests. It cannot take anything. Think of it as giving someone permission to knock on your door, not giving them the keys to your house.

**5. You approve each action separately.** Every swap, approval or signature appears on your wallet screen as its own request, with the details: what token, how much, and to which address. You approve or reject each one. If anything looks wrong — a different token, a strange amount, an approval with no limit — reject it and disconnect.

**6. You disconnect when done.** Sessions can stay active for a while, so when you finish, disconnect from inside your wallet or from the dApp. A session left open is not an emergency, but a clean disconnect is good hygiene, like logging out of a shared computer.

## What WalletConnect Can and Cannot Do

Beginners often worry that connecting a wallet hands over control. It does not — but it is worth being exact about the limits.

**What it can do:**
- Let a dApp see your public wallet address and, if it asks, your token balances.
- Send you requests to sign messages (for logging in) or approve transactions.
- Work across many blockchains in a single session.

**What it cannot do:**
- See your private key or seed phrase — those never leave your wallet.
- Move your funds without your approval on each transaction.
- Change your wallet's settings or export your keys.

The danger is not the connection itself. The danger is what you approve while connected. A malicious dApp can ask you to approve a transaction that gives it unlimited permission to spend a token — and if you approve it without reading, your tokens can be moved later. The connection was only the door; your approval was the key.

## Common Ways Indians Use WalletConnect

For Indian users, WalletConnect usually shows up in a few everyday situations:

**Swapping tokens on a DEX.** You hold tokens on an Indian exchange and move some to a self-custody wallet. To swap them on a decentralised exchange, you connect your wallet through WalletConnect, approve the swap, and the trade happens on-chain. Remember that each swap is a transfer under Indian tax rules — the 30% tax on gains and 1% TDS framework applies to crypto-to-crypto swaps too, so keep a record of every swap.

**Claiming an airdrop or joining a whitelist.** Projects often ask you to connect your wallet to check eligibility. This is also one of the most faked situations: scammers copy real claim pages and push them through Telegram and WhatsApp groups. Never connect from a link in a message — type the official address yourself or use a bookmark.

**Buying or minting an NFT.** NFT marketplaces use WalletConnect so your wallet can sign the purchase. Before minting, check the collection's real contract address and the marketplace's official domain — fake mint pages are a classic drainer trap.

**Using a lending or staking app.** DeFi apps ask you to connect before you can deposit or stake. Before approving a deposit, read what the approval actually allows. An approval for an unlimited amount is a red flag; prefer approving only the exact amount you need.

**Logging in to Web3 apps.** Some apps use a signed message instead of a password. Signing a login message is normally harmless — it only proves you own the wallet. But never sign a message you cannot read, or one that appears on a website you did not expect.

Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## WalletConnect vs Browser Extensions

Many beginners ask whether WalletConnect is better than connecting through a browser extension wallet. The honest answer is that they are two ways to do the same job, and the safer choice depends on your setup.

A browser extension wallet connects directly to the website in your browser. It is convenient on a computer, but it only works in that browser, and a malicious website can try to trick the extension. WalletConnect works across devices — your phone wallet can connect to a website on your laptop — and it adds one more visible step, the QR scan and the session screen, which gives you a moment to pause and check the site.

For mobile-first users in India, WalletConnect is often the more practical option, because most crypto wallets people actually use here are mobile apps. The safety rules are the same either way: verify the website, read every approval, and disconnect when finished.

## 7 Safety Rules Before You Connect

These seven habits protect you far more than any single tool can:

**1. Check the website address first.** Type it yourself or use a bookmark. A single changed letter — "uniswap" vs "unıswap" — can be a fake site. Search results and ads can also lead to copycat pages, so never trust the first link blindly.

**2. Never share your seed phrase.** No genuine dApp, wallet or support agent will ever ask for your seed phrase or private key. Anyone who asks is a scammer, full stop. WalletConnect never needs it, and neither does any legitimate connection flow.

**3. Read every approval screen.** Before you tap approve, check three things: the token, the amount, and the receiving address. If an approval says "unlimited" or an amount you did not expect, reject it. Approving blindly is how most wallet drains happen.

**4. Use a separate wallet for exploring.** Keep most of your funds in a main wallet that you rarely connect anywhere. Use a second, small wallet for trying new dApps. If something goes wrong with the small wallet, your main funds are untouched.

**5. Revoke approvals you no longer need.** Token approvals stay active until you revoke them. Every few months, check your approvals on a block explorer's token-approval tool and revoke anything you do not recognise or no longer use.

**6. Disconnect after every session.** Open your wallet, find the active WalletConnect sessions, and disconnect the ones you are done with. It takes ten seconds and closes the door behind you.

**7. Ignore urgent messages.** "Connect now or lose your airdrop", "your wallet will be suspended", "limited-time claim" — urgency is a scammer's favourite tool. Real airdrops and real projects do not pressure you with countdowns in a Telegram message. If a message pushes you to connect quickly, slow down instead.

## What to Do If You Connected to a Bad Site

Mistakes happen, and the right response is fast and calm:

1. **Disconnect immediately** — in your wallet, end the session.
2. **Check your approvals** — look at your token approvals on a block explorer and revoke anything suspicious.
3. **Move your funds** — if you approved something dangerous, transfer your tokens to a brand-new wallet with a fresh seed phrase. Do this before the attacker has time to act.
4. **Do not trust "recovery" offers** — anyone messaging you offering to recover drained funds for a fee is almost certainly running a second scam.
5. **Report it** — if you lost money, report the incident at cybercrime.gov.in or call the national cybercrime helpline 1930, and keep screenshots, transaction hashes and the fake website's address as evidence.

## WalletConnect Sessions: A Quick Monthly Routine

Because sessions and approvals quietly pile up, a short monthly routine keeps your wallet tidy:

| Step | What to do | Time |
|---|---|---|
| 1 | Open your wallet's WalletConnect sessions page | 1 minute |
| 2 | Disconnect every dApp you no longer use | 2 minutes |
| 3 | Review token approvals on a block explorer | 3 minutes |
| 4 | Revoke approvals for dApps you have stopped using | 2 minutes |
| 5 | Check your transaction history for anything unfamiliar | 2 minutes |

Ten minutes a month is a small price for knowing exactly which apps can talk to your wallet.

## The Bottom Line

WalletConnect is a useful, everyday piece of crypto plumbing. It lets your wallet and a website talk to each other without sharing your private key, and it is the reason mobile wallets can use dApps at all. Used carefully, it is safe: verify the website, read every approval, use a small exploring wallet for new apps, and disconnect when you are done.

The risk was never the connection. The risk is approving something you did not read, on a website you did not verify, because a message told you to hurry. Slow down at that one moment — the approval screen — and WalletConnect becomes a tool that works for you, not against you.

If you are just starting out, connect to one well-known dApp first, approve one small transaction, and practise disconnecting. Once the flow feels familiar, the rest of Web3 gets much less intimidating.
