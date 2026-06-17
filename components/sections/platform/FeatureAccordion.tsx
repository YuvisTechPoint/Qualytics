"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { SlideIn } from "@/components/animations/SlideIn";

interface Feature {
  title: string;
  body: string;
  bullets: string[];
}

export function FeatureAccordion({ features }: { features: Feature[] }) {
  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-narrow container-padding">
        <Accordion type="single" collapsible defaultValue="feature-0">
          {features.map((feature, i) => (
            <SlideIn key={feature.title}>
              <AccordionItem value={`feature-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">
                  {feature.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-body-md text-neutral-500">{feature.body}</p>
                  <ul className="mt-4 space-y-2">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="text-body-sm text-neutral-400">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </SlideIn>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
