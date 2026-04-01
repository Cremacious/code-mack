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
    description: 'A full-featured social writing and reading platform. Users can write and publish books, join collaborative writing groups called Hives, participate in book clubs, complete writing challenges, and build reading lists.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'TipTap', 'Cloudinary'],
    liveUrl: 'https://www.beehive-books.app',
    githubUrl: 'https://github.com/Cremacious/beehive-books',
    status: 'Live',
    statusColor: 'text-emerald-300 bg-emerald-400/15',
    gradient: 'from-sky-500/20 to-emerald-500/10',
    imagePath: '/images/portfolio/beehive.png',
  },
  {
    title: 'Admin Dashboard',
    description: 'A clean, responsive admin dashboard featuring order management, data tables, and real-time status tracking. Demonstrates the kind of internal tooling and business dashboards I can build for clients.',
    tech: ['Vite', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://admin-display-mu.vercel.app/orders',
    githubUrl: null,
    status: 'Demo',
    statusColor: 'text-sky-300 bg-sky-400/15',
    gradient: 'from-sky-500/15 to-indigo-500/10',
    imagePath: '/images/portfolio/dashboard.png',
  },
];
