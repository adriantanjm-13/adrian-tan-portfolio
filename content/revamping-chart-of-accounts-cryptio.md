# Revamping Chart of Accounts in Cryptio

### The Crisis

Cryptio's retention rate was dropping. Fast. Accounting teams who signed up were leaving. The customer operations team dug in to find out why, and the answer was always the same: the Chart of Accounts module was broken.

Not broken in the sense of crashing. Broken in the sense of being unusable. Complex. Confusing. So hard to understand that users would rather find a competitor who got it right.

Competitors like BitWave were already building better versions. And Cryptio was losing deals because of it.

The Chart of Accounts (COA) is the backbone of crypto accounting. It's how transactions get categorized. You make a purchase for office supplies, the COA knows to put it in "Office Supplies Expense." You receive income from sales, it knows where that goes. It's the invisible system that makes accounting work.

But Cryptio's version wasn't invisible. It was in the way. Users had to navigate overlays on top of overlays. Modals nested inside modals. Three layers of interfaces just to complete one simple task. And when they finally found what they needed, the buttons they wanted were hidden at the bottom of a long form.

Users were giving up. And Cryptio was losing them.

I was brought in to figure out how to fix it.

### Understanding the Mess

The first step was understanding exactly what was broken. I conducted user interviews. Watched shadowing calls. Participated in implementation sessions. I did a full UX audit of the existing interface.

What I found was a system that had grown complexity without purpose. Every feature was there for a reason once, but they'd piled on top of each other until the interface was unnavigable.

**The overlay problem:** Users created COA mappings inside an overlay that was already sitting on top of another list. This created a visual constraint. They couldn't see enough. And they couldn't see what they were working on in context.

**The modal nightmare:** To create an "Individual Mapping," users had to open a modal on top of the overlay. But inside that modal was yet another "Fair Market Value" mapping field. Except there was already a Fair Market Value mapping in the parent process. So users got confused about where they were and what they were supposed to do.

**The presentation problem:** Instead of using clean tables, the interface used long text blocks. Dropdowns were packed with verbose content. Everything felt cluttered and overwhelming.

**The color confusion:** The interface used a red box to mark "Admin-only" fields. But red was nowhere in Cryptio's brand. Users didn't understand what it meant. One accounting partner told me: "First time users often bemoan the fact that they don't understand why there is a red box around certain parts of a form."

**The hidden actions:** The most important actions (Save, Delete) were buried at the bottom. Users had to scroll through the entire overlay just to find them.

All of this added up to one thing: users couldn't do their job efficiently. And when your product makes someone's job harder instead of easier, they leave.

### Setting the Challenge

Before we started redesigning, I worked with the PM and Head of Product to define what we actually wanted to achieve. We needed metrics because a revamp is expensive. We needed to prove it was worth doing.

We set three goals:

**User satisfaction:** Hit 60% average satisfaction post-redesign. (The old interface was much lower.)

**Task efficiency:** Reduce the time to complete critical tasks by 45%. (Users were wasting time navigating confusing interfaces.)

**Enterprise feedback:** Get at least 2 major customers to say "this is better." (Retention was the problem. We needed to hear it from users.)

### The First Try (And Why It Failed)

I sketched out wireframes and put them in front of users. The vision was simpler: consolidate information, reduce layers, make it clearer.

But simplicity on paper doesn't equal simplicity in practice. Users hated it.

Their feedback was brutal and direct:

"I don't want to navigate multiple screens to create a mapping. I lose information in the process."

"Don't spread the mapping creation across different pages. Give me one central place to do it."

"Show me all the mappings in one table, not divided by type."

"Actually, I liked using overlays. But yours didn't work. Make a better overlay."

I had failed. I'd oversimplified and removed familiar patterns that users actually relied on. I'd spread the process across too many screens. And I'd ignored what users actually wanted.

But the failure was useful. It taught me something critical: don't throw out the familiar just because it's familiar. Use it as a foundation and improve it.

### The Real Iteration

After the first failure, I sat down with the PM and Head of Product again. We had new data requirements that had surfaced during testing (Fair Market Value Mapping, Default Mapping, Asset-Based Mapping, Cluster Mapping). We had user feedback telling us what we'd gotten wrong.

I completely restructured the information architecture. Instead of spreading mapping creation across multiple screens, I centralized it. One place to create, edit, manage all COA mappings. But I kept overlays because users wanted them. I just made them better—expandable, clearer, less cluttered.

For the table, I worked closely with Tremaine, our Accounting Strategist. The challenge was that different mapping types had almost nothing in common. A "Default Mapping" looks completely different from a "Cluster Mapping." But users wanted to see them all in one table. So we structured it to show the essential information uniformly, but with accordion sections that let users expand and see type-specific details.

The key insight: users don't want oversimplified. They want clarity. They want to see everything at once, but only see what's relevant to their current task.

### Balancing Familiar with New

In the second iteration, I faced a decision: should I completely replace familiar patterns, or build on them? Users had told me they liked using overlays for viewing information. So I kept overlays. But I made them expandable. A power user like Cory could work efficiently without expanding. But a new user could expand to see everything they needed.

This balance between familiar and new became the core of the redesign. Don't break what works. Improve it.

### Testing Validates the Change

When I tested the new design with accounting partners, the response was completely different.

Cory, one of the power users, said: "As a power user I do not need to expand the overlay, but for new, first-time users, they definitely need to expand the overlay so that they can manage the information efficiently."

That's exactly what we'd built for.

Other users loved the tabular view. They loved that information was organized and segmented. They appreciated the helper text that explained what each mapping did. They could finally understand what they were looking at and what they were supposed to do.

### The Outcome

After launch, satisfaction climbed. It wasn't instant. Users needed time to learn the new interface. But unlike the old system, they didn't give up. The gradual adoption curve we saw was natural. Some users needed guides for edge cases. But most found the redesign intuitive without training.

By July, satisfaction hit levels we hadn't seen before.

### What This Taught Me

**Iteration beats perfection.** My first design tried to be perfect. Instead, it was wrong. The designs that worked came from failing, listening, and trying again.

**Users know what they need.** They told me: keep overlays, consolidate creation, show everything in one place. I didn't invent the solution. I listened and translated their needs into design.

**Familiar + better is stronger than completely new.** Users weren't rejecting the old design because it was old. They were rejecting it because it was broken. When I fixed it while keeping patterns they understood, it worked.

**Collaboration creates better solutions.** Working with Tremaine on information structure, with the PM on strategy, with users on validation. None of those happened in isolation. Every conversation made the design better.