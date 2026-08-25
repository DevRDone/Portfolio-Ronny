import { useState, useEffect } from "react";

export function BackgroundMeshGlow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050507] pointer-events-none">
      {mounted && (
        <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ maskImage: "radial-gradient(ellipse at center, transparent 20%, black)" }}>
          {/* Animated Glows with zero-JS pure CSS compositor transforms */}
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite]"
            style={{ transform: "translateZ(0)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite]"
            style={{ transform: "translateZ(0)" }}
          />
        </div>
      )}
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />
    </div>
  );
}
