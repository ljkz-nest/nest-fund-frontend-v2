'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Nest Fund logo" width={32} height={32} priority />
          <span className="text-2xl font-bold text-gray-900">Nest Fund</span>
        </Link>
        <button className="md:hidden" aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <span className="sr-only">Toggle navigation</span>☰
        </button>
        <nav id="main-nav" aria-label="Primary" className={(open ? 'block' : 'hidden') + ' md:block'}>
          <ul className="md:flex items-center gap-6">
            <li><a href="#opportunities" className="text-gray-700 hover:text-brand-700">{t.nav.opportunities}</a></li>
            <li><a href="#how" className="text-gray-700 hover:text-brand-700">{t.nav.how}</a></li>
            <li><a href="#impact" className="text-gray-700 hover:text-brand-700">{t.nav.impact}</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-brand-700">{t.nav.about}</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <select aria-label="Language" value={locale} onChange={e => setLocale(e.target.value as any)} className="border rounded px-2 py-1 text-sm">
            <option value="en">EN</option>
            <option value="ja">日本語</option>
          </select>
          <Link href="/dashboard" className="hidden md:inline text-gray-700 hover:text-brand-700">{t.nav.login}</Link>
          <Link href="/dashboard" className="bg-brand-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-brand-700">{t.nav.signup}</Link>
        </div>
      </div>
    </header>
  );
}