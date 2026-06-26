import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Health & Wellness Blog Ottawa | Physiotherapy Tips & Guides | LePro Wellness",
  description:
    "Expert pelvic floor, sports injury, and seniors physiotherapy articles from LePro Wellness Center Ottawa. Find 2026 evidence-based guides on recovery, pain relief, and direct billing.",
  keywords: [
    "physiotherapy blog Ottawa",
    "pelvic floor physiotherapy Ottawa",
    "physiotherapy for seniors Ottawa",
    "Ottawa pelvic health clinic",
    "injury recovery Ottawa",
    "MVA rehab guide Ontario",
    "IFHP coverage physiotherapy",
    "back pain tips Ottawa",
    "massage therapy benefits",
    "sports injury prevention Ottawa",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Health & Wellness Blog | LePro Wellness Center Ottawa",
    description: "Expert pelvic floor, sports injury, and seniors physiotherapy articles from Ottawa's trusted clinic.",
    url: "/blog",
    siteName: "LePro Wellness Center",
    type: "website",
  },
}

const posts = [
  {
    slug: "pelvic-floor-physiotherapy-ottawa",
    title: "Pelvic Floor Physiotherapy Ottawa: Complete 2026 Guide",
    excerpt: "Learn how pelvic floor physiotherapy treats incontinence, pelvic pain, prenatal/postnatal recovery, and core weakness in Ottawa. Step-by-step treatment info and coverage guide.",
    date: "2026-06-26",
    readTime: "7 min read",
    category: "Pelvic Health",
  },
  {
    slug: "physiotherapy-for-seniors-ottawa",
    title: "Physiotherapy for Seniors in Ottawa: 2026 Mobility & Recovery Guide",
    excerpt: "Help your loved ones restore mobility, prevent falls, and manage osteoarthritis. A comprehensive guide to tailored senior physiotherapy services in Ottawa.",
    date: "2026-06-25",
    readTime: "6 min read",
    category: "Seniors Health",
  },
  {
    slug: "wellness-center-ottawa",
    title: "Best Wellness Center in Ottawa 2026: Complete Guide to LePro Wellness",
    excerpt: "Your complete guide to Ottawa's leading wellness clinic — services, insurance coverage, and why Ottawa residents trust LePro Wellness Center for physiotherapy, massage therapy, and rehabilitation.",
    date: "2026-06-10",
    readTime: "6 min read",
    category: "Wellness Ottawa",
  },
  {
    slug: "back-pain-treatment-ottawa",
    title: "Back Pain Treatment in Ottawa: Best Physiotherapy Options in 2026",
    excerpt: "Suffering from back pain in Ottawa? Discover the most effective physiotherapy treatments for lower back pain, sciatica, and herniated discs. Covered by insurance.",
    date: "2026-06-01",
    readTime: "6 min read",
    category: "Back Pain",
  },
  {
    slug: "sports-injury-rehab-ottawa",
    title: "Sports Injury Rehabilitation Ottawa: Get Back in the Game Faster",
    excerpt: "Expert athletic therapy and physiotherapy for sports injuries in Ottawa. Knee, shoulder, ankle injuries treated with a proven 4-phase return-to-sport program.",
    date: "2026-06-05",
    readTime: "5 min read",
    category: "Sports Injury",
  },
  {
    slug: "physiotherapy-ottawa-guide",
    title: "Physiotherapy in Ottawa: Complete Guide to Finding the Right Clinic",
    excerpt: "Everything you need to know about physiotherapy in Ottawa — from what to expect at your first visit to how IFHP and WSIB coverage works in Ontario.",
    date: "2026-05-01",
    readTime: "6 min read",
    category: "Physiotherapy",
  },
  {
    slug: "mva-rehabilitation-ontario",
    title: "MVA Rehabilitation in Ontario: Your Rights & Recovery Guide",
    excerpt: "Were you injured in a car accident in Ottawa? Here's a complete guide to motor vehicle accident rehabilitation, insurance coverage, and your rights under Ontario law.",
    date: "2026-04-20",
    readTime: "7 min read",
    category: "MVA Recovery",
  },
  {
    slug: "massage-therapy-benefits-ottawa",
    title: "7 Science-Backed Benefits of Registered Massage Therapy",
    excerpt: "Registered massage therapy is more than relaxation. Discover the evidence-based health benefits of regular RMT sessions, from chronic pain relief to improved sleep.",
    date: "2026-04-10",
    readTime: "5 min read",
    category: "Massage Therapy",
  },
  {
    slug: "ifhp-coverage-physiotherapy-ottawa",
    title: "IFHP Coverage for Physiotherapy in Ottawa: What You Need to Know",
    excerpt: "Are you covered under the Interim Federal Health Program? Learn how to access physiotherapy, massage therapy, and rehabilitation services in Ottawa using your IFHP benefits.",
    date: "2026-03-28",
    readTime: "5 min read",
    category: "Insurance & Coverage",
  },
]

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LePro Wellness Health & Wellness Blog",
    "description": "Expert physiotherapy, pelvic floor health, and wellness articles from LePro Wellness Center Ottawa.",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.leprowellnesscenter.ca/blog/${post.slug}`,
      "name": post.title,
    })),
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health & Wellness Blog</h1>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            Expert advice on physiotherapy, pelvic floor health, seniors mobility, and wellness from LePro Wellness Center Ottawa.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-1 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-emerald-50 mb-8 text-lg">Visit our Ottawa wellness center at Suite 104 - 2 Gurdwara Road.</p>
          <Link href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300">
            <span>Book Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
