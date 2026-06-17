import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const TYPE_PATHS: Record<string, string[]> = {
  blogPost: ["/resources/blog", "/"],
  inlineArticle: ["/resources", "/"],
  guide: ["/resources/guides"],
  webinar: ["/resources/webinars-and-events"],
  customerStory: ["/resources/customer-stories"],
  companyNews: ["/resources/company-news"],
  productNews: ["/resources/product-news"],
};

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-sanity-webhook-secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const paths = new Set<string>(["/resources", "/"]);

  const typePaths = TYPE_PATHS[body._type] || [];
  typePaths.forEach((p) => paths.add(p));

  if (body.slug?.current) {
    const slug = body.slug.current as string;
    if (body._type === "blogPost") paths.add(`/resources/blog/${slug}`);
    if (body._type === "inlineArticle") paths.add(`/resources/in/${slug}`);
    if (body._type === "guide") paths.add(`/resources/guides/${slug}`);
    if (body._type === "webinar") paths.add(`/resources/webinars-and-events/${slug}`);
    if (body._type === "customerStory") paths.add(`/resources/customer-stories/${slug}`);
  }

  Array.from(paths).forEach((path) => revalidatePath(path));

  return NextResponse.json({ revalidated: true, paths: Array.from(paths) });
}
