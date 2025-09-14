'use client'

import { useState, useEffect } from 'react'
import BackgroundSlider from './BackgroundSlider'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const heroTexts = [
    'IT Consulting Excellence',
    'Managed Services Solutions',
    'Technology Outsourcing',
    'Digital Transformation'
  ]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (isTyping) {
      if (displayText.length < heroTexts[currentText].length) {
        timeout = setTimeout(() => {
          setDisplayText(heroTexts[currentText].slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentText((prev) => (prev + 1) % heroTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentText, heroTexts])

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <BackgroundSlider />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
      
      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6">
            <span className="text-white block mb-2">MACANI</span>
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </h1>

          {/* Animated Tagline */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-400">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses across <span className="text-green-400 font-semibold">Saudi Arabia</span>, 
            <span className="text-green-400 font-semibold"> Dubai</span>, and 
            <span className="text-green-400 font-semibold"> Riyadh</span> with cutting-edge technology solutions 
            and professional managed services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('services')}
              className="group bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-300 text-sm md:text-base">Major Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-green-400 text-sm mb-2 animate-pulse">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero