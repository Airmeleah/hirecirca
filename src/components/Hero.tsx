import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#faf5ff] via-[#f3eeff] to-[#ede9fe] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute w-[500px] h-[500px] border border-purple-primary/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[800px] h-[800px] border border-purple-primary/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[1100px] h-[1100px] border border-purple-primary/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial from-purple-light/20 to-transparent -top-[100px] left-1/2 -translate-x-1/2 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full px-5 py-2 text-[13px] text-purple-primary font-semibold mb-7"
      >
        <span className="w-2 h-2 bg-purple-light rounded-full animate-pulse-dot" />
        For Skilled Professionals Who Are Done Playing Small
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[clamp(44px,7vw,80px)] font-black leading-[1.05] text-deep max-w-[860px] mb-6"
      >
        You Are Not the Problem.<br />
        <span className="italic bg-gradient-to-br from-purple-primary to-purple-light bg-clip-text text-transparent">Your Strategy Is.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[clamp(16px,2.5vw,20px)] text-deep/65 max-w-[600px] leading-relaxed mb-11"
      >
        Hire Circa is the premium career training platform that gives you the CV expertise, interview mastery, recruiter insider knowledge and community support to stop being overlooked — and start being chosen.
      </motion.p>

      <motion.a 
        href="https://nestuge.com/hirecirca"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-purple-primary to-purple-light text-white px-12 py-5 rounded-full text-lg font-bold shadow-[0_10px_36px_rgba(124,58,237,0.4)]"
      >
        Yes — I'm Ready to Change This →
      </motion.a>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-deep/45 mt-4 font-medium"
      >
        One-time investment of <strong className="text-purple-primary">₦15,000</strong> · Lifetime access · No recurring fees
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-10 sm:gap-[60px] mt-[72px] pt-11 border-t border-purple-primary/12"
      >
        <div className="text-center">
          <div className="font-display text-4xl font-black bg-gradient-to-br from-purple-primary to-purple-light bg-clip-text text-transparent">1.5K+</div>
          <div className="text-[13px] text-deep/50 font-medium mt-1">Professionals Reached</div>
        </div>
        <div className="text-center">
          <div className="font-display text-4xl font-black bg-gradient-to-br from-purple-primary to-purple-light bg-clip-text text-transparent">7</div>
          <div className="text-[13px] text-deep/50 font-medium mt-1">Powerful Resources</div>
        </div>
        <div className="text-center">
          <div className="font-display text-4xl font-black bg-gradient-to-br from-purple-primary to-purple-light bg-clip-text text-transparent">₦15K</div>
          <div className="text-[13px] text-deep/50 font-medium mt-1">One-Time. Forever.</div>
        </div>
      </motion.div>
    </section>
  );
};
