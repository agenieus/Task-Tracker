export default function TasksLoading() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <div className="h-8 w-32 bg-slate-800 rounded animate-pulse mb-4" />
      <div className="h-4 w-24 bg-slate-800 rounded animate-pulse mb-6" />
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="border-2 border-slate-700 rounded-2xl px-4 py-4 mb-4 animate-pulse"
        >
          <div className="h-6 bg-slate-800 rounded w-3/4 mb-3" />
          <div className="h-3 bg-slate-800 rounded w-1/4 mb-2" />
          <div className="h-3 bg-slate-800 rounded w-1/2" />
        </div>
      ))}
    </main>
  );
}
