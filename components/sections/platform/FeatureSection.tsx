import { Check } from "lucide-react";
import { SlideIn } from "@/components/animations/SlideIn";
import { ProductMock, type ProductMockType } from "@/components/product-ui";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
  mock?: ProductMockType;
}

export function FeatureSection({ title, body, bullets, reverse, mock = "dashboard" }: Feature) {
  return (
    <section className="section-padding">
      <div
        className={cn(
          "mx-auto grid max-w-wide items-center gap-12 lg:grid-cols-2 container-padding",
          reverse && "lg:[direction:rtl] lg:*:[direction:ltr]"
        )}
      >
        <SlideIn direction={reverse ? "right" : "left"}>
          <h2 className="font-display text-display-sm text-neutral-50">{title}</h2>
          <p className="mt-4 text-body-lg text-neutral-500">{body}</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-body-md text-neutral-400">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </SlideIn>
        <SlideIn direction={reverse ? "left" : "right"}>
          <ProductMock type={mock} />
        </SlideIn>
      </div>
    </section>
  );
}
