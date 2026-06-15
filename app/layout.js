import NavBar from '@/components/navbar/navbar';
import './globals.css';

export const metadata = {
  title: { default: 'Task Navigator', template: '%s' },
  description: 'Manage your tasks',
};

export default function RootLayout({ children, stats, recenttasks }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
