import LoginForm from '@/components/login-form';
import { Suspense } from 'react';

export const metadata = {
  title: 'Login',
  description: 'Log in to Task Navigator',
};

export default function LoginPage() {
  return (
    <Suspense
      fallback={<p className="text-slate-400 text-center mt-16">Loading...</p>}
    >
      <LoginForm />
    </Suspense>
  );
}
