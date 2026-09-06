import React from 'react';

interface SakuraNeuralCanvasProps {
  className?: string;
}

export const SakuraNeuralCanvas: React.FC<SakuraNeuralCanvasProps> = ({ 
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
          {/* Subtle neural lattice gradient */}
          <linearGradient id="neuralLatticeGrad" x1="600" y1="80" x2="900" y2="550" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B86B7A" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#879B72" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#465640" stopOpacity="0.1" />
          </linearGradient>

          {/* Organic botanical branch gradient */}
          <linearGradient id="sakuraBranchGrad" x1="50" y1="180" x2="720" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#465640" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#879B72" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#B86B7A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E8A7B5" stopOpacity="0.25" />
          </linearGradient>

          {/* Blossom Petal Gradient */}
          <linearGradient id="petalBlushGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9F5" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#E8A7B5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B86B7A" stopOpacity="0.65" />
          </linearGradient>

          {/* Neural Node Glow */}
          <radialGradient id="nodeGlowRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#879B72" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#879B72" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#879B72" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="roseNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8A7B5" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#B86B7A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#B86B7A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- 1. Minimal Coordinate Grid & Precision Marks --- */}
        <g opacity="0.35" stroke="#E8A7B5" strokeWidth="0.5" strokeDasharray="2 5">
          <line x1="80" y1="70" x2="920" y2="70" />
          <line x1="80" y1="200" x2="920" y2="200" />
          <line x1="80" y1="360" x2="920" y2="360" />
          <line x1="80" y1="520" x2="920" y2="520" />
          
          <line x1="160" y1="40" x2="160" y2="590" />
          <line x1="380" y1="40" x2="380" y2="590" />
          <line x1="620" y1="40" x2="620" y2="590" />
          <line x1="840" y1="40" x2="840" y2="590" />
        </g>

        {/* Precision Matrix Coordinates */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#615A54" opacity="0.65">
          <text x="90" y="65">MATRIX [512 × 512]</text>
          <text x="90" y="85">HEADS: 8 · d_k: 64</text>
          <text x="830" y="65">DIM [B, 512]</text>
          <text x="830" y="85">SEED 0x7B3 · ADAMW</text>
          <text x="90" y="535">TENSOR MANIFOLD ℝ⁴ˣ⁶⁴⁰</text>
        </g>

        {/* --- 2. Neural Computational Geometric Lattice --- */}
        {/* Replacing any former landmark with a restrained AI neural network geometry */}
        <g id="neural-computational-lattice" transform="translate(610, 60)">
          {/* Subtle Concentric Latent Geometric Rings */}
          <circle cx="160" cy="240" r="160" stroke="#E8A7B5" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />
          <circle cx="160" cy="240" r="110" stroke="#879B72" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.35" />
          <circle cx="160" cy="240" r="55" stroke="#B86B7A" strokeWidth="0.6" strokeDasharray="1 3" opacity="0.4" />

          {/* Tangent vector rays and coordinate axes */}
          <line x1="0" y1="240" x2="320" y2="240" stroke="#615A54" strokeWidth="0.4" strokeDasharray="2 4" opacity="0.3" />
          <line x1="160" y1="80" x2="160" y2="400" stroke="#615A54" strokeWidth="0.4" strokeDasharray="2 4" opacity="0.3" />

          {/* Computational Graph Node Interconnections */}
          <g stroke="url(#neuralLatticeGrad)" strokeWidth="0.8" fill="none">
            {/* Input Vector Stage */}
            <line x1="60" y1="140" x2="120" y2="190" />
            <line x1="60" y1="240" x2="120" y2="190" />
            <line x1="60" y1="240" x2="120" y2="290" />
            <line x1="60" y1="340" x2="120" y2="290" />

            {/* Projection & Attention Bridge */}
            <line x1="120" y1="190" x2="190" y2="150" strokeDasharray="2 2" />
            <line x1="120" y1="190" x2="190" y2="240" />
            <line x1="120" y1="290" x2="190" y2="240" />
            <line x1="120" y1="290" x2="190" y2="330" strokeDasharray="2 2" />

            {/* Feedforward Dense Layer */}
            <line x1="190" y1="150" x2="260" y2="200" />
            <line x1="190" y1="240" x2="260" y2="200" />
            <line x1="190" y1="240" x2="260" y2="280" />
            <line x1="190" y1="330" x2="260" y2="280" />

            {/* Output Projection Vector */}
            <line x1="260" y1="200" x2="310" y2="240" />
            <line x1="260" y1="280" x2="310" y2="240" />
          </g>

          {/* Node Glows and Precision Circles */}
          {/* Layer 0 Nodes */}
          <circle cx="60" cy="140" r="14" fill="url(#nodeGlowRadial)" />
          <circle cx="60" cy="140" r="3" fill="#879B72" />
          <circle cx="60" cy="240" r="14" fill="url(#roseNodeGlow)" />
          <circle cx="60" cy="240" r="3" fill="#B86B7A" />
          <circle cx="60" cy="340" r="14" fill="url(#nodeGlowRadial)" />
          <circle cx="60" cy="340" r="3" fill="#879B72" />

          {/* Layer 1 Hidden Nodes */}
          <circle cx="120" cy="190" r="18" fill="url(#nodeGlowRadial)" />
          <circle cx="120" cy="190" r="3.5" fill="#465640" />
          <circle cx="120" cy="190" r="7" stroke="#879B72" strokeWidth="0.5" strokeDasharray="1 2" />
          
          <circle cx="120" cy="290" r="18" fill="url(#roseNodeGlow)" />
          <circle cx="120" cy="290" r="3.5" fill="#B86B7A" />
          <circle cx="120" cy="290" r="7" stroke="#E8A7B5" strokeWidth="0.5" strokeDasharray="1 2" />

          {/* Central Attention Node (160, 240) */}
          <circle cx="160" cy="240" r="24" fill="url(#nodeGlowRadial)" />
          <circle cx="160" cy="240" r="4.5" fill="#465640" />
          <circle cx="160" cy="240" r="10" stroke="#879B72" strokeWidth="0.75" />
          <circle cx="160" cy="240" r="1.5" fill="#FFF9F5" />

          {/* Layer 2 Projection Nodes */}
          <circle cx="190" cy="150" r="14" fill="url(#roseNodeGlow)" />
          <circle cx="190" cy="150" r="3" fill="#B86B7A" />
          <circle cx="190" cy="240" r="14" fill="url(#nodeGlowRadial)" />
          <circle cx="190" cy="240" r="3" fill="#879B72" />
          <circle cx="190" cy="330" r="14" fill="url(#nodeGlowRadial)" />
          <circle cx="190" cy="330" r="3" fill="#465640" />

          {/* Layer 3 Dense Nodes */}
          <circle cx="260" cy="200" r="16" fill="url(#roseNodeGlow)" />
          <circle cx="260" cy="200" r="3.5" fill="#B86B7A" />
          <circle cx="260" cy="280" r="16" fill="url(#nodeGlowRadial)" />
          <circle cx="260" cy="280" r="3.5" fill="#879B72" />

          {/* Output Node */}
          <circle cx="310" cy="240" r="20" fill="url(#nodeGlowRadial)" />
          <circle cx="310" cy="240" r="4" fill="#465640" />
          <circle cx="310" cy="240" r="8" stroke="#879B72" strokeWidth="0.6" strokeDasharray="1 2" />
          <circle cx="310" cy="240" r="1.2" fill="#FFF9F5" />

          {/* Computational Formula Annotations */}
          <text x="110" y="165" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#465640" opacity="0.8">
            softmax(QKᵀ / √d)
          </text>
          <text x="175" y="130" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#8C4856" opacity="0.8">
            z ~ N(μ, Σ)
          </text>
          <text x="240" y="325" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#615A54" opacity="0.75">
            ∇_θ 𝓛(θ)
          </text>
          <text x="290" y="270" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#465640" opacity="0.8">
            ŷ = f(x; θ)
          </text>
        </g>

        {/* --- 3. Organic Sakura: Botanical Branches & Organic-to-AI Bridges --- */}
        {/* Graceful branches sweeping across, with endpoints seamlessly anchoring into AI nodes */}
        <g id="sakura-branches" stroke="url(#sakuraBranchGrad)" fill="none">
          {/* Main sweeping branch */}
          <path
            d="M-20 230 C160 210, 230 330, 380 290 C490 260, 560 340, 670 300"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Upper elegant arching branch */}
          <path
            d="M230 320 C300 240, 410 180, 520 210 C600 230, 650 180, 730 200"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Lower gentle branch */}
          <path
            d="M380 290 C430 360, 500 400, 590 380 C650 370, 700 390, 770 340"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Direct transition twig reaching into neural node Layer 0 */}
          <path
            d="M520 210 C570 190, 620 200, 670 200"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
        </g>

        {/* Connection Vectors from Sakura Branches to Neural Lattice Nodes */}
        <g id="sakura-to-ai-vectors">
          <line x1="670" y1="300" x2="730" y2="250" stroke="#879B72" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.75" />
          <line x1="730" y1="200" x2="800" y2="210" stroke="#B86B7A" strokeWidth="0.7" strokeDasharray="2 3" opacity="0.65" />
          <line x1="770" y1="340" x2="800" y2="390" stroke="#879B72" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />
          <line x1="380" y1="290" x2="480" y2="180" stroke="#879B72" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.5" />
        </g>

        {/* --- 4. Delicate Sakura Blossom Clusters (Motifs) --- */}
        <g id="sakura-blossoms">
          {/* Blossom 1 - on main branch inflection */}
          <g transform="translate(230, 320)">
            <ellipse cx="0" cy="-7" rx="3.5" ry="6.2" fill="url(#petalBlushGrad)" opacity="0.92" />
            <ellipse cx="6.5" cy="-2" rx="3.5" ry="6.2" transform="rotate(72 6.5 -2)" fill="url(#petalBlushGrad)" opacity="0.92" />
            <ellipse cx="4" cy="5.5" rx="3.5" ry="6.2" transform="rotate(144 4 5.5)" fill="url(#petalBlushGrad)" opacity="0.92" />
            <ellipse cx="-4" cy="5.5" rx="3.5" ry="6.2" transform="rotate(216 -4 5.5)" fill="url(#petalBlushGrad)" opacity="0.92" />
            <ellipse cx="-6.5" cy="-2" rx="3.5" ry="6.2" transform="rotate(288 -6.5 -2)" fill="url(#petalBlushGrad)" opacity="0.92" />
            <circle cx="0" cy="0" r="2" fill="#B86B7A" />
            <circle cx="0" cy="0" r="0.8" fill="#FFF9F5" />
          </g>

          {/* Blossom 2 - mid-branch node */}
          <g transform="translate(380, 290) scale(0.85)">
            <ellipse cx="0" cy="-7" rx="3.2" ry="5.8" fill="url(#petalBlushGrad)" opacity="0.88" />
            <ellipse cx="6" cy="-2" rx="3.2" ry="5.8" transform="rotate(72 6 -2)" fill="url(#petalBlushGrad)" opacity="0.88" />
            <ellipse cx="4" cy="5" rx="3.2" ry="5.8" transform="rotate(144 4 5)" fill="url(#petalBlushGrad)" opacity="0.88" />
            <ellipse cx="-4" cy="5" rx="3.2" ry="5.8" transform="rotate(216 -4 5)" fill="url(#petalBlushGrad)" opacity="0.88" />
            <ellipse cx="-6" cy="-2" rx="3.2" ry="5.8" transform="rotate(288 -6 -2)" fill="url(#petalBlushGrad)" opacity="0.88" />
            <circle cx="0" cy="0" r="1.8" fill="#879B72" />
            <circle cx="0" cy="0" r="0.8" fill="#FFF9F5" />
          </g>

          {/* Blossom 3 - upper branch node */}
          <g transform="translate(520, 210) scale(0.78)">
            <ellipse cx="0" cy="-6" rx="3" ry="5.2" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="5.5" cy="-2" rx="3" ry="5.2" transform="rotate(72 5.5 -2)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="3.5" cy="4.5" rx="3" ry="5.2" transform="rotate(144 3.5 4.5)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="-3.5" cy="4.5" rx="3" ry="5.2" transform="rotate(216 -3.5 4.5)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="-5.5" cy="-2" rx="3" ry="5.2" transform="rotate(288 -5.5 -2)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <circle cx="0" cy="0" r="1.6" fill="#B86B7A" />
          </g>

          {/* Blossom 4 - transition endpoint node */}
          <g transform="translate(670, 300) scale(0.7)">
            <ellipse cx="0" cy="-5" rx="2.7" ry="4.5" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="4.5" cy="-1.5" rx="2.7" ry="4.5" transform="rotate(72 4.5 -1.5)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="2.8" cy="3.8" rx="2.7" ry="4.5" transform="rotate(144 2.8 3.8)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="-2.8" cy="3.8" rx="2.7" ry="4.5" transform="rotate(216 -2.8 3.8)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <ellipse cx="-4.5" cy="-1.5" rx="2.7" ry="4.5" transform="rotate(288 -4.5 -1.5)" fill="url(#petalBlushGrad)" opacity="0.85" />
            <circle cx="0" cy="0" r="1.4" fill="#465640" />
          </g>

          {/* Blossom 5 - upper right transition point */}
          <g transform="translate(730, 200) scale(0.65)">
            <ellipse cx="0" cy="-5" rx="2.5" ry="4.2" fill="url(#petalBlushGrad)" opacity="0.8" />
            <ellipse cx="4" cy="-1" rx="2.5" ry="4.2" transform="rotate(72 4 -1)" fill="url(#petalBlushGrad)" opacity="0.8" />
            <ellipse cx="2.5" cy="3.5" rx="2.5" ry="4.2" transform="rotate(144 2.5 3.5)" fill="url(#petalBlushGrad)" opacity="0.8" />
            <ellipse cx="-2.5" cy="3.5" rx="2.5" ry="4.2" transform="rotate(216 -2.5 3.5)" fill="url(#petalBlushGrad)" opacity="0.8" />
            <ellipse cx="-4" cy="-1" rx="2.5" ry="4.2" transform="rotate(288 -4 -1)" fill="url(#petalBlushGrad)" opacity="0.8" />
            <circle cx="0" cy="0" r="1.3" fill="#B86B7A" />
          </g>

          {/* Dispersed Floating Sakura Petals */}
          <path
            d="M310 215 C312 210, 320 211, 322 217 C324 223, 314 226, 310 215 Z"
            fill="url(#petalBlushGrad)"
            opacity="0.65"
            transform="rotate(22 316 218)"
          />
          <path
            d="M440 335 C442 330, 450 332, 452 337 C454 342, 444 346, 440 335 Z"
            fill="url(#petalBlushGrad)"
            opacity="0.6"
            transform="rotate(-18 446 338)"
          />
          <path
            d="M620 240 C622 236, 628 237, 630 242 C632 246, 623 250, 620 240 Z"
            fill="url(#petalBlushGrad)"
            opacity="0.65"
            transform="rotate(35 625 243)"
          />
          <path
            d="M790 270 C792 265, 800 266, 802 272 C804 278, 794 281, 790 270 Z"
            fill="url(#petalBlushGrad)"
            opacity="0.55"
            transform="rotate(-30 796 273)"
          />
        </g>
      </svg>
    </div>
  );
};
