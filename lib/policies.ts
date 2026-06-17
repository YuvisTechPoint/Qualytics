import fs from "fs/promises";
import path from "path";

export async function getPolicyContent(slug: "tos" | "privacy") {
  const filePath = path.join(process.cwd(), "content", "policies", `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}
