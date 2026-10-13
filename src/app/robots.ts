import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vyat-v3.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/explore',
          '/classes',
          '/classes/*',
          '/skills',
          '/skills/*',
          '/login',
          '/api/certificates/verify/*',
        ],
        disallow: [
          '/admin',
          '/admin/*',
          '/api/*',
          '/dashboard',
          '/dashboard/*',
          '/profile',
          '/profile/*',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
