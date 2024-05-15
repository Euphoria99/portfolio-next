import { bioData } from '@/datasource'
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [''],
    },
    sitemap: `${bioData.domain}/sitemap.xml`,
  }
}