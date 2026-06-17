import { prisma } from "@/lib/db";
import { INTEGRATIONS_CATALOG, type IntegrationItem } from "@/lib/integrations-data";

export async function getIntegrations(): Promise<IntegrationItem[]> {
  try {
    const rows = await prisma.integration.findMany({ orderBy: { order: "asc" } });
    if (rows.length > 0) {
      return rows.map((r) => ({
        name: r.name,
        slug: r.slug,
        category: r.category as IntegrationItem["category"],
        featured: r.featured,
        order: r.order,
        docUrl: r.docUrl ?? undefined,
      }));
    }
  } catch {
    /* fallback */
  }
  return INTEGRATIONS_CATALOG;
}
