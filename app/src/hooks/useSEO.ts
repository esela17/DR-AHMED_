import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  lang?: 'ar' | 'en';
  image?: string;
  path?: string;
}

const BASE_URL = 'https://dr-ahmedmehalhel.com';
const DEFAULT_IMAGE = `${BASE_URL}/images/doctor-portrait.png`;

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('="');
    el.setAttribute(attrName, attrVal.replace('"', ''));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function useSEO({ title, description, keywords, lang = 'ar', image, path }: SEOProps) {
  useEffect(() => {
    const ogImage = image || DEFAULT_IMAGE;
    const canonicalUrl = path
      ? `${BASE_URL}${path}`
      : (window.location.origin + window.location.pathname).replace(/\/$/, '');

    // 1. Title
    document.title = title;

    // 2. Meta Description
    setMeta('meta[name="description"]', 'content', description);

    // 3. Keywords
    if (keywords) {
      setMeta('meta[name="keywords"]', 'content', keywords);
    }

    // 4. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 5. Open Graph tags
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]', 'content', '630');
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:site_name"]', 'content', 'أ.د. أحمد مهلهل | طب وجراحة العيون');
    setMeta('meta[property="og:locale"]', 'content', lang === 'ar' ? 'ar_EG' : 'en_US');

    // 6. Twitter Card tags
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);

    // 7. HTML lang & dir
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  }, [title, description, keywords, lang, image, path]);
}


