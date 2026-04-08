"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Star } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "EcoScale Solutions",
    category: "Web Design & Branding",
    image: "/images/portfolio-1.jpg",
    results: "45% increase in conversions",
    metric: "45%",
    description: "A complete digital overhaul for a leading sustainability platform, focusing on trust and high-performance metrics.",
    tags: ["Next.js", "GSAP", "Tailwind"]
  },
  {
    id: 2,
    title: "Apex Finance Group",
    category: "Fintech Platform",
    image: "/images/portfolio-2.jpg",
    results: "3.2s average load time reduced to 0.8s",
    metric: "75%",
    description: "Built a secure, lightning-fast dashboard for high-net-worth investors, emphasizing data visualization and security.",
    tags: ["React", "D3.js", "Node.js"]
  },
  {
    id: 3,
    title: "Lumina Healthcare",
    category: "Medical Booking System",
    image: "/images/portfolio-3.jpg",
    results: "60% more appointment bookings",
    metric: "60%",
    description: "Integrated an automated booking and WhatsApp notification system that revolutionized their patient management flow.",
    tags: ["WhatsApp API", "Fullstack", "SEO"]
  },
  {
    id: 4,
    title: "Vortex Gaming",
    category: "Creative Brand Identity",
    image: "/images/portfolio-4.jpg",
    results: "Top 3 global ranking in niche category",
    metric: "#3",
    description: "A visually immersive brand identity and high-engagement landing page for a global gaming community.",
    tags: ["Branding", "WebGL", "Motion"]
  }
];

const PortfolioPage = () => {
  return (
    <div className="bg-primary pt-32 pb-40 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32 text-center md:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
           <div className="max-w-3xl">
              <motion.span 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="text-accent-cyan font-bold tracking-widest text-sm uppercase mb-4 block"
              >
                 Case Studies
              </motion.span>
              <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-5xl md:text-7xl font-bold text-white mb-8 font-plus-jakarta"
              >
                 Real Projects. <br />
                 <span className="text-gradient">Real Results.</span>
              </motion.h1>
              <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="text-xl text-white/50 font-inter leading-relaxed max-w-2xl"
              >
                 Explore how we&apos;ve helped businesses scale their digital presence 
                 through strategic design and engineering.
              </motion.p>
           </div>
           <div className="hidden lg:flex gap-4">
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                 <p className="text-3xl font-bold text-white mb-1 font-plus-jakarta">50+</p>
                 <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Projects Live</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                 <p className="text-3xl font-bold text-white mb-1 font-plus-jakarta">98%</p>
                 <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Retention Rate</p>
              </div>
           </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {caseStudies.map((project, index) => (
          <motion.div 
             key={project.id}
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: index * 0.1 }}
             className="group relative"
          >
             <div className="aspect-[16/10] bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative mb-8">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent mix-blend-overlay" />
                <div className="w-full h-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <Star size={120} className="text-accent-cyan/10 group-hover:text-accent-cyan/20 animate-pulse" />
                </div>
                
                {/* Result Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-accent-cyan/90 text-primary rounded-full text-xs font-bold flex items-center gap-2 shadow-xl">
                   <CheckCircle2 size={14} />
                   {project.results}
                </div>

                {/* View Case Study Button Overlay */}
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center translate-y-10 group-hover:translate-y-0">
                   <button className="bg-white text-primary px-8 py-4 rounded-md font-bold flex items-center gap-3">
                      View full Case Study
                      <ArrowUpRight size={20} />
                   </button>
                </div>
             </div>

             <div className="flex flex-col gap-4 px-2">
                <div className="flex justify-between items-start">
                   <div>
                      <p className="text-accent-cyan font-bold text-xs uppercase tracking-widest mb-1">{project.category}</p>
                      <h3 className="text-3xl font-bold text-white font-plus-jakarta group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                   </div>
                   <div className="text-white/20 font-plus-jakarta font-black text-4xl group-hover:text-accent-cyan/10 transition-colors">
                      {project.id.toString().padStart(2, '0')}
                   </div>
                </div>
                <p className="text-white/50 leading-relaxed font-inter line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-3 flex-wrap pt-2">
                   {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-widest">{tag}</span>
                   ))}
                </div>
             </div>
          </motion.div>
        ))}
      </section>

      {/* Hire Us Callout */}
      <section className="container mx-auto px-6 mt-40">
         <div className="glass-card p-12 md:p-24 rounded-[3rem] border border-white/10 flex flex-col items-center text-center gap-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-plus-jakarta">Your Project <span className="text-gradient">Could Be Next</span></h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">We are ready to take your business to the next level. Let&apos;s build something amazing together.</p>
            <button className="mt-4 bg-accent-orange text-white px-12 py-5 rounded-md font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent-orange/20">
               Start Your Project
            </button>
         </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
