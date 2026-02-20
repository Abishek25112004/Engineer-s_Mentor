import { Brain, Globe, Cpu, Cloud, BarChart3, Smartphone, ShieldCheck } from "lucide-react";

const domains = [
  { icon: Brain, title: "AI / Machine Learning", desc: "Deep learning, NLP, computer vision, recommendation systems" },
  { icon: Globe, title: "Web Development", desc: "Full-stack apps, REST APIs, modern frameworks" },
  { icon: Cpu, title: "IoT / Embedded Systems", desc: "Arduino, Raspberry Pi, sensor networks, smart devices" },
  { icon: Cloud, title: "Cloud / DevOps", desc: "AWS, Docker, CI/CD pipelines, serverless architecture" },
  { icon: BarChart3, title: "Data Science", desc: "Data analysis, visualization, predictive modeling" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Android, iOS, cross-platform applications" },
  { icon: ShieldCheck, title: "Cybersecurity / Blockchain", desc: "Network security, cryptography, smart contracts" },
];

const Domains = () => (
  <section id="domains" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
          Domains
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projects Across Every Domain
        </h2>
        <p className="text-muted-foreground">
          No matter your branch or specialization, I provide guidance tailored to your field.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {domains.map((d) => (
          <div
            key={d.title}
            className="group bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover border border-border/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center mb-3">
              <d.icon size={20} className="text-primary-foreground" />
            </div>

            <h3
              className="font-semibold text-foreground mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {d.title}
            </h3>

            <p className="text-sm text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Domains;
