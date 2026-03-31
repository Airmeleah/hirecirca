const items = [
  "CV Review & Support",
  "Live Strategy Sessions",
  "Interview Preparation",
  "Recruiter Insider Tips",
  "Job Alerts",
  "Career Upskilling",
  "Supportive Community",
  "For Skilled Professionals Only"
];

export const Ticker = () => {
  return (
    <div className="mt-[72px] bg-gradient-to-br from-purple-primary to-purple-light py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-ticker">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="text-[13px] font-semibold text-white/85 tracking-wider uppercase px-8">
            {item} <span className="text-white/30 ml-8">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
