import { CheckCircle2, Sparkles, Users, Trophy, Clock, Shield } from "lucide-react";
import { useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mentorImg from "@/assets/mentor.png";
import studentsImg from "@/assets/students.png";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: Trophy, title: "Real Working Projects", desc: "Fully functional, tested, and ready for demonstration — no half-baked solutions." },
  { icon: Users, title: "Customizable Solutions", desc: "Tailored to your university's specific requirements and your personal understanding." },
  { icon: CheckCircle2, title: "Detailed Explanation", desc: "Complete codebase walkthrough so you understand every line before your viva." },
  { icon: Clock, title: "Student-Friendly", desc: "Clear communication, flexible timelines, and patience — because I understand student life." },
  { icon: Shield, title: "Affordable & Reliable", desc: "Quality mentoring at student-friendly prices. Confidential and timely delivery." },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Success Rate" },
  { value: "4+", label: "Years Experience" },
  { value: "24h", label: "Response Time" },
];

const WhyChooseMe = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useScrollReveal(sectionRef, ".reveal", { y: 50, stagger: 0.1 });

  useEffect(() => {
    if (!imageRef.current) return;

    // Parallax on the images
    gsap.to(imageRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="why-us" className="py-28 md:py-36 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-10 -right-40 opacity-8" />
      <div className="orb orb-violet w-[300px] h-[300px] bottom-10 -left-24 opacity-8" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-[#00d4ff] mb-4">
            <Sparkles size={16} style={{ animation: "glow-pulse 3s ease-in-out infinite" }} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">Why Choose Me</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Built for Students, <br className="hidden sm:block" />
            <span className="gradient-text">by an Expert</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I focus on helping you learn and succeed — not just delivering a project.
          </p>
        </div>

        {/* Two-column: Image + Reasons */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Images */}
          <div className="relative hidden lg:block" ref={imageRef}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#7c3aed]/[0.05]">
              <img
                src={mentorImg}
                alt="Expert mentor"
                className="w-full h-auto rounded-2xl object-cover"
                style={{ maxHeight: "480px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 rounded-2xl border border-white/[0.05]" />
            </div>

            {/* Smaller overlapping image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-2 border-[#050a18]" style={{ animation: "float 7s ease-in-out infinite" }}>
              <img
                src={studentsImg}
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a18]/60 to-transparent" />
            </div>
          </div>

          {/* Right: Reason cards */}
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal group glass-card rounded-xl p-5 relative overflow-hidden"
                data-cursor-hover
              >
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#00d4ff] via-[#7c3aed] to-[#00d4ff]/20 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex gap-4 pl-3">
                  <r.icon size={22} className="text-[#00d4ff] mt-0.5 shrink-0 group-hover:icon-glow transition-all duration-300" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="section-line mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
          {stats.map((s, i) => (
            <div key={s.label} className="reveal text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2" style={{ animation: "counter-glow 4s ease-in-out infinite", fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
