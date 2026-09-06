import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../../data/siteConfig';

export const IntroSection: React.FC = () => {
  return (
    <section id="about" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative scene-perspective">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        {/* Section Header: 02 / INTRODUCTION */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-sakura-deep tracking-widest">
            <span>02</span>
            <span className="text-ink-divider">/</span>
            <span className="uppercase text-matcha-deep">INTRODUCTION</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink font-light tracking-tight text-hover-pop">
            Introduction
          </h2>
        </div>

        {/* Asymmetric Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT: Large Introductory Statement & Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink font-light leading-relaxed">
              I'm Urvi — a <span className="text-sakura-deep italic font-normal">Computer Science undergraduate</span> exploring the space between artificial intelligence, machine learning, software and data.
            </p>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-light">
              I enjoy taking ideas apart, understanding how they work, and turning them into things I can actually build.
            </p>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-light">
              Final-year B.Tech student specializing in Artificial Intelligence &amp; Machine Learning with hands-on experience in machine learning, NLP, Generative AI, data analytics, and Python-based AI applications. Experienced in developing ML pipelines, AI-powered applications, and data-driven solutions using Python, TensorFlow, Scikit-learn, Streamlit, Docker, and Supabase.
            </p>

            {/* LinkedIn Headline */}
            <div className="pl-6 border-l border-sakura-deep/60 py-2 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-matcha-deep font-semibold block">
                LinkedIn Headline
              </span>
              <p className="font-mono text-xs sm:text-sm text-ink leading-relaxed font-medium">
                AI &amp; ML | Aspiring ML Engineer | NLP • GenAI | Python • TensorFlow • Streamlit
              </p>
              <p className="font-serif text-sm sm:text-base text-ink-muted leading-relaxed italic font-light pt-1">
                “{SITE_CONFIG.summaryDetailed}”
              </p>
            </div>

          </motion.div>

          {/* RIGHT: Supporting Details — Clean Typographic List with Thin Dividers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-8 pt-2"
          >
            <div className="border-t border-ink-divider/60 pt-4 space-y-2">
              <span className="font-mono text-xs text-ink-faint uppercase tracking-wider block">ACADEMIC FOUNDATION</span>
              <h4 className="font-serif text-xl text-ink font-light">AKTU · B.Tech AI & ML</h4>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Graduation Expected 2027 (Current / In Progress). Foundational coursework in algorithms, probability, machine learning, and computer vision.
              </p>
            </div>

            <div className="border-t border-ink-divider/60 pt-4 space-y-2">
              <span className="font-mono text-xs text-ink-faint uppercase tracking-wider block">APPLIED STACK</span>
              <p className="font-mono text-xs text-ink leading-relaxed">
                Python · TensorFlow · Scikit-learn · Streamlit · Docker · Supabase · HuggingFace · NLP · GenAI
              </p>
            </div>

            <div className="border-t border-ink-divider/60 pt-4 space-y-2">
              <span className="font-mono text-xs text-ink-faint uppercase tracking-wider block">SYSTEMS & OPEN SOURCE</span>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Active contributor to Termstory, resolving 20+ review comments across pull requests, hardening UnicodeDecodeError handling, and shell history reliability.
              </p>
            </div>

            <div className="border-t border-ink-divider/60 pt-4 flex justify-between font-mono text-[11px] text-ink-muted">
              <span>LOCATION: GHAZIABAD, IN</span>
              <span>FINAL-YEAR</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
