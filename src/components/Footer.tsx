'use client'

import Link from 'next/link'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'IT Consulting', href: '#services' },
    { name: 'Managed Services', href: '#services' },
    { name: 'Technology Outsourcing', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
  ]

  const locations = [
    { name: 'Riyadh Office', href: '#locations' },
    { name: 'Dubai Office', href: '#locations' },
    { name: 'Jeddah Office', href: '#locations' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact Us', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-950 border-t border-green-400/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="footer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" className="text-green-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-orbitron font-bold text-2xl">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">Macani</h3>
                  <p className="text-green-400 text-sm">Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering businesses across the Middle East with innovative IT consulting, 
                comprehensive managed services, and strategic technology solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-all duration-300"
                  aria-label="Twitter"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-all duration-300"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-all duration-300"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-orbitron font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.href.substring(1))}
                      className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-lg font-orbitron font-bold text-white mb-6">Locations</h4>
              <ul className="space-y-3">
                {locations.map((location) => (
                  <li key={location.name}>
                    <button
                      onClick={() => scrollToSection(location.href.substring(1))}
                      className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                    >
                      {location.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-gray-500 text-sm mb-2">Emergency Support</p>
                <p className="text-green-400 font-semibold">24/7 Available</p>
                <p className="text-gray-400 text-sm">+966 11 XXX XXXX</p>
              </div>
            </div>

            {/* Quick Links & Contact */}
            <div>
              <h4 className="text-lg font-orbitron font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 mb-6">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-gray-500 text-sm mb-2">Contact Info</p>
                <p className="text-white font-semibold mb-1">info@macani.llc</p>
                <p className="text-gray-400 text-sm">macani.llc</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-xl font-orbitron font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest technology insights and company updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Macani Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-black font-bold hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-110 transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer