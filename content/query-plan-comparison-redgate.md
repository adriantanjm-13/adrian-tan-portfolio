# Query Plan Comparison in Redgate Monitor

### The Crisis

A database administrator at 2 AM. Production is slow. Customer transactions are backing up. And the DBA has maybe seconds to figure out why and fix it.

This is the reality for PostgreSQL DBAs using Redgate Monitor. When something goes wrong, they need answers fast. But right now, they don't have them.

To compare two query execution plans, they have to open two browser windows side by side. Find the first plan. Find the second plan. Then manually calculate the differences between them. What changed? Where's the bottleneck? How bad is it? All of this requires deep technical knowledge, experience, and time. Time they don't have.

Competitors were starting to build solutions that did this automatically. With AI. With clarity. With speed.

Redgate was falling behind. And there was an enterprise customer demanding we build this feature. Now.

The challenge was clear: create an interface that shows DBAs exactly what went wrong with a query, without oversimplifying the technical data they need to diagnose the problem. Make it fast. Make it intuitive. Make it work on a legacy codebase that nobody fully understood anymore.

And do it in 4 weeks.

### Understanding What We Were Up Against

We had constraints stacked on top of constraints.

**The PostgreSQL pivot:** Redgate had built everything for Oracle databases. Now we were moving into PostgreSQL. The team had to learn a completely new database system while building a feature for it. That's not just a technical challenge. That's a knowledge problem.

**The legacy codebase:** The product was old. Complex. The team that originally built the query execution feature had left the company. So we didn't have institutional knowledge. We had a legacy system nobody fully understood, and we needed to build on top of it.

**The time pressure:** Four weeks. Not months. Weeks. An enterprise customer was waiting. Competitors had similar features coming. We had to move fast.

**The data problem:** We didn't even know if the backend could provide the data we needed to build this feature. That investigation was happening in parallel with the design.

To handle all of this, I worked with Ricky (epic lead) to set up a compressed discovery and design timeline. While Ricky worked with the engineering team to figure out what data we could access, I worked on understanding what DBAs actually needed.

### What DBAs Actually Need

I organized a full-day workshop with the PM (Spencer) and the whole team. We weren't going to guess. We were going to listen.

Before the workshop, I set up three customer calls. Different developers paired with different customers. Different perspectives. Different pain points. During the workshop, I guided the team in creating an affinity map from everything we'd heard. Turning scattered observations into themes we could rally around.

What emerged was clear:

DBAs face intense pressure in those critical moments. They need to see regression signals immediately. But they also need to be able to dig deep for power users who know exactly what they're looking for. The interface has to work at both levels.

They're already familiar with Redgate patterns. So we shouldn't invent new patterns. Extend what they know.

And this feature shouldn't be a one-off. We should design it in a way that could be applied to other database objects in the future. Think beyond query plans.

### The Three Principles

From all of this, we established three principles:

**Diagnostic Speed Over Detail:** Show critical regression signals first. Advanced users can dive deeper. But first, show them what's wrong.

**Leverage Familiar Patterns:** Extend existing Redgate patterns instead of creating new ones. Reduce the learning curve.

**Design for Future Scale:** Build reusable comparison patterns that could extend beyond query plans.

These three principles guided every decision when we had to choose. And on a 4-week timeline with technical constraints, we had to choose a lot.

### Testing the Hypothesis

We built two prototypes.

**Prototype 1** had a toggle in the header. Click it and you switch between a timeline view (showing performance over 30 days) and a detailed plan view (showing individual execution plan details). Users had to mentally track their selections across view switches.

When we tested it, 90% of users said it was confusing. They spent 3.4 minutes on average just trying to understand what they were looking at. One user said: "I have to think too hard about which view I'm in."

**Prototype 2** displayed both views at the same time. A line chart at the top showing performance trends over 30 days. A table below showing plan details. Click a data point in the chart and the table highlights the corresponding plan. Everything was connected. Selection state stayed consistent.

100% of users found Prototype 2 straightforward. Task completion time dropped from 3.4 minutes to 45 seconds. Users intuitively knew what to do.

The lesson: don't make users toggle between views. Show them everything they need, organized clearly.

### The Information Problem

We had a second hypothesis about whether to show plan history in the comparison screen.

**Prototype 1** embedded the plan history directly in the comparison view. Users could see what plans they'd selected and re-select new ones without leaving the page.

But 80% of users said this took up too much space. One user said: "I have picked the plans I wanted to compare earlier. Why do I need to preview the history in this page?" Another: "I thought I was looking at a single plan only. It wasn't until you told me there was a comparison at the bottom that I saw it. This is not helpful."

We were wasting real estate on something users didn't need in that moment.

**Prototype 2** removed the plan history from the comparison view. If users needed to select different plans, they could go back and do it. But the comparison screen was dedicated entirely to what mattered: comparing the two plans.

100% of users preferred this. One advocate said: "What worked for us as DBA is the straightforward and immediate view of the node difference. We can easily go back to create new comparisons. It is ok to not have them in this view."

The lesson: sometimes the cleanest interface is the one that does one thing well.

### Building the Final Design

With our principles and testing done, I used Figma to prototype every possible user journey. How do you select exactly two plans? What prevents users from selecting three? What happens if they select one? What if they change their mind? These aren't just edge cases. They're the difference between a confusing interface and an intuitive one.

I worked with Ricky to make sure every path was covered. Every interaction was specified.

The final design combined three key decisions:

**First:** Chart and table in one view. Performance timeline above. Plan details below. Everything synchronized. Click a data point in the chart, the table highlights it. No toggling. No confusion.

**Second:** Focused on what matters. Comparison panel gets all the real estate. No distractions.

**Third:** Support different types of node comparisons. Not just identical nodes compared to identical nodes. But different types of nodes compared. More flexible. More powerful.

### The Outcome

When we launched in August 2025, DBAs got exactly what they needed. Not perfect. But fast and clear.

Within weeks, we hit our goal: DBAs could identify query regressions in under 1 second. 85% of users identified the problematic node on their first attempt. Task completion rate was 97%.

But the real metrics came later. With advocates promoting the feature and the sales team sharing it, adoption spiked in November 2025.

The business impact was immediate:

**Sales:** The feature became a key differentiator for PostgreSQL enterprise deals. Two major customers cited this feature as the reason they renewed their licenses. One customer even upgraded from a basic tier to enterprise specifically for comparison capabilities.

**Product validation:** We'd been nervous about the PostgreSQL pivot. This feature proved we could deliver enterprise-grade capabilities for PostgreSQL. We'd earned trust.

**Future roadmap:** Success validated that our comparison pattern could extend to other database objects. We planned V2 features: AI-powered analysis, annotation for team collaboration, custom threshold configuration.

### What This Taught Me

**Constraints force clarity.** We had 4 weeks, a legacy codebase, and uncertain data availability. Those constraints forced us to ask "what actually matters?" We couldn't build everything. So we built what was essential.

**Users are your consultants.** We didn't invent the timeline plus table layout. Users told us they needed both timeline context and plan details. We just figured out how to show them together.

**Speed is a feature.** Going from 3.4 minutes to 45 seconds isn't just an optimization. It's a completely different user experience. When time pressure is the context, speed becomes the most important design consideration.

**Legacy systems aren't a constraint. They're an opportunity.** Extending Redgate patterns instead of inventing new ones meant users felt at home. They learned faster. They adopted faster.