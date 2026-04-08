"use client";

import React from "react";
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
  return (
    <div className="py-20 overflow-hidden relative group">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee animate-marquee-pause whitespace-nowrap gap-6 py-10">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[400px] h-[220px] p-8 rounded-3xl glass-card border-[1px] border-white/5 hover:border-accent-cyan/40 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer group/card flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-1 text-accent-cyan">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover/card:text-accent-cyan transition-colors">
                <MessageSquareQuote size={20} />
              </div>
            </div>
            
            <p className="text-white/60 font-inter text-sm leading-relaxed whitespace-normal group-hover/card:text-white/90 transition-colors">
              "{item.text}"
            </p>
            
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-white font-bold font-plus-jakarta text-lg">{item.name}</p>
                <p className="text-accent-cyan font-bold uppercase tracking-widest text-[9px] mt-0.5">{item.company}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black text-white/40">
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
