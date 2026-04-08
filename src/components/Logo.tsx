import Image from "next/image";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 group transition-all duration-300 ${className}`}>
      {/* Futuristic AV Logo */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <Image
          src="/Futuristic_AV_logo_design_black_bg.png"
          alt="AVOIX Symbol"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* AVOIX Text Logo */}
      <div className="relative h-12 md:h-16 w-48 md:w-64 flex-shrink-0">
        <Image
          src="/AVOIX_LOGO.png"
          alt="AVOIX"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Logo;
