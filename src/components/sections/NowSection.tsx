import React from 'react';
import { motion } from 'framer-motion';

export const NowSection: React.FC = () => {
  return (
    <section id="now" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Large Serif Title */}
        <div className="mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-matcha-deep block mb-3 font-semibold">
            REAL-TIME FOCUS · 2026
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink font-light tracking-tight">
            What I'm doing
            <br />
            <span className="italic text-sakura-deep font-normal">right now.</span>
          </h2>
        </div>

        {/* Three Simple Areas — Plain Typography, No Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-8 border-t border-ink-divider/40">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint block">
              LEARNING
            </span>
            <p className="font-serif text-2xl text-ink font-light leading-snug">
              Machine Learning · NLP · Generative AI
            </p>
            <p className="font-sans text-xs text-ink-muted leading-relaxed font-light">
              Deepening theoretical foundations in Transformer attention mechanisms, loss gradients, and compact model inference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint block">
              BUILDING
            </span>
            <p className="font-serif text-2xl text-ink font-light leading-snug">
              AI/ML applications and Python-based AI solutions
            </p>
            <p className="font-sans text-xs text-ink-muted leading-relaxed font-light">
              Designing reproducible ML pipelines, Dockerized deployments, and clean Streamlit interfaces for intelligent systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint block">
              EXPLORING
            </span>
            <p className="font-serif text-2xl text-ink font-light leading-snug">
              ML Engineering · Open Source · practical AI systems
            </p>
            <p className="font-sans text-xs text-ink-muted leading-relaxed font-light">
              Contributing upstream to open-source developer tooling and seeking collaborative engineering teams for AI/ML roles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
