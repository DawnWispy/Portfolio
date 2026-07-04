import { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { GreetingPopup } from "./GreetingPopup";
import { FadeUp } from "../ui/Animated";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About",    to: "/about" },

  { label: "Contact",  to: "/contact" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

export function Layout() {
  const location = useLocation();
  const [wiggle, setWiggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen" style={{ background: "#000000", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <ScrollToTop />

      {/* ── Glowing Fixed Nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-10"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        {/* Left: Profile Pic & Name */}
        <div className="flex-1 flex justify-start relative">
          <GreetingPopup onTrigger={() => setWiggle(true)} />
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="shrink-0 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105"
              style={{ width: 40, height: 40, background: "rgba(0,229,255,0.12)", border: "1px solid rgba(0,229,255,0.25)", boxShadow: "0 0 20px rgba(0,229,255,0.15)" }}
              animate={wiggle ? { rotate: [-10, 10, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onAnimationComplete={() => setWiggle(false)}
            >
              <span style={{ fontSize: "14px", letterSpacing: "-0.01em", color: "#00e5ff", fontWeight: 700 }}>VG</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-semibold hidden sm:inline" style={{ fontSize: "15px", color: "#edf0fa", letterSpacing: "-0.01em" }}>Vignesh Gowtham</span>
              <span className="hidden sm:inline" style={{ fontSize: "12px", color: "rgba(237,240,250,0.45)", letterSpacing: "-0.01em" }}>UX Designer</span>
            </div>
          </Link>
        </div>

        {/* Center: Nav pill with glow (Desktop) */}
        <div className="hidden md:flex shrink-0 justify-center">
          <nav
            className="flex items-center gap-1 rounded-full px-1 md:px-2 overflow-x-auto no-scrollbar"
            style={{
              height: 48,
              background: "rgba(10,10,10,0.75)",
              border: "1px solid rgba(0,229,255,0.15)",
              backdropFilter: "blur(20px) saturate(1.4)",
              boxShadow: "0 0 30px rgba(0,229,255,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {navLinks.map((link) => (
              <motion.div key={link.to} whileTap={{ scale: 0.95 }}>
                <Link
                  to={link.to}
                  className="h-[36px] flex items-center px-3 md:px-5 rounded-full whitespace-nowrap transition-all duration-200"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "-0.01em",
                    background: isActive(link.to) ? "rgba(0,229,255,0.20)" : "transparent",
                    color: isActive(link.to) ? "#00e5ff" : "rgba(237,240,250,0.45)",
                    fontWeight: isActive(link.to) ? 600 : 400,
                    border: isActive(link.to) ? "1px solid rgba(0,229,255,0.25)" : "1px solid transparent",
                    boxShadow: isActive(link.to) ? "0 0 12px rgba(0,229,255,0.15)" : "none",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden shrink-0">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle mobile menu"
            title="Toggle mobile menu"
            className="p-2 text-white relative z-50 flex flex-col gap-[5px] justify-center items-center w-10 h-10 rounded-full"
            style={{ background: "rgba(10,10,10,0.75)", border: "1px solid rgba(0,229,255,0.15)", backdropFilter: "blur(20px)" }}
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Right: Email (Hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-end">
          <motion.a
            href="mailto:vigneshgowtham.ux@gmail.com"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "rgba(237,240,250,0.65)", letterSpacing: "-0.01em" }}
            whileHover={{ color: "#00e5ff" } as any}
          >
            vigneshgowtham.ux@gmail.com
          </motion.a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xl font-medium tracking-wide transition-colors"
                style={{ color: isActive(link.to) ? "#00e5ff" : "white" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:vigneshgowtham.ux@gmail.com"
              className="text-sm font-medium mt-8 transition-colors duration-200"
              style={{ color: "rgba(237,240,250,0.5)" }}
            >
              vigneshgowtham.ux@gmail.com
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page */}
      <main style={{ paddingTop: "80px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Creative Footer ── */}
      <footer className="relative mt-10">
        {/* Glowing Top Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4" style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent)" }} />
        
        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none" style={{ background: "radial-gradient(ellipse at bottom, rgba(0,229,255,0.05) 0%, transparent 60%)" }} />

        <div className="px-6 md:px-12 pt-16 pb-10 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-12">
            
            {/* Left: Branding */}
            <div className="flex items-center gap-4 group">
              <div
                className="shrink-0 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] relative"
                style={{ width: 44, height: 44, background: "rgba(10,10,10,0.8)", border: "1px solid rgba(0,229,255,0.3)" }}
              >
                <div className="absolute inset-0 border border-[#00e5ff] rounded-full animate-ping opacity-20" />
                <span style={{ fontSize: "14px", letterSpacing: "-0.01em", color: "#00e5ff", fontWeight: 700 }}>VG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white transition-colors group-hover:text-[#00e5ff]" style={{ fontSize: "16px" }}>Vignesh Gowtham</span>
                <span style={{ fontSize: "12px", color: "rgba(237,240,250,0.4)" }}>UX Designer & Strategist</span>
              </div>
            </div>

            {/* Center: Glassy Nav Pills */}
            <div className="flex flex-wrap justify-center items-center gap-1 p-1 rounded-[24px] md:rounded-full" style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.08)" }}>
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-6 py-2 rounded-full transition-all duration-300 font-medium hover:text-[#00e5ff] hover:bg-[rgba(0,229,255,0.1)]"
                  style={{ fontSize: "13px", color: "rgba(237,240,250,0.5)", letterSpacing: "-0.01em" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right: Socials */}
            <div className="flex gap-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/vignesh-gowtham-2881a6162/", target: "_blank", rel: "noopener noreferrer" },
                { label: "Email", href: "mailto:vigneshgowtham.ux@gmail.com" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.target}
                  rel={s.rel}
                  className="flex items-center justify-center px-5 py-2.5 rounded-full border transition-all"
                  style={{ fontSize: "12px", color: "rgba(237,240,250,0.6)", borderColor: "rgba(0,229,255,0.15)", background: "rgba(10,10,10,0.5)" }}
                  whileHover={{ y: -2, color: "#fff", borderColor: "rgba(0,229,255,0.4)", boxShadow: "0 4px 12px rgba(0,229,255,0.15)" } as any}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 text-center md:text-left" style={{ borderTop: "1px solid rgba(0,229,255,0.06)" }}>
            <p style={{ fontSize: "12px", color: "rgba(237,240,250,0.25)" }}>
              © 2026 Vignesh Gowtham. Designed with clarity and intention.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span style={{ fontSize: "12px", color: "rgba(237,240,250,0.3)" }}>System fully operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
