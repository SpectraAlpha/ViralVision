import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from './NavLinks';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive(item.path)
                ? 'text-[#FFD700] bg-gray-900'
                : 'text-gray-300 hover:text-[#FFD700] hover:bg-gray-800'
            }`}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}