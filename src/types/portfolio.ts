export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  stack: string[];
  description: string;
  bullets: string[];
  liveDemoUrl: string;
  githubUrl?: string; // only if project-specific repository exists
  category: string;
}

export interface ContributionItem {
  id: string;
  area: string;
  title: string;
  description: string;
  impact: string;
}

export interface OpenSourceProject {
  title: string;
  language: string;
  role: string;
  summary: string;
  details: string[];
  upstreamUrl: string;
  upstreamName: string;
  forkUrl: string;
  commitsUrl: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  expectedGraduation: string;
  status: string;
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface JourneyStep {
  year: string;
  title: string;
  organization: string;
  roleType: string;
  description: string;
}

export interface NowFocusItem {
  title: string;
  detail: string;
}

export interface BeyondCodeItem {
  title: string;
  subtitle: string;
  notes: string;
  quote?: string;
}

