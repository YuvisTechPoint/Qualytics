/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://qualytics.ai",
  generateRobotsTxt: true,
  exclude: ["/studio/*", "/dev/*"],
  additionalPaths: async () => {
    const paths = [
      { slug: "vibecode-data-quality", type: "inline" },
      { slug: "data-quality-vs-data-control", type: "inline" },
      { slug: "data-control-layer-to-govern-context-for-ai-systems", type: "inline" },
      { slug: "data-control-layer-for-trusted-context", type: "inline" },
      { slug: "trusted-ai-and-analytics-at-scale-with-databricks-and-qualytics", type: "inline" },
      { slug: "getting-started-augmented-dq", type: "guide" },
      { slug: "state-of-data-quality-2026", type: "guide" },
      { slug: "brookfield-customer-story", type: "customer-story" },
      { slug: "data-control-layer-webinar", type: "webinar" },
      { slug: "augmented-dq-webinar", type: "webinar" },
      { slug: "ai-readiness-data-governance", type: "blog" },
    ];

    const typePrefix = {
      blog: "/resources/blog",
      inline: "/resources/in",
      guide: "/resources/guides",
      "customer-story": "/resources/customer-stories",
      webinar: "/resources/webinars-and-events",
    };

    return paths.map(({ slug, type }) => ({
      loc: `${typePrefix[type]}/${slug}`,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
