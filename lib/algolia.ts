import { algoliasearch } from "algoliasearch";
import { getAllResources } from "@/lib/content";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME || "qualytics_resources";

export async function searchResources(query: string) {
  if (appId && apiKey) {
    try {
      const client = algoliasearch(appId, apiKey);
      const { hits, nbHits } = await client.searchSingleIndex({
        indexName,
        searchParams: { query, hitsPerPage: 20 },
      });
      return { hits, nbHits };
    } catch {
      /* fallback */
    }
  }

  const q = query.toLowerCase();
  const resources = await getAllResources();
  const hits = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.excerpt.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q)
  );

  return { hits, nbHits: hits.length };
}
