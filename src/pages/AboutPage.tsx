import { motion } from "motion/react";
import { FadeUp, StaggerList, StaggerItem, HoverCard } from "../components/ui/Animated";

const C = {
  bg: "#000000",
  text: "#ffffff",
  blue: "#00e5ff",
  blueText: "#00e5ff",
  dim: "rgba(255,255,255,0.65)",
  muted: "rgba(255,255,255,0.4)",
  border: "#222222",
  card: "#0a0a0a",
};

const focus = [
  { title: "Enterprise UX", body: "Designing where multiple users, roles, tasks, statuses, and decisions need to work together without creating confusion." },
  { title: "AI Experiences", body: "Designing conversational and AI-assisted experiences that help users ask, understand, decide, and move forward." },
  { title: "Workflow Design", body: "Breaking down complex processes and turning them into structured journeys that users can follow with confidence." },
  { title: "Design Systems", body: "Creating reusable patterns, components, and layout systems that improve consistency and make product handoff easier." },
];

const howIWork = [
  { title: "Understand", body: "Before designing screens, I analyze the product logic, user roles, data, and business flow." },
  { title: "Structure", body: "Focusing on information architecture, user flows, and hierarchy so users can navigate easily." },
  { title: "Design", body: "Every screen should help the user understand what is happening and what action they can take." },
  { title: "Handoff", body: "Organizing designs with reusable components, clear states, and developer-friendly documentation." },
];

const experience = [
  { company: "Exalogic Consulting", role: "Associate UX Consultant", period: "Dec 2024 – Present", location: "Bangalore, India", bullets: ["Designed user-centric enterprise products focusing on usability, workflow clarity, and business alignment.","Worked on complex dashboards, workflow systems, and role-based interfaces for enterprise platforms.","Created wireframes, prototypes, high-fidelity UI designs, and reusable design components to support product development.","Translated product requirements into information architecture, user journeys, task flows, and interaction patterns.","Collaborated with developers and stakeholders to ensure design feasibility and implementation quality."] },
  { company: "Digital Dose", role: "UI/UX Design Intern", period: "Aug 2024 – Nov 2024", location: "Mumbai, Remote", bullets: ["Gained hands-on experience in user research, wireframing, prototyping, and UI design using Figma.","Supported product design by creating user flows, screen layouts, and visual design explorations.","Improved practical understanding of responsive layouts, visual hierarchy, interaction patterns, and design-to-development collaboration."] },
  { company: "Blu Mountain Dairy", role: "Business Owner / Operations", period: "Sep 2021 – Dec 2024", location: "Coonoor, India", bullets: ["Managed daily dairy business operations, customer coordination, local sales, and workflow planning.","Developed ownership, communication, problem solving, and operational decision making skills through hands-on business management."] },
];

const skillGroups = [
  { title: "UX & Product Design", skills: ["Product Thinking","User Research","Information Architecture","User Flows","Wireframing","Prototyping","Interaction Design"] },
  { title: "Enterprise UX", skills: ["Dashboard UX","Workflow Design","Role-Based Interfaces","Data Visualization","Approval Flows","Design for Complex Systems"] },
  { title: "AI & Conversational UX", skills: ["AI Agent Experience Design","Conversational UX","Prompt Flow Design","Guided User Journeys"] },
  { title: "UI & Design Systems", skills: ["High-Fidelity UI Design","Design Systems","Component Libraries","Visual Hierarchy","Developer Handoff"] },
];

const quickFacts = [
  { num: "~2", label: "Years Exp." },
  { num: "6", label: "Case Studies" },
  { num: "4+", label: "Domains" },
  { 
    label: "Tools", 
    logos: [
      { name: "Figma", svg: (
        <svg width="22" height="22" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
          <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
          <path d="M19 0H9.5A9.5 9.5 0 0 0 0 9.5v0A9.5 9.5 0 0 0 9.5 19H19V0z" fill="#F24E1E"/>
          <path d="M0 28.5a9.5 9.5 0 0 1 9.5-9.5H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#A259FF"/>
          <path d="M38 9.5a9.5 9.5 0 0 1-9.5 9.5H19V0h9.5A9.5 9.5 0 0 1 38 9.5z" fill="#FF7262"/>
        </svg>
      ) },
      { name: "Photoshop", svg: (
        <svg width="22" height="22" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#001E36" />
          <text x="50" y="72" fontFamily="Helvetica, Arial, sans-serif" fontSize="58" fontWeight="bold" fill="#31A8FF" textAnchor="middle">Ps</text>
        </svg>
      ) },
      { name: "Illustrator", svg: (
        <svg width="22" height="22" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#330000" />
          <text x="50" y="72" fontFamily="Helvetica, Arial, sans-serif" fontSize="58" fontWeight="bold" fill="#FF9A00" textAnchor="middle">Ai</text>
        </svg>
      ) },
      { name: "Claude", img: "/Claude_AI_symbol 1.png" },
      { name: "ChatGPT", img: "/chatgpt 1.png" },
      { name: "Antigravity", img: "/antigravity.png" }
    ] 
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: C.bg }} className="min-h-screen relative pb-32 pt-28 md:pt-24 px-6 md:px-12 selection:bg-blue-500/30 selection:text-blue-100">
      
      <div className="max-w-[1300px] mx-auto">
        
        {/* ══════════════════════════════ HERO ══════════════════════════════ */}
        <section className="mb-20">
          <FadeUp>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.blue }} />
              <p className="font-medium tracking-[0.2em] uppercase text-xs" style={{ color: C.blueText }}>About & Resume</p>
            </div>
            
            <h1 
              className="font-medium mb-8" 
              style={{ fontSize: "clamp(48px, 7vw, 96px)", letterSpacing: "-0.04em", lineHeight: 1, color: C.text }}
            >
              I design products that make <br className="hidden md:block"/>
              <span className="italic pr-2" style={{ color: C.blueText, opacity: 0.8 }}>complex workflows</span> feel clear.
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: C.dim, letterSpacing: "-0.01em" }}>
              I'm Vignesh Gowtham, a UX Designer with nearly 2 years of experience designing enterprise platforms, AI driven experiences, dashboards, workflow systems, and mobile applications. Experienced in simplifying complex systems into clear, usable, and scalable digital product experiences.
            </p>
          </FadeUp>
        </section>

        {/* ══════════════════════════════ BENTO GRID LAYOUT ══════════════════════════════ */}
        <StaggerList className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Row 1: Quick Facts (Full width, 4 cards) */}
          <StaggerItem className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((f, i) => (
              <HoverCard key={i} className="flex flex-col justify-between p-6 h-full" style={{ borderRadius: 24, background: C.card, border: `1px solid ${C.border}` }}>
                <p className="text-sm font-medium uppercase tracking-wider mb-6" style={{ color: C.muted }}>{f.label}</p>
                {f.logos ? (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {f.logos.map(logo => (
                      <div key={logo.name} className="flex items-center justify-center p-2 rounded-xl transition-colors hover:bg-white/10" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}` }} title={logo.name}>
                        {logo.svg || (logo.img && <img src={logo.img} alt={logo.name} className="w-[22px] h-[22px] object-contain" />)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-light mt-auto" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em", color: C.text, lineHeight: 1 }}>{f.num}</p>
                )}
              </HoverCard>
            ))}
          </StaggerItem>

          {/* Row 2: Experience (Full width) */}
          <StaggerItem className="lg:col-span-12 mt-4">
            <HoverCard className="p-10 h-full flex flex-col" style={{ borderRadius: 24, background: C.card, border: `1px solid ${C.border}` }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b pb-6 gap-4" style={{ borderColor: C.border }}>
                <h2 className="text-2xl font-medium tracking-tight" style={{ color: C.text }}>Experience</h2>
                <a href="/resume.pdf" download="Vignesh_Gowtham_Resume.pdf" className="self-start md:self-auto text-sm font-medium border rounded-full px-4 py-1.5 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-500" style={{ borderColor: C.border, color: C.blueText }}>Download Resume ↗</a>
              </div>
              
              <div className="flex flex-col gap-10 flex-1 justify-center">
                {experience.map((e, i) => (
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 group" key={i}>
                    <div className="shrink-0 md:w-48">
                      <p className="text-sm font-medium mb-1 transition-colors group-hover:text-blue-300" style={{ color: C.dim }}>{e.period}</p>
                      <p className="text-xs uppercase tracking-widest" style={{ color: C.muted }}>{e.location}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1" style={{ color: C.text, letterSpacing: "-0.01em" }}>{e.company}</h3>
                      <p className="text-sm font-medium mb-4" style={{ color: C.blueText }}>{e.role}</p>
                      <ul className="flex flex-col gap-2">
                        {e.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3 text-[14px] leading-relaxed" style={{ color: C.dim }}>
                            <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: C.blue }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </HoverCard>
          </StaggerItem>

          {/* Row 2: Skills Array (Span 12) */}
          <StaggerItem className="lg:col-span-12 mt-4">
            <HoverCard className="p-10" style={{ borderRadius: 24, background: C.card, border: `1px solid ${C.border}` }}>
              <h2 className="text-2xl font-medium tracking-tight mb-8 border-b pb-6" style={{ color: C.text, borderColor: C.border }}>Skills & Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {skillGroups.map((g, i) => (
                  <div key={i}>
                    <p className="font-medium text-base mb-5" style={{ color: C.blueText }}>{g.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <span key={s} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(77,122,240,0.06)", color: C.dim, border: `1px solid ${C.border}` }}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </HoverCard>
          </StaggerItem>

          {/* Row 3: Focus Areas (4 cards, span 3 each) */}
          <StaggerItem className="lg:col-span-12 mt-4">
            <h2 className="text-2xl font-medium tracking-tight mb-6 px-2" style={{ color: C.text }}>My Design Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focus.map((f, i) => (
                <HoverCard key={i} className="p-8 h-full flex flex-col" style={{ borderRadius: 24, background: C.card, border: `1px solid ${C.border}` }}>
                  <h3 className="text-lg font-medium mb-4" style={{ color: C.text, letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p className="text-[14px] leading-relaxed flex-1" style={{ color: C.dim }}>{f.body}</p>
                </HoverCard>
              ))}
            </div>
          </StaggerItem>

          {/* Row 4: How I Work (Span 12) */}
          <StaggerItem className="lg:col-span-12 mt-4">
            <HoverCard className="p-10" style={{ borderRadius: 24, background: C.card, border: `1px solid ${C.border}` }}>
              <h2 className="text-2xl font-medium tracking-tight mb-10 border-b pb-6" style={{ color: C.text, borderColor: C.border }}>Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howIWork.map((w, i) => (
                  <div key={i} className="flex flex-col relative">
                    <span className="text-xs font-bold tracking-widest mb-4" style={{ color: C.blueText }}>0{i+1}</span>
                    <h3 className="text-lg font-medium mb-3" style={{ color: C.text, letterSpacing: "-0.01em" }}>{w.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: C.dim }}>{w.body}</p>
                  </div>
                ))}
              </div>
            </HoverCard>
          </StaggerItem>

          {/* Row 5: Education & Certification */}
          <StaggerItem className="lg:col-span-12 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <HoverCard className="p-8 flex flex-col" style={{ borderRadius: 24, background: C.card, border: `1px solid ${C.border}` }}>
              <h2 className="text-lg font-medium tracking-tight mb-6" style={{ color: C.text }}>Education</h2>
              <div className="mt-auto">
                <p className="font-medium text-base mb-1" style={{ color: C.blueText }}>Bachelor of Science in Visual Communication</p>
                <p className="text-sm mb-1" style={{ color: C.dim }}>Dr. G. R. Damodaran College of Science</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: C.muted }}>Coimbatore, India</p>
              </div>
            </HoverCard>
            <HoverCard className="p-8 flex flex-col" style={{ borderRadius: 24, background: C.card, border: `1px solid ${C.border}` }}>
              <h2 className="text-lg font-medium tracking-tight mb-6" style={{ color: C.text }}>Certification</h2>
              <div className="mt-auto">
                <p className="font-medium text-base mb-1" style={{ color: C.blueText }}>UI/UX Certified Bootcamp</p>
                <p className="text-sm" style={{ color: C.dim }}>UpGrad, KnowledgeHut</p>
              </div>
            </HoverCard>
          </StaggerItem>

        </StaggerList>
        
      </div>
    </div>
  );
}
