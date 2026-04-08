"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Paintbrush } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "@/lib/icons";

// Updated Team Members as per latest request
const team = [
  {
    name: "Jagrat",
    role: "Founder & Creative Lead",
    bio: "Visionary designer specialized in upscale digital transformations. Jagrat leads the creative direction of AVOIX.",
    Icon: Sparkles,
  },
  {
    name: "Khushi",
    role: "Design Lead",
    bio: "Master of minimalist aesthetics and user-centric flows. Khushi ensures every pixel serves a purpose and builds trust.",
    Icon: Paintbrush,
  },
  {
    name: "Jainam",
    role: "Tech Lead",
    bio: "Architecture expert with a passion for 60FPS animations and high-performance codebases.",
    Icon: Code2,
  },
  {
    name: "Mohit",
    role: "Growth Strategy",
    bio: "Data-driven strategist focused on global business scaling and strategic positioning.",
    Icon: Rocket,
  }
];

const titleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -45, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 10, 
      stiffness: 150 
    } as any
  },
};

const engineGlow = {
  visible: {
    textShadow: [
      "0 0 0px rgba(6,182,212,0)",
      "0 0 20px rgba(6,182,212,0.4)",
      "0 0 0px rgba(6,182,212,0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    } as any
  }
};

const AboutPage = () => {
  return (
    <div className="bg-primary pt-32 pb-40 min-h-screen grid-bg px-6">
      {/* Hero Section */}
      <section className="container mx-auto mb-32 text-center md:text-left">
        <div className="flex flex-col lg:flex-row items-center md:items-end justify-between gap-12">
          <div className="max-w-4xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent-cyan text-[10px] font-bold tracking-[0.3em] mb-8 uppercase"
            >
              Who We Are
            </motion.div>
            
            <motion.h1 
              variants={titleContainer}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-8 font-plus-jakarta leading-[0.85] md:leading-[0.8] tracking-tighter"
            >
              <motion.span variants={wordVariants} className="inline-block mr-4">the</motion.span> 
              <br /> 
              <motion.span 
                variants={wordVariants} 
                animate="visible"
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
                className="inline-block relative"
              >
                <motion.span 
                  variants={engineGlow}
                  className="text-gradient relative z-10"
                >
                  engine
                </motion.span>
                {/* Subtle duplicate for a glitchy feel */}
                <motion.span 
                  className="absolute inset-0 text-accent-cyan/20 blur-sm pointer-events-none select-none z-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                >
                  engine
                </motion.span>
              </motion.span> 
              <br /> 
              <motion.span variants={wordVariants} className="inline-block">behind it.</motion.span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-white/40 font-inter leading-relaxed max-w-xl mb-10 text-center md:text-left font-medium"
          >
            A collective of specialists obsessed with one thing: <br className="hidden md:block" />
            <span className="text-white">building high-performance assets</span> that transform brands.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {team.map((member, index) => (
               <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 hover:border-accent-cyan/20 transition-all flex flex-col items-center text-center overflow-hidden relative"
               >
                  {/* Decorative background number - Hidden on mobile for clarity */}
                  <span className="absolute -bottom-10 -right-10 text-[8rem] md:text-[12rem] font-black text-white/[0.02] group-hover:text-accent-cyan/[0.05] transition-colors">{index + 1}</span>
                  
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-8 md:mb-10 flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-primary transition-all duration-700 animate-floatingSmooth">
                     <member.Icon size={52} />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-plus-jakarta tracking-tight">{member.name}</h3>
                  <p className="text-accent-cyan font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-8">{member.role}</p>
                  
                  <p className="text-white/40 font-inter text-sm leading-relaxed mb-8 md:mb-10 relative z-10">
                     {member.bio}
                  </p>
                  
                  <div className="flex gap-6 mt-auto relative z-10">
                     <button className="text-white/20 hover:text-white transition-all transform hover:scale-125 p-2"><LinkedinIcon size={22} /></button>
                     <button className="text-white/20 hover:text-white transition-all transform hover:scale-125 p-2"><TwitterIcon size={22} /></button>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Stats Section inspired by FutureDesks */}
      <section className="py-20 md:py-40 border-y border-white/5 bg-black/50 overflow-hidden relative -mx-6 px-6">
         <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-20 pointer-events-none" />
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            <div className="text-center group">
               <p className="text-7xl md:text-9xl font-black text-white/5 transition-colors group-hover:text-accent-cyan/20 leading-none">50+</p>
               <h4 className="text-lg md:text-xl font-bold text-white -mt-4 md:-mt-12">Projects Global</h4>
            </div>
            <div className="text-center group">
               <p className="text-7xl md:text-9xl font-black text-white/5 transition-colors group-hover:text-accent-orange/20 leading-none">60%</p>
               <h4 className="text-lg md:text-xl font-bold text-white -mt-4 md:-mt-12">Growth Scaling</h4>
            </div>
            <div className="text-center group">
               <p className="text-7xl md:text-9xl font-black text-white/5 transition-colors group-hover:text-accent-purple/20 leading-none">98%</p>
               <h4 className="text-lg md:text-xl font-bold text-white -mt-4 md:-mt-12">Retention Rate</h4>
            </div>
         </div>
      </section>
      
      {/* Crazy Footer CTA */}
      <section className="py-32 md:py-40 container mx-auto text-center">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <h2 className="text-4xl md:text-7xl font-black text-white mb-8 md:mb-10 font-plus-jakarta leading-tight tracking-tighter lowercase">
             Ready to <span className="text-gradient">upscale?</span>
           </h2>
           <button className="bg-white text-black px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl relative z-10 w-full sm:w-auto">
             Apply to Work
           </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
