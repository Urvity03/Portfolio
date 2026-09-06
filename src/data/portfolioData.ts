import type {
  Project,
  OpenSourceProject,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillCategory,
  JourneyStep,
  NowFocusItem,
  BeyondCodeItem,
} from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'multimodal-price-prediction',
    number: '01',
    title: 'Multimodal Product Price Predictor',
    tagline: 'End-to-end multimodal machine learning pipeline combining textual and visual product information for price prediction.',
    stack: ['Python', 'TensorFlow', 'XGBoost', 'EfficientNet', 'TF-IDF'],
    description:
      'An end-to-end multimodal deep learning pipeline combining textual and visual product information for price prediction. Fuses unstructured product descriptions with dense visual embeddings to deliver accurate, automated product valuation.',
    bullets: [
      'Built an end-to-end multimodal machine learning pipeline combining textual and visual product information for price prediction.',
      'Implemented TF-IDF feature extraction, EfficientNet image embeddings, feature engineering, and XGBoost regression.',
      'Evaluated model performance using MAE, RMSE, and R² while comparing multiple feature extraction and regression approaches.'
    ],
    githubUrl: 'https://github.com/Urvity03/Multimodal-Product-Price-Predictor',
    liveDemoUrl: 'https://multimodal-price-predictor.streamlit.app/',
    category: 'Multimodal Deep Learning & Computer Vision',
  },
  {
    id: 'ml-copilot-platform',
    number: '02',
    title: 'ML Copilot',
    tagline: 'AI workspace copilot for ML projects using Hybrid RAG, semantic search, Gemini, and project-aware chat.',
    stack: ['Python', 'Streamlit', 'Docker', 'Supabase', 'REST APIs', 'Gemini'],
    description:
      'A modular platform engineered to simplify and organize the end-to-end machine learning lifecycle through dataset management, experiment tracking, and workflow automation into a cohesive developer environment.',
    bullets: [
      'Designed reusable backend modules and AI-assisted utilities for project organization, feature engineering, model evaluation, and experiment management.',
      'Integrated Docker, REST APIs, and Supabase for authentication, backend services, and portable deployments.',
      'Followed modular software architecture and Git-based development practices to improve maintainability and scalability.'
    ],
    githubUrl: 'https://github.com/Urvity03/MLCopilot-Platform',
    liveDemoUrl: 'https://mlcopilot-two.vercel.app',
    category: 'ML Engineering & Lifecycle Platform',
  },
  {
    id: 'talentlens-ai',
    number: '03',
    title: 'TalentLens AI',
    tagline: 'Resume intelligence platform using NLP, semantic similarity, recruiter insights, and intelligent scoring.',
    stack: ['Python', 'NLP', 'Streamlit', 'Sentence Transformers', 'TF-IDF'],
    description:
      'An intelligent resume screening platform that ranks candidates against job descriptions using NLP techniques, semantic embeddings, and cosine similarity beyond superficial keyword matching.',
    bullets: [
      'Developed an intelligent resume screening platform that ranks candidates against job descriptions using TF-IDF, Sentence Transformers, and cosine similarity.',
      'Implemented semantic search, recruiter dashboards, and skill-gap analysis to support candidate evaluation workflows.',
      'Built an interactive application for resume parsing, candidate ranking, and personalized learning recommendations.'
    ],
    githubUrl: 'https://github.com/Urvity03/TalentLens-AI',
    liveDemoUrl: 'https://talentlens-ai00.streamlit.app/',
    category: 'NLP & Semantic Intelligence',
  }
];

export const OPEN_SOURCE_DATA: OpenSourceProject = {
  title: 'Termstory',
  language: 'Python',
  role: 'Open Source Contributor',
  upstreamName: 'bitflicker64/Termstory',
  upstreamUrl: 'https://github.com/bitflicker64/Termstory',
  forkUrl: 'https://github.com/Urvity03/Termstory',
  commitsUrl: 'https://github.com/bitflicker64/Termstory/commits?author=Urvity03',
  summary:
    'Contributed multiple pull requests improving exception handling, logging, and overall code reliability for Termstory, an open-source developer-memory tool.',
  details: [
    'Replaced broad `except Exception` handlers with specific exception types following Python best practices.',
    'Hardened configuration parsing routines against malformed keys and edge cases.',
    'Implemented UnicodeDecodeError mitigation across heterogeneous terminal log streams and diverse shell locales.',
    'Added defensive error handling for irregular date timestamp normalization.',
    'Implemented installation log error handling to safeguard permission-restricted environments.',
    'Collaborated with maintainers through iterative code reviews, addressing 20+ review comments across multiple pull requests.',
    'Improved code readability, maintainability, and followed established project contribution guidelines.'
  ]
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'inamigos',
    company: 'InAmigos Foundation (IAF)',
    role: 'Machine Learning Intern',
    period: 'August 2026',
    bullets: [
      'Studied core Artificial Intelligence and Machine Learning concepts including Deep Learning, Supervised Learning, Unsupervised Learning, and Reinforcement Learning.',
      'Applied theoretical concepts through practical learning activities and real-world examples.',
      'Prepared structured learning material documenting key AI and Machine Learning concepts and applications.',
      'Strengthened foundational understanding of AI/ML workflows and machine learning methodologies.'
    ]
  },
  {
    id: 'ibm-skillsbuild',
    company: 'IBM SkillsBuild',
    role: 'Artificial Intelligence Intern',
    period: 'June 2026 – August 2026',
    bullets: [
      'Completed a virtual internship focused on Artificial Intelligence through IBM SkillsBuild.',
      'Developed practical understanding of Artificial Intelligence concepts, tools, and real-world applications through hands-on learning.',
      'Applied AI, Machine Learning, and Generative AI concepts through structured internship activities and practical assignments.',
      'Strengthened foundational knowledge of AI/ML workflows and Generative AI applications.'
    ]
  },
  {
    id: 'tata-iq',
    company: 'Tata iQ',
    role: 'GenAI & Data Analytics Virtual Internship',
    period: 'August 2025',
    bullets: [
      'Completed a 6-hour virtual internship focused on GenAI and Data Analytics.',
      'Conducted exploratory data analysis using Generative AI tools to identify customer behavior patterns and delinquency risks.',
      'Developed predictive approaches for risk segmentation and collections prioritization.',
      'Applied Responsible AI principles including fairness, transparency, and Explainable AI (XAI) in solution design.',
      'Gained practical exposure to AI-driven business analytics and data-informed decision making.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  institution: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Artificial Intelligence & Machine Learning',
  expectedGraduation: 'Expected 2027',
  status: 'CURRENT / IN PROGRESS',
  coursework: [
    'Data Structures & Algorithms',
    'Deep Learning',
    'Machine Learning',
    'Probability & Statistics',
    'Computer Vision',
    'Natural Language Processing',
    'Operating Systems',
    'Database Management Systems'
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  { id: '1', title: 'IBM Machine Learning with Python', issuer: 'IBM / Cognitive Class' },
  { id: '2', title: 'Google Cloud Gemini for Data Scientists and Analysts', issuer: 'Google Cloud' },
  { id: '3', title: 'Google DeepMind: Build Your Own Small Language Model', issuer: 'Google DeepMind' },
  { id: '4', title: 'Google Cloud Prompt Design in Vertex AI', issuer: 'Google Cloud' },
  { id: '5', title: 'AWS Introduction to Generative AI', issuer: 'Amazon Web Services (AWS)' },
  { id: '6', title: 'Practicing Test Driven Development with Python', issuer: 'Professional Training' },
  { id: '7', title: 'The Legend of Python', issuer: 'Specialized Python Track' }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: 'PROGRAMMING',
    skills: ['Python', 'SQL', 'C++ (Basic)']
  },
  {
    category: 'MACHINE LEARNING',
    skills: [
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Keras',
      'XGBoost',
      'Supervised Learning',
      'Unsupervised Learning',
      'Reinforcement Learning'
    ]
  },
  {
    category: 'AI & ML DOMAINS',
    skills: [
      'NLP',
      'Generative AI',
      'Computer Vision',
      'Transfer Learning',
      'Feature Engineering',
      'Model Evaluation'
    ]
  },
  {
    category: 'SOFTWARE ENGINEERING',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'REST APIs',
      'OOP',
      'Linux',
      'GitHub Actions (CI/CD)',
      'Software Testing (Basic)'
    ]
  },
  {
    category: 'DATA & DATABASES',
    skills: ['Pandas', 'NumPy', 'Supabase']
  },
  {
    category: 'TOOLS & ENVIRONMENTS',
    skills: [
      'Streamlit',
      'Jupyter Notebook',
      'Google Colab',
      'Vertex AI',
      'Gemini',
      'VS Code'
    ]
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    year: '2023 – 2027',
    title: 'B.Tech — Artificial Intelligence & Machine Learning',
    organization: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    roleType: 'Education',
    description:
      'Rigorous academic training in core computer science, mathematics, probability theory, deep learning, and advanced AI methodologies. Currently in final-year studies (Expected 2027).'
  },
  {
    year: 'August 2025',
    title: 'GenAI & Data Analytics Virtual Internship',
    organization: 'Tata iQ',
    roleType: '6-Hour Virtual Internship',
    description:
      'Completed a 6-hour virtual internship focused on GenAI and Data Analytics: exploratory data analysis using Generative AI tools to detect customer delinquency risk patterns, predictive approaches for risk segmentation, and Explainable AI (XAI) principles in enterprise business analytics.'
  },
  {
    year: 'June 2026 – August 2026',
    title: 'Artificial Intelligence Intern',
    organization: 'IBM SkillsBuild',
    roleType: 'Virtual Internship',
    description:
      'Hands-on immersion in AI/ML workflows, tools, and Generative AI applications through structured assignments and technical problem sets.'
  },
  {
    year: 'August 2026',
    title: 'Machine Learning Intern',
    organization: 'InAmigos Foundation (IAF)',
    roleType: 'Internship',
    description:
      'Deep exploration of Deep Learning, Supervised/Unsupervised Learning, and Reinforcement Learning; authored structured guides documenting AI workflows.'
  },
  {
    year: '2026',
    title: 'Open Source Contributor',
    organization: 'Termstory (bitflicker64/Termstory)',
    roleType: 'Open Source',
    description:
      'Addressed 20+ review comments across multiple pull requests, hardening configuration parsing, UnicodeDecodeError handling, and shell history reliability.'
  }
];

export const NOW_FOCUS: NowFocusItem[] = [
  { title: 'Machine Learning & Deep Learning', detail: 'Deepening neural network optimization, model evaluation, and feature engineering heuristics.' },
  { title: 'Natural Language Processing & GenAI', detail: 'Building practical semantic search, embedding alignment, and prompt workflows on Vertex AI & Gemini.' },
  { title: 'AI/ML Project Development', detail: 'Developing and scaling modular platforms like ML Copilot Platform and TalentLens AI.' },
  { title: 'Python-Based AI Applications', detail: 'Creating responsive Streamlit and FastAPI developer applications with Docker and Supabase integration.' },
  { title: 'ML Engineering & Infrastructure', detail: 'Refining reproducible training scripts, containerized deployments, and robust error handling.' },
  { title: 'Open-Source Contribution', detail: 'Collaborating on open-source developer tooling and reliability enhancements.' }
];

export const BEYOND_CODE_ITEMS: BeyondCodeItem[] = [
  {
    title: 'Computational Aesthetics',
    subtitle: 'Where algorithmic precision meets visual harmony',
    notes: 'A deep appreciation for the duality of rigorous engineering and clean aesthetic presentation. Mathematical models benefit from clear visual interfaces, just as complex AI systems require transparent, human-centered design.',
    quote: 'Simplicity is the ultimate sophistication.'
  },
  {
    title: 'Open Source & Craft',
    subtitle: 'Iterative refinement as professional practice',
    notes: 'Reviewing pull requests, handling Unicode edge cases, and defending against subtle failure modes in production software. Engineering excellence is forged through feedback loops, peer reviews, and respectful collaboration.',
    quote: 'Write code as if the person who maintains it is a violent psychopath who knows where you live.'
  },
  {
    title: 'Systems & Curiosity',
    subtitle: 'Understanding mechanisms from first principles',
    notes: 'From transformer attention matrices to distributed deployment architectures and containerized runtimes. Continual curiosity about how software layers compose and how AI can solve non-trivial human problems.',
    quote: 'The best way to understand something is to build it.'
  }
];

