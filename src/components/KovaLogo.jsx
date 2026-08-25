import kovaLogoImg from "../assets/kova-logo.webp";

export function KovaIcon({ className = "w-8 h-8", glow = true, useImg = true }) {
  if (useImg) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {glow && (
          <div className="absolute inset-0 bg-[#7C3AED]/50 blur-lg rounded-full pointer-events-none" />
        )}
        <img 
          src={kovaLogoImg} 
          alt="Kova Labs Logo" 
          width="201"
          height="235"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
        />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-[#7C3AED]/50 blur-md rounded-full pointer-events-none" />
      )}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]"
      >
        <path
          d="M30 24 H42.5 L70 71 V76 H57.5 L30 29 Z"
          fill="url(#kova-official-grad)"
        />
        <polygon
          points="63,26 73,31.7 73,43.3 63,49 53,43.3 53,31.7"
          fill="url(#kova-official-grad)"
        />
        <polygon
          points="37,51 47,56.7 47,68.3 37,74 27,68.3 27,56.7"
          fill="url(#kova-official-grad)"
        />

        <defs>
          <linearGradient
            id="kova-official-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function KovaLogo({ size = "md" }) {
  return (
    <div className="flex items-center gap-3">
      <KovaIcon 
        className={size === "lg" ? "w-12 h-12 md:w-16 md:h-16" : size === "sm" ? "w-7 h-7" : "w-10 h-10"} 
        useImg={true} 
      />
      <div className="flex flex-col text-left leading-none font-['Orbitron']">
        <span className={`font-black text-white tracking-[0.1em] ${size === "lg" ? "text-2xl md:text-3xl" : size === "sm" ? "text-sm" : "text-xl"}`}>
          Kova
        </span>
        <span className={`font-sans font-bold tracking-[0.3em] uppercase text-[#7C3AED] ${size === "lg" ? "text-xs mt-1" : size === "sm" ? "text-[8px]" : "text-[10px]"}`}>
          LABS
        </span>
      </div>
    </div>
  );
}
