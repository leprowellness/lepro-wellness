import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MVA Rehabilitation in Ottawa & Ontario: Your Recovery Guide 2025 | LePro Wellness",
  description:
    "Were you injured in a car accident in Ottawa? Learn your rights, how MVA rehabilitation works in Ontario, what insurance covers, and how to start your recovery at LePro Wellness.",
  keywords: [
    "MVA rehabilitation Ottawa",
    "car accident physiotherapy Ottawa",
    "motor vehicle accident recovery Ontario",
    "whiplash treatment Ottawa",
    "MVA insurance coverage Ontario",
    "accident injury rehab Ottawa",
    "car accident physio Ottawa",
  ],
  alternates: { canonical: "/blog/mva-rehabilitation-ontario" },
  openGraph: {
    title: "MVA Rehabilitation Ottawa: Your Rights & Recovery Guide",
    description: "Complete guide to motor vehicle accident rehabilitation in Ottawa and Ontario.",
    url: "/blog/mva-rehabilitation-ontario",
    type: "article",
  },
}

export default function MvaRehabilitationOntario() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">MVA Recovery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            MVA Rehabilitation in Ottawa & Ontario: Your Rights & Recovery Guide 2025
          </h1>
          <p className="text-xl text-cyan-50">
            A complete guide to motor vehicle accident rehabilitation in Ottawa — from insurance coverage to recovery timelines.
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
                "headline": "MVA Rehabilitation in Ottawa & Ontario: Your Rights & Recovery Guide 2025",
                "author": { "@type": "Organization", "name": "LePro Wellness Center" },
                "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
                "datePublished": "2025-04-20",
              })
            }}
          />

          <div className="prose prose-lg max-w-none text-gray-700">

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is MVA Rehabilitation?</h2>
            <p className="leading-relaxed mb-6">
              Motor Vehicle Accident (MVA) rehabilitation is a structured recovery program designed to help accident victims regain mobility, reduce pain, and return to their daily lives after a car crash. In Ontario, MVA rehabilitation is covered under the{" "}
              <a href="https://www.fsrao.ca/industry/auto-insurance/statutory-accident-benefits-schedule" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700">
                Statutory Accident Benefits Schedule (SABS)
              </a>
              , which ensures all auto insurance policies in Ontario include accident benefit coverage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Injuries Treated After a Car Accident in Ottawa</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Whiplash</strong> — the most common MVA injury, causing neck pain and stiffness</li>
              <li><strong>Soft tissue injuries</strong> — sprains, strains, and muscle tears</li>
              <li><strong>Back and lumbar injuries</strong> — herniated discs and compression</li>
              <li><strong>Concussions</strong> — traumatic brain injuries requiring careful rehabilitation</li>
              <li><strong>Shoulder and knee injuries</strong> — from impact or bracing during a collision</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Does MVA Insurance Coverage Work in Ontario?</h2>
            <p className="leading-relaxed mb-6">
              Under Ontario's no-fault insurance system, your own insurance company covers your accident benefits regardless of who was at fault. This includes physiotherapy, massage therapy, and other rehabilitation services up to a set limit. According to{" "}
              <a href="https://www.fsrao.ca" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700">
                FSRAO (Financial Services Regulatory Authority of Ontario)
              </a>
              , standard accident benefits cover up to $3,500 in medical and rehabilitation expenses for minor injuries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Soon Should You Start MVA Rehabilitation?</h2>
            <p className="leading-relaxed mb-6">
              The sooner the better. Research published by{" "}
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3894453/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline hover:text-emerald-700">
                the National Institutes of Health
              </a>
              {" "}shows that early physiotherapy intervention after a motor vehicle accident significantly reduces the risk of chronic pain and long-term disability. Starting within 1–2 weeks of your accident leads to faster and more complete recovery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Does MVA Rehabilitation Include at LePro Wellness Ottawa?</h2>
            <p className="leading-relaxed mb-4">Our{" "}
              <Link href="/services/accidental-therapy" className="text-emerald-600 underline hover:text-emerald-700">MVA rehabilitation program in Ottawa</Link>
              {" "}includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Comprehensive initial injury assessment</li>
              <li>Personalized physiotherapy treatment plan</li>
              <li>Manual therapy and soft tissue mobilization</li>
              <li>Exercise rehabilitation and progressive strengthening</li>
              <li>Registered massage therapy for muscle recovery</li>
              <li>Concussion management protocols</li>
              <li>Return-to-work and return-to-sport programs</li>
              <li>Insurance documentation support</li>
            </ul>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your MVA Recovery at LePro Wellness Ottawa</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Don't wait. Early treatment means faster recovery. Our Ottawa MVA rehabilitation team accepts all major insurance and can handle your paperwork. Located at Suite 104 - 2 Gurdwara Road, Ottawa.
              </p>
              <Link href="/contact" className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 transition-all duration-300">
                <span>Book MVA Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Sources:</strong>{" "}
                <a href="https://www.fsrao.ca/industry/auto-insurance/statutory-accident-benefits-schedule" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">FSRAO Ontario — SABS</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3894453/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">NIH — Early Physiotherapy for MVA</a>
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
            <Link href="/blog/ifhp-coverage-physiotherapy-ottawa" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">IFHP Coverage for Physiotherapy in Ottawa</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
