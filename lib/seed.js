import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, '../tasks.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'Medium',
    is_completed INTEGER NOT NULL DEFAULT 0,
    slug TEXT UNIQUE,
    image_url TEXT
)
`);

const insert = db.prepare(`
  INSERT OR IGNORE INTO tasks (title, description, priority, is_completed, slug)
  VALUES (@title, @description, @priority, @is_completed, @slug)
`);

const tasks = [
  {
    title: 'Lay my bed',
    description: 'Lay my bed when I wake up',
    priority: 'Medium',
    is_completed: 1,
    slug: 'lay-my-bed',
  },
  {
    title: 'Build a Next.js app',
    description:
      'Create a multi-page task navigator using Next.js App Router, React hooks, and Tailwind CSS.',
    priority: 'High',
    is_completed: 0,
    slug: 'build-a-nextjs-app',
  },
  {
    title: 'Understand props',
    description:
      'Learn how to pass data and functions from parent components down to child components via props.',
    priority: 'Medium',
    is_completed: 0,
    slug: 'understand-props',
  },
  {
    title: 'Explore dynamic routing',
    description:
      'Use Next.js file-based dynamic routes with [id] folders to create individual detail pages.',
    priority: 'Low',
    is_completed: 0,
    slug: 'explore-dynamic-routing',
  },
];

for (const task of tasks) {
  insert.run(task);
}

console.log('Database seeded successfully');
db.close();
