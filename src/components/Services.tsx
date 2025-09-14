'use client'

import { useState, useEffect } from 'react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

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

    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      observer.observe(servicesSection)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting and digital transformation guidance',
      longDescription: 'Our expert consultants work closely with your organization to develop comprehensive technology strategies that align with your business objectives. From digital transformation roadmaps to technology assessments, we provide the insights and guidance needed to make informed decisions.',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/405e38ea-acae-4a84-b757-18f70eae07cd.png",
      features: [
        'Digital Strategy Development',
        'Technology Assessment & Audit',
        'Infrastructure Planning',
        'Security Consulting',
        'Compliance & Governance',
        'Change Management'
      ],
      icon: '💡'
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive 24/7 IT support and infrastructure management',
      longDescription: 'Our managed services provide complete peace of mind with round-the-clock monitoring, proactive maintenance, and immediate response to any IT issues. We become your dedicated IT department, ensuring optimal performance and minimal downtime.',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2878befc-0317-4e09-8783-f98e61ff613c.png",
      features: [
        '24/7 System Monitoring',
        'Proactive Maintenance',
        'Help Desk Support',
        'Network Management',
        'Data Backup & Recovery',
        'Security Management'
      ],
      icon: '🔧'
    },
    {
      title: 'Technology Outsourcing',
      description: 'Complete IT operations and development outsourcing solutions',
      longDescription: 'Scale your technology capabilities with our comprehensive outsourcing solutions. From software development teams to complete IT operations, we provide the expertise and resources to accelerate your business growth while reducing costs.',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/431d5c8a-c33b-4888-939a-a2fbf4000675.png",
      features: [
        'Software Development',
        'Quality Assurance Testing',
        'DevOps & Automation',
        'Cloud Migration',
        'Application Maintenance',
        'Technical Support'
      ],
      icon: '🚀'
    },
    {
      title: 'Cloud Solutions',
      description: 'Enterprise cloud infrastructure and migration services',
      longDescription: 'Accelerate your digital transformation with our comprehensive cloud solutions. We help organizations migrate to the cloud, optimize their infrastructure, and leverage cloud-native technologies for improved scalability and efficiency.',
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa733528-c5c3-480c-9ae5-280ef57b8a66.png",
      features: [
        'Cloud Strategy & Planning',
        'Migration Services',
        'Multi-Cloud Management',
        'Cloud Security',
        'Cost Optimization',
        'Disaster Recovery'
      ],
      icon: '☁️'
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
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                activeService === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`bg-gray-900/50 backdrop-blur-sm border-2 rounded-lg p-6 h-full transition-all duration-300 ${
                activeService === index 
                  ? 'border-green-400 shadow-lg shadow-green-400/25' 
                  : 'border-gray-700 hover:border-green-400/50'
              }`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className={`mt-4 text-green-400 text-sm font-semibold transition-all duration-300 ${
                  activeService === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  Click to learn more →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-green-400/20 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{services[activeService].icon}</span>
                  <h3 className="text-3xl font-orbitron font-bold text-green-400">
                    {services[activeService].title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {services[activeService].longDescription}
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {services[activeService].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
              <div className="relative">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="rounded-lg shadow-2xl w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)';
                    target.style.display = 'block';
                    target.style.minHeight = '400px';
                  }}
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-transparent rounded-lg blur-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-400/10 via-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Let our experts help you design and implement the perfect technology solution for your organization.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services