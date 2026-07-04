export interface UserCard {
  type: string;
  responsibilities: string;
  needs: string;
}

export interface UXChallenge {
  title: string;
  difficulty: string;
  response: string;
}

export interface Decision {
  num: string;
  title: string;
  what: string;
  why: string;
}

export interface FinalModule {
  name: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  accentColor: string;
  heroBg: string;
  heroPattern: string;
  category: string;
  title: string;
  heroStory: string;
  tags: string[];
  mockupType: "browser" | "mobile" | "both";
  snapshot: {
    role: string;
    platform: string;
    domain: string;
    team: string;
    users: string;
    contribution: string;
  };
  businessContext: string;
  coreProblemHeading: string;
  coreProblem: string;
  productInsight: string;
  userCards: UserCard[];
  uxChallenges: UXChallenge[];
  productStructure: { group: string; items: string[] }[];
  designApproach: string[];
  decisions: Decision[];
  finalModules: FinalModule[];
  screens: { name: string; caption: string; image?: string; layout?: "mobile" | "web" }[];
  outcome: string;
  reflection: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "internal-audit-platform",
    accentColor: "#d4a017",
    heroBg: "linear-gradient(135deg, #1a0c00 0%, #2c1a06 55%, #3d2408 100%)",
    heroPattern: "navy",
    category: "Government Enterprise · Governance, Risk & Compliance",
    title: "Internal Audit Platform",
    heroStory:
      "A government enterprise platform that brings audit planning, execution, evidence collection, reviews, approvals, reporting, and publishing into one structured workflow.",
    tags: ["Enterprise UX", "Dashboard UX", "Workflow Design"],
    mockupType: "browser",
    snapshot: {
      role: "Associate UX Consultant",
      platform: "Responsive Web Application",
      domain: "Government Enterprise · GRC · Internal Audit Management",
      team: "Product Managers, Business Analysts, UX Team, UI Designers, Developers, QA Engineers",
      users: "Internal Auditors, Reviewers, Internal Audit Section Head, IAP Administrator, Executive Leadership",
      contribution: "Requirement Analysis, Information Architecture, User Journey Mapping, Workflow Analysis, UX Strategy, Dashboard Design, Form Design, Enterprise UX, Wireframing, High-Fidelity UI Design, Design System Implementation, Developer Handoff, Design QA",
    },
    businessContext:
      "Government organizations conduct numerous audit missions annually across departments, locations, and operational domains. These audits are critical for compliance, financial accountability, and regulatory adherence. Before this platform, audit planning, execution, reviews, evidence collection, approvals, and reporting were distributed across spreadsheets, documents, emails, and disconnected systems.\n\nThe goal was to establish a centralized internal audit management platform that improves transparency, operational efficiency, and governance while reducing administrative overhead.",
    coreProblemHeading: "The process existed. Visibility didn't.",
    coreProblem:
      "Internal audit operations relied on fragmented manual processes that created inefficiencies throughout the audit lifecycle. Teams struggled with manual reviewer assignments, inconsistent documentation, unclear ownership during review stages, limited visibility into audit status, and no centralized dashboard for monitoring ongoing missions.\n\nThe challenge was to redesign these processes into a unified enterprise experience while maintaining compliance with organizational governance standards.",
    productInsight:
      "The product did not need another tracking screen. It needed a governed operating workspace where each stakeholder could clearly see their responsibilities, audit status, pending reviews, and next actions.",
    userCards: [
      { type: "Internal Auditor", responsibilities: "Creates audit missions, assigns reviewers, selects questionnaires, uploads evidence", needs: "Clear workflow stages, progress visibility, and task ownership" },
      { type: "Reviewer", responsibilities: "Reviews findings, validates evidence, provides feedback, requests revisions", needs: "Structured review interface with comment threads and status tracking" },
      { type: "Audit Section Head", responsibilities: "Approves planning, assigns teams, monitors progress, oversees completion", needs: "High-level dashboard with audit health and team performance" },
      { type: "IAP Administrator", responsibilities: "Configures templates, manages question banks, maintains settings", needs: "Flexible configuration tools and organizational setup controls" },
      { type: "Executive Leadership", responsibilities: "Monitors performance, compliance trends, and operational insights", needs: "Analytics dashboards with meaningful KPIs and reporting" },
    ],
    uxChallenges: [
      { title: "Complex Multi-Step Workflows", difficulty: "Audit creation involved multiple sequential tasks that could overwhelm users across different stages.", response: "I broke the workflow into logical stages with progressive disclosure — showing only what was needed at each step." },
      { title: "Large Enterprise Forms", difficulty: "Audit planning required extensive information input across multiple fields and sections.", response: "I grouped related information into meaningful sections with clear visual hierarchy and inline validation." },
      { title: "Multiple User Roles", difficulty: "Each user had different permissions, tasks, and workflow expectations within the same product.", response: "I designed role-based experiences while maintaining consistent interface patterns and shared mental models." },
      { title: "Dense Dashboard Data", difficulty: "Dashboards needed to surface mission progress, flags, comments, performance, and audit status simultaneously.", response: "I prioritized information using cards, charts, status indicators, and visual hierarchy to reduce cognitive load." },
      { title: "Review Transparency", difficulty: "Users needed real-time visibility into approval stages, revision requests, and review outcomes.", response: "I introduced review progress indicators and structured status tracking across all review touchpoints." },
    ],
    productStructure: [
      { group: "Oversight", items: ["Executive Dashboard", "Reports", "Notifications"] },
      { group: "Execution", items: ["Audit Planning", "Question Assignment", "Evidence Collection"] },
      { group: "Review", items: ["Review & Publishing", "Comments & Discussions"] },
      { group: "Repository", items: ["Audit Repository", "User Profile"] },
    ],
    designApproach: ["Requirement Understanding", "Workflow Analysis", "User Journey Mapping", "Information Architecture", "Wireframing", "High-Fidelity Design", "Design Reviews", "Developer Handoff", "QA Validation"],
    decisions: [
      { num: "01", title: "Make audit progress visible at every level.", what: "Dashboard summaries and status-based views surface audit status, pending reviews, draft audits, submitted missions, and team progress.", why: "Audit managers needed immediate operational visibility without navigating through multiple screens." },
      { num: "02", title: "Break audit creation into logical stages.", what: "Audit planning, team assignment, questionnaire selection, and review stages were separated into distinct flows with clear checkpoints.", why: "This reduced cognitive load and made the complex audit lifecycle feel manageable and completable." },
      { num: "03", title: "Support role-specific work without fragmenting the product.", what: "Different users receive relevant actions and visibility while maintaining consistent interface patterns across all roles.", why: "The product had to serve auditors, reviewers, admins, and leadership without creating separate disconnected experiences." },
      { num: "04", title: "Standardize enterprise components across the platform.", what: "Tables, cards, forms, status chips, filters, comment threads, and workflow patterns were unified into a reusable design system.", why: "Consistency reduced learning curve and made the platform scalable for future audit modules and features." },
    ],
    finalModules: [
      { name: "Executive Dashboard", description: "Visibility into total missions, pending reviews, flag summaries, geographic distribution, audit performance, and mission progress." },
      { name: "Audit Planning", description: "Create missions, define scope, assign teams, schedule timelines, select departments, and configure audit objectives." },
      { name: "Question Assignment", description: "Browse question libraries, search by category, select relevant questionnaires, and customize assessments." },
      { name: "Review & Publishing", description: "Supports reviewer comments, revision requests, approval stages, and final publication with traceable history." },
      { name: "Audit Repository", description: "Stores completed audits as searchable records for compliance reference and future audit cycles." },
    ],
    screens: [
      { name: "Executive Dashboard", caption: "Mission overview with status cards, audit performance chart, and geographic distribution", image: "/Images/iap-dashboard.png.png" },
      { name: "Create Audit Mission", caption: "Multi-step audit creation with scope definition and team assignment", image: "/Images/iap-create-audit.png.png" },
      { name: "Question Assignment", caption: "Searchable questionnaire library with selection and preview", image: "/Images/iap-questions.png.png" },
      { name: "Review and Comments", caption: "Review interface with inline comments, revision requests, and approval tracking", image: "/Images/iap-review.png.png" },
      { name: "Audit Repository", caption: "Searchable repository of completed audits with status and metadata", image: "/Images/iap-repository.png.png" },
    ],
    outcome: "The redesigned platform established a unified and scalable audit management experience that streamlined complex operational workflows into a cohesive digital system. It improved visibility into audit progress, enhanced collaboration between auditors and reviewers, centralized audit management, and created a scalable design foundation for future enhancements.",
    reflection: "This project strengthened my ability to design for enterprise environments where business complexity runs deeper than visual complexity. It helped me understand governance workflows, role-based systems, information architecture at scale, and the importance of reducing cognitive effort in high-stakes organizational processes.",
  },

  {
    slug: "conversational-ai-agent",
    accentColor: "#a78bfa",
    heroBg: "linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #6d28d9 100%)",
    heroPattern: "purple",
    category: "Artificial Intelligence · Conversational AI · Voice AI",
    title: "Conversational AI Agent",
    heroStory:
      "An AI-powered digital gateway that helps users access national space services, programs, initiatives, and information through natural conversations.",
    tags: ["AI UX", "Conversation Design", "Voice UX"],
    mockupType: "mobile",
    snapshot: {
      role: "Associate UX Consultant",
      platform: "Web · Mobile · Voice Interface",
      domain: "Government Digital Services · Space Technology · AI Agent Platform",
      team: "Product Managers, AI Engineers, Business Analysts, UX Designers, Developers",
      users: "Students, Researchers, Industry Professionals, General Public, Government Stakeholders",
      contribution: "Product Discovery, UX Research, Conversation Design, Voice UX Design, User Journey Mapping, Information Architecture, Conversation Flow Design, Prompt Strategy, Interaction Design, High-Fidelity UI Design, AI Experience Design",
    },
    businessContext:
      "Government organizations manage large volumes of information across public initiatives, educational programs, research opportunities, strategic projects, policies, events, and services. Users often struggle to locate relevant information because the website structure is large, terminology can be technical, and navigation paths are long.\n\nThe organization envisioned an AI-powered digital experience that could simplify information discovery and improve citizen engagement through natural language.",
    coreProblemHeading: "Users knew what they wanted. They didn't know where to find it.",
    coreProblem:
      "Users often visited the digital ecosystem with clear objectives but struggled to locate the correct information. They had to navigate multiple pages, understand organizational terminology, search manually, read extensive documentation, and switch between sections to complete a task.\n\nThe challenge was to design an AI experience that removes these barriers by allowing users to communicate naturally and receive contextual, accurate guidance.",
    productInsight:
      "The AI Agent was not designed as a simple chatbot. It was designed as a conversational guide that understands intent, maintains context, retrieves relevant information, and helps users move toward the right next step.",
    userCards: [
      { type: "Students", responsibilities: "Look for educational programs, internships, scholarships, and learning resources", needs: "Quick discovery without needing to understand organizational structure" },
      { type: "Researchers", responsibilities: "Search for research initiatives, publications, partnerships, and funding", needs: "Precise, contextual information retrieval with source clarity" },
      { type: "Industry Professionals", responsibilities: "Seek collaborations, innovation programs, and commercial opportunities", needs: "Efficient access to partnership pathways and engagement channels" },
      { type: "General Public", responsibilities: "Explore national space initiatives, events, news, and public services", needs: "Simple, jargon-free answers with clear next steps" },
      { type: "Government Stakeholders", responsibilities: "Access policies, organizational resources, and strategic initiatives", needs: "Structured access to official information with reliable accuracy" },
    ],
    uxChallenges: [
      { title: "Designing Conversations Instead of Screens", difficulty: "Success depended on dialogue flow and intent detection rather than traditional UI navigation patterns.", response: "I focused on multi-turn conversation design, intent mapping, and contextual clarification patterns." },
      { title: "Reducing Cognitive Load", difficulty: "Users should not need to understand organizational structure before getting answers.", response: "I allowed natural language interaction while the AI handled complexity and retrieval in the background." },
      { title: "Building Trust in AI Responses", difficulty: "Government information must feel reliable, transparent, and accountable to users.", response: "I designed structured AI responses with clear source indicators, confidence signals, and actionable next steps." },
      { title: "Multi-Channel Consistency", difficulty: "The experience needed to work seamlessly across both chat and voice interaction modes.", response: "I created reusable conversational patterns that functioned independently of input or output modality." },
      { title: "Managing Long Conversations", difficulty: "Users often ask multiple follow-up questions across different topics in a single session.", response: "I designed context retention, conversation summarization, and follow-up interaction patterns." },
    ],
    productStructure: [
      { group: "Core Intelligence", items: ["Conversational Intelligence", "Intelligent Knowledge Retrieval", "Personalized Conversations"] },
      { group: "Channels", items: ["Chat Interface", "Voice Experience", "Guided Task Assistance"] },
      { group: "Content Domains", items: ["Programs", "Initiatives", "Research", "Events", "Services", "FAQs", "News", "Resources"] },
    ],
    designApproach: ["Product Discovery", "Intent Discovery", "Conversation Mapping", "Information Architecture", "Prompt Strategy", "Chat Interface Design", "Voice Interaction Mapping", "High-Fidelity UI", "AI Interaction Reviews", "Developer Collaboration"],
    decisions: [
      { num: "01", title: "Design the AI as a guide, not a search engine.", what: "The experience focused on understanding intent and guiding users step-by-step instead of returning raw search-style results.", why: "Users needed help navigating complex information ecosystems, not just a list of links." },
      { num: "02", title: "Structure responses into digestible sections.", what: "Long answers were broken into clear sections with summaries, highlighted key information, next steps, and related suggestions.", why: "This improved comprehension and prevented users from abandoning the conversation due to information overload." },
      { num: "03", title: "Use clarification before answering broadly.", what: "When user intent was unclear or broad, the agent asked targeted follow-up questions instead of returning generic answers.", why: "This made the experience more accurate, relevant, and genuinely helpful to each user's specific need." },
      { num: "04", title: "Design for chat and voice with unified patterns.", what: "Conversation patterns were created to function consistently across both text and voice interaction channels.", why: "The system needed to deliver a coherent experience regardless of how users chose to interact." },
    ],
    finalModules: [
      { name: "Conversational Intelligence", description: "Understands natural language queries, interprets intent, and maintains conversational context across multi-turn sessions." },
      { name: "Voice Experience", description: "Supports hands-free interaction through speech recognition, voice responses, and voice-guided assistance." },
      { name: "Knowledge Retrieval", description: "Retrieves and summarizes relevant information contextually based on user intent and conversation history." },
      { name: "Guided Task Assistance", description: "Helps users complete tasks like finding opportunities, exploring programs, and accessing services step by step." },
      { name: "Personalized Conversations", description: "Adapts responses based on previous questions, user intent signals, and conversation stage." },
    ],
    screens: [
      { name: "AI Agent Welcome", caption: "Conversational entry point with guided prompts and intent categories", image: "/Images/51.png" },
      { name: "User Query and Intent Detection", caption: "Natural language input with real-time intent interpretation", image: "/Images/52.png" },
      { name: "Clarifying Question", caption: "Agent asking follow-up to narrow down user intent", image: "/Images/54.png" },
      { name: "Knowledge Answer", caption: "Structured response with key information, sources, and next steps", image: "/Images/56.png" },
      { name: "Voice Interaction", caption: "Voice mode with speech input, live transcription, and audio response", image: "/Images/57.png" },
      { name: "Suggested Next Steps", caption: "Post-answer guidance with related topics and service pathways", image: "/Images/58.png" },
      { name: "Contextual Handover", caption: "Seamless transition to human support or relevant external services", image: "/Images/59.png" },
    ],
    outcome: "The Conversational AI Agent established a new interaction model that shifted users away from traditional navigation toward natural language engagement. It simplified access to complex information, improved service discovery, supported chat and voice consistency, and created a scalable conversational architecture for the organization.",
    reflection: "This project expanded my perspective beyond conventional interface design. It helped me understand conversations as interfaces and user intent as the primary navigation mechanism. It strengthened my ability to design AI experiences that feel useful, transparent, trustworthy, and genuinely human-centered.",
  },

  {
    slug: "enterprise-workforce-platform",
    accentColor: "#006BB7",
    heroBg: "linear-gradient(135deg, #001829 0%, #015D9F 60%, #006BB7 100%)",
    heroPattern: "navy",
    category: "Human Resources · Enterprise SaaS · Workforce Management",
    title: "Workforce Operations Platform",
    heroStory:
      "A unified HRMS platform that brings recruitment, onboarding, visa processing, attendance, and workforce administration into one enterprise ecosystem.",
    tags: ["Enterprise UX", "HR Tech", "Workflow Design"],
    mockupType: "browser",
    snapshot: {
      role: "Associate UX Consultant",
      platform: "Responsive Web Application",
      domain: "Human Resources · Enterprise SaaS · Workforce Management",
      team: "Product Managers, Business Analysts, HR SMEs, UX Team, UI Designers, Developers, QA Engineers",
      users: "Employees, Recruiters, HR Administrators, Managers, Executive Leadership",
      contribution: "Requirement Analysis, Workflow Mapping, Information Architecture, User Flow Design, Dashboard Design, Enterprise Form Design, High-Fidelity UI Design, Design System Implementation, Developer Handoff, Design QA",
    },
    businessContext:
      "Large organizations manage employees across multiple departments, locations, and legal jurisdictions. Recruitment, onboarding, visa documentation, attendance, approvals, and employee records are often handled through disconnected systems, spreadsheets, emails, and manual approval processes.\n\nThe business needed a unified platform that could digitize HR operations, standardize employee workflows, improve compliance, reduce manual intervention, and increase operational transparency across the entire workforce lifecycle.",
    coreProblemHeading: "HR teams were not managing one process. They were managing many moving parts at once.",
    coreProblem:
      "HR operations involved multiple independent systems that required employees and HR teams to switch between platforms throughout the employee lifecycle. This created repetitive manual data entry, fragmented onboarding experiences, complex visa approval chains, attendance inconsistencies, and slow approval workflows.\n\nThe challenge was to design one enterprise platform that unified these operations while reducing cognitive load for every user role involved.",
    productInsight:
      "The platform needed to act as an operational backbone for workforce management — where every stage of the employee lifecycle was structured, traceable, and easy to act on without switching contexts.",
    userCards: [
      { type: "Employee", responsibilities: "Views personal information, submits requests, completes onboarding tasks, tracks attendance", needs: "Simple self-service interface with clear task guidance" },
      { type: "Recruiter", responsibilities: "Manages candidates, reviews applications, schedules interviews, tracks hiring progress", needs: "Pipeline visibility and streamlined candidate management" },
      { type: "HR Administrator", responsibilities: "Configures workflows, manages records, processes visas, monitors onboarding", needs: "Comprehensive control with audit trails and compliance tracking" },
      { type: "Manager", responsibilities: "Approves requests, monitors team attendance, reviews employee status", needs: "Real-time team visibility with actionable approval workflows" },
      { type: "Executive Leadership", responsibilities: "Uses workforce dashboards, HR analytics, and compliance reports", needs: "High-level insights with drill-down capability" },
    ],
    uxChallenges: [
      { title: "Multi-Module Navigation", difficulty: "Users needed access to multiple HR functions — recruitment, onboarding, visa, attendance — without feeling lost.", response: "I created a scalable navigation system that grouped related operations consistently across all modules." },
      { title: "Long Enterprise Forms", difficulty: "HR tasks required significant data input with complex conditional fields and document uploads.", response: "I used progressive disclosure, grouped fields into logical sections, and added contextual inline guidance." },
      { title: "Multiple Approval Chains", difficulty: "HR processes involved approvals across departments, roles, and hierarchical levels.", response: "I designed transparent approval timelines with clear ownership indicators and status updates at each stage." },
      { title: "Workforce Visibility Gaps", difficulty: "Managers needed real-time operational insights, not just raw reports.", response: "I designed dashboards that surfaced actionable metrics, exceptions, and pending items instead of raw data tables." },
      { title: "Form Fatigue", difficulty: "Users had to complete repeated HR inputs across different lifecycle stages.", response: "I created reusable form patterns, smart defaults, and simplified input flows that reduced repetitive data entry." },
    ],
    productStructure: [
      { group: "Recruitment", items: ["AI Recruitment", "Candidates", "Jobs", "Interviews", "Offers"] },
      { group: "Workforce", items: ["Onboarding", "Tasks", "Documents", "Employee Profiles"] },
      { group: "Compliance", items: ["Visa Management", "Requests", "Renewals", "Approvals", "Documents"] },
      { group: "Operations", items: ["Time & Attendance", "Attendance", "Leave", "Shifts", "Reports", "Settings"] },
    ],
    designApproach: ["Requirement Analysis", "HR Workflow Mapping", "User Role Analysis", "Information Architecture", "Dashboard Exploration", "Enterprise Form Optimization", "High-Fidelity Interface Design", "Stakeholder Reviews", "Developer Handoff", "Design QA"],
    decisions: [
      { num: "01", title: "Unify four HR modules into one consistent ecosystem.", what: "AI Recruitment, Onboarding & Offboarding, Visa Management, and Time & Attendance were brought into one platform with shared navigation and consistent patterns.", why: "HR teams could manage the complete employee lifecycle without switching between disconnected tools." },
      { num: "02", title: "Make status visible across every workflow.", what: "Candidate progress, onboarding completion, visa status, attendance exceptions, and approvals were surfaced through clear, consistent status indicators.", why: "Users needed to immediately understand what was pending, completed, delayed, or required attention." },
      { num: "03", title: "Reduce form fatigue with structured data entry.", what: "Long HR forms were redesigned into logical groups with progressive disclosure, reusable field patterns, and clear section headings.", why: "This made complex data entry feel more manageable and reduced errors caused by form overload." },
      { num: "04", title: "Design dashboards for action, not just reporting.", what: "Dashboards focused on pending tasks, exceptions, approval queues, and workforce exceptions rather than passive data displays.", why: "Managers and HR teams needed to know what required immediate attention, not just view historical reports." },
    ],
    finalModules: [
      { name: "AI Recruitment", description: "Candidate management, resume screening, applicant tracking, interview scheduling, evaluation, and hiring pipeline visibility." },
      { name: "Onboarding & Offboarding", description: "Document collection, task assignment, approvals, asset allocation, exit checklists, and structured clearance workflows." },
      { name: "Visa Management", description: "Visa requests, approvals, renewals, document uploads, compliance monitoring, expiry notifications, and status tracking." },
      { name: "Time & Attendance", description: "Attendance monitoring, leave management, timesheets, shift management, and workforce analytics reports." },
      { name: "Dashboards", description: "Workforce visibility, compliance reports, and operational insights for HR teams and leadership." },
    ],
    screens: [
      { name: "HR Dashboard", caption: "Workforce overview with pending tasks, attendance exceptions, and hiring pipeline metrics", image: "/Images/hr-dashboard.png.png" },
      { name: "Active Jobs", caption: "Manage and monitor active job postings with status and candidate counts", image: "/Images/hr-active-jobs.png.png" },
      { name: "Create Job - Information", caption: "Import from CSV or fetch from SAP SuccessFactors to quickly populate job details", image: "/Images/hr-create-job-info.png.png" },
      { name: "Create Job - Benefits", caption: "Configure insurance, retirement, time off, and wellness perks", image: "/Images/hr-create-job-benefits.png.png" },
      { name: "Create Job - Publishing", caption: "Select target platforms and schedule when the job will be published", image: "/Images/hr-create-job-publish.png.png" },
      { name: "Create Job - Assign Recruiters", caption: "Assign recruiters and hiring managers to manage the candidate pipeline", image: "/Images/assign-recruiters.png.png" },
    ],
    outcome: "The Workforce Operations Platform transformed fragmented HR processes into a unified digital ecosystem. It centralized workforce operations, standardized employee lifecycle workflows, improved approval transparency, reduced administrative complexity, and created a scalable UX foundation for future workforce modules.",
    reflection: "This project strengthened my expertise in enterprise SaaS and HR technology. It taught me the importance of systems thinking, modular design, and reusable interaction patterns when designing products that support multiple roles and deeply interconnected workflows.",
  },

  {
    slug: "velocity-rfp",
    accentColor: "#6366f1", // Indigo/Electric Violet
    heroBg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)", // Deep blue to violet gradient
    heroPattern: "purple",
    category: "Enterprise SaaS · AI · Proposal Automation",
    title: "Velocity RFP",
    heroStory: "An AI-powered enterprise platform that converts complex RFP documents into structured requirements, collaborative tasks, and review-ready proposal workflows.",
    tags: ["AI Product Design", "Enterprise UX", "Proposal Automation"],
    mockupType: "browser",
    snapshot: {
      role: "Associate UX Consultant",
      platform: "Responsive Web Application",
      domain: "Enterprise SaaS · AI · Proposal Automation · Bid Management",
      team: "Product Managers, Business Analysts, UX Team, UI Designers, Developers, QA Engineers",
      users: "Admin, Manager, Editor",
      contribution: "Requirement Analysis, Enterprise Workflow Design, AI Workflow Experience Design, Requirement Management UX, Information Architecture, User Flow Design, Dashboard Design, High-Fidelity UI Design, Enterprise Component Design, Developer Collaboration, UX Reviews, Design QA",
    },
    businessContext: "Enterprise RFPs often contain hundreds of pages filled with technical, commercial, legal, compliance, and submission-related requirements.\n\nProposal teams must manually read these documents, identify what needs to be answered, organize the requirements, assign responsibilities, prepare responses, and ensure that nothing important is missed before submission.\n\nThis process is time-consuming, repetitive, and difficult to coordinate across multiple stakeholders. Important requirements can get buried inside long documents, ownership may become unclear, and managers often struggle to track proposal progress across teams.\n\nVelocity RFP was designed to solve this by combining AI-powered document understanding with collaborative enterprise workflows.",
    coreProblemHeading: "Proposal teams were not just writing responses. They were first trying to find the work hidden inside the document.",
    coreProblem: "Before a proposal team can respond to an RFP, they first need to identify every requirement, instruction, deliverable, deadline, compliance condition, and evaluation criterion inside the document.\n\nIn traditional workflows, this discovery stage depends heavily on manual reading. Teams spend significant time scanning documents, highlighting requirements, copying content into spreadsheets, assigning tasks manually, and tracking progress across disconnected tools.\n\nThe challenge was to design an experience where AI could reduce the manual burden while still keeping users in control of the final proposal workflow.",
    productInsight: "The platform turns lengthy, unstructured RFPs into structured, actionable records—shifting the workflow from document reading to active proposal management.",
    userCards: [
      { type: "Admin", responsibilities: "Responsible for platform administration and access control.", needs: "Needs to manage organizations, create users, configure permissions, manage teams, and access proposal settings." },
      { type: "Manager", responsibilities: "Responsible for proposal execution and review.", needs: "Needs to create proposal projects, upload RFP documents, initiate AI parsing, review AI-generated requirements, assign work, monitor progress, review responses, and approve submissions." },
      { type: "Editor", responsibilities: "Responsible for preparing responses to assigned requirements.", needs: "Needs to view assigned requirements, understand requirement details, prepare responses, upload supporting documents, add comments, save drafts, and submit work for review." }
    ],
    uxChallenges: [
      { title: "Reading hundreds of pages", difficulty: "Proposal teams spend significant time manually reading long RFP documents to identify actionable requirements.", response: "The platform uses AI to automatically extract and structure proposal requirements, reducing the need for extensive manual review." },
      { title: "Turning AI output into usable work", difficulty: "AI-generated content can become difficult to act on if it appears as one long summary or plain text block.", response: "I structured extracted requirements as individual cards or records so each one could be reviewed, categorized, assigned, tracked, and responded to separately." },
      { title: "Building trust in AI-generated requirements", difficulty: "Users need confidence before relying on AI-extracted content for proposal work.", response: "I designed a manager review step where AI-generated requirements can be validated, edited, merged, categorized, and approved before assignment." },
      { title: "Managing team collaboration", difficulty: "Multiple editors may work on different sections of the same proposal at the same time.", response: "The workflow supports role-based assignment, ownership, task status, deadlines, comments, and response tracking." },
      { title: "Tracking proposal progress", difficulty: "Managers need clear visibility into completion status, assigned tasks, pending responses, and review progress.", response: "I designed dashboard views that show AI processing status, requirement progress, assignments, deadlines, proposal health, and team activity." }
    ],
    productStructure: [
      { group: "Dashboard", items: ["Active Proposals", "AI Status", "Progress", "Deadlines", "Team Activity"] },
      { group: "AI Processing", items: ["Upload Documents", "AI Parsing", "Requirement Extraction", "Categorization"] },
      { group: "Requirement Management", items: ["Review AI Output", "Edit Requirements", "Merge", "Categorize", "Assign Owners"] },
      { group: "Proposal Workspace", items: ["Requirement Details", "Response Editor", "Supporting Docs", "Drafts", "Comments"] },
      { group: "Review & Approval", items: ["Draft", "Under Review", "Revision Required", "Approved", "Final Submission"] }
    ],
    designApproach: ["Understand the RFP lifecycle", "Map user roles", "Structure the AI workflow", "Design requirement management", "Build dashboard visibility", "Support review and handoff"],
    decisions: [
      { num: "01", title: "Make AI output reviewable, not final.", what: "AI-extracted requirements were designed as editable structured records rather than fixed generated text.", why: "Managers needed to validate, correct, merge, and approve AI output before assigning work to proposal editors." },
      { num: "02", title: "Turn requirements into work items.", what: "Each extracted requirement became a card or record with category, ownership, status, priority, deadline, and response tracking.", why: "Proposal teams needed to move from document reading to task execution quickly." },
      { num: "03", title: "Keep managers in control of the AI workflow.", what: "A manager review stage was introduced between AI extraction and editor assignment.", why: "This improved trust and prevented unverified AI outputs from directly entering the proposal response workflow." },
      { num: "04", title: "Design for role-based collaboration.", what: "Admins, Managers, and Editors were given different capabilities based on their responsibilities.", why: "The platform needed to support enterprise collaboration without exposing unnecessary actions to every user." },
      { num: "05", title: "Make proposal progress visible.", what: "Dashboards and status indicators were designed to show AI processing, requirement completion, assignments, review stages, deadlines, and team activity.", why: "Managers needed visibility into proposal health without manually checking every requirement or editor." }
    ],
    finalModules: [
      { name: "Dashboard", description: "Gives managers a quick understanding of proposal progress, active proposals, AI processing status, requirement completion, assigned tasks, deadlines, and team activity." },
      { name: "AI Document Processing", description: "Allows users to upload single or multiple RFP documents and view AI parsing progress." },
      { name: "Requirement Management", description: "Displays extracted requirements as structured records that managers can review, edit, categorize, prioritize, and assign." },
      { name: "Proposal Workspace", description: "Allows editors to view requirement details, prepare responses, upload supporting documents, save drafts, add comments, and submit for review." },
      { name: "Task Management", description: "Helps managers assign requirements, set deadlines, track ownership, and monitor workload distribution." },
      { name: "Review & Approval", description: "Moves proposal responses through Draft, Under Review, Revision Required, Approved, and Final Submission stages." }
    ],
    screens: [
      { name: "Screen 1", caption: "", image: "/Images/a.png", layout: "web" },
      { name: "Screen 2", caption: "", image: "/Images/b.png", layout: "web" },
      { name: "Screen 3", caption: "", image: "/Images/c.png", layout: "web" },
      { name: "Screen 4", caption: "", image: "/Images/d.png", layout: "web" },
      { name: "Screen 5", caption: "", image: "/Images/e.png", layout: "web" },
      { name: "Screen 6", caption: "", image: "/Images/f.png", layout: "web" },
      { name: "Screen 7", caption: "", image: "/Images/g.png", layout: "web" },
      { name: "Screen 8", caption: "", image: "/Images/h.png", layout: "web" },
      { name: "Screen 9", caption: "", image: "/Images/i.png", layout: "web" },
      { name: "Screen 10", caption: "", image: "/Images/j.png", layout: "web" }
    ],
    outcome: "Velocity RFP created a structured AI-assisted proposal workflow that reduced the dependency on manual RFP document review and helped proposal teams move faster from document upload to requirement execution.\n\nThe final product experience connected AI document processing, requirement management, task assignment, response writing, review workflows, and role-based collaboration into one enterprise platform.\n\nThe design made complex proposal work easier to organize, review, assign, and track.",
    reflection: "Velocity RFP helped me understand how AI can improve enterprise workflows when it is designed as a practical assistant rather than a black-box automation layer.\n\nThe most important design challenge was not simply showing AI output. It was designing the human-AI handoff: how users review, trust, edit, organize, and act on what AI extracts.\n\nThis project strengthened my experience in AI product design, enterprise UX, document processing workflows, role-based access, dashboard design, and task management systems."
  },

  {
    slug: "smart-park-experience",
    accentColor: "#4ade80",
    heroBg: "linear-gradient(135deg, #052e16 0%, #14532d 60%, #166534 100%)",
    heroPattern: "nature",
    category: "Smart City · Tourism · Visitor Experience",
    title: "Smart Park Experience",
    heroStory:
      "A mobile-first visitor companion that helps people explore, navigate, personalize, and enjoy a large urban park ecosystem.",
    tags: ["Mobile UX", "Navigation", "Tourism"],
    mockupType: "mobile",
    snapshot: {
      role: "Associate UX Consultant",
      platform: "Native Mobile Application for iOS & Android",
      domain: "Smart City · Tourism · Visitor Experience",
      team: "Product Managers, Business Analysts, UX Team, UI Designers, Developers, GIS Specialists",
      users: "Tourists, Families, Event Visitors, Fitness Enthusiasts, Local Residents",
      contribution: "Requirement Analysis, Visitor Journey Mapping, Information Architecture, Mobile UX Design, Navigation Flow Design, Interaction Design, High-Fidelity UI Design, Design Reviews, Developer Collaboration, Design QA",
    },
    businessContext:
      "Large-scale destination parks attract visitors with different goals — leisure, sightseeing, family activities, events, sports, dining, and community experiences. Without a centralized digital experience, visitors depend on static maps, scattered information sources, or on-site assistance for basic navigation.\n\nThe objective was to create a unified mobile application that improves visitor satisfaction while encouraging greater engagement with the park's full range of attractions and services.",
    coreProblemHeading: "A large destination can feel exciting, but also overwhelming.",
    coreProblem:
      "Visitors entering a large destination park often have limited knowledge of its layout, available experiences, ongoing events, and essential facilities. Traditional navigation methods create difficulty locating attractions, inefficient route planning, missed events, and poor personalization.\n\nThe challenge was to design a mobile experience that simplifies exploration while encouraging visitors to discover more of what the park genuinely offers.",
    productInsight:
      "The app needed to become a personal digital companion, not just a map. It had to support discovery, navigation, services, personalization, and real-world movement in one cohesive mobile-first journey.",
    userCards: [
      { type: "Tourists", responsibilities: "Discover attractions, navigate routes, find dining, and explore events", needs: "Clear discovery with map guidance and attraction highlights" },
      { type: "Families", responsibilities: "Find children's attractions, rest areas, family facilities, and safe routes", needs: "Filtered views for family-friendly content and nearby services" },
      { type: "Event Visitors", responsibilities: "Access event schedules, venue navigation, parking, and entry guidance", needs: "Event-specific information with real-time wayfinding" },
      { type: "Fitness Enthusiasts", responsibilities: "Find walking routes, cycling paths, sports facilities, and activity areas", needs: "Route-based navigation with distance and activity tagging" },
      { type: "Local Residents", responsibilities: "Explore recommendations, saved favorites, new events, and community activities", needs: "Personalized updates and saved preference management" },
    ],
    uxChallenges: [
      { title: "Large Physical Environment", difficulty: "Visitors could easily become disoriented in a large park without clear digital wayfinding.", response: "I designed navigation supported by recognizable landmarks, proximity cues, and contextual directional guidance." },
      { title: "Information Overload", difficulty: "The park contains many attractions, dining options, events, and services that could overwhelm users.", response: "I organized content into meaningful categories with progressive disclosure and personalized filtering." },
      { title: "Different Visitor Intentions", difficulty: "Tourists, families, fitness enthusiasts, and locals all arrive with fundamentally different goals.", response: "I designed personalized discovery experiences based on visitor interests, visit context, and saved preferences." },
      { title: "Mobile-First Outdoor Usability", difficulty: "Visitors interact while walking outdoors, often in bright sunlight with one hand occupied.", response: "I designed one-handed interaction patterns, large touch targets, high-contrast elements, and concise content." },
      { title: "Critical Service Access", difficulty: "Essential facilities like parking, restrooms, and first aid needed to be found immediately without deep navigation.", response: "I introduced persistent quick-access service shortcuts always visible within the navigation structure." },
    ],
    productStructure: [
      { group: "Discovery", items: ["Home", "Explore", "Attractions", "Dining", "Entertainment", "Events"] },
      { group: "Navigation", items: ["Map", "Navigation", "Nearby Places", "Search"] },
      { group: "Services", items: ["Parking", "Restrooms", "Accessibility", "Support", "Information"] },
      { group: "Personal", items: ["Profile", "Favorites", "Saved Routes", "Preferences", "Notifications"] },
    ],
    designApproach: ["Visitor Journey Analysis", "Requirement Discussions", "Tourism Behavior Research", "Information Hierarchy", "Navigation Concepts", "Discovery Models", "Mobile Wireframes", "High-Fidelity UI", "Stakeholder Feedback", "Design QA"],
    decisions: [
      { num: "01", title: "Prioritize discovery over menu-driven navigation.", what: "The experience encouraged exploration through categorized discovery cards, visual attraction highlights, and curated content feeds.", why: "Visitors needed to immediately understand what the park offered without feeling lost or relying on prior knowledge." },
      { num: "02", title: "Simplify route planning for real-world movement.", what: "Navigation was designed around destination selection, nearby attraction suggestions, route guidance, and recognizable landmark references.", why: "Visitors needed confidence while moving through a large physical environment, especially first-time visitors." },
      { num: "03", title: "Keep essential services persistently accessible.", what: "Services like parking, restrooms, accessibility, and emergency support were given persistent quick-access across all app sections.", why: "Critical facilities should never be hidden inside deep navigation when visitors need them urgently." },
      { num: "04", title: "Design for one-handed mobile use throughout.", what: "Interaction patterns used large touch targets, bottom-anchored controls, concise content, and minimal text entry requirements.", why: "Users interact with the app while walking, holding bags, or managing family members in a real-world outdoor environment." },
    ],
    finalModules: [
      { name: "Explore", description: "Browse attractions, gardens, museums, entertainment, and landmarks with visual discovery cards and filtered categories." },
      { name: "Interactive Navigation", description: "Wayfinding with route planning, nearby places, location search, landmark-based guidance, and walking directions." },
      { name: "Events & Experiences", description: "Event listings with detailed schedules, locations, bookings, and personalized recommendations." },
      { name: "Visitor Services", description: "Parking, restrooms, prayer rooms, first aid, information centers, and accessibility services in one place." },
      { name: "Personalized Journey", description: "Favorites, saved routes, recommendations, recently visited places, and custom itineraries." },
    ],
    screens: [
      { name: "Screen 1", caption: "", image: "/Images/1.png" },
      { name: "Screen 2", caption: "", image: "/Images/2.png" },
      { name: "Screen 3", caption: "", image: "/Images/3.png" },
      { name: "Screen 4", caption: "", image: "/Images/4.png" },
      { name: "Screen 5", caption: "", image: "/Images/5.png" },
      { name: "Screen 6", caption: "", image: "/Images/6.png" },
      { name: "Screen 7", caption: "", image: "/Images/7.png" },
      { name: "Screen 8", caption: "", image: "/Images/8.png" },
      { name: "Screen 9", caption: "", image: "/Images/9.png" },
      { name: "Screen 10", caption: "", image: "/Images/10.png" },
      { name: "Screen 11", caption: "", image: "/Images/11.png" },
      { name: "Screen 12", caption: "", image: "/Images/12.png" },
    ],
    outcome: "The Smart Park Experience transformed a large and potentially overwhelming physical destination into a digitally guided visitor journey. It simplified park navigation, improved attraction discoverability, enhanced visitor confidence, supported personalization, and increased engagement with events and services.",
    reflection: "This project helped me explore the connection between physical environments and digital products. It strengthened my ability to design location-aware mobile experiences that support users in real-world contexts while keeping interactions simple, accessible, and genuinely useful.",
  },

  {
    slug: "drivehub",
    accentColor: "#fb923c",
    heroBg: "linear-gradient(135deg, #7c1d06 0%, #c2410c 60%, #ea580c 100%)",
    heroPattern: "orange",
    category: "Mobility · Travel Technology · Vehicle Rental",
    title: "DriveHub",
    heroStory:
      "A travel-first mobility platform that transforms vehicle rental into a connected journey of booking, discovery, rewards, and trip planning.",
    tags: ["Product Strategy", "Mobile UX", "Travel UX"],
    mockupType: "both",
    snapshot: {
      role: "Product Designer",
      platform: "Responsive Website & Native Mobile Application",
      domain: "Mobility · Travel Technology · Vehicle Rental · Tourism",
      team: "Individual Project",
      users: "Leisure Travelers, Road Trip Enthusiasts, Business Travelers, Tourists",
      contribution: "Product Strategy, UX Research, Competitive Analysis, Product Vision, Information Architecture, User Journey Mapping, User Flow Design, Wireframing, Mobile UX Design, Website UX Design, High-Fidelity UI Design, Design System Creation, Prototype Development",
    },
    businessContext:
      "Traditional vehicle rental platforms focus primarily on booking transactions. Modern travelers, however, seek complete experiences — recommendations, route planning, rewards, and destination discovery. Users frequently switch between rental apps, maps, travel blogs, hotel platforms, and itinerary tools to plan a single trip.\n\nDriveHub was created as a product concept to consolidate these travel planning needs into one unified mobility ecosystem where renting a vehicle becomes the start of a complete journey.",
    coreProblemHeading: "Travelers did not just need a vehicle. They needed the journey around it.",
    coreProblem:
      "Existing rental platforms solve transportation, but they rarely help users discover destinations, plan routes, unlock rewards, or build meaningful travel experiences around their journey. This creates fragmented planning, missed exploration opportunities, and transactional experiences that end at booking confirmation.\n\nThe challenge was to bridge mobility and tourism into one seamless digital product that extended value beyond the vehicle booking itself.",
    productInsight:
      "The product needed to shift from 'rent a vehicle' to 'plan a journey.' Mobility became the starting point for destination discovery, personalized rewards, and connected trip planning.",
    userCards: [
      { type: "Leisure Travelers", responsibilities: "Book vehicles, discover destinations, plan trips, find local experiences", needs: "Inspiring discovery with easy booking and trip planning in one flow" },
      { type: "Road Trip Enthusiasts", responsibilities: "Plan long routes, find scenic stops, unlock rewards, build flexible itineraries", needs: "Route-building tools, destination suggestions, and loyalty benefits" },
      { type: "Business Travelers", responsibilities: "Fast bookings, efficient navigation, nearby services, time-saving recommendations", needs: "Streamlined booking with minimal steps and smart defaults" },
      { type: "Tourists", responsibilities: "Explore local attractions, restaurants, activities, and guided recommendations", needs: "Contextual discovery tied to their current destination and vehicle" },
    ],
    uxChallenges: [
      { title: "Fragmented Travel Planning", difficulty: "Users needed to switch across multiple apps to complete one travel planning journey.", response: "I combined vehicle rental, destination discovery, rewards, and trip planning into one connected ecosystem." },
      { title: "Decision Fatigue", difficulty: "Large numbers of vehicles and destinations can overwhelm users during the selection process.", response: "I introduced smart filters, visual vehicle comparison, pricing clarity, and personalized recommendations." },
      { title: "Discoverability of Nearby Experiences", difficulty: "Travelers often miss nearby attractions that would enhance their journey.", response: "I integrated contextual destination suggestions throughout the booking and trip planning flow." },
      { title: "User Motivation Beyond Booking", difficulty: "Traditional rental experiences end at booking confirmation with no ongoing engagement.", response: "I introduced a rewards system and exploration features that continue providing value throughout the trip." },
      { title: "Cross-Platform Consistency", difficulty: "The product needed to feel coherent across both responsive website and native mobile app.", response: "I created a shared design system with consistent patterns, components, and interactions across both platforms." },
    ],
    productStructure: [
      { group: "Core", items: ["Home", "Explore Vehicles", "Search", "Categories", "Comparison"] },
      { group: "Journeys", items: ["Trip Planner", "Itineraries", "Routes", "Saved Trips"] },
      { group: "Explore", items: ["Destinations", "Attractions", "Hidden Gems"] },
      { group: "Value", items: ["Rewards", "Offers", "Loyalty", "Partners", "Bookings", "Profile"] },
    ],
    designApproach: ["Product Strategy", "Competitive Analysis", "Travel Behavior Research", "User Journey Mapping", "Feature Prioritization", "Information Architecture", "Wireframing", "Website Design", "Mobile Interface Design", "Design System Creation", "Prototype Development"],
    decisions: [
      { num: "01", title: "Position travel discovery inside the rental journey.", what: "Destination recommendations, travel inspiration, and local highlights were embedded directly into the vehicle booking flow.", why: "Users could move seamlessly from booking a vehicle to planning a meaningful journey around it." },
      { num: "02", title: "Simplify vehicle comparison without overwhelming.", what: "Filters, pricing hierarchy, visual vehicle comparison side-by-side, and clear availability indicators were made immediately accessible.", why: "Users needed to choose vehicles confidently and quickly without experiencing decision fatigue." },
      { num: "03", title: "Build a connected trip planner.", what: "Users could create itineraries, save multi-stop trips, add discovery points, and estimate travel time from within the product.", why: "The platform needed to support the complete journey experience — not just the vehicle selection moment." },
      { num: "04", title: "Make rewards contextual to the journey.", what: "Partner discounts, loyalty benefits, destination offers, and exclusive experiences appeared based on travel context and booking stage.", why: "Rewards needed to feel like a natural extension of the travel experience — not a promotional sidebar." },
    ],
    finalModules: [
      { name: "Vehicle Marketplace", description: "Search, filter, visually compare, and book rental vehicles with pricing clarity and availability confidence." },
      { name: "Destination Discovery", description: "Explore nearby attractions, hidden gems, recommended stops, and local experiences tied to your trip." },
      { name: "Trip Planner", description: "Build itineraries, plan multi-stop routes, save trips, estimate travel times, and manage journey details." },
      { name: "Rewards & Perks", description: "Partner discounts, loyalty points, destination-specific offers, and exclusive travel experiences." },
      { name: "Personal Travel Hub", description: "Centralized bookings, upcoming trips, saved destinations, favorite vehicles, rewards status, and personalized suggestions." },
    ],
    screens: [
      { name: "Landing Page", caption: "", image: "/Images/Home.png", layout: "web" },
      { name: "Web Banner", caption: "", image: "/Images/web 2.png", layout: "web" },
      { name: "Mobile 1", caption: "", image: "/Images/mob 1.png", layout: "mobile" },
      { name: "Mobile 2", caption: "", image: "/Images/mob 2.png", layout: "mobile" },
      { name: "Mobile 3", caption: "", image: "/Images/mob 3.png", layout: "mobile" },
      { name: "Mobile 4", caption: "", image: "/Images/mob 4.png", layout: "mobile" },
      { name: "Mobile 5", caption: "", image: "/Images/mob 5.png", layout: "mobile" },
      { name: "Mobile 6", caption: "", image: "/Images/mob 6.png", layout: "mobile" },
      { name: "Mobile 7", caption: "", image: "/Images/mob 7.png", layout: "mobile" },
      { name: "Mobile 8", caption: "", image: "/Images/mob 8.png", layout: "mobile" },
      { name: "Mobile 9", caption: "", image: "/Images/mob 9.png", layout: "mobile" },
    ],
    outcome: "DriveHub evolved from a vehicle rental concept into a comprehensive travel ecosystem that integrates mobility with exploration. The product demonstrated how UX can extend beyond transactional interactions to create richer, more engaging, and genuinely connected travel experiences.",
    reflection: "DriveHub challenged me to define a product vision from scratch, identify market opportunities, shape a feature set, and design an end-to-end experience across web and mobile. It strengthened my product strategy, systems thinking, and experience-led design skills beyond enterprise contexts.",
  },
];
