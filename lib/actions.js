'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import db from './db';

// /**
//  * @param {string} title
//  */
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function sanitize(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export async function createTask(prevState, formData) {
  // console.log('ALL FORM DATA:', Object.fromEntries(formData));
  // console.log('RAW TITLE:', formData.get('title'));
  // console.log('RAW DESCRIPTION:', formData.get('description'));
  // console.log('PRIORITY:', formData.get('priority'));

  const rawTitle = formData.get('title');
  const rawDescription = formData.get('description');
  const priority = formData.get('priority');

  const errors = {};
  if (!rawTitle || rawTitle.trim().length < 3) {
    errors.title = 'Title must be at least 3 characters long.';
  }

  if (!rawDescription || rawDescription.trim().length < 5) {
    errors.description = 'Description must be at least 5 characters long.';
  }

  const VALID_PRIORITIES = ['High', 'Medium', 'Low'];
  if (!VALID_PRIORITIES.includes(priority)) {
    errors.priority = 'Please select a valid priority.';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const title = sanitize(rawTitle);
  const description = sanitize(rawDescription);
  const slug = generateSlug(title);

  const imageFile = formData.get('image');
  let imageUrl = null;

  if (imageFile && imageFile.size > 0) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const filename = `${Date.now()}-${imageFile.name.replace(/\s/g, '_')}`;
    const { writeFile, mkdir } = await import('fs/promises');
    const { join } = await import('path');
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });
    await writeFile(join(uploadDir, filename), buffer);
    imageUrl = `/uploads/${filename}`;
  }

  try {
    db.prepare(
      `
      INSERT INTO tasks(title, description, priority, is_completed, slug, image_url) VALUES (?, ?, ?, 0, ?, ?)
      `
    ).run(title, description, priority, slug, imageUrl);
  } catch (e) {
    // console.log('DATABASE ERROR:', e.message);
    if (e.message.includes('UNIQUE constraint failed')) {
      return { errors: { title: 'A task with this title already exists.' } };
    }
    return { errors: { general: 'Something went wrong. Please try again.' } };
  }

  revalidatePath('/tasks');
  revalidateTag('tasks');
  redirect('/tasks');
}

export async function toggleTask(id) {
  const task = db
    .prepare('SELECT is_completed FROM tasks where id = ?')
    .get(id);
  if (!task) return;
  db.prepare('UPDATE tasks SET is_completed = ? where id = ?').run(
    task.is_completed ? 0 : 1,
    id
  );
  revalidatePath('/tasks');
  revalidateTag('tasks');
}

export async function deleteTask(id) {
  db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
  revalidatePath('/tasks');
  revalidateTag('tasks');
}
