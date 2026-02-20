import { CheckCircle2 } from "lucide-react";

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
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 hero-gradient text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-widest mb-2">
            Why Choose Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Students, by an Expert
          </h2>

          <p className="text-primary-foreground/70">
            I focus on helping you learn and succeed — not just delivering a project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-3">
              <CheckCircle2
                size={22}
                className="text-primary-foreground/80 mt-0.5 shrink-0"
              />

              <div>
                <h3
                  className="font-semibold mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {r.title}
                </h3>

                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
