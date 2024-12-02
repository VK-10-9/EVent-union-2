import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  url?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <div 
          key={project.title} 
          className="bg-blue-950/20 backdrop-blur-sm rounded-xl p-6 border border-blue-900/20 shadow-xl hover:bg-blue-950/30 transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-900/20 rounded-lg">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            </div>
            {project.url && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-blue-900/20 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </a>
            )}
          </div>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
        </div>
      ))}
    </div>
  );
}