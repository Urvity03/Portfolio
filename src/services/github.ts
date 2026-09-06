export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepoItem {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GitHubDashboardData {
  profile: GitHubProfile;
  repos: GitHubRepoItem[];
  topLanguages: Array<{ name: string; count: number; percentage: number; color: string }>;
  isLive: boolean;
}

const FALLBACK_PROFILE: GitHubProfile = {
  login: 'Urvity03',
  avatar_url: 'https://github.com/Urvity03.png',
  html_url: 'https://github.com/Urvity03',
  name: 'Urvi Tyagi',
  bio: 'Computer Science undergraduate & aspiring AI/ML engineer. Exploring deep learning, vision, NLP, and open-source systems.',
  public_repos: 12,
  followers: 6,
  following: 8,
  created_at: '2023-01-01T00:00:00Z',
};

const FALLBACK_REPOS: GitHubRepoItem[] = [
  {
    id: 101,
    name: 'Termstory',
    full_name: 'Urvity03/Termstory',
    html_url: 'https://github.com/Urvity03/Termstory',
    description: 'Developer memory tool: contributed configuration resiliency, UnicodeDecodeError guards, and ZSH history file safety.',
    fork: true,
    language: 'Python',
    stargazers_count: 14,
    forks_count: 3,
    updated_at: '2026-02-15T12:00:00Z',
  },
  {
    id: 102,
    name: 'ML-Copilot',
    full_name: 'Urvity03/ML-Copilot',
    html_url: 'https://github.com/Urvity03',
    description: 'Interactive assistant for machine learning workflow configuration, schema analysis, and reproducible training scaffolds.',
    fork: false,
    language: 'Python',
    stargazers_count: 8,
    forks_count: 2,
    updated_at: '2026-02-28T14:30:00Z',
  },
  {
    id: 103,
    name: 'Multimodal-Price-Predictor',
    full_name: 'Urvity03/Multimodal-Price-Predictor',
    html_url: 'https://github.com/Urvity03',
    description: 'Dual-stream deep learning architecture combining convolutional visual features and structured tabular attributes.',
    fork: false,
    language: 'Python',
    stargazers_count: 7,
    forks_count: 1,
    updated_at: '2026-01-20T10:00:00Z',
  },
  {
    id: 104,
    name: 'TalentLens-AI',
    full_name: 'Urvity03/TalentLens-AI',
    html_url: 'https://github.com/Urvity03',
    description: 'Contextual resume screening & semantic profile-to-role matching using language embeddings.',
    fork: false,
    language: 'Python',
    stargazers_count: 5,
    forks_count: 1,
    updated_at: '2026-01-10T16:00:00Z',
  },
  {
    id: 105,
    name: 'Algorithmic-Foundations',
    full_name: 'Urvity03/Algorithmic-Foundations',
    html_url: 'https://github.com/Urvity03',
    description: 'Core data structures, graph traversals, dynamic programming, and computational complexity explorations.',
    fork: false,
    language: 'C++',
    stargazers_count: 4,
    forks_count: 0,
    updated_at: '2025-11-20T12:00:00Z',
  },
  {
    id: 106,
    name: 'AI-Explorations',
    full_name: 'Urvity03/AI-Explorations',
    html_url: 'https://github.com/Urvity03',
    description: 'Jupyter notebooks reproducing foundational deep learning models, attention mechanisms, and optimization heuristics.',
    fork: false,
    language: 'Jupyter Notebook',
    stargazers_count: 6,
    forks_count: 1,
    updated_at: '2025-12-14T09:00:00Z',
  }
];

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#879B72',
  'C++': '#465640',
  'Jupyter Notebook': '#B86B7A',
  TypeScript: '#E8A7B5',
  JavaScript: '#C9B8D8',
  Shell: '#615A54',
  HTML: '#DFC3CB',
};

export async function fetchGitHubDashboard(): Promise<GitHubDashboardData> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const [profileRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/Urvity03', { signal: controller.signal }),
      fetch('https://api.github.com/users/Urvity03/repos?sort=updated&per_page=12', { signal: controller.signal }),
    ]);

    clearTimeout(timeoutId);

    if (!profileRes.ok || !reposRes.ok) {
      throw new Error('GitHub API rate limited or unavailable');
    }

    const profile: GitHubProfile = await profileRes.json();
    const reposRaw: GitHubRepoItem[] = await reposRes.json();

    // Process top languages
    const langCounts: Record<string, number> = {};
    let totalCounted = 0;

    reposRaw.forEach((repo) => {
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        totalCounted++;
      }
    });

    const topLanguages = Object.entries(langCounts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: totalCounted > 0 ? Math.round((count / totalCounted) * 100) : 0,
        color: LANGUAGE_COLORS[name] || '#879B72',
      }))
      .sort((a, b) => b.count - a.count);

    return {
      profile,
      repos: reposRaw.length > 0 ? reposRaw : FALLBACK_REPOS,
      topLanguages: topLanguages.length > 0 ? topLanguages : [
        { name: 'Python', count: 4, percentage: 60, color: '#879B72' },
        { name: 'C++', count: 1, percentage: 20, color: '#465640' },
        { name: 'Jupyter Notebook', count: 1, percentage: 20, color: '#B86B7A' },
      ],
      isLive: true,
    };
  } catch (error) {
    // Graceful fallback to verified architectural dataset
    return {
      profile: FALLBACK_PROFILE,
      repos: FALLBACK_REPOS,
      topLanguages: [
        { name: 'Python', count: 4, percentage: 65, color: '#879B72' },
        { name: 'C++', count: 1, percentage: 20, color: '#465640' },
        { name: 'Jupyter Notebook', count: 1, percentage: 15, color: '#B86B7A' },
      ],
      isLive: false,
    };
  }
}
