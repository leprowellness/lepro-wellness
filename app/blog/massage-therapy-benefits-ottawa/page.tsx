import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "7 Science-Backed Benefits of Registered Massage Therapy | LePro Wellness Ottawa",
  description:
    "Discover the evidence-based health benefits of registered massage therapy in Ottawa. From chronic pain relief to better sleep — learn why RMT sessions are worth it.",
  keywords: [
    "massage therapy benefits Ottawa",
    "registered massage therapist Ottawa",
    "RMT benefits Ottawa",
    "massage therapy for back pain Ottawa",
    "massage therapy for stress Ottawa",
    "therapeutic massage Ottawa",
    "massage therapy health benefits",
  ],
  alternates: { canonical: "/blog/massage-therapy-benefits-ottawa" },
  openGraph: {
    title: "7 Science-Backed Benefits of Registered Massage Therapy",
    description: "Evidence-based health benefits of RMT sessions from LePro Wellness Center Ottawa.",
    url: "/blog/massage-therapy-benefits-ottawa",
    type: "article",
  },
}

const benefits = [
  {
    number: "01",
    title: "Reduces Chronic Back and Neck Pain",
    body: "Chronic back pain is one of the leading causes of disability in Canada. A 2019 review in the journal Pain Medicine found that massage therapy provides clinically meaningful improvements in pain and function for patients with chronic low back pain. Regular RMT sessions at our Ottawa clinic help release muscle tension, improve circulation, and reduce inflammation — providing lasting relief without relying solely on medication.",
  },
  {
    number: "02",
    title: "Relieves Stress and Reduces Cortisol",
    body: "Research published in the International Journal of Neuroscience demonstrated that a single 45-minute massage session reduces cortisol (the stress hormone) by an average of 31% while increasing serotonin and dopamine. For Ottawa residents managing high-pressure careers or family responsibilities, regular massage therapy offers a proven, natural approach to stress management.",
  },
  {
    number: "03",
    title: "Improves Sleep Quality",
    body: "Massage therapy activates the parasympathetic nervous system — the body's \"rest and digest\" response. Studies show that patients who receive regular massage therapy fall asleep faster and enjoy deeper, more restorative sleep. This is particularly beneficial for those dealing with anxiety-related insomnia or chronic pain that disrupts sleep.",
  },
  {
    number: "04",
    title: "Speeds Up Sports Injury Recovery",
    body: "Whether you're a weekend warrior or a competitive athlete in Ottawa, massage therapy accelerates recovery by increasing blood flow to injured tissues, reducing delayed-onset muscle soreness (DOMS), and improving flexibility. Combined with our athletic therapy services, RMT helps you return to your sport faster and safer.",
  },
  {
    number: "05",
    title: "Reduces Headaches and Migraines",
    body: "Tension headaches are often caused by tight muscles in the neck, shoulders, and upper back. A study published in the American Journal of Public Health found that massage therapy significantly reduced the frequency and intensity of tension headaches. Trigger point therapy and upper back massage can provide immediate relief and long-term prevention.",
  },
  {
    number: "06",
    title: "Improves Circulation and Immune Function",
    body: "Massage therapy stimulates the lymphatic system, which plays a crucial role in immune function. The mechanical pressure of massage moves blood and lymph through congested areas, delivering fresh oxygen and nutrients to tissues while removing metabolic waste. Research shows that massage therapy can increase natural killer cell activity, boosting your body's natural defenses.",
  },
  {
    number: "07",
    title: "Supports MVA and Workplace Injury Recovery",
    body: "In Ottawa, registered massage therapy is covered under most MVA insurance plans and many workplace injury (WSIB) claims. RMT is highly effective for treating whiplash, soft tissue injuries, and repetitive strain injuries. When combined with physiotherapy at LePro Wellness, it creates a comprehensive rehabilitation approach that addresses both pain and underlying dysfunction.",
  },
]

export default function MassageTherapyBenefits() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Massage Therapy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            7 Science-Backed Benefits of Registered Massage Therapy
          </h1>
          <p className="text-xl text-teal-50">Evidence-based reasons why regular RMT sessions improve your health and quality of life.</p>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "7 Science-Backed Benefits of Registered Massage Therapy",
                "author": { "@type": "Organization", "name": "LePro Wellness Center" },
                "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
                "datePublished": "2026-04-10",
              })
            }}
          />

          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Registered massage therapy (RMT) is one of the most effective and widely used complementary health treatments in Canada. According to{" "}
            <a href="https://www.cmto.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700">
              the College of Massage Therapists of Ontario (CMTO)
            </a>
            , over 7 million Canadians receive massage therapy each year. Here are 7 evidence-based benefits of making RMT a part of your wellness routine in Ottawa.
          </p>

          <div className="space-y-10">
            {benefits.map((b) => (
              <div key={b.number} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {b.number}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Registered Massage Therapy in Ottawa</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our registered massage therapists at LePro Wellness Center in Ottawa provide personalized treatments tailored to your health goals. Insurance direct billing available. Located at Suite 104 - 2 Gurdwara Road, Ottawa ON K2E 1A2.
            </p>
            <Link href="/services/massage-therapy" className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all duration-300">
              <span>View Massage Therapy Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Sources:</strong>{" "}
              <a href="https://www.cmto.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">College of Massage Therapists of Ontario</a>,{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/16649913/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">International Journal of Neuroscience — Massage & Cortisol</a>,{" "}
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5579396/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Pain Medicine — Massage for Chronic Back Pain</a>
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/blog/physiotherapy-ottawa-guide" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">Physiotherapy in Ottawa: Complete Guide 2025</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/mva-rehabilitation-ontario" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">MVA Rehabilitation in Ottawa & Ontario</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
