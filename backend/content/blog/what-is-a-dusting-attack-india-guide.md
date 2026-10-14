---
title: "What Is a Dusting Attack? Crypto Privacy Risk Explained"
category: "Security"
excerpt: "Received a tiny mystery crypto deposit? Learn what a dusting attack is, how attackers use it to track Indian wallets, and the safe steps to take."
read_time: 7
author: Crypto Beginner Editorial Team
cover_image: "/covers/security.jpg"
created_at: "2026-10-14T21:23:42+00:00"
faqs:
  - question: "Is a dusting attack dangerous by itself?"
    answer: "Receiving dust does not by itself steal your crypto or expose your private keys. The risk is privacy: if you later spend or move that dust together with your other coins, an attacker watching the public blockchain may link your wallet addresses and learn more about your holdings and habits."
  - question: "What should I do if I receive mystery dust in my wallet?"
    answer: "Do nothing with it. Do not spend it, swap it, or send it anywhere, and do not visit any website or scan any code mentioned in the token name or transaction note. Leave the dust untouched, use your wallet's hide or coin-control features if available, and keep using fresh addresses for future receipts."
  - question: "Can a dusting attack happen on an Indian exchange account?"
    answer: "Dusting mainly targets self-custody wallets with public addresses, because attackers send tiny amounts to thousands of addresses at once. Exchange accounts use shared deposit systems, so the tracking trick works poorly there, but unsolicited tokens can still appear in DeFi wallets connected to your exchange activity."
---

You open your wallet one morning and spot a tiny deposit you never asked for — a fraction of a coin worth a few paise. It looks harmless, even lucky. But that speck of crypto may be a **dusting attack**: a quiet tracking trick where an attacker sends microscopic amounts to thousands of wallets and then watches what happens next. This guide explains how a dusting attack works, why privacy is the real target, how to recognise one, and the calm, safe response Indian beginners should follow.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose.

## What Is a Dusting Attack?

A dusting attack starts with "dust" — an amount of crypto so small it is worth less than the fee needed to move it. Attackers deliberately create this dust and send it to a huge list of wallet addresses in a single campaign. One deposit costs them almost nothing; sending to ten thousand addresses still costs very little.

The dust itself is not the weapon. The weapon is the public blockchain record. Every transaction is visible to anyone, forever. By planting a uniquely trackable speck in your wallet, the attacker can follow that speck. If you later spend it together with your real coins, the transaction links your addresses together on the public record — and the attacker learns that those addresses all belong to the same person.

Think of it like someone slipping a marked 10-paise coin into your purse. The coin is worthless. But if a shopkeeper later reports seeing that exact marked coin spent alongside your loyalty card, the marker now knows where you shop.

## How the Attack Unfolds, Step by Step

Understanding the sequence makes the trick far less mysterious:

1. **Collecting addresses.** Attackers gather active wallet addresses from the public blockchain. No hacking is needed — addresses that transact regularly are visible to everyone.
2. **Sending the dust.** Tiny amounts are sent to hundreds or thousands of those addresses, often in one batch.
3. **Waiting for movement.** Most recipients ignore the dust, and those wallets give the attacker nothing. The attack only works on wallets that later move the dust.
4. **Linking addresses.** When a wallet spends the dust together with coins from other addresses — which many wallets do automatically when combining funds — the attacker can cluster those addresses as one owner.
5. **Building a profile.** Linked addresses reveal balances, transaction timing, and counterparties. That profile can then be used for targeted phishing, extortion attempts, or simply sold as data.

Notice what is missing from this list: at no point does the attacker gain your password, seed phrase, or control of your wallet. A dusting attack is a surveillance technique, not a break-in. That distinction matters, because it tells you the correct defence is privacy hygiene, not panic.

## Dusting Attack vs Ordinary Dust

Not every tiny balance is an attack. Wallets naturally accumulate harmless dust from your own activity — rounding leftovers from trades, small change returned from transactions, or remnants after a swap. The earlier guide on crypto dust covers those everyday leftovers in detail.

The warning signs point the other way when dust is **unsolicited**: it arrives from an unknown sender, in a token you have never held, sometimes with a strange name, a website address, or a message baked into the token or transaction. Legitimate leftovers come from your own transactions. Attack dust arrives uninvited, and that difference is your first clue.

| Feature | Ordinary dust (your own) | Dusting attack dust |
|---|---|---|
| Source | Your own trades and transfers | Unknown external sender |
| Token | Assets you already use | Unfamiliar or oddly named token |
| Extras | None | May carry a website link or message |
| Risk | Clutter only | Privacy tracking if you move it |
| Best response | Ignore or sweep carefully | Leave it completely untouched |

## Why Attackers Bother With Something So Small

Beginners often ask why anyone would spend effort on deposits worth paise. There are three common motives.

**De-anonymisation for its own sake.** Crypto addresses are pseudonymous, not anonymous. Linking addresses to real activity is valuable to data brokers, and dusting is one of the cheapest linking tools available.

**Targeted phishing.** Once an attacker knows a wallet holds a meaningful balance, the owner becomes a worthwhile phishing target. Fake support messages, fake airdrop claims, and lookalike websites can then be aimed at people known to hold crypto — including the fake apps and Telegram groups that target Indian users.

**Extortion and scams.** A profile of someone's holdings can fuel threatening messages or tailored scam pitches. In India, such approaches often arrive through WhatsApp or Telegram, dressed up as tax notices, exchange warnings, or investment tips. Treat any message that seems to "know" your wallet activity with extra suspicion.

## What You Should — and Should Not — Do

The safe response is refreshingly boring:

**Do nothing with the dust.** Do not spend it, swap it, convert it, or send it to another wallet "to get rid of it." Moving it is exactly the action the attacker is waiting for. Unsent, it reveals nothing.

**Never follow instructions attached to it.** If the token name or transaction note contains a website, a claim link, or a QR-style instruction, ignore it completely. These lures are a second, more dangerous layer: sites built to trick you into connecting your wallet and approving a malicious transaction.

**Use wallet privacy features if you have them.** Some wallets offer "coin control," letting you exclude specific coins from future transactions, or an option to hide small or unknown balances from view. Freezing or hiding the dust keeps it out of your way without moving it.

**Use fresh addresses for receipts.** Many wallets can generate a new receiving address for each payment. Fresh addresses make clustering harder in general, not just against dusting.

**Stay calm about taxes, but keep records.** Merely receiving an unsolicited speck does not mean you made a profit or owe anything on it, and you should not invent a value for it in your records — note it as an unsolicited deposit and move on. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described in our tax guides were current as of September 2026. Verify the latest rules before filing, and ask a tax professional about anything genuinely unclear.

## Can You Prevent Dusting Attacks?

You cannot stop someone from sending dust to a public address — anyone who knows an address can send to it, just as anyone can post a letter to a street address. Prevention is therefore about limiting what an attacker learns if dust arrives:

- Keep your main holdings in a wallet whose address you do not post publicly.
- Avoid reusing one address everywhere; separate addresses for separate purposes limit linkage.
- Be careful about sharing screenshots that show wallet addresses alongside balances.
- Prefer wallets with coin-control or dust-hiding features if privacy matters to you.
- Remember that exchange accounts on platforms like CoinDCX, WazirX, or ZebPay pool deposits differently, so classic dusting works poorly there — but self-custody wallets you control are fully your responsibility.

None of these steps requires money or advanced skills. They are habits, and habits are what defeat a patient, low-cost attack like this one.

## The Bottom Line

A dusting attack is a privacy trick disguised as a tiny gift. The dust cannot steal your crypto, read your seed phrase, or empty your wallet. It can only betray information if you pick it up and spend it. So the whole defence fits in one sentence: if mystery dust appears, leave it exactly where it landed, follow no links attached to it, and carry on with fresh addresses and good wallet hygiene. Beginners who understand that are already ahead of the attack.

## Frequently Asked Questions

**Is a dusting attack dangerous by itself?** Receiving dust does not by itself steal your crypto or expose your private keys. The risk is privacy: if you later spend or move that dust together with your other coins, an attacker watching the public blockchain may link your wallet addresses and learn more about your holdings and habits.

**What should I do if I receive mystery dust in my wallet?** Do nothing with it. Do not spend it, swap it, or send it anywhere, and do not visit any website or scan any code mentioned in the token name or transaction note. Leave the dust untouched, use your wallet's hide or coin-control features if available, and keep using fresh addresses for future receipts.

**Can a dusting attack happen on an Indian exchange account?** Dusting mainly targets self-custody wallets with public addresses, because attackers send tiny amounts to thousands of addresses at once. Exchange accounts use shared deposit systems, so the tracking trick works poorly there, but unsolicited tokens can still appear in DeFi wallets connected to your exchange activity.
