import { defineConfig } from "drizzle-kit";

export default defineConfig({
   schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: "0e7ad712-9543-45db-8c5f-d01fdae4db28",
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});