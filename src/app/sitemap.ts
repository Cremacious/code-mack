import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://code-mack.dev', lastModified: new Date(), priority: 1 },
    { url: 'https://code-mack.dev/projects', lastModified: new Date(), priority: 0.8 },
  ];
}
