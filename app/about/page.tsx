import { Heart, Target, Users, Award, CheckCircle, Activity, BriefcaseMedical, Hand, Dumbbell } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Lepro Wellness Center Ottawa | Expert Healthcare Team Ontario",
  description: "Learn about Ottawa's premier wellness center. Expert physiotherapy, massage therapy, athletic therapy & MVA rehabilitation. IFHP coverage accepted. Licensed Canadian healthcare professionals.",
  keywords: [
    "about lepro wellness center",
    "ottawa wellness center team",
    "physiotherapy clinic ottawa",
    "healthcare professionals ottawa",
    "IFHP coverage ottawa",
    "MVA rehabilitation ottawa",
    "licensed therapists ontario",
    "wellness center about us"
  ],
  openGraph: {
    title: "About Lepro Wellness Center Ottawa | Expert Healthcare Team",
    description: "Learn about Ottawa's premier wellness center offering expert physiotherapy, massage therapy, and athletic therapy services.",
    url: 'https://leprowellness.ca/about',
  },
}

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from treatment to customer service.",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your health goals are our priority. We create personalized treatment plans for each individual.",
    },
    {
      icon: Award,
      title: "Professional Expertise",
      description: "Our team consists of highly trained, certified professionals with years of experience.",
    },
  ]


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down">
              About Lepro Wellness Center
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto animate-slide-up delay-100">
              Comprehensive wellness, rehabilitation, and mental health services in Ottawa, Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>Lepro Wellness Center</strong>, your comprehensive destination for wellness,
            rehabilitation, and mental health support in <strong>Ottawa, Ontario</strong>. We are dedicated to helping
            our community achieve better physical, mental, and emotional well-being through a variety of specialized
            services. Individuals covered by Interim Federal Health Program (IFHP coverage with UCI number) are welcome
            to get their treatment at our wellness center.
          </p>
          <p>
            At Lepro Wellness Center, we believe in a holistic approach to health. Our experienced team offers a range of
            services to support injury recovery, pain management, stress relief, and mental wellness. Our mission is to
            empower you with the tools and care you need to live a healthy, balanced life. We take pride in being a
            trusted wellness center in Ottawa, bringing together skilled professionals across physiotherapy, athletic
            therapy, clinical psychology, and massage therapy. We also specialize in Motor Vehicle Accident (MVA)
            treatment, offering tailored physiotherapy and rehabilitation services to help individuals recover from
            accident-related injuries.
          </p>
        </div>
      </section>

     {/* Therapies Section */}
<section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
        Our Specialized Therapies
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up delay-100">
        Personalized treatments to restore health, reduce pain, and promote long-term wellness
      </p>
    </div>

    <div className="space-y-8">
      {/* Physiotherapy */}
      <div className="w-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 animate-scale-in">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <Activity className="w-16 h-16 text-emerald-600 mb-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Physiotherapy</h3>
            <p className="text-gray-600 leading-relaxed">
              Our physiotherapy services focus on restoring movement and functionality for those affected by injury or
              physical limitations. We help manage pain, rebuild strength, and prevent future injuries.
            </p>
          </div>
        </div>
      </div>

      {/* Athletic Therapy */}
      <div className="w-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 animate-scale-in delay-100">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <Dumbbell className="w-16 h-16 text-emerald-600 mb-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Athletic Therapy</h3>
            <p className="text-gray-600 leading-relaxed">
              Our specialists provide personalized core and muscle training, collaborating with physiotherapists and
              physicians to ensure a complete recovery approach.
            </p>
          </div>
        </div>
      </div>

      {/* Accidental Therapy */}
      <div className="w-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 animate-scale-in delay-200">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <BriefcaseMedical className="w-16 h-16 text-emerald-600 mb-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accidental Therapy</h3>
            <p className="text-gray-600 leading-relaxed">
              We provide specialized therapy for motor vehicle accidents, workplace injuries, and unexpected trauma.
              Our multidisciplinary team works together to restore mobility and improve quality of life after an accident.
            </p>
          </div>
        </div>
      </div>

      {/* Massage Therapy */}
      <div className="w-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 animate-scale-in delay-300">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <Hand className="w-16 h-16 text-emerald-600 mb-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Massage Therapy</h3>
            <p className="text-gray-600 leading-relaxed">
              Our certified massage therapists provide soothing and targeted techniques for muscle recovery,
              relaxation, and pain relief tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Rehabilitation & Sports Therapy */}
      <div className="w-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 animate-scale-in delay-400">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <Users className="w-16 h-16 text-emerald-600 mb-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rehabilitation & Sports Therapy</h3>
            <p className="text-gray-600 leading-relaxed">
              Specialized rehabilitation and sports therapy designed to help athletes recover from injuries, enhance
              performance, and maintain long-term wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up delay-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>


    </div>
  )
}
