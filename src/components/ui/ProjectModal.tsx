import React, { useEffect } from 'react';
import type { Project } from '../../types/portfolio';
import { Tag } from './Tag';
import { X, ExternalLink, Check, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-ink/40 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-canvas border border-ink-border rounded-xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-canvas/95 backdrop-blur-sm border-b border-ink-divider">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sakura-deep tracking-widest font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-ink-divider">|</span>
            <span className="font-mono text-xs text-matcha-deep">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-ink-muted hover:text-ink hover:bg-canvas-subtle transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-project-title" className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              {project.title}
            </h2>
            <p className="mt-2 text-ink-muted text-sm sm:text-base font-light leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Detailed Narrative */}
          <div className="p-5 bg-canvas-card border border-ink-border rounded-xl">
            <h4 className="flex items-center gap-2 font-mono text-xs text-sakura-deep uppercase tracking-wider mb-2 font-semibold">
              <Layers size={14} /> Overview & Engineering Rationale
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Technical Highlights */}
          <div className="space-y-2.5">
            <h4 className="flex items-center gap-2 font-mono text-xs text-matcha-deep uppercase tracking-wider font-semibold">
              <Sparkles size={14} /> Technical Implementations
            </h4>
            <div className="space-y-2">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                  <Check size={14} className="text-matcha-deep shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-mono text-xs text-ink-faint uppercase tracking-wider mb-3">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech} variant="sakura">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-ink-divider">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-canvas text-xs font-mono tracking-wider hover:bg-sakura-deep transition-colors shadow-sm"
            >
              <ExternalLink size={14} /> LAUNCH LIVE DEMO
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink text-ink text-xs font-mono tracking-wider hover:border-matcha hover:text-matcha-deep transition-colors"
              >
                <GithubIcon size={14} /> VIEW REPOSITORY
              </a>
            )}

            <span className="font-mono text-xs text-ink-faint ml-auto">
              Status: <span className="text-matcha-deep font-semibold">PRODUCTION LIVE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
