import { Brain, Globe, Cpu, Cloud, BarChart3, Smartphone, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const domains = [
  { icon: Brain, title: "AI / Machine Learning", desc: "Deep learning, NLP, computer vision, recommendation systems", accent: "190 95% 55%" },
  { icon: Globe, title: "Web Development", desc: "Full-stack apps, REST APIs, modern frameworks", accent: "265 85% 65%" },
  { icon: Cpu, title: "IoT / Embedded Systems", desc: "Arduino, Raspberry Pi, sensor networks, smart devices", accent: "160 85% 50%" },
  { icon: Cloud, title: "Cloud / DevOps", desc: "AWS, Docker, CI/CD pipelines, serverless architecture", accent: "220 90% 60%" },
  { icon: BarChart3, title: "Data Science", desc: "Data analysis, visualization, predictive modeling", accent: "45 95% 60%" },
  { icon: Smartphone, title: "Mobile App Dev", desc: "Android, iOS, cross-platform applications", accent: "340 80% 60%" },
  { icon: ShieldCheck, title: "Cybersecurity / Blockchain", desc: "Network security, cryptography, smart contracts", accent: "130 70% 50%" },
];

const Domains = () => {
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
    <section id="domains" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">
            Domains
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Projects Across <span className="gradient-text">Every Domain</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No matter your branch or specialization, I provide guidance tailored to your field.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {domains.map((d, i) => (
            <div
              key={d.title}
              className={`group glass-card rounded-2xl p-6 relative overflow-hidden ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              {/* Icon with unique accent color */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, hsl(${d.accent} / 0.2), hsl(${d.accent} / 0.1))`,
                  boxShadow: `0 0 20px hsl(${d.accent} / 0.1)`,
                }}
              >
                <d.icon
                  size={20}
                  style={{ color: `hsl(${d.accent})` }}
                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]"
                />
              </div>

              <h3
                className="font-bold text-foreground mb-1.5"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {d.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>

              {/* Hover corner glow */}
              <div
                className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[30px]"
                style={{ background: `hsl(${d.accent} / 0.15)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
