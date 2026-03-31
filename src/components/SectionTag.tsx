import React from 'react';
import { cn } from '../lib/utils';

interface SectionTagProps {
  children: React.ReactNode;
  variant?: 'light' | 'purple';
  className?: string;
}

export const SectionTag = ({ children, variant = 'purple', className }: SectionTagProps) => {
  const variants = {
    light: 'bg-purple-light/20 text-purple-400 border-purple-light/30',
    purple: 'bg-purple-primary/10 text-purple-primary border-purple-primary/20',
  };

  return (
    <span className={cn(
      "inline-block px-[18px] py-[6px] rounded-full text-[11px] tracking-[2.5px] uppercase font-bold mb-5 border",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
