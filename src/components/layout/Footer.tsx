import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-ink-divider/40 py-16 text-ink-muted text-xs font-mono bg-canvas">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif text-lg text-ink block font-light">URVI TYAGI</span>
          <span className="text-[11px] text-ink-faint">Sakura × AI · Computer Science Undergraduate & Aspiring ML Engineer</span>
        </div>

        <div className="flex items-center gap-6 text-[11px] text-ink-faint">
          <span>PORTFOLIO 2026</span>
          <span>·</span>
          <span>ALL RIGHTS RESERVED</span>
          <span>·</span>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1 text-ink hover:text-sakura-deep transition-colors duration-250 cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp size={11} className="transition-transform duration-250 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
