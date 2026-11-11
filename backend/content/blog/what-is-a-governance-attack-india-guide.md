---
title: "What Is a Governance Attack? Crypto Voting Hijack Explained"
category: "DeFi"
excerpt: "A governance attack lets a small group hijack a crypto project's votes and treasury. Learn how flash-loan voting works — and the warning signs to watch."
read_time: 9
author: Crypto Beginner Editorial Team
cover_image: "/covers/defi.jpg"
created_at: "2026-11-11T21:22:09+00:00"
faqs:
  - question: "What is a governance attack in crypto?"
    answer: "A governance attack happens when someone gains enough voting power in a crypto project — often temporarily, through a flash loan or borrowed tokens — to pass a proposal that benefits them, such as draining the project's treasury. Unlike a hack that breaks code, a governance attack uses the project's own voting rules exactly as written. That is what makes it so hard to stop once it starts."
  - question: "Can a governance attack affect my crypto in India?"
    answer: "It can, if you hold a project's governance token. A successful attack can crash the token's price, drain a treasury that was funding the project, or hand control to people who do not care about the community. Indian holders are affected the same way as anyone else, and selling afterwards still falls under India's 30% tax on crypto gains, with 1% TDS on transfers, under rules current as of September 2026."
  - question: "How can beginners spot a risky governance system?"
    answer: "Look for low voter turnout, very low quorum requirements, no time delay between a vote passing and it taking effect, and large amounts of the token sitting in lending pools where anyone can borrow it. If a proposal appears suddenly, offers suspicious benefits to one address, or is rushed through with almost no discussion, treat it as a red flag and wait before acting."
---

A governance attack is one of the strangest risks in crypto. Nobody breaks into a server. Nobody steals a password. Instead, an attacker follows the project's own voting rules — and uses them to take over. In the most famous case, an attacker borrowed hundreds of millions of dollars for a few seconds, voted with the borrowed tokens, passed a proposal that handed them the project's treasury, and disappeared. Every step was, technically, allowed by the rules.

This matters for Indian beginners because governance tokens are everywhere. If you have ever received a token from a DeFi project, an airdrop, or a decentralised exchange, there is a good chance that token carries voting rights. Understanding how governance attacks work helps you judge whether a project is built to last — or built to be taken.

> **Educational content only.** This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose. Nothing in this article is a recommendation to buy, hold, or sell any token.

## What Governance Means in Crypto

Many crypto projects are run by their token holders rather than a company board. Holders of a governance token can vote on proposals: how the treasury is spent, which features get built, what fees are charged, and who gets hired. This system is called a DAO, short for decentralised autonomous organisation.

The idea is simple and democratic: one token, one vote. The more tokens you hold, the more voting power you have. Proposals need a minimum number of votes — called a quorum — to pass. Once a proposal passes, smart contracts carry it out automatically. No manager needs to approve anything.

This design works well when voting power is spread across many small holders who care about the project. It becomes dangerous when voting power can be concentrated quickly, quietly, and cheaply. A governance attack exploits exactly that gap.

## What Is a Governance Attack?

A governance attack happens when someone gains control of a project's voting process and uses it to pass a proposal that harms the project or its holders — usually to drain the treasury, change the rules in their favour, or seize control of the project's funds.

The key detail is that the attacker does not need to break any code. The voting system works as designed. The attacker simply acquires enough voting power to win, often for a very short time. Once the proposal passes, the smart contract executes it automatically, and there is no manager who can press undo.

Think of it like a housing society meeting. Imagine the society's rules say any member can call a vote, and the vote passes if whoever shows up agrees. Now imagine someone temporarily borrows membership certificates from hundreds of neighbours, shows up with a majority, votes to transfer the society's repair fund to their own account, and returns the certificates before anyone notices. The meeting followed the rules. The result was still a robbery.

That is a governance attack in a nutshell.

## How Governance Attacks Actually Work

Most governance attacks follow one of a few playbooks. Understanding them helps you recognise the pattern when it appears in a new project.

### 1. The Flash Loan Attack

A flash loan lets someone borrow a huge amount of crypto for a single transaction, as long as it is repaid in the same transaction. If the transaction fails, the loan never happened at all. Attackers use flash loans to borrow millions of dollars' worth of governance tokens, vote with them, pass a malicious proposal, and repay the loan — all in seconds.

The most famous example is Beanstalk, a stablecoin project attacked in April 2022. The attacker used a flash loan to borrow around $1 billion in crypto, swapped it for enough governance tokens to control the vote, passed a proposal that moved the project's treasury to their own wallet, and walked away with roughly $182 million. The whole attack took less than a minute, and every step used the project's own rules.

### 2. Borrowed Token Voting

Flash loans are not the only way to rent voting power. Governance tokens can also be borrowed from lending platforms, just like any other crypto asset. An attacker borrows a large number of tokens, votes, and returns them after the vote closes. The cost is just the borrowing fee — often a tiny fraction of what the treasury holds.

This works because many voting systems count tokens held at a single moment in time, called a snapshot. If you hold the tokens at snapshot time, you can vote, even if you borrowed them an hour earlier and plan to return them an hour later.

### 3. Quiet Accumulation

Some attackers simply buy tokens slowly over weeks or months, often through many different wallets so nobody notices one buyer accumulating a large share. When they hold enough, they submit a proposal that looks reasonable on the surface — a "treasury reallocation" or an "emergency upgrade" — and vote it through with their own holdings.

This version is slower but harder to detect, because every step looks like normal buying and voting. It works best on projects where most holders never vote at all, so a modest stake is enough to win.

### 4. The Malicious Proposal

In May 2023, the privacy project Tornado Cash suffered a different kind of governance attack. An attacker submitted a proposal that looked like an ordinary update but contained hidden code. Once it passed, the code gave the attacker the power to create new tokens at will and control the project's governance. The community only discovered the takeover after it had already happened.

This method relies on the fact that very few voters actually read the code inside a proposal. Most people vote based on the title and a short description. If the code does something different from what the description says, the voters may approve their own loss without realising it.

### 5. Low-Turnout Takeover

Many DAOs suffer from extremely low voter turnout. In some projects, fewer than 5% of token holders ever vote. When turnout is that low, an attacker does not need a majority of all tokens — only a majority of the votes that actually show up. A small, organised group can outvote a large, silent majority.

This is the most common governance weakness of all, and it affects far more projects than flash loans do. A project with 10,000 token holders but only 100 regular voters is effectively controlled by those 100 people.

## Governance Attack vs 51% Attack

Beginners often confuse governance attacks with 51% attacks, because both involve someone gaining majority control. They are related but different.

| Feature | Governance attack | 51% attack |
|---|---|---|
| Target | A project's voting system | A blockchain's consensus |
| Method | Voting power, often borrowed | Mining or staking power |
| Cost | Often very low (flash loan fee) | Very high on large networks |
| Effect | Treasury theft, rule changes | Double spending, chain rewrites |
| Victim | One project's holders | A whole blockchain's users |
| Defence | Timelocks, quorum, vote locks | More miners/validators |

A 51% attack targets the blockchain itself and usually requires enormous computing power or staked funds. A governance attack targets a single project's voting rules and can be surprisingly cheap. That is why governance attacks happen far more often in practice.

## Why Attackers Target Treasuries

Project treasuries are the prize. Many DeFi projects hold treasuries worth millions of dollars in crypto — funds meant to pay developers, fund grants, and keep the project running for years. If an attacker can pass a proposal that moves the treasury to their own wallet, the reward is enormous compared with the cost of the attack.

Treasuries are especially attractive when they are large and the token's voting power is cheap to borrow. An attacker compares two numbers: the cost of gaining a voting majority, and the value of the treasury. When the second number is much bigger than the first, an attack becomes profitable — and therefore likely.

This is also why the size of a treasury is not always a sign of a healthy project. A huge treasury with weak voting rules is a target, not a safety net.

## Warning Signs Every Beginner Should Know

You do not need to read smart contract code to spot risky governance. These warning signs are visible to anyone who looks.

**Very low voter turnout.** If almost nobody votes, a small group controls the outcome. Check a project's voting history on its governance page before trusting it.

**No time delay after a vote.** Well-designed projects add a timelock — a waiting period of a day or more between a proposal passing and it taking effect. This gives the community time to notice something wrong and react. No timelock means an attack completes instantly.

**A huge share of tokens in lending pools.** If large amounts of a governance token are sitting on lending platforms, anyone can borrow voting power cheaply. Some projects publish this data; others do not, which is itself a warning sign.

**Proposals that appear and pass too fast.** A genuine proposal usually comes with days of discussion in forums and chat groups. A proposal that appears suddenly, is voted through in hours, and moves funds to an unfamiliar address deserves suspicion.

**Concentrated holdings.** If a handful of wallets hold most of the tokens, the project is effectively controlled by those wallets, whatever the voting rules say. Block explorers can show you the top holders of any token.

**Code that nobody has audited.** If a proposal's code has not been reviewed by an independent auditor, or if the project has never published an audit of its governance contracts, the risk is higher. Audits do not guarantee safety, but their absence is a clear warning.

**Emergency powers with no limits.** Some projects give a small team or a single wallet the power to pause the system or override votes. That power can be useful in a crisis, but it can also be abused — or stolen.

## How Good Projects Defend Themselves

The crypto industry has learned from these attacks, and well-built projects now use several layers of defence.

**Vote locking.** Some projects require voters to lock their tokens for days or weeks before voting. This makes flash loan attacks impossible, because borrowed tokens cannot be locked and returned in the same transaction.

**Timelocks.** A waiting period between a passed vote and its execution gives the community time to spot a malicious proposal and respond — for example, by withdrawing funds or warning exchanges.

**Quorum and supermajority rules.** Requiring a high minimum turnout, or a two-thirds majority for treasury proposals, raises the cost of an attack and makes quiet takeovers harder.

**Delegation and vote escrow.** Some projects let holders delegate their votes to trusted community members, or reward long-term holders with extra voting weight. Both approaches make it harder for a short-term borrower to outvote genuine holders.

**Multisig guardrails.** Some treasuries require approval from several trusted signers in addition to a token vote, so a single malicious proposal cannot drain funds on its own.

**Proposal review periods.** A mandatory discussion period before voting begins gives the community time to read the code and debate the proposal. Rushed proposals are the attacker's best friend; slow proposals are their worst enemy.

None of these defences is perfect, and attackers keep finding new angles. But a project that uses several of them is far safer than one that uses none.

## What This Means for Indian Beginners

Most Indian crypto users will never run a DAO or write a governance proposal. But governance attacks can still affect you in practical ways.

First, if you hold a governance token — from an exchange, a DeFi app, or an airdrop — its value can drop sharply if the project is attacked. A drained treasury often means the project cannot pay its developers, and the token price usually reflects that quickly. There is no insurance and no regulator to refund the loss.

Second, if you vote, vote carefully. Read the proposal description, check how long the discussion has been open, and look at who proposed it. If something feels rushed or unclear, the safest choice is to not vote, or to vote against it until you understand it better.

Third, be careful with airdrop claim pages and governance links shared in Telegram and WhatsApp groups. Attackers sometimes use fake governance votes as bait, linking to pages that drain wallets instead. Always reach a project's voting page from its official website or official social media account, never from a forwarded message.

Finally, keep records. If you buy, sell, or receive governance tokens, note the dates and amounts. Under Indian tax rules, crypto gains are taxed at 30% and a 1% TDS applies on transfers, with no set-off of losses against other income. Tax note: crypto tax rules can change — the 30% rate and 1% TDS described here were current as of September 2026. Verify the latest rules before filing.

## Governance Is Still Worth Having

After reading about these attacks, it is tempting to conclude that crypto governance is a failed idea. That would be the wrong lesson. Traditional companies have their own versions of the same problem — boardroom takeovers, proxy fights, and executives who redirect company funds. The difference is that in crypto, the attacks happen in public, on a transparent ledger, where anyone can study them and learn.

Governance attacks have pushed the industry to build better systems: vote locking, timelocks, higher quorums, and audited proposal code. Each attack teaches the next generation of projects what not to do. The projects that survive are the ones that treat governance security as seriously as they treat their smart contract code.

For beginners, the practical lesson is simple. Before trusting a project with your time or money, look at how it governs itself. Who votes? How many vote? Is there a timelock? Can anyone borrow enough tokens to take over? The answers tell you more about a project's future than its marketing ever will.

## Key Takeaways

- A governance attack uses a project's own voting rules to take control, often to drain its treasury.
- Flash loans let attackers borrow huge voting power for seconds at a very low cost.
- Low voter turnout is the most common weakness — a small organised group can outvote a silent majority.
- Warning signs include no timelock, low quorum, concentrated holdings, and rushed proposals.
- Good defences include vote locking, timelocks, high quorums, and multisig guardrails.
- If you hold governance tokens, check the project's voting rules before you trust it — and keep tax records for any gains or losses.
