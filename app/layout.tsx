import type { ReactNode } from 'react';

import './globals.css';
import { I18nProvider } from '@/lib/i18n';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
