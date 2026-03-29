Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash
![https://www.facebook.com/tr?id=2405571979784303&ev=PageView&noscript=1](https://www.facebook.com/tr?id=2405571979784303&ev=PageView&noscript=1)
Adrian TanProduct designerImproving Wash Tracking in OxwashAbout the ProjectOxwash, a leading laundry startup in the UK, is expanding its operations and striving to transform the laundry industry with its sustainable laundry processing technology.
Our goal is to streamline every aspect of the laundry process, from order collection to wet cleaning to delivery, to ensure a seamless experience for our customers and processing staff alike.
This case study takes you through my significant contribution to the company and the laundry industry at large: the Wash Tracking Prototype.
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
The final deliverable!
1Challenges2Discovery3Findings4Requirement5SolutionContextOxwash processes a significant volume of orders daily.
In its early stages, the company utilized less advanced tools such as Trello and Mercury to manage orders. However, as Oxwash expanded, it became increasingly evident that these tools were inadequate for handling the growing volume of orders efficiently.
Therefore, it is imperative for us to develop a tailored solution to enhance the wash tracking process, streamlining order management seamlessly and directly.
ChallengesOur key challengesBefore we started the discovery work of wash tracking, our team has already identified the following problems:
Busy Users:One of our key challenges is engaging busy users who are constantly occupied with processing laundry. This poses a difficulty in scheduling interviews and user testing during their work hours. To overcome this challenge, we need to find alternative methods that require minimal disruption to their workflow and communicate clearly our objectives.
Trello board dependency: Another challenge we face is the strong dependence of our primary users on the Trello board's interface. Users have expressed their familiarity and preference for Trello, making it important for us to create a wash-tracking interface that seamlessly replaces Trello's functionality.
Lack of Data: We encountered a challenge regarding the lack of quantitative data for analyzing the user experience of the Trello board. Since Trello is a third-party software, we are unable to employ a quantitative approach for this analysis.
Timelines and Prioritisation:Given the dedicated effort to building Wash Tracking, we faced the challenge of managing a backlog of JIRA tickets for other projects while meeting the rushed deadline for the release of wash tracking. It was essential for us to prioritize the release of features effectively.
With these challenges ahead of us, we find that the agile approach allowed for greater transparency of work and better accountability so that our team can meet both our user needs and our stakeholders' requests.
The roadmapThere is never a "standard" way in which a product is designed and developed. While I am a strong advocate for the "Triple Diamond Approach", in this project, I find that this approach had to be reshaped. For instance, we had go through many rounds of exploration, ideation, and reiterations before shipping the designs.

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/QcwF9UB2e2Z6rrbS.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/QcwF9UB2e2Z6rrbS.png)
DiscoveryWorking in a Product TrioThe discovery work for Wash Tracking occurred between September 2022 and January 2023. We worked in a Product Trio where I, the product designer, worked closely with the PM (Mohit) and the lead software developer (Lily). Working in this intimate team allows for faster sanity checks, richer data collection, and more efficient decision making.
Product AssessmentIn exploring wash tracking development, we confronted a crucial question: What additional actions do users perform on the Trello board besides updating order status? While Trello's primary purpose is status updates, our analysis revealed hidden activities. We studied the card fields and discovered that "Processing Notes," "Wash Cycle," "Machine Number," "Load Weight," and status hold greater importance, while "Garment Size" and "Fabric Type" may be less crucial.
User InterviewsTo validate our hypothesis, we conducted seven user interviews, providing printed Trello cards for participants to identify necessary fields. Simultaneously, during the initial project phase, I closely collaborated with the Cambridge operations team to gain a deep understanding of their workflow. Additionally, my product manager, Mohit, conducted an ethnographic study with the London team.
Card SortingTo validate our hypothesis and delve into users' mental models, we conducted card-sorting exercises with 16 Oxwash members. Through this process, participants justified their classifications, providing valuable insights. Our findings confirmed that the essential fields were "Processing Notes," "Wash Cycle," "Machine Number," "Load Weight," and Status. Additionally, we identified the need to replace the term "Trello Cards" with "Load" for better linguistic coherence.
Findings
![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/QYLDtRPpbdQ7RJYu.jpg](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/QYLDtRPpbdQ7RJYu.jpg)
Laundry Manager, Jake, updating the status of laundry on Trello
Operational InefficiencyBased on our interviews with our users, we discovered that these are their pain points with using Trello:
Trello is confusing and prone to lags
Trello does not encourage accountability
Trello does not retain historical data
“The problem with Trello is that we sometimes drag orders into the wrong column. As you can see, it slows us down because we have to be extra meticulous and honestly, Trello's interface isn't that great.”
- Jake
Complicated User FlowAdditionally, users constantly brought up the complicated user flow which deterred their efficiency. To understand where the problems were, Lily and I analysed the existing user flow in which users used Trello to update an order's status. As we can see below, within a single flow, there are 3 obvious pain points which are difficult to mitigate!

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/ZrV7fcL3SQMpSzv0.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/ZrV7fcL3SQMpSzv0.png)

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/P6UHQStVcIDjBhYc.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/P6UHQStVcIDjBhYc.png)
A run-down of our processing persona in Oxwash.
Unsuitable for our user personasBased on the information provided by the human Resource team, we are able to develop some design requirements to ensure Wash Tracking meets our user needs.
This group of users generally fall in the age range of the late 50s (specifically, 55 on average). Thus, we need to ensure that our interactions are familiar to our users.
English is not their first language - thus, we need to simplify the terms use, and advocate for an icon-centric design.
They are largely Android users - this suggests that we need to align our interactions with Material Design standards while remaining faithful to Oxwash's design system.
According to WCAG guidelines, we need to clearly identify the language used in the content to assist elderly users who may have language-related challenges or use screen readers with specific language settings.
SummaryThe existing approach to wash tracking has a complicated user flow which are prone to user error, which worsens efficiency.
The system is prone to lag, which requires users to take extra time and effort to use.
The lack of historical data on a Trello board makes accountability a challenge.
Trello board is not suitable for our user personas.
With these key findings, as a product trio, we developed the following problem statement.
Problem StatementWhat is the most effective interface design to enable users to efficiently update the status of a laundry load while reducing the likelihood of user errors in the lagoon?
Identifying the MatricesIn collaboration with my product manager (PM), we gathered measurable data that specifically addressed the challenges associated with Trello. This data included key performance indicators such as task completion rate, the number of complaints related to misclassification, and the average number of errors. These discouraging figures clearly negatively impact our business as they highlight operational inefficiencies. Consequently, it is crucial for us to develop and implement solutions that will improve these metrics and drive positive change within our operations.
These are the numbers we want to improve:
3.23 SAvg duration for task completion
3.55Avg number of customer complaints pertaining to misclassification of load/order status per month
2Avg number of Errors related to accountability
RequirementFollowing our contextual inquiry, we, the product triom developed the scope of the wash-tracking project. We presented our initial requirements to the senior leadership team to get a green light from them. These are the final design requirements we have agreed upon.
1. Mobile-first ExperienceWe listened closely to our team during the research phase and uncovered a pressing need: optimizing for mobile alongside desktop to boost efficiency and streamline status updates for teams.
Considering our budget, user persona, and technical capacity, we proposed using Samsung A12 as the default device.
2. Enabling flexibilityDuring our initial discovery work, we learnt that users do not all use desktops to update Trello statuses. We find that some were using iPads because iPads allow them to be more mobile.
Thus, we proposed to enable flexibility for our users by offering mobile, desktop, and tablet interfaces.
3. AccountabilityUsers need to be accountable for their actions. Therefore, wash tracking needs to be tied to a user account so that we can trace any mistakes to the user.
SolutionDeveloping Hypothesis from Crazy-8sI held a Crazy-8s session with 6 software developers and my product manager to identify some design hypotheses. At the end of the session, participants had to vote for ideas they deemed to be worthy of pursuing. These ideas included:
We should use tabs to classify information
Load status should be updated intuitively, like using a button or dropdown
We should display order information
Users could scan QR codes to access a wash tracking page easily
We could use colours to indicate the status of a load
We should use hyperlink buttons to allow users to visit important pages like “customer details page” and “order details page”
Use accordions to nest load information
Order notes and customer notes should be displayed at all times
PrioritisationFollowing our Crazy-8s session, I tasked my participants to assist me in creating this prioritisation matrix to rate each suggestion in terms of impact and effort. The diagram below illustrates the outcome of our prioritisation session.

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/qTVTdolrLUOuybpk.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/qTVTdolrLUOuybpk.png)
User FlowTo address the user pain points from the existing process, Lily and I developed a new user flow to create a seamless and error-free process of updating laundry statuses.

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/wtHFvNNxG6fnYCe4.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/wtHFvNNxG6fnYCe4.png)
Developing InterfacesDuring the development process, we conducted three rounds of iterative design. The initial round involved simple wireframes to validate our hypothesis, leading us to select Prototype B with nested information tabs.
In the second round, I enhanced Prototype B by incorporating our design system and interactive features using Protopie for a more realistic experience and accurate user feedback. Based on the insights gained, I created the final prototype in the third round, integrating all the necessary features suggested by users and stakeholders to ensure a comprehensive and user-centered design.

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/7nXIGsbTz7SgkZd8.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/7nXIGsbTz7SgkZd8.png)
The first iteration of our prototype
On using ProtopieDuring the design phase, I utilized Protopie for its interactive prototype development capabilities. Protopie's features, including user input notes, allowed me to gather real-time feedback and insights from users, enhancing our understanding of their needs. With Protopie's extensive interaction capabilities, I created immersive and realistic experiences, incorporating animations, transitions, and user actions. By replicating expected interactions and behaviors, we collected valuable feedback, iterated on the design, and refined the user experience to meet user expectations.
On a personal level, mastering interactions on Protopie proved to be quite challenging. As a relatively new tool, there weren't many readily available tutorials to rely on, and its logic follows that of Frontend JavaScript coding. Fortunately, my prior training in Frontend coding from an Interactive Data Visualization course came to my aid, allowing me to overcome the hurdles and successfully navigate the intricacies of Protopie. 😂

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/27fBWKCBdZB41Sp5.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/27fBWKCBdZB41Sp5.png)
The third (and final) iteration of our prototype
“I like the flexibility that the processing notes offer. I can now key information so that my colleagues can read it, even if I am not around!”- Steph, Processing Manager.
DeliveryDocumentations and PrioritisationAfter our final round of testing for our prototype, Mohit and I were convinced that the product was ready to go live. Thus, before I shipped the product, I added handover a document detailing the interactions and statuses of the product. I received sign-off from our lead product designer and head of software to receive buy-in from the key stakeholders.
Now, Next, Later FrameworkWe used a “Now, Next, Later” framework to prioritise the release of wash-tracking features. In doing so, the software development team can focus on delivering features in a prioritized manner, with the most important features being delivered first (Now), followed by less critical features (Next), and finally, the least essential features (Later). This ensures that the most critical features are delivered first and tested thoroughly before moving on to less important ones, ultimately leading to a more successful and user-friendly product.

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/UpL0Bp7dezgYA9Rs.png](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/UpL0Bp7dezgYA9Rs.png)
ImpactHow have we improved operational efficiency?On 13 March 2023, we released Wash Tracking, following the Now, Next, Later framework that we introduced. Over the course of a month, various features were gradually rolled out, allowing us to collect valuable data on user experience and engagement. We were thrilled to witness how Wash Tracking successfully addressed significant concerns related to usability. The matrices below demonstrate the positive impact it had on operational efficiency:
9xImprovement in task completion rate
0Avg number of customer complaints pertaining to misclassification of load/order status per month
0Avg number of Errors related to accountability
These matrices clearly demonstrate the tangible benefits of implementing Wash Tracking in terms of operational efficiency and user satisfaction. By addressing usability concerns and providing a more intuitive platform, Wash Tracking has proven to be a valuable asset in optimizing our operations and improving overall efficiency.
Key TakeawaysBefore any tests, communicate the higher- level justifications to your user
No-code prototyping is extremely valuable in user-testing
Simplicity in UX is more important than beautiful UIs when creating complex products
“Using Wash Tracking on Mobile has been a game changer for our colleague Lorraine, who has arthritis and is mute and deaf. Thanks to the tool's accessible design, she is now able to easily perform her job without relying on us, which has greatly improved her sense of independence and productivity.”- Samantha, Laundry Processing Manager
Credit roll to the amazing product leadership team!Lead Product Designer - Christie (the one who supported me throughout!)Lead Product Manager - MichaelProduct Manager - MohitLead Software Developer - Hasan

![./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/jsCqVoLCBKv1bR09.jpg](./Adrian Tan's Portfolio - Improving Wash Tracking in Oxwash_files/jsCqVoLCBKv1bR09.jpg)
Copyright ©adriantan.xyz