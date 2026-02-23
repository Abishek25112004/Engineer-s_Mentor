import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-6">
            <GraduationCap size={16} />
            <span>Trusted by many engineering students</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Final Year Engineering Project Guidance & Development
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Expert mentoring and hands-on development support for your final year
            project — across every engineering domain. From idea selection to
            viva preparation, I've got you covered.
          </p>

          <p className="text-3xl md:text-5xl lg:text-xl font-bold leading-tight mb-6  ">Contact No : 8072287692, 9080420738</p>

          <p className="text-2xl md:text-5xl lg:text-xl font-bold leading-tight mb-6  ">Email : engineersmentorservices@gmail.com</p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="text-primary font-semibold"
            >
              <a href="#contact">
                Discuss Your Project{" "}
                <ArrowRight size={18} className="ml-1" />
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              asChild
              className="text-primary font-semibold "
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
