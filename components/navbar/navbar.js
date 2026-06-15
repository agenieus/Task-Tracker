import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-end gap-4 bg-slate-800 px-6 py-4 text-2xl">
      <Link href="/" className="hover:text-slate-400">
        Dashboard
      </Link>
      <Link href="/tasks" className="hover:text-slate-400">
        Tasks
      </Link>
      <Link href="/login" className="hover:text-slate-400 text-lg self-center">
        Login
      </Link>
    </nav>
  );
}
