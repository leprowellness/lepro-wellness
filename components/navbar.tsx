"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const services = [
    { name: "Physiotherapy", path: "/services/physiotherapy" },
    { name: "Athletic Therapy", path: "/services/athletic-therapy" },
    { name: "Massage Therapy", path: "/services/massage-therapy" },
    { name: "Accidental Therapy", path: "/services/accidental-therapy" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-28">
{/* Logo + Text */}
<Link
  href="/"
  className="flex items-center justify-center md:justify-start space-x-3 group"
>
  <Image
    src="/logoo.png"
    alt="Lepro Wellness Logo"
    width={200}
    height={200}
    className="transition-transform duration-300 group-hover:scale-105 max-w-[140px] sm:max-w-[160px] md:max-w-[200px] h-auto"
    priority
  />
  <div className="flex flex-col leading-tight">
    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
      Lepro Wellness Center
    </h1>
    <p className="text-xs sm:text-sm md:text-base text-gray-600">
      Your Path to Better Health
    </p>
  </div>
</Link>




          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-base font-medium transition-all duration-300 hover:text-emerald-600 ${
                isActive("/") ? "text-emerald-600 border-b-2 border-emerald-600" : "text-gray-700"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 text-base font-medium transition-all duration-300 hover:text-emerald-600 ${
                  pathname.startsWith("/services") ? "text-emerald-600" : "text-gray-700"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service, index) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 hover:pl-6 ${
                      isActive(service.path) ? "bg-emerald-50 text-emerald-600" : "text-gray-700"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className={`text-base font-medium transition-all duration-300 hover:text-emerald-600 ${
                isActive("/about")
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-700"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                isActive("/contact") ? "shadow-lg scale-105" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    onClick={() => setIsOpen(false)}
                    className={`block pl-8 pr-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive(service.path)
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive("/about")
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mx-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-full text-center hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
