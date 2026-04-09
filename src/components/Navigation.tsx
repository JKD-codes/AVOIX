"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavLink = ({ name, href, isMobile, onClick }: { name: string, href: string, isMobile?: boolean, onClick?: () => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set((e.clientX - centerX) * 0.4);
    mouseY.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={isMobile ? "w-full text-center" : "relative group"}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
          }
        }
      }}
    >
      <Link 
        href={href}
        onClick={onClick}
        className={isMobile 
          ? "text-5xl font-black text-white hover:text-accent-cyan transition-colors font-plus-jakarta lowercase tracking-tighter inline-block py-2"
          : "text-sm font-bold text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em] relative px-2 py-1 block overflow-visible"
        }
      >
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10, rotateX: -90 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { type: "spring", damping: 12, stiffness: 200 }
              }
            }}
            whileHover={{ 
              scale: 1.3,
              y: -2,
              color: "#06b6d4", // accent-cyan
              transition: { type: "spring", damping: 10, stiffness: 300 }
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        {!isMobile && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full" />
        )}
      </Link>
    </motion.div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-black/90 md:bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
          : "py-6 md:py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-[60]" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
          <Link 
            href="/contact" 
            className="bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Start Project
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-[110] relative p-3 bg-white/5 rounded-full border border-white/10 active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-0 bg-primary z-[105] flex flex-col items-center justify-center gap-6 py-20 px-6 overflow-y-auto h-[100dvh]"
            >
              {/* Technical Grid Overlay */}
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
              
              <div className="flex flex-col items-center gap-8 relative z-10 w-full">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.name} 
                    {...link} 
                    isMobile 
                    onClick={() => setIsOpen(false)} 
                  />
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-10 w-full max-w-xs"
                >
                  <Link 
                    href="/contact"
                    className="bg-white text-black w-full py-5 rounded-full font-bold text-xl shadow-2xl flex items-center justify-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Project
                    <ArrowRight size={24} />
                  </Link>
                </motion.div>

                {/* Footer Info in Menu */}
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.8 }}
                   className="mt-12 text-center"
                >
                   <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em] mb-2">Get in Touch</p>
                   <p className="text-white/40 text-sm">hello@avoix.co</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
