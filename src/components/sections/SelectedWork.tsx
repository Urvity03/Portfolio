import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const PROJECT_VISUAL_CONFIG = [
  {
    num: '01',
    bg: 'from-[#FDF2F5] via-[#F9ECF1] to-[#F3C7D1]/60',
    border: 'border-[#F3C7D1]/80',
    numberColor: 'text-[#B86B7A]',
    dotColor: 'bg-[#B86B7A]',
    accentColor: '#E8A7B5',
    hasDot: true,
    indexLabel: '01 / 03',
    dots: [
      { top: '22%', left: '16%', size: 10, opacity: 0.15 },
      { top: '35%', left: '28%', size: 6, opacity: 0.12 },
      { top: '65%', right: '22%', size: 12, opacity: 0.14 },
      { top: '78%', left: '38%', size: 8, opacity: 0.10 },
      { top: '28%', right: '18%', size: 14, opacity: 0.15 },
      { top: '52%', right: '35%', size: 7, opacity: 0.12 },
    ],
    rings: [
      { top: '18%', right: '24%', size: 40, opacity: 0.14 },
      { bottom: '24%', left: '20%', size: 30, opacity: 0.11 },
    ]
  },
  {
    num: '02',
    bg: 'from-[#F4F8F1] via-[#EBF4E7] to-[#DCE5D2]/70',
    border: 'border-[#DCE5D2]',
    numberColor: 'text-[#879B72]',
    dotColor: 'bg-[#879B72]',
    accentColor: '#879B72',
    hasDot: false,
    indexLabel: '02 / 03',
    dots: [
      { top: '24%', left: '20%', size: 12, opacity: 0.15 },
      { top: '42%', left: '32%', size: 7, opacity: 0.12 },
      { top: '68%', left: '18%', size: 14, opacity: 0.14 },
      { top: '26%', right: '16%', size: 10, opacity: 0.15 },
      { top: '58%', right: '25%', size: 16, opacity: 0.13 },
      { top: '75%', right: '36%', size: 8, opacity: 0.10 },
    ],
    rings: [
      { top: '22%', left: '25%', size: 36, opacity: 0.14 },
      { bottom: '28%', right: '20%', size: 32, opacity: 0.11 },
    ]
  },
  {
    num: '03',
    bg: 'from-[#F7F3FB] via-[#EFE7F6] to-[#DCCFE5]/70',
    border: 'border-[#DCCFE5]',
    numberColor: 'text-[#8F819D]',
    dotColor: 'bg-[#8F819D]',
    accentColor: '#B8A8C4',
    hasDot: true,
    indexLabel: '03 / 03',
    dots: [
      { top: '26%', left: '18%', size: 14, opacity: 0.15 },
      { top: '38%', left: '30%', size: 8, opacity: 0.12 },
      { top: '64%', left: '22%', size: 10, opacity: 0.12 },
      { top: '20%', right: '22%', size: 12, opacity: 0.15 },
      { top: '50%', right: '18%', size: 16, opacity: 0.14 },
      { top: '74%', right: '28%', size: 9, opacity: 0.10 },
    ],
    rings: [
      { top: '20%', right: '28%', size: 38, opacity: 0.14 },
      { bottom: '22%', left: '24%', size: 34, opacity: 0.11 },
    ]
  }
];

const ProjectSpread: React.FC<{ project: typeof PROJECTS[0]; index: number; visualOnLeft: boolean }> = ({ project, index, visualOnLeft }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);
  const springCardX = useSpring(cardMouseX, { stiffness: 120, damping: 20 });
  const springCardY = useSpring(cardMouseY, { stiffness: 120, damping: 20 });

  const cardHoverZ = useMotionValue(0);
  const cardHoverScale = useMotionValue(1);
  const springHoverZ = useSpring(cardHoverZ, { stiffness: 140, damping: 20 });
  const springHoverScale = useSpring(cardHoverScale, { stiffness: 140, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Reversible Project Section Entrance (Requirement 17):
  // Initial: translateY(120px) translateZ(-70px) rotateX(8deg) scale(0.94)
  // Center: translateY(0) translateZ(0) rotateX(0) scale(1)
  // Exit: translateY(-90px) translateZ(-50px) rotateX(-4deg) scale(0.97)
  const scrollY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [120, 0, 0, -90]);
  const scrollZ = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-70, 0, 0, -50]);
  const scrollRotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [8, 0, 0, -4]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.94, 1, 1, 0.97]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.65, 1, 1, 0.85]);

  // Physical Card Tilt & Hover Lift (Requirement 10):
  // Maximum rotation: 5 degrees. Lift: translateZ(25px), scale(1.02)
  const tiltRotateX = useTransform(springCardY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [5, -5]);
  const tiltRotateY = useTransform(springCardX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-5, 5]);

  const composedRotateX = useTransform(
    [scrollRotateX, tiltRotateX],
    ([sX, tX]) => (shouldReduceMotion ? 0 : (sX as number) + (tX as number))
  );
  const composedZ = useTransform(
    [scrollZ, springHoverZ],
    ([sZ, hZ]) => (shouldReduceMotion ? 0 : (sZ as number) + (hZ as number))
  );
  const composedScale = useTransform(
    [scrollScale, springHoverScale],
    ([sS, hS]) => (shouldReduceMotion ? 1 : (sS as number) * (hS as number))
  );

  // Text column moves with slight organic offset
  const yText = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [60, 0, 0, -45]);
  const opacityText = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.55, 1, 1, 0.88]);

  // Chapter Atmospheric Hue Shift (Requirement 18):
  // Project 01: Sakura, Project 02: Matcha, Project 03: Lavender (smooth gradual blend)
  const auraOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0.18, 0.18, 0]);
  const cfg = PROJECT_VISUAL_CONFIG[index % 3];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    cardMouseX.set(nx);
    cardMouseY.set(ny);
  };

  const handleCardMouseEnter = () => {
    if (shouldReduceMotion || typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches) return;
    cardHoverZ.set(25);
    cardHoverScale.set(1.02);
  };

  const handleCardMouseLeave = () => {
    cardMouseX.set(0);
    cardMouseY.set(0);
    cardHoverZ.set(0);
    cardHoverScale.set(1);
  };

  return (
    <div ref={containerRef} className="relative pb-24 border-b border-ink-divider/40 last:border-b-0 scene-perspective">
      {/* Chapter Ambient Atmospheric Aura (Reversible Color Transition) */}
      <motion.div
        style={{ opacity: auraOpacity }}
        className={`absolute -inset-x-6 sm:-inset-x-12 -inset-y-12 rounded-3xl pointer-events-none select-none z-0 ${
          index === 0
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(243,199,209,0.18)_0%,transparent_70%)]'
            : index === 1
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(220,229,210,0.20)_0%,transparent_70%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(220,207,229,0.20)_0%,transparent_70%)]'
        }`}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Minimal Rectangular Project Visual Block - Physical Editorial Sheet with Layered Depth */}
        <div className={`lg:col-span-6 ${visualOnLeft ? 'lg:col-start-1 lg:order-1' : 'lg:col-start-7 lg:order-2'} scene-perspective`}>
          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            style={{
              y: scrollY,
              z: composedZ,
              scale: composedScale,
              opacity: scrollOpacity,
              rotateX: composedRotateX,
              rotateY: tiltRotateY,
              transformStyle: 'preserve-3d'
            }}
            className={`relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border ${cfg.border} bg-gradient-to-br ${cfg.bg} p-8 flex flex-col justify-between select-none shadow-[0_8px_28px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-shadow duration-500 cursor-pointer group will-change-transform`}
          >
            {/* Subtle geometric dots, connecting lines, and rings in the background - Depth Layer: 10px */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden depth-layer-subtle" style={{ transform: 'translateZ(10px)' }} aria-hidden="true">
              {/* Very thin connecting lines between nodes with gentle quiet pulse */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="20" y1="25" x2="35" y2="40" stroke={cfg.accentColor} strokeWidth="0.4" style={{ animation: 'geometryPulseLine 11s ease-in-out infinite' }} />
                <line x1="35" y1="40" x2="68" y2="28" stroke={cfg.accentColor} strokeWidth="0.4" style={{ animation: 'geometryPulseLine 13s ease-in-out infinite 2s' }} />
                <line x1="68" y1="28" x2="78" y2="60" stroke={cfg.accentColor} strokeWidth="0.4" style={{ animation: 'geometryPulseLine 10s ease-in-out infinite 4s' }} />
                <line x1="35" y1="40" x2="30" y2="72" stroke={cfg.accentColor} strokeWidth="0.4" style={{ animation: 'geometryPulseLine 12s ease-in-out infinite 1s' }} />
              </svg>

              {cfg.rings.map((ring, rIdx) => (
                <div
                  key={`ring-${rIdx}`}
                  className="absolute rounded-full border pointer-events-none"
                  style={{
                    top: ring.top,
                    bottom: ring.bottom,
                    left: ring.left,
                    right: ring.right,
                    width: `${ring.size}px`,
                    height: `${ring.size}px`,
                    borderColor: cfg.accentColor,
                    opacity: ring.opacity,
                  }}
                />
              ))}
              {cfg.dots.map((dot, dIdx) => (
                <div
                  key={`dot-${dIdx}`}
                  className="absolute rounded-full pointer-events-none transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    right: dot.right,
                    width: `${dot.size}px`,
                    height: `${dot.size}px`,
                    backgroundColor: cfg.accentColor,
                    animation: `geometryPulseNode ${8 + dIdx}s ease-in-out infinite ${dIdx * 0.8}s`,
                  }}
                />
              ))}
            </div>

            {/* Top Spacer */}
            <div />

            {/* Large Centered Number: 01, 02, 03 - Depth Layer: 18px */}
            <div className="relative z-10 text-center py-4 flex items-center justify-center depth-layer-mid" style={{ transform: 'translateZ(18px)' }}>
              <span className={`font-serif italic font-light text-8xl sm:text-9xl md:text-[10.5rem] leading-none tracking-tight ${cfg.numberColor} select-none transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[2px]`}>
                {cfg.num}
              </span>
            </div>

            {/* Bottom Bar: PROJECT [dot] on left, 01 / 03 on right - Depth Layer: 26px */}
            <div className="relative z-10 flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-widest text-[#9E958E] uppercase depth-layer-foreground" style={{ transform: 'translateZ(26px)' }}>
              <div className="flex items-center gap-2">
                <span>PROJECT</span>
                {cfg.hasDot && (
                  <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor} inline-block`} />
                )}
              </div>
              <span>{cfg.indexLabel}</span>
            </div>
          </motion.div>
        </div>

        {/* Text & Deliverables Column */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className={`lg:col-span-6 space-y-7 ${visualOnLeft ? 'lg:col-start-7 lg:order-2' : 'lg:col-start-1 lg:order-1'}`}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-sakura-deep font-semibold tracking-wider">
              0{index + 1}
            </span>
            <span className="text-ink-divider">/</span>
            <span className="font-mono text-xs uppercase tracking-wider text-matcha-deep font-medium">
              {project.category}
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-light leading-tight text-hover-pop">
            {project.title}
          </h3>

          <p className="font-serif text-base sm:text-lg text-ink-muted italic border-l border-sakura/60 pl-4 py-1 font-light">
            “{project.tagline}”
          </p>

          <p className="text-sm text-ink-muted leading-relaxed font-light">
            {project.description}
          </p>

          {/* Understated rounded-outline technology tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-block px-2.5 py-1 text-[11px] font-sans text-ink-muted border border-ink-divider/60 rounded-full bg-[#FFF9F5]/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Technical Deliverables List — Plain, No Boxes */}
          <div className="space-y-3 pt-2 border-t border-ink-divider/40">
            {project.bullets.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                <span className="text-sakura-deep select-none mt-0.5">·</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Understated Links with Thin Underlines */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-ink-divider/40">
            {/* LIVE DEMO ↗ */}
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-ink hover:text-sakura-deep interactive-pop cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-ink group-hover:after:bg-sakura-deep after:transition-colors"
            >
              <span>LIVE DEMO</span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* VIEW CODE ↗ */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-ink-muted hover:text-ink interactive-pop cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-ink-muted/50 group-hover:after:bg-ink after:transition-colors"
              >
                <span>VIEW CODE</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export const SelectedWork: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start center']
  });

  // Reversible section entrance as user scrolls from Hero/Intro toward Work:
  // translateY: 60px -> 0, opacity: 0.55 -> 1, scale: 0.98 -> 1
  const sectionY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 1]);
  const sectionScale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  return (
    <section ref={sectionRef} id="work" className="py-28 md:py-44 border-t border-ink-divider/40 bg-canvas relative scroll-mt-20 scene-perspective">
      <div id="selected-work" className="absolute -top-24" />
      <motion.div style={{ y: sectionY, opacity: sectionOpacity, scale: sectionScale }} className="max-w-6xl mx-auto px-6 sm:px-12 relative">
        {/* Editorial Section Number Marker: 03 */}
        <div className="hidden lg:flex absolute -left-8 sm:-left-14 top-4 flex-col items-center select-none" aria-hidden="true">
          <div className="w-6 h-6 rounded-full border border-[#EBE2DA] bg-[#FFF9F5] flex items-center justify-center text-[10px] font-mono text-[#B86B7A] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            03
          </div>
          <div className="w-px h-32 bg-gradient-to-b from-[#EBE2DA] to-transparent mt-2" />
        </div>

        {/* Section Header: SELECTED WORK */}
        <div className="mb-20 sm:mb-32">
          <div className="font-mono text-xs text-[#615A54] tracking-widest uppercase mb-4">
            SELECTED WORK
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#292725] font-light tracking-tight leading-tight text-hover-pop">
            Things I've built while <span className="italic font-normal text-[#B86B7A]">learning</span> —<br />
            real projects, real problems.
          </h2>
        </div>

        {/* Standalone Editorial Spreads with Substantial Vertical Breathing Room */}
        <div className="space-y-36 sm:space-y-48">
          {PROJECTS.map((project, index) => (
            <ProjectSpread
              key={project.id}
              project={project}
              index={index}
              visualOnLeft={index % 2 === 0}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
