Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio
![https://www.facebook.com/tr?id=2405571979784303&ev=PageView&noscript=1](https://www.facebook.com/tr?id=2405571979784303&ev=PageView&noscript=1)
Adrian TanProduct designerAbout CryptioCryptio is a leading back-office platform that helps to streamline and simplify the accounting and financial management of cryptocurrency transactions. Our customers are crypto-native firms who rely on us for efficient and up-to-date information for their accounting processes.
My role as Product Design Lead:
Leading discovery of redesign project
Setting roadmap for discovery to implementation
Collaborating with subject-matter experts on design
Conducting user testing and design validation with internal and external stakeholders
Reiterating design based on feedback and design validation workshops
Capturing metrics for design improvement and user satisfaction
QA-ing design before production

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/xoffLbqwXdV7lJJK.gif](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/xoffLbqwXdV7lJJK.gif)
Before and after transformation of Chart of Accounts

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/pZzGaiKwY6Sxr56B.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/pZzGaiKwY6Sxr56B.png)
1Context2Overview3Discovery4Ideation5Reiterations
![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/XtlAp5a4GaDOBLNO.jpg](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/XtlAp5a4GaDOBLNO.jpg)
What is "Chart of Accounts" (COA)?TheChart of Accounts(COA) module is essential for managing, editing, and automating the categorization of financial transactions. By setting rules based on the assets from imported sources and labels attached to transactions, the COA ensures that each transaction is accurately assigned to the correct credit or debit account.
In accounting, the COA functions like a set of categories for your financial transactions. For example, if you make purchases for office supplies, pay utilities, or receive income from sales, the COA helps to automatically categorize these transactions into the appropriate accounts. If a transaction is labeled as "office supplies," the system will recognize it and allocate it to the "Office Supplies Expense" account, ensuring that all financial data is properly organized and recorded.
Read morehere.
Why are we revamping the COA?In recent months, we've observed a troubling decline in our retention rate.
A thorough investigation by our customer team has identified a significant factor contributing to this issue: our current Chart of Accounts (COA) module isoverly complex and inadequatefor managing the intricate data our customers handle. This insight stems from interviews and feedback collected by our customer operations team, who consistently report these complaints from users.
In comparison, competitors like BitWave offer a more intuitive, sophisticated, and user-friendly COA workflow. Given the clear link between our retention rate decline and our COA module's shortcomings, it's evident that revamping our COA module is an urgent priority.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/ZXj0rHXdYEa6pwfa.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/ZXj0rHXdYEa6pwfa.png)
An overview of timeline in the COA Revamp
DiscoveryTo understand what needed fixing, it is crucial to diagnose the problem. Using a combination of discovery methods: user interviews, shadowing customer calls, participating in implementation process, and UX audit, below is a rundown of the problem with Chart of Accounts module.
TL;DR of problem: The existing design does not allow users to intuitively and efficiently manage their chart of accounts mapping due to the poorly prioritised information hierarchy and presentation.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/PVndbsBjHNZbfu4w.gif](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/PVndbsBjHNZbfu4w.gif)
Limiting Information ViewportThe creation of Chart of Accounts is a detailed and complicated process.
By using an overlay, we create an unnecessary visual constraint for users to efficiently create a COA mapping.
Moreover, by using an overlay on top of a list of table, users are bombarded with a lot of information. It unnecessary distracts users.
Also, the use of an overlay makes it easy for users to exit the mapping process accidentally. In doing so, they might lose the unsaved work they are doing.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/K2s6MI7FfQ2UmSlX.gif](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/K2s6MI7FfQ2UmSlX.gif)
Confusing User InteractionsBy nesting a modal on top of an overlay, there are three layers of information users have to engage with. This makes it very confusing for users to focus on what they are doing.
Additionally, the modal for "Individual Mapping" has an additional set of "Fair Market Value" mapping, when there is already a "Fair Market Value" mapping on the creation of chart of accounts process. This is highly confusing for the users.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/NrDmuj15OxS3noJc.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/NrDmuj15OxS3noJc.png)
Unintuitive Information PresentationThe current design lacks intuitive information presentation, which can hinder user understanding. Instead of using concise tables for efficient space utilization and ease of comprehension, the design relies on lengthy text statements.
Furthermore, dropdown menus contain verbose content, leading to unnecessary clutter and potentially confusing user experience.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/yL21AGCrGLmD0DQf.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/yL21AGCrGLmD0DQf.png)
Inconsistent Design LanguageThe current design employs a perplexing red box to designate certain sections of the form as "Admin-only" fields. However, this color choice deviates from the established brand identity and fails to convey clear information about its purpose.
"First time users often bemoan the fact that they don't understand why there is a red box around certain parts of a form. There simply wasn't enough information to help them navigate this giant."- Accounting Partner

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/bOjKTtXLvvAdFPhA.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/bOjKTtXLvvAdFPhA.png)
Notice how the "save" and "delete" buttons are way at the bottom
Important user actions are not readily availableWhen we look at the user actions available to manage a chart of accounts mapping, we find that they tend to be hidden from the purview. Users actually have to go through the entire overlay just to find actions like "Delete" or "Save".
Governing MetricsA revamp is a costly work. To that end, as a product team, we need to demonstrate the value of our effort. Thus, we set the following as the ultimate goal we wanted to achieve:
To that end, the product team and I want to achieve the following outcomes:
Improved User Delight:We aim to enhance user satisfaction, targeting an average score of at least 60% user satisfaction post-revamp.
Increased Efficiency:We plan to simplify the workflow to reduce the time required to complete crucial tasks by 45%.
Increased Positive Feedback:Qualitatively speaking, we aimed to garner at least 2 enterprise customer's positive feedback.
IdeationRefining User flowAfter analyzing user feedback, it became clear that the core issue lies in the overly complex design of our user journey. Users reported significant challenges in completing tasks within a critical section of our platform due to how we’ve obscured key information. This forces them to remember multiple locations for hidden details, creating unnecessary frustration—particularly for new users during onboarding. Simplifying this process is essential to enhance usability and overall satisfaction.
To address this problem, I conducted a user-journey mobbing session with our customer-team colleagues to craft the most seamless user journey for the JTBD.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/eJf7iiarAuOHmG1t.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/eJf7iiarAuOHmG1t.png)
The preliminary user flow for COA
Developing the first iterationUsing the user journey proposed above, I developed the first sets of wireframes for user testing. In developing these wireframes, my primary goal was to validate whether our users find it intuitive to navigate the new layout. To do so, I employed these questions for user test:
How might the user create a COA mapping?
How might the user delete a COA mapping?
How might the user find information for date of creation?
Here are the mid-fi prototypes of our initial draft.

![Screen design displayed in a mockup](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/45qmZWr7ueVGdIll.png)

![Screen design displayed in a mockup](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/WjEp1lUQrmHxHE3J.png)

![Screen design displayed in a mockup](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/jjYOeK2oifteRMlr.png)

![Screen design displayed in a mockup](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/BgLRTYFSweAv3nI4.png)
⛔️ Initial FailureThe first iteration was an abysmal failure. User testing revealed that my initial design was, in summary, too complicated to use. These are their feedback:
Users do not like the fact that they have to navigate multiple screens to create a COA mapping. They find that information tend to be lost in the middle of the process.
Users do not like that the creation of a particular mapping is tied to a particular page. Instead, the creation of a COA should be a centralised process.
Users want to see all the mappings in a single screen as opposed to it being divided according to the mapping type. We should create a single table that shows all the mappings available.
Users still want to user overlays to view information rather than a lower compartment where information is retrieved.

New Data RequirementsIn the process of testing these mockups, I also received new data requirements from the stakeholders. These new data requirements surfaced because the new information presentation allowed us to see opportunities to manage information in a much more granular fashion, thereby empowering users in managing their Chart of Accounts.
These new data requirements included:
Fair Market Value Mapping
Default Mapping
Asset-Based Mapping
Cluster Mapping
To accommodate these new data requirements, I had to revamp the information architecture and user flow so that these data requirements can be incorporated seamlessly into the UX.
ReiterationsChallenge: Incorporating New Data Requirements and Addressing User FeedbackFollowing our first iteration, I spent a few days working with the PM and our Head of Product to develop a design layout that can encapsulate the new data requirement while addressing the user feedback.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/kM4d1YBvuEDZVAtT.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/kM4d1YBvuEDZVAtT.png)
A new layout that improves information accessibility
1. Holistic Overview of InformationAs I wanted to ensure that users can access information readily and intuitively, I used a table approach to merge COA mapping information together.
This was challenging because there are very little similarities in terms of information between different COA mappings.
To address this challenge, I worked closely with Tremaine, our Accounting Strategist, to structure the table's information meaningfully.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/h1jBQwW2kwaQlPTl.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/h1jBQwW2kwaQlPTl.png)
A new default mapping view
2. Restructuring User FlowI have undertaken a significant restructuring of the user flow across multiple processes, with a particular focus on consistency.
Following feedback from internal stakeholders indicating that the initial iteration lacked clarity in default mapping, my goal was to ensure that all pertinent information was intuitively nested within the appropriate accordion sections.
My priority was to empower users by providing them with the option to easily manage the specific information they require, rather than overwhelming them with all details related to default mapping.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/QPRHXK04v4vnrz73.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/QPRHXK04v4vnrz73.png)
A centralised space to create COA Mapping
3. Centralised ProcessesI acknowledge that in the earlier design, there was a lack of consistency in processes like creating new mappings.
In response to user feedback highlighting the absence of a centralized mapping creation process, I developed a solution within the new design. This involved creating a centralized portal where users can efficiently generate COA mappings while seamlessly referencing the COA they are creating.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/7ejviBiuPpCtN8qE.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/7ejviBiuPpCtN8qE.png)
An Overlay Revamp
4. Balancing Familiarity with InnovationIn the initial iteration, I introduced several new features aimed at enhancing COA mapping management. However, user feedback indicated dissatisfaction due to the significant adjustments required on their end.
Consequently, it became imperative in the second iteration to discern which feature enhancements were effective and which were not. For instance, recognizing users' familiarity with utilizing overlays for COA information management, I opted to retain this feature for the subsequent iteration.
Nonetheless, I integrated a new functionality allowing users to expand the overlay, considering the potential need to accommodate a substantial amount of information.
User TestingFollowing this design iteration, Tremaine and I conducted a round of user testing with major accounting partners. We gathered the following:
User really liked the balance between having familiar interactions and new features. An accounting partner, Cory, particularly liked the fact that users have the option of expanding an overlay."As a power user I do not need to expand the overlay, but for new, first-time users, they definitely need to expand the overlay so that they can manage the information efficiently. "- Cory

Users particularly appreciated the helpful subtitle explaining the objective of each mapping rule. In doing so, it helps them with decision making when mapping new COA.

Users found the tabular view with segmented information neat and tidy, helpful for them to navigate the COA feature efficiently.

![./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/dspvn58cr10Exxb1.png](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/dspvn58cr10Exxb1.png)
Feedback from User Testing

![Image alt tag](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/u6FLNGGnB1bKtFTC.jpeg)
The gradual improvement reflects natural user adoption curves. Working with Product Marketing, we created supplementary guides to accelerate adoption for edge cases, though most users found the redesign intuitive without training.

![Image alt tag](./Adrian Tan's Portfolio - Revamping Chart of Accounts in Cryptio_files/5YPz3MqKniWEtHG5.jpeg)
Following the redesign launch, we continued iterating based on user feedback, addressing edge cases and refining interactions. This drove satisfaction even higher through July, demonstrating the value of continuous improvement alongside strong foundational design.
ConclusionA Reiterative JourneyRevamping the COA taught me a valuable lesson: iteration surpasses perfection.
When I was a junior designer, I once pursued perfection, aiming to deliver solutions that fully addressed users' needs and resolved their pain points. However, this revamp project revealed a different truth: design is not about achieving perfection; it’s about continuously iterating, refining, and validating.
Collaboration also plays a crucial role in this process. Working closely with various teams pushed me to think beyond conventional boundaries and reassess my design choices. Regularly consulting with collaborators like Tremaine and Claudia allowed me to validate ideas before implementation. Their feedback was instrumental in determining whether my concepts were viable, useful, and intuitive.
Copyright ©adriantan.xyz