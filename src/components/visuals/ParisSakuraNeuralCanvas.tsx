import React from 'react';

interface ParisSakuraNeuralCanvasProps {
  className?: string;
}

export const ParisSakuraNeuralCanvas: React.FC<ParisSakuraNeuralCanvasProps> = ({ 
  className = '',
}) => {
  return (
    <div className={`relative pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Organic botanical branch gradient */}
          <linearGradient id="psBranchGrad" x1="50" y1="180" x2="720" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#465640" stopOpacity="0.6" />
            <stop offset="45%" stopColor="#879B72" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#B86B7A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#E8A7B5" stopOpacity="0.2" />
          </linearGradient>

          {/* Blossom Petal Gradient */}
          <linearGradient id="psPetalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9F5" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#E8A7B5" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#B86B7A" stopOpacity="0.55" />
          </linearGradient>

          {/* Neural Node Radial Glow */}
          <radialGradient id="psNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#879B72" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#879B72" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#879B72" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- 1. Subtle Computational Grid & Precision Marks --- */}
        <g opacity="0.25" stroke="#E8A7B5" strokeWidth="0.5" strokeDasharray="2 6">
          <line x1="80" y1="70" x2="920" y2="70" />
          <line x1="80" y1="200" x2="920" y2="200" />
          <line x1="80" y1="360" x2="920" y2="360" />
          <line x1="80" y1="520" x2="920" y2="520" />
          
          <line x1="160" y1="40" x2="160" y2="590" />
          <line x1="380" y1="40" x2="380" y2="590" />
          <line x1="620" y1="40" x2="620" y2="590" />
          <line x1="840" y1="40" x2="840" y2="590" />
        </g>

        {/* Minimal Precision Mathematical Marks */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#615A54" opacity="0.5">
          <text x="90" y="65">LATENT MATRIX [512 × 512]</text>
          <text x="90" y="85">ATTENTION WEIGHTS · LAYER 12</text>
          <text x="760" y="65">DIM [B, 512] · SEED 0x7B3</text>
          <text x="760" y="85">EMBEDDING SPACE ℝ⁴ˣ⁶⁴⁰</text>
        </g>

        {/* --- 2. Neural Attention Lattice & Graph Connectivity --- */}
        <g id="neural-lattice" transform="translate(560, 80)">
          <circle cx="180" cy="220" r="130" stroke="#E8A7B5" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.2" />
          <circle cx="180" cy="220" r="85" stroke="#879B72" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />

          {/* Graph Node Connections */}
          <g stroke="#879B72" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.45" fill="none">
            <line x1="50" y1="150" x2="110" y2="190" />
            <line x1="50" y1="240" x2="110" y2="190" />
            <line x1="110" y1="190" x2="180" y2="220" />
            <line x1="180" y1="220" x2="250" y2="180" />
            <line x1="180" y1="220" x2="240" y2="270" />
            <line x1="250" y1="180" x2="310" y2="210" />
          </g>

          {/* Node Glows */}
          <circle cx="110" cy="190" r="16" fill="url(#psNodeGlow)" />
          <circle cx="110" cy="190" r="3" fill="#465640" />

          <circle cx="180" cy="220" r="22" fill="url(#psNodeGlow)" />
          <circle cx="180" cy="220" r="4" fill="#B86B7A" />

          <circle cx="250" cy="180" r="14" fill="url(#psNodeGlow)" />
          <circle cx="250" cy="180" r="3" fill="#879B72" />

          <circle cx="240" cy="270" r="12" fill="url(#psNodeGlow)" />
          <circle cx="240" cy="270" r="2.5" fill="#465640" />

          <circle cx="310" cy="210" r="10" fill="url(#psNodeGlow)" />
          <circle cx="310" cy="210" r="2" fill="#B86B7A" />

          <text x="120" y="170" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#465640" opacity="0.75">
            softmax(QKᵀ / √d)
          </text>
          <text x="195" y="250" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#8C4856" opacity="0.75">
            z ~ N(μ, Σ)
          </text>
        </g>

        {/* --- 3. Botanical Sakura Branches Sweeping Across --- */}
        <g id="sakura-branches" stroke="url(#psBranchGrad)" fill="none">
          <path
            d="M-20 230 C160 210, 230 330, 380 290 C490 260, 560 340, 670 300"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M230 320 C300 240, 410 180, 520 210 C600 230, 650 180, 730 200"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M380 290 C430 360, 500 400, 590 380 C650 370, 700 390, 770 340"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </g>

        {/* Transition vectors from branches into lattice nodes */}
        <line x1="670" y1="300" x2="740" y2="270" stroke="#879B72" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.5" />
        <line x1="730" y1="200" x2="810" y2="180" stroke="#B86B7A" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.45" />

        {/* --- 4. Blossom Petal Clusters --- */}
        <g id="sakura-blossoms">
          {/* Blossom 1 */}
          <g transform="translate(230, 320)">
            <ellipse cx="0" cy="-7" rx="3.5" ry="6.2" fill="url(#psPetalGrad)" opacity="0.85" />
            <ellipse cx="6.5" cy="-2" rx="3.5" ry="6.2" transform="rotate(72 6.5 -2)" fill="url(#psPetalGrad)" opacity="0.85" />
            <ellipse cx="4" cy="5.5" rx="3.5" ry="6.2" transform="rotate(144 4 5.5)" fill="url(#psPetalGrad)" opacity="0.85" />
            <ellipse cx="-4" cy="5.5" rx="3.5" ry="6.2" transform="rotate(216 -4 5.5)" fill="url(#psPetalGrad)" opacity="0.85" />
            <ellipse cx="-6.5" cy="-2" rx="3.5" ry="6.2" transform="rotate(288 -6.5 -2)" fill="url(#psPetalGrad)" opacity="0.85" />
            <circle cx="0" cy="0" r="1.8" fill="#B86B7A" />
            <circle cx="0" cy="0" r="0.7" fill="#FFF9F5" />
          </g>

          {/* Blossom 2 */}
          <g transform="translate(380, 290) scale(0.85)">
            <ellipse cx="0" cy="-7" rx="3.2" ry="5.8" fill="url(#psPetalGrad)" opacity="0.82" />
            <ellipse cx="6" cy="-2" rx="3.2" ry="5.8" transform="rotate(72 6 -2)" fill="url(#psPetalGrad)" opacity="0.82" />
            <ellipse cx="4" cy="5" rx="3.2" ry="5.8" transform="rotate(144 4 5)" fill="url(#psPetalGrad)" opacity="0.82" />
            <ellipse cx="-4" cy="5.5" rx="3.2" ry="5.8" transform="rotate(216 -4 5.5)" fill="url(#psPetalGrad)" opacity="0.82" />
            <ellipse cx="-6" cy="-2" rx="3.2" ry="5.8" transform="rotate(288 -6 -2)" fill="url(#psPetalGrad)" opacity="0.82" />
            <circle cx="0" cy="0" r="1.6" fill="#879B72" />
          </g>

          {/* Blossom 3 */}
          <g transform="translate(520, 210) scale(0.78)">
            <ellipse cx="0" cy="-6" rx="3" ry="5.2" fill="url(#psPetalGrad)" opacity="0.8" />
            <ellipse cx="5.5" cy="-2" rx="3" ry="5.2" transform="rotate(72 5.5 -2)" fill="url(#psPetalGrad)" opacity="0.8" />
            <ellipse cx="3.5" cy="4.5" rx="3" ry="5.2" transform="rotate(144 3.5 4.5)" fill="url(#psPetalGrad)" opacity="0.8" />
            <ellipse cx="-3.5" cy="4.5" rx="3" ry="5.2" transform="rotate(216 -3.5 4.5)" fill="url(#psPetalGrad)" opacity="0.8" />
            <ellipse cx="-5.5" cy="-2" rx="3.5" ry="5.2" transform="rotate(288 -5.5 -2)" fill="url(#psPetalGrad)" opacity="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#B86B7A" />
          </g>

          {/* Floating subtle petals */}
          <path
            d="M310 215 C312 210, 320 211, 322 217 C324 223, 314 226, 310 215 Z"
            fill="url(#psPetalGrad)"
            opacity="0.6"
            transform="rotate(22 316 218)"
          />
          <path
            d="M440 335 C442 330, 450 332, 452 337 C454 342, 444 346, 440 335 Z"
            fill="url(#psPetalGrad)"
            opacity="0.55"
            transform="rotate(-18 446 338)"
          />
          <path
            d="M620 240 C622 235, 630 237, 632 242 C634 247, 624 251, 620 240 Z"
            fill="url(#psPetalGrad)"
            opacity="0.5"
            transform="rotate(35 626 243)"
          />
        </g>
      </svg>
    </div>
  );
};
