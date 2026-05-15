import { Brain, Globe, Cpu, Cloud, BarChart3, Smartphone, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import domainsBg from "@/assets/domains-bg.png";

const domains = [
  { icon: Brain, title: "AI / Machine Learning", desc: "Deep learning, NLP, computer vision, recommendation systems", accent: "#00d4ff" },
  { icon: Globe, title: "Web Development", desc: "Full-stack apps, REST APIs, modern frameworks", accent: "#7c3aed" },
  { icon: Cpu, title: "IoT / Embedded Systems", desc: "Arduino, Raspberry Pi, sensor networks, smart devices", accent: "#22c55e" },
  { icon: Cloud, title: "Cloud / DevOps", desc: "AWS, Docker, CI/CD pipelines, serverless architecture", accent: "#3b82f6" },
  { icon: BarChart3, title: "Data Science", desc: "Data analysis, visualization, predictive modeling", accent: "#f59e0b" },
  { icon: Smartphone, title: "Mobile App Dev", desc: "Android, iOS, cross-platform applications", accent: "#ec4899" },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Network security, cryptography, smart contracts", accent: "#10b981" },
];

const DomainCard = ({ d }) => {
  const { handleMouseMove, handleMouseLeave } = useTilt(8);

  return (
    <div
      className="reveal group glass-card rounded-2xl p-6 relative overflow-hidden tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
    >
      {/* Icon */}
      <div
        className="tilt-inner w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${d.accent}30, ${d.accent}15)`,
          boxShadow: `0 0 25px ${d.accent}15`,
        }}
      >
        <d.icon size={20} style={{ color: d.accent }} className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]" />
      </div>

      <h3 className="tilt-inner font-bold text-foreground mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {d.title}
      </h3>
      <p className="tilt-inner text-sm text-muted-foreground leading-relaxed">{d.desc}</p>

      {/* Hover corner glow */}
      <div
        className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-[35px]"
        style={{ background: `${d.accent}20` }}
      />
    </div>
  );
};

const Domains = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, ".reveal", { y: 50, rotateX: -10, stagger: 0.08 });

  return (
    <section id="domains" className="py-28 md:py-36 relative overflow-hidden" ref={sectionRef}>
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img src={domainsBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-transparent to-[#050a18]" />
      </div>

      {/* Decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d4ff]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold text-[#00d4ff] uppercase tracking-[0.25em] mb-4">
            Domains
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Projects Across <span className="gradient-text">Every Domain</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No matter your branch or specialization, I provide guidance tailored to your field.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 perspective-container">
          {domains.map((d) => (
            <DomainCard key={d.title} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
