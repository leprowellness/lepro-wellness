import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pelvic Floor Physiotherapy Ottawa | Top Pelvic Health Clinic | LePro Wellness 2026",
  description:
    "Expert pelvic floor physiotherapy in Ottawa. Treat urinary incontinence, pelvic pain, prenatal & postnatal recovery, and pelvic organ prolapse. Book online today.",
  keywords: [
    "pelvic floor physiotherapy Ottawa",
    "pelvic floor therapy Ottawa",
    "pelvic health physiotherapist Ottawa",
    "incontinence treatment Ottawa",
    "postpartum physiotherapy Ottawa",
    "pregnancy pelvic floor physio Ottawa",
    "Ottawa pelvic health clinic",
    "pelvic pain relief Ottawa",
    "core and pelvic floor rehabilitation Ottawa",
  ],
  alternates: { canonical: "/blog/pelvic-floor-physiotherapy-ottawa" },
  openGraph: {
    title: "Pelvic Floor Physiotherapy Ottawa | LePro Wellness Center",
    description: "Tailored pelvic floor physiotherapy in Ottawa for incontinence, postpartum recovery, and pelvic pain. Professional, comfortable clinic.",
    url: "/blog/pelvic-floor-physiotherapy-ottawa",
    type: "article",
  },
}

export default function PelvicFloorPhysiotherapyOttawa() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 inline-block">Pelvic Health</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Pelvic Floor Physiotherapy Ottawa: The Complete 2026 Recovery Guide
          </h1>
          <p className="text-xl text-emerald-50">Empowering your recovery, restoring function, and eliminating pelvic pain or incontinence in Ottawa.</p>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Article",
            "headline": "Pelvic Floor Physiotherapy Ottawa: The Complete 2026 Recovery Guide",
            "author": { "@type": "Organization", "name": "LePro Wellness Center" },
            "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
            "datePublished": "2026-06-26",
          })}} />

          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Pelvic floor physiotherapy has emerged as one of the fastest-growing areas of specialized healthcare in Ottawa, Ontario. While once rarely discussed, thousands of Ottawa residents now seek pelvic floor rehabilitation to resolve bladder leakage, bowel issues, pelvic organ prolapse, and pain during intimacy.
            </p>
            <p className="leading-relaxed">
              The pelvic floor is a critical group of muscles at the base of your pelvis, supporting your bladder, uterus (in women), and bowel. When these muscles are too tight, too weak, or poorly coordinated, they can cause symptoms that disrupt your daily life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Common Symptoms Treated with Pelvic Floor Physiotherapy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Urinary incontinence (leaking when coughing, laughing, or exercising)",
                "Frequent or sudden urgency to urinate",
                "Pelvic organ prolapse (feeling of pressure or bulging)",
                "Pain during or after intimacy / sexual activity",
                "Pregnancy-related pelvic girdle and pubic symphysis pain",
                "Postpartum rehabilitation (core weakness, diastasis recti)",
                "Chronic pelvic pain syndrome (CPPS)",
                "Tailbone pain (coccydynia) and lower back pain"
              ].map(c => (
                <div key={c} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{c}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">What to Expect During Your Ottawa Pelvic Floor Assessment</h2>
            <p className="leading-relaxed">
              Your comfort and privacy are our top priorities. At LePro Wellness Center, all sessions take place in a private, quiet room. Your first session will include a thorough discussion of your medical history, symptoms, and lifestyle goals. If you are comfortable, an internal assessment may be recommended to check muscle strength, tone, and coordination. This is the gold standard for creating a precise treatment plan, though we can begin treatment using external evaluation techniques if you prefer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">How Pelvic Floor Physiotherapy Can Help</h2>
            <p className="leading-relaxed">Based on your evaluation, your plan may include:</p>

            <div className="space-y-4">
              {[
                { title: "Targeted Strengthening (Kegels & Beyond)", desc: "If weakness is identified, we guide you on how to perform pelvic floor exercises correctly. Research shows up to 50% of people perform Kegels incorrectly without guidance." },
                { title: "Myofascial Release & Muscle Relaxation", desc: "If your pelvic floor muscles are hypertonic (too tight), we use gentle internal and external manual techniques to release tension and relieve pain." },
                { title: "Core & Pelvis Integration", desc: "We integrate pelvic floor exercises with your abdominal, hip, and diaphragm function to restore stable, whole-body movement." },
                { title: "Bladder & Bowel Retraining", desc: "Practical guidance on dietary adjustments, optimal posture, and behavioral strategies to regulate habits and eliminate urgency." }
              ].map(t => (
                <div key={t.title} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Is Pelvic Floor Physiotherapy Covered by Insurance in Ottawa?</h2>
            <p className="leading-relaxed">
              Yes, pelvic floor physiotherapy is performed by a Registered Physiotherapist, meaning it falls under standard physiotherapy coverage in your extended health benefits plan. LePro Wellness Center offers direct billing to major insurance providers, making it easy to access the care you need.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Schedule Your Private Pelvic Floor Assessment in Ottawa</h2>
              <p className="text-gray-700 mb-6">LePro Wellness Center — Suite 104, 2 Gurdwara Rd, Ottawa ON K2E 1A2. Same-day or same-week appointments available.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300">
                  <span>Book Private Assessment</span><ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/physiotherapy" className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300">
                  All Physiotherapy Services
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500"><strong>Sources:</strong>{" "}
                <a href="https://www.collegept.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">College of Physiotherapists of Ontario</a>,{" "}
                <a href="https://www.canada.ca/en/public-health.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Public Health Agency of Canada</a>
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
            <Link href="/blog/back-pain-treatment-ottawa" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">Back Pain Treatment in Ottawa: Best Physiotherapy Options</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
