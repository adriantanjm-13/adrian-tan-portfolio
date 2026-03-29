Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor
![https://www.facebook.com/tr?id=2405571979784303&ev=PageView&noscript=1](https://www.facebook.com/tr?id=2405571979784303&ev=PageView&noscript=1)
Adrian TanProduct designerQuery Plan ComparisonDatabase administrators often face intense pressure when troubleshooting slow production environments. In these moments, every second counts, and the user interface must deliver clear, actionable insights—without oversimplifying crucial data.
I set out to answer a key question: how could we create an interface that not only compares query plans but also helps users identify exactly what went wrong?
This challenge was unique to PostgreSQL DBAs. As our subject matter expert explained, most PostgreSQL users rely on command-line tools and extensions to visualize query plans, making it a manual, query-by-query process. It takes time, experience, and in-depth knowledge to troubleshoot.
Our goal was to transform this tedious workflow into an intuitive, diagnostic experience inside a GUI—empowering DBAs when they need it most.
My contributionIn this project, I was the product design lead. My responsibilities included:
Product definition
User Interviews and Analysis
Information Architecture and User Journey Mapping
Product road mapping and feature prioritisation
Developing design system
Developing Wireframes and Prototypes
Product Documentation
User Testing and post-test evaluation
Shipping Product

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/YLI3jJp8AoxchY9D.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/YLI3jJp8AoxchY9D.png)
1Context2Constraints3Discovery4Design & Test5Design & Prototype6Outcomes & ImpactsContextStruggling to compare: inside the user's daily challengeUsers faced a frustrating reality: to compare query plans side by side, they had to juggle two separate browsers. Beyond that, every diagnosis required manual calculations just to spot differences, uncover issues, and measure the business impact of any recommended changes. In short, what should have been a straightforward comparison became a daily pain point, draining time and energy from users who needed a better way. (See below)
What if we create a seamless comparison experience where users do not need to use two separate screens to compare? Even better - including a breakdown of the difference to indicate the impact of changes?

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/jT2wUAGTpOGcov6K.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/jT2wUAGTpOGcov6K.png)
Users had to use two windows to compare query plans and calculate their discrepancies manually.
ConstraintsOur key challengesBefore kicking off this project, we were faced with several challenges:
Pivoting to Postgres:Deep in the realm of Oracle databases, our developers had long been working on introducing Oracle architecture monitoring for the last few years. This pivot, driven by business needs, necessitates the team to pick up new database domain knowledge.
Time Constraints: "We need this feature out by this month." This were the words of our PM, Spencer, who was urged by an enterprise customer, to introduce this valuable feature. Competitors in the market are starting to introduce a similar feature with AI tools embedded in it.
Legacy codebase: The product was a legacy one which had a complex gargantuan codebase. The team that previously built query execution plan feature had long left the company, and so, our team had limited knowledge of how the feature was previously built.
To address these challenges, we adopted a lean approach with multiple streams of technical investigation to shape design output. Working in parallel with different backend developers provided us with insights regarding data availability, constraints, and possibilities.
The roadmapUnlike most epics that run for months (or sometimes, years) on end, this epic was unusually short. This was due to customer demand coupled with a competitor offering a similar feature, which required us to act fast. Working closely with an epic lead, Ricky, I set up a failproof research and design timeline that ensured the tightest process. Alongside our Lead Software Engineer, Ricky was working in the background to ensure that relevant data and backend architecture could support the design.
DiscoveryAt first glance, creating a comparison screen seems straightforward.
But as I delved into the project, I quickly discovered that the real challenge was much deeper. This wasn’t just about lining up data side by side.
It was about tackling technical constraints and putting myself in the user’s shoes to ensure the experience felt natural and consistent within a legacy product.
How can we present large volumes of nodes within a limited viewport without overwhelming users?
Does our interpretation of value differences truly reflect what matters to users?
What interface design will make comparisons genuinely effective and easy?
Are we capturing and storing the right data to enable these comparisons?
How do we design a comparison journey that feels seamless and intuitive?
With this being a brand new feature, how can we ensure the design stays in harmony with the rest of Redgate Monitor, a well-established legacy product?

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/6kDGTLfRu36bvXDc.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/6kDGTLfRu36bvXDc.png)
Uniting the team to tackle complex challengesKnowing how challenging it would be to introduce this new feature, I organised a full-day workshop with my PM. Our goal was to bring the entire team together, clarify our shared purpose, and set clear objectives moving forward. We focused on outlining business goals, understanding the scope of work, mitigating risks in the implementation process, and uncovering potential pitfalls before they became roadblocks.
We divided the day into two portions: the first being learning and design session; the second being the group critique and solution session.
To ground our workshop in real user needs, we arranged three customer calls beforehand, pairing different developers with different customers to collect a variety of perspectives. During the workshop, I guided the team in creating an affinity map from their call insights, turning scattered observations into actionable themes we could rally around.

![Screen design displayed in a mockup](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/kv2fdNYySgSBol6s.png)

![Screen design displayed in a mockup](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/QFEI6zcoFOoF2pAJ.png)

![Screen design displayed in a mockup](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/BkaFZK0yOAGmSxtH.png)
Our Design PrinciplesAfter navigating our constraints and synthesizing customer feedback, we established three core principles to guide our design decisions:
1.Diagnostic Speed Over Comprehensive DetailShow DBAs the critical regression signals immediately, with progressive disclosure for power users who need depth.
2.Leverage Familiar PatternsExtend existing Redgate Monitor patterns rather than reinvent the wheel—reduce learning curve for existing users.
3.Design for Future ScaleCreate reusable comparison patterns that could extend beyond query plans to other database objects.
These principles helped us prioritize ruthlessly when faced
with our 4-week timeline and technical constraints.
Design & TestValidation through testingWe conducted 3 iterative testing rounds, refining designs based on findings from each cycle. In all the testing rounds, there are no repeated test participants. We tasked them with the same set of tasks we had given to the previous round to find out if we had addressed the concerns raised earlier.
Round 1: Testing with the Subject Matter Experts3 Participants (2 Advocates + 1 Former DBA)
Key findings: All participants immediately praised the cohesive nature of the comparison screen. All mentioned the node differences column provided
Pain points: While comparison screens worked as a whole, participants pointed out concerns about the complicated nature of the user journey, citing that the plan selection process was convoluted.
Round 2: Testing with Internal developers3 Participants (Developers)
Rationale: Due to difficulty accessing external users (specifically Postgres customers), we resorted to user testing with internal developers to validate mental model of prototype, as well as to validate if we have addressed the advocates' concerns.
Key findings: All participants found it challenging to select execution plans to compare, citing that the comparison screen was too difficult to navigate.
Pain points: Users did not like having to toggle between views. More importantly, they did not find it helpful to preview the history of the execution plan in a comparison screen.
Round 3: Testing with Solution Engineers2 Participants
Rationale: In order to get an objective input of our design, we solicit the help of experienced solution engineers who are aware of user needs and concerns to participate in our user testing.
Key findings: All pain points from earlier rounds were addressed with input on "version 2" of the feature.

Hypothesis 1Users preferred viewing either a table or a chart; not bothOur Assumption:If we allow users to toggle between timeline (when) and plan details (what) without navigation, they can diagnose regressions 50% faster than the current multi-tab workflow.

![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/7XtevdnSSFXBYr2M.png)
Prototype 1Prototype 1 featured a toggle control in the header that switched the entire view between chart mode (showing 30-day performance timeline) and table mode (showing individual execution plan details). Users had to mentally track their selections across view switches.

![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/xqJmiPDoQmoowMIi.png)
Prototype 2 ⭐️Prototype 2 displayed both views simultaneously: a line chart in the top 40% showing performance trends with clickable data points, and a table below showing plan details with synchronized highlighting. Selection state was maintained across both views.
FindingsPrototype 1 was too convoluted:90% of users shared that the toggling view (Prototype 1) was challenging and did not add value to their user experience. Specifically, they found it cumbersome to toggle between chart and table to identify their selection.
The time taken to complete the task was 3.4 minutes on average, during which users spent most time trying to decipher what they were looking at.

Prototype 2 was straightforward:100% of the users found that prototype 2 was a lot easier to understand. With both chart and table that interacted with each other, users felt that it was very straightforward for them to pick the appropriate execution plans to compare.
The time taken to complete the task was 45 seconds on average with users intuitively knowing what to do next.
Design Decision:We went with prototype 2's user flow as it was intuitive, straightforward, and easy to work with.
Hypothesis 2Preview of Query Execution plan was necessaryOur Assumption:If we show users what they have selected in the query comparison page and allow them to re-select the query plans, users would find it easier to perform the task of query comparison seamlessly.

![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/Ni3AkEfbIuStxk9R.png)
Prototype 1Preview of query plan history embedded in comparison screen

![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/IJauuqEyMNCzQQV4.png)
Prototype 2 ⭐️Preview of query plan history not embedded in comparison screen
FindingsPrototype 1 took up too much real estate:80% of users had difficult initially finding the comparison section as the plan history had taken up too much real estate. They felt that it was unnecessary to have plan history embedded in comparison view.
Participant A: "I have picked the plans I wanted to compare earlier, why do I need to preview the history in this page?"
Participant B: "I thought I was looking at a single plan only, but it was until you tell me that there is a comparison at the bottom, then I see the comparison. This is not helpful."

Prototype 2 was straightforward:100% of the users found the prototype 2 cleaner, straightforward, and directive. They particularly liked the fact that most of the real estate is dedicated to the important chunk of the feature: the comparison panel.
Participant A: "What I really like about this prototype is that I can easily see everything at one go. I don't have to scroll up and down to compare."
Advocate A: "What worked for us as DBA is the straightforward and immediate view of the node difference. We can easily go back to create new comparisons. It is ok to not have them in this view."
Design Decision:We went with Prototype 2 primarily because of the information hierarchy, information clarity, and appropriate use of real-estate. Our user testing taught us that users are capable of re-selecting execution plans should they lose the context of this screen.
Design & PrototypeDesigning an intuitive query plan comparison experience sounds straightforward and easy at the get-go. But, the challenge lies not in just bridging the comparisons together, but specifically on the user journey towards the comparison screen. Through multiple iterations, I developed 2 testable prototypes that balanced user needs with technical constraints.
I used Figma to create the prototypes for testing, with the help of our epic lead, to ensure that I have prototyped for all the possible user journey. For example, how do users go about selecting only two plans for comparisons? What interaction patterns can we use to disable selecting more than two? If users select only one plan, what happens? These are just some of the questions we had to work through in our prototypes.
I solved all these questions on Figma.

![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/q4BAz6L7EFlNZpvq.png)
Wireframing
![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/u11SjFzLUYPx1NC5.png)
PrototypingDesign DecisionsAfter four weeks of user testing and design reiterations, we have carved out the final product. Below, I detail three key aspects of the feature.

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/us39X0WaRMRw2ECu.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/us39X0WaRMRw2ECu.png)
Combining viewsWe integrated chart and table into a single interface, eliminating the cognitive load of toggling between modes. This decision directly addressed the 3.4-minute task time we observed in Prototype 1, reducing it to 45 seconds.You can write here as much as you want, this text will always look nice, whether you write longer paragraphs or just a few words. Click here and try it out.

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/W6YyAKvVtdyE6DsQ.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/W6YyAKvVtdyE6DsQ.png)
Focused ExperienceTo minimise cognitive load, we prioritise key information display, i.e. the comparison screen. We reduce the clutter by removing plan history information.

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/5RsGPOwSvhXKaujl.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/5RsGPOwSvhXKaujl.png)
Accounting for DifferencesWhile we acknowledge that node-for-node comparison is what users tend to do, we included a more generic view of the comparison panel for users to compare not just like-for-like but for different types of nodes as well.
After weeks of discovery and design, our team had broken down the entire prototype into implementable pieces. It took us a total of three weeks to launch the feature. We even conducted a demo session for our advocate to get her buy-in.

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/UV0GqdrLkILqbHgR.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/UV0GqdrLkILqbHgR.png)
Product demo to advocate
Outcomes and ImpactOur goal was to enable users to spot query plan differences in under 1 second. Using App-insights and tracking usage events, our post-launch analytics confirmed that we have exceeded our goals! Here are the numbers:
8sAverage time to identify regression (down from estimated 7.83 minutes of manual calculations)
92%of users successfully identified the problematic node on first attempt following implementation
52sTask completion rate for full comparison workflow!

![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/KxMCRMjA4xrpCKLb.png)
The feature adoption saw immediate spike upon release in August 2025, highlighting the value it brings to our customers.

![Image alt tag](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/aguihYyvvZruw0ua.png)
With the help of our advocates in promoting the feature and sales enablement team sharing this in October 2025, we saw a spike in active users since November 2025.
Business ImpactThe feature helped our product to become akey sales differentiatorfor PostgreSQL enterprise deals
Feature was implemented for SQL Server and Oracle instances
Led to2 major license renewalswhere customers cited this feature
Createdupsell opportunity- basic tier customers upgraded for comparison capabilities
Validated our PostgreSQL pivot- demonstrated we could deliver enterprise-grade features
Up nextFollowing initial discussions with advocates and experts, we learn that the feature has a long way to go to become an exceptional feature. In the next improvement (i.e. V2), our team will be focusing on introducing:
AI features to analyse query performances
Annotation capabilities for team collaboration and knowledge sharing
Custom threshold configuration for user-specific regression definitions
Credit roll 🥁Designing this feature was hard as I had just entered into a brand new database type, PostgreSQL, from Oracle. The challenge for me lies not so much in understanding how PostgreSQL works, but what PostgreSQL users need to see and what they cared about. In addition, this project required me to understand the technical constraints and limitations surrounding a query execution plan.
But all these could not have been possible without the help of my wonderful team:
PM - SpencerTech Lead - StephenEpic Lead - RickyLead Dev - PeterDev - KayaDev - Kazim

![./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/zOLTk4ZRTIpGFUYs.png](./Adrian Tan's Portfolio - Query Plan Comparison in Redgate Monitor_files/zOLTk4ZRTIpGFUYs.png)
Copyright ©adriantan.xyz