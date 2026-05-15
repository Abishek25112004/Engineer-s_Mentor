import { Phone, Mail, Heart } from "lucide-react";
import Marquee from "@/components/Marquee";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Marquee divider */}
      <Marquee text="GET IN TOUCH • ENGINEER'S MENTOR • FINAL YEAR PROJECTS" speed={35} className="py-4" />

      {/* Top gradient border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            {/* Brand */}
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Engineer's Mentor
            </h3>

            <p className="text-muted-foreground text-sm mb-10">
              Expert project guidance for final year engineering students.
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <a href="tel:8072287692" className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-[#00d4ff] transition-colors duration-300" data-cursor-hover>
                <Phone size={15} className="text-[#00d4ff]/50" />
                <span>8072287692, 9080420738</span>
              </a>
              <a href="mailto:engineersmentorservices@gmail.com" className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-[#00d4ff] transition-colors duration-300" data-cursor-hover>
                <Mail size={15} className="text-[#00d4ff]/50" />
                <span>engineersmentorservices@gmail.com</span>
              </a>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent mb-8" />

            {/* Copyright */}
            <p className="text-xs text-muted-foreground/50 flex items-center justify-center gap-1.5">
              &copy; {new Date().getFullYear()} Engineer's Mentor. Made with
              <Heart size={11} className="text-[#7c3aed]/50" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
