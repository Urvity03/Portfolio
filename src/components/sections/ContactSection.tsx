import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../../data/siteConfig';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-32 md:py-52 border-t border-ink-divider/40 bg-canvas relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-sakura-deep tracking-widest">
            <span>10</span>
            <span className="text-ink-divider">/</span>
            <span className="uppercase text-matcha-deep">CONNECT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Huge Typographic Statement: Let's build something. */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl text-ink font-light tracking-tight leading-[0.88] select-none">
              Let's
              <br />
              <span className="italic font-normal text-sakura-deep">build</span>
              <br />
              something.
            </h2>

            <p className="font-sans text-base sm:text-lg text-ink-muted font-light max-w-xl leading-relaxed">
              Always open to discussing machine learning engineering roles, research collaboration, and ambitious software systems.
            </p>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest text-ink hover:text-sakura-deep transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-ink group-hover:after:bg-sakura-deep after:transition-colors"
              >
                <span>VIEW RESUME</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>

          {/* Minimal Understated Links — No Contact Card, No Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-10 pt-4"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-matcha-deep block font-semibold border-b border-ink-divider/40 pb-3">
              DIRECT CHANNELS
            </span>

            <div className="space-y-6">
              {/* LinkedIn */}
              <div className="flex items-baseline justify-between group border-b border-ink-divider/40 pb-4">
                <span className="font-mono text-xs text-ink-faint">LINKEDIN</span>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl sm:text-2xl text-ink group-hover:text-sakura-deep transition-colors duration-250 inline-flex items-center gap-1.5"
                >
                  <span>urvi-tyagi026</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-baseline justify-between group border-b border-ink-divider/40 pb-4">
                <span className="font-mono text-xs text-ink-faint">GITHUB</span>
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl sm:text-2xl text-ink group-hover:text-matcha-deep transition-colors duration-250 inline-flex items-center gap-1.5"
                >
                  <span>Urvity03</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Email */}
              <div className="space-y-2 border-b border-ink-divider/40 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-faint">EMAIL</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-sakura-deep hover:text-sakura-dark transition-colors duration-200"
                    title="Copy email"
                  >
                    {copied ? (
                      <>
                        <Check size={12} /> COPIED
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> COPY
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  className="font-serif text-xl sm:text-2xl text-ink hover:text-sakura-deep transition-colors duration-250 block truncate"
                >
                  {SITE_CONFIG.links.email}
                </a>
              </div>

              {/* Resume */}
              <div className="flex items-baseline justify-between group border-b border-ink-divider/40 pb-4">
                <span className="font-mono text-xs text-ink-faint">RESUME</span>
                <a
                  href={SITE_CONFIG.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl sm:text-2xl text-ink group-hover:text-sakura-deep transition-colors duration-250 inline-flex items-center gap-1.5"
                >
                  <span>urvi_Resume.pdf</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <div className="font-mono text-[11px] text-ink-muted">
              LOCATION: GHAZIABAD, INDIA · RESPONSE WITHIN 24H
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
