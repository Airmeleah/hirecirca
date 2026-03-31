import { SectionTag } from './SectionTag';

export const RealitySection = () => {
  return (
    <section className="bg-[#0d0214] py-[120px] px-6 text-center relative overflow-hidden">
      <div className="absolute w-[700px] h-[700px] rounded-full bg-radial from-purple-primary/15 to-transparent -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10">
        <SectionTag variant="light">Let's Be Honest</SectionTag>
        <h2 className="font-display text-[clamp(34px,5.5vw,60px)] font-black text-white max-w-[760px] mx-auto mb-6 leading-[1.1]">
          Job hunting right now<br />is <span className="text-purple-400 italic">genuinely depressing.</span>
        </h2>
        <p className="text-lg text-white/60 max-w-[620px] mx-auto mb-[60px] leading-relaxed">
          Nobody wants to say it out loud. So we will. Because pretending it isn't hard doesn't help you. Understanding why it's hard — and fixing it — does.
        </p>

        <div className="max-w-[720px] mx-auto bg-white/5 border border-white/10 rounded-[28px] p-[52px] text-left">
          <p className="text-[17px] text-white/75 leading-relaxed mb-5">
            You wake up. You open your laptop. You spend <strong>three hours tailoring your CV</strong> to a role that fits you perfectly. You hit apply. You close the tab. You tell yourself today feels different.
          </p>
          <p className="text-[17px] text-white/75 leading-relaxed mb-5">
            Three weeks later — <strong>nothing.</strong> Not a rejection. Not a "we'll be in touch." Just silence. The kind of silence that makes you question everything. Your degree. Your experience. Your worth.
          </p>
          <p className="text-[17px] text-white/75 leading-relaxed mb-5">
            You've sent over 50 applications this month alone. You've rewritten your CV six times. You've had to borrow money. You've smiled through conversations that broke you inside. You've told your family <em>"something is coming soon"</em> until you started not believing it yourself.
          </p>
          <p className="text-[17px] text-white/75 leading-relaxed">
            And the worst part? You're doing everything right by your own understanding. You're applying. You're showing up. And still — silence.
          </p>
          <p className="text-[17px] text-white/75 leading-relaxed mt-5">
            <strong className="text-white">This is not a you problem. This is a strategy problem.</strong> The people getting hired aren't always the most qualified. They're the ones who know how to navigate the system. That is exactly what Hire Circa teaches you.
          </p>
        </div>

        <blockquote className="max-w-[680px] mx-auto mt-[60px] font-display text-[clamp(22px,3.5vw,34px)] italic font-bold text-white/90 leading-tight">
          "Every month without a job is not just lost income.<br />
          It is lost <span className="text-purple-400">confidence, dignity and time</span> you will never get back."
        </blockquote>
      </div>
    </section>
  );
};
