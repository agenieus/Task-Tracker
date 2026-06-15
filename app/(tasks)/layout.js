import Link from 'next/link';

export const metadata = {
  title: 'Task Navigator',
  description: 'Manage your tasks',
};

export default function TasksLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-48 bg-slate-900 border-r border-slate-700 p-4 flex flex-col gap-3 pt-8">
        <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
          Tasks
        </p>
        <Link href="/tasks" className="text-sm hover:text-indigo-400">
          All Tasks
        </Link>
        <Link href="/tasks/new" className="text-sm hover:text-indigo-400">
          New Task
        </Link>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
