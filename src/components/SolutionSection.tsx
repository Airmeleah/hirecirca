import { SectionTag } from './SectionTag';
import { motion } from 'motion/react';

const features = [
  { icon: "📄", title: "CV Review & Support", desc: "We don't just give tips — we show you exactly how to rebuild your CV the way recruiters screen it. ATS-ready and impossible to ignore." },
  { icon: "🎯", title: "Interview Preparation", desc: "Practice the real questions. Learn how to structure answers that demonstrate your value, handle pressure and walk out knowing you gave your best." },
  { icon: "📡", title: "Live Strategy Sessions", desc: "Real-time group sessions breaking down what is working right now in the job market. Live. Interactive. No fluff." },
  { icon: "🔍", title: "Recruiter Insights & Tips", desc: "Insider knowledge on how recruiters think, what triggers instant rejection and what makes a candidate impossible to overlook." },
  { icon: "💼", title: "Curated Job Alerts", desc: "Targeted opportunities sent directly to you so you apply early, to the right roles, before the flood of applications." },
  { icon: "🚀", title: "Upskilling & Training", desc: "Build the skills that make you not just hireable — but competitive. The candidate companies fight over is the best prepared." },
  { icon: "🤝", title: "Supportive Community", desc: "Surround yourself with driven professionals on the same journey. Accountability. Shared wins. Real support." }
];

export const SolutionSection = () => {
  return (
    <section className="py-[120px] px-6 bg-white text-center">
      <SectionTag variant="purple">The Solution</SectionTag>
      <h2 className="font-display text-[clamp(32px,5vw,54px)] font-black text-deep max-w-[700px] mx-auto mb-[18px] leading-[1.15]">
        Everything you need to go from<br /><span className="text-purple-primary italic">overlooked</span> to undeniable.
      </h2>
      <p className="text-lg text-gray-500 max-w-[540px] mx-auto mb-[72px] leading-relaxed">
        Hire Circa gives you the exact training, insider knowledge, tools and support that top candidates use — and nobody talks about publicly.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[22px] max-w-[1020px] mx-auto">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-[#faf5ff] to-[#f3eeff] border border-purple-primary/10 rounded-[26px] p-[34px] text-left relative overflow-hidden transition-shadow hover:shadow-[0_22px_52px_rgba(124,58,237,0.12)]"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-primary to-purple-light" />
            <div className="w-[54px] h-[54px] bg-gradient-to-br from-purple-primary to-purple-light rounded-xl flex items-center justify-center text-[22px] mb-[22px] shadow-[0_6px_20px_rgba(124,58,237,0.3)]">
              {feature.icon}
            </div>
            <h3 className="font-display text-[22px] font-bold text-deep mb-2.5">{feature.title}</h3>
            <p className="text-[14.5px] text-gray-500 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
