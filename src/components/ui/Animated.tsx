import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router";

/* Viewport-triggered fade-up — use this around any section */
export function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* Staggered list wrapper — put StaggerItem inside */
export function StaggerList({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Hover-lift card — wraps a card with lift + shadow on hover */
export function HoverCard({
  children,
  className,
  style,
  scale = 1.01,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  scale?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: -5, scale, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Press button — subtle press effect */
export function PressButton({
  children,
  className,
  style,
  onClick,
  href,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
}) {
  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        style={style}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.16 }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      className={className}
      style={style}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.16 }}
    >
      {children}
    </motion.button>
  );
}

/* Magnetic Button — subtly follows mouse hover */
import { useRef, useState } from "react";

export function MagneticButton({
  children,
  className,
  style,
  onClick,
  href,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link to={href} className={className} style={style}>
          {Content}
        </Link>
      );
    }
    return (
      <a href={href} className={className} style={style}>
        {Content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className} style={style}>
      {Content}
    </button>
  );
}

/* Text Reveal - Animates text character by character or word by word */
export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.25em" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* Parallax Image - Moves slower than scroll speed to create depth */
import { useScroll, useTransform } from "motion/react";

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName
}: {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Creates a subtle vertical parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${containerClassName || ""}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.15 }}
        className={`w-full h-full object-cover ${className || ""}`}
      />
    </div>
  );
}
