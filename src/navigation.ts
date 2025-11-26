import { link } from 'node:fs';
import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'ホーム',
      href: getHomePermalink(),
    },
    {
      text: 'メンバー紹介',
      href: getPermalink('/members'),
    },
    {
      text: 'ニュース',
      href: getBlogPermalink(),
    },
    {
      text: '留学生向け',
      href: getPermalink('/for-international-students'),
    },
    {
      text: '問い合わせ',
      href: getPermalink('/contact'),
    },
    {
      text: '研究業績',
      href: getPermalink('/achieves'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'メンバー紹介',
      links: [
        { text: '一覧', href: '/members' },
      ],
    },
    {
      title: 'ニュース',
      links: [
        { text: '一覧', href: '/blog' },
      ],
    },
    {
      title: '留学生向け',
      links: [
        { text: '募集要項', href: '/for-international-students#jp' },
        { text: 'Application Guidelines', href: '/for-international-students#en' },
      ],
    },
    {
      title: '問い合わせ',
      links: [
        { text: '場所', href: '/contact#place' },
        { text: 'Email', href:'/contact#email' },
      ],
    },
    {
      title: '研究業績',
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
      © 2025 Saga Laboratory — Built with <a href="https://github.com/arthelokyo/astrowind" class="underline">AstroWind</a> (MIT License)
    </p>
  `,
};
