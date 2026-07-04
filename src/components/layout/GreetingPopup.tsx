import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

export function GreetingPopup({ onTrigger }: { onTrigger?: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("vg_popup_seen");
    if (hasSeen === "true") return;

    setIsDismissed(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
      if (onTrigger) onTrigger();
    }, 15000);

    return () => clearTimeout(timer);
  }, [onTrigger]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("vg_popup_seen", "true");
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
          />

          <motion.div
            className="fixed md:absolute z-50 bottom-4 left-4 right-4 md:bottom-auto md:left-auto md:right-auto md:top-[60px] md:-ml-4 flex flex-col p-6 rounded-[24px] md:w-[320px]"
            style={{
              background: "#0a0a0a",
              border: "1px solid #222222",
              boxShadow: "0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(0,229,255,0.08)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div 
              className="hidden md:block absolute -top-[7px] left-6 w-3 h-3 rotate-45"
              style={{ background: "#0a0a0a", borderTop: "1px solid #222222", borderLeft: "1px solid #222222" }}
            />

            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-[rgba(255,255,255,0.4)] hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-5 pr-6">
              <h3 className="font-semibold text-white text-lg mb-2" style={{ letterSpacing: "-0.02em" }}>
                You made it 15 seconds in <span className="inline-block animate-bounce ml-1">👀</span>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                That counts as interest. Want the resume or a quick way to reach me?
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a 
                href="/resume.pdf"
                download="Vignesh_Gowtham_Resume.pdf"
                onClick={handleDismiss}
                className="w-full text-center py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #00e5ff 0%, #00b3cc 100%)", color: "#fff" }}
              >
                View Resume
              </a>
              <Link 
                to="/contact"
                onClick={handleDismiss}
                className="w-full text-center py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ border: "1px solid #222222", color: "rgba(255,255,255,0.85)" }}
              >
                Contact Me
              </Link>
            </div>

            <p className="text-center text-[11px] mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              Or keep scrolling, no pressure.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
