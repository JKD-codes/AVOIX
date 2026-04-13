"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as any, // Cast to any to bypass strict variant typing
    },
  },
};

const projects = [
  { id: 1, name: "EcoScale", category: "Branding", result: "+45% Growth", color: "from-accent-cyan/20" },
  { id: 2, name: "Apex Finance", category: "Fintech", result: "0.8s Load Speed", color: "from-accent-purple/20" },
  { id: 3, name: "Lumina", category: "Healthcare", result: "60% Bookings", color: "from-accent-orange/20" },
  { id: 4, name: "Vortex", category: "Gaming", result: "Top 3 Rank", color: "from-accent-cyan/20" },
  { id: 5, name: "Alpha Systems", category: "Enterprise", result: "Premium UI", color: "from-accent-orange/20" },
];

const PortfolioSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current || !triggerRef.current) return;

    const scrollWidth = scrollRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const pin = gsap.fromTo(
      scrollRef.current,
      { x: 0 },
      {
        x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${scrollRef.current?.scrollWidth || 5000}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      }
    );
    
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary relative z-20" ref={triggerRef}>
      <div ref={scrollRef} className="min-h-screen w-max flex flex-row relative items-center will-change-transform">
        {/* Header Card */}
        <div className="h-[70vh] w-[100vw] md:w-[80vw] flex-shrink-0 flex flex-col justify-center px-8 md:px-20">
           <motion.h2 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, amount: 0.3 }}
             className="text-7xl md:text-[12rem] font-black text-white leading-none tracking-tighter lowercase"
            >
             <div className="overflow-hidden">
               <motion.span variants={textVariants} className="block">selected</motion.span>
             </div>
               <div className="overflow-hidden">
               <motion.span variants={textVariants} className="block text-gradient">works</motion.span>
             </div>
           </motion.h2>
           <p className="text-lg md:text-xl text-white/30 max-w-sm md:max-w-md mt-6 md:mt-10 font-inter font-medium leading-relaxed">
             A deep dive into how we scale businesses through high-performance digital engineering.
           </p>
        </div>

        {/* Project Cards */}
        {projects.map((project) => (
          <div key={project.id} className="h-[85vh] w-[90vw] md:w-[80vw] flex-shrink-0 flex items-center justify-center p-3 md:p-10">
            <div className={`w-full h-full glass-card rounded-[2.5rem] md:rounded-[4rem] border border-white/5 overflow-hidden group relative flex flex-col justify-between p-8 md:p-16 bg-gradient-to-br ${project.color} to-transparent`}>
              <div className="flex justify-between items-start relative z-10">
                 <div>
                    <p className="text-accent-cyan font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-2 md:mb-4">{project.category}</p>
                    <h3 className="text-4xl md:text-7xl font-black text-white font-plus-jakarta tracking-tighter">{project.name}</h3>
                 </div>
                 <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer bg-white/5 md:bg-transparent">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                 </div>
              </div>

              <div className="flex items-end justify-between relative z-10">
                 <div className="max-w-[70%] md:max-w-md">
                    <p className="text-white/40 text-[10px] md:text-sm mb-1 md:mb-2 uppercase tracking-widest font-bold">Key Result</p>
                    <p className="text-2xl md:text-4xl font-black text-white">{project.result}</p>
                 </div>
                 <div className="text-8xl md:text-[14rem] font-black text-white/[0.02] absolute bottom-0 right-0 md:right-10 pointer-events-none">
                    0{project.id}
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSlider;
