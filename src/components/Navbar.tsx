import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-10 py-4 flex items-center justify-between bg-white/93 backdrop-blur-lg border-b border-purple-primary/10">
      <div className="flex items-center gap-2.5">
        <img 
          src="https://res.cloudinary.com/dlopaynla/image/upload/f_auto,q_auto/Media_11_ftboxu" 
          alt="Hire Circa Logo" 
          className="w-[34px] h-[34px] object-contain"
          referrerPolicy="no-referrer"
        />
        <span className="font-bold text-[17px] bg-gradient-to-br from-purple-primary to-purple-light bg-clip-text text-transparent">
          Hire Circa
        </span>
      </div>
      <motion.a 
        href="https://nestuge.com/hirecirca"
        whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(124,58,237,0.4)" }}
        className="bg-gradient-to-br from-purple-primary to-purple-light text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_4px_16px_rgba(124,58,237,0.3)] transition-all"
      >
        Join Now — ₦15,000
      </motion.a>
    </nav>
  );
};
