import React, { useEffect } from 'react';
import { X, GraduationCap, Code, Cpu, Award, Briefcase, Printer, FileDown } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-ink/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-canvas border border-ink-border rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-canvas/95 backdrop-blur-sm border-b border-ink-divider">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sakura-deep tracking-widest font-semibold">
              CURRICULUM VITAE
            </span>
            <span className="text-ink-divider">|</span>
            <span className="font-mono text-xs text-ink-muted">URVI TYAGI</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink text-canvas text-xs font-mono hover:bg-sakura-deep transition-colors shadow-sm"
              title="Download or Print PDF"
            >
              <FileDown size={13} />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-border text-xs font-mono text-ink hover:border-sakura transition-colors"
            >
              <Printer size={13} />
              <span>PRINT</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-ink-muted hover:text-ink hover:bg-canvas-subtle transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 sm:p-12 space-y-8 bg-canvas text-ink print:p-0">
          {/* Header */}
          <div className="border-b border-ink-divider pb-6">
            <h1 id="modal-resume-title" className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              URVI TYAGI
            </h1>
            <p className="font-mono text-xs uppercase tracking-wider text-sakura-deep mt-1 font-semibold">
              Computer Science Undergraduate · Aspiring AI/ML Engineer
            </p>
            <div className="flex flex-wrap gap-4 mt-3 font-mono text-xs text-ink-muted">
              <a href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink underline underline-offset-2">
                github.com/Urvity03
              </a>
              <span>·</span>
              <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink underline underline-offset-2">
                linkedin.com/in/urvi-tyagi026
              </a>
              <span>·</span>
              <span>Focus: Machine Learning, Multimodal Neural Networks & Resilient Software</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="flex items-center gap-2 font-mono text-xs tracking-mega-wide uppercase text-matcha-deep font-semibold mb-3">
              <GraduationCap size={15} /> 01 / EDUCATION
            </h2>
            <div className="p-4 bg-canvas-card border border-ink-border rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-medium text-ink">Bachelor of Technology in Computer Science & Engineering</span>
                <span className="font-mono text-xs text-ink-muted">Ongoing</span>
              </div>
              <div className="font-mono text-xs text-sakura-deep mt-0.5 font-medium">Specialization: Artificial Intelligence & Machine Learning</div>
              <p className="text-xs text-ink-muted mt-2 leading-relaxed font-light">
                Core coursework: Data Structures & Algorithms, Deep Learning, Probability & Statistics, Multimodal Machine Learning, Computer Vision, Operating Systems, Database Management Systems.
              </p>
            </div>
          </div>

          {/* Industry & Applied Experience */}
          <div>
            <h2 className="flex items-center gap-2 font-mono text-xs tracking-mega-wide uppercase text-matcha-deep font-semibold mb-3">
              <Briefcase size={15} /> 02 / INDUSTRY & APPLIED EXPERIENCE
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-4 bg-canvas-card border border-ink-border rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Engineering Internship / Experience</span>
                  <span className="font-mono text-[11px] text-matcha-deep">Tata Consultancy Services / Tata</span>
                </div>
                <p className="text-ink-muted mt-1 leading-relaxed font-light">
                  Hands-on industry exposure to enterprise software standards, data validation pipelines, agile cycles, and deliverable tracking across technical delivery frameworks.
                </p>
              </div>

              <div className="p-4 bg-canvas-card border border-ink-border rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Technical Internship / Experience</span>
                  <span className="font-mono text-[11px] text-sakura-deep">Boschwell</span>
                </div>
                <p className="text-ink-muted mt-1 leading-relaxed font-light">
                  Applied technical problem solving, software quality practices, codebase hygiene, and collaborative version control workflows.
                </p>
              </div>

              <div className="p-4 bg-canvas-card border border-ink-border rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Applied AI & Data Analytics Experience</span>
                  <span className="font-mono text-[11px] text-lavender-deep">IBM Project Simulation</span>
                </div>
                <p className="text-ink-muted mt-1 leading-relaxed font-light">
                  Predictive analytics modeling, dataset preprocessing, model evaluation benchmarks, and translating complex domain requirements into machine learning pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="flex items-center gap-2 font-mono text-xs tracking-mega-wide uppercase text-matcha-deep font-semibold mb-3">
              <Code size={15} /> 03 / TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-canvas-card border border-ink-border rounded-lg">
                <span className="font-mono text-sakura-deep block mb-1 font-medium">Programming Languages:</span>
                <span className="text-ink-muted">Python, C++, SQL, TypeScript, Bash / Shell</span>
              </div>
              <div className="p-3.5 bg-canvas-card border border-ink-border rounded-lg">
                <span className="font-mono text-matcha-deep block mb-1 font-medium">AI & ML Frameworks:</span>
                <span className="text-ink-muted">PyTorch, Torchvision, Scikit-Learn, Transformers, NumPy, Pandas</span>
              </div>
              <div className="p-3.5 bg-canvas-card border border-ink-border rounded-lg">
                <span className="font-mono text-lavender-deep block mb-1 font-medium">Engineering & Backend:</span>
                <span className="text-ink-muted">FastAPI, Streamlit, Git/GitHub, Docker, Linux / Unix environments</span>
              </div>
              <div className="p-3.5 bg-canvas-card border border-ink-border rounded-lg">
                <span className="font-mono text-ink-faint block mb-1 font-medium">Core Practices:</span>
                <span className="text-ink-muted">Defensive Error Handling, AST Schema Validation, Multimodal Fusion, Semantic Search</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="flex items-center gap-2 font-mono text-xs tracking-mega-wide uppercase text-matcha-deep font-semibold mb-3">
              <Cpu size={15} /> 04 / SELECTED PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-4 bg-canvas-card border border-ink-border rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">ML Copilot</span>
                  <span className="font-mono text-[11px] text-sakura-deep">Python · PyTorch · FastAPI</span>
                </div>
                <p className="text-ink-muted mt-1 leading-relaxed font-light">
                  Interactive machine learning workflow assistant that analyzes schema data, recommends model architectures, and generates reproducible training scaffolds.
                </p>
              </div>

              <div className="p-4 bg-canvas-card border border-ink-border rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Multimodal Product Price Predictor</span>
                  <span className="font-mono text-[11px] text-matcha-deep">PyTorch · Torchvision · Pandas</span>
                </div>
                <p className="text-ink-muted mt-1 leading-relaxed font-light">
                  Dual-stream deep learning network fusing visual representations with tabular product attributes for automated valuation estimation.
                </p>
              </div>

              <div className="p-4 bg-canvas-card border border-ink-border rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">TalentLens AI</span>
                  <span className="font-mono text-[11px] text-lavender-deep">NLP · Transformers · Vector Embeddings</span>
                </div>
                <p className="text-ink-muted mt-1 leading-relaxed font-light">
                  Contextual talent intelligence system utilizing transformer embeddings for semantic resume-to-role matching and structured competency breakdown reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Open Source Contributions */}
          <div>
            <h2 className="flex items-center gap-2 font-mono text-xs tracking-mega-wide uppercase text-matcha-deep font-semibold mb-3">
              <Award size={15} /> 05 / OPEN SOURCE CONTRIBUTIONS
            </h2>
            <div className="p-4 bg-matcha-light/25 border border-matcha/40 rounded-xl text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink">TermStory (bitflicker64/Termstory)</span>
                <span className="font-mono text-matcha-deep font-medium">Contributor Fork: Urvity03/Termstory</span>
              </div>
              <p className="text-ink-muted mt-1 leading-relaxed font-light">
                Contributed reliability and exception resilience enhancements including configuration parsing error handling, UnicodeDecodeError guards across terminal log streams, ZSH history file safety, and installer diagnostics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
