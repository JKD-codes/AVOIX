"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

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

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-[60]">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-white/60 hover:text-accent-cyan transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all group-hover:w-full" />
            </Link>
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
          className="md:hidden text-white z-[60] p-2 bg-white/5 rounded-full border border-white/10"
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
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-primary z-[55] flex flex-col items-center justify-center gap-8 py-20 px-6 grid-bg"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href}
                    className="text-4xl font-bold text-white hover:text-accent-cyan transition-colors font-plus-jakarta"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10"
              >
                <Link 
                  href="/contact"
                  className="bg-accent-orange text-white px-12 py-4 rounded-full font-bold text-xl shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Start Project
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
