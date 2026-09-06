'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Copy,
  FileText,
  FolderGit2,
  GitBranch,
  GitFork,
  GitCommit,
  Mail,
  Menu,
  Play,
  Radio,
  ShieldCheck,
  Star,
  Users,
  X
} from 'lucide-react';

// --- INLINE BRAND ICONS ---
const GithubIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
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

const LinkedinIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
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

// --- AUTHORITATIVE RESUME & PORTFOLIO DATA ---
const SITE_CONFIG = {
  name: 'Urvi Tyagi',
  title: 'Urvi Tyagi — AI & ML | Aspiring ML Engineer',
  role: 'AI & ML | Aspiring ML Engineer | NLP • GenAI | Python • TensorFlow • Streamlit',
  heroStatement: '“I build intelligent things with curiosity, code & creativity.”',
  summaryShort:
    'Final-year B.Tech student specializing in Artificial Intelligence & Machine Learning with hands-on experience in machine learning, NLP, Generative AI, data analytics, and Python-based AI applications. Experienced in developing ML pipelines, AI-powered applications, and data-driven solutions using Python, TensorFlow, Scikit-learn, Streamlit, Docker, and Supabase. Interested in ML Engineering, AI Engineering, NLP, and building practical, scalable AI solutions.',
  summaryDetailed:
    'I am a B.Tech undergraduate specializing in Artificial Intelligence and Machine Learning, with a growing interest in Machine Learning, Data Science, and NLP. I enjoy learning how AI systems work and applying concepts through practical projects and hands-on experimentation. Currently, I am strengthening my foundations in Artificial Intelligence and Machine Learning through structured learning and practical assignments. My areas of interest include Machine Learning, Deep Learning, NLP, Data Science, and Python-based AI applications. I am continuously working on improving my technical skills through projects, internships, and practical learning experiences.',
  statusText: 'Available for AI/ML Roles & Internships',
  resumePdf: '/urvi_Resume.pdf',
  links: {
    github: 'https://github.com/Urvity03',
    linkedin: 'https://www.linkedin.com/in/urvi-tyagi026/',
    termstoryFork: 'https://github.com/Urvity03/Termstory',
    termstoryUpstream: 'https://github.com/bitflicker64/Termstory',
    termstoryCommits: 'https://github.com/bitflicker64/Termstory/commits?author=Urvity03',
    email: 'tyagiurvi26@gmail.com',
    resumePdf: '/urvi_Resume.pdf',
  }
};

// --- PROJECTS (EXACT ORDER: 1. ML COPILOT, 2. MULTIMODAL, 3. TALENTLENS) ---
const PROJECTS = [
  {
    id: 'ml-copilot',
    number: '01',
    title: 'ML Copilot Platform',
    tagline: 'Modular platform engineered to simplify and organize the end-to-end machine learning lifecycle.',
    description:
      'A modular platform engineered to simplify and organize the end-to-end machine learning lifecycle through dataset management, experiment tracking, and workflow automation into a cohesive developer environment.',
    bullets: [
      'Designed reusable backend modules and AI-assisted utilities for project organization, feature engineering, model evaluation, and experiment management.',
      'Integrated Docker, REST APIs, and Supabase for authentication, backend services, and portable deployments.',
      'Followed modular software architecture and Git-based development practices to improve maintainability and scalability.'
    ],
    technologies: ['Python', 'Streamlit', 'Docker', 'Supabase', 'Scikit-learn'],
    liveDemoUrl: 'https://mlcopilot-two.vercel.app',
    githubUrl: 'https://github.com/Urvity03/MLCopilot-Platform',
    category: 'ML Engineering & Lifecycle Platform',
  },
  {
    id: 'multimodal-price-prediction',
    number: '02',
    title: 'Multimodal Product Price Predictor',
    tagline: 'End-to-end multimodal machine learning pipeline combining textual and visual product information for price prediction.',
    description:
      'An end-to-end multimodal deep learning pipeline combining textual and visual product information for price prediction. Fuses unstructured product descriptions with dense visual embeddings to deliver accurate, automated product valuation.',
    bullets: [
      'Built an end-to-end multimodal machine learning pipeline combining textual and visual product information for price prediction.',
      'Implemented TF-IDF feature extraction, EfficientNet image embeddings, feature engineering, and XGBoost regression.',
      'Evaluated model performance using MAE, RMSE, and R² while comparing multiple feature extraction and regression approaches.'
    ],
    technologies: ['Python', 'TensorFlow', 'XGBoost', 'EfficientNet', 'TF-IDF'],
    liveDemoUrl: 'https://multimodal-price-predictor.streamlit.app/',
    githubUrl: 'https://github.com/Urvity03/Multimodal-Product-Price-Predictor',
    category: 'Multimodal Deep Learning & Computer Vision',
  },
  {
    id: 'talentlens-ai',
    number: '03',
    title: 'TalentLens AI',
    tagline: 'Intelligent resume screening platform that ranks candidates against job descriptions using NLP techniques.',
    description:
      'An intelligent resume screening platform that ranks candidates against job descriptions using NLP techniques, semantic embeddings, and cosine similarity beyond superficial keyword matching.',
    bullets: [
      'Developed an intelligent resume screening platform that ranks candidates against job descriptions using TF-IDF, Sentence Transformers, and cosine similarity.',
      'Implemented semantic search, recruiter dashboards, and skill-gap analysis to support candidate evaluation workflows.',
      'Built an interactive application for resume parsing, candidate ranking, and personalized learning recommendations.'
    ],
    technologies: ['Python', 'NLP', 'Streamlit', 'Sentence Transformers', 'TF-IDF'],
    liveDemoUrl: 'https://talentlens-ai00.streamlit.app/',
    githubUrl: 'https://github.com/Urvity03/TalentLens-AI',
    category: 'NLP & Semantic Intelligence',
  }
];

const OPEN_SOURCE_DATA = {
  title: 'Termstory',
  upstreamName: 'bitflicker64/Termstory',
  upstreamUrl: 'https://github.com/bitflicker64/Termstory',
  forkUrl: 'https://github.com/Urvity03/Termstory',
  commitsUrl: 'https://github.com/bitflicker64/Termstory/commits?author=Urvity03',
  role: 'Open Source Contributor',
  summary:
    'Contributed reliability and exception-handling improvements to Termstory, an open-source developer-memory tool designed to preserve, search, and recall terminal session context.',
  details: [
    'Hardened configuration error handling routines against malformed keys and missing default entries.',
    'Identified and resolved UnicodeDecodeError exceptions arising from terminal logs with multi-byte characters.',
    'Implemented date timestamp error guards to prevent silent state corruption during session indexing.',
    'Enhanced install-log reliability and zsh session capture across varied shell environments.',
    'Collaborated through maintainer code reviews, addressing 20+ review comments across multiple pull requests.'
  ]
};

const EXPERIENCE_ITEMS = [
  {
    id: 'inamigos',
    company: 'InAmigos Foundation (IAF)',
    role: 'Machine Learning Intern',
    period: 'AUG 2026',
    location: 'Remote',
    bullets: [
      'Engaged with foundational and advanced machine learning concepts, covering Supervised Learning, Unsupervised Learning, Reinforcement Learning, and Deep Learning architectures.',
      'Authored structured documentation, learning modules, and technical guides covering data preprocessing, model selection, evaluation metrics, and practical machine learning workflows.',
      'Contributed to knowledge-sharing initiatives to make complex AI/ML concepts accessible to peers and community members.'
    ]
  },
  {
    id: 'ibm-skillsbuild',
    company: 'IBM SkillsBuild',
    role: 'Artificial Intelligence Intern',
    period: 'JUN — AUG 2026',
    location: 'Virtual Internship (Edunet Foundation)',
    bullets: [
      'Participated in an intensive AI/ML internship focused on foundational and applied machine learning techniques.',
      'Developed practical understanding of AI workflows, data analysis pipelines, and machine learning model development through structured learning assignments.',
      'Explored practical applications of Generative AI, prompt engineering, and intelligent system design.'
    ]
  },
  {
    id: 'tata-iq',
    company: 'Tata iQ',
    role: 'GenAI & Data Analytics Virtual Internship',
    period: 'AUG 2025',
    location: '6-Hour Virtual Internship',
    bullets: [
      'Completed a 6-hour virtual internship focused on GenAI and Data Analytics.',
      'Executed enterprise exploratory data analysis using Generative AI tools and statistical methods to identify behavioral customer patterns and delinquency risks.',
      'Formulated strategic predictive approaches for risk segmentation and collections prioritization.',
      'Applied principles of Responsible AI including fairness, transparency, and Explainable AI (XAI) in solution design.',
      'Gained practical exposure to AI-driven business analytics and data-informed decision making.'
    ]
  }
];

const JOURNEY_STEPS = [
  {
    year: '2023–2027',
    title: 'B.Tech — Artificial Intelligence & Machine Learning',
    organization: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    roleType: 'Education',
    description:
      'Rigorous academic training in core computer science, mathematics, probability theory, deep learning, and advanced AI methodologies. Currently in final-year studies (Expected 2027 · CURRENT / IN PROGRESS).',
    coursework: 'Data Structures & Algorithms · Deep Learning · Machine Learning · Probability & Statistics · Computer Vision · Natural Language Processing · Operating Systems · Database Management Systems'
  },
  {
    year: '2025',
    title: 'GenAI & Data Analytics Virtual Internship',
    organization: 'Tata iQ',
    roleType: '6-Hour Virtual Internship',
    description:
      'Completed a 6-hour virtual internship focused on GenAI and Data Analytics: exploratory data analysis using Generative AI tools to identify customer delinquency patterns, predictive risk segmentation, collections prioritization, and Explainable AI (XAI) principles in enterprise business analytics.'
  },
  {
    year: '2026',
    title: 'Artificial Intelligence Intern',
    organization: 'IBM SkillsBuild',
    roleType: 'Virtual Internship',
    description:
      'Applied AI/ML workflows, data pipelines, model evaluation metrics, and Generative AI problem sets delivered in partnership with Edunet Foundation.'
  },
  {
    year: '2026',
    title: 'Machine Learning Intern',
    organization: 'InAmigos Foundation',
    roleType: 'Internship',
    description:
      'Exploration of deep learning architectures, supervised and unsupervised learning, and reinforcement learning; authored structured documentation on practical AI pipelines.'
  },
  {
    year: '2026',
    title: 'Open Source Contributor',
    organization: 'Termstory (bitflicker64/Termstory)',
    roleType: 'Open Source',
    description:
      'Resolved 20+ review comments across multiple pull requests, hardening configuration parsing, UnicodeDecodeError handling, and shell history reliability.'
  }
];

const SKILL_CATEGORIES = [
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

const CERTIFICATIONS = [
  { id: '01', title: 'IBM Machine Learning with Python', issuer: 'IBM / Cognitive Class' },
  { id: '02', title: 'Google Cloud Gemini for Data Scientists and Analysts', issuer: 'Google Cloud' },
  { id: '03', title: 'Google DeepMind: Build Your Own Small Language Model', issuer: 'Google DeepMind' },
  { id: '04', title: 'Google Cloud Prompt Design in Vertex AI', issuer: 'Google Cloud' },
  { id: '05', title: 'AWS Introduction to Generative AI', issuer: 'Amazon Web Services (AWS)' },
  { id: '06', title: 'Practicing Test Driven Development with Python', issuer: 'Professional Training' },
  { id: '07', title: 'The Legend of Python', issuer: 'Specialized Python Track' }
];

// --- PROJECT VISUAL BOX CONFIG ---
const PROJECT_VISUAL_CONFIG = [
  {
    num: '01',
    bg: 'from-[#FDF3F6] via-[#FAF0F3] to-[#F5DFE7]',
    border: 'border-[#F3C7D1]/70',
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
    bg: 'from-[#F4F8F2] via-[#EEF5EB] to-[#E3EFE0]',
    border: 'border-[#DCE5D2]/80',
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
    bg: 'from-[#F6F3FA] via-[#F1ECF7] to-[#E8E1F3]',
    border: 'border-[#EEE8F2]',
    numberColor: 'text-[#8F819D]',
    dotColor: 'bg-[#8F819D]',
    accentColor: '#C9B8D8',
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
const CONTRIBUTIONS_TIMELINE = [
  {
    title: 'Configuration error handling',
    desc: 'Improved robustness of configuration parsing with clearer error reporting.'
  },
  {
    title: 'UnicodeDecodeError handling',
    desc: 'Added graceful handling for encoding issues when reading shell history files.'
  },
  {
    title: 'Configuration parsing edge cases',
    desc: 'Hardened the configuration loader against malformed and missing entries.'
  },
  {
    title: 'zsh history file read error handling',
    desc: 'Surface clear, actionable errors when the zsh history file cannot be read.'
  },
  {
    title: 'Date parsing error handling',
    desc: 'Improved resilience of date parsing used in the forensic timestamp engine.'
  },
  {
    title: 'Installation log error handling',
    desc: 'Added structured error handling to the installation logging flow.'
  }
];

const FEATURED_REPOSITORIES = [
  {
    name: 'MLCopilot-Platform',
    url: 'https://github.com/Urvity03/MLCopilot-Platform',
    desc: 'AI workspace copilot for ML projects with Hybrid RAG, semantic search, Gemini, and project-aware chat.',
    lang: 'Python',
    stars: 3,
    forks: 1
  },
  {
    name: 'Multimodal-Product-Price-Predictor',
    url: 'https://github.com/Urvity03/Multimodal-Product-Price-Predictor',
    desc: 'AI-powered multimodal product price estimation using NLP, Computer Vision, and XGBoost.',
    lang: 'Jupyter Notebook',
    stars: 1,
    forks: 0
  },
  {
    name: 'TalentLens-AI',
    url: 'https://github.com/Urvity03/TalentLens-AI',
    desc: 'AI-powered resume intelligence platform using NLP, semantic similarity, and intelligent scoring.',
    lang: 'Python',
    stars: 1,
    forks: 0
  }
];

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeYear, setActiveYear] = useState<'2026' | '2025'>('2026');

  const [profile, setProfile] = useState({
    name: 'Urvi Tyagi',
    login: 'Urvity03',
    bio: 'AI & ML Undergraduate | Building Machine Learning & NLP solutions | Python • TensorFlow • PyTorch | Open Source Contributor',
    public_repos: 15,
    followers: 5,
    following: 2,
    avatar_url: 'https://github.com/Urvity03.png'
  });

  const [contributionsData, setContributionsData] = useState<{
    total: Record<string, number>;
    contributions: { date: string; count: number; level: number }[];
  }>({
    total: { '2026': 346, '2025': 33 },
    contributions: []
  });

  const [hoveredCell, setHoveredCell] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Urvity03')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch profile');
        return res.json();
      })
      .then((data) => {
        if (data && data.login) {
          setProfile({
            name: data.name || 'Urvi Tyagi',
            login: data.login,
            bio: data.bio || 'AI & ML Undergraduate | Building Machine Learning & NLP solutions | Python • TensorFlow • PyTorch | Open Source Contributor',
            public_repos: typeof data.public_repos === 'number' ? data.public_repos : 15,
            followers: typeof data.followers === 'number' ? data.followers : 5,
            following: typeof data.following === 'number' ? data.following : 2,
            avatar_url: data.avatar_url || 'https://github.com/Urvity03.png'
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/Urvity03?y=2025,2026')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions');
        return res.json();
      })
      .then((data) => {
        if (data && data.contributions) {
          setContributionsData({
            total: data.total || { '2026': 346, '2025': 33 },
            contributions: data.contributions
          });
        }
      })
      .catch(() => {});
  }, []);

  const activeYearContributions = React.useMemo(() => {
    const list = contributionsData.contributions.filter((item) =>
      item.date.startsWith(activeYear)
    );
    if (list.length > 0) return list;

    const fallbackDays: { date: string; count: number; level: number }[] = [];
    const totalDays = activeYear === '2026' ? 245 : 365;
    for (let i = 0; i < 52 * 7; i++) {
      let level = 0;
      let count = 0;
      if (i < totalDays) {
        if (i % 11 === 0 || i % 17 === 0) {
          level = (i % 4) + 1;
          count = level * 2;
        }
      }
      fallbackDays.push({
        date: `${activeYear}-01-01`,
        count,
        level
      });
    }
    return fallbackDays;
  }, [contributionsData, activeYear]);

  const totalContributionsCount = contributionsData.total[activeYear] ?? (activeYear === '2026' ? 346 : 33);

  const getContributionCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#DCE5D2]';
      case 2:
        return 'bg-[#AFC29E]';
      case 3:
        return 'bg-[#879B72]';
      case 4:
        return 'bg-[#465640]';
      default:
        return 'bg-[#EBE2DA]/50';
    }
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(SITE_CONFIG.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // EXACT UNDERSTATED NAVIGATION
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'OPEN SOURCE', href: '#open-source' },
    { label: 'GITHUB', href: '#github' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen bg-[#FFF9F5] text-[#292725] font-sans selection:bg-[#E8A7B5]/25 selection:text-[#B86B7A]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroBubble1 {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(6px, -10px, 0); }
        }
        @keyframes heroBubble2 {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-7px, 12px, 0); }
        }
        @keyframes heroPetal1 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.50; }
          65% { transform: translate3d(15px, 50px, 0) rotate(25deg); opacity: 0.50; }
          84% { transform: translate3d(17px, 55px, 0) rotate(28deg); opacity: 0; }
          85% { transform: translate3d(0, -6px, 0) rotate(-2deg); opacity: 0; }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.50; }
        }
        @keyframes heroPetal2 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.45; }
          65% { transform: translate3d(-12px, 65px, 0) rotate(-35deg); opacity: 0.45; }
          84% { transform: translate3d(-14px, 70px, 0) rotate(-38deg); opacity: 0; }
          85% { transform: translate3d(0, -8px, 0) rotate(3deg); opacity: 0; }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.45; }
        }
        @keyframes heroPetal3 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.46; }
          65% { transform: translate3d(10px, 45px, 0) rotate(30deg); opacity: 0.46; }
          84% { transform: translate3d(12px, 49px, 0) rotate(33deg); opacity: 0; }
          85% { transform: translate3d(0, -6px, 0) rotate(-3deg); opacity: 0; }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.46; }
        }
        @keyframes heroAtmosphereBreath {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(12px, -8px, 0) scale(1.03); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      ` }} />

      {/* Global Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFF9F5]/92 backdrop-blur-md border-b border-[#EBE2DA]/40 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          <a href="#home" className="flex flex-col group focus:outline-none shrink-0">
            <span className="font-serif text-lg sm:text-xl font-light tracking-widest text-[#292725] group-hover:text-[#B86B7A] transition-colors duration-300">
              URVI TYAGI
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-mono tracking-widest text-[#615A54]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#292725] transition-colors duration-250 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#B86B7A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Resume Tab */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={SITE_CONFIG.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#292725] hover:text-[#B86B7A] transition-colors duration-300"
            >
              <span>RESUME</span>
              <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex sm:hidden items-center gap-3">
            <a
              href={SITE_CONFIG.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-wider text-[#292725]"
            >
              RESUME →
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-[#292725]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-[#FFF9F5]/98 backdrop-blur-lg p-8 flex flex-col justify-between border-t border-[#EBE2DA]">
          <nav className="flex flex-col space-y-5 text-sm font-mono tracking-widest text-[#292725]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 border-b border-[#EBE2DA]/40 hover:text-[#B86B7A] transition-colors duration-250"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="space-y-4 pt-6 border-t border-[#EBE2DA] text-xs font-mono text-[#465640]">
            <div>Sakura × AI · Urvi Tyagi 2026</div>
          </div>
        </div>
      )}

      {/* Main Narrative Flow */}
      <main className="relative z-10 pt-20">
        {/* HERO SECTION — EXACTLY LIKE SCREENSHOT 1 */}
        <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 sm:px-12 max-w-6xl mx-auto w-full overflow-visible">
          {/* Editorial Section Number Marker: 01 */}
          <div className="hidden lg:flex absolute -left-8 sm:-left-14 top-36 flex-col items-center select-none" aria-hidden="true">
            <div className="w-6 h-6 rounded-full border border-[#EBE2DA] bg-[#FFF9F5] flex items-center justify-center text-[10px] font-mono text-[#B86B7A] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              01
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-[#EBE2DA] to-transparent mt-2" />
          </div>

          {/* Top-Right Stacked Tagline */}
          <div className="hidden md:block absolute right-6 sm:right-12 top-28 sm:top-36 select-none pointer-events-none z-10 text-right">
            <div className="font-serif italic text-xs tracking-widest text-[#B86B7A] leading-relaxed opacity-85">
              TURNING<br />
              CURIOSITY<br />
              INTO<br />
              IMPACT
            </div>
          </div>

          {/* 1. Delicate Sakura Branch Accent (Top-Left of Hero) */}
          <div 
            className="absolute left-0 -top-4 sm:top-6 w-44 sm:w-56 h-40 sm:h-48 pointer-events-none opacity-45 select-none z-0" 
            aria-hidden="true"
          >
            <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
              <path 
                d="M-20 30 C30 25, 80 50, 110 42 C135 35, 160 55, 175 48" 
                stroke="#D48A98" 
                strokeWidth="1.2" 
                strokeLinecap="round" 
              />
              <path 
                d="M50 30 C65 15, 85 10, 95 18" 
                stroke="#D48A98" 
                strokeWidth="0.8" 
                strokeLinecap="round" 
              />
              <path 
                d="M110 42 C125 58, 140 68, 155 64" 
                stroke="#D48A98" 
                strokeWidth="0.8" 
                strokeLinecap="round" 
              />
              <path 
                d="M80 50 C90 70, 105 80, 115 76" 
                stroke="#D48A98" 
                strokeWidth="0.7" 
                strokeLinecap="round" 
              />
              <g transform="translate(95, 18)">
                <circle cx="0" cy="-4" r="3.2" fill="#F3C7D1" fillOpacity="0.85" />
                <circle cx="3.8" cy="-1.2" r="3.2" fill="#F3C7D1" fillOpacity="0.85" />
                <circle cx="2.4" cy="3.2" r="3.2" fill="#F3C7D1" fillOpacity="0.85" />
                <circle cx="-2.4" cy="3.2" r="3.2" fill="#F3C7D1" fillOpacity="0.85" />
                <circle cx="-3.8" cy="-1.2" r="3.2" fill="#F3C7D1" fillOpacity="0.85" />
                <circle cx="0" cy="0" r="1.2" fill="#B86B7A" />
              </g>
              <g transform="translate(140, 48)">
                <circle cx="0" cy="-4" r="3.5" fill="#F3C7D1" fillOpacity="0.9" />
                <circle cx="4" cy="-1.2" r="3.5" fill="#F3C7D1" fillOpacity="0.9" />
                <circle cx="2.5" cy="3.5" r="3.5" fill="#F3C7D1" fillOpacity="0.9" />
                <circle cx="-2.5" cy="3.5" r="3.5" fill="#F3C7D1" fillOpacity="0.9" />
                <circle cx="-4" cy="-1.2" r="3.5" fill="#F3C7D1" fillOpacity="0.9" />
                <circle cx="0" cy="0" r="1.3" fill="#B86B7A" />
              </g>
              <circle cx="175" cy="48" r="2.2" fill="#E8A7B5" />
              <circle cx="155" cy="64" r="2" fill="#E8A7B5" />
              <circle cx="115" cy="76" r="2.2" fill="#E8A7B5" />
            </svg>
          </div>

          {/* 2. Ambient Light Diffusion, Exactly 2 Soft Bubbles & 3 Falling Petals (Hero Only) */}
          {/* Soft blush pink atmosphere in upper/middle-right of Hero */}
          <div 
            className="absolute top-6 sm:top-10 right-2 sm:right-14 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(243,199,209,0.08)_0%,rgba(249,230,234,0.04)_55%,transparent_75%)] blur-3xl pointer-events-none select-none z-0"
            style={{ animation: 'heroAtmosphereBreath 36s ease-in-out infinite' }}
            aria-hidden="true"
          />

          {/* Soft lavender atmosphere in lower-left / lower-middle of Hero */}
          <div 
            className="absolute bottom-4 sm:bottom-12 left-2 sm:left-16 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full bg-[radial-gradient(circle,rgba(220,207,229,0.06)_0%,rgba(238,232,242,0.03)_55%,transparent_75%)] blur-3xl pointer-events-none select-none z-0"
            aria-hidden="true"
          />

          {/* Petal 1: Upper-left / upper-center area (gently falling down) */}
          <div
            className="absolute left-4 sm:left-14 top-24 sm:top-32 pointer-events-none z-0"
            style={{ animation: 'heroPetal1 15s cubic-bezier(0.22, 1, 0.36, 1) infinite' }}
            aria-hidden="true"
          >
            <svg width="14" height="19" viewBox="0 0 20 27" fill="none">
              <path
                d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z"
                fill="#E8A7B5"
              />
              <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
            </svg>
          </div>

          {/* Petal 2: Middle-right area around open space near hero (gently falling down) */}
          <div
            className="absolute left-[48%] sm:left-[54%] top-16 sm:top-20 pointer-events-none z-0"
            style={{ animation: 'heroPetal2 18s cubic-bezier(0.22, 1, 0.36, 1) infinite 2.5s' }}
            aria-hidden="true"
          >
            <svg width="14" height="19" viewBox="0 0 20 27" fill="none">
              <path
                d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z"
                fill="#F3C7D1"
              />
              <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
            </svg>
          </div>

          {/* Petal 3: Lower-right / middle-right Hero area (gently falling down) */}
          <div
            className="absolute right-8 sm:right-16 top-[54%] sm:top-[58%] pointer-events-none z-0"
            style={{ animation: 'heroPetal3 14s cubic-bezier(0.22, 1, 0.36, 1) infinite 5s' }}
            aria-hidden="true"
          >
            <svg width="13" height="18" viewBox="0 0 20 27" fill="none">
              <path
                d="M10 0 C15 3, 20 11, 18 19 C16 25, 11 27, 10 27 C9 27, 4 25, 2 19 C0 11, 5 3, 10 0 Z"
                fill="#E8A7B5"
              />
              <path d="M10 4 L10 21" stroke="#B86B7A" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
            </svg>
          </div>

          {/* Bubble 1: Upper/right hero region (soft translucent, no hard border) */}
          <div
            className="absolute right-14 sm:right-26 top-18 sm:top-24 w-[28px] h-[28px] rounded-full bg-[#F3C7D1] opacity-[0.10] blur-[6px] pointer-events-none z-0"
            style={{ animation: 'heroBubble1 16s ease-in-out infinite' }}
            aria-hidden="true"
          />

          {/* Bubble 2: Lower/right hero region (pale lavender, no hard border) */}
          <div
            className="absolute right-26 sm:right-40 top-40 sm:top-48 w-[22px] h-[22px] rounded-full bg-[#DCCFE5] opacity-[0.09] blur-[5px] pointer-events-none z-0"
            style={{ animation: 'heroBubble2 19s ease-in-out infinite 3s' }}
            aria-hidden="true"
          />

          {/* 3. Main Hero Content Layout */}
          <div className="relative z-10 w-full space-y-9 sm:space-y-11">
            <div className="text-xs font-mono tracking-widest text-[#615A54] uppercase">
              AI / ML • SOFTWARE • DATA
            </div>

            <div className="space-y-0 select-none">
              <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-tight leading-[0.9]">
                <span className="text-[#292725] block">Urvi</span>
                <span className="text-[#B86B7A] block">Tyagi</span>
              </h1>
            </div>

            <div className="max-w-2xl space-y-3">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#292725] font-light leading-relaxed">
                I build intelligent things with curiosity, code &amp; creativity.
              </p>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-[#292725] px-6 py-3.5 text-xs font-mono tracking-widest text-[#292725] hover:bg-[#292725] hover:text-[#FFF9F5] transition-all duration-300 group"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <a
                href={SITE_CONFIG.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-3.5 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] transition-colors duration-300 group"
              >
                <FileText size={16} className="text-[#292725] group-hover:text-[#B86B7A] transition-colors" />
                <span>VIEW RESUME</span>
              </a>
            </div>

            {/* Direct Links Row */}
            <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-3">
              <a
                href="https://www.linkedin.com/in/urvi-tyagi026/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.18em] text-[#292725] hover:text-[#B86B7A] transition-colors duration-250 uppercase group"
              >
                <LinkedinIcon size={14} className="transition-transform duration-200 group-hover:scale-110 text-[#292725] group-hover:text-[#B86B7A]" />
                <span>LINKEDIN</span>
                <span className="text-[11px]">↗</span>
              </a>

              <a
                href="https://github.com/Urvity03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.18em] text-[#292725] hover:text-[#465640] transition-colors duration-250 uppercase group"
              >
                <GithubIcon size={14} className="transition-transform duration-200 group-hover:scale-110 text-[#292725] group-hover:text-[#465640]" />
                <span>GITHUB</span>
                <span className="text-[11px]">↗</span>
              </a>

              <a
                href="mailto:tyagiurvi26@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.18em] text-[#292725] hover:text-[#B86B7A] transition-colors duration-250 uppercase group"
              >
                <Mail size={14} className="transition-transform duration-200 group-hover:scale-110 text-[#292725] group-hover:text-[#B86B7A]" />
                <span>EMAIL ME</span>
                <span className="text-[11px]">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* 02 — INTRODUCTION */}
        <section id="about" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div className="max-w-6xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-24">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs text-[#B86B7A] tracking-widest">
                <span>02</span>
                <span className="text-[#EBE2DA]">/</span>
                <span className="uppercase text-[#465640]">INTRODUCTION</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#292725] font-light tracking-tight">
                Introduction
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-8 space-y-8">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#292725] font-light leading-relaxed">
                  I'm Urvi — a <span className="text-[#B86B7A] italic font-normal">Computer Science undergraduate</span> exploring the space between artificial intelligence, machine learning, software and data.
                </p>

                <p className="text-base sm:text-lg text-[#615A54] leading-relaxed font-light">
                  I enjoy taking ideas apart, understanding how they work, and turning them into things I can actually build.
                </p>

                <p className="text-base sm:text-lg text-[#615A54] leading-relaxed font-light">
                  Final-year B.Tech student specializing in Artificial Intelligence &amp; Machine Learning with hands-on experience in machine learning, NLP, Generative AI, data analytics, and Python-based AI applications. Experienced in developing ML pipelines, AI-powered applications, and data-driven solutions using Python, TensorFlow, Scikit-learn, Streamlit, Docker, and Supabase.
                </p>

                <div className="pl-6 border-l border-[#B86B7A]/60 py-2 space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#465640] font-semibold block">
                    LinkedIn Headline
                  </span>
                  <p className="font-mono text-xs sm:text-sm text-[#292725] leading-relaxed font-medium">
                    AI &amp; ML | Aspiring ML Engineer | NLP • GenAI | Python • TensorFlow • Streamlit
                  </p>
                  <p className="font-serif text-sm sm:text-base text-[#615A54] leading-relaxed italic font-light pt-1">
                    “{SITE_CONFIG.summaryDetailed}”
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-7 pt-2 font-mono text-xs tracking-wider">
                  <a 
                    href={SITE_CONFIG.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#292725] hover:text-[#B86B7A] transition-colors"
                  >
                    LINKEDIN ↗
                  </a>
                  <a 
                    href={SITE_CONFIG.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#292725] hover:text-[#465640] transition-colors"
                  >
                    GITHUB ↗
                  </a>
                  <a 
                    href={`mailto:${SITE_CONFIG.links.email}`}
                    className="text-[#292725] hover:text-[#B86B7A] transition-colors"
                  >
                    EMAIL ME ↗
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8 pt-2">
                <div className="border-t border-[#EBE2DA]/60 pt-4 space-y-2">
                  <span className="font-mono text-xs text-[#9E958E] uppercase tracking-wider block">ACADEMIC FOUNDATION</span>
                  <h4 className="font-serif text-xl text-[#292725] font-light">AKTU · B.Tech AI & ML</h4>
                  <p className="text-xs text-[#615A54] font-light leading-relaxed">
                    Graduation Expected 2027 (Current / In Progress). Foundational training in algorithms, deep learning, and intelligent systems.
                  </p>
                </div>

                <div className="border-t border-[#EBE2DA]/60 pt-4 space-y-2">
                  <span className="font-mono text-xs text-[#9E958E] uppercase tracking-wider block">APPLIED STACK</span>
                  <p className="font-mono text-xs text-[#292725] leading-relaxed">
                    Python · TensorFlow · Scikit-learn · Streamlit · Docker · Supabase · HuggingFace · NLP · GenAI
                  </p>
                </div>

                <div className="border-t border-[#EBE2DA]/60 pt-4 space-y-2">
                  <span className="font-mono text-xs text-[#9E958E] uppercase tracking-wider block">SYSTEMS & OPEN SOURCE</span>
                  <p className="text-xs text-[#615A54] font-light leading-relaxed">
                    Active open-source contributor to Termstory (upstream and fork), resolving 20+ review comments, addressing UnicodeDecodeError, and hardening terminal workflows.
                  </p>
                </div>

                <div className="border-t border-[#EBE2DA]/60 pt-4 flex justify-between font-mono text-[11px] text-[#615A54]">
                  <span>LOCATION: GHAZIABAD, IN</span>
                  <span>FINAL-YEAR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — SELECTED WORK */}
        <section id="work" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div id="selected-work" className="absolute -top-24" />
          <div className="max-w-6xl mx-auto px-6 sm:px-12 relative">
            {/* Editorial Section Number Marker: 03 */}
            <div className="hidden lg:flex absolute -left-8 sm:-left-14 top-4 flex-col items-center select-none" aria-hidden="true">
              <div className="w-6 h-6 rounded-full border border-[#EBE2DA] bg-[#FFF9F5] flex items-center justify-center text-[10px] font-mono text-[#B86B7A] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                03
              </div>
              <div className="w-px h-32 bg-gradient-to-b from-[#EBE2DA] to-transparent mt-2" />
            </div>

            <div className="mb-20 sm:mb-32">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs text-[#B86B7A] tracking-widest">
                <span>03</span>
                <span className="text-[#EBE2DA]">/</span>
                <span className="uppercase text-[#465640]">SELECTED WORK</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#292725] font-light tracking-tight leading-tight">
                Things I've built while <span className="italic font-normal text-[#B86B7A]">learning</span> —<br />
                real projects, real problems.
              </h2>
            </div>

            <div className="space-y-36 sm:space-y-48">
              {PROJECTS.map((project, index) => {
                // Project 01: Visual LEFT, Content RIGHT
                // Project 02: Content LEFT, Visual RIGHT
                // Project 03: Visual LEFT, Content RIGHT
                const visualOnLeft = index % 2 === 0;

                return (
                  <article key={project.id} className="relative pb-24 border-b border-[#EBE2DA]/40 last:border-b-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                      
                      {/* Minimal Rectangular Project Visual Block */}
                      <div className={`lg:col-span-6 ${visualOnLeft ? 'lg:col-start-1 lg:order-1' : 'lg:col-start-7 lg:order-2'}`}>
                        {(() => {
                          const cfg = PROJECT_VISUAL_CONFIG[index % 3];
                          return (
                            <div
                              className={`relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border ${cfg.border} bg-gradient-to-br ${cfg.bg} p-8 flex flex-col justify-between select-none shadow-[0_8px_28px_-10px_rgba(0,0,0,0.03)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01] hover:-translate-y-[3px] hover:shadow-[0_14px_36px_-10px_rgba(0,0,0,0.06)] cursor-pointer group`}
                            >
                              {/* Subtle geometric dots and rings in the background */}
                              <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
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
                                      opacity: dot.opacity,
                                    }}
                                  />
                                ))}
                              </div>

                              {/* Top Spacer */}
                              <div />

                              {/* Large Centered Number: 01, 02, 03 */}
                              <div className="relative z-10 text-center py-4 flex items-center justify-center">
                                <span className={`font-serif italic font-light text-8xl sm:text-9xl md:text-[10.5rem] leading-none tracking-tight ${cfg.numberColor} select-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[2px]`}>
                                  {cfg.num}
                                </span>
                              </div>

                              {/* Bottom Bar: PROJECT [dot] on left, 01 / 03 on right */}
                              <div className="relative z-10 flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-widest text-[#9E958E] uppercase">
                                <div className="flex items-center gap-2">
                                  <span>PROJECT</span>
                                  {cfg.hasDot && (
                                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor} inline-block`} />
                                  )}
                                </div>
                                <span>{cfg.indexLabel}</span>
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      {/* Text & Deliverables Column */}
                      <div className={`lg:col-span-6 space-y-7 ${visualOnLeft ? 'lg:col-start-7 lg:order-2' : 'lg:col-start-1 lg:order-1'}`}>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-[#B86B7A] font-semibold tracking-wider">
                            0{index + 1}
                          </span>
                          <span className="text-[#EBE2DA]">/</span>
                          <span className="font-mono text-xs uppercase tracking-wider text-[#465640] font-medium">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] font-light leading-tight">
                          {project.title}
                        </h3>

                        <p className="font-serif text-base sm:text-lg text-[#615A54] italic border-l border-[#E8A7B5] pl-4 py-1 font-light">
                          “{project.tagline}”
                        </p>

                        <p className="text-sm text-[#615A54] leading-relaxed font-light">
                          {project.description}
                        </p>

                        {/* Understated rounded-outline technology tags */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-block px-2.5 py-1 text-[11px] font-sans text-[#615A54] border border-[#EBE2DA]/60 rounded-full bg-[#FFF9F5]/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Technical Deliverables List — Plain, No Boxes */}
                        <div className="space-y-3 pt-2 border-t border-[#EBE2DA]/40">
                          {project.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#615A54] font-light leading-relaxed">
                              <span className="text-[#B86B7A] select-none mt-0.5">·</span>
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>

                        {/* Understated Links with Thin Underlines */}
                        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#EBE2DA]/40">
                          {/* LIVE DEMO ↗ */}
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#292725] group-hover:after:bg-[#B86B7A] after:transition-colors"
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
                              className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#615A54] hover:text-[#292725] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#615A54]/50 group-hover:after:bg-[#292725] after:transition-colors"
                            >
                              <span>VIEW CODE</span>
                              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04 — OPEN SOURCE */}
        <section id="open-source" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div className="max-w-6xl mx-auto px-6 sm:px-12 relative">
            {/* Editorial Section Number Marker: 04 */}
            <div className="hidden lg:flex absolute -left-8 sm:-left-14 top-4 flex-col items-center select-none" aria-hidden="true">
              <div className="w-6 h-6 rounded-full border border-[#EBE2DA] bg-[#FFF9F5] flex items-center justify-center text-[10px] font-mono text-[#B86B7A] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                04
              </div>
              <div className="w-px h-32 bg-gradient-to-b from-[#EBE2DA] to-transparent mt-2" />
            </div>

            {/* Section Header: OPEN SOURCE */}
            <div className="mb-16 sm:mb-24">
              <div className="font-mono text-xs text-[#615A54] tracking-widest uppercase mb-4">
                OPEN SOURCE
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#292725] font-light tracking-tight leading-tight">
                Building beyond my own<br />
                <span className="italic font-normal text-[#465640]">repositories.</span>
              </h2>
            </div>

            {/* Two-Column Editorial Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              
              {/* Left Column: Project Overview + Links + Note */}
              <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center gap-3">
                  <GitBranch size={22} className="text-[#879B72]" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#292725] font-light">
                    TermStory
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#615A54] font-light leading-relaxed">
                  TermStory turns your terminal history into a searchable, AI-narrated timeline of your development life. It groups shell commands into sessions, correlates Git commits, and renders everything into a high-density TUI dashboard.
                </p>

                <p className="text-xs sm:text-sm text-[#615A54] font-light leading-relaxed">
                  Contributed reliability and error-handling improvements to TermStory, an open-source developer-memory tool.
                </p>

                {/* Links */}
                <div className="space-y-3 pt-2">
                  <div>
                    <a
                      href={OPEN_SOURCE_DATA.forkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] transition-colors duration-250 py-1"
                    >
                      <span>VIEW MY REPOSITORY</span>
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>

                  <div>
                    <a
                      href={OPEN_SOURCE_DATA.upstreamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#615A54] hover:text-[#465640] transition-colors duration-250 py-1"
                    >
                      <span>VIEW UPSTREAM PROJECT</span>
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>

                {/* Note */}
                <div className="pt-6 border-t border-[#EBE2DA]/60 space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E958E] block font-semibold">
                    NOTE
                  </span>
                  <p className="font-serif text-xs text-[#615A54] italic font-light">
                    Contributed to an existing project — not the original author.
                  </p>
                </div>
              </div>

              {/* Right Column: Vertical Timeline with Matcha Nodes */}
              <div className="lg:col-span-7 space-y-8 lg:pl-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#615A54] block font-semibold">
                  CONTRIBUTIONS
                </span>

                {/* Vertical Timeline */}
                <div className="relative pl-8 space-y-9 border-l border-[#DCE5D2]">
                  {CONTRIBUTIONS_TIMELINE.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Matcha circular timeline node */}
                      <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FFF9F5] border-2 border-[#879B72] group-hover:bg-[#879B72] transition-colors duration-300" />

                      <div className="space-y-1">
                        <h4 className="font-serif text-base sm:text-lg text-[#292725] font-light">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#615A54] font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Link: VIEW MY CONTRIBUTIONS ↗ */}
                <div className="pt-4">
                  <a
                    href={OPEN_SOURCE_DATA.commitsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] transition-colors duration-250 py-1"
                  >
                    <span>VIEW MY CONTRIBUTIONS</span>
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 05 — MY DIGITAL GARDEN */}
        <section id="github" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div id="digital-garden" className="absolute -top-24" />
          <div className="max-w-6xl mx-auto px-6 sm:px-12 relative">
            {/* Editorial Section Number Marker: 05 */}
            <div className="hidden lg:flex absolute -left-8 sm:-left-14 top-4 flex-col items-center select-none" aria-hidden="true">
              <div className="w-6 h-6 rounded-full border border-[#EBE2DA] bg-[#FFF9F5] flex items-center justify-center text-[10px] font-mono text-[#B86B7A] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                05
              </div>
              <div className="w-px h-32 bg-gradient-to-b from-[#EBE2DA] to-transparent mt-2" />
            </div>

            {/* THREE-PART EDITORIAL LAYOUT (Left: Heading/Selector, Middle: Profile, Right: Activity) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* PART 1: Heading, GitHub Link & Year Selector (Left Column) */}
              <div className="lg:col-span-3 space-y-7">
                <div>
                  <div className="font-mono text-xs text-[#615A54] tracking-widest uppercase mb-4 font-medium">
                    MY DIGITAL GARDEN
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] font-light tracking-tight leading-snug">
                    Code grows quietly,<br />
                    <span className="italic font-normal text-[#879B72]">one contribution</span> at a time.
                  </h2>
                </div>

                <div className="pt-1">
                  <a
                    href="https://github.com/Urvity03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-xs text-[#292725] hover:text-[#879B72] tracking-wider transition-colors uppercase py-1"
                  >
                    <span>GITHUB / URVITY03</span>
                    <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Year Selector: 2026 / 2025 */}
                <div className="pt-4 border-t border-[#EBE2DA]/60 space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E958E] block font-semibold">
                    TIMELINE YEAR
                  </span>
                  <div className="flex items-center gap-6 font-mono text-xs tracking-wider">
                    <button
                      type="button"
                      onClick={() => setActiveYear('2026')}
                      className={`py-1 transition-all relative ${
                        activeYear === '2026'
                          ? 'text-[#465640] font-semibold border-b-2 border-[#465640]'
                          : 'text-[#9E958E] hover:text-[#292725]'
                      }`}
                    >
                      2026
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveYear('2025')}
                      className={`py-1 transition-all relative ${
                        activeYear === '2025'
                          ? 'text-[#465640] font-semibold border-b-2 border-[#465640]'
                          : 'text-[#9E958E] hover:text-[#292725]'
                      }`}
                    >
                      2025
                    </button>
                  </div>
                </div>
              </div>

              {/* PART 2: GitHub Profile Information Panel (Middle Column) */}
              <div className="lg:col-span-4 p-6 rounded-2xl border border-[#EBE2DA] bg-[#FFF9F5] space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                {/* Avatar & Username */}
                <div className="flex items-center gap-4">
                  <img
                    src={profile.avatar_url || 'https://github.com/Urvity03.png'}
                    alt="Urvi Tyagi GitHub profile"
                    loading="lazy"
                    className="w-14 h-14 rounded-full border border-[#EBE2DA] object-cover bg-[#FAF2EC] transition-transform duration-300 hover:scale-[1.02]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== 'https://github.com/Urvity03.png') {
                        target.src = 'https://github.com/Urvity03.png';
                      }
                    }}
                  />
                  <div>
                    <a
                      href="https://github.com/Urvity03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-semibold text-[#292725] hover:text-[#879B72] transition-colors inline-flex items-center gap-1"
                    >
                      <span>@{profile.login}</span>
                      <ArrowUpRight size={11} />
                    </a>
                    <span className="font-mono text-[11px] text-[#879B72] block">
                      Active Developer
                    </span>
                  </div>
                </div>

                {/* Real Bio */}
                <p className="text-xs text-[#615A54] leading-relaxed font-light">
                  {profile.bio}
                </p>

                {/* Key Real Metrics */}
                <div className="space-y-2 pt-3 border-t border-[#EBE2DA]/60 font-mono text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#9E958E] uppercase tracking-wider text-[11px]">TOTAL CONTRIBUTIONS</span>
                    <span className="text-[#292725] font-semibold">{totalContributionsCount}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#9E958E] uppercase tracking-wider text-[11px]">REPOSITORIES</span>
                    <span className="text-[#292725] font-semibold">{profile.public_repos}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#9E958E] uppercase tracking-wider text-[11px]">FOLLOWERS</span>
                    <span className="text-[#292725] font-semibold">{profile.followers}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#9E958E] uppercase tracking-wider text-[11px]">FOLLOWING</span>
                    <span className="text-[#292725] font-semibold">{profile.following}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="pt-3 border-t border-[#EBE2DA]/60 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E958E] block font-semibold">
                    ACHIEVEMENTS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: 'Pull Shark', icon: '🦈' },
                      { name: 'YOLO', icon: '🎯' },
                      { name: 'Quickdraw', icon: '⚡' }
                    ].map((ach) => (
                      <span
                        key={ach.name}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-mono text-[#615A54] border border-[#EBE2DA] rounded-full bg-[#FFF9F5]"
                      >
                        <span>{ach.icon}</span>
                        <span>{ach.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="pt-3 border-t border-[#EBE2DA]/60 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E958E] block font-semibold">
                    LANGUAGES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'C++', 'Jupyter Notebook', 'HTML', 'CSS'].map((lang) => (
                      <span
                        key={lang}
                        className="px-2.5 py-0.5 text-[11px] font-sans text-[#615A54] border border-[#EBE2DA] rounded-full bg-[#FFF9F5]"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Profile Link */}
                <div className="pt-3 border-t border-[#EBE2DA]/60">
                  <a
                    href={SITE_CONFIG.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#292725] hover:text-[#879B72] transition-colors"
                  >
                    <span>VIEW GITHUB PROFILE</span>
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* PART 3: Contribution Activity Calendar Grid (Right Column) */}
              <div className="lg:col-span-5 p-6 rounded-2xl border border-[#EBE2DA] bg-[#FFF9F5] space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] relative">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="uppercase tracking-wider text-[#615A54] font-semibold">
                    CONTRIBUTION ACTIVITY
                  </span>
                  <span className="text-[#879B72]">
                    {totalContributionsCount} contributions in {activeYear}
                  </span>
                </div>

                {/* Month Labels */}
                <div className="flex justify-between text-[10px] font-mono text-[#9E958E] px-5 select-none">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                {/* Days of Week + 52-Week Contribution Matrix */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 select-none">
                  <div className="flex flex-col justify-between text-[9px] font-mono text-[#9E958E] h-20 shrink-0">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Grid: 52 weeks x 7 rows */}
                  <div className="min-w-[480px] grid grid-flow-col grid-rows-7 gap-1 py-1">
                    {activeYearContributions.slice(0, 52 * 7).map((item, idx) => (
                      <div
                        key={`${item.date}-${idx}`}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredCell({
                            date: item.date,
                            count: item.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top - 8
                          });
                        }}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-2 h-2 rounded-[1px] ${getContributionCellColor(item.level)} transition-transform duration-200 hover:scale-[1.05] cursor-pointer`}
                      />
                    ))}
                  </div>
                </div>

                {/* Legend: Less -> More in Matcha Palette */}
                <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-[#9E958E] pt-1">
                  <span>Less</span>
                  <div className="flex gap-1 items-center">
                    <div className="w-2 h-2 rounded-[1px] bg-[#EBE2DA]/50" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#DCE5D2]" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#AFC29E]" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#879B72]" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#465640]" />
                  </div>
                  <span>More</span>
                </div>

                {/* Elegant Floating Tooltip on Cell Hover */}
                {hoveredCell && (
                  <div
                    className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full px-2.5 py-1 text-[11px] font-mono text-[#FFF9F5] bg-[#292725] rounded shadow-md whitespace-nowrap"
                    style={{ top: hoveredCell.y, left: hoveredCell.x }}
                  >
                    {hoveredCell.count === 0
                      ? `No contributions on ${hoveredCell.date}`
                      : `${hoveredCell.count} ${hoveredCell.count === 1 ? 'contribution' : 'contributions'} on ${hoveredCell.date}`}
                  </div>
                )}
              </div>

            </div>

            {/* FEATURED REPOSITORIES LIST (Below the Three-Part Layout) */}
            <div className="mt-14 pt-10 border-t border-[#EBE2DA]/60 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#615A54] block font-semibold">
                FEATURED REPOSITORIES
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FEATURED_REPOSITORIES.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-xl border border-[#EBE2DA] bg-[#FFF9F5] space-y-2.5 hover:border-[#879B72]/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all block group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-xs font-semibold text-[#292725] group-hover:text-[#879B72] transition-colors truncate pr-2">
                        {repo.name}
                      </h4>
                      <ArrowUpRight size={13} className="text-[#9E958E] group-hover:text-[#879B72] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </div>

                    <p className="text-xs text-[#615A54] leading-relaxed font-light line-clamp-2">
                      {repo.desc}
                    </p>

                    <div className="flex items-center gap-4 pt-1 font-mono text-[11px] text-[#9E958E]">
                      <span className="text-[#879B72]">{repo.lang}</span>
                      <span className="flex items-center gap-1">
                        <Star size={11} className="text-[#879B72]" />
                        <span>{repo.stars}</span>
                      </span>
                      {repo.forks > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork size={11} className="text-[#879B72]" />
                          <span>{repo.forks}</span>
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 06 — PROFESSIONAL EXPERIENCE */}
        <section id="experience" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div className="max-w-5xl mx-auto px-6 sm:px-12">
            <div className="mb-20 sm:mb-32">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs text-[#B86B7A] tracking-widest">
                <span>06</span>
                <span className="text-[#EBE2DA]">/</span>
                <span className="uppercase text-[#465640]">EXPERIENCE</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#292725] font-light tracking-tight">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-24 sm:space-y-36">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 pb-16 border-b border-[#EBE2DA]/40 last:border-b-0">
                  <div className="md:col-span-5 space-y-2">
                    <span className="font-mono text-xs text-[#B86B7A] uppercase tracking-widest block font-medium">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#292725] font-light leading-snug">
                      {item.company}
                    </h3>
                    <p className="font-mono text-xs text-[#465640] uppercase tracking-wider font-semibold">
                      {item.role}
                    </p>
                    <p className="font-sans text-xs text-[#615A54] font-light pt-1">
                      {item.location}
                    </p>
                  </div>

                  <div className="md:col-span-7 space-y-3.5 pt-1">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3.5 text-sm text-[#615A54] font-light leading-relaxed">
                        <span className="text-[#B86B7A] select-none mt-0.5">·</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — JOURNEY */}
        <section id="journey" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div className="max-w-5xl mx-auto px-6 sm:px-12">
            <div className="mb-20 sm:mb-32">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs text-[#B86B7A] tracking-widest">
                <span>07</span>
                <span className="text-[#EBE2DA]">/</span>
                <span className="uppercase text-[#465640]">TIMELINE</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#292725] font-light tracking-tight">
                The Journey
              </h2>
            </div>

            <div className="relative pl-8 sm:pl-12 space-y-24 sm:space-y-36 border-l border-[#EBE2DA]/60">
              {JOURNEY_STEPS.map((step) => (
                <div key={`${step.title}-${step.year}`} className="relative group">
                  <div className="absolute -left-[37px] sm:-left-[53px] top-2 w-2.5 h-2.5 rounded-full bg-[#FFF9F5] border-2 border-[#B86B7A] group-hover:bg-[#B86B7A] transition-colors duration-300" />

                  <div className="space-y-3 pb-2">
                    <div className="flex flex-wrap items-baseline gap-3 font-mono text-sm sm:text-base text-[#B86B7A] font-medium tracking-wide">
                      <span>{step.year}</span>
                      <span className="text-[#EBE2DA] text-xs">/</span>
                      <span className="text-xs uppercase text-[#465640] font-semibold">
                        {step.roleType}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#292725] font-light leading-snug">
                      {step.title}
                    </h3>

                    <p className="font-mono text-xs text-[#615A54] tracking-wide">
                      {step.organization}
                    </p>

                    <p className="text-sm sm:text-base text-[#615A54] leading-relaxed font-light max-w-3xl pt-1">
                      {step.description}
                    </p>

                    {step.coursework && (
                      <div className="pt-4 border-t border-[#EBE2DA]/40 space-y-2">
                        <span className="font-mono text-xs text-[#465640] uppercase font-semibold block">
                          RELEVANT COURSEWORK & FOUNDATIONS
                        </span>
                        <p className="text-xs font-mono text-[#615A54] leading-relaxed">
                          {step.coursework}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — SKILLS */}
        <section id="skills" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div className="max-w-5xl mx-auto px-6 sm:px-12">
            <div className="mb-20 sm:mb-28">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs text-[#B86B7A] tracking-widest">
                <span>08</span>
                <span className="text-[#EBE2DA]">/</span>
                <span className="uppercase text-[#465640]">SKILLS</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#292725] font-light tracking-tight">
                The tools I reach for.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#615A54] mt-3 max-w-2xl font-light">
                Core programming languages, frameworks, deep learning libraries, and development tools used across research and production applications.
              </p>
            </div>

            <div className="space-y-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[#EBE2DA]/40 items-baseline"
                >
                  <div className="md:col-span-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#465640] font-semibold block">
                      {cat.name}
                    </span>
                  </div>

                  <div className="md:col-span-8">
                    <p className="font-serif text-lg sm:text-xl text-[#292725] font-light leading-relaxed">
                      {cat.skills}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09 — CERTIFICATIONS */}
        <section id="certifications" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div className="max-w-5xl mx-auto px-6 sm:px-12">
            <div className="mb-20 sm:mb-28">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs text-[#B86B7A] tracking-widest">
                <span>09</span>
                <span className="text-[#EBE2DA]">/</span>
                <span className="uppercase text-[#465640]">CREDENTIALS</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#292725] font-light tracking-tight">
                Things I've earned.
              </h2>
            </div>

            <div className="divide-y divide-[#EBE2DA]/40 border-y border-[#EBE2DA]/40">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-[#B86B7A] font-semibold">
                      {cert.id}
                    </span>
                  </div>

                  <div className="md:col-span-7">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#292725] font-light group-hover:text-[#B86B7A] transition-colors duration-250">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
                    <span className="font-mono text-xs text-[#465640] font-medium uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-[10px] text-[#9E958E]">
                      VERIFIED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REAL-TIME NOW */}
        <section id="now" className="py-28 md:py-44 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative">
          <div className="max-w-5xl mx-auto px-6 sm:px-12">
            <div className="mb-16 sm:mb-24">
              <span className="font-mono text-xs uppercase tracking-widest text-[#465640] block mb-3 font-semibold">
                REAL-TIME FOCUS · 2026
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#292725] font-light tracking-tight">
                What I'm doing
                <br />
                <span className="italic text-[#B86B7A] font-normal">right now.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-8 border-t border-[#EBE2DA]/40">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E958E] block">
                  LEARNING
                </span>
                <p className="font-serif text-2xl text-[#292725] font-light leading-snug">
                  Machine Learning · NLP · Generative AI
                </p>
                <p className="font-sans text-xs text-[#615A54] leading-relaxed font-light">
                  Deepening theoretical foundations in Transformer attention mechanisms, loss gradients, and compact model inference.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E958E] block">
                  BUILDING
                </span>
                <p className="font-serif text-2xl text-[#292725] font-light leading-snug">
                  AI/ML applications and Python-based AI solutions
                </p>
                <p className="font-sans text-xs text-[#615A54] leading-relaxed font-light">
                  Designing reproducible ML pipelines, Dockerized deployments, and clean Streamlit interfaces for intelligent systems.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E958E] block">
                  EXPLORING
                </span>
                <p className="font-serif text-2xl text-[#292725] font-light leading-snug">
                  ML Engineering · Open Source · practical AI systems
                </p>
                <p className="font-sans text-xs text-[#615A54] leading-relaxed font-light">
                  Contributing upstream to open-source developer tooling and seeking collaborative engineering teams for AI/ML roles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — CONTACT */}
        <section id="contact" className="py-32 md:py-52 border-t border-[#EBE2DA]/40 bg-[#FFF9F5] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="mb-16 sm:mb-24">
              <div className="flex items-center gap-3 mb-3 font-mono text-xs text-[#B86B7A] tracking-widest">
                <span>10</span>
                <span className="text-[#EBE2DA]">/</span>
                <span className="uppercase text-[#465640]">CONNECT</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-7 space-y-8">
                <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl text-[#292725] font-light tracking-tight leading-[0.88] select-none">
                  Let's
                  <br />
                  <span className="italic font-normal text-[#B86B7A]">build</span>
                  <br />
                  something.
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#615A54] font-light max-w-xl leading-relaxed">
                  Always open to discussing machine learning engineering roles, research collaboration, and ambitious software systems.
                </p>

                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#292725] hover:text-[#B86B7A] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#292725] group-hover:after:bg-[#B86B7A] after:transition-colors"
                  >
                    <span>VIEW RESUME</span>
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-10 pt-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#465640] block font-semibold border-b border-[#EBE2DA]/40 pb-3">
                  DIRECT CHANNELS
                </span>

                <div className="space-y-6">
                  <div className="flex items-baseline justify-between group border-b border-[#EBE2DA]/40 pb-4">
                    <span className="font-mono text-xs text-[#9E958E]">LINKEDIN</span>
                    <a
                      href={SITE_CONFIG.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xl sm:text-2xl text-[#292725] group-hover:text-[#B86B7A] transition-colors duration-250 inline-flex items-center gap-1.5"
                    >
                      <span>urvi-tyagi026</span>
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <div className="flex items-baseline justify-between group border-b border-[#EBE2DA]/40 pb-4">
                    <span className="font-mono text-xs text-[#9E958E]">GITHUB</span>
                    <a
                      href={SITE_CONFIG.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xl sm:text-2xl text-[#292725] group-hover:text-[#465640] transition-colors duration-250 inline-flex items-center gap-1.5"
                    >
                      <span>Urvity03</span>
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <div className="space-y-2 border-b border-[#EBE2DA]/40 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#9E958E]">EMAIL</span>
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#B86B7A] hover:text-[#8C4856] transition-colors duration-200"
                        title="Copy email"
                      >
                        {copied ? (
                          <>
                            <Check size={12} /> COPIED
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> COPY
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.links.email}`}
                      className="font-serif text-xl sm:text-2xl text-[#292725] hover:text-[#B86B7A] transition-colors duration-250 block truncate"
                    >
                      {SITE_CONFIG.links.email}
                    </a>
                  </div>

                  <div className="flex items-baseline justify-between group border-b border-[#EBE2DA]/40 pb-4">
                    <span className="font-mono text-xs text-[#9E958E]">RESUME</span>
                    <a
                      href={SITE_CONFIG.resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xl sm:text-2xl text-[#292725] group-hover:text-[#B86B7A] transition-colors duration-250 inline-flex items-center gap-1.5"
                    >
                      <span>urvi_Resume.pdf</span>
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                <div className="font-mono text-[11px] text-[#615A54]">
                  LOCATION: GHAZIABAD, INDIA · RESPONSE WITHIN 24H
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Persistent Editorial Footer */}
      <footer className="border-t border-[#EBE2DA]/40 py-16 text-[#615A54] text-xs font-mono bg-[#FFF9F5]">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif text-lg text-[#292725] block font-light">URVI TYAGI</span>
            <span className="text-[11px] text-[#9E958E]">Sakura × AI · Computer Science Undergraduate & Aspiring ML Engineer</span>
          </div>
          <div className="text-[11px] text-[#9E958E]">
            PORTFOLIO 2026 · ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
