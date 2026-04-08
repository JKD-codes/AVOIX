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
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop || !scrollRef.current || !triggerRef.current) return;

    const pin = gsap.fromTo(
      scrollRef.current,
      { translateX: 0 },
      {
        translateX: "-380vw",
        ease: "none",
        duration: 1,
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
  }, [isDesktop]);

  return (
    <section className="overflow-hidden bg-primary relative z-20" ref={triggerRef}>
      {/* Desktop Horizontal View */}
      {isDesktop ? (
        <div ref={scrollRef} className="min-h-screen w-[480vw] flex flex-row relative items-center">
          {/* Header Card */}
          <div className="h-[70vh] w-[80vw] flex-shrink-0 flex flex-col justify-center px-20">
             <motion.h2 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.3 }}
               className="text-[12rem] font-black text-white leading-none tracking-tighter lowercase"
              >
               <div className="overflow-hidden">
                 <motion.span variants={textVariants} className="block">selected</motion.span>
               </div>
               <div className="overflow-hidden">
                 <motion.span variants={textVariants} className="block text-gradient">works</motion.span>
               </div>
             </motion.h2>
             <p className="text-xl text-white/30 max-w-md mt-10 font-inter font-medium leading-relaxed">
               A deep dive into how we scale businesses through high-performance digital engineering.
             </p>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <div key={project.id} className="h-[80vh] w-[80vw] flex-shrink-0 flex items-center justify-center p-10">
              <div className={`w-full h-full glass-card rounded-[4rem] border border-white/5 overflow-hidden group relative flex flex-col justify-between p-16 bg-gradient-to-br ${project.color} to-transparent`}>
                <div className="flex justify-between items-start">
                   <div>
                      <p className="text-accent-cyan font-bold tracking-[0.3em] uppercase text-xs mb-4">{project.category}</p>
                      <h3 className="text-7xl font-black text-white font-plus-jakarta tracking-tighter">{project.name}</h3>
                   </div>
                   <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
                      <ArrowUpRight size={32} />
                   </div>
                </div>

                <div className="flex items-end justify-between">
                   <div className="max-w-md">
                      <p className="text-white/40 text-sm mb-2 uppercase tracking-widest font-bold">Key Result</p>
                      <p className="text-4xl font-black text-white">{project.result}</p>
                   </div>
                   <div className="text-[14rem] font-black text-white/[0.02] absolute bottom-0 right-10 pointer-events-none">
                      0{project.id}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Mobile Vertical View */
        <div className="container mx-auto px-6 py-20 flex flex-col gap-16">
          <div className="mb-10">
             <motion.h2 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.3 }}
               className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter lowercase"
              >
               <div className="overflow-hidden">
                 <motion.span variants={textVariants} className="block">selected</motion.span>
               </div>
               <div className="overflow-hidden">
                 <motion.span variants={textVariants} className="block text-gradient">works</motion.span>
               </div>
             </motion.h2>
             <p className="text-lg text-white/30 max-w-md mt-6 font-inter">
               A deep dive into how we scale businesses through high-performance digital engineering.
             </p>
          </div>
          
          <div className="flex flex-col gap-10">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`w-full aspect-[4/5] glass-card rounded-[2.5rem] border border-white/5 overflow-hidden group relative flex flex-col justify-between p-8 bg-gradient-to-br ${project.color} to-transparent`}
              >
                <div className="flex justify-between items-start relative z-10">
                   <div>
                      <p className="text-accent-cyan font-bold tracking-[0.3em] uppercase text-[9px] mb-2">{project.category}</p>
                      <h3 className="text-4xl font-black text-white font-plus-jakarta tracking-tighter">{project.name}</h3>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                      <ArrowUpRight size={20} className="text-white" />
                   </div>
                </div>

                <div className="flex items-end justify-between relative z-10">
                   <div>
                      <p className="text-white/40 text-[10px] mb-1 uppercase tracking-widest font-bold">Key Result</p>
                      <p className="text-2xl font-black text-white">{project.result}</p>
                   </div>
                   <div className="text-8xl font-black text-white/[0.03] absolute -bottom-4 right-0 pointer-events-none">
                      0{project.id}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSlider;
