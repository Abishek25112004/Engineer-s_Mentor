import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Sparkles, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const orbsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading character split animation
      const heading = headingRef.current;
      if (heading) {
        const words = heading.querySelectorAll(".hero-word");
        gsap.fromTo(
          words,
          { opacity: 0, y: 80, rotateX: -40 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 1, stagger: 0.12,
            ease: "power4.out", delay: 0.2,
          }
        );
      }

      // Content reveal
      const content = contentRef.current;
      if (content) {
        gsap.fromTo(
          content.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.8 }
        );
      }

      // Image parallax entrance
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.1, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.5 }
        );
      }

      // Parallax on scroll for orbs
      if (orbsRef.current) {
        const orbs = orbsRef.current.children;
        Array.from(orbs).forEach((orb, i) => {
          gsap.to(orb, {
            y: (i + 1) * -80,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }
    }, sectionRef);

    // Mouse parallax on hero content
    const section = sectionRef.current;
    const handleMouse = (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: xPercent * 15,
          y: yPercent * 10,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    section?.addEventListener("mousemove", handleMouse);
    return () => {
      ctx.revert();
      section?.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating orbs with parallax */}
      <div ref={orbsRef}>
        <div className="orb orb-cyan w-[500px] h-[500px] -top-40 -right-40 opacity-25" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-10 -left-32 opacity-20" />
        <div className="orb orb-orange w-[200px] h-[200px] top-1/3 right-1/3 opacity-15" />
      </div>

      {/* Spinning rings */}
      <div className="absolute top-16 right-16 w-72 h-72 border border-[#00d4ff]/[0.06] rounded-full hidden lg:block" style={{ animation: "spin-slow 25s linear infinite" }} />
      <div className="absolute top-20 right-20 w-64 h-64 border border-[#7c3aed]/[0.06] rounded-full hidden lg:block" style={{ animation: "spin-slow 35s linear infinite reverse" }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm rounded-full px-5 py-2 text-sm mb-8 border border-white/[0.06] opacity-0 animate-fade-up">
              <Sparkles size={14} className="text-[#00d4ff]" style={{ animation: "glow-pulse 3s ease-in-out infinite" }} />
              <span className="text-foreground/70">Trusted by 500+ engineering students</span>
            </div>

            {/* Heading with 3D word flip */}
            <div ref={headingRef} className="perspective-container mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="hero-word inline-block text-foreground">Final Year</span>{" "}
                <span className="hero-word inline-block gradient-text">Engineering</span>
                <br />
                <span className="hero-word inline-block text-foreground">Project</span>{" "}
                <span className="hero-word inline-block text-foreground">Guidance</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div ref={contentRef}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Expert mentoring and hands-on development support — from idea selection to
                viva preparation, across every engineering domain.
              </p>

              {/* Contact chips */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="inline-flex items-center gap-2.5 glass-card rounded-full px-5 py-2.5 text-sm hover:!transform-none">
                  <Phone size={14} className="text-[#00d4ff] icon-glow" />
                  <span className="text-foreground/80">8072287692, 9080420738</span>
                </div>
                <div className="inline-flex items-center gap-2.5 glass-card rounded-full px-5 py-2.5 text-sm hover:!transform-none">
                  <Mail size={14} className="text-[#00d4ff] icon-glow" />
                  <span className="text-foreground/80">engineersmentorservices@gmail.com</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-[#050a18] font-bold border-0 glow-btn px-8 py-6 text-base rounded-xl"
                >
                  <a href="#contact" data-cursor-hover>
                    Discuss Your Project
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/[0.08] text-foreground hover:bg-white/[0.04] hover:border-[#00d4ff]/20 font-semibold px-8 py-6 text-base rounded-xl backdrop-blur-sm transition-all duration-400"
                >
                  <a href="#services" data-cursor-hover>Explore Services</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Hero Image with 3D parallax */}
          <div className="relative hidden lg:block">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00d4ff]/[0.05]"
            >
              <img
                src={heroBg}
                alt="Engineering student working on projects"
                className="w-full h-auto rounded-2xl object-cover"
                style={{ maxHeight: "520px" }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-transparent to-transparent opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050a18]/30 to-transparent" />
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06]" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl px-5 py-4 glow-border hover:!transform-none" style={{ animation: "float 5s ease-in-out infinite" }}>
              <p className="text-2xl font-bold gradient-text">500+</p>
              <p className="text-xs text-muted-foreground">Projects Delivered</p>
            </div>

            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-5 py-4 glow-border hover:!transform-none" style={{ animation: "float 6s ease-in-out infinite 1s" }}>
              <p className="text-2xl font-bold gradient-text">98%</p>
              <p className="text-xs text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050a18] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-[#00d4ff]/40" style={{ animation: "scroll-indicator 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
};

export default Hero;
