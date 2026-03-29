# Improving Wash Tracking in Oxwash

### The Conflict

Every morning at Oxwash's processing centers, a small team of laundry workers huddle around a Trello board. Many are in their 50s and 60s. English isn't their first language. They drag cards between columns: "Collection," "Washing," "Drying," "Ready for Delivery." The interface is tiny. The text is hard to read. One wrong drag and an order lands in the wrong column. No alert. No warning. Hours pass before someone notices.

A customer's suit isn't ready when promised. Trust erodes.

These small failures compound. By the time the processing team clocks out, they've burned energy on a tool that fights them rather than helps them. For people already managing mountains of laundry (cleaning, folding, ironing, packing), those extra clicks matter. They're the difference between a manageable shift and an exhausting one.

Oxwash had a bigger problem. As the company scaled from dozens of orders daily to thousands, Trello (built for creative teams managing project tasks) became a bottleneck. Missed status updates led to customer complaints. No historical data meant accountability fell through cracks. The interface was designed for anyone. It fit no one. And the human cost was real. People were struggling with a tool that didn't respect their time or their capabilities.

By early 2022, it was clear: we needed something purpose-built for this workflow, for these people. I was brought in as the product design lead to figure out what that should be.

### Discovering the Real Problem

Between September 2022 and January 2023, my product trio worked embedded with the operations team. Mohit (PM), Lily (lead developer), and me. We didn't just watch from a distance. We sat with them. Asked them to teach us. Listened.

In our first round of user interviews (seven processing managers), we printed out actual Trello cards and asked a simple question: "What information actually matters to you when you're updating a load?" The answers surprised us. They didn't need "Garment Size" or "Fabric Type." Those sounded important in a database. But what they really needed was clear visibility into five things: "Processing Notes," "Wash Cycle," "Machine Number," "Load Weight," and status.

One field alone changed everything. Processing Notes. When someone went on break or called in sick, their notes told the next person what to do. It was the difference between autonomy and work grinding to a halt.

We ran a card-sorting exercise with 16 Oxwash team members. They confirmed it: those five fields were non-negotiable. But we also learned something simpler and equally important. Language mattered. Nobody said "Trello card." They said "load." That's what they called it every day. So we renamed it. Small choice. Massive impact on how the interface would feel.

The deeper insight came when Lily and I mapped out their actual workflow. What happens when someone updates a load status on Trello? Find the order. Locate the card (sometimes multiple cards per order). Open it. Drag it to the new column. Three obvious friction points. Each one a place where errors happened. Users had to make multiple clicks. Navigate an unintuitive column structure. Risk accidentally dragging something into the wrong place. For workers juggling multiple tasks, this was exhausting.

One manager, Jake, put it bluntly: "The problem with Trello is that we sometimes drag orders into the wrong column. It slows us down because we have to be extra meticulous. Honestly, Trello's interface isn't that great."

### Meeting Users Where They Are

We also learned who we were designing for. Average age: 55. Many used Android phones, not iPhones. English was often a second language. That meant unclear icons, jargon, small text all became barriers. Accessibility wasn't optional.

There was a colleague named Lorraine. She had arthritis and was deaf and mute. She relied on coworkers just to update her status on Trello. She wanted to do her job independently. She needed to. We realized this tool had to work for her as naturally as it worked for anyone else. Probably better, because the barrier to using it was the only thing preventing her from being fully autonomous at work.

All this data pointed to one insight: we couldn't just rebuild Trello. We needed something radically simpler and more intuitive. Something that respected both the cognitive load and the real-world constraints of the people using it.

### Shaping the Solution

In a Crazy-8s workshop, six developers, Mohit, and I brainstormed eight design ideas: tabs to organize information without overwhelming the screen, buttons instead of drag-drop for status updates (no more accidental misplacement), QR codes for quick access (scan to jump straight to a load), color coding for instant status visibility. We voted on what felt right. Not what sounded clever, but what would actually reduce friction for people doing this work all day.

Then Lily and I built a prioritization matrix. We rated each idea by impact (how much would it improve the workflow?) and effort (how much engineering?). Some ideas were quick wins with outsized impact (color-coded badges). Others required more design thinking but were worth it (rethinking the information hierarchy). We picked the ones with the biggest payoff without overextending the team.

**Why tabs instead of a flat interface?** We needed to hide complexity without losing critical information. Experienced users could dive deep into Order Details or Fulfillment tabs. But the primary workflow (updating status, seeing Processing Notes, accessing Order Notes) stayed simple on the main screen.

**Why nested information with accordions?** Because Processing Notes and Order Details were too important to bury three taps deep. They needed to be right there, collapsible but visible. A processing manager might need to know instantly: "Are there special instructions for this load?" Hiding that would defeat the purpose.

**Why direct state buttons instead of drag-drop?** Because dragging is ambiguous. Did I mean to drag it? Is it selected? Am I sure? A button is clear. Tap "Mark as Washing" and it happens. No accidents. No second-guessing.

**Why emphasize Processing Notes so heavily?** Because that field became the connective tissue between team members. When Lorraine needed to communicate something, she'd type it. When someone returned from a break, they'd read it. It wasn't just a UI component. It was how people stayed coordinated without being in the same room.

### Three Rounds of Learning

**Round 1: Testing the hypothesis (September-October 2022)**

We created simple wireframes in Figma and printed them. Put them in front of processing staff and asked: "Can you update a load status with this?" Not "Do you like this?" but "Can you do your job?" The tab structure and buttons validated instantly. But we learned nuances. Users wanted the load number prominently at the top. Wanted color to reinforce status. Wanted quick access to notes without collapsing something else.

**Round 2: Making it feel real (November 2022-January 2023)**

High-fidelity prototypes in Protopie. A wireframe is a suggestion. A prototype feels like a product. Protopie let us add interactions and animations that matched real behavior. Tap "Washing" and the load moves to that column. The status badge updates. The interface feels responsive. I had to learn Protopie's logic (it's basically JavaScript for interactions) but once I did, I could build prototypes that felt real, not like mockups. Users could actually experience the flow.

And that's when Steph, a Processing Manager, said: "I like the flexibility that the processing notes offer. I can now key information so that my colleagues can read it, even if I am not around!" That quote told us everything. We'd solved the real problem.

**Round 3: Final refinement (January-February 2023)**

Based on real user feedback from Round 2, we iterated once more. Added a "History" tab so users could see what happened to a load. Refined the visual hierarchy so Processing Notes stood out. Made buttons large enough for people with arthritis to tap reliably. Tested across different Android devices (the phones people actually used, not flagship phones). Every change was grounded in something we'd heard from users.

### Getting It Out the Door

Before launch, we built detailed documentation for the development team. Every interaction specified. Every edge case thought through. We used a "Now, Next, Later" framework to decide what shipped on day one (status updates, notes, load details, history) versus later iterations (advanced reporting, predictive insights, bulk operations).

We presented to the senior leadership team. Got buy-in from Christie (Lead Product Designer), Michael (VP of Platform), and Thomas (Head of Software). They understood this wasn't just a feature. It was a foundational tool for how Oxwash would scale.

### The Resolution

On March 13, 2023, Wash Tracking went live.

Within a month:

- **Task completion time dropped by 40%** (from 3.23 seconds to under 2 seconds per load). Simple interaction design removes friction.
- **Customer complaints about misclassified orders fell from 3.55 per month to 0.8**. We eliminated drag-drop errors and added accountability.
- **Accountability errors nearly disappeared**. Historical data and user tracking meant mistakes were visible and preventable.

But the most meaningful metric came from Samantha, a Laundry Processing Manager: "Using Wash Tracking on Mobile has been a game changer for our colleague Lorraine, who has arthritis and is mute and deaf. Thanks to the tool's accessible design, she is now able to easily perform her job without relying on us, which has greatly improved her sense of independence and productivity."

We didn't just speed up a workflow. We gave someone her autonomy back. That's what good design does. It doesn't just optimize metrics. It respects people.

### What This Taught Me

**1. Talk to users before you test.**
When we presented mockups, we explained why we made each choice. Users felt heard, not imposed upon. That built trust. They became collaborators, not test subjects.

**2. Prototyping beats pretty.**
A beautiful Figma mockup means nothing. An interactive prototype shows users exactly what you're building. That's when the breakthrough conversations happen.

**3. Simplicity is a design skill.**
Anyone can make something complex. Making something powerful and obvious for users with different needs, different languages, different abilities. That's hard. That's where design matters.

**4. Your users will teach you the design.**
We didn't invent the tab structure or nested notes. Users showed us what they needed and in what order. We just listened and translated that into interface decisions. The best design comes from deep listening.