'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/tasks';

  function handleLogin() {
    document.cookie = 'isLoggedIn=true; path=/; max-age=86400';
    router.push(redirect);
  }

  function handleLogout() {
    document.cookie = 'isLoggedIn=; path=/; max-age=0';
    router.refresh();
  }

  return (
    <main className="p-8 max-w-sm mx-auto text-center mt-16">
      <h1 className="text-2xl font-bold mb-2">Login</h1>
      <p className="text-slate-400 text-sm mb-6">
        This is a simulated login. In a real app you would use NextAuth.js.
      </p>
      <button
        onClick={handleLogin}
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-medium mb-3"
      >
        Log In (Simulated)
      </button>
      <button
        onClick={handleLogout}
        className="w-full bg-slate-700 hover:bg-slate-600 py-2 rounded-lg font-medium text-sm"
      >
        Clear Login Cookie
      </button>
    </main>
  );
}
