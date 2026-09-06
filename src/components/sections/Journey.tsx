import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JOURNEY_STEPS, EDUCATION_DATA } from '../../data/portfolioData';

export const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%']
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-sakura-deep tracking-widest">
            <span>07</span>
            <span className="text-ink-divider">/</span>
            <span className="uppercase text-matcha-deep">TIMELINE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink font-light tracking-tight text-hover-pop">
            The Journey
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-3 max-w-2xl font-light">
            A chronological progression across university foundations at AKTU, 6-hour virtual internship at Tata iQ, applied AI at IBM SkillsBuild, machine learning research at InAmigos Foundation, and open-source systems engineering.
          </p>
        </div>

        {/* Thin Vertical Line with Scroll-Linked Progressive Draw */}
        <div ref={containerRef} className="relative pl-8 sm:pl-12 space-y-24 sm:space-y-36 scene-perspective">
          {/* Static subtle guide line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-ink-divider/50" />
          {/* Scroll-drawn active line */}
          <motion.div
            style={{ scaleY: lineProgress, transformOrigin: 'top' }}
            className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-sakura-deep via-matcha-deep to-lavender-deep will-change-transform"
          />

          {JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              key={`${step.title}-${step.year}`}
              initial={{ opacity: 0.4, x: -40, z: -50 }}
              whileInView={{ opacity: 1, x: 0, z: 0 }}
              viewport={{ once: false, margin: '-15% 0px -15% 0px' }}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative group preserve-3d transition-all duration-300 hover:translate-x-1"
            >
              {/* Marker on the Line */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-2 w-2.5 h-2.5 rounded-full bg-canvas border-2 border-sakura-deep group-hover:bg-sakura-deep group-hover:scale-125 group-hover:shadow-[0_2px_8px_rgba(184,107,122,0.35)] transition-all duration-300" />

              {/* Milestone Content */}
              <div className="space-y-3 pb-2">
                {/* Large Year Typography */}
                <div className="flex flex-wrap items-baseline gap-3 font-mono text-sm sm:text-base text-sakura-deep font-medium tracking-wide">
                  <span>{step.year}</span>
                  <span className="text-ink-divider text-xs">/</span>
                  <span className="text-xs uppercase text-matcha-deep font-semibold">
                    {step.roleType}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink font-light leading-snug text-hover-pop">
                  {step.title}
                </h3>

                <p className="font-mono text-xs text-ink-muted tracking-wide">
                  {step.organization}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-light max-w-3xl pt-1">
                  {step.description}
                </p>

                {/* If Education milestone, integrate coursework seamlessly */}
                {step.roleType === 'Education' && (
                  <div className="pt-4 border-t border-ink-divider/40 space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-matcha-deep">
                      <span className="uppercase font-semibold tracking-wider">STATUS: {EDUCATION_DATA.status}</span>
                      <span>·</span>
                      <span>{EDUCATION_DATA.expectedGraduation}</span>
                    </div>
                    <p className="text-xs font-mono text-ink-muted leading-relaxed">
                      Relevant Coursework: {EDUCATION_DATA.coursework.join(' · ')}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
