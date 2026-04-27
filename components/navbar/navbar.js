import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-end gap-4 bg-orange-900 px-6 py-4 text-2xl">
      <Link href="/" className="hover:text-gray-400">
        Dashboard
      </Link>

      <Link href="/tasks" className="hover:text-gray-400">
        Tasks
      </Link>
    </nav>
  );
}
