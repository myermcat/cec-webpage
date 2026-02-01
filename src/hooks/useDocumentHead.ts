import { useEffect } from 'react';
import type { Content } from '@/content/types';
import type { Locale } from '@/context/LocaleContext';

export function useDocumentHead(content: Content, locale: Locale) {
  useEffect(() => {
    document.documentElement.lang = locale;
    const { meta } = content.ui;
    document.title = meta.title;

    const setMeta = (name: string, contentAttr: string, value: string) => {
      let el = document.querySelector(`meta[${name}="${contentAttr}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(name, contentAttr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'description', meta.description);
    setMeta('name', 'keywords', meta.keywords);
    setMeta('property', 'og:title', meta.ogTitle);
    setMeta('property', 'og:description', meta.ogDescription);
  }, [content, locale]);
}
