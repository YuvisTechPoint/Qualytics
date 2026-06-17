import "dotenv/config";
import { defineConfig } from "prisma/config";

// Fallback allows `prisma generate` on Vercel before env vars are configured.
const databaseUrl =
  process.env.DATABASE_URL ??
  "postgresql://postgres:postgres@localhost:5432/postgres";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});
