import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="mb-20 sm:mb-28">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-sakura-deep tracking-widest">
            <span>09</span>
            <span className="text-ink-divider">/</span>
            <span className="uppercase text-matcha-deep">CERTIFICATIONS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink font-light tracking-tight">
            Things I've earned.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-3 max-w-2xl font-light">
            Verified credentials in Machine Learning, Generative AI, Prompt Engineering, and Python software practices.
          </p>
        </div>

        {/* Clean Numbered Archive List with Thin Dividers — No Cards */}
        <div className="divide-y divide-ink-divider/40 border-y border-ink-divider/40 scene-perspective">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group preserve-3d cert-row-pop cursor-pointer"
            >
              {/* Index Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-sakura-deep font-semibold">
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-7">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-light group-hover:text-sakura-deep transition-colors duration-250 text-hover-pop">
                  {cert.title}
                </h3>
              </div>

              {/* Issuer */}
              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
                <span className="font-mono text-xs text-matcha-deep font-medium uppercase tracking-wider">
                  {cert.issuer}
                </span>
                <span className="font-mono text-[10px] text-ink-faint">
                  VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
