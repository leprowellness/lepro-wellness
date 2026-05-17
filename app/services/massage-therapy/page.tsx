import Link from "next/link"
import { Heart, CheckCircle, ArrowRight, Sparkles, Wind, Droplets } from "lucide-react"
import type { Metadata } from "next"



export const metadata: Metadata = {
  title: "Massage Therapy Ottawa | Registered Massage Therapist (RMT) | LePro Wellness",
  description:
    "Registered massage therapy (RMT) in Ottawa, Ontario. Relieve back pain, neck stiffness, and muscle tension. Insurance direct billing available. Book your session at LePro Wellness today.",
  keywords: [
    "massage therapy Ottawa",
    "registered massage therapist Ottawa",
    "RMT Ottawa",
    "massage therapist Ottawa",
    "deep tissue massage Ottawa",
    "relaxation massage Ottawa",
    "back pain massage Ottawa",
    "neck pain massage Ottawa",
    "sports massage Ottawa",
    "therapeutic massage Ottawa",
    "massage therapy near me Ottawa",
    "best massage therapist Ottawa",
    "Ottawa massage clinic",
    "insurance massage therapy Ottawa",
    "direct billing massage Ottawa",
  ],
  alternates: { canonical: "/services/massage-therapy" },
  openGraph: {
    title: "Massage Therapy Ottawa | Registered RMT | LePro Wellness",
    description:
      "Registered massage therapy in Ottawa for back pain, neck stiffness, and stress relief. Insurance direct billing available.",
    url: "/services/massage-therapy",
    siteName: "LePro Wellness Center",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Therapy Ottawa | RMT | LePro Wellness",
    description: "Registered massage therapy in Ottawa. Relieve pain, reduce stress, and improve mobility. Book today.",
  },
};

export default function MassageTherapy() {
  const benefits = [
    "Stress and tension relief",
    "Improved circulation",
    "Pain management",
    "Enhanced flexibility",
    "Better sleep quality",
    "Boosted immune system",
  ]

  const massageServices = [
    {
      title: "Initial Assessment & Treatment",
      price: "$125",
      duration: "85 minutes session",
      provider: "John",
    },
    {
      title: "60 minutes Massage Therapy",
      price: "$58.19",
      duration: "60 minutes",
      provider: "John",
    },
    {
      title: "90 minutes Massage Therapy session",
      price: "$90",
      duration: "90 minutes",
      provider: "John",
    },
  ]

  const features = [
    {
      icon: Sparkles,
      title: "Relaxation",
      description: "Melt away stress and tension in a peaceful environment",
    },
    {
      icon: Wind,
      title: "Healing",
      description: "Promote natural healing and recovery processes",
    },
    {
      icon: Droplets,
      title: "Rejuvenation",
      description: "Restore energy and vitality to body and mind",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="relative md:min-h-[600px] text-white py-32">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/massage-background.mp4" type="video/mp4" />
  </video>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center items-center space-x-3 mb-6">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
        <Heart className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">Massage Therapy in Ottawa, Ontario for Back Pain & Stiffness</h1>
    </div>

    <p className="text-xl text-teal-50 mb-8 leading-relaxed">
       Dealing with lower back pain, neck stiffness, or tight muscles from long hours of sitting? Our massage therapy in Ottawa helps release tension, improve mobility, and support recovery with a personalized treatment plan.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <span>Book Appointment</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>


      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-slide-up">
            Massage Therapy Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {massageServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{service.price}</p>
                <p className="text-gray-600 mb-1">{service.duration}</p>
                <p className="text-gray-500 mb-4">Offered by {service.provider}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Back Pain & Stiffness Section */}
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Massage Therapy for Back Pain & Stiffness in Ottawa
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Back pain and stiffness often come from muscle tension, prolonged sitting, stress, or overuse. Massage
        therapy can help by relaxing tight areas, improving circulation, and restoring comfortable movement —
        especially when your treatment is tailored to your symptoms and goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-2">Common issues we help with</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Lower back tightness & stiffness</li>
            <li>• Neck and shoulder tension</li>
            <li>• Posture-related muscle pain</li>
            <li>• Exercise soreness & recovery</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-2">What you may feel after</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Less tension and improved range of motion</li>
            <li>• Easier movement during daily activities</li>
            <li>• Reduced stress and better sleep</li>
            <li>• A clearer recovery plan (60/90 min options)</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 px-7 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span>Book Massage Therapy</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Massage Therapy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Regular massage therapy offers numerous physical and mental health benefits:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-right">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-600 p-1">
                <img
                  src="/massage-therapy-benefits-wellness.jpg"
                  alt="Massage therapy session benefits at Lepro Wellness"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Experience the Healing Touch</h2>
          <p className="text-xl mb-8 text-teal-50 animate-slide-up delay-100">
            Book your massage therapy session today and discover the path to relaxation and wellness.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Book Your Session</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
