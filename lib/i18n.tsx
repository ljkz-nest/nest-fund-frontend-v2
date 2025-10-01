'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';

type Locale = 'en' | 'ja';
const dict = {
  en: {
    brand: 'Nest Fund',
    nav: { opportunities: 'Opportunities', how: 'How It Works', impact: 'Our Impact', about: 'About Us', login: 'Log In', signup: 'Sign Up' },
    hero: { title: 'Invest in Homes, Empower Families.', subtitle: 'Earn competitive returns while making a tangible difference.', cta: 'Explore Investments' },
  },
  ja: {
    brand: 'Nest Fund',
    nav: { opportunities: '投資案件', how: '仕組み', impact: 'インパクト', about: '私たちについて', login: 'ログイン', signup: '登録' },
    hero: { title: '住まいに投資し、家族を支える。', subtitle: '社会的インパクトと収益の両立を。', cta: '投資案件を見る' },
  },
} as const;

type Dict = typeof dict.en;
type Ctx = { t: Dict; locale: Locale; setLocale: (l: Locale) => void } | null;

const I18nCtx = createContext<Ctx>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const t = useMemo(() => dict[locale], [locale]);
  return <I18nCtx.Provider value={{ t, locale, setLocale }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) return { t: dict.en, locale: 'en' as Locale, setLocale: () => {} };
  return ctx;
}
