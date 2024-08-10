import { sql } from 'drizzle-orm';
import { boolean, date, index, pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['ACTIVE', 'INACTIVE']);

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    firstName: varchar('first_name'),
    lastName: varchar('last_name'),
    status: statusEnum('status').default("ACTIVE"),
    bio: text('last_name'),
    dob: date('dob'),
    email: varchar('email').notNull().unique(),
    phone: varchar('phone').default(null),
    password: text('password').notNull(),
    isPrivate: boolean('isPrivate').default(false).notNull(),
    address: varchar('address').default(null),
    state: varchar('state').notNull(),
    city: varchar('city').default(null),
    country: varchar('country').default(null),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table: any) => {
    return {
        statusIdx: index("status_idx").on(table.status),
        email: index("email_idx").on(table.email)
    };
});
