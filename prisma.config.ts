import "dotenv/config";

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Commands that connect to the database will require DATABASE_URL.
    url: process.env.DATABASE_URL ?? "",
  },
});
