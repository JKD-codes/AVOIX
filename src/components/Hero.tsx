"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Crazy background movement
      gsap.to(".flying-blob", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
      
      // Floating content animation
      gsap.fromTo(".floating-image", 
        { y: -20 }, 
        { y: 20, duration: 4, repeat: -1, yoyo: true, ease: "power1.inOut" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary grid-bg"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] flying-blob" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent-orange/5 rounded-full blur-[150px] flying-blob" style={{ animationDelay: "-5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-[180px] flying-blob" style={{ animationDelay: "-10s" }} />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
               <span className="w-12 h-[1px] bg-accent-cyan" />
               <span className="text-accent-cyan font-bold tracking-[0.3em] text-xs uppercase">Premium Agency Experience</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white font-plus-jakarta lowercase">
              Digital <br />
              <span className="text-gradient">Experiences</span> <br />
              <span className="italic font-light opacity-50">at Scale</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed font-inter font-light"
          >
            We don&apos;t just build websites. We create high-performance assets for founders who demand excellence. Built for conversion, styled for prestige.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-6"
          >
            <button className="bg-white text-black px-10 py-5 rounded-full font-bold flex items-center gap-4 hover:bg-accent-cyan hover:scale-105 transition-all group overflow-hidden relative">
              <span className="relative z-10 font-plus-jakarta uppercase tracking-widest text-sm">Launch Project</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-4 text-white/50 hover:text-white transition-all font-bold tracking-widest uppercase text-sm">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
                  <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                </div>
                Schedule Call
            </button>
          </motion.div>
        </div>

        {/* Hero Illustration / 3D-like Shape */}
        <div className="lg:col-span-4 hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full aspect-square glass-card rounded-[3rem] p-1 flex items-center justify-center overflow-hidden floating-image"
          >
            <div className="w-full h-full bg-[#050505] rounded-[2.8rem] flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 via-transparent to-accent-orange/10 mix-blend-overlay opacity-50" />
               
               {/* Minimalist 3D-like graphic */}
               <div className="relative z-10 w-48 h-48 border-[1px] border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-accent-cyan/30 transition-all duration-700">
                  <div className="w-32 h-32 border-[1px] border-white/5 rounded-full animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center text-accent-cyan group-hover:rotate-180 transition-transform duration-1000">
                     <MessageSquare size={40} className="opacity-20 translate-y-24" />
                     <ArrowRight size={40} className="opacity-20 -translate-y-24" />
                  </div>
               </div>
               
               <p className="mt-8 text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">AVOIX Engine v4.0</p>
            </div>
          </motion.div>
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
