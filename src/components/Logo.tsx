"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 md:gap-4 group transition-all duration-300 ${className}`}>
      {/* Futuristic AV Logo */}
      <motion.div 
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
      >
        <Image
          src="/Futuristic_AV_logo_design_black_bg.png"
          alt="AVOIX Symbol"
          fill
          className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          priority
        />
      </motion.div>
      
      {/* AVOIX Text Logo */}
      <motion.div 
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="relative h-7 md:h-9 w-28 md:w-36 flex-shrink-0"
      >
        <Image
          src="/AVOIX_LOGO.png"
          alt="AVOIX"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Logo;
