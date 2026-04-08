"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description: "A gorgeous website that patients trust and dentists love. We build high-performance, conversion-focused sites that look stunning on any device.",
    details: ["Custom design & UI/UX", "Mobile-first approach", "SEO optimized structure", "Fast loading times"],
    timeline: "3-4 weeks",
    price: "$2,499",
    Icon: Monitor,
    image: "/images/service-web.jpg"
  },
  {
    title: "App Development",
    description: "Custom mobile and web applications tailored to your business needs. We create scalable and intuitive solutions for your users.",
    details: ["iOS & Android Apps", "Web Dashboards", "Cloud Integration", "User-centric design"],
    timeline: "8-12 weeks",
    price: "$8,999",
    Icon: Smartphone,
    image: "/images/service-app.jpg"
  },
  {
    title: "SEO & Growth Marketing",
    description: "Data-driven SEO strategies to help your brand dominate the search results and drive consistent organic growth.",
    details: ["On-page optimization", "Local SEO & GMB", "Link building", "Content strategy"],
    timeline: "3-6 months results",
    price: "$999/mo",
    Icon: Globe,
    image: "/images/service-seo.jpg"
  },
  // Add more services as needed...
];

const titleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -60, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 12, 
      stiffness: 180 
    } as any
  },
};

const servicePulse = {
  visible: {
    textShadow: [
      "0 0 0px rgba(6,182,212,0)",
      "0 0 15px rgba(6,182,212,0.3)",
      "0 0 0px rgba(6,182,212,0)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    } as any
  }
};

const ServicesPage = () => {
  return (
    <div className="bg-primary pt-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-cyan/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-black text-white mb-8 font-plus-jakarta tracking-tighter"
          >
            <motion.span variants={wordVariants} className="inline-block mr-4">Our</motion.span>
            <br className="md:hidden" />
            <motion.span 
              variants={wordVariants}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              className="inline-block relative cursor-pointer"
            >
              <motion.span 
                variants={servicePulse}
                className="text-gradient relative z-10"
              >
                Services
              </motion.span>
              {/* Subtle tech glitch duplicate */}
              <motion.span 
                className="absolute inset-0 text-accent-cyan/10 blur-md pointer-events-none select-none z-0"
                animate={{ opacity: [0, 0.4, 0], x: [0, 2, -2, 0] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
              >
                Services
              </motion.span>
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-white/40 font-inter leading-relaxed max-w-2xl mx-auto"
          >
            Everything your business needs to thrive in the digital age. We combine design, 
            technology, and strategy to deliver <span className="text-white">measurable results</span>.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <div className="container mx-auto px-6 flex flex-col gap-40">
        {services.map((service, index) => (
          <motion.section 
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
          >
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-3xl glass-card border border-white/10 overflow-hidden flex items-center justify-center bg-white/5 relative z-10">
                <service.Icon size={120} className="text-white/10 group-hover:text-accent-cyan/20 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#0F172A] to-transparent">
                    <p className="text-xs font-bold text-accent-cyan tracking-[0.2em] uppercase">{service.title} MOCKUP</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-accent-cyan/5 blur-2xl rounded-full -z-10 group-hover:bg-accent-cyan/10 transition-colors" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="flex items-center gap-4 text-accent-cyan">
                <span className="w-12 h-0.5 bg-accent-cyan" />
                <span className="font-bold tracking-widest text-sm uppercase">Service Details</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-plus-jakarta leading-tight">
                {service.title}
              </h2>
              <p className="text-xl text-white/60 leading-relaxed font-inter">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-white/80 font-inter">
                    <CheckCircle2 size={20} className="text-accent-cyan flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <div>
                   <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Starting At</p>
                   <p className="text-2xl font-bold text-white">{service.price}</p>
                </div>
                <div>
                   <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Timeline</p>
                   <p className="text-2xl font-bold text-white">{service.timeline}</p>
                </div>
                <button className="bg-accent-orange text-white px-10 py-4 rounded-md font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent-orange/10">
                  Get Started
                </button>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Process Section */}
      <section className="py-40 bg-zinc-900/40 mt-40">
        <div className="container mx-auto px-6 text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-plus-jakarta">How We <span className="text-gradient">Deliver Excellence</span></h2>
           <p className="text-xl text-white/50 max-w-2xl mx-auto">Five simple steps from strategy to successful launch.</p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
           {[
             { step: "01", title: "Strategy", desc: "Understanding your vision and goals." },
             { step: "02", title: "Design", desc: "Creating premium digital experiences." },
             { step: "03", title: "Build", desc: "Turning designs into high-performance code." },
             { step: "04", title: "Testing", desc: "Ensuring perfection across all devices." },
             { step: "05", title: "Launch", desc: "Going live and driving results." }
           ].map((item, index) => (
             <div key={item.step} className="relative group overflow-hidden">
                <div className="glass-card p-10 h-full rounded-2xl border border-white/5 group-hover:border-accent-cyan/20 transition-all">
                  <span className="text-5xl font-black text-white/5 absolute -top-4 -left-2">{item.step}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed font-inter">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                     <ArrowRight className="text-accent-cyan opacity-20" size={32} />
                  </div>
                )}
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 container mx-auto px-6 text-center">
         <div className="glass-card p-20 rounded-[3rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 font-plus-jakarta">Ready to grow your business?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
              Book a free 30-minute consultation with our experts and find out how AVOIX can help you scale.
            </p>
            <button className="bg-accent-orange text-white px-12 py-5 rounded-md font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-accent-orange/20">
              Schedule Your Call
            </button>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
