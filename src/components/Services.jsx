import { Code2, Lightbulb, FileText, Terminal, Presentation, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Project Development",
    desc: "End-to-end development of your project with clean, well-documented code you can understand and present confidently.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Project Ideas & Selection",
    desc: "Struggling to pick a topic? Get curated project ideas based on your domain, skills, and university requirements.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: FileText,
    title: "Documentation & Reports",
    desc: "Professional project reports, synopses, and documentation formatted to your university's standards.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Terminal,
    title: "Source Code Explanation",
    desc: "Detailed walkthrough of every module and function so you can explain your project with confidence.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: Presentation,
    title: "Viva & Demo Preparation",
    desc: "Mock viva sessions and demo rehearsals to ensure you're fully prepared for your final evaluation.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Wrench,
    title: "Customization & Support",
    desc: "Need modifications to an existing project? Get tailored enhancements, debugging, and ongoing support.",
    color: "from-teal-400 to-cyan-500",
  },
];

const Services = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="orb orb-violet w-[300px] h-[300px] -top-20 -right-20 opacity-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            How I Can <span className="gradient-text">Help You</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Comprehensive support at every stage of your final year project journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group glass-card rounded-2xl p-7 relative overflow-hidden ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <s.icon size={22} className="text-white" />
              </div>

              {/* Content */}
              <h3
                className="relative text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.title}
              </h3>

              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
