import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Star, GitFork } from 'lucide-react';

interface GitHubProfile {
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface DayContribution {
  date: string;
  count: number;
  level: number;
}

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

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const DigitalGarden: React.FC = () => {
  const [activeYear, setActiveYear] = useState<'2026' | '2025'>('2026');
  const [profile, setProfile] = useState<GitHubProfile>({
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
    contributions: DayContribution[];
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

  const calCardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress: calScroll } = useScroll({
    target: calCardRef,
    offset: ['start end', 'center center']
  });

  // Dimensional Surface (Requirement 20):
  // Entering: rotateX(5deg), translateY(60px), translateZ(-40px), scale(0.96)
  // Center: rotateX(0), translateY(0), translateZ(0), scale(1)
  const calRotateX = useTransform(calScroll, [0, 1], shouldReduceMotion ? [0, 0] : [5, 0]);
  const calY = useTransform(calScroll, [0, 1], shouldReduceMotion ? [0, 0] : [60, 0]);
  const calZ = useTransform(calScroll, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 0]);
  const calScale = useTransform(calScroll, [0, 1], shouldReduceMotion ? [1, 1] : [0.96, 1]);

  // Fetch real GitHub profile info
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
      .catch(() => {
        // Fallback already configured
      });
  }, []);

  // Fetch real GitHub contribution calendar data
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
      .catch(() => {
        // Fallback already configured
      });
  }, []);

  // Filter contributions for selected year
  const activeYearContributions = React.useMemo(() => {
    const list = contributionsData.contributions.filter((item) =>
      item.date.startsWith(activeYear)
    );
    if (list.length > 0) return list;

    // Generated calendar template if offline or loading (52 weeks x 7 days)
    const fallbackDays: DayContribution[] = [];
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

  // Total count for the active year
  const totalCount = contributionsData.total[activeYear] ?? (activeYear === '2026' ? 346 : 33);

  // Helper to color cells based on contribution level
  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#DCE5D2]'; // very pale matcha
      case 2:
        return 'bg-[#AFC29E]'; // light matcha
      case 3:
        return 'bg-[#879B72]'; // medium matcha
      case 4:
        return 'bg-[#465640]'; // deep matcha
      default:
        return 'bg-[#EBE2DA]/50'; // very pale ivory/gray for no contributions
    }
  };

  return (
    <section id="github" className="py-28 md:py-44 border-t border-ink-divider/40 bg-[#FFF9F5] relative scroll-mt-20">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start scene-perspective">
          
          {/* PART 1: Heading, GitHub Link & Year Selector (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-7 preserve-3d"
          >
            <div>
              <div className="font-mono text-xs text-[#615A54] tracking-widest uppercase mb-4 font-medium">
                MY DIGITAL GARDEN
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] font-light tracking-tight leading-snug text-hover-pop">
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
          </motion.div>

          {/* PART 2: GitHub Profile Information Panel (Middle Column) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 p-6 rounded-2xl border border-[#EBE2DA] bg-[#FFF9F5] space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] preserve-3d transition-all duration-300 hover:shadow-[0_8px_24px_rgba(41,39,37,0.04)] hover:-translate-y-0.5"
          >
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
                <span className="text-[#292725] font-semibold">{totalCount}</span>
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
                href="https://github.com/Urvity03"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#292725] hover:text-[#879B72] transition-colors"
              >
                <span>VIEW GITHUB PROFILE</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* PART 3: Contribution Activity Calendar Grid (Right Column) */}
          <motion.div
            ref={calCardRef}
            style={{
              rotateX: calRotateX,
              y: calY,
              z: calZ,
              scale: calScale,
              transformStyle: 'preserve-3d'
            }}
            className="lg:col-span-5 p-6 rounded-2xl border border-[#EBE2DA] bg-[#FFF9F5] space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] relative preserve-3d transition-all duration-300 hover:shadow-[0_12px_32px_rgba(41,39,37,0.06)] will-change-transform"
          >
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="uppercase tracking-wider text-[#615A54] font-semibold">
                CONTRIBUTION ACTIVITY
              </span>
              <span className="text-[#879B72]">
                {totalCount} contributions in {activeYear}
              </span>
            </div>

            {/* Month Labels */}
            <div className="flex justify-between text-[10px] font-mono text-[#9E958E] px-5 select-none">
              {MONTH_NAMES.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            {/* Days of Week + 52-Week Contribution Matrix */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 select-none scene-perspective">
              <div className="flex flex-col justify-between text-[9px] font-mono text-[#9E958E] h-20 shrink-0">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Grid: 52 weeks x 7 rows */}
              <div className="min-w-[480px] grid grid-flow-col grid-rows-7 gap-1 py-1 preserve-3d">
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
                    className={`w-2 h-2 rounded-[1px] ${getCellColor(item.level)} depth-relief-${Math.min(item.level, 4)} transition-all duration-200 hover:scale-125 hover:z-20 hover:shadow-[0_2px_6px_rgba(0,0,0,0.15)] cursor-pointer`}
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
          </motion.div>

        </div>

        {/* FEATURED REPOSITORIES LIST (Below the Three-Part Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 pt-10 border-t border-[#EBE2DA]/60 space-y-4"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#615A54] block font-semibold">
            FEATURED REPOSITORIES
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 scene-perspective">
            {FEATURED_REPOSITORIES.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-[#EBE2DA] bg-[#FFF9F5] space-y-2.5 hover:border-[#879B72]/60 hover:shadow-[0_8px_24px_rgba(41,39,37,0.04)] hover:-translate-y-0.5 transition-all duration-300 block group preserve-3d"
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
        </motion.div>

      </div>
    </section>
  );
};
