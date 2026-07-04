import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ProjectCardMockup } from "../components/ui/ProjectCardMockup";
import { FadeUp, StaggerList, StaggerItem, HoverCard } from "../components/ui/Animated";

const C = {
  bg: "#000000",
  text: "#ffffff",
  blue: "#00e5ff",
  blueText: "#00e5ff",
  dim: "rgba(255,255,255,0.65)",
  muted: "rgba(255,255,255,0.4)",
  border: "#222222",
};

const filters = ["All", "Enterprise UX", "AI UX", "Mobile UX", "Workflow Design", "Dashboard UX", "Design Systems"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t === active));

  return (
    <div style={{ background: C.bg }} className="min-h-screen relative pb-32">
      
      {/* ══════════════════════════════ NEW PREMIUM BANNER ══════════════════════════════ */}
      {/* Responsive padding controls the height dynamically */}
      <section className="relative overflow-hidden px-6 md:px-12 flex flex-col items-center justify-center text-center pt-24 pb-16 md:pt-24 md:pb-24">
        
        {/* Abstract Cinematic Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated Image Background */}
          <motion.div 
            className="absolute inset-0"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" 
              alt="Abstract Background" 
              className="w-full h-full object-cover opacity-25"
            />
          </motion.div>
          
          {/* Deep gradient overlay to ensure text is perfectly legible */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,8,22,0.7) 0%, rgba(5,8,22,1) 100%)" }} />
          
          {/* Deep center glow */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full mix-blend-screen"
            style={{ background: "radial-gradient(ellipse at top, rgba(0,229,255,0.15) 0%, transparent 70%)", filter: "blur(80px)" }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div
            className="mb-6 uppercase font-bold tracking-[0.25em] inline-flex items-center gap-3 px-5 py-2 rounded-full border"
            style={{ fontSize: "11px", color: C.blueText, background: "rgba(0,229,255,0.05)", borderColor: "rgba(0,229,255,0.2)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Selected Works
          </motion.div>

          <motion.h1
            className="font-bold mb-8"
            style={{
              fontSize: "clamp(44px, 6vw, 76px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
              textShadow: "0 0 40px rgba(0,229,255,0.3)"
            }}
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }} 
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Six case studies.<br />
            <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #fff, #00e5ff)", WebkitBackgroundClip: "text" }}>Six different systems</span><br />
            of complexity.
          </motion.h1>

          <motion.p
            className="leading-relaxed text-center"
            style={{ color: "rgba(237,240,250,0.7)", fontSize: "16px", letterSpacing: "-0.01em", maxWidth: 640 }}
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A collection of enterprise platforms, AI experiences, mobility products, tourism systems, and operational tools designed with structure, clarity, and usability in mind.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════ FILTER & CARDS GRID ══════════════════════════════ */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        
        {/* Glassy Filter Pills */}
        <FadeUp delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-2xl mx-auto">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                className="px-6 py-2.5 rounded-full font-medium transition-all duration-300"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.02em",
                  background: active === f ? "rgba(0,229,255,0.15)" : "rgba(10,10,10,0.4)",
                  color: active === f ? "#fff" : "rgba(237,240,250,0.5)",
                  border: active === f ? "1px solid rgba(0,229,255,0.4)" : "1px solid rgba(0,229,255,0.1)",
                  boxShadow: active === f ? "0 0 20px rgba(0,229,255,0.15)" : "none",
                  backdropFilter: "blur(10px)"
                }}
                whileHover={{ scale: 1.05, background: "rgba(0,229,255,0.1)", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </FadeUp>

        {/* 2-Column Premium Card Grid */}
        <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((p) => (
            <StaggerItem key={p.id}>
              <HoverCard style={{ borderRadius: 28, background: "rgba(10,10,10,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,229,255,0.12)" }}>
                <Link to={`/projects/${p.slug}`} className="block group flex flex-col h-full p-6">
                  
                  {/* Top Massive Image */}
                  <div className="overflow-hidden rounded-[20px] mb-8 relative w-full aspect-[16/10]" style={{ border: "1px solid rgba(0,229,255,0.15)", background: "#000000" }}>
                    <ProjectCardMockup project={p} aspectRatio="16/10" rounded="20px" />
                    
                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,8,22,0.9)] via-[rgba(5,8,22,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glowing View Button */}
                    <div className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm tracking-wider opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_20px_rgba(0,229,255,0.5)] flex items-center gap-2">
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="flex flex-col flex-1 px-2">
                    <p style={{ color: C.blueText, fontSize: "11px", letterSpacing: "0.15em" }} className="font-bold uppercase mb-3">{p.category}</p>
                    <h3 style={{ color: "#fff", fontSize: "28px", letterSpacing: "-0.02em" }} className="font-semibold mb-4 leading-tight group-hover:text-blue-200 transition-colors duration-300">{p.title}</h3>
                    <p style={{ color: "rgba(237,240,250,0.65)", fontSize: "15px", letterSpacing: "-0.01em" }} className="leading-relaxed mb-8 flex-1">{p.shortDesc}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tags.map((t) => (
                        <span key={t} style={{ background: "rgba(0,229,255,0.06)", color: "rgba(237,240,250,0.5)", fontSize: "12px", border: `1px solid rgba(0,229,255,0.15)` }} className="px-4 py-1.5 rounded-full font-medium tracking-wide transition-colors duration-300 group-hover:border-[#00e5ff]/30 group-hover:text-blue-200 group-hover:bg-blue-900/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </div>
  );
}
