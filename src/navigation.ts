import { link } from 'node:fs';
import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

import { localizePath, useTranslations, type Lang } from './i18n/ui';

export const getHeaderData = (lang: Lang = 'ja') => {
  const t = useTranslations(lang);
  return {
    links: [
      {
        text: t('nav.home'),
        href: localizePath(getHomePermalink(), lang),
      },
      {
        text: t('nav.members'),
        href: localizePath(getPermalink('/members'), lang),
      },
      {
        text: t('nav.news'),
        href: localizePath(getBlogPermalink(), lang),
      },
      {
        text: t('nav.international'),
        href: localizePath(getPermalink('/for-international-students'), lang),
      },
      {
        text: t('nav.contact'),
        href: localizePath(getPermalink('/contact'), lang),
      },
      {
        text: t('nav.achieves'),
        href: localizePath(getPermalink('/achieves'), lang),
      },
    ],
  };
};

export const getFooterData = (lang: Lang = 'ja') => {
  const t = useTranslations(lang);
  return {
    links: [
      {
        title: t('nav.members'),
        links: [
          { text: t('footer.members'), href: localizePath('/members#member', lang) },
          { text: t('footer.graduates'), href: localizePath('/members#graduates', lang) },
        ],
      },
      {
        title: t('nav.news'),
        links: [
          { text: t('footer.newsList'), href: localizePath('/blog', lang) },
        ],
      },
      {
        title: t('nav.international'),
        links:
          lang === 'en'
            ? [{ text: t('footer.guidelinesEN'), href: localizePath('/for-international-students#en', lang) }]
            : [
                { text: t('footer.guidelinesJP'), href: '/for-international-students#jp' },
                { text: t('footer.guidelinesEN'), href: '/for-international-students#en' },
              ],
      },
      {
        title: t('nav.contact'),
        links: [
          { text: t('footer.place'), href: localizePath('/contact#place', lang) },
          { text: t('footer.email'), href: localizePath('/contact#email', lang) },
        ],
      },
      {
        title: t('nav.achieves'),
        links: [
          { text: 'DBLP', href: 'https://dblp.org/pid/99/3812.html' },
          { text: 'Google Scholar', href: 'https://scholar.google.com/scholar?as_sdt=0%2C5&q=ryosuke+saga' },
          { text: 'ResearchMap', href: 'https://researchmap.jp/rsaga/published_papers' },
          { text: 'OMU', href: 'https://kyoiku-kenkyudb.omu.ac.jp/html/100002033_ja.html' },
        ],
      },
    ],
    /*
    secondaryLinks: [
      { text: 'Terms', href: getPermalink('/terms') },
      { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    */
    socialLinks: [
      /*{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },*/
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sagalab-omu/sagalab-omu.github.io' },
    ],
    footNote: `
      <p class="text-sm text-gray-500">
        © 2025 DSE Laboratory — Built with <a href="https://github.com/arthelokyo/astrowind" class="underline">AstroWind</a> (MIT License)
      </p>
    `,
  };
};

export const headerData = getHeaderData('ja');
export const footerData = getFooterData('ja');
