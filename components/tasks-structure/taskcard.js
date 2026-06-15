import { deleteTask, toggleTask } from '@/lib/actions';
import Link from 'next/link';

export default function TaskCard({ task }) {
  const toggleWithId = toggleTask.bind(null, task.id);
  const deleteWithId = deleteTask.bind(null, task.id);

  return (
    <div className="border-2 border-slate-700 rounded-2xl px-4 py-2 mb-4">
      <h2
        className={`text-[26px] font-semibold ${task.is_completed ? 'line-through text-slate-500' : ''}`}
      >
        {task.title}
      </h2>
      <span
        className={`inline-block text-xs font-medium px-2 py-1 rounded-full mt-1 ${
          task.priority === 'High'
            ? 'bg-red-100 text-red-700'
            : task.priority === 'Medium'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-gray-100 text-gray-700'
        }`}
      >
        {task.priority} Priority
      </span>
      <p className="mt-1">
        Status: {task.is_completed ? 'Completed' : 'Pending'}
      </p>

      <div className="flex gap-3 mt-2">
        <form action={toggleWithId}>
          <button
            type="submit"
            className="text-xs bg-slate-700 rounded-[10px] p-1 hover:bg-slate-800"
          >
            Toggle Status
          </button>
        </form>
        <form action={deleteWithId}>
          <button
            type="submit"
            className="text-xs bg-red-800 rounded-[10px] p-1 hover:bg-red-900"
          >
            Delete
          </button>
        </form>
        <Link href={`/tasks/${task.slug}`}>
          <span className="text-xs bg-slate-600 rounded-[10px] p-1 hover:bg-slate-500 cursor-pointer">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
}
