import React from 'react';
import { motion } from 'framer-motion';

interface VisualBridgeProps {
  type: 'hero-to-intro' | 'intro-to-work' | 'work-to-opensource' | 'opensource-to-garden' | 'garden-to-journey';
  className?: string;
}

export const VisualBridge: React.FC<VisualBridgeProps> = ({ type, className = '' }) => {
  if (type === 'hero-to-intro') {
    return (
      <div className={`relative w-full h-28 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
        <svg viewBox="0 0 200 120" className="w-48 h-full" fill="none">
          {/* Organic branch gently curving downward */}
          <motion.path
            d="M100 0 C100 35, 120 50, 100 70"
            stroke="#879B72"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {/* Transition node */}
          <motion.circle
            cx="100"
            cy="70"
            r="3"
            fill="#B86B7A"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />

          {/* Morphing into computational dashed vector */}
          <motion.line
            x1="100"
            y1="70"
            x2="100"
            y2="120"
            stroke="#615A54"
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          {/* Subtle computational coordinate text */}
          <text x="110" y="98" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#879B72" opacity="0.6">
            z = f(x)
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'intro-to-work') {
    return (
      <div className={`relative w-full h-24 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
        <svg viewBox="0 0 300 90" className="w-64 h-full" fill="none">
          {/* Central spine splitting into dual project input vectors */}
          <motion.line
            x1="150"
            y1="0"
            x2="150"
            y2="35"
            stroke="#615A54"
            strokeWidth="1"
            strokeDasharray="2 3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          <motion.circle
            cx="150"
            cy="35"
            r="3.5"
            fill="#465640"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />

          {/* Dual vectors opening to frame the project space */}
          <motion.path
            d="M150 35 C150 60, 90 65, 50 85"
            stroke="#E8A7B5"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <motion.path
            d="M150 35 C150 60, 210 65, 250 85"
            stroke="#879B72"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <text x="50" y="80" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#B86B7A" opacity="0.6">
            [01]
          </text>
          <text x="235" y="80" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#465640" opacity="0.6">
            [PROJ]
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'work-to-opensource') {
    return (
      <div className={`relative w-full h-24 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
        <svg viewBox="0 0 200 90" className="w-48 h-full" fill="none">
          <motion.line
            x1="100"
            y1="0"
            x2="100"
            y2="45"
            stroke="#B86B7A"
            strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          <motion.circle
            cx="100"
            cy="45"
            r="4"
            fill="#879B72"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />

          <motion.path
            d="M100 45 C100 65, 130 70, 100 90"
            stroke="#465640"
            strokeWidth="1.4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />

          <text x="110" y="55" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#465640" opacity="0.7">
            git fork ⑂
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-20 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      <div className="flex flex-col items-center">
        <div className="w-px h-10 bg-gradient-to-b from-matcha/60 to-ink-border" />
        <div className="w-1.5 h-1.5 rounded-full bg-matcha my-1" />
        <div className="w-px h-6 bg-gradient-to-b from-ink-border to-transparent" />
      </div>
    </div>
  );
};
