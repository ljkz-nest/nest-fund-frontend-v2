'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';

type Locale = 'en' | 'ja';

/** すべての文言は string として扱う */
interface BaseDict {
  brand: string;
  nav: {
    opportunities: string;
    how: string;
    impact: string;
    about: string;
    login: string;
    signup: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

/** 各言語の辞書（値は自由な string、型は BaseDict でそろえる） */
const DICTS: Record<Locale, BaseDict> = {
  en: {
    brand: 'Nest Fund',
    nav: {
      opportunities: 'Opportunities',
      how: 'How It Works',
      impact: 'Our Impact',
      about: 'About Us',
      login: 'Log In',
      signup: 'Sign Up',
    },
    hero: {
      title: 'Invest in Homes, Empower Families.',
      subtitle: 'Earn competitive returns while making a tangible difference.',
      cta: 'Explore Investments',
    },
  },
  ja: {
    brand: 'Nest Fund',
    nav: {
      opportunities: '投資案件',
      how: '仕組み',
      impact: 'インパクト',
      about: '私たちについて',
      login: 'ログイン',
      signup: '登録',
    },
    hero: {
      title: '住まいに投資し、家族を支える。',
      subtitle: '社会的インパクトと収益の両立を。',
      cta: '投資案件を見る',
    },
  },
};

type Ctx = { t: BaseDict; locale: Locale; setLocale: (l: Locale) => void } | null;
const I18nCtx = createContext<Ctx>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  // t を BaseDict として明示
  const t = useMemo<BaseDict>(() => DICTS[locale], [locale]);
  return <I18nCtx.Provider value={{ t, locale, setLocale }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  // Provider 未到達でも落ちないフェールセーフ
  if (!ctx) return { t: DICTS.en, locale: 'en' as Locale, setLocale: () => {} };
  return ctx;
}
