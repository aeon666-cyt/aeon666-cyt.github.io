// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.

export const SITE = {
  name: 'Yuntong Chen',

  role: 'PhD Student in Mechanical Engineering',

  email: 'aeon9125@gmail.com',

  tagline:
    'Research on AI and big data for intelligent manufacturing.',

  description:
    'Academic portfolio of Yuntong Chen, a PhD student in Mechanical Engineering at Northwestern Polytechnical University. His research focuses on big data analytics, artificial intelligence, large language models, intelligent agents, and industrial digital transformation.',

  status:
    'Introduction',

  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/aeon666-cyt',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=uozho7EAAAAJ&hl=zh-CN',
    },
    {
      label: 'ORCID',
      href: 'https://orcid.org/0009-0001-5050-5395',
    },
  ],

  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Education', href: '/#education' },
  { label: 'Publications', href: '/work' },
] as const;
