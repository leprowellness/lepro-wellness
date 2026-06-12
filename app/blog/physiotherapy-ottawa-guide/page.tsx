import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physiotherapy in Ottawa: Complete Guide 2025 | LePro Wellness",
  description:
    "Everything you need to know about physiotherapy in Ottawa — what to expect, how IFHP and WSIB coverage works, costs, and how to find the right physiotherapist in Ottawa, Ontario.",
  keywords: [
    "physiotherapy Ottawa guide",
    "how to find physiotherapist Ottawa",
    "physiotherapy cost Ottawa",
    "IFHP physiotherapy Ottawa",
    "WSIB physiotherapy Ottawa",
    "first physiotherapy appointment Ottawa",
    "best physiotherapy clinic Ottawa",
  ],
  alternates: { canonical: "/blog/physiotherapy-ottawa-guide" },
  openGraph: {
    title: "Physiotherapy in Ottawa: Complete Guide 2025",
    description: "Everything you need to know about physiotherapy in Ottawa, Ontario.",
    url: "/blog/physiotherapy-ottawa-guide",
    type: "article",
  },
}

export default function PhysiotherapyOttawaGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Physiotherapy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Physiotherapy in Ottawa: Complete Guide 2025
          </h1>
          <p className="text-xl text-emerald-50">
            Everything Ottawa residents need to know — costs, coverage, and what to expect from physiotherapy treatment.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Physiotherapy in Ottawa: Complete Guide 2025",
                "author": { "@type": "Organization", "name": "LePro Wellness Center" },
                "publisher": {
                  "@type": "Organization",
                  "name": "LePro Wellness Center",
                  "url": "https://www.leprowellnesscenter.ca"
                },
                "datePublished": "2025-05-01",
                "description": "Everything you need to know about physiotherapy in Ottawa — costs, IFHP & WSIB coverage, and finding the right clinic.",
              })
            }}
          />

          <div className="prose prose-lg max-w-none text-gray-700">

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Physiotherapy?</h2>
            <p className="leading-relaxed mb-6">
              Physiotherapy (also called physical therapy) is a regulated health profession in Ontario that helps people recover from injuries, manage chronic pain, and restore movement. According to{" "}
              <a href="https://www.collegept.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700">
                the College of Physiotherapists of Ontario
              </a>
              , registered physiotherapists assess, diagnose, and treat physical conditions using a range of techniques including manual therapy, exercise prescription, and electrotherapy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Do I Need a Doctor's Referral for Physiotherapy in Ottawa?</h2>
            <p className="leading-relaxed mb-6">
              No. In Ontario, you have <strong>direct access to physiotherapy</strong> — meaning you can book an appointment directly without a doctor's referral. However, some private insurance plans may require a referral for reimbursement, so always check with your insurer. At{" "}
              <Link href="/services/physiotherapy" className="text-emerald-600 underline hover:text-emerald-700">
                LePro Wellness Center Ottawa
              </Link>
              , we accept walk-in bookings and can help you navigate your insurance requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Much Does Physiotherapy Cost in Ottawa?</h2>
            <p className="leading-relaxed mb-4">
              The cost of physiotherapy in Ottawa varies by clinic and session type. Here are typical rates:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Initial Assessment (60 min):</strong> $150–$200</li>
              <li><strong>Follow-up Session (60 min):</strong> $90–$120</li>
              <li><strong>Dry Needling / IMS:</strong> $120–$160</li>
              <li><strong>Virtual Physiotherapy:</strong> $80–$110</li>
            </ul>
            <p className="leading-relaxed mb-6">
              Many extended health benefits plans in Canada cover physiotherapy. Additionally, patients covered under{" "}
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/ifhp.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700">
                the Interim Federal Health Program (IFHP)
              </a>
              {" "}or WSIB can access physiotherapy at no cost at registered clinics like LePro Wellness.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Conditions Does Physiotherapy Treat?</h2>
            <p className="leading-relaxed mb-4">Physiotherapy in Ottawa can effectively treat a wide range of conditions, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries (sprains, strains, tears)</li>
              <li>Motor vehicle accident (MVA) injuries and whiplash</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint pain</li>
              <li>Workplace injuries (WSIB)</li>
              <li>Chronic pain conditions</li>
              <li>Neurological conditions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Expect at Your First Physiotherapy Appointment</h2>
            <p className="leading-relaxed mb-4">Your first visit at a physiotherapy clinic in Ottawa typically includes:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Health history review</strong> — your therapist will discuss your symptoms, past injuries, and health goals</li>
              <li><strong>Physical assessment</strong> — testing range of motion, strength, posture, and functional movement</li>
              <li><strong>Diagnosis and treatment plan</strong> — a personalized plan tailored to your recovery timeline</li>
              <li><strong>Initial treatment</strong> — manual therapy, exercises, or other techniques may begin in the first session</li>
            </ol>
            <p className="leading-relaxed mb-6">
              Wear comfortable, loose-fitting clothing that allows easy access to the area being assessed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">IFHP and WSIB Physiotherapy Coverage in Ottawa</h2>
            <p className="leading-relaxed mb-6">
              LePro Wellness Center is a registered provider for both IFHP and WSIB patients in Ottawa. If you are a refugee or asylum seeker with a UCI number, you are likely covered under the Interim Federal Health Program for physiotherapy, massage therapy, and other rehabilitation services. Contact us to verify your coverage before booking.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Your Physiotherapy Appointment in Ottawa</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                LePro Wellness Center is located at Suite 104 - 2 Gurdwara Road, Ottawa ON K2E 1A2. Our licensed physiotherapists provide expert, personalized care for injury recovery, chronic pain, and MVA rehabilitation. IFHP and WSIB accepted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300">
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/physiotherapy" className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300">
                  <span>Our Physiotherapy Services</span>
                </Link>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Sources:</strong>{" "}
                <a href="https://www.collegept.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">College of Physiotherapists of Ontario</a>,{" "}
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/ifhp.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Government of Canada — IFHP</a>,{" "}
                <a href="https://www.wsib.ca" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">WSIB Ontario</a>
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/blog/mva-rehabilitation-ontario" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">MVA Rehabilitation in Ontario: Your Rights & Recovery Guide</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1">
                <span>Read More</span><ArrowRight className="w-3 h-3" />
              </span>
            </Link>
            <Link href="/blog/ifhp-coverage-physiotherapy-ottawa" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">IFHP Coverage for Physiotherapy in Ottawa</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1">
                <span>Read More</span><ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
