import React from 'react';
import { ArrowRight, Zap, Globe, PenTool, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-[#FFD700]">Viral Vision Media</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We Elevate Your Brand's Vision with Innovation and Strategy
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#FFD700] hover:bg-[#FFD700]/90 transition-colors"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-[#FFD700]" />,
                title: 'Web Development',
                description: 'Custom websites that convert visitors into customers'
              },
              {
                icon: <Zap className="h-8 w-8 text-[#FFD700]" />,
                title: 'Social Media',
                description: 'Strategic social media management and growth'
              },
              {
                icon: <BarChart className="h-8 w-8 text-[#FFD700]" />,
                title: 'Digital Marketing',
                description: 'Results-driven marketing campaigns'
              },
              {
                icon: <PenTool className="h-8 w-8 text-[#FFD700]" />,
                title: 'Content Creation',
                description: 'Engaging content that tells your story'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Viral?</h2>
          <p className="text-gray-400 mb-8">Let's create something amazing together</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#FFD700] hover:bg-[#FFD700]/90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}