import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Qualytics team.",
};

export default function ContactPage() {
  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto grid max-w-wide gap-12 lg:grid-cols-2 container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Contact us</h1>
          <p className="mt-4 text-body-lg text-neutral-500">
            Have a question? We&apos;d love to hear from you.
          </p>
          <div className="mt-8 space-y-4 text-body-md text-neutral-500">
            <p>Email: hello@qualytics.ai</p>
            <p>LinkedIn: /company/qualyticsinc</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-xl border border-base-border bg-base-surface p-8">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
