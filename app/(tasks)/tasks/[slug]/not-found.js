import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">Task Not Found</h1>
      <p className="text-gray-400 mb-6">
        The task you are looking for does not exist.
      </p>
      <Link
        href="/tasks"
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium"
      >
        Back to Tasks
      </Link>
    </main>
  );
}
