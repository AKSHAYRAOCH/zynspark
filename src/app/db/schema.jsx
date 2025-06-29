import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const contactUs = pgTable("contactUs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull()
});

