import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'sakura' | 'matcha' | 'lavender' | 'neutral';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ 
  children, 
  variant = 'neutral', 
  className = '' 
}) => {
  const variantStyles = {
    neutral: 'bg-canvas border-ink-border text-ink-muted',
    sakura: 'bg-sakura-light/40 border-sakura/50 text-sakura-deep',
    matcha: 'bg-matcha-light/40 border-matcha/50 text-matcha-deep',
    lavender: 'bg-lavender-light/40 border-lavender/50 text-lavender-deep',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
