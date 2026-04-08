"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    const pin = gsap.fromTo(
      scrollRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={triggerRef}>
        <div ref={scrollRef} className="h-screen w-[400vw] flex flex-row relative items-center px-[10vw]">
          {/* Header Card */}
          <div className="h-[70vh] w-[80vw] flex-shrink-0 flex flex-col justify-center px-20">
             <h2 className="text-[12rem] font-black text-white leading-none tracking-tighter lowercase">
               selected <br />
               <span className="text-gradient">works</span>
             </h2>
             <p className="text-xl text-white/30 max-w-md mt-10 font-inter">
               A deep dive into how we scale businesses through high-performance digital engineering.
             </p>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <div key={project.id} className="h-[70vh] w-[80vw] flex-shrink-0 flex items-center justify-center p-10">
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
      </div>
    </section>
  );
};

export default PortfolioSlider;
