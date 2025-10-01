'use client';
import { useEffect } from 'react';
export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function handleMousedown() { document.body.classList.add('using-mouse'); }
    function handleKeydown(e: KeyboardEvent) { if (e.key === 'Tab') document.body.classList.remove('using-mouse'); }
    window.addEventListener('mousedown', handleMousedown);
    window.addEventListener('keydown', handleKeydown);
    return () => { window.removeEventListener('mousedown', handleMousedown); window.removeEventListener('keydown', handleKeydown); };
  }, []);
  return <>{children}</>;
}