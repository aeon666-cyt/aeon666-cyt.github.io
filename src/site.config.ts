// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.

export const SITE = {
  name: 'Yuntong Chen',

  role: 'PhD Student in Mechanical Engineering',

  email: 'aeon9125@gmail.com',

  tagline:
    'Data-driven intelligence for manufacturing — from industrial data governance to AI-powered discovery.',

  description:
    'PhD candidate in Mechanical Engineering at Northwestern Polytechnical University, researching enterprise data governance, LLM-based agents, and their applications in fault diagnosis, process planning, and beyond.',

  status:
    'INTRODUCTION',

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
