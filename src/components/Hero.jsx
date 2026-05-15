import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Phone, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating orbs */}
      <div className="orb orb-cyan w-[500px] h-[500px] -top-32 -right-32 opacity-30" style={{ animationDelay: "0s" }} />
      <div className="orb orb-violet w-[400px] h-[400px] bottom-20 -left-20 opacity-20" style={{ animationDelay: "2s" }} />
      <div className="orb orb-cyan w-[200px] h-[200px] top-1/2 right-1/4 opacity-15" style={{ animationDelay: "4s" }} />

      {/* Animated ring decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute top-24 right-24 w-56 h-56 border border-secondary/10 rounded-full animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm rounded-full px-5 py-2 text-sm mb-8 border border-white/[0.08] hover:border-primary/30 transition-colors duration-500">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-foreground/80">Trusted by many engineering students</span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            <span className="text-foreground">Final Year </span>
            <span className="gradient-text">Engineering</span>
            <br />
            <span className="text-foreground">Project Guidance</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Expert mentoring and hands-on development support for your final year
            project — across every engineering domain. From idea selection to
            viva preparation, I've got you covered.
          </p>

          {/* Contact chips */}
          <div className="animate-fade-up delay-300 flex flex-wrap gap-3 mb-10">
            <div className="inline-flex items-center gap-2.5 glass-card rounded-full px-5 py-2.5 text-sm hover:!transform-none">
              <Phone size={15} className="text-primary icon-glow" />
              <span className="text-foreground/90">8072287692, 9080420738</span>
            </div>
            <div className="inline-flex items-center gap-2.5 glass-card rounded-full px-5 py-2.5 text-sm hover:!transform-none">
              <Mail size={15} className="text-primary icon-glow" />
              <span className="text-foreground/90">engineersmentorservices@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold border-0 glow-btn px-8 py-6 text-base rounded-xl"
            >
              <a href="#contact">
                Discuss Your Project
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/[0.1] text-foreground hover:bg-white/[0.06] hover:border-primary/30 font-semibold px-8 py-6 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
