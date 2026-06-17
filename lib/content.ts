import { HOMEPAGE_RESOURCE_IMAGES } from "@/lib/assets";

export interface ArticleContent {
  title: string;
  excerpt: string;
  body: string;
  category: string;
  date: string;
  slug: string;
  type: ResourceItem["type"];
  author?: string;
  company?: string;
  duration?: string;
}

export interface ResourceItem {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  type: "inline" | "blog" | "guide" | "webinar" | "customer-story" | "company-news" | "product-news";
  href: string;
  image?: string;
}

const ARTICLES: Record<string, ArticleContent> = {
  "vibecode-data-quality": {
    title: "You can vibecode a data quality tool. You can't vibecode a data quality program.",
    excerpt: "AI coding tools make standing up data quality validation easy, but running an enterprise-grade program takes years of product discipline.",
    category: "Best Practices",
    date: "2026-06-04",
    slug: "vibecode-data-quality",
    type: "inline",
    author: "Qualytics Team",
    body: `AI coding tools make standing up data quality validation easy. You can spin up checks, write rules, and deploy monitors in hours. But running an enterprise-grade data quality program takes years of product discipline.

## The Tool vs The Program

A data quality tool validates data. A data quality program governs how your organization defines, maintains, and acts on quality signals across every system that consumes data.

## What AI Can't Replace

- Organizational alignment on what "trusted" means
- Business context encoded into governance rules
- Continuous adaptation as data behavior evolves
- Cross-team accountability for anomaly resolution

## The Qualytics Approach

Qualytics combines AI-augmented rule inference with human governance, creating a data control layer that scales with your organization.`,
  },
  "data-quality-vs-data-control": {
    title: "Data Quality vs Data Control: Why AI Demands Controls",
    excerpt:
      "AI removes the human safety net that contained bad data. The data control layer validates data at the moment it's acted on.",
    category: "AI Readiness",
    date: "2026-05-19",
    slug: "data-quality-vs-data-control",
    type: "inline",
    author: "Qualytics Team",
    body: `Traditional data quality operates downstream — finding problems after they've already propagated. AI systems remove the human safety net that contained bad data.

## The Shift to Data Control

Data control validates data at the moment it's acted on. Instead of discovering issues in a dashboard days later, controls prevent bad data from reaching AI agents, analytics, and operational systems in real time.

## Why This Matters for AI

When copilots and agents reason on data at machine speed, downstream discovery is too late. Controls must be embedded where data is consumed.`,
  },
  "data-control-layer-to-govern-context-for-ai-systems": {
    title: "Qualytics Launches Data Control Layer to Govern Context for AI Systems",
    excerpt:
      "Qualytics, the AI-augmented data quality platform, today launched the data control layer: a new approach to governing the context AI systems reason and act on.",
    category: "Company News",
    date: "2026-04-13",
    slug: "data-control-layer-to-govern-context-for-ai-systems",
    type: "inline",
    author: "Qualytics Team",
    body: `Qualytics, the AI-augmented data quality platform, today launched the data control layer: a new approach to governing the context AI systems reason and act on.

The data control layer validates data at point-of-use, applying quality signals as real-time controls across analytics, applications, agents, and AI workflows.`,
  },
  "data-control-layer-for-trusted-context": {
    title: "What is the Data Control Layer?",
    excerpt: "Learn how the data control layer validates data at the moment of use.",
    category: "Best Practices",
    date: "2026-03-01",
    slug: "data-control-layer-for-trusted-context",
    type: "inline",
    author: "Qualytics Team",
    body: `The data control layer is a shared governance foundation that validates data at the moment it's used — not downstream in a dashboard.

It combines AI-augmented rule inference with human governance to ensure every system that consumes data receives quality signals in real time.`,
  },
  "trusted-ai-and-analytics-at-scale-with-databricks-and-qualytics": {
    title: "Trusted AI and Analytics at Scale with Databricks and Qualytics",
    excerpt: "Enterprise-scale trusted context for AI and analytics workloads.",
    category: "Best Practices",
    date: "2026-02-01",
    slug: "trusted-ai-and-analytics-at-scale-with-databricks-and-qualytics",
    type: "inline",
    author: "Qualytics Team",
    body: `Learn how Qualytics integrates with Databricks to deliver trusted context for AI and analytics workloads at enterprise scale.`,
  },
  "getting-started-augmented-dq": {
    title: "Getting Started with Augmented Data Quality",
    excerpt: "A practical guide to implementing AI-augmented data quality in your organization.",
    category: "Guide",
    date: "2026-02-15",
    slug: "getting-started-augmented-dq",
    type: "guide",
    author: "Qualytics Team",
    body: `This guide walks through the first 90 days of implementing augmented data quality with Qualytics.

## Phase 1: Connect and Profile

Connect your primary data warehouse and let Qualytics profile structural and behavioral metadata across every field.

## Phase 2: Generate Coverage

Review AI-inferred rules and extend coverage with business SME input through low-code authoring.

## Phase 3: Operationalize Controls

Deploy quality signals as real-time controls where data is consumed by analytics and AI systems.

## Phase 4: Scale Governance

Engage business teams through AgentQ and establish ongoing governance rhythms.`,
  },
  "brookfield-customer-story": {
    title: "How Brookfield Achieved 20x ROI with Qualytics",
    excerpt: "Customer story on operationalizing trusted data at scale.",
    category: "Customer Story",
    date: "2026-01-20",
    slug: "brookfield-customer-story",
    type: "customer-story",
    company: "Brookfield",
    author: "Chief Data Officer",
    body: `Brookfield deployed Qualytics to automate over 20,000 data quality rules in year one, delivering 20x ROI and reclaiming thousands of engineering hours.

## The Challenge

Manual rule authoring couldn't keep pace with data growth across global portfolios.

## The Solution

AI-augmented rule inference with business SME governance through Qualytics.

## The Results

- 20x ROI in year one
- 95%+ rules automated
- 50+ business users actively resolving anomalies`,
  },
  "data-control-layer-webinar": {
    title: "Data Control Layer: A New Approach to AI Governance",
    excerpt: "Live webinar on governing context for AI systems.",
    category: "Webinar",
    date: "2026-05-15",
    slug: "data-control-layer-webinar",
    type: "webinar",
    duration: "45 min",
    author: "Qualytics Product Team",
    body: `Join our product team for a deep dive into the data control layer — how it validates data at the moment of use and governs context for AI systems.

## What You'll Learn

- Why traditional DQ fails for AI workloads
- How validate-at-use architecture works
- Live demo of AgentQ and real-time controls

## Who Should Attend

Data governance leaders, CDOs, and AI platform teams at enterprise organizations.`,
  },
  "augmented-dq-webinar": {
    title: "Augmented Data Quality in Practice",
    excerpt: "On-demand webinar on AI-augmented rule inference.",
    category: "Webinar",
    date: "2026-04-01",
    slug: "augmented-dq-webinar",
    type: "webinar",
    duration: "60 min",
    author: "Qualytics Customer Success",
    body: `See how enterprise teams use augmented data quality to achieve broad coverage without scaling headcount.

## Topics Covered

- Automated rule inference from observed behavior
- Business SME engagement through low-code tools
- Anomaly lifecycle management at scale`,
  },
  "ai-readiness-data-governance": {
    title: "AI Readiness Starts with Data Governance",
    excerpt: "Why governance must precede AI deployment at scale.",
    category: "AI Readiness",
    date: "2026-01-10",
    slug: "ai-readiness-data-governance",
    type: "blog",
    author: "Qualytics Team",
    body: `Enterprises rushing to deploy AI without data governance foundations are building on sand.

## The Governance Gap

Most organizations have data quality tools but lack a governed definition of "trusted" that AI systems can rely on.

## Building the Foundation

Start with validate-at-use controls, not downstream dashboards.`,
  },
  "state-of-data-quality-2026": {
    title: "State of Data Quality 2026",
    excerpt: "Industry research on AI governance, validate-at-use adoption, and enterprise data control maturity.",
    category: "Report",
    date: "2026-03-20",
    slug: "state-of-data-quality-2026",
    type: "guide",
    author: "Qualytics Research",
    body: `Our 2026 State of Data Quality report surveys 500+ data leaders on how organizations are adapting governance for AI workloads.

## Key Findings

- 78% of enterprises cite AI as the primary driver for rethinking data quality
- Validate-at-use adoption grew 3x year-over-year
- Organizations with a data control layer report 4x faster anomaly resolution

## Methodology

Survey conducted Q1 2026 across financial services, healthcare, and technology verticals.`,
  },
};

function toResourceItem(article: ArticleContent): ResourceItem {
  const hrefMap: Record<string, string> = {
    inline: `/resources/in/${article.slug}`,
    blog: `/resources/blog/${article.slug}`,
    guide: `/resources/guides/${article.slug}`,
    webinar: `/resources/webinars-and-events/${article.slug}`,
    "customer-story": `/resources/customer-stories/${article.slug}`,
    "company-news": `/resources/company-news`,
    "product-news": `/resources/product-news`,
  };
  return {
    title: article.title,
    excerpt: article.excerpt,
    slug: article.slug,
    category: article.category,
    date: article.date,
    type: article.type,
    href: hrefMap[article.type] || `/resources/in/${article.slug}`,
  };
}

const ALL_ARTICLES = Object.values(ARTICLES);
const ALL_RESOURCES: ResourceItem[] = ALL_ARTICLES.map(toResourceItem);
const HOMEPAGE_RESOURCES = ALL_RESOURCES.filter((r) =>
  ["vibecode-data-quality", "data-quality-vs-data-control", "data-control-layer-to-govern-context-for-ai-systems"].includes(r.slug)
);

function withHomepageImages(resources: ResourceItem[]): ResourceItem[] {
  return resources.map((resource) => ({
    ...resource,
    image: resource.image ?? HOMEPAGE_RESOURCE_IMAGES[resource.slug],
  }));
}

export async function getHomepageResources() {
  try {
    const { fetchHomepageResources } = await import("@/lib/sanity.fetch");
    const sanityResources = await fetchHomepageResources();
    if (sanityResources.length > 0) return withHomepageImages(sanityResources);
  } catch {
    /* fallback */
  }
  return withHomepageImages(HOMEPAGE_RESOURCES);
}

export async function getAllResources() {
  return ALL_RESOURCES;
}

export async function getArticle(slug: string) {
  return ARTICLES[slug] ?? null;
}

export async function getInlineArticle(slug: string) {
  const article = ARTICLES[slug];
  if (!article) return null;
  return { title: article.title, body: article.body, category: article.category, date: article.date };
}

export async function getResourcesByType(type: ResourceItem["type"]) {
  return ALL_RESOURCES.filter((r) => r.type === type);
}

export async function getRelatedResources(slug: string, limit = 3) {
  const current = ARTICLES[slug];
  if (!current) return ALL_RESOURCES.slice(0, limit);
  return ALL_RESOURCES.filter((r) => r.slug !== slug && (r.category === current.category || r.type === current.type))
    .slice(0, limit);
}

export function extractHeadings(body: string) {
  return body
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return { id, text, level: 2 };
    });
}

export const RESOURCE_CATEGORIES = [
  "All",
  "Best Practices",
  "AI Readiness",
  "Company News",
  "Guide",
  "Report",
  "Customer Story",
  "Webinar",
] as const;
