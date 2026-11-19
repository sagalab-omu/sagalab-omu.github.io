export type Lang = 'ja' | 'en';

export const languages: Record<Lang, string> = {
  ja: '日本語',
  en: 'English',
};

export const defaultLang: Lang = 'ja';

export const ui = {
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.members': 'メンバー紹介',
    'nav.news': 'ニュース',
    'nav.international': '留学生向け',
    'nav.contact': '問い合わせ',
    'nav.achieves': '研究業績',

    // Footer
    'footer.members': 'メンバー',
    'footer.graduates': '卒業生',
    'footer.newsList': '一覧',
    'footer.guidelinesJP': '募集要項',
    'footer.guidelinesEN': 'Application Guidelines',
    'footer.place': '場所',
    'footer.email': 'Email',

    // Language switch
    'lang.switchLabel': 'EN',
    'lang.switchAria': 'Switch to English',

    // Metadata
    'meta.titleTemplate':
      '%s — DSE Lab | 大阪公立大学 OMU | Data & System Engineering Laboratory | 佐賀研究室 Sagalab',
    'meta.siteName': 'DSE Lab | 大阪公立大学 OMU | Data & System Engineering Laboratory | 佐賀研究室 Sagalab',
    'meta.defaultTitle': 'DSE Lab Data & System Engineering Laboratory | 佐賀研究室 Sagalab',

    // Home
    'home.metaTitle': 'DSE Lab | 大阪公立大学 佐賀研究室',
    'home.learnMore': 'Learn more',
    'home.heroTitle': 'データ&システム工学研究室',
    'home.heroSubtitle':
      '私たちは大阪公立大学 情報学研究科 学際情報学専攻 に所属する研究室です。<br>最適化や機械学習を用いた研究を行っています。',
    'home.latestNews': '📢最近のニュース',
    'home.ctaButton': '問い合わせ',
    'home.ctaTitle': 'メンバー募集',
    'home.ctaSubtitle': 'これらの分野に興味がある方は、ぜひご連絡ください。',

    // Research areas
    'research.title': '研究分野',
    'research.subtitle': '私たちの多様な研究は、複数の分野と技術にまたがっています。',

    // Members
    'members.title': 'チームメンバー',
    'members.subtitle': '私たちの研究室は、国際的なメンバーで構成されています。',
    'graduates.title': '卒業生',
    'graduates.subtitle': '私たちの研究室を卒業したメンバー一覧です。',
    'graduates.year': '{year}年度',

    // Contact
    'contact.title': 'お問い合わせ先',
    'contact.place': '場所',
    'contact.address': '〒599-8531 大阪府堺市中区学園町1番1号<br>(学内: C4棟3階)',

    // Achieves
    'achieves.title': '研究業績',

    // International students
    'intl.title': '留学生向け要綱',
    'intl.subtitle': '留学生向けの情報を提供します。',

    // Blog
    'blog.title': 'ニュース',
    'blog.subtitle': '佐賀研究室での研究や活動に関する最新情報をお届けします',
    'blog.viewAll': 'View all posts',
    'blog.related': '関連投稿',
    'blog.toList': '一覧へ',
    'blog.backToNews': 'Back to News',
    'blog.share': 'Share:',
    'blog.minRead': 'min read',
    'blog.newer': 'Newer posts',
    'blog.older': 'Older posts',
    'blog.page': 'Page',
    'blog.categoryTitle': "Category '{title}'",
    'blog.tagTitle': "Posts by tag '{title}'",
    'blog.tagHeadline': 'Tag: {title}',
  },
  en: {
    'nav.home': 'Home',
    'nav.members': 'Members',
    'nav.news': 'News',
    'nav.international': 'International Students',
    'nav.contact': 'Contact',
    'nav.achieves': 'Publications',

    'footer.members': 'Members',
    'footer.graduates': 'Graduates',
    'footer.newsList': 'All News',
    'footer.guidelinesJP': 'Application Guidelines',
    'footer.guidelinesEN': 'Application Guidelines',
    'footer.place': 'Location',
    'footer.email': 'Email',

    'lang.switchLabel': '日本語',
    'lang.switchAria': '日本語に切り替える',

    'meta.titleTemplate': '%s — DSE Lab | Osaka Metropolitan University | Data & System Engineering Laboratory',
    'meta.siteName': 'DSE Lab | Osaka Metropolitan University | Data & System Engineering Laboratory',
    'meta.defaultTitle': 'DSE Lab | Data & System Engineering Laboratory',

    'home.metaTitle': 'DSE Lab | Data & System Engineering Laboratory, Osaka Metropolitan University',
    'home.learnMore': 'Learn more',
    'home.heroTitle': 'Data & System Engineering Laboratory',
    'home.heroSubtitle':
      'We are a laboratory in the Department of Interdisciplinary Informatics, Graduate School of Informatics, Osaka Metropolitan University.<br>Our research applies optimization and machine learning.',
    'home.latestNews': '📢Latest News',
    'home.ctaButton': 'Contact Us',
    'home.ctaTitle': 'Join Our Lab',
    'home.ctaSubtitle': 'If you are interested in any of these fields, please get in touch.',

    'research.title': 'Research Areas',
    'research.subtitle': 'Our research spans a wide range of fields and techniques.',

    'members.title': 'Team Members',
    'members.subtitle': 'Our laboratory brings together members from around the world.',
    'graduates.title': 'Graduates',
    'graduates.subtitle': 'Members who have graduated from our laboratory.',
    'graduates.year': 'AY {year}',

    'contact.title': 'Contact',
    'contact.place': 'Location',
    'contact.address':
      '1-1 Gakuen-cho, Naka-ku, Sakai, Osaka 599-8531, Japan<br>(Building C4, 3rd floor)',

    'achieves.title': 'Publications',

    'intl.title': 'Guidelines for International Students',
    'intl.subtitle': 'Information for prospective international students.',

    'blog.title': 'News',
    'blog.subtitle': 'The latest updates on research and activities at the Saga Laboratory.',
    'blog.viewAll': 'View all posts',
    'blog.related': 'Related Posts',
    'blog.toList': 'View all',
    'blog.backToNews': 'Back to News',
    'blog.share': 'Share:',
    'blog.minRead': 'min read',
    'blog.newer': 'Newer posts',
    'blog.older': 'Older posts',
    'blog.page': 'Page',
    'blog.categoryTitle': "Category '{title}'",
    'blog.tagTitle': "Posts by tag '{title}'",
    'blog.tagHeadline': 'Tag: {title}',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

/** Returns 'en' when the path is /en or starts with /en/, otherwise 'ja'. */
export const getLangFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLang;

export const getLangFromUrl = (url: URL): Lang => getLangFromPath(url.pathname);

export const useTranslations = (lang: Lang) =>
  function t(key: UIKey, vars?: Record<string, string | number>): string {
    let text: string = (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
    if (vars) {
      for (const [name, value] of Object.entries(vars)) {
        text = text.replaceAll(`{${name}}`, String(value));
      }
    }
    return text;
  };

const isExternal = (path: string) =>
  path.startsWith('http://') ||
  path.startsWith('https://') ||
  path.startsWith('//') ||
  path.startsWith('#') ||
  path.startsWith('mailto:');

/** Strips a leading /en prefix: '/en' -> '/', '/en/members' -> '/members'. */
const stripLangPrefix = (path: string): string => {
  if (path === '/en') return '/';
  if (path.startsWith('/en/') || path.startsWith('/en#') || path.startsWith('/en?')) {
    const rest = path.slice(3);
    return rest.startsWith('/') ? rest : '/' + rest;
  }
  return path;
};

/**
 * Adds or removes the /en prefix so that `path` points to the `lang` version.
 * External URLs, in-page anchors and mailto: links are returned unchanged.
 */
export const localizePath = (path: string, lang: Lang): string => {
  if (!path || isExternal(path)) return path;
  if (!path.startsWith('/')) return path;

  const base = stripLangPrefix(path);
  if (lang === defaultLang) return base;

  // '/' -> '/en', '/#x' -> '/en#x', '/members#graduates' -> '/en/members#graduates'
  if (base === '/') return '/en';
  if (base.startsWith('/#') || base.startsWith('/?')) return '/en' + base.slice(1);
  return '/en' + base;
};

const isTagPath = (pathname: string) => /^\/(en\/)?tag(\/|$)/.test(pathname);

/** Path of the current page in the other language. */
export const getAlternatePath = (url: URL): string => {
  const pathname = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
  const lang = getLangFromPath(pathname);
  const other: Lang = lang === 'en' ? 'ja' : 'en';

  // Tag slugs differ between languages, so fall back to the news list.
  if (isTagPath(pathname)) return localizePath('/blog', other);

  return localizePath(pathname, other);
};

/** Path of the current page in the given language (used for hreflang). */
export const getPathForLang = (url: URL, lang: Lang): string => {
  const pathname = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
  if (getLangFromPath(pathname) === lang) return pathname;
  return getAlternatePath(url);
};

export { isTagPath };

const dateFormatters: Record<Lang, Intl.DateTimeFormat> = {
  ja: new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }),
  en: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }),
};

export const getFormattedDate = (date: Date, lang: Lang = defaultLang): string =>
  date ? dateFormatters[lang].format(date) : '';
