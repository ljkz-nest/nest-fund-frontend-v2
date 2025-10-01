
'use client';
import NavBar from '@/components/NavBar';
import AppNav from '@/components/AppNav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <NavBar />
      <AppNav />
      <main id="main" className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
