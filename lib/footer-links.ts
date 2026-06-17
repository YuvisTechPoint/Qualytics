export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Augmented Data Quality", href: "/augmented-data-quality" },
      { label: "Built for Humans & AI", href: "/built-for-humans-and-ai" },
      { label: "Trusted Context at Use", href: "/trusted-context-at-use" },
      { label: "Integrations", href: "/integrations" },
      { label: "Product News", href: "/resources/product-news" },
      { label: "Release Notes", href: "https://userguide.qualytics.io/changelog/", external: true },
      { label: "User Guide", href: "https://userguide.qualytics.io/", external: true },
      { label: "Support", href: "https://portal.usepylon.com/qualytics/login", external: true },
      { label: "Status", href: "https://status.qualytics.ai/", external: true },
    ],
  },
  {
    title: "Why Us",
    links: [
      { label: "Why Qualytics?", href: "/why-qualytics" },
      { label: "Customer Love", href: "/customer-love" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Company News", href: "/resources/company-news" },
      { label: "Contact", href: "/contact" },
      { label: "Trust", href: "https://trust.qualytics.ai/", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Hub", href: "/resources" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Reports", href: "/resources/reports" },
      { label: "Webinars & Events", href: "/resources/webinars-and-events" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
    ],
  },
];

export const FOOTER_SOCIALS = [
  {
    label: "Click to go to our Linkedin Page",
    href: "https://www.linkedin.com/company/qualyticsinc/",
    icon: "linkedin" as const,
  },
  {
    label: "Click to go to our Youtube Page",
    href: "https://www.youtube.com/@Qualytics",
    icon: "youtube" as const,
  },
  {
    label: "Click to go to our G2 page",
    href: "https://www.g2.com/products/qualytics/reviews",
    icon: "g2" as const,
  },
  {
    label: "Click to go to our Github Page",
    href: "https://github.com/Qualytics/",
    icon: "github" as const,
  },
];
