import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physiotherapy for Seniors Ottawa | Geriatric Physio Clinic | LePro Wellness 2026",
  description:
    "Tailored physiotherapy for seniors in Ottawa. Help your loved ones regain mobility, manage arthritis pain, prevent falls, and recover post-surgery. Direct billing available.",
  keywords: [
    "physiotherapy for seniors Ottawa",
    "geriatric physiotherapy Ottawa",
    "seniors mobility physio Ottawa",
    "fall prevention seniors Ottawa",
    "arthritis pain relief Ottawa",
    "post-surgical rehab seniors Ottawa",
    "Ottawa senior wellness center",
    "physio for older adults Ottawa",
  ],
  alternates: { canonical: "/blog/physiotherapy-for-seniors-ottawa" },
  openGraph: {
    title: "Physiotherapy for Seniors in Ottawa | LePro Wellness Center",
    description: "Restore mobility and independence for older adults with geriatric physiotherapy in Ottawa. Fall prevention and arthritis management.",
    url: "/blog/physiotherapy-for-seniors-ottawa",
    type: "article",
  },
}

export default function PhysiotherapyForSeniorsOttawa() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 inline-block">Seniors Health</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Physiotherapy for Seniors in Ottawa: 2026 Mobility & Recovery Guide
          </h1>
          <p className="text-xl text-emerald-50">Supporting healthy aging, active living, and fall prevention for Ottawa's older adults.</p>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Article",
            "headline": "Physiotherapy for Seniors in Ottawa: 2026 Mobility & Recovery Guide",
            "author": { "@type": "Organization", "name": "LePro Wellness Center" },
            "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
            "datePublished": "2026-06-25",
          })}} />

          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              As Ottawa's population continues to age, maintaining independence and physical mobility has become a top priority for local families. According to Statistics Canada, physical activity and targeted exercises are the most effective ways to combat the natural declines associated with aging. Geriatric physiotherapy is specifically designed to address the unique health needs of older adults.
            </p>
            <p className="leading-relaxed">
              At LePro Wellness Center, we believe that aging shouldn't mean giving up the activities you love. Whether it's playing with grandchildren, gardening, or walking along the Rideau Canal, our Ottawa physiotherapists are dedicated to helping seniors move with confidence and freedom from pain.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Conditions Treated with Geriatric Physiotherapy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Osteoarthritis and joint stiffness (knees, hips, spine)",
                "Balance disorders and history of falls",
                "Post-surgical recovery (hip replacements, knee replacements)",
                "Osteoporosis (strengthening bones safely)",
                "Stroke and neurological condition recovery",
                "Cardiovascular conditioning and endurance building",
                "Chronic back and neck pain",
                "General age-related muscle weakness (sarcopenia)"
              ].map(c => (
                <div key={c} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{c}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Why Fall Prevention is Critical for Seniors</h2>
            <p className="leading-relaxed">
              One in three seniors over the age of 65 falls each year in Canada. Falls are the leading cause of injury-related hospitalizations for older adults, often leading to a loss of independence. Our specialized fall prevention assessments analyze balance, gait speed, lower-body strength, and cognitive-motor coordination. We then design a program focused on building lower-body stability, improving balance reactions, and ensuring safe home environments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Core Components of Our Senior Care Program</h2>
            <p className="leading-relaxed">Our geriatric rehabilitation includes:</p>

            <div className="space-y-4">
              {[
                { title: "Balance & Proprioception Training", desc: "Exercises on different surfaces and in varying environments to train the nervous system to react quickly to slips and trips, reducing fall risks." },
                { title: "Functional Strength Training", desc: "Targeted resistance work focusing on muscles necessary for daily tasks, such as rising from a chair, climbing stairs, and carrying groceries." },
                { title: "Post-Surgical Joint Rehabilitation", desc: "Safe, progressive rehabilitation following joint replacements, fractures, or orthopedic surgeries, helping you regain full range of motion." },
                { title: "Pain Management & Joint Mobilization", desc: "Gentle manual therapy, heat therapy, and electrotherapy techniques to manage osteoarthritis and joint inflammation." }
              ].map(t => (
                <div key={t.title} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Are Seniors Covered for Physiotherapy at LePro Wellness?</h2>
            <p className="leading-relaxed">
              Yes. Private physiotherapy services are covered by most extended health benefits (private insurance) plans in Ontario. Many older adults use direct billing through their plan or their family members' plans. While OHIP-funded clinic options exist in Ontario, they often have long waitlists. At LePro Wellness, we have no waitlist, allowing seniors to start their recovery immediately.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Book Geriatric Physiotherapy in Ottawa</h2>
              <p className="text-gray-700 mb-6">LePro Wellness Center — Suite 104, 2 Gurdwara Rd, Ottawa ON K2E 1A2. Direct billing and ground-floor access with free parking.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300">
                  <span>Book Senior Assessment</span><ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/physiotherapy" className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300">
                  Our Physiotherapy Services
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500"><strong>Sources:</strong>{" "}
                <a href="https://www.statcan.gc.ca" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Statistics Canada — Seniors Physical Activity Report</a>,{" "}
                <a href="https://www.collegept.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">College of Physiotherapists of Ontario</a>
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/blog/physiotherapy-ottawa-guide" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">Physiotherapy in Ottawa: Complete Guide 2026</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/pelvic-floor-physiotherapy-ottawa" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">Pelvic Floor Physiotherapy Ottawa: Complete 2026 Guide</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
