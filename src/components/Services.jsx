import { Code2, Lightbulb, FileText, Terminal, Presentation, Wrench } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Project Development",
    desc: "End-to-end development of your project with clean, well-documented code you can understand and present confidently.",
  },
  {
    icon: Lightbulb,
    title: "Project Ideas & Selection",
    desc: "Struggling to pick a topic? Get curated project ideas based on your domain, skills, and university requirements.",
  },
  {
    icon: FileText,
    title: "Documentation & Reports",
    desc: "Professional project reports, synopses, and documentation formatted to your university's standards.",
  },
  {
    icon: Terminal,
    title: "Source Code Explanation",
    desc: "Detailed walkthrough of every module and function so you can explain your project with confidence.",
  },
  {
    icon: Presentation,
    title: "Viva & Demo Preparation",
    desc: "Mock viva sessions and demo rehearsals to ensure you're fully prepared for your final evaluation.",
  },
  {
    icon: Wrench,
    title: "Customization & Support",
    desc: "Need modifications to an existing project? Get tailored enhancements, debugging, and ongoing support.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How I Can Help You
          </h2>

          <p className="text-muted-foreground">
            Comprehensive support at every stage of your final year project journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border/50"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon size={22} className="text-primary" />
              </div>

              <h3
                className="text-lg font-semibold text-foreground mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
