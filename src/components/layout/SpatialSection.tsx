import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface SpatialSectionProps {
  children: React.ReactNode;
  className?: string;
  isHero?: boolean;
}

export const SpatialSection: React.FC<SpatialSectionProps> = ({
  children,
  className = '',
  isHero = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track the section's position relative to the viewport
  // Start tracking well before the element hits center to allow visual overlap
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isHero ? ['start start', 'end start'] : ['start end', 'end start']
  });

  // Overlapping Spatial Choreography:
  // Non-Hero sections:
  // Approaching from depth (0 -> 0.35):
  // translateY: 100px -> 0
  // translateZ: -80px -> 0
  // scale: 0.96 -> 1
  // rotateX: -2deg -> 0
  // opacity: 0.85 -> 1
  //
  // In focus / center (0.35 -> 0.65):
  // translateY: 0, translateZ: 0, scale: 1, rotateX: 0, opacity: 1
  //
  // Receding into depth (0.65 -> 1.0):
  // translateY: 0 -> -80px
  // translateZ: 0 -> -80px
  // scale: 1 -> 0.96
  // rotateX: 0 -> 2deg
  // opacity: 1 -> 0.90

  const normalY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [100, 0, 0, -80]);
  const normalZ = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-80, 0, 0, -80]);
  const normalScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.96, 1, 1, 0.96]);
  const normalRotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-2, 0, 0, 2]);
  const normalOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.9]);

  // For Hero: Already in focus at page load (scrollY = 0), recedes as user scrolls down
  const heroY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, -80]);
  const heroZ = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 0.96]);
  const heroRotateX = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, 2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 0.9]);

  if (shouldReduceMotion) {
    return (
      <div ref={containerRef} className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative scene-perspective ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          y: isHero ? heroY : normalY,
          z: isHero ? heroZ : normalZ,
          scale: isHero ? heroScale : normalScale,
          rotateX: isHero ? heroRotateX : normalRotateX,
          opacity: isHero ? heroOpacity : normalOpacity,
          transformStyle: 'preserve-3d',
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};
