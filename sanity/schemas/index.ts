import { defineField, defineType } from "sanity";

const slugField = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
  validation: (Rule) => Rule.required(),
});

const publishFields = [
  defineField({ name: "published", title: "Published", type: "boolean", initialValue: false }),
  defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
];

const articleFields = [
  defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
  slugField,
  defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
  defineField({ name: "body", title: "Body", type: "text" }),
  defineField({ name: "author", title: "Author", type: "string" }),
  ...publishFields,
];

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: articleFields,
});

export const inlineArticle = defineType({
  name: "inlineArticle",
  title: "Inline Article",
  type: "document",
  fields: articleFields,
});

export const guide = defineType({
  name: "guide",
  title: "Guide",
  type: "document",
  fields: [
    ...articleFields,
    defineField({ name: "category", title: "Category", type: "string", initialValue: "Guide" }),
  ],
});

export const webinar = defineType({
  name: "webinar",
  title: "Webinar",
  type: "document",
  fields: [
    ...articleFields,
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "eventDate", title: "Event Date", type: "datetime" }),
  ],
});

export const customerStory = defineType({
  name: "customerStory",
  title: "Customer Story",
  type: "document",
  fields: [
    ...articleFields,
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
  ],
});

export const companyNews = defineType({
  name: "companyNews",
  title: "Company News",
  type: "document",
  fields: articleFields,
});

export const productNews = defineType({
  name: "productNews",
  title: "Product News",
  type: "document",
  fields: articleFields,
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", validation: (Rule) => Rule.required() }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text" }),
    defineField({ name: "page", title: "Page", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});

export const integration = defineType({
  name: "integration",
  title: "Integration",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "DATA_WAREHOUSE",
          "EVENT_STREAMING",
          "OBJECT_STORAGE",
          "DATA_CATALOG",
          "ALERTING",
          "ETL_ORCHESTRATION",
          "TICKETING",
          "ANALYTICS",
        ],
      },
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "docUrl", title: "Documentation URL", type: "url" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});

export const jobPosting = defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "department", title: "Department", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "applyUrl", title: "Apply URL", type: "url" }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: true }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "announcementText", title: "Announcement Bar Text", type: "string" }),
    defineField({ name: "announcementLink", title: "Announcement Link", type: "url" }),
    defineField({ name: "homepageHeadline", title: "Homepage Headline", type: "string" }),
    defineField({ name: "homepageSubheadline", title: "Homepage Subheadline", type: "text" }),
  ],
});

export const schemaTypes = [
  blogPost,
  inlineArticle,
  guide,
  webinar,
  customerStory,
  companyNews,
  productNews,
  testimonial,
  faq,
  integration,
  jobPosting,
  siteSettings,
];
