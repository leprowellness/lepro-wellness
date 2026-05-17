import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.leprowellnesscenter.ca'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/physiotherapy`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/massage-therapy`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/athletic-therapy`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/accidental-therapy`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
  ]
}
