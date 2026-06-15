'use client';
import { useEffect } from 'react';

export default function TasksError({ error, reset }) {
  useEffect(() => {
    console.error('Tasks page error: ', error);
  }, [error]);

  return (
    <main>
      <h2 className="text-2xl font-bold text-red-400 mb-2">
        Something went wrong
      </h2>
      <p className="text-slate-400 mb-4">
        {error.message || 'An unexpected error occurred.'}
      </p>{' '}
      <button
        onClick={reset}
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium"
      >
        Try Again
      </button>
    </main>
  );
}
