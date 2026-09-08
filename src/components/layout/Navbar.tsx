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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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

          {/* Right Area: Understated Resume Link (Desktop & Tablet) */}
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

          {/* Mobile / Tablet Menu Button (Visible up to lg breakpoint) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4">
            <div className="sm:hidden">
              <a
                href={SITE_CONFIG.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-wider text-ink px-2 py-2 min-h-[44px] flex items-center hover:text-sakura-deep transition-colors"
              >
                RESUME ↗
              </a>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-ink hover:text-sakura-deep focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[64px] bottom-0 z-50 bg-[#FFF9F5] lg:hidden p-6 sm:p-8 flex flex-col justify-between border-t border-ink-divider/40 overflow-y-auto animate-fade-in">
          <nav className="flex flex-col space-y-1 text-sm font-mono tracking-widest text-ink pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-sakura-deep py-3 min-h-[44px] flex items-center border-b border-ink-divider/30 transition-colors duration-250"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-ink-divider/40">
            <a
              href={SITE_CONFIG.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-ink hover:text-sakura-deep min-h-[44px]"
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
