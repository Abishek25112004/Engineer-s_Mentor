import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import image from "@/assets/image.png"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Domains", href: "#domains" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#" className="relative group">
          <img
            src={image}
            style={{ width: "130px", height: "120px", padding: "0px", margin: "0px" }}
            className="transition-transform duration-300 group-hover:scale-105"
            alt="Engineer's Mentor Logo"
          />
          <div className="absolute -inset-2 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-white/[0.04] animated-underline"
            >
              {l.label}
            </a>
          ))}

          <Button
            asChild
            size="sm"
            className="ml-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 glow-btn font-semibold"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/90 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-white/[0.04] transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {l.label}
            </a>
          ))}

          <Button
            asChild
            size="sm"
            className="w-fit mt-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 font-semibold animate-fade-up"
            style={{ animationDelay: "250ms" }}
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
