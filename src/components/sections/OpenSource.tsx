import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { OPEN_SOURCE_DATA } from '../../data/portfolioData';
import { ArrowUpRight, GitBranch } from 'lucide-react';

const CONTRIBUTIONS_TIMELINE = [
  {
    date: 'June 26',
    title: 'Replace broad exception handling when reading install log (#168)',
    desc: 'Improved robustness of configuration parsing with clearer error reporting and specific exception types.'
  },
  {
    date: 'June 25',
    title: 'Handle date parsing errors with specific exceptions (#157)',
    desc: 'Improved resilience of date parsing used in the forensic timestamp engine.'
  },
  {
    date: 'June 24',
    title: 'Improve zsh history file read error handling',
    desc: 'Surface clear, actionable errors when the zsh history file cannot be read or is corrupted.'
  },
  {
    date: 'June 23',
    title: 'Handle additional config parsing edge cases',
    desc: 'Hardened the configuration loader against malformed and missing entries.'
  },
  {
    date: 'June 23',
    title: 'Handle UnicodeDecodeError in config loading',
    desc: 'Added graceful handling for encoding issues when reading shell history files across diverse locales.'
  },
  {
    date: 'June 23',
    title: 'Fix config loading error handling',
    desc: 'Replaced generic handlers with defensive fallback routines.'
  }
];

export const OpenSource: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 65%']
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="open-source" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative scroll-mt-20 scene-perspective">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative">
        {/* Editorial Section Number Marker: 04 */}
        <div className="hidden lg:flex absolute -left-8 sm:-left-14 top-4 flex-col items-center select-none" aria-hidden="true">
          <div className="w-6 h-6 rounded-full border border-[#EBE2DA] bg-[#FFF9F5] flex items-center justify-center text-[10px] font-mono text-[#B86B7A] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            04
          </div>
          <div className="w-px h-32 bg-gradient-to-b from-[#EBE2DA] to-transparent mt-2" />
        </div>

        {/* Section Header: OPEN SOURCE */}
        <div className="mb-16 sm:mb-24">
          <div className="font-mono text-xs text-[#615A54] tracking-widest uppercase mb-4">
            OPEN SOURCE
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#292725] font-light tracking-tight leading-tight text-hover-pop">
            Building beyond my own<br />
            <span className="italic font-normal text-[#465640]">repositories.</span>
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start scene-perspective">
          
          {/* Left Column: Project Overview + Links + Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8 preserve-3d"
          >
            <div className="flex items-center gap-3">
              <GitBranch size={22} className="text-[#879B72]" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#292725] font-light">
                TermStory
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#615A54] font-light leading-relaxed">
              TermStory turns your terminal history into a searchable, AI-narrated timeline of your development life. It groups shell commands into sessions, correlates Git commits, and renders everything into a high-density TUI dashboard.
            </p>

            <p className="text-xs sm:text-sm text-[#615A54] font-light leading-relaxed">
              Contributed reliability and error-handling improvements to TermStory, an open-source developer-memory tool.
            </p>

            {/* Links */}
            <div className="space-y-3 pt-2">
              <div>
                <a
                  href={OPEN_SOURCE_DATA.forkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] transition-colors duration-250 py-1"
                >
                  <span>VIEW MY REPOSITORY</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <div>
                <a
                  href={OPEN_SOURCE_DATA.upstreamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#615A54] hover:text-[#465640] transition-colors duration-250 py-1"
                >
                  <span>VIEW UPSTREAM PROJECT</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="pt-6 border-t border-[#EBE2DA]/60 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E958E] block font-semibold">
                NOTE
              </span>
              <p className="font-serif text-xs text-[#615A54] italic font-light">
                Contributed to an existing project — not the original author.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Vertical Timeline with Matcha Nodes & Scroll-linked Drawing Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8 lg:pl-6 preserve-3d"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#615A54] block font-semibold">
              CONTRIBUTIONS
            </span>

            {/* Vertical Timeline with Scroll Drawing Line */}
            <div ref={timelineRef} className="relative pl-8 space-y-9 preserve-3d">
              {/* Background faint guide line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-[#DCE5D2]/50" />
              {/* Scroll-drawn active line */}
              <motion.div 
                style={{ scaleY: lineProgress, transformOrigin: 'top' }}
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#879B72] via-[#879B72] to-[#B86B7A]/60 will-change-transform"
              />

              {CONTRIBUTIONS_TIMELINE.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0.4, x: -30, z: -50 }}
                  whileInView={{ opacity: 1, x: 0, z: 0 }}
                  viewport={{ once: false, margin: '-10% 0px -10% 0px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative group transition-all duration-300 hover:translate-x-1 preserve-3d"
                >
                  {/* Matcha circular timeline node */}
                  <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FFF9F5] border-2 border-[#879B72] group-hover:bg-[#879B72] group-hover:scale-125 group-hover:shadow-[0_2px_8px_rgba(135,155,114,0.35)] transition-all duration-300" />

                  <div className="space-y-1">
                    <div className="font-mono text-[10px] tracking-wider text-[#879B72] uppercase font-semibold">
                      {item.date}
                    </div>
                    <h4 className="font-serif text-base sm:text-lg text-[#292725] font-light text-hover-pop">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#615A54] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Link: VIEW MY CONTRIBUTIONS ↗ */}
            <div className="pt-4">
              <a
                href={OPEN_SOURCE_DATA.commitsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] transition-colors duration-250 py-1"
              >
                <span>VIEW MY CONTRIBUTIONS</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
