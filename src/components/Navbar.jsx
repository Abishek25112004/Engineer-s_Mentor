import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Domains", href: "#domains" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Logo = () => (
  <a href="#" className="relative group flex items-center gap-2" data-cursor-hover>
    {/* EM Monogram */}
    <div className="relative w-10 h-10 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] opacity-90" />
      <div className="absolute inset-[1.5px] rounded-[10px] bg-[#050a18] flex items-center justify-center">
        <span className="text-sm font-bold tracking-tight gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          EM
        </span>
      </div>
    </div>
    <span className="text-foreground font-bold text-lg hidden sm:inline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      Engineer's <span className="gradient-text">Mentor</span>
    </span>
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    // Stagger link animations on mount
    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.3, ease: "power3.out" }
      );
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#050a18]/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-2xl shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1" ref={linksRef}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-white/[0.03] animated-underline"
              data-cursor-hover
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-[#050a18] border-0 glow-btn font-semibold rounded-lg"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#050a18]/95 backdrop-blur-2xl border-b border-white/[0.04] px-4 pb-5 pt-2 flex flex-col gap-1">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 px-4 rounded-lg hover:bg-white/[0.03] transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="w-fit mt-2 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-[#050a18] border-0 font-semibold"
          >
            <a href="#contact" onClick={() => setOpen(false)}>
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
