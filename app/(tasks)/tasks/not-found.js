import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <main className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-6xl font-bold text-indigo-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">404</h2>
      <p className="text-slate-400 mb-6">
        The task you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium"
      >
        Go Home
      </Link>
    </main>
  );
}
