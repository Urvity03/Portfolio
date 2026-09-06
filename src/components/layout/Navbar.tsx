import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'OPEN SOURCE', href: '#open-source' },
    { label: 'GITHUB', href: '#github' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-canvas/90 backdrop-blur-md border-b border-ink-divider/40 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none shrink-0"
            aria-label="Urvi Tyagi Home"
          >
            <span className="font-serif text-lg sm:text-xl font-light tracking-widest text-ink group-hover:text-sakura-deep transition-colors duration-300">
              URVI TYAGI
            </span>
          </a>

          {/* Desktop Navigation — Quiet, Understated */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-mono tracking-widest text-ink-muted scene-perspective">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-ink transition-colors duration-250 relative py-1 nav-link-pop cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-sakura-deep hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Understated Resume Link */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={SITE_CONFIG.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-ink hover:text-sakura-deep interactive-pop cursor-pointer"
            >
              <span>RESUME</span>
              <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-3">
            <a
              href={SITE_CONFIG.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-wider text-ink"
            >
              RESUME →
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-ink focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[65px] z-30 bg-canvas/98 backdrop-blur-lg lg:hidden p-8 flex flex-col justify-between border-t border-ink-divider/40 animate-fade-in">
          <nav className="flex flex-col space-y-6 text-sm font-mono tracking-widest text-ink pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-sakura-deep py-1 border-b border-ink-divider/30 transition-colors duration-250"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-8 border-t border-ink-divider/40">
            <a
              href={SITE_CONFIG.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-ink hover:text-sakura-deep"
            >
              <span>VIEW RESUME</span>
              <ArrowUpRight size={13} />
            </a>
            <div className="font-mono text-[11px] text-ink-muted">
              Sakura × AI · Urvi Tyagi 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
};
