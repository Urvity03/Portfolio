import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  category?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  category,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        {align === 'center' && <div className="h-px w-8 bg-ink-divider" />}
        <span className="font-mono text-xs tracking-mega-wide text-sakura-deep font-medium">
          {number}
        </span>
        <span className="text-ink-divider">/</span>
        {category && (
          <span className="font-mono text-[11px] uppercase tracking-wider text-matcha-deep">
            {category}
          </span>
        )}
        <div className="h-px flex-1 bg-ink-divider" />
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink font-normal tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-ink-muted text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
