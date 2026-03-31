import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface PriceBarProps {
  variant: 'light' | 'purple' | 'pale' | 'dark-glass';
  text: React.ReactNode;
  amount?: string;
  buttonText?: string;
  href?: string;
}

export const PriceBar = ({ variant, text, amount, buttonText = "Join Now →", href = "https://nestuge.com/hirecirca" }: PriceBarProps) => {
  const styles = {
    light: "bg-deep text-white/80",
    purple: "bg-gradient-to-r from-purple-primary to-purple-light text-white/80",
    pale: "bg-purple-pale border-y border-purple-primary/10 text-deep/70",
    'dark-glass': "bg-white/5 border-y border-white/10 text-white/65",
  };

  const btnStyles = {
    light: "bg-gradient-to-r from-purple-primary to-purple-light text-white shadow-[0_4px_18px_rgba(124,58,237,0.4)]",
    purple: "bg-white text-purple-primary shadow-[0_4px_18px_rgba(0,0,0,0.15)]",
    pale: "bg-gradient-to-r from-purple-primary to-purple-light text-white shadow-[0_4px_18px_rgba(124,58,237,0.3)]",
    'dark-glass': "bg-gradient-to-r from-purple-primary to-purple-light text-white shadow-[0_4px_18px_rgba(124,58,237,0.4)]",
  };

  return (
    <div className={cn("py-6 px-6 flex flex-wrap items-center justify-center gap-6 text-center", styles[variant])}>
      <span className="text-[15px] font-medium leading-relaxed">
        {text}
      </span>
      
      {amount && (
        <>
          <div className={cn("hidden sm:block w-px h-[30px]", variant === 'pale' ? "bg-purple-primary/15" : "bg-white/15")} />
          <span className={cn(
            "font-display text-[30px] font-black whitespace-nowrap",
            variant === 'light' || variant === 'dark-glass' ? "bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent" : 
            variant === 'purple' ? "text-white" : "bg-gradient-to-r from-purple-primary to-purple-light bg-clip-text text-transparent"
          )}>
            {amount}
          </span>
        </>
      )}

      <div className={cn("hidden sm:block w-px h-[30px]", variant === 'pale' ? "bg-purple-primary/15" : "bg-white/15")} />
      
      <motion.a 
        href={href}
        whileHover={{ y: -2 }}
        className={cn("px-7 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all", btnStyles[variant])}
      >
        {buttonText}
      </motion.a>
    </div>
  );
};
