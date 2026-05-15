import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "Will the complete source code be provided?",
    a: "Yes, you'll receive the entire source code along with a detailed explanation of each module, so you can confidently present and explain it during your viva.",
  },
  {
    q: "Is documentation included?",
    a: "Absolutely. I provide professionally formatted documentation including synopsis, project report, and any diagrams required by your university.",
  },
  {
    q: "Can projects be customized to my requirements?",
    a: "Every project is tailored to your specific needs, university guidelines, and your level of understanding. No two projects are the same.",
  },
  {
    q: "Do you help with explanation and viva preparation?",
    a: "Yes, I offer thorough code walkthroughs and mock viva sessions to make sure you're fully prepared for your evaluation.",
  },
  {
    q: "How long does project development typically take?",
    a: "Timelines vary based on complexity, but most projects are completed within 2–4 weeks. Rush delivery is also available upon request.",
  },
];

const FAQ = () => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, ".reveal", { y: 40, stagger: 0.1 });

  return (
    <section id="faq" className="py-28 md:py-36 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#7c3aed]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-sm font-semibold text-[#00d4ff] uppercase tracking-[0.25em] mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="reveal glass-card rounded-2xl border-white/[0.04] px-6 overflow-hidden hover:!transform-none"
              data-cursor-hover
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 hover:text-[#00d4ff] transition-colors duration-300">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
