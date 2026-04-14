export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string | null;
  status: 'Live' | 'Example';
  statusColor: string;
  imagePath: string;
  category: 'personal' | 'example';
  type?: string;
};

// ─── PERSONAL PROJECTS ───────────────────────────────────────────
// Reorder this array to change display order. Add new objects to add projects.
export const PERSONAL_PROJECTS: Project[] = [
  {
    title: 'Beehive Books',
    description:
      'A fully custom online reading and community platform. Users can discover books, track their reading progress, join book clubs, and connect with other readers. Built from scratch with a full backend, database, and authentication system.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'User Auth', 'Full Stack'],
    liveUrl: 'https://www.beehive-books.app',
    githubUrl: 'https://github.com/Cremacious/beehive-books',
    status: 'Live',
    statusColor: 'bg-emerald-400/20 text-emerald-300',
    imagePath: '/images/portfolio/beehive.png',
    category: 'personal',
    type: 'Full Stack Application',
  },
];

// ─── EXAMPLE SITES ───────────────────────────────────────────────
// Reorder this array to change display order. Add new objects to add examples.
export const EXAMPLE_SITES: Project[] = [
  {
    title: 'Admin Dashboard',
    description:
      'A fully responsive admin dashboard with live Recharts data visualizations, KPI cards, and a product management table with sorting, order tracking, a multi-tab settings panel, and a data addition workflow.',
    tech: ['React', 'TanStack', 'TypeScript'],
    liveUrl: 'https://sales-dashboard-lyart-two.vercel.app',
    githubUrl: null,
    status: 'Example',
    statusColor: 'bg-sky-400/20 text-sky-300',
    imagePath: '/images/portfolio/dashboard2.png',
    category: 'example',
  },
  {
    title: 'Restaurant Site',
    description:
      'A polished restaurant website with a menu, online reservation form, location info, and a photo gallery. Perfect for any food and hospitality business.',
    tech: ['Next.js', 'Tailwind CSS', 'Mobile-first'],
    liveUrl: 'https://food-example.vercel.app',
    githubUrl: null,
    status: 'Example',
    statusColor: 'bg-sky-400/20 text-sky-300',
    imagePath: '/images/portfolio/oleander.png',
    category: 'example',
  },
  {
    title: 'Portfolio Site',
    description:
      'A clean personal portfolio with a full-screen gallery, about section, contact form, and project showcase. Great for photographers, designers, and creatives.',
    tech: ['Next.js', 'Tailwind CSS', 'Animations'],
    liveUrl: 'https://art-portfolio-wheat.vercel.app',
    githubUrl: null,
    status: 'Example',
    statusColor: 'bg-sky-400/20 text-sky-300',
    imagePath: '/images/portfolio/art-portfolio.png',
    category: 'example',
  },
];

// Combined export for /projects page
export const ALL_PROJECTS = [...PERSONAL_PROJECTS, ...EXAMPLE_SITES];
