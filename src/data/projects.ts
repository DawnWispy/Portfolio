export interface ProjectSnapshot {
  role: string;
  platform: string;
  users: string;
  projectType: string;
  contribution: string;
}

export interface CaseStudySection {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  tags: string[];
  cardGradient: string;
  cardTextLight: boolean;
  oneLiner: string;
  snapshot: ProjectSnapshot;
  overview: string;
  problem: string;
  users: { role: string; need: string }[];
  myRole: string;
  productStructure: string[];
  keyDecisions: { point: string; detail: string }[];
  finalExperience: { area: string; detail: string }[];
  screens: string[];
  outcome: string;
  reflection: string;
}

export const projects: Project[] = [
  {
    id: "internal-audit-platform",
    slug: "internal-audit-platform",
    title: "Internal Audit Platform",
    category: "Governance & Compliance",
    shortDesc: "A platform designed to simplify audit planning, questionnaire management, review workflows, compliance tracking, and audit publishing.",
    tags: ["Enterprise UX", "Dashboard UX", "Workflow Design"],
    cardGradient: "linear-gradient(150deg, #fdf6e3 0%, #faefc8 50%, #f5e4a8 100%)",
    cardTextLight: false,
    oneLiner: "A centralized enterprise platform designed to manage audit planning, questionnaire management, review workflows, compliance tracking, collaboration, and audit publishing.",
    snapshot: {
      role: "UX Designer",
      platform: "Enterprise Web Application",
      users: "Internal Auditors, Reviewers, Audit Managers, Department Heads, Administrators",
      projectType: "Enterprise Governance & Compliance Platform",
      contribution: "Requirement Analysis, Information Architecture, User Journey Mapping, Workflow Design, Dashboard Design, High-Fidelity UI Design, Design System Implementation, Developer Handoff",
    },
    overview:
      "The Internal Audit Platform was designed to manage the complete audit lifecycle in one centralized system. The platform supports planning, team assignment, questionnaire management, review and publishing workflows, collaboration, compliance tracking, and audit repository management.\n\nThe product needed to support multiple user roles and help audit teams track progress, responsibilities, reviews, findings, and publishing status with better clarity.",
    problem:
      "Audit teams had a structured process, but the work was spread across multiple stages, users, documents, questions, reviews, and approvals.\n\nThe challenge was not just to design audit screens. It was to make the complete audit lifecycle easier to understand, track, and act on.",
    users: [
      { role: "Internal Auditors", need: "Needed to create audits, manage questionnaires, submit responses, and track audit progress." },
      { role: "Reviewers", need: "Needed to review audit responses, add comments, approve submissions, or request changes." },
      { role: "Audit Managers", need: "Needed visibility into audit status, findings, open actions, and compliance progress." },
      { role: "Department Heads", need: "Needed access to relevant audit information and review outcomes." },
      { role: "Administrators", need: "Needed to manage access, configuration, and repository related functions." },
    ],
    myRole:
      "I worked on requirement analysis, information architecture, user journey mapping, workflow design, dashboard design, high fidelity UI design, design system implementation, and developer handoff.\n\nMy focus was to structure the platform in a way that supported audit planning, review stages, questionnaire management, collaboration, and publishing without overwhelming users.",
    productStructure: ["Executive Dashboard", "Audit Planning", "Question Management", "Review & Publish", "Collaboration", "Audit Repository"],
    keyDecisions: [
      { point: "Make audit progress visible.", detail: "Audit workflows involve multiple stages and roles. I designed dashboard and status based views so users could quickly understand where an audit stands, what is pending, and what needs attention." },
      { point: "Separate planning, questions, review, and publishing.", detail: "Instead of treating the audit process as one long form, the platform was structured into clear modules. This helped users focus on the task relevant to their role." },
      { point: "Support role based workflows.", detail: "Different users needed different levels of access and action. The experience was designed around user responsibilities such as creating, reviewing, approving, publishing, and managing audit records." },
      { point: "Design for enterprise clarity.", detail: "Since the product involved compliance and internal audit workflows, the interface needed to feel structured, reliable, and easy to scan." },
    ],
    finalExperience: [
      { area: "Executive Dashboard", detail: "Gives audit managers and leaders a high level view of audit status, progress, findings, and pending actions." },
      { area: "Audit Planning", detail: "Helps users create audit plans, assign teams, and define audit scope." },
      { area: "Question Management", detail: "Supports questionnaire creation, response collection, and audit checklist management." },
      { area: "Review & Publish", detail: "Guides reviewers through approval, comments, changes, and publishing stages." },
      { area: "Audit Repository", detail: "Stores completed audit records and makes past audits easier to access." },
    ],
    screens: ["Executive Dashboard", "Audit Planning", "Question Management", "Review Workflow", "Audit Repository"],
    outcome:
      "The final design organized complex audit operations into a structured enterprise platform. It improved clarity across planning, question management, review, publishing, collaboration, and repository workflows.",
    reflection:
      "This project helped me understand how important role based clarity is in enterprise systems. A product becomes easier to use when users can clearly see what belongs to them, what stage the process is in, and what action comes next.",
  },
  {
    id: "enterprise-workforce-platform",
    slug: "enterprise-workforce-platform",
    title: "Enterprise Workforce Platform",
    category: "HR Tech",
    shortDesc: "A workforce platform designed to streamline recruitment, onboarding, visa management, attendance, and employee lifecycle operations.",
    tags: ["HR Tech", "Enterprise Forms", "Data Visualization"],
    cardGradient: "linear-gradient(150deg, #eef5fc 0%, #d6eaf8 50%, #c2dff4 100%)",
    cardTextLight: false,
    oneLiner: "A modular HR platform designed to streamline recruitment, onboarding, offboarding, visa management, attendance tracking, and workforce administration.",
    snapshot: {
      role: "UX Designer",
      platform: "Enterprise Web Application",
      users: "HR Teams, Recruiters, Hiring Managers, Employees, Operations Teams",
      projectType: "Human Capital Management Platform",
      contribution: "UX Strategy, Workflow Design, Dashboard Design, Information Architecture, User Flow Design, Enterprise Form Design, Data Visualization",
    },
    overview:
      "The Enterprise Workforce Platform was designed to simplify employee lifecycle operations across multiple HR functions. The product included AI recruitment, onboarding and offboarding, visa management, time and attendance, and workforce administration.\n\nThe platform needed to help HR and operations teams manage employee related tasks with better structure, visibility, and consistency.",
    problem:
      "HR teams often work across multiple processes at the same time: hiring, onboarding, document collection, visa workflows, attendance, and employee updates.\n\nThe challenge was to bring these workflows into one structured experience without making the platform feel heavy or confusing.",
    users: [
      { role: "HR Teams", need: "Needed to manage employee lifecycle processes and track pending work." },
      { role: "Recruiters", need: "Needed to manage candidates and recruitment progress." },
      { role: "Hiring Managers", need: "Needed visibility into hiring and approval related steps." },
      { role: "Employees", need: "Needed access to onboarding, attendance, and personal workflow related actions." },
      { role: "Operations Teams", need: "Needed to support workforce administration and service related processes." },
    ],
    myRole:
      "I worked on UX strategy, workflow design, dashboard design, information architecture, user flow design, enterprise form design, and data visualization.\n\nMy focus was to structure HR workflows into reusable, scalable patterns that supported different user roles and operational needs.",
    productStructure: ["AI Recruitment", "Onboarding & Offboarding", "Visa Management", "Time & Attendance", "Workforce Administration"],
    keyDecisions: [
      { point: "Create module based navigation.", detail: "The platform covered multiple HR functions, so I structured the experience around clear modules. This helped users move between recruitment, onboarding, visa, attendance, and workforce tasks." },
      { point: "Design forms for clarity.", detail: "HR workflows often include detailed data entry. I focused on creating forms that were structured, readable, and easier to complete." },
      { point: "Make status visible across workflows.", detail: "Recruitment, onboarding, visa management, and attendance all depend on status visibility. Status labels and dashboard summaries helped users identify pending and completed actions." },
      { point: "Support dashboard based decision making.", detail: "Dashboards were designed to help HR teams and managers understand workforce activity, progress, and exceptions quickly." },
    ],
    finalExperience: [
      { area: "Recruitment", detail: "Supports candidate tracking, hiring progress, and recruitment related workflows." },
      { area: "Onboarding & Offboarding", detail: "Helps HR teams manage employee entry and exit processes." },
      { area: "Visa Management", detail: "Supports document and visa related workflows for employee administration." },
      { area: "Time & Attendance", detail: "Helps teams track attendance, exceptions, and workforce activity." },
      { area: "Dashboard Views", detail: "Provides visibility into HR operations, pending tasks, and key workforce data." },
    ],
    screens: ["HR Dashboard", "Recruitment Flow", "Onboarding Flow", "Visa Management", "Attendance Dashboard"],
    outcome:
      "The final design created a structured experience for HR operations by connecting employee lifecycle workflows, dashboards, forms, and role based actions into one platform.",
    reflection:
      "This project helped me understand how important consistency is in enterprise HR products. When multiple workflows exist inside the same product, reusable patterns and clear status design make the experience easier to scale.",
  },
  {
    id: "conversational-ai-agent",
    slug: "conversational-ai-agent",
    title: "Conversational AI Agent",
    category: "AI / Voice UX",
    shortDesc: "A chat and voice based AI experience designed to help users access services, programs, and information through natural language.",
    tags: ["AI UX", "Conversation Design", "Voice UX"],
    cardGradient: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
    cardTextLight: true,
    oneLiner: "A conversational AI agent designed to help users access services, programs, initiatives, and information through natural language interactions across chat and voice channels.",
    snapshot: {
      role: "UX Designer",
      platform: "AI Agent Platform",
      users: "Students, Researchers, Industry Professionals, Public Users, Government Stakeholders",
      projectType: "Conversational AI / Voice AI Platform",
      contribution: "Conversational UX Design, Voice UX Design, AI Agent Experience Design, Conversation Flow Mapping, Prompt Architecture, Information Architecture, Interaction Design",
    },
    overview:
      "The Conversational AI Agent was designed to provide users with easier access to services, programs, initiatives, and information through natural language interactions.\n\nThe experience needed to work across chat and voice, helping different types of users find relevant information without needing to understand complex navigation structures.",
    problem:
      "Users may not always know where to look, what category a service belongs to, or how to ask for the right information.\n\nThe challenge was to design an AI experience that could understand user intent, ask clarifying questions, retrieve relevant information, and guide users toward the next step.",
    users: [
      { role: "Students", need: "Needed access to programs, opportunities, and learning related information." },
      { role: "Researchers", need: "Needed relevant information about initiatives, programs, and services." },
      { role: "Industry Professionals", need: "Needed access to services, support, and possible collaboration related information." },
      { role: "Public Users", need: "Needed simple answers and easy guidance." },
      { role: "Government Stakeholders", need: "Needed structured access to information and service related flows." },
    ],
    myRole:
      "I worked on conversational UX design, voice UX design, AI agent experience design, conversation flow mapping, prompt architecture, information architecture, and interaction design.\n\nMy focus was to make the AI interaction feel clear, guided, and trustworthy.",
    productStructure: ["Conversational Intelligence", "Voice Experience", "Knowledge Retrieval", "Guided User Journeys", "AI Agent Orchestration"],
    keyDecisions: [
      { point: "Design around intent, not menus.", detail: "The AI experience was structured around what users wanted to achieve instead of forcing them to browse fixed categories." },
      { point: "Use guided clarification.", detail: "When user intent was broad or unclear, the agent experience needed to ask follow up questions instead of giving generic answers." },
      { point: "Keep voice responses concise.", detail: "Voice interactions needed shorter, clearer responses because long answers are harder to understand when spoken." },
      { point: "Make AI responses feel controlled.", detail: "The experience needed to help users understand what the AI understood, what answer was given, and what they could do next." },
    ],
    finalExperience: [
      { area: "Chat Experience", detail: "Allows users to ask questions and receive guided answers through conversational interaction." },
      { area: "Voice Experience", detail: "Supports spoken interaction with concise, easy to follow responses." },
      { area: "Guided Journeys", detail: "Helps users move from broad questions to relevant service or program information." },
      { area: "Knowledge Retrieval Flow", detail: "Structures how information is retrieved and presented in a useful way." },
      { area: "AI Agent Interaction Patterns", detail: "Defines how the AI responds, clarifies, and guides users through the experience." },
    ],
    screens: ["AI Agent Welcome", "Chat Interaction", "Voice Interaction", "Guided Journey", "Suggested Next Steps"],
    outcome:
      "The final experience created a more accessible way for users to discover information, services, programs, and initiatives through chat and voice based AI interaction.",
    reflection:
      "This project helped me understand that AI UX is not only about answers. It is about guiding users clearly, setting expectations, reducing confusion, and making the system feel helpful and trustworthy.",
  },
  {
    id: "velocity-rfp",
    slug: "velocity-rfp",
    title: "Velocity RFP",
    category: "AI-Powered Proposal Management Platform",
    shortDesc: "Velocity RFP is an AI-powered enterprise platform that converts complex RFP documents into structured requirements, assignable tasks, and review-ready proposal workflows.",
    tags: ["AI Product Design", "Enterprise UX", "Proposal Automation"],
    cardGradient: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
    cardTextLight: true,
    oneLiner: "An AI-powered enterprise platform that converts complex RFP documents into structured requirements, collaborative tasks, and review-ready proposal workflows.",
    snapshot: {
      role: "Associate UX Consultant",
      platform: "Responsive Web Application",
      users: "Admin, Manager, Editor",
      projectType: "AI-Powered Proposal Management Platform",
      contribution: "Requirement Analysis, Enterprise Workflow Design, AI Workflow Experience Design, Requirement Management UX, Dashboard Design, High-Fidelity UI Design",
    },
    overview: "Velocity RFP is an AI-powered enterprise platform that converts complex RFP documents into structured requirements, collaborative tasks, and review-ready proposal workflows.",
    problem: "Before a proposal team can respond to an RFP, they first need to identify every requirement, instruction, deliverable, deadline, compliance condition, and evaluation criterion inside the document.",
    users: [
      { role: "Admin", need: "Responsible for platform administration and access control." },
      { role: "Manager", need: "Responsible for proposal execution and review." },
      { role: "Editor", need: "Responsible for preparing responses to assigned requirements." }
    ],
    myRole: "I worked on AI workflow experience design, requirement management UX, information architecture, dashboard design, and enterprise component design.",
    productStructure: ["Dashboard", "AI Processing", "Requirement Management", "Proposal Workspace", "Review & Approval"],
    keyDecisions: [
      { point: "Make AI output reviewable, not final.", detail: "AI-extracted requirements were designed as editable structured records rather than fixed generated text." },
      { point: "Turn requirements into work items.", detail: "Each extracted requirement became a card or record with category, ownership, status, priority, deadline, and response tracking." },
      { point: "Keep managers in control of the AI workflow.", detail: "A manager review stage was introduced between AI extraction and editor assignment." },
      { point: "Make proposal progress visible.", detail: "Dashboards and status indicators were designed to show AI processing, requirement completion, assignments, review stages, deadlines, and team activity." }
    ],
    finalExperience: [
      { area: "Dashboard", detail: "Gives managers a quick understanding of proposal progress and team activity." },
      { area: "AI Document Processing", detail: "Allows users to upload RFP documents and view AI parsing progress." },
      { area: "Requirement Management", detail: "Displays extracted requirements as structured records." },
      { area: "Proposal Workspace", detail: "Allows editors to view requirement details and prepare responses." },
      { area: "Review & Approval", detail: "Moves proposal responses through review and submission stages." }
    ],
    screens: ["Dashboard", "Document Upload & AI Processing", "AI-Extracted Requirements", "Requirement Detail", "Task Assignment", "Review & Approval"],
    outcome: "Velocity RFP created a structured AI-assisted proposal workflow that reduced the dependency on manual RFP document review and helped proposal teams move faster from document upload to requirement execution.",
    reflection: "Velocity RFP helped me understand how AI can improve enterprise workflows when it is designed as a practical assistant rather than a black-box automation layer."
  },
  {
    id: "smart-park-experience",
    slug: "smart-park-experience",
    title: "Smart Park Experience",
    category: "Tourism & Smart City",
    shortDesc: "A mobile experience that helps visitors discover attractions, navigate destinations, explore events, and access park services.",
    tags: ["Mobile UX", "Navigation", "Tourism"],
    cardGradient: "linear-gradient(135deg, #166534 0%, #15803d 100%)",
    cardTextLight: true,
    oneLiner: "A visitor focused mobile experience designed to help users discover attractions, navigate destinations, explore events, and access services inside a large urban park ecosystem.",
    snapshot: {
      role: "UX Designer",
      platform: "Mobile Application",
      users: "Tourists, Families, Local Residents, Event Attendees",
      projectType: "Tourism & Smart City Mobile Experience",
      contribution: "Mobile UX Design, Visitor Journey Mapping, User Flow Design, Navigation Experience Design, Interaction Design, Information Architecture",
    },
    overview:
      "The Smart Park Experience was designed as a mobile application for visitors exploring a large urban park ecosystem. The app helped users discover attractions, navigate destinations, explore events, access services, and plan their visit.\n\nThe experience needed to support both planned and spontaneous visits.",
    problem:
      "Large destination spaces can be difficult to explore. Visitors may not know what attractions are available, how to get around, what events are happening, or where to find services.\n\nThe challenge was to make the park experience easier to discover, navigate, and plan through a mobile first journey.",
    users: [
      { role: "Tourists", need: "Needed attraction discovery, directions, and visit planning support." },
      { role: "Families", need: "Needed simple navigation, services, and activity information." },
      { role: "Local Residents", need: "Needed event discovery and repeat visit value." },
      { role: "Event Attendees", need: "Needed event details, location information, and wayfinding support." },
    ],
    myRole:
      "I worked on mobile UX design, visitor journey mapping, user flow design, navigation experience design, interaction design, and information architecture.\n\nMy focus was to design a mobile experience that supported discovery, movement, planning, and service access.",
    productStructure: ["Explore Attractions", "Interactive Navigation", "Events & Experiences", "Visitor Services", "Personalized Planning"],
    keyDecisions: [
      { point: "Make discovery easy.", detail: "The app needed to help visitors quickly understand what they could do inside the park." },
      { point: "Prioritize navigation.", detail: "For a large park experience, users need to know where they are, where they want to go, and how to get there." },
      { point: "Support different visitor types.", detail: "Tourists, families, local residents, and event attendees have different goals. The app structure needed to support all of them without becoming complicated." },
      { point: "Connect events, attractions, and services.", detail: "The experience was designed to help users move between discovery, event exploration, navigation, and service access smoothly." },
    ],
    finalExperience: [
      { area: "Explore Attractions", detail: "Helps visitors browse and discover places inside the park." },
      { area: "Interactive Navigation", detail: "Supports movement and wayfinding across the destination." },
      { area: "Events & Experiences", detail: "Displays activities, events, and programs." },
      { area: "Visitor Services", detail: "Helps users access facilities and practical support." },
      { area: "Personalized Planning", detail: "Allows visitors to plan their visit based on interests and needs." },
    ],
    screens: ["Home / Explore", "Attraction Detail", "Navigation View", "Events Listing", "Personalized Plan"],
    outcome:
      "The final design created a mobile first visitor experience that made attraction discovery, navigation, events, services, and planning easier to access.",
    reflection:
      "This project helped me understand how mobile UX can support physical experiences. The design had to help users move through a real environment with confidence and clarity.",
  },
  {
    id: "drivehub",
    slug: "drivehub",
    title: "DriveHub",
    category: "Travel & Mobility",
    shortDesc: "A mobility platform combining vehicle rentals, destination discovery, rewards, trip planning, and user dashboards into one travel experience.",
    tags: ["Mobility", "Marketplace", "Travel UX"],
    cardGradient: "linear-gradient(135deg, #c2410c 0%, #ea580c 100%)",
    cardTextLight: true,
    oneLiner: "A travel mobility platform combining vehicle rentals, destination discovery, rewards, and trip planning into one connected experience.",
    snapshot: {
      role: "UX Designer",
      platform: "Website and Mobile Application",
      users: "Travelers, Tourists, Business Travelers, Road Trip Enthusiasts",
      projectType: "Travel & Mobility Ecosystem",
      contribution: "Product Strategy, UX Research, Website UX Design, Mobile App UX Design, User Flow Design, Wireframing, Design System Creation",
    },
    overview:
      "DriveHub was designed as a travel focused mobility platform that brings vehicle rentals, destination discovery, rewards, trip planning, and user dashboard features into one ecosystem.\n\nThe product needed to support both practical booking needs and travel discovery journeys.",
    problem:
      "Travelers often use separate tools to rent vehicles, discover destinations, plan trips, and manage rewards.\n\nThe challenge was to create a connected experience where mobility, planning, and discovery could work together.",
    users: [
      { role: "Travelers", need: "Needed simple booking, trip planning, and dashboard access." },
      { role: "Tourists", need: "Needed rental options and destination discovery." },
      { role: "Business Travelers", need: "Needed efficient booking and travel management." },
      { role: "Road Trip Enthusiasts", need: "Needed destination inspiration, planning tools, and mobility support." },
    ],
    myRole:
      "I worked on product strategy, UX research, website UX design, mobile app UX design, user flow design, wireframing, and design system creation.\n\nMy focus was to design a consistent web and mobile experience that connected rentals, discovery, rewards, planning, and dashboard views.",
    productStructure: ["Vehicle Rental Marketplace", "Destination Discovery", "Rewards & Perks", "Trip Planning", "User Dashboard"],
    keyDecisions: [
      { point: "Connect rental with travel planning.", detail: "The experience treated vehicle rental as part of a larger travel journey, not just a standalone booking task." },
      { point: "Support discovery led journeys.", detail: "Users could explore destinations and then connect those choices to rentals and trip planning." },
      { point: "Create a central dashboard.", detail: "The user dashboard helped bring bookings, rewards, and upcoming trips into one place." },
      { point: "Maintain consistency across web and mobile.", detail: "The product needed shared patterns across website and mobile experiences so users could move between platforms easily." },
    ],
    finalExperience: [
      { area: "Vehicle Rental Marketplace", detail: "Helps users browse, compare, and select rental options." },
      { area: "Destination Discovery", detail: "Supports travel inspiration and exploration." },
      { area: "Rewards & Perks", detail: "Encourages user engagement and repeat value." },
      { area: "Trip Planning", detail: "Helps users organize travel details." },
      { area: "User Dashboard", detail: "Centralizes bookings, rewards, and upcoming trips." },
    ],
    screens: ["Website Landing", "Vehicle Listing", "Vehicle Detail", "Trip Planning", "Mobile Dashboard"],
    outcome:
      "The final design created a connected mobility experience by combining rental, discovery, rewards, trip planning, and dashboard features into one product ecosystem.",
    reflection:
      "This project helped me understand how travel products need to support both intent and inspiration. A user may come to book a vehicle, but the experience can also help them discover and plan the journey around it.",
  },
];
