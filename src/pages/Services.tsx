import React from 'react';
import { Globe, Zap, BarChart, PenTool, Search, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-[#FFD700]" />,
      title: 'Web Development',
      description: 'Custom-built websites that are fast, responsive, and optimized for conversion. We create digital experiences that engage and delight your users.',
      features: ['Custom Design', 'Responsive Development', 'E-commerce Solutions', 'CMS Integration']
    },
    {
      icon: <Zap className="h-12 w-12 text-[#FFD700]" />,
      title: 'Social Media Management',
      description: 'Strategic social media management that builds your brand presence and engages your target audience across all major platforms.',
      features: ['Content Strategy', 'Community Management', 'Analytics & Reporting', 'Paid Advertising']
    },
    {
      icon: <BarChart className="h-12 w-12 text-[#FFD700]" />,
      title: 'Advertising Campaigns',
      description: 'Data-driven advertising campaigns that deliver measurable results and maximize your ROI across multiple channels.',
      features: ['PPC Campaigns', 'Social Media Ads', 'Display Advertising', 'Campaign Analytics']
    },
    {
      icon: <Palette className="h-12 w-12 text-[#FFD700]" />,
      title: 'Branding Strategies',
      description: 'Comprehensive branding solutions that help you stand out in your market and connect with your target audience.',
      features: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Brand Voice']
    },
    {
      icon: <PenTool className="h-12 w-12 text-[#FFD700]" />,
      title: 'Content Creation',
      description: 'High-quality content that tells your story, engages your audience, and drives conversions across all platforms.',
      features: ['Copywriting', 'Video Production', 'Graphics Design', 'Photography']
    },
    {
      icon: <Search className="h-12 w-12 text-[#FFD700]" />,
      title: 'SEO',
      description: 'Search engine optimization strategies that improve your visibility and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and drive growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}