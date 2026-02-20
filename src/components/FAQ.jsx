import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28 section-gradient">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl border border-border/50 px-6 card-shadow"
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
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

export default FAQ;
