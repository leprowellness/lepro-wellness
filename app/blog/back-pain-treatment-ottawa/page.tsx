import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Back Pain Treatment Ottawa | Best Physiotherapy for Back Pain | LePro Wellness 2026",
  description:
    "Suffering from back pain in Ottawa? Learn about the most effective physiotherapy treatments for lower back pain, herniated discs, and sciatica. Book your assessment at LePro Wellness today.",
  keywords: [
    "back pain treatment Ottawa",
    "lower back pain physiotherapy Ottawa",
    "back pain clinic Ottawa",
    "back pain physiotherapist Ottawa",
    "sciatica treatment Ottawa",
    "herniated disc physiotherapy Ottawa",
    "chronic back pain Ottawa",
    "back pain relief Ottawa",
    "physiotherapy for back pain Ottawa",
    "Ottawa back pain specialist",
  ],
  alternates: { canonical: "/blog/back-pain-treatment-ottawa" },
  openGraph: {
    title: "Back Pain Treatment Ottawa | Physiotherapy for Back Pain | LePro Wellness",
    description: "Effective physiotherapy treatments for back pain in Ottawa. Expert care for lower back pain, sciatica, and herniated discs.",
    url: "/blog/back-pain-treatment-ottawa",
    type: "article",
  },
}

export default function BackPainTreatmentOttawa() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 inline-block">Back Pain</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Back Pain Treatment in Ottawa: Best Physiotherapy Options in 2026
          </h1>
          <p className="text-xl text-emerald-50">Expert guide to treating lower back pain, sciatica, and chronic back conditions with physiotherapy in Ottawa.</p>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Article",
            "headline": "Back Pain Treatment in Ottawa: Best Physiotherapy Options in 2025",
            "author": { "@type": "Organization", "name": "LePro Wellness Center" },
            "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
            "datePublished": "2026-06-01",
          })}} />

          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Back pain is the <strong>leading cause of disability in Canada</strong>, affecting over 4 million Canadians at any given time. According to{" "}
              <a href="https://www.canada.ca/en/public-health/services/chronic-diseases/musculoskeletal-conditions.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Health Canada</a>,
              {" "}musculoskeletal conditions like back pain cost the Canadian economy over $20 billion annually in lost productivity. The good news? Physiotherapy is one of the most effective treatments available — and you don't need a doctor's referral to book in Ottawa.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Most Common Causes of Back Pain in Ottawa Patients</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Muscle strain from lifting or sudden movement","Prolonged sitting (office workers & remote workers)","Herniated or bulging discs","Sciatica — nerve pain radiating down the leg","Arthritis and spinal stenosis","Motor vehicle accident (MVA) injuries","Poor posture and weak core muscles","Sports injuries and overuse"].map(c => (
                <div key={c} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{c}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Physiotherapy Treatments for Back Pain at LePro Wellness Ottawa</h2>
            <p className="leading-relaxed">Our Ottawa physiotherapists use a combination of evidence-based techniques tailored to your specific condition:</p>

            <div className="space-y-4">
              {[
                { title: "Manual Therapy", desc: "Hands-on joint mobilization and soft tissue techniques that directly target the source of pain and restore mobility. Proven effective for acute and chronic lower back pain." },
                { title: "Dry Needling / IMS", desc: "Intramuscular Stimulation (IMS) targets deep muscle trigger points that cause referred pain and nerve irritation — highly effective for chronic back pain that hasn't responded to other treatments." },
                { title: "Therapeutic Exercise", desc: "A customized program of core strengthening, flexibility, and functional movement exercises that address the root cause of your pain and prevent recurrence." },
                { title: "Postural Correction", desc: "Ergonomic assessment and postural retraining — especially important for Ottawa office workers spending long hours at desks." },
                { title: "Education & Self-Management", desc: "Understanding your condition empowers you to manage flare-ups and make lifestyle changes that support long-term back health." },
              ].map(t => (
                <div key={t.title} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">How Long Does Back Pain Physiotherapy Take?</h2>
            <p className="leading-relaxed">Recovery timelines vary depending on severity. As a general guide:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Acute back pain (less than 6 weeks):</strong> 4–8 sessions over 4–6 weeks</li>
              <li><strong>Subacute back pain (6–12 weeks):</strong> 8–12 sessions over 8–10 weeks</li>
              <li><strong>Chronic back pain (over 3 months):</strong> 12–20+ sessions with ongoing home exercise</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Is Physiotherapy for Back Pain Covered by Insurance in Ottawa?</h2>
            <p className="leading-relaxed">
              Yes. Most extended health benefit plans in Ontario cover physiotherapy. MVA patients are covered under Ontario's Statutory Accident Benefits. WSIB covers workplace injury-related back pain. IFHP covers eligible refugees and asylum claimants. At LePro Wellness, we direct bill most major insurers.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Book Back Pain Physiotherapy in Ottawa</h2>
              <p className="text-gray-700 mb-6">LePro Wellness Center — Suite 104, 2 Gurdwara Rd, Ottawa ON K2E 1A2. Same-week appointments available.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300">
                  <span>Book Assessment</span><ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/physiotherapy" className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300">
                  Our Physiotherapy Services
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500"><strong>Sources:</strong>{" "}
                <a href="https://www.canada.ca/en/public-health/services/chronic-diseases/musculoskeletal-conditions.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Health Canada — Musculoskeletal Conditions</a>,{" "}
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
            <Link href="/blog/massage-therapy-benefits-ottawa" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">7 Benefits of Registered Massage Therapy</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
