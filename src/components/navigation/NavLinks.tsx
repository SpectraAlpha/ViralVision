import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact Us' },
];

export default function NavLinks() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-colors hover:text-[#FFD700] ${
            isActive(item.path) ? 'text-[#FFD700]' : 'text-gray-300'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}