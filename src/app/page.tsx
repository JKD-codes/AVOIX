"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioSlider from "@/components/PortfolioSlider";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck,
  Zap,
  Lock,
  Target
} from "lucide-react";

const services = [
  {
    title: "Web Engineering",
    description: "High-performance, asset-grade websites built for conversion and high-stakes business growth.",
    Icon: Monitor,
  },
  {
    title: "App Strategy",
    description: "Custom digital platforms that reduce friction and build lasting mobile-first brand loyalty.",
    Icon: Smartphone,
  },
  {
    title: "Growth Engine",
    description: "Data-driven SEO and strategic positioning to ensure your brand dominates search globally.",
    Icon: Globe,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black overflow-hidden">
      <Hero />
      
      {/* Premium Marquee */}
      <section className="py-20 border-y border-white/5 bg-black overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 text-white text-[12vw] font-black lowercase tracking-tighter items-center animate-marquee opacity-5">
          <span>premium</span>
          <span>engineered</span>
          <span>results</span>
          <span>prestige</span>
          <span>premium</span>
          <span>engineered</span>
          <span>results</span>
          <span>prestige</span>
        </div>
      </section>

      {/* Selected Works - Horizontal Slider */}
      <PortfolioSlider />

      {/* Services Section with Crazy Cards */}
      <section className="py-40 relative bg-black grid-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  }
                }
              }}
              className="max-w-2xl"
            >
              <span className="text-accent-cyan font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">Capabilities</span>
              <h2 className="text-6xl md:text-8xl font-black text-white font-plus-jakarta leading-[0.9] tracking-tighter">
                {["Solutions", "that"].map((word, i) => (
                  <motion.span 
                    key={i} 
                    className="inline-block mr-4"
                    variants={{
                      hidden: { opacity: 0, y: 50, rotateX: -90 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 0,
                        transition: { type: "spring", damping: 12, stiffness: 200 }
                      }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br /> 
                <div className="inline-block mt-2">
                  {"Scale.".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block text-gradient cursor-default hover:text-white transition-colors"
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
                            delay: i * 0.05 
                          }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.4,
                        rotate: [0, -10, 10, 0],
                        filter: "drop-shadow(0 0 15px rgba(255,107,0,0.4))"
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </h2>
            </motion.div>
            <p className="text-xl text-white/30 max-w-sm mb-4 font-inter leading-relaxed">
              We focus on the metrics that matter. More leads, better conversion, absolute reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                 key={service.title}
                 {...service}
                 delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* "Crazy" Features / Why Us */}
      <section className="py-40 bg-black relative">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="aspect-square glass-card rounded-[4rem] overflow-hidden p-1 border border-white/10 relative z-10 group">
                  <div className="w-full h-full bg-[#050505] rounded-[3.8rem] flex flex-col items-center justify-center p-20 text-center transition-all duration-700 group-hover:bg-[#0a0a0a]">
                      <div className="w-24 h-24 bg-accent-orange/10 rounded-full flex items-center justify-center text-accent-orange mb-10 group-hover:scale-110 transition-transform animate-floatingSmooth">
                         <Zap size={48} />
                      </div>
                      <h4 className="text-5xl font-black text-white mb-6 font-plus-jakarta tracking-tight">Zero Lag Architecture</h4>
                      <p className="text-white/40 text-lg leading-relaxed font-inter">We build with a focus on 60FPS motion and sub-second load times. Premium speed for premium businesses.</p>
                  </div>
               </div>
               <div className="absolute -top-10 -left-10 w-60 h-60 bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse" />
            </div>
            
            <div className="flex flex-col gap-12">
               <div>
                  <span className="text-accent-orange font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">The AVOIX Standard</span>
                  <h2 className="text-5xl md:text-7xl font-black text-white font-plus-jakarta leading-none tracking-tighter">
                    Built for <br />
                    <span className="text-accent-cyan">Visionaries.</span>
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                     <Lock size={24} className="text-accent-cyan group-hover:scale-110 transition-transform" />
                     <h5 className="text-xl font-bold text-white font-plus-jakarta">Secure-First</h5>
                     <p className="text-white/40 text-sm leading-relaxed">Enterprise-grade security integrated into every digital asset we deploy.</p>
                  </div>
                  <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                     <Target size={24} className="text-accent-orange group-hover:scale-110 transition-transform" />
                     <h5 className="text-xl font-bold text-white font-plus-jakarta">Result-Driven</h5>
                     <p className="text-white/40 text-sm leading-relaxed">Focused on lead generation and conversion metrics from day one.</p>
                  </div>
               </div>
               
               <button className="self-start mt-8 bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-accent-orange hover:scale-105 transition-all shadow-2xl">
                 Scale Your Business
               </button>
            </div>
         </div>
      </section>

      {/* Testimonials Marquee - The mini card slider requested */}
      <section className="py-20 md:py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 mb-10 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white font-plus-jakarta tracking-tighter">What Founders <span className="text-gradient">Say</span></h2>
          <p className="text-white/20 mt-4 tracking-widest uppercase font-bold text-[10px]">Direct feedback from the engine room</p>
        </div>
        <TestimonialMarquee />
      </section>

      {/* Final CTA Overlay */}
      <section className="py-40 bg-black relative overflow-hidden flex items-center justify-center">
         <div className="container mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="text-7xl md:text-[12rem] font-black mb-12 font-plus-jakarta tracking-[calc(-0.06em)] leading-none lowercase">
               {"ready to".split("").map((char, i) => (
                 <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.01 }}
                 >
                    {char === " " ? "\u00A0" : char}
                 </motion.span>
               ))}
               <br />
               <span className="text-gradient">
                 {"grow?".split("").map((char, i) => (
                   <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.01 }}
                   >
                      {char}
                   </motion.span>
                 ))}
               </span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="bg-accent-cyan text-black px-14 py-6 rounded-full font-bold text-2xl hover:scale-110 transition-all shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                  Start Now
               </button>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-orange/10 blur-[200px] rounded-full opacity-30 pointer-events-none" />
      </section>
    </div>
  );
}
