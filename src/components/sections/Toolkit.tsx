import React from 'react';
import { motion } from 'framer-motion';

export const Toolkit: React.FC = () => {
  const categories = [
    {
      name: 'Programming',
      skills: 'Python · SQL · C++ (Basic)'
    },
    {
      name: 'Machine Learning',
      skills: 'Scikit-learn · TensorFlow · PyTorch · Keras · XGBoost · Supervised Learning · Unsupervised Learning · Reinforcement Learning'
    },
    {
      name: 'AI / ML',
      skills: 'NLP · Generative AI · Computer Vision · Transfer Learning · Feature Engineering · Model Evaluation'
    },
    {
      name: 'Software Engineering',
      skills: 'Git · GitHub · Docker · REST APIs · OOP · Linux · GitHub Actions · Software Testing'
    },
    {
      name: 'Data & Databases',
      skills: 'Pandas · NumPy · Supabase'
    },
    {
      name: 'Tools',
      skills: 'Streamlit · Jupyter Notebook · Google Colab · Vertex AI · Gemini · VS Code'
    }
  ];

  return (
    <section id="skills" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="mb-20 sm:mb-28">
          <div className="flex items-center gap-3 mb-3 font-mono text-xs text-sakura-deep tracking-widest">
            <span>08</span>
            <span className="text-ink-divider">/</span>
            <span className="uppercase text-matcha-deep">SKILLS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink font-light tracking-tight text-hover-pop">
            The tools I reach for.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-3 max-w-2xl font-light">
            Core programming languages, frameworks, deep learning libraries, and development tools used across research and production applications.
          </p>
        </div>

        {/* Editorial Category Rows — Whitespace & Thin Dividers Only — No Cards, No Pills, No Badges */}
        <div className="space-y-4 scene-perspective">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-ink-divider/40 items-baseline preserve-3d transition-all duration-300 hover:translate-x-1"
            >
              {/* Category Title */}
              <div className="md:col-span-4">
                <span className="font-mono text-xs uppercase tracking-widest text-matcha-deep font-semibold block">
                  {cat.name}
                </span>
              </div>

              {/* Clean Inline Typography */}
              <div className="md:col-span-8">
                <p className="font-serif text-lg sm:text-xl text-ink font-light leading-relaxed">
                  {cat.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
