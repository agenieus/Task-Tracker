export default function CatchAllPage({ params }) {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-400">
        The path{' '}
        <code className="bg-slate-800 px-1 rounded">
          /tasks/{params.segments?.join('/')}
        </code>{' '}
        does not exist.
      </p>
    </main>
  );
}
