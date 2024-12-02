import React from 'react';
import { Mail, Link as LinkIcon, MapPin } from 'lucide-react';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ProfileSectionProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  location?: string;
  email?: string;
  website?: string;
  socialLinks?: SocialLink[];
}

export function ProfileSection({
  name,
  title,
  description,
  imageUrl,
  location,
  email,
  website,
  socialLinks
}: ProfileSectionProps) {
  return (
    <article className="bg-blue-950/20 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-blue-900/20 transition-all duration-300 hover:border-blue-500/30">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center md:items-start">
        {/* Profile Image */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl md:rounded-2xl overflow-hidden ring-2 sm:ring-4 ring-blue-500/20 shadow-2xl">
            <img
              src={imageUrl}
              alt={`${name} - ${title}`}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80';
              }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
            {title}
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{name}</h1>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            {location && (
              <div className="flex items-center justify-center md:justify-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-blue-400 shrink-0" />
                <span className="text-sm sm:text-base">{location}</span>
              </div>
            )}
            {email && (
              <div className="flex items-center justify-center md:justify-start text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-blue-400 shrink-0" />
                <a href={`mailto:${email}`} className="text-sm sm:text-base hover:text-blue-400 transition-colors">
                  {email}
                </a>
              </div>
            )}
            {website && (
              <div className="flex items-center justify-center md:justify-start text-gray-300">
                <LinkIcon className="w-4 h-4 mr-2 text-blue-400 shrink-0" />
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-blue-400 transition-colors">
                  {website}
                </a>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {/* Social Links */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900/30 p-1.5 sm:p-2 rounded-lg hover:bg-blue-800/30 transition-colors group"
                >
                  <img
                    src={link.icon}
                    alt={link.platform}
                    className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}