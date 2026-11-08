---
title: "What Is Decentralised Identity (DID)? A Beginner's Guide"
category: "Blockchain"
excerpt: "Learn what decentralised identity (DID) is, how blockchain-based IDs and verifiable credentials work, and what Indian beginners should know before using them."
read_time: 8
author: Crypto Beginner Editorial Team
cover_image: "/covers/blockchain.jpg"
created_at: "2026-11-08T05:25:00+00:00"
faqs:
  - question: "Is decentralised identity (DID) the same as Aadhaar?"
    answer: "No. Aadhaar is a centralised identity system run by the government: your details sit in a central database and an authority issues and controls your number. A DID is an identifier you create and control yourself, usually anchored on a blockchain, with no single company or government issuing it. The two models solve different problems — Aadhaar proves who you are to the state, while a DID lets you prove specific facts about yourself to anyone, without handing over your full details."
  - question: "What happens if I lose my phone or my private key?"
    answer: "This is the biggest risk with decentralised identity. There is no 'forgot password' button and no helpdesk that can reset your identity for you, because nobody else controls it. If you lose the private key that controls your DID and you have no backup, you may permanently lose access to that identity and every credential stored with it. That is why DID wallets offer recovery options such as a written recovery phrase, trusted guardians, or social recovery — set one up before you store anything important."
  - question: "Do I need to buy crypto to use a decentralised identity?"
    answer: "Usually not. A DID is an identity tool, not an investment. Some DID systems run on public blockchains and someone has to pay a small network fee to create the identity record, but many wallets and apps absorb that cost, and several DID methods do not use a public blockchain at all. Be suspicious of any app that asks you to buy a specific token before you can 'activate' your identity — that is a common scam pattern."
---
# What Is Decentralised Identity (DID)? A Beginner's Guide

Every day, you prove who you are. You type an OTP to log in to your bank. You upload your PAN card to open a crypto exchange account. You show your Aadhaar number to get a SIM card. Each time, a copy of your personal information lands in yet another company's database — and you have no real control over what happens to it next.

Decentralised identity, usually shortened to DID, tries to flip that arrangement. Instead of companies holding your identity for you, you hold it yourself, in a digital wallet on your phone, and you share only the specific fact someone needs — nothing more. This guide explains what a DID is, how it works, where it fits in India, and the risks beginners should understand before trying one.

> **Educational content only.** This is not financial advice. Decentralised identity is still early technology, and some apps using the name are scams. Never share your private keys or recovery phrase with anyone, and never pay for an "official" identity you did not ask for.

## What Is Decentralised Identity (DID)?

A decentralised identifier — a DID — is a unique ID that you create and control yourself, without asking any company or government to issue it. Think of the difference between a name written in a company's register and a nameplate on your own front door. The register entry belongs to the company; the nameplate belongs to you, and you decide who reads it.

In practice, a DID looks like a short string of text, for example `did:example:123456789abcdef`. The first part says "this is a decentralised identifier", the middle part names the method or system it uses, and the last part is a unique string. That identifier is usually anchored to a blockchain or another distributed ledger, which acts as a public noticeboard: anyone can check that the DID exists and look up the public information attached to it, but nobody can change it without your private key.

Three building blocks make the system work:

- **The DID itself** — your unique identifier, controlled by a private key that only you hold.
- **The DID document** — a small public record linked to your DID. It contains your public key and the technical details other systems need to verify you. It never contains personal information like your name or address.
- **Verifiable credentials** — digital certificates issued to you by someone trusted, such as a university, an employer, or a bank. Your degree, your age, or your KYC status can each be a credential stored in your wallet.

The key idea is separation. Your identity is not one big file sitting on a company's server. It is a set of separate, checkable claims that you carry with you and reveal one at a time.

## How Decentralised Identity Actually Works

DID systems run on a simple three-party pattern: an issuer, a holder, and a verifier. A real-life example makes it clear.

Imagine you graduate from a college in Pune. The college acts as the **issuer**: it creates a digital degree credential and sends it to your identity wallet. You are the **holder**: the credential sits in your wallet, under your control. When you apply for a job, the employer acts as the **verifier**: your wallet shows them the credential, and they check its digital signature against the college's public key. They can confirm the degree is genuine without calling the college, without seeing your marks, and without you uploading your certificate to yet another portal.

Two features make this different from an ordinary login:

**Selective disclosure.** Today, proving your age usually means sharing your full date of birth, and often a scanned ID with your photo, address, and number on it. With a DID, you could prove a single fact — "I am over 18" — without revealing your birthdate at all. The verifier learns only the answer to the question it asked.

**No central database to breach.** Because your credentials live in your wallet and the blockchain holds only your public identifier and keys, there is no single honeypot of personal data for hackers to steal. A data breach at one company cannot expose your whole identity, because no company holds your whole identity.

Behind the scenes, the cryptography is the same public-key cryptography that secures crypto wallets: your private key signs a proof, and anyone can check that proof against the public key listed in your DID document. If the signature matches, the claim is genuine. If it does not, the verifier rejects it.

## DID vs Aadhaar and Traditional Digital IDs

In India, Aadhaar is the identity system most people know. Comparing the two models shows what DID changes — and what it does not.

| Feature | Aadhaar / traditional digital ID | Decentralised identity (DID) |
|---|---|---|
| Who issues it | A central authority, such as the government | You create it yourself |
| Where your data lives | A central database run by the authority | Credentials live in your wallet; only public keys sit on a ledger |
| What you share | Usually your full details, every time | Only the specific fact requested |
| Password reset | The authority can reset or recover it | No helpdesk — you are responsible for your keys |
| Who can revoke it | The issuing authority | Only you, or the issuer of a specific credential |
| Works offline | Needs the central system to be reachable | Credentials can be shown and checked without a central server |

This does not make DID a replacement for Aadhaar. Aadhaar proves your identity to the state and unlocks government services, subsidies, and bank accounts at a scale no DID system has reached. DID is a different model for a different problem: proving facts about yourself to many different parties without giving each of them your full file. The two could coexist — for example, an authority could one day issue an Aadhaar-linked credential into your DID wallet — but no such official system exists in India today.

## What You Could Use a DID For

The most useful way to judge any new technology is to ask what it does for an ordinary person. Here are the everyday uses DID is designed for:

**Passwordless logins.** Instead of creating a new username and password for every website, you approve a login from your identity wallet. There is no password to leak in a data breach, because there is no password at all.

**KYC you only do once.** Indian crypto users know the routine: every exchange asks for the same PAN card, selfie, and address proof. With DID, a trusted verifier could issue a KYC credential once, and you could present it to the next exchange instead of uploading the same documents again. The exchange still meets its compliance duties, but your documents are not copied into yet another database.

**Certificates and qualifications.** Degrees, course certificates, and professional licences could live as verifiable credentials in your wallet. An employer checks the signature, not a scanned PDF that anyone could forge.

**Age and eligibility checks.** Proving you are over 18, a student, or a resident of a particular state could be a single yes-or-no answer instead of a full document upload.

**Health and travel records.** Vaccination records or test results could be shared as a single verified fact — "vaccinated" — without handing over your entire medical history.

None of this is science fiction, but most of it is still in the pilot stage. Very few Indian websites, exchanges, or employers accept DIDs today, so treat the technology as something to learn about now and use when real services adopt it — not something to rush into.

## DID in India: Where Things Stand

India already has one of the world's most advanced digital identity systems in Aadhaar, and the India Stack built on top of it — UPI for payments, eKYC for onboarding, DigiLocker for documents. That makes India an interesting place for DID: the country understands digital identity better than most, but it also has less urgent need for a replacement, because the existing system mostly works.

A few facts beginners should know:

- **There is no official Indian DID system yet.** No government body issues DIDs, and no law requires anyone to accept them. If an app claims to be the "official DID of India" or says the government has made DIDs compulsory, treat it as a scam.
- **The DPDP Act, 2023, gives you data-protection rights.** India's Digital Personal Data Protection Act gives you rights over how companies collect and use your personal data, and it introduces the idea of consent managers — intermediaries who handle your permissions. DID fits naturally with that direction, because it is built around you giving consent to share specific facts, but the Act itself does not create or require DIDs.
- **Pilots and research exist, but adoption is early.** Indian universities, startups, and industry groups have experimented with verifiable credentials for degrees and employee records. These are small pilots, not nationwide rollouts.
- **Crypto tax rules still apply to crypto, not to identity.** Creating or holding a DID is not a taxable event. But if you use crypto in connection with any identity service — for example, paying a network fee in tokens — the usual crypto tax rules apply to that transaction. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

The honest summary: DID is a promising idea with real pilots behind it, but in India it is still a technology to watch, not a service to depend on.

## The Risks and Limits Beginners Must Know

DID removes the middleman — and with it, the safety net. Understanding the risks before you try anything is more important than understanding the technology itself.

**Lost keys mean lost identity.** With a normal account, you click "forgot password" and a company resets it. With a DID, there is no company. If you lose your private key and have no backup, you can permanently lose access to that identity and every credential attached to it. Any DID wallet you use must have a recovery plan — a written recovery phrase stored safely offline, or trusted guardians who can help you recover — and you should set it up before storing anything important.

**Scams already use the DID name.** Fraudsters follow every new technology. Common traps include fake DID wallet apps that steal your recovery phrase, messages claiming you must "verify your DID" to claim free crypto, and websites selling "official" identity tokens. A genuine DID costs little or nothing to create, and no legitimate service will ever ask for your private key or recovery phrase.

**Privacy depends on good design.** A DID system is only private if personal data stays off the blockchain. Your name, address, and credentials should live in your wallet, not on a public ledger. Before using any DID app, check what it actually stores on-chain. If an app wants to put your personal details on a public blockchain, do not use it.

**Standards are still settling.** There are several DID methods and they do not all work with each other. An identity created in one system may not be accepted by another. This fragmentation is normal for early technology, but it means your DID may not be as portable as the marketing suggests.

**Acceptance is limited.** A DID is only useful where someone accepts it. Until banks, exchanges, employers, and government services start accepting verifiable credentials, your DID wallet will mostly be a way to experiment — which is fine, as long as you know that going in.

## A 5-Minute Safety Checklist Before Trying Any DID App

If you want to explore decentralised identity, run through this checklist first:

1. **Check the source.** Download the wallet only from the official website or your phone's app store. Never install a DID app from a link in a WhatsApp or Telegram message.
2. **Read what goes on-chain.** The app should say clearly that only your public identifier and keys go on the ledger, and that your personal details stay in your wallet.
3. **Set up recovery first.** Write down the recovery phrase on paper, store it somewhere safe, and never photograph it or share it online.
4. **Start with nothing valuable.** Try the wallet with a test credential or a low-stakes use first. Do not store your only copy of an important document in a new app.
5. **Never share your private key or recovery phrase.** No support agent, no government official, and no "verification team" will ever legitimately ask for them.
6. **Be sceptical of anything that costs money.** Creating a basic DID should be free or nearly free. If an app demands you buy a specific token to "activate" your identity, walk away.

## FAQs

### Is decentralised identity (DID) the same as Aadhaar?

No. Aadhaar is a centralised identity system run by the government: your details sit in a central database and an authority issues and controls your number. A DID is an identifier you create and control yourself, usually anchored on a blockchain, with no single company or government issuing it. The two models solve different problems — Aadhaar proves who you are to the state, while a DID lets you prove specific facts about yourself to anyone, without handing over your full details.

### What happens if I lose my phone or my private key?

This is the biggest risk with decentralised identity. There is no "forgot password" button and no helpdesk that can reset your identity for you, because nobody else controls it. If you lose the private key that controls your DID and you have no backup, you may permanently lose access to that identity and every credential stored with it. That is why DID wallets offer recovery options such as a written recovery phrase, trusted guardians, or social recovery — set one up before you store anything important.

### Do I need to buy crypto to use a decentralised identity?

Usually not. A DID is an identity tool, not an investment. Some DID systems run on public blockchains and someone has to pay a small network fee to create the identity record, but many wallets and apps absorb that cost, and several DID methods do not use a public blockchain at all. Be suspicious of any app that asks you to buy a specific token before you can "activate" your identity — that is a common scam pattern.

## The Bottom Line

Decentralised identity is a simple idea with far-reaching consequences: instead of dozens of companies each holding a copy of who you are, you hold your identity yourself and share only what each situation needs. The issuer–holder–verifier model, selective disclosure, and the removal of central databases all point in the same direction — more control for you, less data scattered across the internet.

But the idea is ahead of the reality. In India, Aadhaar and the India Stack already handle most everyday identity needs, there is no official DID system, and very few services accept DIDs today. The technology is worth learning about, and worth watching as pilots grow into real services — but it is not something to rush into, pay for, or store important documents in yet.

The best next step is a small one. Read about how verifiable credentials work, try a reputable DID wallet with nothing valuable at stake, and set up recovery before you store anything that matters. When real services in India start accepting DIDs, you will already understand the tool — and the risks — well enough to use it safely.
