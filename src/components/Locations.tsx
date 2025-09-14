'use client'

import { useState, useEffect } from 'react'

const Locations = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeLocation, setActiveLocation] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    const locationsSection = document.getElementById('locations')
    if (locationsSection) {
      observer.observe(locationsSection)
    }

    return () => observer.disconnect()
  }, [])

  const locations = [
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      description: 'Our headquarters in the heart of Saudi Arabia\'s capital, serving as the central hub for our regional operations.',
      address: 'King Fahd Road, Olaya District',
      phone: '+966 11 XXX XXXX',
      email: 'riyadh@macani.llc',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f15cc683-8b0d-4eb8-bb65-d6cc092eb58e.png",
      highlights: [
        'Regional Headquarters',
        '24/7 Operations Center',
        'Training & Development Hub',
        'Government Relations Office'
      ],
      flag: '🇸🇦',
      timezone: 'AST (UTC+3)'
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      description: 'Strategic location in Dubai\'s business district, connecting us with international clients and partners.',
      address: 'Sheikh Zayed Road, DIFC',
      phone: '+971 4 XXX XXXX',
      email: 'dubai@macani.llc',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3db5f6b6-6fbe-4e7c-826f-4e0d1c29209a.png",
      highlights: [
        'International Business Hub',
        'Client Services Center',
        'Technology Innovation Lab',
        'Regional Sales Office'
      ],
      flag: '🇦🇪',
      timezone: 'GST (UTC+4)'
    },
    {
      city: 'Jeddah',
      country: 'Saudi Arabia',
      description: 'Serving the western region of Saudi Arabia with comprehensive IT solutions and local expertise.',
      address: 'Corniche Road, Al Hamra District',
      phone: '+966 12 XXX XXXX',
      email: 'jeddah@macani.llc',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57f60ddd-f8ac-4e1c-89d0-480a3bfea8f4.png",
      highlights: [
        'Western Region Office',
        'Maritime Solutions',
        'Local Support Team',
        'Cultural Integration Center'
      ],
      flag: '🇸🇦',
      timezone: 'AST (UTC+3)'
    }
  ]

  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="locations" className="py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="hexagons" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 18,6 18,14 10,19 2,14 2,6" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-green-400/20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Locations
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategically positioned across key business centers in the Middle East to serve our clients with local expertise and global standards.
          </p>
        </div>

        {/* Location Selection */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => setActiveLocation(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeLocation === index
                  ? 'bg-gradient-to-r from-green-400 to-green-600 text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-green-400'
              }`}
            >
              <span className="text-2xl">{location.flag}</span>
              <span>{location.city}</span>
            </button>
          ))}
        </div>

        {/* Active Location Details */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Location Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={locations[activeLocation].image}
                  alt={`${locations[activeLocation].city} office location`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)';
                    target.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="text-3xl">{locations[activeLocation].flag}</span>
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold">{locations[activeLocation].city}</h3>
                      <p className="text-green-400">{locations[activeLocation].country}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="p-8">
                <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                  {locations[activeLocation].city} Office
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {locations[activeLocation].description}
                </p>

                {/* Contact Information */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400">📍</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-400">{locations[activeLocation].address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400">📞</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-400">{locations[activeLocation].phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400">✉️</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-400">{locations[activeLocation].email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400">🌍</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Timezone</p>
                      <p className="text-gray-400">{locations[activeLocation].timezone}</p>
                    </div>
                  </div>
                </div>

                {/* Office Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Office Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {locations[activeLocation].highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-300"
                >
                  Contact This Office
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-400/10 via-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Regional Coverage
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              With offices strategically located across the Middle East, we provide seamless service delivery and local expertise to clients throughout the region.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🇸🇦</div>
                <h4 className="font-semibold text-white mb-1">Saudi Arabia</h4>
                <p className="text-gray-400 text-sm">Riyadh & Jeddah</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🇦🇪</div>
                <h4 className="font-semibold text-white mb-1">United Arab Emirates</h4>
                <p className="text-gray-400 text-sm">Dubai</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🌍</div>
                <h4 className="font-semibold text-white mb-1">Regional Support</h4>
                <p className="text-gray-400 text-sm">GCC Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations