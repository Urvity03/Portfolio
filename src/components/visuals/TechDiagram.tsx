import React from 'react';
import { motion } from 'framer-motion';

interface TechDiagramProps {
  type: 'pipeline' | 'multimodal' | 'retrieval';
  className?: string;
}

export const TechDiagram: React.FC<TechDiagramProps> = ({ type, className = '' }) => {
  if (type === 'pipeline') {
    return (
      <div className={`p-6 bg-canvas-card border border-ink-border rounded-xl shadow-sm ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-ink-divider mb-5">
          <span className="font-mono text-xs tracking-wider text-matcha-deep uppercase font-semibold">
            [ ARCHITECTURE 01 ] · PIPELINE WORKFLOW GRAPH
          </span>
          <span className="font-mono text-[10px] text-ink-faint">PYTORCH / FASTAPI</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-2 text-center text-xs">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-canvas border border-ink-border rounded-lg transition-colors hover:border-sakura"
          >
            <div className="font-mono text-[10px] text-sakura-deep mb-1 font-semibold">01 / INPUT</div>
            <div className="font-medium text-ink">Data Schema Ingestion</div>
            <div className="font-mono text-[10px] text-ink-muted mt-1.5">CSV / Parquet / SQL</div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-3 bg-canvas border border-ink-border rounded-lg transition-colors hover:border-matcha"
          >
            <div className="font-mono text-[10px] text-matcha-deep mb-1 font-semibold">02 / PARSER</div>
            <div className="font-medium text-ink">Feature Heuristics</div>
            <div className="font-mono text-[10px] text-ink-muted mt-1.5">Nulls & Imbalances</div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-3 bg-canvas border border-ink-border rounded-lg transition-colors hover:border-sakura"
          >
            <div className="font-mono text-[10px] text-sakura-deep mb-1 font-semibold">03 / ENGINE</div>
            <div className="font-medium text-ink">Copilot Generator</div>
            <div className="font-mono text-[10px] text-ink-muted mt-1.5">Scaffold & Preprocessing</div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="p-3 bg-canvas border border-matcha/40 bg-matcha-light/25 rounded-lg"
          >
            <div className="font-mono text-[10px] text-matcha-deep mb-1 font-semibold">04 / OUTPUT</div>
            <div className="font-medium text-matcha-dark font-semibold">Modular Training Script</div>
            <div className="font-mono text-[10px] text-matcha-deep mt-1.5">Reproducible Code</div>
          </motion.div>
        </div>

        <div className="mt-5 pt-3 border-t border-ink-divider flex items-center justify-between text-[11px] text-ink-muted">
          <span className="font-mono text-ink-faint">Pipeline Engine: AST Schema Validator</span>
          <span className="text-sakura-deep font-mono">Status: Active Development</span>
        </div>
      </div>
    );
  }

  if (type === 'multimodal') {
    return (
      <div className={`p-6 bg-canvas-card border border-ink-border rounded-xl shadow-sm ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-ink-divider mb-5">
          <span className="font-mono text-xs tracking-wider text-sakura-deep uppercase font-semibold">
            [ ARCHITECTURE 02 ] · MULTIMODAL FEATURE FUSION
          </span>
          <span className="font-mono text-[10px] text-ink-faint">TORCHVISION / EMBEDDINGS</span>
        </div>

        <div className="space-y-3 py-1">
          {/* Dual Ingestion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-3.5 bg-canvas border border-sakura/40 rounded-lg"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-sakura-deep mb-1 font-semibold">
                <span>STREAM A (VISUAL)</span>
                <span>d_v = 512</span>
              </div>
              <div className="text-xs font-medium text-ink">Product Image Stream</div>
              <div className="font-mono text-[10px] text-ink-muted mt-1">CNN / Feature Extractor</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-3.5 bg-canvas border border-matcha/40 rounded-lg"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-matcha-deep mb-1 font-semibold">
                <span>STREAM B (TABULAR)</span>
                <span>d_t = 128</span>
              </div>
              <div className="text-xs font-medium text-ink">Structured Metadata</div>
              <div className="font-mono text-[10px] text-ink-muted mt-1">Dense Embeddings + Norm</div>
            </motion.div>
          </div>

          {/* Fusion Bridge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-3 bg-canvas-subtle border border-ink-divider rounded-lg text-center"
          >
            <div className="font-mono text-[10px] text-ink-faint uppercase mb-1">
              CONCATENATION & CROSS-REPRESENTATION
            </div>
            <div className="text-xs font-medium text-ink">
              Joint Latent Vector: <span className="font-mono text-matcha-deep font-semibold">Z = [V || T] ∈ ℝ⁶⁴⁰</span>
            </div>
          </motion.div>

          {/* Regressor Head */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="p-3 bg-sakura-light/30 border border-sakura/40 rounded-lg flex items-center justify-between"
          >
            <div>
              <div className="font-mono text-[10px] text-sakura-deep uppercase font-semibold">OUTPUT PREDICTION HEAD</div>
              <div className="text-xs font-medium text-ink">Continuous Valuation Regressor (MSE Loss)</div>
            </div>
            <div className="font-mono text-xs text-sakura-deep font-semibold px-2.5 py-1 bg-canvas rounded border border-sakura/30">
              ŷ = f(Z)
            </div>
          </motion.div>
        </div>

        <div className="mt-5 pt-3 border-t border-ink-divider flex items-center justify-between text-[11px] text-ink-muted">
          <span className="font-mono text-ink-faint">Modalities: Dual-Stream Feedforward</span>
          <span className="text-matcha-deep font-mono">Status: Research Prototype</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-canvas-card border border-ink-border rounded-xl shadow-sm ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-ink-divider mb-5">
        <span className="font-mono text-xs tracking-wider text-lavender-deep uppercase font-semibold">
          [ ARCHITECTURE 03 ] · CONTEXTUAL SEMANTIC RETRIEVAL
        </span>
        <span className="font-mono text-[10px] text-ink-faint">TRANSFORMERS / VECTOR SIMILARITY</span>
      </div>

      <div className="space-y-3 py-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-canvas border border-ink-border rounded-lg"
          >
            <div className="font-mono text-[10px] text-ink-faint mb-1">INPUT A</div>
            <div className="font-medium text-ink">Candidate Resume Text</div>
            <div className="font-mono text-[10px] text-ink-muted mt-1">Tokenization & Sectioning</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-3 bg-canvas border border-ink-border rounded-lg"
          >
            <div className="font-mono text-[10px] text-ink-faint mb-1">INPUT B</div>
            <div className="font-medium text-ink">Job Description Benchmark</div>
            <div className="font-mono text-[10px] text-ink-muted mt-1">Skill & Requirement Spec</div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-3 bg-canvas-subtle border border-lavender/40 rounded-lg"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[10px] text-lavender-deep font-semibold">EMBEDDING SPACE</span>
            <span className="font-mono text-[10px] text-ink-muted">Cosine Metric</span>
          </div>
          <div className="text-xs font-medium text-ink">
            Semantic Alignment: <span className="font-mono text-lavender-deep font-semibold">cos(u, v) = (u · v) / (||u|| ||v||)</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="p-3 bg-matcha-light/25 border border-matcha/40 rounded-lg flex items-center justify-between text-xs"
        >
          <div>
            <div className="font-mono text-[10px] text-matcha-deep uppercase font-semibold">ANALYTIC BREAKDOWN</div>
            <div className="font-medium text-ink">Competency Alignment & Entity Match Matrix</div>
          </div>
          <span className="font-mono text-[10px] text-matcha-deep px-2 py-0.5 bg-canvas rounded border border-matcha/30">
            Explainable Output
          </span>
        </motion.div>
      </div>

      <div className="mt-5 pt-3 border-t border-ink-divider flex items-center justify-between text-[11px] text-ink-muted">
        <span className="font-mono text-ink-faint">Architecture: Dense Contextual Encoding</span>
        <span className="text-sakura-deep font-mono">Status: Available</span>
      </div>
    </div>
  );
};
