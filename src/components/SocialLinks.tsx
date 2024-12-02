import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div className="grid gap-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onMouseEnter={() => setIsHovered(link.id)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div
            className={`
              relative overflow-hidden group rounded-xl p-6
              bg-blue-950/20 backdrop-blur-sm border border-blue-900/20
              transform transition-all duration-300 shadow-xl
              ${link.color}
              ${isHovered === link.id ? 'scale-[1.02]' : ''}
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-900/20 rounded-lg">
                  {link.icon}
                </div>
                <span className="font-semibold text-white text-lg">
                  {link.title}
                </span>
              </div>
              <ExternalLink 
                className={`
                  w-5 h-5 transform transition-transform duration-300 text-white
                  ${isHovered === link.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                `}
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}