'use client'

import { useState, useEffect } from 'react'

const BackgroundSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97ed0f1b-57d8-4a8e-8cc7-c2e5b547ec54.png",
      alt: "Modern data center with green LED server lights"
    },
    {
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43b0fb18-4a82-4c92-af93-9b56bfdd19a3.png",
      alt: "Professional IT team collaborating in modern office"
    },
    {
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e725ce5-b5b0-400c-b7eb-47695dbf674d.png",
      alt: "Futuristic network connectivity with green digital elements"
    },
    {
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd30e2b5-647b-4c35-9a42-07feccf85c58.png",
      alt: "Modern corporate buildings in Middle East skyline at night"
    },
    {
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5148f76a-e710-420a-9f7f-1d38010d3769.png",
      alt: "Advanced cloud computing with green holographic displays"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.background = 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)';
              target.style.display = 'block';
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-green-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundSlider