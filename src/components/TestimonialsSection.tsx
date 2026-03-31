import { SectionTag } from './SectionTag';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Adenike O.",
    role: "Marketing Professional, Lagos",
    text: "I had been applying for over a year with zero results. After joining Hire Circa and rebuilding my CV the way they showed me, I got 3 interview invites in one week. Night and day difference.",
    initial: "A"
  },
  {
    name: "Tunde B.",
    role: "Finance Analyst, Abuja",
    text: "The live sessions alone are worth ten times what I paid. I finally understand how recruiters actually think and it changed everything — my CV, my interviews, my entire professional presence.",
    initial: "T"
  },
  {
    name: "Chioma E.",
    role: "Project Manager, Port Harcourt",
    text: "I used to think job hunting was luck. Hire Circa showed me it is strategy and positioning. Recruiters started reaching out to me directly. I landed my role 6 weeks after joining.",
    initial: "C"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-[120px] px-6 bg-white text-center">
      <SectionTag variant="purple">Real People. Real Results.</SectionTag>
      <h2 className="font-display text-[clamp(30px,4.5vw,48px)] font-black text-deep mb-3.5">
        What Hire Circa members are saying 💜
      </h2>
      <p className="text-lg text-gray-500 mb-16">
        Skilled professionals who stopped guessing and started winning.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[22px] max-w-[980px] mx-auto">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-purple-pale border border-purple-primary/10 rounded-[26px] p-[34px] text-left"
          >
            <div className="text-amber-500 text-base mb-[18px] tracking-[2px]">★★★★★</div>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-[22px] italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-purple-primary to-purple-light flex items-center justify-center text-base text-white font-bold shrink-0">
                {t.initial}
              </div>
              <div>
                <div className="text-sm font-bold text-deep">{t.name}</div>
                <div className="text-[12px] text-gray-500">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
