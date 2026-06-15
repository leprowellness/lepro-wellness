import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sports Injury Rehabilitation Ottawa | Athletic Therapy & Recovery | LePro Wellness",
  description:
    "Injured during sports in Ottawa? Our expert athletic therapists and physiotherapists provide fast, effective sports injury rehabilitation. Knee, shoulder, ankle injuries treated. Book today.",
  keywords: [
    "sports injury rehab Ottawa",
    "sports injury physiotherapy Ottawa",
    "athletic therapy Ottawa",
    "sports injury treatment Ottawa",
    "knee injury physiotherapy Ottawa",
    "shoulder injury treatment Ottawa",
    "ankle sprain treatment Ottawa",
    "ACL rehab Ottawa",
    "sports medicine Ottawa",
    "return to sport Ottawa",
    "Ottawa sports injury clinic",
  ],
  alternates: { canonical: "/blog/sports-injury-rehab-ottawa" },
  openGraph: {
    title: "Sports Injury Rehabilitation Ottawa | LePro Wellness",
    description: "Fast, expert sports injury rehabilitation in Ottawa. Physiotherapy and athletic therapy for all sports injuries.",
    url: "/blog/sports-injury-rehab-ottawa",
    type: "article",
  },
}

export default function SportsInjuryRehabOttawa() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 inline-block">Sports Injury</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sports Injury Rehabilitation in Ottawa: Get Back in the Game Faster
          </h1>
          <p className="text-xl text-blue-50">Expert athletic therapy and physiotherapy for sports injuries in Ottawa — from weekend warriors to competitive athletes.</p>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Article",
            "headline": "Sports Injury Rehabilitation in Ottawa: Get Back in the Game Faster",
            "author": { "@type": "Organization", "name": "LePro Wellness Center" },
            "publisher": { "@type": "Organization", "name": "LePro Wellness Center", "url": "https://www.leprowellnesscenter.ca" },
            "datePublished": "2026-06-05",
          })}} />

          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Whether you play hockey, soccer, basketball, or simply enjoy running along the Rideau Canal, sports injuries are a reality for Ottawa's active community. The key to a full recovery isn't just rest — it's <strong>structured, professional rehabilitation</strong> that addresses the injury, restores strength, and prevents re-injury. According to{" "}
              <a href="https://www.csep.ca" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">the Canadian Society for Exercise Physiology (CSEP)</a>,
              {" "}early active rehabilitation consistently produces better outcomes than passive rest alone.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Most Common Sports Injuries We Treat in Ottawa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Knee injuries (ACL, MCL, meniscus tears)","Ankle sprains and ligament injuries","Shoulder injuries (rotator cuff, labrum)","Tennis elbow and golfer's elbow","Hamstring and quad strains","Shin splints and stress fractures","Concussions and head injuries","IT band syndrome (runner's knee)","Hip flexor and groin strains","Achilles tendinopathy"].map(c => (
                <div key={c} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{c}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Sports Injury Rehabilitation Approach in Ottawa</h2>
            <div className="space-y-4">
              {[
                { phase: "Phase 1 — Acute Care", desc: "Reduce pain and inflammation, protect the injury, and maintain fitness through safe alternative exercise. Manual therapy and modalities used to accelerate healing." },
                { phase: "Phase 2 — Rehabilitation", desc: "Restore range of motion, strength, and neuromuscular control. Sport-specific movement patterns introduced progressively." },
                { phase: "Phase 3 — Performance", desc: "Advanced strength and conditioning, agility training, and sport-specific drills to ensure you return at full performance, not just pain-free." },
                { phase: "Phase 4 — Return to Sport", desc: "Functional testing and gradual return-to-play protocol to minimize re-injury risk. We clear you for sport only when it's truly safe." },
              ].map(p => (
                <div key={p.phase} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{p.phase}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Why Choose LePro Wellness for Sports Injury Rehab in Ottawa?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Licensed physiotherapists and certified athletic therapists</li>
              <li>Evidence-based, sport-specific rehabilitation programs</li>
              <li>Direct insurance billing — most extended health plans accepted</li>
              <li>Located at Suite 104 - 2 Gurdwara Road, easily accessible from Nepean, Barrhaven, and South Ottawa</li>
              <li>Same-week appointments available</li>
            </ul>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Book Sports Injury Assessment in Ottawa</h2>
              <p className="text-gray-700 mb-6">Don't let an injury keep you on the sidelines. Contact LePro Wellness Center today — Suite 104, 2 Gurdwara Rd, Ottawa ON K2E 1A2.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300">
                  <span>Book Now</span><ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/athletic-therapy" className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300">
                  Athletic Therapy Services
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500"><strong>Sources:</strong>{" "}
                <a href="https://www.csep.ca" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Canadian Society for Exercise Physiology</a>,{" "}
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
            <Link href="/blog/back-pain-treatment-ottawa" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mb-2">Back Pain Treatment Ottawa</h3>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center space-x-1"><span>Read More</span><ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
