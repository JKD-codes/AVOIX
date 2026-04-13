"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ title, description, Icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 45, rotateY: -20, z: -200 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 1.2, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        y: -20,
        scale: 1.05,
        rotateX: -10,
        rotateY: 10,
        z: 100,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      className="glass-card p-10 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-all group relative overflow-hidden will-change-transform"
    >
      <div className="absolute top-0 left-0 w-2 h-0 bg-accent-cyan transition-all duration-300 group-hover:h-full" />
      
      <div className="w-14 h-14 bg-accent-cyan/10 rounded-xl mb-8 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all duration-300">
        <Icon size={28} />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">{title}</h3>
      <p className="text-white/60 leading-relaxed mb-8 font-inter">
        {description}
      </p>
      
      <button className="text-white font-bold inline-flex items-center gap-2 group/btn relative">
        <span className="relative z-10">Learn More</span>
        <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-1 transition-transform relative z-10" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover/btn:w-full" />
      </button>

      {/* Background Decorative Icon */}
      <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-accent-cyan/5 transition-colors">
        <Icon size={120} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
