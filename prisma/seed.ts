import { PrismaClient, IntegCategory } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { INTEGRATIONS_CATALOG } from "../lib/integrations-data";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const integration of INTEGRATIONS_CATALOG) {
    await prisma.integration.upsert({
      where: { slug: integration.slug },
      update: {
        name: integration.name,
        category: integration.category as IntegCategory,
        featured: integration.featured,
        order: integration.order,
        docUrl: integration.docUrl,
      },
      create: {
        name: integration.name,
        slug: integration.slug,
        category: integration.category as IntegCategory,
        featured: integration.featured,
        order: integration.order,
        docUrl: integration.docUrl,
      },
    });
  }

  const jobs = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build the data control layer platform with Next.js, TypeScript, and distributed systems.",
      requirements: ["5+ years TypeScript", "React/Next.js expertise", "Data platform experience"],
      applyUrl: "mailto:careers@qualytics.ai",
    },
    {
      title: "Enterprise Account Executive",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      description: "Drive enterprise adoption of Qualytics among Fortune 2000 data teams.",
      requirements: ["Enterprise SaaS sales", "Data/analytics domain knowledge"],
      applyUrl: "mailto:careers@qualytics.ai",
    },
    {
      title: "Data Quality Solutions Architect",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help customers operationalize trusted data at scale with Qualytics.",
      requirements: ["Data quality/governance background", "Customer-facing technical role"],
      applyUrl: "mailto:careers@qualytics.ai",
    },
  ];

  for (const job of jobs) {
    const existing = await prisma.jobPosting.findFirst({ where: { title: job.title } });
    if (!existing) {
      await prisma.jobPosting.create({ data: job });
    }
  }

  console.log(`Seeded ${INTEGRATIONS_CATALOG.length} integrations and ${jobs.length} job postings`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
