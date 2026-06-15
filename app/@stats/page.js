import { getTaskStats } from '@/lib/tasks';

export default async function StatsPanel() {
  const stats = getTaskStats();
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-slate-800 rounded-xl p-4">
        <p className="text-xs text-gray-400">Total</p>
        <p className="text-3xl font-bold">{stats.total}</p>
      </div>
      <div className="bg-slate-800 rounded-xl p-4">
        <p className="text-xs text-gray-400">Completed</p>
        <p className="text-3xl font-bold">{stats.completed}</p>
      </div>
      <div className="bg-slate-800 rounded-xl p-4">
        <p className="text-xs text-gray-400">Pending</p>
        <p className="text-3xl font-bold">{stats.pending}</p>
      </div>
      <div className="bg-slate-800 rounded-xl p-4">
        <p className="text-xs text-gray-400">High Priority</p>
        <p className="text-3xl font-bold">{stats.highPriority}</p>
      </div>
    </div>
  );
}
