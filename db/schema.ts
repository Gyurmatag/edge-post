import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
        id: integer('id').primaryKey(),
        name: text('name').notNull(),
    }
);

export const posts = sqliteTable('posts', {
        id: integer('id').primaryKey(),
        text: text('text').notNull(),
        userId: integer('user_id').notNull().references(() => users.id),
    }
);
