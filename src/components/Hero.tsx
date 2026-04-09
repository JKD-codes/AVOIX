"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Crazy background movement
      gsap.to(".flying-blob", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
      
      // Floating content animation
      gsap.fromTo(".floating-image", 
        { y: -10 }, 
        { y: 10, duration: 4, repeat: -1, yoyo: true, ease: "power1.inOut" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-primary grid-bg px-6"
    >
      {/* Dynamic Background Blobs - Scaled for mobile */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-cyan/10 rounded-full blur-[80px] md:blur-[120px] flying-blob" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent-orange/5 rounded-full blur-[100px] md:blur-[150px] flying-blob" style={{ animationDelay: "-5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent-purple/5 rounded-full blur-[120px] md:blur-[180px] flying-blob" style={{ animationDelay: "-10s" }} />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-10">
               <span className="w-8 md:w-12 h-[1px] bg-accent-cyan" />
               <span className="text-accent-cyan font-bold tracking-[0.2em] md:tracking-[0.3em] text-[10px] uppercase">Premium Agency Experience</span>
            </div>
            
            <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white font-plus-jakarta lowercase">
              Digital <br />
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    }
                  }
                }}
                className="relative inline-block py-4"
              >
                {"Experiences".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block text-gradient cursor-default"
                    variants={{
                      hidden: { opacity: 0, scale: 0, rotate: -20 },
                      visible: { 
                        opacity: 1, 
                        scale: 1, 
                        rotate: 0,
                        transition: { 
                          type: "spring", 
                          damping: 10, 
                          stiffness: 150,
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.4,
                      rotate: [0, -10, 10, 0],
                      filter: "drop-shadow(0 0 15px rgba(6,182,212,0.4))"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <br />
              <div className="relative overflow-hidden inline-block pr-4">
                {"at Scale".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block italic font-light opacity-50"
                    initial={{ opacity: 0, x: -10, y: 10 }}
                    animate={{ 
                      opacity: 0.5, 
                      x: 0, 
                      y: 0,
                      transition: { 
                        delay: 0.6 + i * 0.05,
                        duration: 1,
                        ease: "easeOut"
                      }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                {/* Prismatic Shimmer Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
                  initial={{ x: "-150%" }}
                  animate={{ x: "150%" }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatDelay: 2
                  }}
                />
              </div>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/50 max-w-2xl leading-relaxed font-inter font-light"
          >
            We don&apos;t just build websites. We create high-performance assets for founders who demand excellence. Built for conversion, styled for prestige.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
          >
            <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-bold flex items-center justify-center gap-4 hover:bg-accent-cyan hover:scale-105 transition-all group overflow-hidden relative">
              <span className="relative z-10 font-plus-jakarta uppercase tracking-widest text-sm">Launch Project</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-4 text-white/50 hover:text-white transition-all font-bold tracking-widest uppercase text-sm ml-4 sm:ml-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
                  <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                </div>
                Schedule Call
            </button>
          </motion.div>
        </div>

        {/* Hero Illustration / 3D-like Shape - Hidden on mobile if needed or scaled */}
        <div className="lg:col-span-4 block relative mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[400px] mx-auto aspect-square glass-card rounded-[3rem] p-1 flex items-center justify-center overflow-hidden floating-image"
          >
            <div className="w-full h-full bg-[#050505] rounded-[2.8rem] flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 via-transparent to-accent-orange/10 mix-blend-overlay opacity-50" />
               
               {/* Minimalist 3D-like graphic */}
               <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 border-[1px] border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-accent-cyan/30 transition-all duration-700">
                  <div className="w-20 h-20 md:w-32 md:h-32 border-[1px] border-white/5 rounded-full animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center text-accent-cyan group-hover:rotate-180 transition-transform duration-1000">
                     <MessageSquare size={32} className="opacity-20 translate-y-16 md:translate-y-24" />
                     <ArrowRight size={32} className="opacity-20 -translate-y-16 md:-translate-y-24" />
                  </div>
               </div>
               
               <p className="mt-8 text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">AVOIX Engine v4.0</p>
            </div>
          </motion.div>
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
