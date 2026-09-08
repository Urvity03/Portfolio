import React, { useEffect, useState } from 'react';

interface PetalConfig {
  id: number;
  left: string;
  size: number;
  delay: string;
  duration: string;
  animationType: 'A' | 'B' | 'C';
  depth: 'foreground' | 'middle' | 'background';
}

// 14 Organic Petals distributed across 3 depth planes
const PETALS: PetalConfig[] = [
  // Foreground (sharper, slightly larger, gentle depth)
  { id: 1, left: '8%', size: 15, delay: '0s', duration: '14s', animationType: 'A', depth: 'foreground' },
  { id: 2, left: '26%', size: 14, delay: '5s', duration: '16s', animationType: 'B', depth: 'foreground' },
  { id: 3, left: '72%', size: 15, delay: '3s', duration: '15s', animationType: 'A', depth: 'foreground' },
  { id: 4, left: '90%', size: 14, delay: '9s', duration: '17s', animationType: 'C', depth: 'foreground' },

  // Middle (medium size)
  { id: 5, left: '16%', size: 11, delay: '2s', duration: '18s', animationType: 'B', depth: 'middle' },
  { id: 6, left: '38%', size: 12, delay: '7s', duration: '19s', animationType: 'A', depth: 'middle' },
  { id: 7, left: '55%', size: 11, delay: '1s', duration: '17s', animationType: 'C', depth: 'middle' },
  { id: 8, left: '65%', size: 12, delay: '11s', duration: '20s', animationType: 'B', depth: 'middle' },
  { id: 9, left: '82%', size: 11, delay: '6s', duration: '18s', animationType: 'A', depth: 'middle' },

  // Background (smaller, lower opacity, subtle atmospheric blur)
  { id: 10, left: '4%', size: 8, delay: '4s', duration: '21s', animationType: 'C', depth: 'background' },
  { id: 11, left: '32%', size: 9, delay: '10s', duration: '22s', animationType: 'B', depth: 'background' },
  { id: 12, left: '48%', size: 8, delay: '8s', duration: '20s', animationType: 'A', depth: 'background' },
  { id: 13, left: '78%', size: 9, delay: '12s', duration: '22s', animationType: 'C', depth: 'background' },
  { id: 14, left: '95%', size: 8, delay: '14s', duration: '21s', animationType: 'B', depth: 'background' },
];

// 5 Soft Translucent Floating Bubbles / Orbs
const BUBBLES = [
  { id: 'b1', top: '18%', left: '14%', size: 28, delay: '0s', duration: '13s', color: 'from-[#F3C7D1]/30 to-[#EEE8F2]/20' },
  { id: 'b2', top: '34%', left: '84%', size: 36, delay: '3s', duration: '15s', color: 'from-[#EEE8F2]/30 to-[#DCCFE5]/20' },
  { id: 'b3', top: '56%', left: '8%', size: 32, delay: '6s', duration: '14s', color: 'from-[#DCE5D2]/25 to-[#F3C7D1]/20' },
  { id: 'b4', top: '74%', left: '91%', size: 26, delay: '2s', duration: '16s', color: 'from-[#F9E6EA]/30 to-[#DCCFE5]/25' },
  { id: 'b5', top: '88%', left: '28%', size: 30, delay: '5s', duration: '14s', color: 'from-[#EEE8F2]/30 to-[#DCE5D2]/20' },
];

// 9 Tiny Soft Light Particles (Gentle slow pulse/glow)
const LIGHT_POINTS = [
  { id: 'l1', top: '12%', left: '32%', delay: '1s', duration: '7s' },
  { id: 'l2', top: '24%', left: '76%', delay: '4s', duration: '8s' },
  { id: 'l3', top: '40%', left: '20%', delay: '2s', duration: '6s' },
  { id: 'l4', top: '48%', left: '64%', delay: '5s', duration: '9s' },
  { id: 'l5', top: '62%', left: '86%', delay: '0s', duration: '7s' },
  { id: 'l6', top: '70%', left: '15%', delay: '3s', duration: '8s' },
  { id: 'l7', top: '82%', left: '42%', delay: '6s', duration: '6s' },
  { id: 'l8', top: '91%', left: '72%', delay: '2s', duration: '7s' },
  { id: 'l9', top: '96%', left: '10%', delay: '5s', duration: '8s' },
];

export const PetalAccents: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
      {/* 1. Subtle Atmospheric Radial Washes across the page */}
      <div className="absolute inset-0 page-atmosphere opacity-90" />

      {/* 2. Soft Floating Pastel Bubbles (4–7 visible) */}
      {!reducedMotion &&
        BUBBLES.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: bubble.top,
              left: bubble.left,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animation: `bubbleFloat ${bubble.duration} ease-in-out infinite`,
              animationDelay: bubble.delay,
            }}
          >
            <div
              className={`w-full h-full rounded-full bg-gradient-to-br ${bubble.color} backdrop-blur-[1px] border border-white/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]`}
            />
          </div>
        ))}

      {/* 3. Tiny Soft Light Particles (8–12 visible) */}
      {!reducedMotion &&
        LIGHT_POINTS.map((pt) => (
          <div
            key={pt.id}
            className="absolute pointer-events-none"
            style={{
              top: pt.top,
              left: pt.left,
              animation: `lightGlow ${pt.duration} ease-in-out infinite`,
              animationDelay: pt.delay,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8A7B5] opacity-60 blur-[0.5px]" />
          </div>
        ))}

      {/* 4. Organic Drifting Sakura Petals across 3 Depth Planes */}
      {!reducedMotion &&
        PETALS.map((petal) => {
          const animName = `petalDrift${petal.animationType}`;
          const isBackground = petal.depth === 'background';
          const isForeground = petal.depth === 'foreground';

          return (
            <div
              key={petal.id}
              className={`absolute pointer-events-none ${
                isBackground ? 'blur-[0.5px] opacity-40' : isForeground ? 'opacity-85' : 'opacity-65'
              }`}
              style={{
                left: petal.left,
                top: '-5vh',
                animation: `${animName} ${petal.duration} cubic-bezier(0.35, 0.15, 0.45, 0.95) infinite`,
                animationDelay: petal.delay,
              }}
            >
              <svg
                width={petal.size}
                height={petal.size * 1.35}
                viewBox="0 0 20 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id={`petalGrad-${petal.id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFF9F5" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#F3C7D1" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#E8A7B5" stopOpacity="0.75" />
                  </linearGradient>
                </defs>
                {/* Organic curved petal shape */}
                <path
                  d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z"
                  fill={`url(#petalGrad-${petal.id})`}
                />
                {/* Delicate subtle center vein */}
                <path
                  d="M10 4 L10 21"
                  stroke="#B86B7A"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </div>
          );
        })}
    </div>
  );
};
