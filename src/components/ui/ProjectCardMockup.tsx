import type { Project } from "../../data/projects";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

const stockImages: Record<string, string> = {
  "internal-audit-platform": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  "enterprise-workforce-platform": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  "conversational-ai-agent": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
  "velocity-rfp": "/Images/velocity-rfp-cover.png",
  "smart-park-experience": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80",
  "drivehub": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
};

export function ProjectCardMockup({
  project,
  aspectRatio = "4/3",
  rounded = "20px",
}: {
  project: Project;
  aspectRatio?: string;
  rounded?: string;
}) {
  const imageUrl = stockImages[project.slug] ?? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="w-full h-full overflow-hidden relative group"
      onMouseMove={handleMouseMove}
      style={{
        aspectRatio,
        borderRadius: rounded,
        background: "#000000",
      }}
    >
      <img 
        src={imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Dark gradient overlay for contrast */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-75" 
        style={{
          background: "linear-gradient(to bottom, rgba(5,8,22,0.2) 0%, rgba(5,8,22,0.8) 100%)",
        }} 
      />
      
      {/* Interactive Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0,229,255,0.25), transparent 80%)`,
          mixBlendMode: "overlay"
        }}
      />
    </div>
  );
}
