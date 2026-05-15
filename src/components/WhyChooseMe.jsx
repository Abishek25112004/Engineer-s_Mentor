import { CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Real Working Projects",
    desc: "Every project is fully functional, tested, and ready for demonstration — no half-baked solutions.",
  },
  {
    title: "Customizable Solutions",
    desc: "Your project is tailored to your university's specific requirements and your personal understanding.",
  },
  {
    title: "Detailed Explanation & Support",
    desc: "I walk you through the entire codebase so you understand every line before your viva.",
  },
  {
    title: "Student-Friendly Approach",
    desc: "Clear communication, flexible timelines, and patience — because I understand student life.",
  },
  {
    title: "Affordable Guidance",
    desc: "Quality mentoring at prices that respect a student's budget. No hidden charges.",
  },
  {
    title: "Confidential & Reliable",
    desc: "Your project details stay between us. Timely delivery guaranteed.",
  },
];

const WhyChooseMe = () => {
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
    <section
      id="why-us"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="orb orb-cyan w-[350px] h-[350px] top-10 -right-32 opacity-10" />
      <div className="orb orb-violet w-[250px] h-[250px] bottom-10 -left-20 opacity-10" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Sparkles size={16} className="animate-pulse" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Why Choose Me
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Built for Students, <br className="hidden sm:block" />
            <span className="gradient-text">by an Expert</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            I focus on helping you learn and succeed — not just delivering a project.
          </p>
        </div>

        {/* Reason Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group glass-card rounded-2xl p-6 relative overflow-hidden ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-primary via-secondary to-primary/20 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex gap-4 pl-2">
                <CheckCircle2
                  size={22}
                  className="text-primary mt-0.5 shrink-0 group-hover:icon-glow transition-all duration-300"
                />

                <div>
                  <h3
                    className="font-bold text-foreground mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {r.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
