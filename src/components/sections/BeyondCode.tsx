import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { BEYOND_CODE_ITEMS } from '../../data/portfolioData';
import type { BeyondCodeItem } from '../../types/portfolio';
import { Bookmark } from 'lucide-react';

export const BeyondCode: React.FC = () => {
  return (
    <section id="beyond-the-code" className="py-24 md:py-36 border-t border-ink-divider/40 bg-canvas relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          number="08C"
          category="PERSPECTIVE"
          title="Beyond the Code"
          subtitle="Curiosities, architectural sensibilities, and the philosophical underpinnings of learning."
        />

        {/* 3-Column Minimal Editorial Presentation — No Boxed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 pt-8 border-t border-ink-divider/40">
          {BEYOND_CODE_ITEMS.map((item: BeyondCodeItem, idx: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-sakura-deep tracking-wider block font-semibold">
                  PERSPECTIVE 0{idx + 1}
                </span>

                <h3 className="font-serif text-2xl text-ink font-light leading-snug">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-matcha-deep font-medium">
                  {item.subtitle}
                </p>

                <p className="text-sm text-ink-muted leading-relaxed font-light">
                  {item.notes}
                </p>

                {item.quote && (
                  <blockquote className="border-l-2 border-sakura/60 pl-3 py-1 font-serif italic text-sm text-ink-muted mt-2">
                    {item.quote}
                  </blockquote>
                )}
              </div>

              <div className="pt-4 border-t border-ink-divider/30 font-mono text-[10px] text-ink-faint flex items-center justify-between mt-6">
                <span>INTELLECTUAL CURIOSITY</span>
                <span>[CURATED]</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal reading note slot */}
        <div className="mt-12 pt-6 border-t border-ink-divider/30 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted">
            <Bookmark size={13} className="text-sakura-deep" />
            <span>Reading log, paper notes, and algorithmic essays updated continuously.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
