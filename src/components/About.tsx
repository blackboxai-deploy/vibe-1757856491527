'use client'

import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

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

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '15+', label: 'Years Experience', icon: '🏆' },
    { number: '500+', label: 'Projects Delivered', icon: '🚀' },
    { number: '200+', label: 'Happy Clients', icon: '😊' },
    { number: '24/7', label: 'Support Available', icon: '🔧' },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies to drive business transformation and competitive advantage.',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18a5a661-e151-40ac-9f92-367bf2c9c10d.png"
    },
    {
      title: 'Reliability',
      description: '24/7 support and 99.9% uptime guarantee ensuring your business operations never stop.',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/669de064-6dc7-42bf-8c68-d2a6ba91561d.png"
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering exceptional service quality that exceeds client expectations.',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e35950f-c67c-415c-811b-4a476bb8b672.png"
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-green-400/20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Macani Solutions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading the digital transformation across the Middle East with innovative IT consulting, 
            comprehensive managed services, and strategic technology outsourcing solutions.
          </p>
        </div>

        {/* Company Story */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h3 className="text-3xl font-orbitron font-bold text-white mb-6">
              Pioneering Technology Excellence
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Founded with a vision to transform businesses through technology, Macani Solutions has established itself 
                as a trusted partner for organizations across Saudi Arabia, Dubai, and Riyadh.
              </p>
              <p>
                Our comprehensive approach combines strategic consulting, robust managed services, and efficient 
                outsourcing solutions to deliver measurable business value and operational excellence.
              </p>
              <p>
                With deep expertise in emerging technologies and a commitment to innovation, we help organizations 
                navigate their digital transformation journey with confidence and success.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bbd36556-1e6b-4784-bf83-a1a6efe3ce23.png"
              alt="Macani Solutions professional team in modern office"
              className="rounded-lg shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)';
                target.style.display = 'block';
                target.style.width = '600px';
                target.style.height = '400px';
              }}
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-transparent rounded-lg blur-lg -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 group-hover:border-green-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-center text-white mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)';
                      target.style.display = 'block';
                    }}
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-orbitron font-bold text-green-400 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About