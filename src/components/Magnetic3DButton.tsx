"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Magnetic3DButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Magnetic3DButton: React.FC<Magnetic3DButtonProps> = ({ children, className = "", onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* 3D Depth Shadow/Layer */}
      <motion.div
        className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-xl pointer-events-none"
        style={{
          x: useTransform(x, (val) => val * 1.5),
          y: useTransform(y, (val) => val * 1.5),
          opacity: useTransform(x, (val) => (val !== 0 ? 0.4 : 0)),
        }}
      />

      <motion.button
        onClick={onClick}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full h-full"
      >
        <div 
          style={{ transform: "translateZ(20px)" }}
          className="w-full h-full flex items-center justify-center pointer-events-none"
        >
          {children}
        </div>
      </motion.button>
    </div>
  );
};

export default Magnetic3DButton;
