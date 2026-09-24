import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  resolveSeo,
  softwareJsonLd,
  websiteJsonLd,
} from '../config/seo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Updates document title, meta, canonical, and JSON-LD on every route change. */
export default function RouteSeo() {
  const { pathname } = useLocation();
  const seo = resolveSeo(pathname);
  const url = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;
  const image = DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', seo.noindex ? 'noindex, nofollow' : 'index, follow');

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:locale', 'en_CA');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', image);

    upsertLink('canonical', url);

    upsertJsonLd('jsonld-organization', organizationJsonLd);
    upsertJsonLd('jsonld-website', websiteJsonLd);
    upsertJsonLd('jsonld-software', softwareJsonLd);
  }, [seo.title, seo.description, seo.noindex, seo.path, url, image]);

  return null;
}
