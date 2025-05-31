import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const venues = pgTable("venues", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  description: text("description"),
  capacity: integer("capacity"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  venueId: integer("venue_id").references(() => venues.id),
  venueName: text("venue_name").notNull(),
  dateTime: timestamp("date_time").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
  category: text("category").notNull(), // 'theater', 'concert', 'sports', 'jazz', etc.
  imageUrl: text("image_url"),
  isFeatured: boolean("is_featured").default(false),
  isHotTicket: boolean("is_hot_ticket").default(false),
  isTonight: boolean("is_tonight").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const deals = pgTable("deals", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  isActive: boolean("is_active").default(true),
  validUntil: timestamp("valid_until"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const insertVenueSchema = createInsertSchema(venues).pick({
  name: true,
  location: true,
  description: true,
  capacity: true,
  imageUrl: true,
});

export const insertEventSchema = createInsertSchema(events).pick({
  name: true,
  description: true,
  venueId: true,
  venueName: true,
  dateTime: true,
  price: true,
  originalPrice: true,
  category: true,
  imageUrl: true,
  isFeatured: true,
  isHotTicket: true,
  isTonight: true,
});

export const insertDealSchema = createInsertSchema(deals).pick({
  title: true,
  description: true,
  isActive: true,
  validUntil: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertVenue = z.infer<typeof insertVenueSchema>;
export type Venue = typeof venues.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertDeal = z.infer<typeof insertDealSchema>;
export type Deal = typeof deals.$inferSelect;
