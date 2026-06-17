import Link from "next/link";
import { FOOTER_COLUMNS } from "@/lib/footer-links";
import { FooterSocialIcons } from "@/components/layout/footer/FooterSocialIcons";
import { FooterLogoLarge } from "@/components/layout/footer/FooterLogoLarge";
import { FooterNewsletterForm } from "@/components/forms/FooterNewsletterForm";

function FooterLinkItem({ label, href, external }: { label: string; href: string; external?: boolean }) {
  const className =
    "font-sans text-sm text-[#ffffff] transition-opacity hover:opacity-70";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-[#ffffff]">
      <div className="mx-auto max-w-[90rem] border-x border-white/10 px-4 sm:px-6 lg:px-8">
        {/* Nav + social */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            <FooterSocialIcons />

            <nav className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {FOOTER_COLUMNS.map((column, index) => (
                <ul
                  key={column.title}
                  className={index < FOOTER_COLUMNS.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-8" : ""}
                >
                  <li className="mb-4">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                      {column.title}
                    </h2>
                  </li>
                  {column.links.map((link) => (
                    <li key={link.href} className="mb-3 last:mb-0">
                      <FooterLinkItem {...link} />
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* Brand + newsletter */}
        <div className="grid items-start gap-10 py-12 md:grid-cols-2 md:py-16 lg:gap-16">
          <FooterLogoLarge />
          <div className="md:justify-self-end">
            <FooterNewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* Legal */}
        <div className="flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
          <p className="text-sm text-neutral-500">
            © Copyright {year} QUALYTICS Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/tos" className="text-sm text-neutral-500 transition-colors hover:text-[#ffffff]">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-neutral-500 transition-colors hover:text-[#ffffff]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
