import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      {/* 
         Recreating the stylized Logo from the image. 
         Slanted lines and bold geometric shapes.
      */}
      <svg
        width="140"
        height="40"
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-8 md:h-10"
      >
        {/* 'A' stylized */}
        <path
          d="M5 35L15 5H22L12 35H5Z"
          fill="white"
          className="group-hover:fill-accent-cyan transition-colors duration-500"
        />
        <path
          d="M14 35L24 5H31L21 35H14Z"
          fill="white"
          className="group-hover:fill-accent-orange transition-colors duration-500"
        />
        
        {/* 'VOI' - Geometric Typography */}
        <text
          x="35"
          y="32"
          fill="white"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontWeight: 800,
            fontSize: "32px",
            letterSpacing: "-0.05em",
          }}
        >
          VOI
        </text>
        
        {/* 'X' stylized */}
        <path
          d="M100 5H108L120 22L132 5H140L124 28L140 35H132L120 18L108 35H100L116 12L100 5Z"
          fill="white"
          className="group-hover:fill-accent-purple transition-colors duration-500"
        />
      </svg>
    </div>
  );
};

export default Logo;
