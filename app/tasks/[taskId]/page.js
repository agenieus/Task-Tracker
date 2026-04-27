import mockTasks from '@/lib/tasks';
import { notFound } from 'next/navigation';

export default async function TaskDetailsPage({ params }) {
  const { taskId } = await params;
  const task = mockTasks.find((t) => t.id === Number(taskId));

  if (!task) {
    notFound();
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <div className="mt-4 bg-amber-900 border border-gray-600 rounded-lg p-6">
        <h2 className="text-4xl font-bold text-gray-300">{task.title}</h2>
        <p className="text-2xl mt-2 text-gray-300 leading-relaxed">
          {task.description}
        </p>
        <span
          className={`inline-block text-xs font-medium px-2 py-1 rounded-full mt-2 ${
            task.priority === 'High'
              ? 'bg-red-100 text-red-700'
              : task.priority === 'Medium'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-gray-100 text-gray-700'
          }`}
        >
          {task.priority} Priority
        </span>
        <p className="text-2xl text-gray-300 mt-4 font-medium">
          Status:{' '}
          <span
            className={task.isCompleted ? 'text-green-600' : 'text-blue-600'}
          >
            {task.isCompleted ? 'Completed' : 'Pending'}
          </span>
        </p>
      </div>
    </main>
  );
}
