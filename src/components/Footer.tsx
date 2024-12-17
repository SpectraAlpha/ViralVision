import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './navigation/Logo';
import SocialLinks from './social/SocialLinks';

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[#FFD700] font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 text-sm">
              Elevating brands through innovative digital strategies and creative solutions.
            </p>
          </div>

          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#FFD700] transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#FFD700] transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#FFD700] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#FFD700] transition-colors">Contact Us</Link></li>
            </ul>
          </FooterSection>

          <FooterSection title="Services">
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Social Media Management</li>
              <li className="text-gray-400">Advertising Campaigns</li>
              <li className="text-gray-400">Content Creation</li>
            </ul>
          </FooterSection>

          <FooterSection title="Connect With Us">
            <SocialLinks iconClassName="h-6 w-6" />
          </FooterSection>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Viral Vision Media | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}