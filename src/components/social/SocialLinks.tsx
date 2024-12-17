import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import TikTokIcon from '../icons/TikTokIcon';

export const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/viralvisionlk',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/viral.visionmedia/profilecard/?igsh=MW80bHBqemJkcXM3ZA==',
    icon: Instagram,
  },
  {
    name: 'X',
    url: 'https://www.x.com/viralvisionlk',
    icon: Twitter,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@viralvisionlk',
    icon: TikTokIcon,
  },
];

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({ className = '', iconClassName = 'h-5 w-5' }: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#FFD700] transition-colors"
          aria-label={social.name}
        >
          <social.icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}