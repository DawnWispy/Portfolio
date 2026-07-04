import { Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ProjectCardMockup } from "../components/ui/ProjectCardMockup";
import { FadeUp, StaggerList, StaggerItem, HoverCard, MagneticButton, TextReveal } from "../components/ui/Animated";

/* ── palette ── */
const C = {
  bg: "#000000",
  text: "#ffffff",
  blue: "#00e5ff",
  blueText: "#00e5ff",
  dim: "rgba(255,255,255,0.65)",
  muted: "rgba(255,255,255,0.4)",
};

const skills = ["Enterprise UX","AI UX","Workflow Design","Dashboard UX","Mobile UX","Design Systems","Conversational UX","Information Architecture","Product Thinking","User Flows"];

const expertise = [
  { title: "Enterprise UX",          body: "Dashboards, role-based workflows, enterprise forms, and data-heavy interfaces for complex business systems.", num: "01" },
  { title: "AI & Conversational UX", body: "Chat, voice, and AI agent experiences that help users complete complex tasks with clarity and confidence.", num: "02" },
  { title: "Workflow Design",         body: "Multi-step processes simplified into clear journeys, status flows, and decision-based product experiences.", num: "03" },
  { title: "Design Systems",         body: "Reusable components, layout patterns, and handoff-ready systems that help products scale consistently.", num: "04" },
];

const principles = [
  { title: "Clarity before decoration.", body: "Workflows must be understandable before screens are polished. A good interface tells users what matters first." },
  { title: "Design for decisions.",      body: "Every product should help users know what happened, what needs attention, and what action comes next." },
  { title: "Systems over screens.",      body: "Beyond individual pages — roles, states, flows, and patterns that work together as one product system." },
];

const faqs = [
  { q: "What kind of products do you design?",   a: "Enterprise platforms, AI experiences, dashboards, mobile apps, workflow systems, and operational tools." },
  { q: "What is your strongest UX focus?",        a: "Simplifying complex workflows into clear, structured, and usable product experiences." },
  { q: "Do you work on UI as well?",              a: "Yes — UX, wireframes, prototypes, high-fidelity UI, design systems, and developer handoff." },
  { q: "Are you open to opportunities?",          a: "Yes. I'm open to UX Designer roles on meaningful digital products and complex product problems." },
];

/* ── Glow Card wrapper ── */
function GlowCard({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={`relative rounded-[24px] overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(0,229,255,0.15) 0%, rgba(0,229,255,0.45) 100%)",
        border: "1px solid rgba(120,160,255,0.3)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 0 20px rgba(0,229,255,0.2)",
        ...style,
      }}
      whileHover={{
        background: "linear-gradient(180deg, rgba(0,229,255,0.2) 0%, rgba(0,229,255,0.55) 100%)",
        boxShadow: "0 10px 50px rgba(0,229,255,0.2), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 0 30px rgba(0,229,255,0.3)",
        borderColor: "rgba(120,160,255,0.5)",
        y: -4,
      } as any}
      transition={{ duration: 0.3 }}
    >
      {/* Top inner glow highlight */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }} />
      {/* Subtle corner glows */}
      <div className="absolute top-[-20px] left-[-20px] w-20 h-20 bg-blue-400 rounded-full blur-[30px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 bg-blue-500 rounded-full blur-[30px] opacity-30 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

/* ── section label ── */
function Label({ children }: { children: string }) {
  return (
    <p className="font-medium uppercase mb-5" style={{ fontSize: "10px", letterSpacing: "0.14em", color: C.blueText }}>
      {children}
    </p>
  );
}

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <div style={{ background: C.bg }}>

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative overflow-hidden flex flex-col justify-center items-center" style={{ minHeight: "100vh" }}>
        
        {/* ── Vertical Glowing Pillars Background (Animated) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex" style={{ opacity: 0.85 }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex-1 relative border-r border-l border-[rgba(0,229,255,0.03)]">
              {/* Pulsing inner pillar glow */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, rgba(0,229,255,${0.03 + (i % 3) * 0.02}) 50%, rgba(0,229,255,${0.1 + (i % 2) * 0.05}) 100%)`,
                  boxShadow: "inset 0 0 20px rgba(0,229,255,0.05)"
                }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4 + (i % 3) * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
            </div>
          ))}
        </div>

        {/* ── Floating Data Orbs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-blue-300"
              style={{
                width: 2 + (i % 3) * 2,
                height: 2 + (i % 3) * 2,
                left: `${5 + (i * 7)}%`, // Evenly spread horizontally
                bottom: "-5%",
                boxShadow: "0 0 12px rgba(0,229,255,0.8)"
              }}
              animate={{
                y: ["0vh", "-110vh"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 12 + (i % 5) * 4,
                repeat: Infinity,
                ease: "linear",
                delay: (i % 4) * 2
              }}
            />
          ))}
        </div>

        {/* ── Central Depth Glow ── */}
        <div className="absolute pointer-events-none inset-0 flex justify-center items-center">
          <div style={{
            width: "120%",
            height: "60%",
            background: "radial-gradient(ellipse at center, rgba(0,229,255,0.15) 0%, transparent 60%)",
            filter: "blur(60px)"
          }} />
        </div>
        
        {/* ── Bottom Intense Glow ── */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none" style={{
          background: "linear-gradient(to top, rgba(0,229,255,0.25) 0%, transparent 100%)"
        }} />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-5xl mx-auto w-full">
          
          {/* Subtitle / Eyebrow */}
          <motion.div
            className="mb-6 uppercase font-medium tracking-[0.2em]"
            style={{ fontSize: "12px", color: "#00e5ff", textShadow: "0 0 10px rgba(0,229,255,0.5)" }}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }} 
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            UX Design & Product Strategy
          </motion.div>

          {/* Headline (Cyber/Tech styling with cinematic blur reveal) */}
          <motion.div
            className="mb-8 font-bold text-center flex flex-col items-center"
            style={{
              fontSize: "clamp(36px, 6vw, 76px)",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              color: "#ffffff",
              textTransform: "uppercase",
              textShadow: "0 4px 20px rgba(0,229,255,0.4)"
            }}
          >
            <TextReveal text="DESIGNING SIMPLE" delay={0.2} />
            <div style={{ color: "#e2e8f0" }}>
              <TextReveal text="EXPERIENCES FOR" delay={0.3} />
            </div>
            <TextReveal text="COMPLEX SYSTEMS" delay={0.4} />
          </motion.div>

          {/* Description */}
          <motion.p
            className="mb-12"
            style={{ fontSize: "15px", letterSpacing: "0.01em", color: "rgba(237,240,250,0.7)", lineHeight: 1.6, maxWidth: 500 }}
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }} 
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            End-to-end product design and clear workflows.
            <br />
            Simplifying enterprise platforms and AI experiences.
          </motion.p>

          {/* CTA Button (pill with glowing lines) */}
          <motion.div
            className="relative flex items-center justify-center w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.35 }}
          >
            {/* Horizontal accent line matching reference */}
            <div className="absolute w-full flex items-center justify-between pointer-events-none px-4">
              <div className="w-12 h-px bg-blue-400 opacity-40 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              <div className="w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              <div className="flex-1" />
              <div className="w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              <div className="w-12 h-px bg-blue-400 opacity-40 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
            </div>

            <MagneticButton href="/contact"
              className="relative inline-flex items-center justify-center font-medium px-8 py-3 rounded-full overflow-hidden"
              style={{
                fontSize: "13px",
                letterSpacing: "0.02em",
                color: "#e2e8f0",
                background: "rgba(0,229,255,0.15)",
                border: "1px solid rgba(0,229,255,0.3)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 20px rgba(0,229,255,0.15), inset 0 0 15px rgba(0,229,255,0.1)",
              }}
            >
              Let's connect today
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="overflow-hidden" style={{ borderTop: "1px solid rgba(0,229,255,0.08)", borderBottom: "1px solid rgba(0,229,255,0.08)", padding: "12px 0" }}>
        <div className="flex gap-10 whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="font-medium shrink-0" style={{ fontSize: "12px", letterSpacing: "0.06em", color: C.muted, textTransform: "uppercase" as const }}>{s}</span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* ── Stats row ── */}
      <section className="px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { num: "~2 yrs", label: "Experience", sub: "Enterprise & AI product design" },
            { num: "6", label: "Case Studies", sub: "End-to-end product design work" },
            { num: "4+", label: "Domains", sub: "Enterprise, AI, Mobility, Tourism" },
          ].map((s) => (
            <GlowCard key={s.label} className="p-8">
              <p className="font-medium uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "0.12em", color: C.blueText }}>{s.label}</p>
              <p className="font-bold mb-2" style={{ fontSize: "42px", letterSpacing: "-0.03em", lineHeight: 1, color: C.text }}>{s.num}</p>
              <p style={{ fontSize: "13px", color: C.dim, letterSpacing: "-0.01em" }}>
                {s.sub}
              </p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="px-6 md:px-12 pb-24">
        <FadeUp>
          <div className="flex items-end justify-between mb-12">
            <div>
              <Label>Selected Work</Label>
              <p className="font-semibold" style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.025em", lineHeight: 1.15, color: C.text }}>
                Six case studies.
              </p>
            </div>
            <Link to="/projects" className="flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ fontSize: "14px", letterSpacing: "-0.01em", color: C.blueText }}>
              All Projects
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </FadeUp>

        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <StaggerItem key={p.id}>
              <HoverCard style={{ borderRadius: 20 }}>
                <Link to={`/projects/${p.slug}`} className="block group h-full flex flex-col">
                  <div className="overflow-hidden rounded-[20px] mb-4" style={{ border: "1px solid rgba(0,229,255,0.10)" }}>
                    <ProjectCardMockup project={p} />
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <p className="font-semibold mb-1 leading-snug" style={{ fontSize: "16px", letterSpacing: "-0.015em", color: C.text }}>{p.title}</p>
                      <p style={{ fontSize: "13px", letterSpacing: "-0.01em", color: C.muted }}>{p.category}</p>
                    </div>
                    <span className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium" style={{ fontSize: "12px", color: C.blueText }}>View Project →</span>
                  </div>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* ── Expertise ── */}
      <section className="px-6 md:px-12 pb-24">
        <FadeUp>
          <div className="text-center mb-14">
            <Label>Expertise</Label>
            <p className="font-semibold" style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.025em", color: C.text }}>What I focus on</p>
            <p className="mt-4 mx-auto" style={{ fontSize: "15px", color: C.dim, maxWidth: 480, letterSpacing: "-0.01em", lineHeight: 1.6 }}>
              Measurable design skills across enterprise, AI, workflow, and product systems.
            </p>
          </div>
        </FadeUp>
        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertise.map((e) => (
            <StaggerItem key={e.title}>
              <GlowCard className="p-7 h-full flex flex-col">
                <p className="font-medium uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.12em", color: C.blueText }}>{e.num}</p>
                <p className="font-semibold mb-3" style={{ fontSize: "18px", letterSpacing: "-0.015em", color: C.text }}>{e.title}</p>
                <p className="leading-relaxed flex-1" style={{ fontSize: "14px", letterSpacing: "-0.01em", color: C.dim, lineHeight: 1.6 }}>{e.body}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* ── Statement banner (Scrolling Strip) ── */}
      <FadeUp>
        <div className="relative overflow-hidden" style={{ borderTop: "1px solid rgba(0,229,255,0.08)", borderBottom: "1px solid rgba(0,229,255,0.08)", padding: "56px 0", background: "rgba(10,16,42,0.3)" }}>
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }} />
          
          <div className="flex gap-16 whitespace-nowrap" style={{ animation: "marquee 20s linear infinite" }}>
            {[...Array(6)].map((_, i) => (
              <span key={i} className="relative z-10 font-semibold" style={{
                fontSize: "clamp(28px,4vw,48px)",
                letterSpacing: "-0.025em",
                color: C.text,
                opacity: 0.9,
              }}>
                Designing clarity for complex digital systems.
                <span style={{ color: C.blue, margin: "0 2rem", opacity: 0.5 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── Experience (Parallax / Flowing) ── */}
      <section className="px-6 md:px-12 py-32 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] opacity-[0.03] pointer-events-none" />

        <FadeUp>
          <div className="text-center mb-32">
            <Label>Approach</Label>
            <p className="font-semibold" style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-0.025em", color: C.text }}>How I think</p>
          </div>
        </FadeUp>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Glowing center line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,229,255,0.4), transparent)" }} />
          
          {principles.map((p, i) => {
            const isEven = i % 2 !== 0; // 0=left, 1=right, 2=left
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row items-center mb-32 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Glowing Node on Line */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center z-20">
                    <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(0,229,255,1)]" />
                    <div className="absolute inset-0 rounded-full border border-[#00e5ff]/30 animate-ping" style={{ animationDuration: '3s' }} />
                  </div>

                  {/* Content Area (No Cards) */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-24' : 'md:justify-end md:pr-24'} relative z-10`}>
                    <div className="relative max-w-sm">
                      {/* Huge Watermark Number */}
                      <span className="absolute -top-16 -left-12 md:-left-20 font-bold select-none pointer-events-none" 
                            style={{ fontSize: "180px", color: "rgba(0,229,255,0.04)", lineHeight: 1, letterSpacing: "-0.05em", zIndex: -1 }}>
                        0{i+1}
                      </span>
                      
                      <div className="pt-8 relative z-10">
                        <div className="flex items-center gap-4 mb-5">
                          <span className="font-bold text-sm tracking-widest text-blue-400">0{i+1}</span>
                          <div className="h-px w-12 bg-blue-400/30" />
                        </div>
                        <h3 className="font-semibold mb-4" style={{ fontSize: "28px", letterSpacing: "-0.015em", color: C.text, lineHeight: 1.2 }}>{p.title}</h3>
                        <p className="leading-relaxed" style={{ fontSize: "16px", letterSpacing: "-0.01em", color: C.dim, lineHeight: 1.7 }}>{p.body}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space block to force alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ── FAQ / Accordion style approach ── */}
      <section className="px-6 md:px-12 pb-24">
        <FadeUp>
          <div className="flex items-end justify-between mb-10">
            <div>
              <Label>Experience</Label>
              <p className="font-semibold" style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.025em", color: C.text }}>Where I've worked</p>
            </div>
            <Link to="/resume" className="flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ fontSize: "13px", letterSpacing: "-0.01em", color: C.blueText }}>
              View Resume <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </FadeUp>
        <StaggerList>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { company: "Exalogic Consulting", role: "Associate UX Consultant", period: "Dec 2024 – Present", desc: "Designing enterprise products, dashboards, workflows, AI experiences, and scalable digital interfaces for business and government focused platforms." },
              { company: "Digital Dose", role: "UI/UX Design Intern", period: "Aug – Nov 2024", desc: "User research, wireframes, prototypes, visual design explorations, and responsive interface design." },
            ].map((e, i) => (
              <StaggerItem key={e.company}>
                <GlowCard className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold" style={{ fontSize: "18px", letterSpacing: "-0.015em", color: C.text }}>{e.company}</p>
                    <span style={{ fontSize: "12px", color: C.muted }}>{e.period}</span>
                  </div>
                  <p className="mb-4" style={{ fontSize: "14px", letterSpacing: "-0.01em", color: C.blueText }}>{e.role}</p>
                  <p className="leading-relaxed" style={{ fontSize: "14px", letterSpacing: "-0.01em", color: C.dim, lineHeight: 1.6 }}>{e.desc}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerList>
      </section>

      {/* ── Work ── */}
      <section className="px-6 md:px-12 pb-24">
        <FadeUp>
          <Label>FAQ</Label>
          <p className="font-semibold mb-10" style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.025em", color: C.text }}>Asked often, answered simply.</p>
        </FadeUp>
        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(0,229,255,0.08)" }}>
          {faqs.map((f) => (
            <details key={f.q} className="group" style={{ borderBottom: "1px solid rgba(0,229,255,0.08)" }}>
              <summary className="flex items-center justify-between cursor-pointer list-none py-6 gap-4">
                <span className="font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.015em", color: C.text }}>{f.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-45 shrink-0 text-xl" style={{ color: C.blue }}>+</span>
              </summary>
              <p className="leading-relaxed pb-6" style={{ fontSize: "14px", letterSpacing: "-0.01em", maxWidth: 580, color: C.dim, lineHeight: 1.65 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative mx-6 md:mx-12 mb-20 rounded-[24px] py-16 px-6 md:px-10 text-center overflow-hidden border border-[rgba(0,229,255,0.2)] group">
        
        {/* Animated Background Image */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        
        {/* Deep gradient overlay for text legibility */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(5,8,22,0.95), rgba(5,8,22,0.6))" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,229,255,0.15)", mixBlendMode: "overlay" }} />

        <div className="relative z-10 flex flex-col items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(0,229,255,0.15)]" style={{ border: "1px solid rgba(0,229,255,0.25)", background: "rgba(10,10,10,0.6)", backdropFilter: "blur(10px)" }}>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.1em] text-blue-300 uppercase">Available for work</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-bold mb-4" style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#fff", textShadow: "0 0 40px rgba(0,229,255,0.3)" }}>
              Let's build clearer<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #fff, #00e5ff)" }}>digital experiences.</span>
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="leading-relaxed mb-8 mx-auto" style={{ fontSize: "15px", letterSpacing: "-0.01em", maxWidth: 460, color: "rgba(237,240,250,0.7)" }}>
              Open to UX design opportunities, product collaborations, and conversations about better user experiences.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <motion.a
              href="mailto:vigneshgowtham.ux@gmail.com"
              className="relative inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 group/btn hover:scale-105"
              style={{
                fontSize: "14px",
                letterSpacing: "0.01em",
                background: "linear-gradient(135deg, #00e5ff 0%, #00b3cc 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                boxShadow: "0 0 24px rgba(0,229,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              vigneshgowtham.ux@gmail.com
              <motion.svg 
                width="14" height="14" viewBox="0 0 24 24" fill="none" 
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
