"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Paintbrush, Linkedin, Twitter } from "lucide-react";
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

const AboutPage = () => {
  return (
    <div className="bg-primary pt-32 pb-40 min-h-screen grid-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32 text-center md:text-left">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent-cyan text-[10px] font-bold tracking-[0.3em] mb-8 uppercase"
            >
              Who We Are
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-8 font-plus-jakarta leading-[0.8] tracking-tighter"
            >
              the <br /> <span className="text-gradient">engine</span> <br /> behind it.
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/40 font-inter leading-relaxed max-w-xl mb-10"
          >
            A collective of specialists obsessed with one thing: <br />
            <span className="text-white">building high-performance assets</span> that transform brands.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-6 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
               <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card group p-10 rounded-[3rem] border border-white/5 hover:border-accent-cyan/20 transition-all flex flex-col items-center text-center overflow-hidden relative"
               >
                  {/* Decorative background number */}
                  <span className="absolute -bottom-10 -right-10 text-[12rem] font-black text-white/[0.02] group-hover:text-accent-cyan/[0.05] transition-colors">{index + 1}</span>
                  
                  <div className="w-40 h-40 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-10 flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-primary transition-all duration-700 animate-floatingSmooth">
                     <member.Icon size={56} />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-2 font-plus-jakarta tracking-tight">{member.name}</h3>
                  <p className="text-accent-cyan font-bold text-[10px] uppercase tracking-[0.3em] mb-8">{member.role}</p>
                  
                  <p className="text-white/40 font-inter text-sm leading-relaxed mb-10 relative z-10">
                     {member.bio}
                  </p>
                  
                  <div className="flex gap-6 mt-auto relative z-10">
                     <button className="text-white/20 hover:text-white transition-all transform hover:scale-125"><LinkedinIcon size={20} /></button>
                     <button className="text-white/20 hover:text-white transition-all transform hover:scale-125"><TwitterIcon size={20} /></button>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Stats Section inspired by FutureDesks */}
      <section className="py-40 border-y border-white/5 bg-black/50 overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-20 pointer-events-none" />
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="text-center group">
               <p className="text-7xl md:text-9xl font-black text-white/5 transition-colors group-hover:text-accent-cyan/20">50+</p>
               <h4 className="text-xl font-bold text-white -mt-8 md:-mt-12">Projects Global</h4>
            </div>
            <div className="text-center group">
               <p className="text-7xl md:text-9xl font-black text-white/5 transition-colors group-hover:text-accent-orange/20">60%</p>
               <h4 className="text-xl font-bold text-white -mt-8 md:-mt-12">Growth Scaling</h4>
            </div>
            <div className="text-center group">
               <p className="text-7xl md:text-9xl font-black text-white/5 transition-colors group-hover:text-accent-purple/20">98%</p>
               <h4 className="text-xl font-bold text-white -mt-8 md:-mt-12">Retention Rate</h4>
            </div>
         </div>
      </section>
      
      {/* Crazy Footer CTA */}
      <section className="py-40 container mx-auto px-6 text-center">
        <div className="glass-card p-20 rounded-[4rem] relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <h2 className="text-5xl md:text-7xl font-black text-white mb-10 font-plus-jakarta leading-tight tracking-tighter">
             Ready to upscale your <br />
             <span className="text-gradient">digital presence?</span>
           </h2>
           <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl relative z-10">
             Apply to Work with Us
           </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
