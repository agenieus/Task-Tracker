import { Suspense } from 'react';
import RecentPanel from './@recenttasks/page';
import StatsPanel from './@stats/page';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Dashboard',
  description: 'Tasks overview',
};

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-400 mb-8">Welcome to Task Navigator!</p>
      <div className="flex flex-col gap-8">
        <section>
          <h2>Overview</h2>
          <Suspense
            fallback={<p className="text-gray-400 text-sm">Loading stats...</p>}
          >
            <StatsPanel />
          </Suspense>
        </section>
        <section>
          <h2>Recent Tasks</h2>
          <Suspense
            fallback={<p className="text-gray-400 text-sm">Loading stats...</p>}
          >
            <RecentPanel />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
