import { getAllTasks } from '@/lib/tasks';
import Link from 'next/link';

export default async function RecentPanel() {
  const tasks = getAllTasks().slice(0, 3);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold text-gray-400 mb-1">Recent Tasks</p>
      {tasks.map((task) => (
        <Link
          key={task.id}
          href={`/tasks/${task.slug}`}
          className="bg-slate-800 hover:bg-indigo-700 rounded-lg px-3 py-2 text-sm flex justify-between"
        >
          <span
            className={task.is_completed ? 'line-through text-gray-500' : ''}
          >
            {task.title}
          </span>
          <span
            className={`text-xs px-1 rounded ${
              task.priority === 'High'
                ? 'text-red-400'
                : task.priority === 'Medium'
                  ? 'text-yellow-400'
                  : 'text-gray-400'
            }`}
          >
            {task.priority}
          </span>
        </Link>
      ))}
    </div>
  );
}
