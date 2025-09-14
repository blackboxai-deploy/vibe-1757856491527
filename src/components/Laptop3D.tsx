'use client'

import { useState, useEffect, useRef } from 'react'

const Laptop3D = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const laptopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    })

    if (laptopRef.current) {
      observer.observe(laptopRef.current)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  // Calculate position based on scroll
  const calculatePosition = () => {
    if (typeof window === 'undefined') {
      return {
        transform: 'translate3d(0px, 0px, 0) rotateY(0deg) rotateX(-10deg)',
        opacity: 0,
      }
    }

    const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)
    const translateX = Math.sin(scrollProgress * Math.PI * 2) * 200
    const translateY = scrollProgress * 100
    const rotateY = scrollProgress * 360
    
    return {
      transform: `translate3d(${translateX}px, ${translateY}px, 0) rotateY(${rotateY}deg) rotateX(-10deg)`,
      opacity: isVisible ? Math.max(0.3, 1 - scrollProgress * 2) : 0,
    }
  }

  return (
    <div
      ref={laptopRef}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden lg:block"
      style={calculatePosition()}
    >
      <div className="laptop-container perspective-1000">
        {/* Laptop Base */}
        <div className="laptop-base relative w-64 h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-2xl">
          {/* Base highlights */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent rounded-lg" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-400/50 rounded-full" />
        </div>
        
        {/* Laptop Screen */}
        <div 
          className="laptop-screen absolute -top-40 left-1/2 transform -translate-x-1/2 w-60 h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg border-4 border-gray-700 shadow-2xl"
          style={{ transformOrigin: 'bottom center', transform: 'rotateX(-95deg)' }}
        >
          {/* Screen Content */}
          <div className="w-full h-full bg-black rounded-sm p-2 overflow-hidden relative">
            {/* Terminal-like interface */}
            <div className="text-green-400 font-mono text-xs leading-tight">
              <div className="flex items-center mb-1">
                <div className="flex space-x-1 mr-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>macani@solutions:~$</span>
              </div>
              <div className="space-y-1 opacity-80">
                <div>{'> Initializing IT Services...'}</div>
                <div>{'> Connecting to Saudi Arabia...'}</div>
                <div>{'> Establishing Dubai Link...'}</div>
                <div>{'> Riyadh Systems Online...'}</div>
                <div className="text-green-300">{'> All Systems Operational ✓'}</div>
              </div>
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-green-400/5 to-transparent animate-pulse" />
          </div>
          
          {/* Screen bezel glow */}
          <div className="absolute -inset-1 bg-green-400/20 rounded-t-lg blur-sm -z-10" />
        </div>
        
        {/* Hinge */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full shadow-inner" />
        
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-green-400/10 rounded-lg blur-xl scale-150 -z-20 animate-pulse" />
      </div>
    </div>
  )
}

export default Laptop3D