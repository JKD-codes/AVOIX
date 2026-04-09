"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  // Mouse movement for Luminous Gravity Glass effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-5, 5]), { stiffness: 100, damping: 30 });

  const glowX = useSpring(mouseX, { stiffness: 120, damping: 40 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 40 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Mock submission delay
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div className="bg-primary pt-32 pb-40 min-h-screen relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-orange/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-cyan/5 blur-[120px] -z-10" />

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 text-center md:text-left">
        <motion.span 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="text-accent-cyan font-bold tracking-widest text-sm uppercase mb-4 block"
        >
          CONTACT US
        </motion.span>
        <motion.h1 
           initial="hidden"
           animate="visible"
           variants={{
             visible: {
               transition: {
                 staggerChildren: 0.02,
               }
             }
           }}
           className="text-5xl md:text-7xl font-bold text-white mb-8 font-plus-jakarta leading-tight tracking-tighter"
        >
          {"Let's Build Your".split(" ").map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-4 whitespace-nowrap"
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
          <br className="hidden md:block" />
          <div className="overflow-hidden inline-block">
            {"Digital Empire.".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block text-gradient hover:text-accent-cyan transition-colors duration-300 cursor-default"
                variants={{
                  hidden: { opacity: 0, y: 100, scale: 2, filter: "blur(10px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    filter: "blur(0px)",
                    transition: { type: "spring", damping: 15, stiffness: 100 }
                  }
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  filter: "drop-shadow(0 0 8px rgba(6,182,212,0.8))"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.h1>
      </section>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
        {/* Contact Form Section */}
        <div className="lg:w-3/5">
          <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             style={{
               rotateX,
               rotateY,
               transformStyle: "preserve-3d",
             }}
             onMouseMove={handleMouseMove}
             onMouseLeave={() => {
               mouseX.set(0);
               mouseY.set(0);
             }}
             className="glass-card p-10 md:p-16 rounded-[2.5rem] border border-white/10 relative overflow-hidden group/form"
          >
            {/* Luminous Glow Highlight */}
            <motion.div 
               className="pointer-events-none absolute -inset-px opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 z-0"
               style={{
                 background: useTransform(
                   [glowX, glowY],
                   ([x, y]) => `radial-gradient(600px circle at ${Number(x) + 400}px ${Number(y) + 400}px, rgba(6,182,212,0.15), transparent 40%)`
                 )
               }}
            />
            
            <div className="relative z-10">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-accent-cyan/10 rounded-full flex items-center justify-center text-accent-cyan mb-8">
                   <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Message Sent!</h2>
                <p className="text-white/60 text-lg mb-8 max-w-sm">
                   Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button 
                   onClick={() => setFormState("idle")}
                   className="text-white font-bold underline underline-offset-8 decoration-white/20 hover:decoration-white transition-all"
                >
                   Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest px-4">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest px-4">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest px-4">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91-XXXX-XXX-XXX" 
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest px-4">Clinic / Business Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="FutureScale Systems" 
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest px-4">How can we help?</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your goals..." 
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={formState === "submitting"}
                  className="bg-accent-orange text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-accent-orange/10 disabled:opacity-50"
                >
                  {formState === "submitting" ? "Sending..." : "Send Message"}
                  <Send size={24} />
                </button>
              </form>
            )}
          </div>
          </motion.div>
        </div>

        {/* Info Section */}
        <div className="lg:w-2/5 flex flex-col gap-12">
            <div>
               <h3 className="text-3xl font-bold text-white mb-6 font-plus-jakarta">Contact Information</h3>
               <p className="text-lg text-white/50 leading-relaxed font-inter">
                  Prefer a direct conversation? Choose your preferred way to reach 
                  out and we&apos;ll get back to you sooner than you think.
               </p>
            </div>

            <div className="flex flex-col gap-8">
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all">
                     <Mail size={24} />
                  </div>
                  <div>
                     <p className="text-white font-bold text-lg font-plus-jakarta">Email Us</p>
                     <p className="text-white/40">hello@avoix.co</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all">
                     <Phone size={24} />
                  </div>
                  <div>
                     <p className="text-white font-bold text-lg font-plus-jakarta">Call Us</p>
                     <p className="text-white/40">+91-XXX-XXX-XXXX</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                     <MessageSquare size={24} />
                  </div>
                  <div>
                     <p className="text-[#25D366] font-bold text-lg font-plus-jakarta">WhatsApp</p>
                     <p className="text-white/40">Connect Instantly</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <p className="text-white font-bold text-lg font-plus-jakarta">Office</p>
                     <p className="text-white/40">Mumbai, India</p>
                  </div>
               </div>
            </div>

            <div className="mt-8">
               <h4 className="text-white font-bold mb-4 font-plus-jakarta uppercase tracking-widest text-sm">Office Hours</h4>
               <p className="text-white/40 font-inter">Monday — Friday: 10:00 AM - 6:00 PM IST</p>
               <p className="text-white/40 font-inter">Weekends: Closed (Emergency Support Available)</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
