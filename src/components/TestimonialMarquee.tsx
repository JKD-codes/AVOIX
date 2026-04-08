"use client";

import React, { useRef, useEffect, useState } from "react";
import { Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  { name: "Jagrat", company: "Elite Partners", text: "The engineering precision at AVOIX is unlike anything we've seen. Simply the best." },
  { name: "James Wilson", company: "FutureScale", text: "Transformed our digital presence. Lead gen up 45% in 8 weeks." },
  { name: "Sarah Malik", company: "Lumina", text: "Sarah's design leadership brought our brand to life with stunning minimalist aesthetics." },
  { name: "Michael Chen", company: "Vortex Gaming", text: "Crazy animations and zero lag. The user experience is state-of-the-art." },
  { name: "Elena Rossi", company: "EcoScale", text: "Strategic branding that actually converts. AVOIX is our go-to partner." },
  { name: "John Doe", company: "Alpha Systems", text: "High-performance websites that build trust instantly. Highly recommended." },
];

const TestimonialMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Infinite scroll logic for the marquee
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const speed = 0.5; // pixels per frame

    const animateForward = () => {
      if (!isPaused) {
        const setWidth = scrollContainer.scrollWidth / 3;
        
        if (scrollContainer.scrollLeft >= setWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(animateForward);
    };

    animationFrameId = requestAnimationFrame(animateForward);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="py-20 overflow-hidden relative group">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap gap-4 md:gap-6 py-10 no-scrollbar select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[85vw] md:w-[400px] min-h-[220px] p-6 md:p-8 rounded-3xl glass-card border-[1px] border-white/5 hover:border-accent-cyan/40 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer group/card flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-1 text-accent-cyan">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover/card:text-accent-cyan transition-colors">
                <MessageSquareQuote size={20} />
              </div>
            </div>
            
            <p className="text-white/60 font-inter text-sm md:text-base leading-relaxed whitespace-normal group-hover/card:text-white/90 transition-colors">
              "{item.text}"
            </p>
            
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-white font-bold font-plus-jakarta text-base md:text-lg">{item.name}</p>
                <p className="text-accent-cyan font-bold uppercase tracking-widest text-[8px] md:text-[9px] mt-0.5">{item.company}</p>
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-[8px] md:text-[10px] font-black text-white/40">
                AV
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
