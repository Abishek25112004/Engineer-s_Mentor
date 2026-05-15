import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="hero-gradient py-14">
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="text-center max-w-2xl mx-auto">
            {/* Brand */}
            <h3
              className="text-2xl font-bold gradient-text mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineer's Mentor
            </h3>

            <p className="text-muted-foreground text-sm mb-8">
              Expert project guidance for final year engineering students.
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                <Phone size={15} className="text-primary/60" />
                <span>8072287692, 9080420738</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                <Mail size={15} className="text-primary/60" />
                <span>engineersmentorservices@gmail.com</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />

            {/* Copyright */}
            <p className="text-xs text-muted-foreground/60 flex items-center justify-center gap-1">
              &copy; {new Date().getFullYear()} Engineer's Mentor. Made with
              <Heart size={12} className="text-primary/50 inline" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
