import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Star } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-2xl font-bold whitespace-nowrap">
                LePro Wellness Center
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Ottawa's trusted wellness center offering physiotherapy, registered massage therapy, and athletic therapy at Suite 104 - 2 Gurdwara Road, Ottawa ON K2E 1A2.
            </p>
            {/* Google Reviews Link */}
            <a
              href="https://maps.app.goo.gl/vCoEidjfaJQ1B1ou5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 text-sm mb-4 transition-colors"
            >
              <Star className="w-4 h-4 fill-yellow-400" />
              <span>Review us on Google</span>
            </a>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/leprowellnesscenter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LePro Wellness Center on Facebook"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/leprowellnesscenter.ca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LePro Wellness Center on Instagram"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/leprowellnesscenter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LePro Wellness Center on LinkedIn"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-100">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/vCoEidjfaJQ1B1ou5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Find Us on Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/physiotherapy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Physiotherapy Ottawa
                </Link>
              </li>
              <li>
                <Link href="/blog/pelvic-floor-physiotherapy-ottawa" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Pelvic Floor Physiotherapy
                </Link>
              </li>
              <li>
                <Link href="/services/athletic-therapy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Athletic Therapy Ottawa
                </Link>
              </li>
              <li>
                <Link href="/services/massage-therapy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Massage Therapy Ottawa
                </Link>
              </li>
              <li>
                <Link href="/services/accidental-therapy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  MVA Rehabilitation Ottawa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info — NAP consistent with Google Business */}
          <div className="animate-fade-in delay-300">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/vCoEidjfaJQ1B1ou5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Suite 104 - 2 Gurdwara Rd, Ottawa, ON K2E 1A2
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+16138785060"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  +1 (613) 878-5060
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:admin@leprowellnesscenter.ca"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  admin@leprowellnesscenter.ca
                </a>
              </li>
              <li className="text-gray-400 text-sm pl-8">Mon–Fri: 9AM–4PM</li>
            </ul>
          </div>
        </div>

        {/* Areas We Serve — boosts local SEO */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-gray-500 text-xs text-center mb-2 uppercase tracking-wider">Areas We Serve in Ottawa</p>
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            Nepean · Barrhaven · Kanata · Gloucester · Orléans · Centretown · Westboro · Hintonburg · Carlington · Merivale · South Keys · Hunt Club · Riverside South · Vanier · Stittsville · Manotick · Rockcliffe Park
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © {currentYear} LePro Wellness Center Ottawa. All rights reserved. | Suite 104 - 2 Gurdwara Rd, Ottawa ON K2E 1A2 | +1 (613) 878-5060
          </p>
          <p className="text-gray-500 text-xs">
            Designed by{" "}
            <a
              href="https://www.solvixcore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
            >
              Solvix Core
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
