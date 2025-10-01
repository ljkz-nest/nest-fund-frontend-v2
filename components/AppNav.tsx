'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Route } from 'next';

type NavItem = { href: Route; label: string };

const items: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/opportunities', label: 'Browse Opportunities' },
  { href: '/fx-hedge', label: 'FX Hedge' },
  { href: '/settings', label: 'Account Settings' },
];

export default function AppNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="App" className="border-b bg-white">
      <div className="container mx-auto px-6">
        <ul className="flex flex-wrap gap-4 py-3 text-sm">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={
                    'px-3 py-2 rounded-lg ' +
                    (active ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100')
                  }
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}