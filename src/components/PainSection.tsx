import { SectionTag } from './SectionTag';

const pains = [
  { emoji: "😶", text: "<strong>You've applied to over 50 roles</strong> and received zero feedback. Not a rejection. Just silence. The kind that slowly eats at you." },
  { emoji: "📄", text: "<strong>You've rewritten your CV multiple times</strong> based on contradictory advice — and it is still not working." },
  { emoji: "💸", text: "<strong>Every day without a job</strong> is money you don't have. Bills don't pause. Rent doesn't care. The pressure is relentless." },
  { emoji: "🎯", text: "<strong>You get to interviews</strong> but something keeps going wrong. You undersell yourself. You blank out. You lose to less qualified people." },
  { emoji: "😔", text: "<strong>Your confidence is dropping.</strong> What started as a job search has become a daily battle with self-doubt." },
  { emoji: "🕵️", text: "<strong>You have no idea</strong> what recruiters actually want. You're guessing. And guessing costs you opportunities every day." }
];

export const PainSection = () => {
  return (
    <section className="bg-deep py-[120px] px-6 text-center relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial from-purple-light/12 to-transparent -top-[150px] left-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10">
        <SectionTag variant="light">Do Any of These Sound Familiar?</SectionTag>
        <h2 className="font-display text-[clamp(34px,5.5vw,58px)] font-black text-white max-w-[700px] mx-auto mb-5 leading-[1.1]">
          The job hunting struggle<br />is <span className="text-purple-400 italic">real</span> — and we see you.
        </h2>
        <p className="text-lg text-white/55 max-w-[560px] mx-auto mb-16 leading-relaxed">
          You are not lazy. You are not unqualified. You are operating without the right information. Here is what that looks like.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[960px] mx-auto">
          {pains.map((pain, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-[22px] p-[30px] text-left transition-colors hover:bg-white/10 hover:border-purple-400/25">
              <div className="text-3xl mb-4">{pain.emoji}</div>
              <p className="text-[15px] text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: pain.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
