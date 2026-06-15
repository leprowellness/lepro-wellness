import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wellness Center Ottawa | Best Holistic Health Clinic 2025 | LePro Wellness",
  description:
    "Looking for the best wellness center in Ottawa? LePro Wellness Center offers physiotherapy, massage therapy, athletic therapy and MVA rehab at 2 Gurdwara Road. IFHP accepted.",
  keywords: [
    "wellness center Ottawa",
    "wellness centre Ottawa",
    "holistic health Ottawa",
    "best wellness center Ottawa",
    "Ottawa wellness clinic 2025",
    "health and wellness Ottawa",
    "rehabilitation center Ottawa",
    "Ottawa wellness services",
    "physiotherapy wellness Ottawa",
    "massage wellness Ottawa",
    "wellness center Nepean",
    "wellness center South Ottawa",
  ],
  alternates: { canonical: "/blog/wellness-center-ottawa" },
  openGraph: {
    title: "Best Wellness Center in Ottawa 2025 | LePro Wellness",
    description: "Ottawa's top wellness center offering physiotherapy, massage therapy, and athletic therapy. IFHP & WSIB accepted.",
    url: "/blog/wellness-center-ottawa",
    type: "article",
  },
}

const services = [
  { name: "Physiotherapy Ottawa", desc: "Evidence-based injury rehabilitation, chronic pain management, and MVA recovery.", link: "/services/physiotherapy" },
  { name: "Registered Massage Therapy", desc: "Therapeutic and relaxation massage by certified RMTs. Insurance direct billing available.", link: "/services/massage-therapy" },
  { name: "Athletic Therapy", desc: "Sport-specific injury rehab and performance conditioning for athletes of all levels.", link: "/services/athletic-therapy" },
  { name: "MVA Rehabilitation", desc: "Comprehensive motor vehicle accident recovery programs accepted by all major insurers.", link: "/services/accidental-therapy" },
]

export default function WellnessCenterOttawa() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 inline-block">Wellness Ottawa</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Best Wellness Center in Ottawa 2026: Complete Guide to LePro Wellness
          </h1>
          <p className="text-xl text-emerald-50">
            Your complete guide to Ottawa's leading wellness clinic — services, coverage, and why Ottawa residents choose LePro Wellness Center for their health needs.
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Wellness Center in Ottawa 2025: Complete Guide to LePro Wellness",
            "author": { "@type": "Organization", "name": "LePro Wellness Center" },
            "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
            "datePublished": "2026-06-10",
            "about": {
              "@type": "MedicalBusiness",
              "name": "LePro Wellness Center",
              "address": { "@type": "PostalAddress", "streetAddress": "Suite 104 - 2 Gurdwara Road", "addressLocality": "Ottawa", "addressRegion": "ON", "postalCode": "K2E 1A2", "addressCountry": "CA" }
            }
          })}} />

          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Finding the right wellness center in Ottawa can feel overwhelming — there are dozens of clinics claiming to be the best. This guide gives you a clear picture of what LePro Wellness Center offers, who we serve, and why Ottawa residents from Nepean to Gloucester trust us for their physiotherapy, massage therapy, and rehabilitation needs.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">LePro Wellness Center — Quick Facts</h2>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /><span><strong>Location:</strong> Suite 104 - 2 Gurdwara Road, Ottawa ON K2E 1A2</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /><span><strong>Phone:</strong> +1 (613) 878-5060</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /><span><strong>Hours:</strong> Monday–Friday, 9:00 AM–4:00 PM</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /><span><strong>Coverage:</strong> IFHP, WSIB, MVA insurance, extended health benefits</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /><span><strong>Direct billing:</strong> Yes — we bill your insurance directly</span></li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">What Is a Wellness Center?</h2>
            <p className="leading-relaxed">
              A wellness center is a multi-disciplinary healthcare facility that integrates multiple health services under one roof. Unlike a single-specialty clinic, a wellness center like LePro brings together physiotherapists, registered massage therapists, and athletic therapists to provide coordinated, holistic care. According to the{" "}
              <a href="https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">World Health Organization</a>,
              {" "}musculoskeletal conditions are the leading contributor to disability globally, and integrated care approaches produce significantly better outcomes than isolated treatments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Wellness Services in Ottawa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map(s => (
                <Link key={s.name} href={s.link} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 block">
                  <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1">
                    <span>Learn More</span><ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Who Does LePro Wellness Center Serve in Ottawa?</h2>
            <p className="leading-relaxed">Our Ottawa wellness center proudly serves:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ottawa residents</strong> — from Nepean, Barrhaven, Kanata, Gloucester, Orléans, and Centretown</li>
              <li><strong>Athletes and active individuals</strong> — sports injury rehab and performance conditioning</li>
              <li><strong>MVA patients</strong> — car accident injury rehabilitation covered by Ontario auto insurance</li>
              <li><strong>IFHP patients</strong> — refugees and asylum seekers with UCI numbers</li>
              <li><strong>WSIB patients</strong> — workplace injury rehabilitation</li>
              <li><strong>Seniors</strong> — arthritis management, fall prevention, and mobility improvement</li>
              <li><strong>Office workers</strong> — postural correction, ergonomics, and repetitive strain treatment</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">How to Choose the Right Wellness Center in Ottawa</h2>
            <p className="leading-relaxed">When evaluating Ottawa wellness clinics, consider:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Credentials</strong> — are all therapists registered with their Ontario regulatory colleges?</li>
              <li><strong>Insurance coverage</strong> — does the clinic accept your plan and offer direct billing?</li>
              <li><strong>Services offered</strong> — do they offer the specific treatment you need?</li>
              <li><strong>Location</strong> — is it accessible from your home or workplace?</li>
              <li><strong>Communication</strong> — do they explain your condition and involve you in your treatment plan?</li>
            </ul>
            <p className="leading-relaxed">LePro Wellness Center meets all of these criteria and welcomes patients from across Ottawa and surrounding communities.</p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Visit Ottawa's Trusted Wellness Center</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Suite 104 - 2 Gurdwara Road, Ottawa ON K2E 1A2 · Mon–Fri 9AM–4PM · +1 (613) 878-5060
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300">
                  <span>Book Appointment</span><ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://maps.app.goo.gl/vCoEidjfaJQ1B1ou5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300">
                  Get Directions
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500"><strong>Sources:</strong>{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">WHO — Musculoskeletal Conditions</a>,{" "}
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
