import { SectionTag } from './SectionTag';

const beforeItems = [
  "Sending applications into silence with zero feedback",
  "A CV that looks fine but never converts to interviews",
  "Winging interviews and losing to less qualified candidates",
  "Invisible to recruiters who would love to hire you",
  "No one around you who truly understands the struggle",
  "Months passing. Confidence dropping. Bills mounting.",
  "Applying. Hoping. Waiting. Repeating. Going nowhere."
];

const afterItems = [
  "A clear strategy that generates real responses and callbacks",
  "A CV built to pass ATS and stop recruiters mid-scroll",
  "Interview confidence that wins rooms and lands offers",
  "Positioned so recruiters and companies come looking for you",
  "A community of driven people pushing you forward daily",
  "Momentum, clarity and results you can finally see and feel",
  "Opportunities finding you — not the other way around"
];

export const TransformationSection = () => {
  return (
    <section className="py-[120px] px-6 bg-purple-pale text-center">
      <SectionTag variant="purple">The Shift</SectionTag>
      <h2 className="font-display text-[clamp(30px,4.5vw,50px)] font-black text-deep max-w-[680px] mx-auto mb-4 leading-[1.15]">
        This is what changes the moment you join Hire Circa.
      </h2>
      <p className="text-lg text-deep/60 max-w-[500px] mx-auto mb-16 leading-relaxed">
        One investment. One decision. A completely different career trajectory.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-[880px] mx-auto">
        <div className="bg-white border border-gray-200 rounded-[26px] p-10 text-left">
          <div className="text-[11px] tracking-[2px] uppercase font-bold text-gray-400 mb-6">❌ Without Hire Circa</div>
          <ul className="space-y-4">
            {beforeItems.map((item, i) => (
              <li key={i} className="text-[15px] text-gray-500 leading-snug flex items-start gap-3">
                <span className="text-base shrink-0 mt-0.5">😔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-primary to-purple-light rounded-[26px] p-10 text-left shadow-[0_20px_56px_rgba(124,58,237,0.3)]">
          <div className="text-[11px] tracking-[2px] uppercase font-bold text-white/65 mb-6">✅ With Hire Circa</div>
          <ul className="space-y-4">
            {afterItems.map((item, i) => (
              <li key={i} className="text-[15px] text-white/90 leading-snug flex items-start gap-3 font-medium">
                <span className="text-base shrink-0 mt-0.5">🔥</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
