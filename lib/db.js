import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'tasks.db');
const db = new Database(dbPath);

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

export default db;
