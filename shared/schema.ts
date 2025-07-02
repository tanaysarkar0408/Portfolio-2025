import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { z } from 'zod'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const contactMessages = pgTable('contact_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const insertContactMessageSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

export type User = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert
export type ContactMessage = typeof contactMessages.$inferSelect
export type InsertContactMessage = typeof contactMessages.$inferInsert
