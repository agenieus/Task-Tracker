import Link from 'next/link';

export default function TaskCard({ task, onToggle }) {
  return (
    <div className="border-2 rounded-2xl px-4 py-2 mb-4">
      <h2
        className={`text-[26px] font-semibold1 ${task.isCompleted ? 'line-through' : ''}`}
      >
        {task.title}
      </h2>
      <span
        className={`inline-block text-xs font-medium px-2 py-1 rounded-full mt-1 ${task.priority === 'High' ? 'bg-red-100 text-red-700' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}
      >
        {task.priority} Priority
      </span>
      <p className="mt-1">
        Status: {task.isCompleted ? 'Completed' : 'Pending'}
      </p>

      <div className="flex gap-3 mt-2">
        <button
          className="text-xs bg-amber-800 rounded-[10px] p-1 hover:bg-amber-900"
          onClick={() => onToggle(task.id)}
        >
          Toggle Status
        </button>
        <Link href={`/tasks/${task.id}`}>
          <p className="text-xs bg-gray-600 rounded-[10px] p-1 hover:bg-gray-700">
            View Details
          </p>
        </Link>
      </div>
    </div>
  );
}
