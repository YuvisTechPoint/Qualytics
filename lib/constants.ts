export const SITE_NAME = "Qualytics";
export const SITE_TAGLINE = "Data Control for Trusted Context";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://qualytics.ai";

export const CUSTOMER_LOGOS = [
  "AES",
  "Brookfield",
  "Chéré",
  "MAPFRE",
  "Octus",
  "Revantage",
  "Wellstar Health System",
];

export const CATEGORY_COLORS: Record<string, string> = {
  blog: "electric",
  guide: "purple",
  webinar: "success",
  "customer-story": "brand",
  "company-news": "neutral",
  "product-news": "warning",
  "best-practices": "brand",
  "ai-readiness": "electric",
};

export interface NavItem {
  title: string;
  href: string;
  description: string;
}

export interface NavFeatured {
  title: string;
  href: string;
  image: string;
}

export interface NavConfig {
  label: string;
  layout: "platform" | "single" | "company" | "resources";
  items: NavItem[];
  featured?: NavFeatured;
}

export const NAV_LINKS: Record<"platform" | "whyUs" | "company" | "resources", NavConfig> = {
  platform: {
    label: "Platform",
    layout: "platform",
    items: [
      {
        title: "Augmented Data Quality",
        href: "/augmented-data-quality",
        description:
          "AI infers your rules. Your teams guide governance with business context.",
      },
      {
        title: "Built for Humans & AI",
        href: "/built-for-humans-and-ai",
        description:
          "One governed foundation for business teams, data teams, and AI systems.",
      },
      {
        title: "Trusted Context at Use",
        href: "/trusted-context-at-use",
        description:
          "Quality signals delivered as real-time controls wherever your data is used.",
      },
      {
        title: "Integrations",
        href: "/integrations",
        description:
          "Connect Qualytics across your data stack to improve quality without disrupting workflows.",
      },
      {
        title: "Product News",
        href: "/resources/product-news",
        description:
          "New features, enhancements, and releases shaping the Qualytics platform.",
      },
    ],
    featured: {
      title: "Trusted AI and Analytics at Scale with Databricks and Qualytics",
      href: "/resources/in/trusted-ai-and-analytics-at-scale-with-databricks-and-qualytics",
      image:
        "https://cdn.prod.website-files.com/692094a2527ae3de402388fe/69bd4b478a382458c6db3fb1_Databricks%20blog%20(2).png",
    },
  },
  whyUs: {
    label: "Why Us",
    layout: "single",
    items: [
      {
        title: "Why Qualytics?",
        href: "/why-qualytics",
        description:
          "What sets Qualytics apart—and how we deliver proactive, enterprise-grade data quality at scale.",
      },
      {
        title: "What is the Data Control Layer?",
        href: "/resources/in/data-control-layer-for-trusted-context",
        description:
          "The data control layer enables trusted data for humans, AI, and analytics at the moment it is used.",
      },
      {
        title: "Customer Love",
        href: "/customer-love",
        description:
          "Real stories from teams using Qualytics to prevent data issues and build trust.",
      },
    ],
  },
  company: {
    label: "Company",
    layout: "company",
    items: [
      {
        title: "About Us",
        href: "/about-us",
        description:
          "The story behind Qualytics and our mission to make trusted data the standard.",
      },
      {
        title: "Careers",
        href: "/careers",
        description:
          "Join the team solving the biggest problems in enterprise data quality.",
      },
      {
        title: "Company News",
        href: "/resources/company-news",
        description: "Updates and announcements from the Qualytics team.",
      },
    ],
    featured: {
      title: "Qualytics Launches Data Control Layer to Govern Context for AI Systems",
      href: "/resources/in/data-control-layer-to-govern-context-for-ai-systems",
      image:
        "https://cdn.prod.website-files.com/692094a2527ae3de402388fe/69dc225b0ad79d1d06d15a4d_DCL%20Launch%20(1).png",
    },
  },
  resources: {
    label: "Resources",
    layout: "resources",
    items: [
      {
        title: "Resources Hub",
        href: "/resources",
        description:
          "Practical insights, frameworks, and guidance to help companies trust their data.",
      },
      {
        title: "Blog",
        href: "/resources/blog",
        description:
          "Expert perspectives on data quality, governance, automation, and AI readiness.",
      },
      {
        title: "Guides",
        href: "/resources/guides",
        description: "Deep dives and research to support smarter data quality decisions.",
      },
      {
        title: "Webinars & Events",
        href: "/resources/webinars-and-events",
        description:
          "Live and on-demand sessions on scaling data quality for the enterprise.",
      },
      {
        title: "Customer Stories",
        href: "/resources/customer-stories",
        description:
          "How customers prevent data issues and build trust at enterprise scale with Qualytics.",
      },
    ],
    featured: {
      title: "You can vibecode a data quality tool. You can't vibecode a data quality program.",
      href: "/resources/in/vibecode-data-quality",
      image:
        "https://cdn.prod.website-files.com/692094a2527ae3de402388fe/6a21a8955f0a614f126ec01c_Vibecode%20DQ.png",
    },
  },
};
