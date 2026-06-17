import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface FAQ {
  question: string;
  answer: string;
}

export function PlatformFAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="section-padding bg-base-surface">
      <div className="mx-auto max-w-narrow container-padding">
        <ScrollReveal>
          <h2 className="font-display text-display-md text-neutral-50">{title}</h2>
        </ScrollReveal>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
