const C = {
  bg: "#000000", card: "#0a0a0a", border: "#222222",
  text: "#ffffff", dim: "rgba(255,255,255,0.65)", muted: "rgba(255,255,255,0.4)",
  blue: "#00e5ff", blueText: "#00e5ff",
};

const skillGroups = [
  { title: "UX & Product Design", skills: ["Product Thinking","Requirement Understanding","User Research","Information Architecture","User Flows","Journey Mapping","Wireframing","Prototyping","Interaction Design","Usability Review","Responsive Design"] },
  { title: "Enterprise UX", skills: ["Dashboard UX","Workflow Design","Role-Based Interfaces","Enterprise Forms","Data Visualization","Status Management","Approval Flows","Admin Interfaces","Design for Complex Systems"] },
  { title: "AI & Conversational UX", skills: ["AI Agent Experience Design","Conversational UX","Chat UX","Voice UX","Prompt Flow Design","Guided User Journeys","Knowledge Retrieval Flows","Human-AI Interaction Patterns"] },
  { title: "UI & Design Systems", skills: ["High-Fidelity UI Design","Design Systems","Component Libraries","Visual Hierarchy","Layout Systems","Accessibility Basics","Developer Handoff","Design Documentation"] },
];

const experience = [
  { company: "Exalogic Consulting", role: "Associate UX Consultant", period: "December 2024 – Present", location: "Bangalore, India", bullets: ["Designed user centric enterprise products with a focus on usability, workflow clarity, accessibility, and business alignment.","Worked on complex dashboards, workflow systems, and role based interfaces for enterprise and government focused platforms.","Created wireframes, prototypes, high fidelity UI designs, and reusable design components to support product development.","Translated product requirements into information architecture, user journeys, task flows, and interaction patterns.","Designed data heavy interfaces, enterprise forms, approval flows, status driven screens, and dashboard experiences.","Collaborated with developers, stakeholders, and product teams to ensure design feasibility and implementation quality.","Supported developer handoff through structured Figma files, component usage, design documentation, and clear screen level specifications."] },
  { company: "Digital Dose", role: "UI/UX Design Intern", period: "August 2024 – November 2024", location: "Mumbai, Remote", bullets: ["Gained hands on experience in user research, wireframing, prototyping, and UI design using Figma.","Supported digital product design work by creating user flows, screen layouts, and visual design explorations.","Collaborated with developers and stakeholders to understand requirements and align design outputs with user and business needs.","Improved practical understanding of responsive layouts, visual hierarchy, interaction patterns, and design to development collaboration."] },
  { company: "Blu Mountain Dairy", role: "Business Owner / Operations", period: "September 2021 – December 2024", location: "Coonoor, India", bullets: ["Managed daily dairy business operations, customer coordination, local sales, and workflow planning.","Developed ownership, communication, problem solving, and operational decision making skills through hands on business management."], additional: true },
];

const tools = ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"];
const selectedProjects = ["Internal Audit Platform","Agentic AI Workflow Platform","Enterprise Workforce Platform"];

export default function ResumePage() {
  return (
    <div style={{ background: C.bg }} className="px-6 md:px-12 pb-24">
      {/* Header */}
      <div className="flex items-start justify-between mb-20">
        <div className="max-w-2xl">
          <p className="font-medium uppercase mb-5" style={{ fontSize: "10px", letterSpacing: "0.14em", color: C.blueText }}>Resume</p>
          <h1 className="font-semibold mb-6" style={{ color: C.text, fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Experience built around systems, workflows, and clear digital products.
          </h1>
          <p className="text-base leading-relaxed" style={{ color: C.dim, letterSpacing: "-0.01em", lineHeight: 1.65 }}>
            A quick overview of my UX experience, skills, tools, and selected product work.
          </p>
        </div>
        <a href="/resume.pdf" download="Vignesh_Gowtham_Resume.pdf" className="shrink-0 mt-2 inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full"
          style={{ background: "linear-gradient(135deg, #00e5ff 0%, #00b3cc 100%)", color: "#fff", boxShadow: "0 0 20px rgba(0,229,255,0.25)" }}>
          Download Resume
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M1 8l5 3 5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </div>

      {/* Summary */}
      <section className="mb-24 rounded-[20px] p-10 relative overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(12px)", boxShadow: "0 0 30px rgba(0,229,255,0.04)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "60%", background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)" }} />
        <p className="font-medium uppercase mb-5" style={{ fontSize: "10px", letterSpacing: "0.14em", color: C.blueText }}>Summary</p>
        <p className="text-lg leading-relaxed" style={{ color: C.text, letterSpacing: "-0.015em", lineHeight: 1.7 }}>
          UX Designer with nearly 2 years of experience designing enterprise platforms, AI driven experiences, dashboards, workflow systems, and mobile/web applications. Skilled in product thinking, information architecture, user flows, wireframing, prototyping, interaction design, design systems, and high fidelity UI design. Experienced in simplifying complex workflows into clear, usable, and scalable digital product experiences across enterprise, government, AI, HR, mobility, and operational platforms.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-24">
        <p className="font-semibold text-3xl mb-12" style={{ color: C.text, letterSpacing: "-0.02em" }}>Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <p className="font-semibold text-base mb-5" style={{ color: C.text }}>{g.title}</p>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="text-sm px-3.5 py-1.5 rounded-full" style={{ background: "rgba(0,229,255,0.06)", color: C.dim, border: `1px solid ${C.border}` }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p className="font-semibold text-base mb-5" style={{ color: C.text }}>Tools</p>
          <div className="flex gap-3">
            {tools.map((t) => (
              <span key={t} className="text-sm px-4 py-2 rounded-full font-medium" style={{ background: "linear-gradient(135deg, #00e5ff 0%, #00b3cc 100%)", color: "#fff", boxShadow: "0 0 12px rgba(0,229,255,0.2)" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-24">
        <p className="font-semibold text-3xl mb-12" style={{ color: C.text, letterSpacing: "-0.02em" }}>Experience</p>
        <div className="flex flex-col gap-5">
          {experience.map((e) => (
            <div key={e.company} className="rounded-[20px] p-8 relative overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(12px)", boxShadow: "0 0 30px rgba(0,229,255,0.04)" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "50%", background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)" }} />
              {e.additional && <p className="font-medium uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.14em", color: C.muted }}>Additional Experience</p>}
              <div className="flex gap-12 items-start">
                <div className="shrink-0 w-48">
                  <p className="font-semibold text-base mb-1" style={{ color: C.text }}>{e.company}</p>
                  <p className="text-sm mb-1" style={{ color: C.muted }}>{e.period}</p>
                  <p className="text-sm" style={{ color: C.muted }}>{e.location}</p>
                </div>
                <div className="flex-1 pl-12" style={{ borderLeft: `1px solid ${C.border}` }}>
                  <p className="font-medium text-lg mb-5" style={{ color: C.blueText }}>{e.role}</p>
                  <ul className="flex flex-col gap-3">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-base leading-relaxed" style={{ color: C.dim }}>
                        <span className="shrink-0 mt-1" style={{ color: C.blue }}>—</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education + Certification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
        <section>
          <p className="font-semibold text-3xl mb-8" style={{ color: C.text, letterSpacing: "-0.02em" }}>Education</p>
          <div className="rounded-[20px] p-8 relative overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(12px)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "60%", background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)" }} />
            <p className="font-medium text-base mb-1" style={{ color: C.text }}>Bachelor of Science in Visual Communication</p>
            <p className="text-sm mb-1" style={{ color: C.dim }}>Dr. G. R. Damodaran College of Science</p>
            <p className="text-sm" style={{ color: C.muted }}>Coimbatore, India</p>
          </div>
        </section>
        <section>
          <p className="font-semibold text-3xl mb-8" style={{ color: C.text, letterSpacing: "-0.02em" }}>Certification</p>
          <div className="rounded-[20px] p-8 relative overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(12px)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "60%", background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)" }} />
            <p className="font-medium text-base mb-1" style={{ color: C.text }}>UI/UX Certified Bootcamp</p>
            <p className="text-sm" style={{ color: C.dim }}>UpGrad, KnowledgeHut</p>
          </div>
        </section>
      </div>

      {/* Selected Projects */}
      <section className="mb-10">
        <p className="font-semibold text-3xl mb-8" style={{ color: C.text, letterSpacing: "-0.02em" }}>Selected Projects</p>
        <div className="flex gap-3 flex-wrap">
          {selectedProjects.map((p) => (
            <span key={p} className="text-sm px-5 py-2.5 rounded-full" style={{ border: `1px solid ${C.border}`, color: C.dim }}>{p}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
