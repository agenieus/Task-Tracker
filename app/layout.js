import NavBar from '@/components/navbar/navbar';
import './globals.css';

export const metadata = {
  title: 'Task Navigator',
  description: 'Manage your tasks',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-amber-950 text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
