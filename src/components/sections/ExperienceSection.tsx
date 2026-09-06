import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_ITEMS } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-sakura-deep tracking-widest">
            <span>06</span>
            <span className="text-ink-divider">/</span>
            <span className="uppercase text-matcha-deep">EXPERIENCE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink font-light tracking-tight text-hover-pop">
            Professional Experience
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-3 max-w-2xl font-light">
            Internships and industry project training in machine learning workflows, enterprise data analytics, and applied AI systems.
          </p>
        </div>

        {/* Editorial Timeline with Generous Whitespace — No Cards */}
        <div className="space-y-24 sm:space-y-36 scene-perspective">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.4, x: -40, z: -50 }}
              whileInView={{ opacity: 1, x: 0, z: 0 }}
              viewport={{ once: false, margin: '-15% 0px -15% 0px' }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 pb-16 border-b border-ink-divider/40 last:border-b-0 preserve-3d transition-all duration-300 hover:translate-x-1"
            >
              {/* Left: Period & Role Title */}
              <div className="md:col-span-5 space-y-2">
                <span className="font-mono text-xs text-sakura-deep uppercase tracking-widest block font-medium">
                  {item.period}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-light leading-snug text-hover-pop">
                  {item.company}
                </h3>
                <p className="font-mono text-xs text-matcha-deep uppercase tracking-wider font-semibold">
                  {item.role}
                </p>
                <p className="font-sans text-xs text-ink-muted font-light pt-1">
                  {item.location}
                </p>
              </div>

              {/* Right: Detailed Narrative Bullets */}
              <div className="md:col-span-7 space-y-3.5 pt-1">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3.5 text-sm text-ink-muted font-light leading-relaxed">
                    <span className="text-sakura-deep select-none mt-0.5">·</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
