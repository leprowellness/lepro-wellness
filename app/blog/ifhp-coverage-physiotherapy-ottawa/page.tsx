import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IFHP Coverage for Physiotherapy in Ottawa: Complete Guide | LePro Wellness",
  description:
    "Are you covered under IFHP in Ottawa? Learn how to access physiotherapy, massage therapy, and rehabilitation services using your Interim Federal Health Program benefits at LePro Wellness.",
  keywords: [
    "IFHP physiotherapy Ottawa",
    "IFHP coverage physiotherapy Ontario",
    "Interim Federal Health Program physiotherapy",
    "IFHP massage therapy Ottawa",
    "IFHP rehabilitation Ottawa",
    "refugee physiotherapy Ottawa",
    "UCI number physiotherapy Ottawa",
    "IFHP clinic Ottawa",
  ],
  alternates: { canonical: "/blog/ifhp-coverage-physiotherapy-ottawa" },
  openGraph: {
    title: "IFHP Coverage for Physiotherapy in Ottawa: Complete Guide",
    description: "How to access physiotherapy and wellness services in Ottawa using IFHP coverage.",
    url: "/blog/ifhp-coverage-physiotherapy-ottawa",
    type: "article",
  },
}

const covered = [
  "Physiotherapy assessments and follow-up sessions",
  "Registered massage therapy",
  "Athletic therapy and rehabilitation",
  "Motor vehicle accident (MVA) rehabilitation",
  "Chronic pain management",
  "Post-surgical rehabilitation",
  "Mental health support (psychology services)",
]

export default function IfhpCoverageGuide() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Insurance & Coverage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            IFHP Coverage for Physiotherapy in Ottawa: What You Need to Know
          </h1>
          <p className="text-xl text-emerald-50">
            A complete guide for IFHP-covered patients seeking physiotherapy and wellness services in Ottawa, Ontario.
          </p>
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
                "headline": "IFHP Coverage for Physiotherapy in Ottawa: Complete Guide",
                "author": { "@type": "Organization", "name": "LePro Wellness Center" },
                "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
                "datePublished": "2025-03-28",
              })
            }}
          />

          <div className="prose prose-lg max-w-none text-gray-700">

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is the Interim Federal Health Program (IFHP)?</h2>
            <p className="leading-relaxed mb-6">
              The{" "}
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/ifhp.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700">
                Interim Federal Health Program (IFHP)
              </a>
              {" "}is a federal health insurance program administered by the Government of Canada that provides temporary health coverage to eligible refugees, asylum claimants, and other protected persons. It covers a range of healthcare services, including physiotherapy and rehabilitation, that might not be covered by provincial health plans during a waiting period.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Is Eligible for IFHP Coverage in Ottawa?</h2>
            <p className="leading-relaxed mb-4">You may be eligible for IFHP if you are:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>A Government-Assisted Refugee (GAR)</li>
              <li>A Blended Visa Office-Referred Refugee (BVOR)</li>
              <li>A refugee claimant (asylum seeker) with a valid UCI number</li>
              <li>A protected person awaiting permanent residency</li>
              <li>A victim of human trafficking with a temporary resident permit</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Physiotherapy Services Are Covered Under IFHP?</h2>
            <p className="leading-relaxed mb-4">At LePro Wellness Center in Ottawa, IFHP-covered patients can access:</p>
            <div className="space-y-3 mb-6">
              {covered.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Use Your IFHP Coverage at LePro Wellness Ottawa</h2>
            <p className="leading-relaxed mb-4">The process is simple:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Confirm your eligibility</strong> — Check your IFHP card or contact{" "}
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/ifhp.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">IRCC</a>
                {" "}to verify your coverage status.</li>
              <li><strong>Contact LePro Wellness</strong> — Call us at{" "}
                <a href="tel:+16138785060" className="text-emerald-600 underline">+1 (613) 878-5060</a>
                {" "}or{" "}
                <Link href="/contact" className="text-emerald-600 underline">book online</Link>
                . Let us know you are covered under IFHP.</li>
              <li><strong>Bring your IFHP card</strong> — Bring your IFHP coverage card and UCI number to your first appointment.</li>
              <li><strong>We handle the billing</strong> — LePro Wellness bills IFHP directly. You pay nothing out-of-pocket for covered services.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Do I Need a Doctor's Referral for IFHP Physiotherapy?</h2>
            <p className="leading-relaxed mb-6">
              In most cases, yes — IFHP typically requires a referral from a physician or nurse practitioner before accessing physiotherapy services. However, our team can help you navigate the referral process and connect you with the right resources if needed. Contact us and we'll guide you through it.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">LePro Wellness Center — Ottawa's IFHP Physiotherapy Provider</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are proud to be a trusted IFHP-registered clinic in Ottawa, serving the refugee and newcomer community with compassionate, professional care. Suite 104 - 2 Gurdwara Road, Ottawa ON K2E 1A2.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300">
                  <span>Book IFHP Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+16138785060" className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300">
                  <span>Call +1 (613) 878-5060</span>
                </a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Sources:</strong>{" "}
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/ifhp.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Government of Canada — IFHP Program</a>,{" "}
                <a href="https://www.ircc.canada.ca" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Immigration, Refugees and Citizenship Canada</a>
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
