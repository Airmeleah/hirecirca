import { SectionTag } from './SectionTag';
import { motion } from 'motion/react';

const pillars = [
  {
    num: "01",
    title: "Build Your Professional Brand",
    desc: "We show you how to present your profile, your narrative and your value in a way that makes you magnetic to the companies and recruiters you actually want."
  },
  {
    num: "02",
    title: "Speak the Language of Recruiters",
    desc: "Recruiters search in a specific way. We teach you the exact language, keywords and positioning that gets you surfaced ahead of every other candidate."
  },
  {
    num: "03",
    title: "Build Credibility That Travels",
    desc: "Your reputation should work for you 24 hours a day. We show you how to build a presence so strong your name starts circulating in rooms you haven't entered yet."
  },
  {
    num: "04",
    title: "Turn Visibility Into Opportunity",
    desc: "Being seen is not enough. We teach you how to convert that visibility into conversations, interviews and actual offers — consistently and predictably."
  }
];

export const PositioningSection = () => {
  return (
    <section className="bg-white py-[120px] px-6 text-center">
      <SectionTag variant="purple">The Game Changer</SectionTag>
      <h2 className="font-display text-[clamp(32px,5vw,54px)] font-black text-deep max-w-[760px] mx-auto mb-5 leading-[1.15]">
        What if <span className="text-purple-primary italic">recruiters were the ones</span><br />sending you job offers?
      </h2>
      <p className="text-lg text-gray-500 max-w-[580px] mx-auto mb-16 leading-relaxed">
        The most powerful career shift isn't sending better applications. It's positioning yourself so strategically — your profile, your presence, your professional brand — that opportunities come directly to you.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-[1000px] mx-auto mb-16 items-center text-left">
        <div className="space-y-5">
          <h3 className="font-display text-3xl font-black text-deep leading-tight">
            There is a way to position yourself so that <span className="text-purple-primary italic">you never have to chase again.</span>
          </h3>
          <p className="text-gray-500 leading-relaxed">
            The best candidates aren't applying to hundreds of jobs. They've built themselves up in a way that makes them impossible to ignore. Recruiters find them. Companies reach out to them.
          </p>
          <p className="text-gray-500 leading-relaxed">
            <strong className="text-text-main">This is not luck. This is positioning.</strong> And it is a skill that can be learned, practised and mastered — regardless of where you are in your career right now.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Inside Hire Circa, we teach you how to present yourself — your story, your value, your expertise — in a way that makes you magnetic. <strong>You stop chasing and start being chosen.</strong>
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-primary to-purple-light rounded-[28px] p-10 text-left shadow-[0_20px_56px_rgba(124,58,237,0.3)]">
          <div className="text-[10px] tracking-[2px] uppercase text-white/60 font-bold mb-4">💜 What strategic positioning creates</div>
          <div className="font-display text-2xl font-black text-white mb-6 leading-tight">From chasing jobs to<br />recruiters chasing you</div>
          <ul className="space-y-3.5">
            {[
              { icon: "🔍", text: "Recruiters find and contact you directly" },
              { icon: "📩", text: "Job offer messages start arriving unsolicited" },
              { icon: "🤝", text: "Companies approach you before roles are public" },
              { icon: "📈", text: "Your professional visibility grows organically" },
              { icon: "⚡", text: "You become the candidate companies compete for" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium leading-relaxed">
                <span className="w-[30px] h-[30px] rounded-lg bg-white/20 flex items-center justify-center shrink-0">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
        {pillars.map((pillar, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -6 }}
            className="bg-purple-pale border border-purple-primary/10 rounded-[20px] p-7 text-left transition-shadow hover:shadow-[0_16px_40px_rgba(124,58,237,0.1)]"
          >
            <div className="font-display text-5xl font-black leading-none text-purple-primary/12 mb-2.5">{pillar.num}</div>
            <h4 className="text-[17px] font-bold text-deep mb-2">{pillar.title}</h4>
            <p className="text-[13.5px] text-gray-500 leading-relaxed">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
