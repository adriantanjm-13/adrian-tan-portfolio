# Building Mercury in Oxwash

### The Problem

When I joined Oxwash in September 2022, I inherited a crisis. The company's internal platform, called "Admin," had been built by an external design agency back in 2019. It was supposed to help operational staff manage orders and customer data. Instead, it had become a source of constant frustration.

The complaints were everywhere. Operational teams said it was confusing. It forced them to rely on multiple third-party tools just to get basic work done. There was no accountability for who changed what. The interface felt like it was designed for someone else entirely. And as Oxwash scaled from a handful of daily orders to thousands, the cracks widened. Admin couldn't keep up.

Two problems were crystal clear: First, the platform didn't meet the needs of our users. Second, we were throwing money at third-party tools because Admin couldn't do what we needed. We had to build something new. Something designed specifically for Oxwash, by Oxwash.

That something was Mercury.

### Understanding What Was Actually Broken

Between September and December 2022, my team went to work. Me, a junior product designer, and our PM, Mohit. We weren't going to guess. We were going to ask.

Five discovery sessions with developers. Fourteen user interviews. Eight shadowing sessions where we just sat and watched people work. We analyzed existing data using FullStory to see exactly where people were struggling. We talked to stakeholders. We listened.

What we heard painted a picture. The Admin platform had created a trust problem. Users didn't believe it would work. They'd found workarounds (those third-party tools). They'd made peace with inefficiency because they didn't trust the system to improve. Our job wasn't just to redesign something. It was to earn back trust.

From all this research, Mohit and I identified the core problems and developed three guiding principles for how we'd approach Mercury:

**Solve multiple problems at once.** Each redesign we undertook had to tackle multiple user pain points simultaneously. No siloed fixes.

**Let data guide us.** We weren't going to trust our instincts. Every decision would be grounded in what we'd learned from users.

**Build for the long term.** We weren't designing for today. We were designing for when Oxwash had ten times more users, ten new designers joining the team, and needs we couldn't predict yet. Mercury had to be adaptable.

### Who We Were Building For

Through research from the HR team and our own interviews, we identified two main types of users with distinct needs. But more importantly, we understood their context. They were operational staff. They had specific jobs to do. They didn't have time for a confusing interface. They needed clarity, speed, and reliability.

### The Architecture Problem

The biggest issue with Admin was its information architecture. It let anyone access anything. A junior staff member could see confidential data. A manager couldn't control who saw what. This created accountability problems and security risks. We needed to fix it.

I analyzed the existing structure and proposed a new one: streamline information based on user segments. Different roles see different things. It's not complicated—it's smart. But it was a big shift from how Admin had been built.

I presented this to the platform team. Mohit (PM), Michael (VP of Platform), and Thomas (Head of Software). I needed their buy-in because this architecture would touch everything we built next.

They got it. They said yes.

### The Permissions Question

With buy-in on the architecture, I sat down with three developers (Lily, Hasan, and Andy) to figure out permissions. How should we actually differentiate what different people can do?

Our first instinct was to base it on job titles. Laundry Manager sees X. Laundry Assistant sees Y. But Lily pushed back. She said something I won't forget: "As a startup, roles always evolve and responsibilities change. It is important that we create more flexibility for our users by not limiting their rights on our platform."

She was right. A startup's roles are fluid. Someone might need elevated access for a month, then not need it next quarter. We built permissions around activities and data access, not titles. Much more flexible. Much more human.

### The Design System Gap

When I started, Oxwash had no design system. This was a problem. As we built Mercury, we'd be creating new interfaces, new components. Without a design system, everything would look different. Users would be confused. Developers would waste time rebuilding the same thing over and over.

My line manager, Christie (Lead Product Designer), and I decided to build one from scratch. But we didn't want to design in a vacuum. We wanted it to feel like Oxwash. So we started with brand research.

We did interviews with Oxwash employees and customers. We asked them: "What does Oxwash feel like to you?" The marketing team was doing a rebrand at the same time, so we shared our findings with them and their external agency. It was collaborative. Our research informed their decisions. Their decisions informed ours.

What did we learn? Users saw Oxwash as approachable and friendly. Not corporate. Not cold. They preferred rounded shapes over sharp ones. Warm colors. A sense of lightness, not heaviness. A "bubbly and youthful" feel.

This mattered because now when we designed components, we had a reference point. We weren't guessing. We weren't making it up. We had data. A user prefers rounded buttons? Okay. Let's make them rounded.

We built the design system using an atomic design approach, breaking everything into its smallest components and building up. Every month, we'd facilitate a "Design Guild" session where developers and designers sat together in Storybook and built components as a team. Developers weren't executing designs. They were collaborating on them.

### What Came Next

By the end of the process, we had a blueprint for Mercury and a design system to build it with. Senior leadership signed off. The PM signed off. The development team signed off. We were ready.

But here's the thing I learned: a blueprint isn't a promise. It's a guide. When new business needs came up (like building Wash Tracking), we adapted. We didn't rigidly follow the plan. We stayed flexible. We remembered that Mercury was a tool for people doing real work, not a static artifact.

### What This Taught Me

**Research is worth the time.** We spent three months before building anything. That felt slow. But those three months clarified everything. When we finally started designing, we knew exactly what we were solving for.

**User needs should drive everything.** Not aesthetics. Not technology. Users. Always.

**A design system is a collaboration, not a deliverable.** When developers help build it, they own it. They use it better. They improve it.

**Flexibility beats perfection.** The best plans are the ones flexible enough to bend when reality changes.