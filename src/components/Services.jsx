import { Code2, Lightbulb, FileText, Terminal, Presentation, Wrench } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import Marquee from "@/components/Marquee";
import servicesBg from "@/assets/services-bg.png";

const services = [
  {
    icon: Code2,
    title: "Project Development",
    desc: "End-to-end development with clean, well-documented code you can understand and present confidently.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Project Ideas & Selection",
    desc: "Curated project ideas based on your domain, skills, and university requirements.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: FileText,
    title: "Documentation & Reports",
    desc: "Professional reports, synopses, and documentation formatted to your university's standards.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Terminal,
    title: "Source Code Explanation",
    desc: "Detailed walkthrough of every module so you can explain your project with confidence.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: Presentation,
    title: "Viva & Demo Preparation",
    desc: "Mock viva sessions and demo rehearsals for your final evaluation.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Wrench,
    title: "Customization & Support",
    desc: "Tailored enhancements, debugging, and ongoing support for existing projects.",
    color: "from-teal-400 to-cyan-500",
  },
];

const ServiceCard = ({ s, i }) => {
  const { handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <div
      className="reveal group glass-card rounded-2xl p-7 relative overflow-hidden tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/[0.02] to-[#7c3aed]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className={`tilt-inner relative w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
        <s.icon size={22} className="text-white" />
      </div>

      {/* Content */}
      <h3 className="tilt-inner relative text-lg font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {s.title}
      </h3>
      <p className="tilt-inner relative text-sm text-muted-foreground leading-relaxed">
        {s.desc}
      </p>

      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, ".reveal", { y: 60, rotateX: -15, stagger: 0.1 });

  return (
    <>
      <section id="services" className="py-28 md:py-36 relative overflow-hidden" ref={sectionRef}>
        {/* Top line */}
        <div className="section-line" />

        {/* Background image */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <img src={servicesBg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="reveal text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-[#00d4ff] uppercase tracking-[0.25em] mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              How I Can <span className="gradient-text">Help You</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive support at every stage of your final year project journey.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container">
            {services.map((s, i) => (
              <ServiceCard key={s.title} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <Marquee text="PROJECT DEVELOPMENT • VIVA PREP • CODE WALKTHROUGH • DOCUMENTATION" speed={40} />
    </>
  );
};

export default Services;
