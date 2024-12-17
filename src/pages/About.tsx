import React from 'react';
import { Target, Users, Award } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize digital marketing'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew to 20+ talented professionals'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received multiple awards for innovative campaigns'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded services to international markets'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Driving digital innovation and creating meaningful connections between brands and their audiences
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Target className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth and create lasting impact.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Team</h3>
              <p className="text-gray-600">
                A diverse group of creative minds and technical experts working together to deliver excellence.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, and client success drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFD700] rounded-full"></div>
                    <div className="w-1/2 p-4">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <span className="text-[#FFD700] font-bold">{milestone.year}</span>
                        <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                        <p className="text-gray-600 mt-2">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}