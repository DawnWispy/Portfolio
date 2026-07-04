import { motion } from "motion/react";
import { FadeUp, MagneticButton } from "../components/ui/Animated";

const C = {
  bg: "#000000", card: "#0a0a0a", border: "#222222",
  text: "#ffffff", dim: "rgba(255,255,255,0.65)", muted: "rgba(255,255,255,0.4)",
  blue: "#00e5ff", blueText: "#00e5ff",
};

export default function ContactPage() {
  return (
    <div style={{ background: C.bg }} className="px-6 md:px-12 pb-24">
      {/* Header */}
      <FadeUp>
        <div className="mb-24 text-center pt-12">
          <p className="font-medium uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.14em", color: C.blueText }}>Contact</p>
          <h1 className="font-semibold mb-8" style={{ fontSize: "clamp(40px,7vw,80px)", letterSpacing: "-0.03em", lineHeight: 1.08, color: C.text }}>
            Let's build clearer<br />digital experiences.
          </h1>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ letterSpacing: "-0.01em", color: C.dim, lineHeight: 1.7 }}>
            I'm open to UX Designer roles, product design opportunities, and conversations around enterprise UX, AI experiences, workflow design, and scalable digital products.
          </p>
        </div>
      </FadeUp>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {/* Left — contact details */}
        <div className="flex flex-col gap-4">
          {[
            { label: "Email",    value: "vigneshgowtham.ux@gmail.com", href: "mailto:vigneshgowtham.ux@gmail.com" },
            { label: "Phone",    value: "+91 80725 99493",             href: "tel:+918072599493" },
            { label: "LinkedIn", value: "Vignesh Gowtham",             href: "https://www.linkedin.com/in/vignesh-gowtham-2881a6162/" },
            { label: "Preferred Locations", value: "Remote, Bengaluru, Chennai & Coimbatore", href: null },
          ].map((c) => (
            <FadeUp key={c.label}>
              <div className="rounded-[20px] p-7 relative overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(12px)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "50%", background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.25), transparent)" }} />
                <p className="font-medium uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "0.12em", color: C.muted }}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} target={c.label === "LinkedIn" ? "_blank" : undefined} rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined} className="font-medium text-lg transition-colors hover:opacity-80" style={{ letterSpacing: "-0.015em", color: c.label === "Email" ? C.blueText : C.text }}>{c.value}</a>
                ) : (
                  <p className="font-medium text-lg" style={{ letterSpacing: "-0.015em", color: C.text }}>{c.value}</p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Right — message card */}
        <FadeUp delay={0.1}>
          <div className="rounded-[20px] p-12 flex flex-col justify-between h-full relative overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(12px)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "50%", background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(0,229,255,0.06) 0%, transparent 60%)" }} />
            <div className="relative z-10">
              <p className="font-semibold text-2xl mb-6" style={{ letterSpacing: "-0.02em", lineHeight: 1.3, color: C.text }}>
                Have a role, project, or product problem in mind?
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ letterSpacing: "-0.01em", color: C.dim, lineHeight: 1.7 }}>
                I'd be happy to connect and talk about how design can make complex systems easier to understand and use.
              </p>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              <motion.a
                href="mailto:vigneshgowtham.ux@gmail.com"
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-4 rounded-full text-white"
                style={{ background: "linear-gradient(135deg, #00e5ff 0%, #00b3cc 100%)", boxShadow: "0 0 20px rgba(0,229,255,0.25)" }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,229,255,0.35)" } as any}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                Email Me
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 10L10 1M10 1H1M10 1V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
              <a href="/resume.pdf" download="Vignesh_Gowtham_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 font-medium text-base px-7 py-4 rounded-full transition-colors"
                style={{ color: C.text, border: `1px solid ${C.border}` }}>
                Download Resume
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
