export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string | null;
  status: string;
  statusColor: string;
  gradient: string;
  imagePath: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Beehive Books',
    description:
      'A full-featured social writing and reading platform. Users can write and publish books, join collaborative writing groups called Hives, participate in book clubs, complete writing challenges, and build reading lists.',
    tech: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Stripe',
      'TipTap',
      'Cloudinary',
    ],
    liveUrl: 'https://www.beehive-books.app',
    githubUrl: 'https://github.com/Cremacious/beehive-books',
    status: 'Live',
    statusColor: 'text-emerald-300 bg-emerald-400/15',
    gradient: 'from-sky-500/20 to-emerald-500/10',
    imagePath: '/images/portfolio/beehive.png',
  },
  {
    title: 'Admin Dashboard Example',
    description:
      'A fully responsive admin dashboard with live Recharts data visualisations, KPI cards, user and product management tables, order tracking, a multi-tab settings panel, and a sales analytics page.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://sales-dashboard-lyart-two.vercel.app',
    githubUrl: null,
    status: 'Demo',
    statusColor: 'text-emerald-300 bg-emerald-400/15',
    gradient: 'from-indigo-500/15 to-sky-500/10',
    imagePath: '/images/portfolio/dashboard2.png',
  },
  {
    title: 'Restaurant Example',
    description:
      'A multi-page restaurant website for a Gulf Coast seafood concept. Includes a tabbed seasonal menu, reservation form, masonry photo gallery, team and story pages, and a mobile-first responsive layout throughout.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Next/Image'],
    liveUrl: 'https://food-example.vercel.app',
    githubUrl: null,
    status: 'Demo',
    statusColor: 'text-emerald-300 bg-emerald-400/15',
    gradient: 'from-emerald-500/15 to-green-500/10',
    imagePath: '/images/portfolio/oleander.png',
  },
  {
    title: 'Portfolio Example',
    description:
      'An editorial fine art photography portfolio with a full-bleed hero, CSS masonry gallery with lightbox, series showcase, about page with bio and stats, and a minimal contact form.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Next/Image'],
    liveUrl: 'https://art-portfolio-wheat.vercel.app',
    githubUrl: null,
    status: 'Demo',
    statusColor: 'text-emerald-300 bg-emerald-400/15',
    gradient: 'from-amber-500/15 to-orange-500/10',
    imagePath: '/images/portfolio/art-portfolio.png',
  },
];
