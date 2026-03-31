import { motion } from 'motion/react';

export const FinalCTA = () => {
  return (
    <section className="py-[140px] px-6 bg-gradient-to-br from-deep via-[#4c1d95] to-purple-primary text-center relative overflow-hidden">
      {/* Decorative Rings */}
      <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[1100px] h-[1100px] border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10">
        <h2 className="font-display text-[clamp(36px,6vw,68px)] font-black text-white max-w-[760px] mx-auto mb-6 leading-[1.08]">
          The job you deserve<br />is waiting for<br /><span className="text-purple-200 italic">the right version of you.</span>
        </h2>
        <p className="text-[19px] text-white/65 max-w-[560px] mx-auto mb-[52px] leading-relaxed">
          You have the qualifications. You have the drive. What you've been missing is the strategy, the insider knowledge and people in your corner who actually understand what you're going through.<br /><br />
          That ends today. Hire Circa is your turning point. 💜
        </p>
        
        <motion.a 
          href="https://nestuge.com/hirecirca"
          whileHover={{ y: -4, boxShadow: "0 22px 56px rgba(0,0,0,0.3)" }}
          className="inline-block bg-white text-purple-primary px-16 py-[22px] rounded-full text-[19px] font-bold shadow-[0_14px_44px_rgba(0,0,0,0.25)] transition-all"
        >
          Join Hire Circa — ₦15,000 →
        </motion.a>
        
        <p className="mt-[22px] text-sm text-white/35">
          One-time investment · Lifetime access · For skilled professionals only
        </p>
      </div>
    </section>
  );
};
