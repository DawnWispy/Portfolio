import { useParams, Link, Navigate } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { caseStudies, caseStudies as csAll } from "../data/caseStudies";
import { FadeUp, StaggerList, StaggerItem, ParallaxImage } from "../components/ui/Animated";

/* ── palette ── */
const C = {
  bg: "#000000", card: "#0a0a0a", cardHi: "#111111",
  border: "#222222", text: "#ffffff",
  dim: "rgba(255,255,255,0.65)", muted: "rgba(255,255,255,0.4)",
  blue: "#00e5ff", blueText: "#00e5ff",
};

function Label({ children }: { children: string }) {
  return (
    <p className="font-bold uppercase mb-6" style={{ fontSize: "11px", letterSpacing: "0.18em", color: C.blueText }}>
      {children}
    </p>
  );
}

const BentoCard = ({ title, children, className = "", style = {} }: any) => (
  <div className={`rounded-3xl p-8 relative overflow-hidden flex flex-col ${className}`} style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(12px)", ...style }}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "60%", background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)" }} />
    <p className="font-bold uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "0.15em", color: C.muted }}>{title}</p>
    {children}
  </div>
);

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return <Navigate to="/projects" replace />;

  const others = csAll.filter((c) => c.slug !== slug).slice(0, 3);

  // For Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );

    const sections = ["overview", "problem", "strategy", "screens", "outcome"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug]);

  return (
    <div style={{ background: C.bg }} className="pb-24 font-sans text-white relative min-h-screen">
      {/* Background Enhancements */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
         backgroundImage: `linear-gradient(to right, ${C.border} 1px, transparent 1px), linear-gradient(to bottom, ${C.border} 1px, transparent 1px)`,
         backgroundSize: '60px 60px',
         opacity: 0.15,
         maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
         WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }} />
      <div className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-0 mix-blend-screen" style={{ background: `radial-gradient(circle, ${C.blue}15 0%, transparent 70%)`, filter: 'blur(80px)', transform: 'translate(-30%, -30%)' }} />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 mix-blend-screen" style={{ background: `radial-gradient(circle, ${cs.accentColor}10 0%, transparent 70%)`, filter: 'blur(80px)', transform: 'translate(20%, 20%)' }} />

      {/* ── HERO ── */}
      <div ref={heroRef} className="relative overflow-hidden z-10 pt-20 pb-16 md:pt-24 md:pb-24 flex flex-col items-center" style={{ background: cs.heroBg }}>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 px-6 md:px-10 lg:px-20 mx-auto w-full max-w-7xl flex flex-col items-center text-center mt-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="inline-block px-5 py-2 rounded-full mb-8 font-bold tracking-[0.2em] text-[10px] uppercase" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: cs.accentColor }}>
              {cs.category}
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="font-bold tracking-tighter mb-8 max-w-5xl" style={{ fontSize: "clamp(48px, 8vw, 110px)", lineHeight: 0.95 }}>
            {cs.title}
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl font-light max-w-3xl leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {cs.heroStory}
          </motion.p>
        </motion.div>
        
        
        {/* Glow & Gradient Bottom */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(5,8,22,0.5) 0%, #000000 100%)" }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* ── STICKY SIDEBAR ── */}
        <div className="hidden lg:block col-span-3 relative">
          <div className="sticky top-32 flex flex-col gap-6">
            <p className="font-bold uppercase tracking-widest text-[10px] mb-2" style={{ color: C.muted }}>Contents</p>
            {[
              { id: "overview", label: "01. Overview" },
              { id: "problem", label: "02. The Problem" },
              { id: "strategy", label: "03. Strategy & Decisions" },
              { id: "screens", label: "04. Final Experience" },
              { id: "outcome", label: "05. Outcome & Reflection" }
            ].map(link => {
              const isActive = activeSection === link.id;
              return (
              <a key={link.id} href={`#${link.id}`} 
                 className={`text-[13px] font-medium tracking-wider transition-all duration-300 hover:text-white flex items-center gap-3 py-1.5 ${isActive ? 'translate-x-2' : ''}`}
                 style={{ color: isActive ? '#fff' : C.dim }}>
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ background: cs.accentColor, boxShadow: `0 0 10px ${cs.accentColor}` }} />
                {link.label}
              </a>
            )})}
            
            <div className="mt-12 p-8 rounded-3xl relative overflow-hidden group" style={{ background: "rgba(0,229,255,0.03)", border: `1px solid ${C.border}` }}>
               <div className="absolute right-0 top-0 w-32 h-32 rounded-full opacity-10 blur-3xl transition-transform duration-700 group-hover:scale-150" style={{ background: cs.accentColor }} />
               <p className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{ color: C.blueText }}>Domain</p>
               <p className="text-[14px] leading-relaxed relative z-10" style={{ color: C.text }}>{cs.snapshot.domain}</p>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="col-span-1 lg:col-span-9 flex flex-col gap-32 pt-20">
          
          {/* OVERVIEW BENTO GRID */}
          <section id="overview" className="scroll-mt-32">
             <FadeUp><Label>Project Snapshot</Label></FadeUp>
             <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <BentoCard title="Role" className="col-span-1 md:col-span-5 hover:-translate-y-1 transition-transform">
                   <p className="text-2xl font-medium mt-auto" style={{ color: C.text, letterSpacing: "-0.02em" }}>{cs.snapshot.role}</p>
                </BentoCard>
                <BentoCard title="Platform" className="col-span-1 md:col-span-7 hover:-translate-y-1 transition-transform" style={{ background: `linear-gradient(135deg, ${C.card} 0%, rgba(0,229,255,0.05) 100%)` }}>
                   <p className="text-2xl font-medium mt-auto" style={{ color: C.text, letterSpacing: "-0.02em" }}>{cs.snapshot.platform}</p>
                </BentoCard>
                <BentoCard title="Core Contribution" className="col-span-1 md:col-span-12 relative overflow-hidden group">
                   <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[80px] transition-transform duration-700 group-hover:scale-125" style={{ background: cs.accentColor }} />
                   <p className="text-[16px] md:text-lg leading-relaxed relative z-10 font-light" style={{ color: C.text }}>{cs.snapshot.contribution}</p>
                </BentoCard>
                <BentoCard title="Team" className="col-span-1 md:col-span-12">
                   <p className="text-[15px] leading-relaxed font-medium" style={{ color: C.dim }}>{cs.snapshot.team}</p>
                </BentoCard>
             </div>
          </section>

          {/* EDITORIAL QUOTE */}
          <FadeUp>
             <div className="py-16 my-8 border-y relative overflow-hidden" style={{ borderColor: C.border }}>
                <div className="absolute left-0 top-0 w-[200px] h-full opacity-10 blur-[100px] pointer-events-none" style={{ background: C.blue }} />
                <h3 className="font-bold tracking-tight text-center max-w-4xl mx-auto" style={{ fontSize: "clamp(26px, 4vw, 46px)", lineHeight: 1.25, color: C.text }}>
                   "{cs.productInsight}"
                </h3>
             </div>
          </FadeUp>

          {/* THE PROBLEM */}
          <section id="problem" className="scroll-mt-32">
             <FadeUp><Label>The Core Problem</Label></FadeUp>
             <h2 className="font-bold mb-12" style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
                <span style={{ color: C.dim }}>The Challenge: </span><br/>
                <span style={{ color: C.text }}>{cs.coreProblemHeading}</span>
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-[17px] leading-relaxed" style={{ color: C.dim }}>{cs.businessContext}</p>
                <p className="text-[17px] leading-relaxed" style={{ color: C.text }}>{cs.coreProblem}</p>
             </div>
          </section>

          {/* UX CHALLENGES GRID */}
          <section>
            <FadeUp><Label>Key UX Challenges</Label></FadeUp>
            <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cs.uxChallenges.map((c, i) => (
                <StaggerItem key={i}>
                  <div className="h-full rounded-[32px] p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
                    style={{ background: C.card, border: `1px solid ${C.border}` }}>
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] blur-2xl transition-opacity duration-300 group-hover:opacity-10" style={{ background: cs.accentColor }} />
                    <div className="flex items-center gap-4 border-b pb-6 relative z-10" style={{ borderColor: C.border }}>
                       <span className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-[15px]" style={{ background: "rgba(0,229,255,0.1)", color: C.blueText }}>{String(i + 1).padStart(2, '0')}</span>
                       <h4 className="font-bold text-xl leading-tight" style={{ color: C.text, letterSpacing: "-0.01em" }}>{c.title}</h4>
                    </div>
                    <div className="flex flex-col gap-3 relative z-10">
                       <p className="text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: C.muted }}>Challenge</p>
                       <p className="text-[15px] leading-relaxed font-light" style={{ color: C.dim }}>{c.difficulty}</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-auto pt-8 relative z-10">
                       <p className="text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: cs.accentColor }}>UX Solution</p>
                       <p className="text-[15px] leading-relaxed font-medium" style={{ color: C.text }}>{c.response}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </section>

          {/* STRATEGY & DECISIONS */}
          <section id="strategy" className="scroll-mt-32">
            <FadeUp><Label>Strategy & Key Decisions</Label></FadeUp>
            <div className="flex flex-col gap-0 relative">
               {/* Global Timeline Line */}
               <div className="absolute left-[24px] md:left-[40px] top-[24px] bottom-[100px] w-px" style={{ background: `linear-gradient(to bottom, ${C.border}, transparent)` }} />
               
               {cs.decisions.map((d, i) => (
                 <FadeUp key={i}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative pl-16 md:pl-0 pt-8 pb-16">
                       
                       {/* Node */}
                       <div className="absolute left-[19px] md:left-[35px] top-[40px] w-3 h-3 rounded-full" style={{ background: C.blue, boxShadow: `0 0 16px ${C.blue}` }} />
                       
                       <div className="md:col-span-3 md:text-right md:pr-12 z-10 relative pt-1 hidden md:block">
                          <p className="text-[64px] font-bold tracking-tighter leading-none" style={{ color: "rgba(255,255,255,0.05)" }}>{d.num}</p>
                       </div>
                       
                       <div className="md:col-span-9 z-10 relative">
                          <h3 className="text-2xl md:text-[32px] font-bold mb-8 tracking-tight leading-tight" style={{ color: C.text }}>{d.title}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 rounded-[32px]" style={{ background: C.cardHi, border: `1px solid ${C.border}` }}>
                             <div>
                                <p className="text-[10px] uppercase tracking-[0.15em] font-bold mb-4" style={{ color: C.muted }}>What Changed</p>
                                <p className="text-[15px] leading-relaxed font-light" style={{ color: C.dim }}>{d.what}</p>
                             </div>
                             <div>
                                <p className="text-[10px] uppercase tracking-[0.15em] font-bold mb-4" style={{ color: C.blueText }}>Why It Mattered</p>
                                <p className="text-[15px] leading-relaxed font-medium" style={{ color: C.text }}>{d.why}</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </FadeUp>
               ))}
            </div>
          </section>

          {/* SCREENS SHOWCASE */}
          <section id="screens" className="py-12 scroll-mt-32 relative z-10">
            <FadeUp>
              <Label>Final Experience</Label>
              <h2 className="font-bold mb-14" style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-0.03em", color: C.text }}>
                Bringing it all together.
              </h2>
            </FadeUp>
            
            {cs.screens.some(s => s.image) ? (
              <div className={
                cs.mockupType === "browser" 
                  ? "flex flex-col gap-12 mt-12"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-12" 
              }>
                {cs.screens.filter(s => s.image).map((s, i) => (
                  <FadeUp key={i} className={s.layout === "web" ? "col-span-full" : ""}>
                    <div className="shadow-2xl relative group rounded-none" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                      <img src={s.image} alt={s.name} className="w-full h-auto block" />
                    </div>
                  </FadeUp>
                ))}
              </div>
            ) : (
              <div className="rounded-[40px] overflow-hidden shadow-2xl relative" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <div className="p-10 md:p-20 lg:p-32 text-center flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
                  <div className="w-16 h-1.5 rounded-full mb-8 opacity-50" style={{ background: cs.accentColor }} />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.text }}>Product screens coming soon</h3>
                  <p className="text-lg font-light max-w-md" style={{ color: C.dim }}>The high-fidelity mockups and interactive prototypes are currently being prepared for this case study.</p>
                </div>
              </div>
            )}

            <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              {cs.finalModules.map((m, i) => (
                <StaggerItem key={i}>
                  <div className="p-10 rounded-[32px] h-full flex flex-col gap-4 group transition-transform hover:-translate-y-2" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                    <div className="flex items-center gap-4 border-b pb-5" style={{ borderColor: C.border }}>
                       <div className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-150" style={{ background: cs.accentColor, boxShadow: `0 0 12px ${cs.accentColor}` }} />
                       <h4 className="font-bold text-[19px] tracking-tight">{m.name}</h4>
                    </div>
                    <p className="text-[15px] leading-relaxed pt-2 font-light" style={{ color: C.dim }}>{m.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </section>

          {/* OUTCOME & REFLECTION */}
          <section id="outcome" className="border-t pt-20 scroll-mt-32" style={{ borderColor: C.border }}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <FadeUp>
                   <Label>The Outcome</Label>
                   <p className="text-[17px] leading-relaxed font-light" style={{ color: C.text }}>{cs.outcome}</p>
                </FadeUp>
                <FadeUp>
                   <Label>Reflection</Label>
                   <div className="p-10 rounded-[32px] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.card} 0%, rgba(0,229,255,0.05) 100%)`, border: `1px solid ${C.border}` }}>
                      <div className="absolute top-4 left-6 text-[80px] font-serif leading-none opacity-20" style={{ color: C.blueText }}>"</div>
                      <p className="text-[16px] leading-relaxed italic relative z-10 font-light mt-6" style={{ color: C.text }}>{cs.reflection}</p>
                   </div>
                </FadeUp>
             </div>
          </section>

          {/* KEEP EXPLORING */}
          <section className="pt-32 border-t" style={{ borderColor: C.border }}>
            <FadeUp>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <Label>Keep Exploring</Label>
                  <h2 className="font-bold text-4xl md:text-5xl tracking-tight" style={{ color: C.text }}>More projects</h2>
                </div>
                <Link to="/projects" className="hidden md:flex items-center gap-3 font-bold text-[13px] uppercase tracking-widest transition-all hover:gap-4 hover:opacity-80" style={{ color: C.blueText }}>
                  View all <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </FadeUp>
            
            <StaggerList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {others.map((c) => (
                <StaggerItem key={c.slug}>
                  <Link to={`/projects/${c.slug}`} className="block group">
                     <motion.div className="rounded-[32px] overflow-hidden flex flex-col relative transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                       style={{ border: `1px solid ${C.border}`, background: C.card }}>
                       <div className="h-48 relative" style={{ background: c.heroBg }}>
                         <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-10" />
                         <div className="absolute inset-0 flex items-end p-8">
                           <p className="font-bold text-white text-[20px] tracking-tight leading-tight">{c.title}</p>
                         </div>
                       </div>
                       <div className="p-8">
                         <p className="font-bold uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "0.2em", color: c.accentColor }}>{c.tags[0]}</p>
                         <p className="leading-relaxed mb-8 font-light" style={{ fontSize: "14px", color: C.dim, lineHeight: 1.6 }}>{c.heroStory.slice(0, 85)}…</p>
                         <span className="font-bold flex items-center gap-2 transition-all duration-300 group-hover:gap-3 group-hover:text-white" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: C.blueText }}>
                           Read Case Study <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                         </span>
                       </div>
                     </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerList>
          </section>

        </div>
      </div>
    </div>
  );
}
