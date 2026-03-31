export const Footer = () => {
  return (
    <footer className="bg-[#0d0214] py-11 px-6 text-center">
      <div className="flex items-center justify-center gap-2.5 mb-3.5">
        <img 
          src="https://res.cloudinary.com/dlopaynla/image/upload/f_auto,q_auto/Media_11_ftboxu" 
          alt="" 
          className="w-7 h-7 object-contain opacity-60"
          referrerPolicy="no-referrer"
        />
        <span className="font-bold text-[15px] text-white/60">Hire Circa</span>
      </div>
      <p className="text-[13px] text-white/25">
        © 2026 Hire Circa · @hirecirca · For skilled professionals only 💜
      </p>
    </footer>
  );
};
