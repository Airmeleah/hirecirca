import { motion } from 'motion/react';
import { SectionTag } from './SectionTag';

const includes = [
  "CV Review & Professional Support",
  "Interview Preparation & Practice",
  "Live Career Strategy Sessions",
  "Recruiter Insider Tips & Insights",
  "Curated Job Alerts for Skilled Professionals",
  "Upskilling & Career Training Resources",
  "Supportive Community of Driven Professionals",
  "Strategic Positioning — So Recruiters Come to You"
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-[120px] px-6 bg-purple-pale text-center">
      <SectionTag variant="purple">Your Investment</SectionTag>
      <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-black text-deep max-w-[640px] mx-auto mb-4 leading-[1.15]">
        One decision that changes the entire trajectory of your career.
      </h2>
      <p className="text-lg text-deep/60 mb-[60px]">
        Everything. One price. No monthly fees. No hidden charges. Ever.
      </p>

      <div className="max-w-[560px] mx-auto bg-gradient-to-br from-purple-primary to-[#6d28d9] rounded-[36px] p-10 sm:p-[60px] relative overflow-hidden shadow-[0_28px_72px_rgba(124,58,237,0.4)]">
        {/* Decorative Circle */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-white/10 -top-[200px] -right-[200px] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-block bg-white/15 border border-white/25 rounded-full px-5 py-[7px] text-[12px] text-white font-semibold tracking-[1.5px] uppercase mb-8">
            💜 Hire Circa Full Membership — Lifetime Access
          </div>
          
          <div className="mb-2.5">
            <span className="text-4xl text-white/80 align-top mt-4 inline-block">₦</span>
            <span className="font-display text-[82px] font-black text-white leading-none">15,000</span>
          </div>
          
          <p className="text-base text-white/55 mb-10 font-medium">
            One-time payment · Instant access · No recurring fees · Ever
          </p>

          <ul className="text-left mb-11 space-y-4">
            {includes.map((item, i) => (
              <li key={i} className="flex items-center gap-3.5 text-base text-white/90 font-medium">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[12px] shrink-0 text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <motion.a 
            href="https://nestuge.com/hirecirca"
            whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(0,0,0,0.25)" }}
            className="block w-full bg-white text-purple-primary py-5 rounded-full text-lg font-bold shadow-[0_10px_32px_rgba(0,0,0,0.2)] transition-all"
          >
            Yes — I'm Investing in My Career Today →
          </motion.a>
          
          <p className="text-[13px] text-white/40 mt-[18px]">
            Secure payment · Instant access · For skilled professionals only 💜
          </p>
        </div>
      </div>
    </section>
  );
};
