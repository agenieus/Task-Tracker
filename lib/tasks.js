import db from './db';

export function getAllTasks() {
  return db.prepare('SELECT * FROM tasks ORDER BY id ASC').all();
}

export function getTaskBySlug(slug) {
  return db.prepare('SELECT * FROM tasks WHERE slug = ?').get(slug);
}

export function getTaskById(id) {
  return db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
}

export function getTaskStats() {
  const total = db.prepare('SELECT COUNT(*) as count FROM tasks').get();
  const completed = db
    .prepare('SELECT COUNT(*) as count FROM tasks WHERE is_completed = 1')
    .get();
  const high = db
    .prepare("SELECT COUNT(*) as count FROM tasks WHERE priority = 'HIGH'")
    .get();
  return {
    total: total.count,
    completed: completed.count,
    pending: total.count - completed.count,
    highPriority: high.count,
  };
}
