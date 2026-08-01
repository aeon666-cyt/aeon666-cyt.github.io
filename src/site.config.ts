// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.

export const SITE = {
  name: 'Yuntong Chen',

  role: 'PhD Candidate in Mechanical Engineering',

  email: 'aeon9125@gmail.com',

  tagline:
    'I explore intelligent systems that connect large language models, AI agents, and advanced manufacturing.',

  description:
    'Academic portfolio of Yuntong Chen, a PhD candidate in Mechanical Engineering at Northwestern Polytechnical University. His research interests include large language models, big data, AI agents, artificial intelligence, and intelligent manufacturing.',

  status:
    'PhD Candidate at Northwestern Polytechnical University · Open to research collaboration',

  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/aeon666-cyt',
    },
  ],

  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Research', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
