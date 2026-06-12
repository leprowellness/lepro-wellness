import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.leprowellnesscenter.ca'

  return [
    { url: baseUrl, lastModified: new Date('2025-05-01'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/physiotherapy`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/massage-therapy`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/athletic-therapy`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/accidental-therapy`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2025-05-01'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog/physiotherapy-ottawa-guide`, lastModified: new Date('2025-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/mva-rehabilitation-ontario`, lastModified: new Date('2025-04-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/massage-therapy-benefits-ottawa`, lastModified: new Date('2025-04-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/ifhp-coverage-physiotherapy-ottawa`, lastModified: new Date('2025-03-28'), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
