import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-36 border-t border-ink-divider/40 bg-canvas relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading
          number="06B"
          category="ACADEMICS"
          title="Formal Education"
          subtitle="University training in machine learning, algorithms, and computational mathematics."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-ink-divider/40">
            <div className="md:col-span-8 space-y-2">
              <span className="font-mono text-xs text-sakura-deep uppercase tracking-wider block">
                {EDUCATION_DATA.status}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-light">
                {EDUCATION_DATA.institution}
              </h3>
              <p className="font-mono text-xs text-matcha-deep font-medium uppercase tracking-wider">
                {EDUCATION_DATA.degree} – {EDUCATION_DATA.field}
              </p>
            </div>

            <div className="md:col-span-4 md:text-right flex md:flex-col justify-between items-baseline md:items-end">
              <span className="font-mono text-xs text-ink-muted">EXPECTED GRADUATION</span>
              <span className="font-serif text-2xl text-ink font-light">{EDUCATION_DATA.expectedGraduation}</span>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs text-ink-faint uppercase tracking-wider block mb-4">
              Relevant Technical Coursework & Foundations:
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-ink-muted">
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <span key={course} className="inline-flex items-center gap-1.5">
                  <span className="text-sakura-deep font-serif text-sm">·</span>
                  <span>{course}</span>
                  {idx < EDUCATION_DATA.coursework.length - 1 && <span className="text-ink-divider ml-2">/</span>}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
