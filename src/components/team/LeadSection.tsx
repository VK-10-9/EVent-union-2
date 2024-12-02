import React from 'react';

interface Lead {
  name: string;
  role: string;
  college?: string;
  zone?: string;
  email?: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

interface LeadSectionProps {
  title: string;
  leads: Lead[];
}

export default function LeadSection({ title, leads }: LeadSectionProps) {
  return (
    <div className="space-y-8 sm:space-y-12">
      <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead) => (
          <div
            key={lead.name}
            className="bg-blue-950/20 rounded-xl p-6 border border-blue-900/20 hover:border-blue-500/30 transition-all duration-300"
          >
            <h4 className="text-lg font-semibold text-white mb-2">{lead.name}</h4>
            <p className="text-blue-400 text-sm mb-3">{lead.role}</p>
            {lead.college && (
              <p className="text-gray-400 text-sm mb-2">{lead.college}</p>
            )}
            {lead.zone && (
              <p className="text-gray-400 text-sm mb-2">{lead.zone}</p>
            )}
            {lead.email && (
              <a
                href={`mailto:${lead.email}`}
                className="text-gray-400 text-sm mb-2 block hover:text-blue-400 transition-colors"
              >
                {lead.email}
              </a>
            )}
            {lead.socialLinks && lead.socialLinks.length > 0 && (
              <div className="flex gap-3 mt-4">
                {lead.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <img
                      src={link.icon}
                      alt={link.platform}
                      className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}