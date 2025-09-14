'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Laptop3D from '@/components/Laptop3D'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none z-0" />
      
      {/* Main content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        
        {/* 3D Laptop - positioned to float across sections */}
        <Laptop3D />
        
        {/* Page sections */}
        <Hero />
        <About />
        <Services />
        <Locations />
        <Contact />
        <Footer />
      </div>
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mb-4"></div>
            <p className="text-green-400 font-orbitron text-lg">Loading Macani Solutions...</p>
          </div>
        </div>
      )}
    </main>
  )
}