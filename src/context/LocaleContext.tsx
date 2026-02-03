import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import type { Content } from '@/content/types';
import { contentEn } from '@/content/en';
import { contentFr } from '@/content/fr';

export type Locale = 'en' | 'fr';

// Empty when serving from custom domain root (www.cec-uottawa.ca).
const BASENAME = '';

const contentByLocale: Record<Locale, Content> = {
  en: contentEn,
  fr: contentFr,
};

function getLocaleFromPathname(pathname: string): Locale {
  const path = pathname.replace(BASENAME, '').replace(/\/$/, '') || '/';
  return path === '/fr' || path.startsWith('/fr/') ? 'fr' : 'en';
}

type LocaleContextValue = {
  locale: Locale;
  /** Path prefix for the current locale (e.g. '' for en, '/fr' for fr) for use with basename */
  localePath: string;
  /** Content for the active locale */
  content: Content;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const value = useMemo(() => {
    const locale = getLocaleFromPathname(pathname);
    const localePath = locale === 'fr' ? '/fr' : '';
    const content = contentByLocale[locale];
    return { locale, localePath, content };
  }, [pathname]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
