import React, { useRef } from 'react';
import { motion, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { SITE_CONFIG } from '../../data/siteConfig';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import urviPortrait from '../../assets/urvi_portrait.png';
import handwrittenAccent from '../../assets/handwritten_accent.png';

const LinkedinIcon = ({ size = 15, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 15, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 22 });

  // Portrait Hover Pop Springs:
  // Rest: translateZ(60px), rotateX(0), rotateY(0), scale(1)
  // Hover: translateZ(90px), rotateX(-2deg), rotateY(3deg), scale(1.025)
  const hoverZVal = useMotionValue(60);
  const hoverScaleVal = useMotionValue(1);
  const hoverRotXVal = useMotionValue(0);
  const hoverRotYVal = useMotionValue(0);

  const springHoverZ = useSpring(hoverZVal, { stiffness: 140, damping: 22 });
  const springHoverScale = useSpring(hoverScaleVal, { stiffness: 140, damping: 22 });
  const springHoverRotX = useSpring(hoverRotXVal, { stiffness: 140, damping: 22 });
  const springHoverRotY = useSpring(hoverRotYVal, { stiffness: 140, damping: 22 });

  // Spatial Layer 1 (Background atmosphere: translateZ(-80px), translateX: x * 8px, translateY: y * 5px)
  const bgX = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [-8, 8]);
  const bgY = useTransform(springY, [-1, 1], shouldReduceMotion ? [0, 0] : [-5, 5]);

  // Spatial Layer 2 (Typography / Content: translateZ(0), translateX: x * -4px, translateY: y * -3px)
  const contentX = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [4, -4]);
  const contentY = useTransform(springY, [-1, 1], shouldReduceMotion ? [0, 0] : [3, -3]);

  // Spatial Layer 3 (Portrait Tracking: translateX: x * 10px, translateY: y * 6px, rotateY: x * 4deg, rotateX: -y * 3deg)
  const portraitTrackX = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [-10, 10]);
  const portraitTrackY = useTransform(springY, [-1, 1], shouldReduceMotion ? [0, 0] : [-6, 6]);
  const portraitTrackRotY = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [-4, 4]);
  const portraitTrackRotX = useTransform(springY, [-1, 1], shouldReduceMotion ? [0, 0] : [3, -3]);

  // Composed Portrait Transforms (Mouse tracking + Hover pop)
  const portraitRotateX = useTransform(
    [portraitTrackRotX, springHoverRotX],
    ([tX, hX]) => (shouldReduceMotion ? 0 : (tX as number) + (hX as number))
  );
  const portraitRotateY = useTransform(
    [portraitTrackRotY, springHoverRotY],
    ([tY, hY]) => (shouldReduceMotion ? 0 : (tY as number) + (hY as number))
  );

  const pinkCircleX = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [-4, 4]);
  const accentX = useTransform(springX, [-1, 1], shouldReduceMotion ? [0, 0] : [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // Normalized x from -1 to 1, y from -1 to 1
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(Math.max(-1, Math.min(1, nx)));
    mouseY.set(Math.max(-1, Math.min(1, ny)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    hoverZVal.set(60);
    hoverScaleVal.set(1);
    hoverRotXVal.set(0);
    hoverRotYVal.set(0);
  };

  const handlePortraitEnter = () => {
    if (shouldReduceMotion || typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches) return;
    hoverZVal.set(90);
    hoverScaleVal.set(1.025);
    hoverRotXVal.set(-2);
    hoverRotYVal.set(3);
  };

  const handlePortraitLeave = () => {
    hoverZVal.set(60);
    hoverScaleVal.set(1);
    hoverRotXVal.set(0);
    hoverRotYVal.set(0);
  };

  return (
    <section 
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 sm:px-12 max-w-6xl mx-auto w-full scene-perspective"
    >
      {/* Editorial Section Number Marker: 01 */}
      <div className="hidden lg:flex absolute -left-8 sm:-left-14 top-36 flex-col items-center select-none" aria-hidden="true">
        <div className="w-6 h-6 rounded-full border border-[#EBE2DA] bg-[#FFF9F5] flex items-center justify-center text-[10px] font-mono text-[#B86B7A] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          01
        </div>
        <div className="w-px h-32 bg-gradient-to-b from-[#EBE2DA] to-transparent mt-2" />
      </div>

      {/* Top-Right Side Tagline */}
      <div className="hidden md:block absolute right-6 sm:right-12 top-28 sm:top-36 font-mono text-[9px] tracking-[0.28em] text-[#615A54]/80 uppercase leading-relaxed text-right select-none" aria-hidden="true">
        TURNING<br />CURIOSITY<br />INTO<br />IMPACT
      </div>

      {/* Ambient Light Diffusion: Breathing Atmosphere - Layer 1 (Depth: translateZ(-80px)) */}
      <motion.div 
        style={{ x: bgX, y: bgY, transform: 'translateZ(-80px)' }} 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        aria-hidden="true"
      >
        {/* Soft blush pink atmosphere in upper/middle-right of Hero */}
        <div 
          className="absolute top-6 sm:top-10 right-2 sm:right-14 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(243,199,209,0.08)_0%,rgba(249,230,234,0.04)_55%,transparent_75%)] blur-3xl pointer-events-none select-none z-0"
          style={{ animation: 'heroAtmospherePink 32s ease-in-out infinite' }}
        />

        {/* Soft lavender atmosphere in lower-left of Hero */}
        <div 
          className="absolute bottom-4 sm:bottom-12 left-2 sm:left-16 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full bg-[radial-gradient(circle,rgba(220,207,229,0.06)_0%,rgba(238,232,242,0.03)_55%,transparent_75%)] blur-3xl pointer-events-none select-none z-0"
          style={{ animation: 'heroAtmosphereLavender 38s ease-in-out infinite' }}
        />

        {/* Subtle matcha green atmospheric tint in center/upper-left */}
        <div 
          className="absolute top-1/4 left-1/5 w-64 sm:w-[380px] h-64 sm:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(220,229,210,0.05)_0%,rgba(220,229,210,0.015)_55%,transparent_75%)] blur-3xl pointer-events-none select-none z-0"
          style={{ animation: 'heroAtmosphereMatcha 34s ease-in-out infinite' }}
        />

        {/* Exactly 2 Subtle Bubbles */}
        <div
          className="absolute right-14 sm:right-26 top-18 sm:top-24 w-[28px] h-[28px] rounded-full bg-[#F3C7D1] opacity-[0.10] blur-[6px] pointer-events-none z-0"
          style={{ animation: 'heroBubble1 16s ease-in-out infinite' }}
        />
        <div
          className="absolute right-26 sm:right-40 top-40 sm:top-48 w-[24px] h-[24px] rounded-full bg-[#DCCFE5] opacity-[0.09] blur-[5px] pointer-events-none z-0"
          style={{ animation: 'heroBubble2 19s ease-in-out infinite 3.5s' }}
        />
      </motion.div>

      {/* Exactly 8 Falling Sakura Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1] select-none" aria-hidden="true">
        <div
          className="absolute left-[10%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal1 14s cubic-bezier(0.37, 0, 0.63, 1) -3s infinite' }}
        >
          <svg width="13" height="18" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#E8A7B5" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
        <div
          className="absolute left-[26%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal2 17s cubic-bezier(0.37, 0, 0.63, 1) -8s infinite' }}
        >
          <svg width="11" height="16" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#F3C7D1" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
        <div
          className="absolute left-[42%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal3 19s cubic-bezier(0.37, 0, 0.63, 1) -13s infinite' }}
        >
          <svg width="14" height="19" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#E8A7B5" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
        <div
          className="absolute left-[56%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal4 15s cubic-bezier(0.37, 0, 0.63, 1) -5s infinite' }}
        >
          <svg width="10" height="15" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#F3C7D1" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
        <div
          className="absolute left-[70%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal5 21s cubic-bezier(0.37, 0, 0.63, 1) -17s infinite' }}
        >
          <svg width="12" height="17" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#E8A7B5" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
        <div
          className="absolute left-[84%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal6 16s cubic-bezier(0.37, 0, 0.63, 1) -10s infinite' }}
        >
          <svg width="9" height="14" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#F3C7D1" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
        <div
          className="absolute left-[20%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal7 18s cubic-bezier(0.37, 0, 0.63, 1) -6s infinite' }}
        >
          <svg width="13" height="18" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#E8A7B5" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
        <div
          className="absolute left-[64%] top-0 pointer-events-none z-0 select-none hero-falling-petal will-change-transform"
          style={{ animation: 'heroFallingPetal8 20s cubic-bezier(0.37, 0, 0.63, 1) -14s infinite' }}
        >
          <svg width="10" height="15" viewBox="0 0 20 27" fill="none">
            <path d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z" fill="#F3C7D1" />
            <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
      </div>

      {/* Main Hero Content Layout */}
      <div 
        style={{ transformStyle: 'preserve-3d' }}
        className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 lg:gap-8 xl:gap-10 max-w-5xl xl:max-w-[1080px] mx-auto w-full pt-4 sm:pt-0"
      >
        {/* LEFT COLUMN: Metadata, Display Heading, Statement, CTAs, Direct Links - Layer 2 (Depth: translateZ(0)) */}
        <motion.div 
          style={{ x: contentX, y: contentY, transformStyle: 'preserve-3d' }}
          className="space-y-8 sm:space-y-10 max-w-xl lg:max-w-[470px] xl:max-w-[500px] shrink-0"
        >
          {/* Top: Header metadata with subtle Matcha accent dot */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#615A54] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#879B72]/70 inline-block" />
            <span>AI &amp; ML UNDERGRADUATE • ASPIRING ML ENGINEER • NLP • GENAI • PYTHON • TENSORFLOW • STREAMLIT</span>
          </motion.div>

          {/* Large Display Heading: Urvi (charcoal) Tyagi (deep Sakura) with text-hover-pop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-0 select-none preserve-3d"
          >
            <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-light tracking-tight leading-[0.9]">
              <span className="text-[#292725] block text-hover-pop">Urvi</span>
              <span className="text-[#B86B7A] block text-hover-pop">Tyagi</span>
            </h1>
          </motion.div>

          {/* Personal Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-3"
          >
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#292725] font-light leading-relaxed text-hover-pop">
              I build intelligent things with curiosity, code &amp; creativity.
            </p>
          </motion.div>

          {/* Buttons Row: EXPLORE MY WORK ↓ & VIEW RESUME with interactive-pop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-[#292725] px-6 py-3.5 text-xs font-mono tracking-widest text-[#292725] hover:bg-[#292725] hover:text-[#FFF9F5] interactive-pop group cursor-pointer"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href={SITE_CONFIG.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-3.5 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] interactive-pop group cursor-pointer"
            >
              <FileText size={16} className="text-[#292725] group-hover:text-[#B86B7A] transition-colors" />
              <span>VIEW RESUME</span>
            </a>
          </motion.div>

          {/* Direct Links Row: LINKEDIN ↗, GITHUB ↗, EMAIL ME ↗ with nav-link-pop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-7 sm:gap-9 pt-3"
          >
            <a
              href="https://www.linkedin.com/in/urvi-tyagi026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.18em] text-[#292725] hover:text-[#B86B7A] uppercase nav-link-pop group cursor-pointer"
            >
              <LinkedinIcon size={14} className="transition-transform duration-250 group-hover:scale-110 text-[#292725] group-hover:text-[#B86B7A]" />
              <span>LINKEDIN</span>
              <span className="text-[11px] transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-0.5 inline-block">↗</span>
            </a>

            <a
              href="https://github.com/Urvity03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.18em] text-[#292725] hover:text-[#465640] uppercase nav-link-pop group cursor-pointer"
            >
              <GithubIcon size={14} className="transition-transform duration-250 group-hover:scale-110 text-[#292725] group-hover:text-[#465640]" />
              <span>GITHUB</span>
              <span className="text-[11px] transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-0.5 inline-block">↗</span>
            </a>

            <a
              href="mailto:tyagiurvi26@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.18em] text-[#292725] hover:text-[#B86B7A] uppercase nav-link-pop group cursor-pointer"
            >
              <Mail size={14} className="transition-transform duration-250 group-hover:scale-110 text-[#292725] group-hover:text-[#B86B7A]" />
              <span>EMAIL ME</span>
              <span className="text-[11px] transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-0.5 inline-block">↗</span>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Authentic Photo Cutout - Layer 3: translateZ(60px) rest, 90px hover pop */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={handlePortraitEnter}
          onMouseLeave={handlePortraitLeave}
          style={{
            x: portraitTrackX,
            y: portraitTrackY,
            z: springHoverZ,
            scale: springHoverScale,
            rotateX: portraitRotateX,
            rotateY: portraitRotateY,
            transformStyle: 'preserve-3d'
          }}
          className="relative shrink-0 flex items-center justify-center pt-6 lg:pt-0 lg:mt-4 xl:mt-6 select-none pointer-events-auto cursor-pointer self-center lg:self-center will-change-transform"
        >
          {/* Subtle pale pink circular atmospheric shape behind portrait */}
          <motion.div 
            style={{ x: pinkCircleX, transform: 'translateZ(-15px)' }}
            className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] lg:w-[510px] xl:w-[550px] h-[380px] sm:h-[460px] lg:h-[510px] xl:h-[550px] rounded-full bg-[radial-gradient(circle,rgba(243,199,209,0.11)_0%,rgba(243,199,209,0.08)_60%,rgba(243,199,209,0.02)_85%,transparent_100%)] blur-md pointer-events-none select-none z-0"
            aria-hidden="true"
          />

          {/* Authentic Real Photo Cutout */}
          <img
            src={urviPortrait}
            alt="Urvi Tyagi"
            style={{ transform: 'translateZ(15px)' }}
            className="relative z-10 w-[300px] sm:w-[380px] md:w-[430px] lg:w-[475px] xl:w-[495px] object-contain drop-shadow-none pointer-events-none"
            loading="eager"
          />

          {/* Handwritten Editorial Accent to the right */}
          <motion.div 
            style={{ x: accentX, transform: 'translateZ(25px)' }}
            className="hidden lg:block absolute -right-14 xl:-right-18 top-[38%] -translate-y-1/2 pointer-events-none select-none z-20"
          >
            <img
              src={handwrittenAccent}
              alt="Same girl Bigger dreams"
              className="w-[130px] lg:w-[145px] xl:w-[160px] object-contain drop-shadow-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
