import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { playClickVoiceEffect } from '../lib/audio';

export default function InteractiveLogo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clickPulse, setClickPulse] = useState(false);

  // Mouse coordinate motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), springConfig);

  // Floating heights
  const depthLevel1 = useSpring(useTransform(y, [-300, 300], [5, -5]), springConfig);
  const depthLevel2 = useSpring(useTransform(x, [-300, 300], [-10, 10]), springConfig);
  const depthLevel3 = useSpring(useTransform(y, [-300, 300], [-15, 15]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    playClickVoiceEffect();
    setClickPulse(true);
    // Auto reset the expanding click aura ring
    setTimeout(() => {
      setClickPulse(false);
    }, 700);
  };

  return (
    <div 
      className="relative w-full h-[330px] md:h-[400px] flex items-center justify-center max-w-[450px] mx-auto"
      id="3d-logo-container"
    >
      {/* Background Decorative Grid Line Orbits */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[85%] h-[85%] rounded-full border border-brand-gold/10 animate-[spin_120s_linear_infinite]" />
        <div className="w-[65%] h-[65%] rounded-full border border-dashed border-brand-gold/15 animate-[spin_80s_linear_infinite_reverse]" />
        <div className="w-[45%] h-[45%] rounded-full border border-brand-gold/5" />
        {/* Radial Background Glow */}
        <div className="absolute w-[60%] h-[60%] rounded-full bg-brand-gold/5 blur-[80px]" />
        <div className="absolute w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-[60px]" />
      </div>

      {/* Slow animated construction grid lines (CAD blueprint scanning) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg className="absolute w-5/6 h-5/6 opacity-25 text-brand-gold/20" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Moving vertical blueprint grid line */}
          <motion.line 
            x1="0" y1="0" x2="0" y2="100" 
            stroke="currentColor" strokeWidth="0.1"
            animate={{ x: ["10%", "90%", "10%"] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          />
          {/* Moving horizontal blueprint grid line */}
          <motion.line 
            x1="0" y1="0" x2="100" y2="0" 
            stroke="currentColor" strokeWidth="0.1"
            animate={{ y: ["15%", "85%", "15%"] }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
          />
          {/* Fixed coordinate crosshairs */}
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1 2" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1 2" />
        </svg>
      </div>

      {/* Soft Gold Glow Pulse underlying the 3D element */}
      <motion.div 
        className="absolute w-[65%] h-[65%] rounded-full bg-brand-gold/10 blur-[90px] pointer-events-none z-0"
        animate={{
          scale: [0.92, 1.08, 0.92],
          opacity: [0.35, 0.65, 0.35]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />

      {/* Main 3D Interactive Canvas */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-3xl cursor-pointer active:cursor-grabbing flex items-center justify-center z-10 select-none"
      >
        {/* Concentric click pulse wave */}
        <AnimatePresence>
          {clickPulse && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0.8, filter: "blur(2px)" }}
              animate={{ scale: 1.6, opacity: 0, filter: "blur(8px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute w-[200px] h-[200px] rounded-full border-2 border-brand-gold pointer-events-none z-30"
            />
          )}
        </AnimatePresence>

        {/* Continuous Floating Wrapper for 3D Layers to separate continuous float from direct mouse-tilt */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Layer 1: Bottom Geometric Grid Plate */}
          <motion.div
            style={{
              z: depthLevel1,
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 rounded-3xl border border-white/[0.04] bg-brand-charcoal/60 backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden"
          >
            {/* Subtle blueprint grid inside plate */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
            <div className="absolute top-4 left-4 font-mono text-[9px] text-brand-gold/40 tracking-wider uppercase">
              Aura_Mark // Grid_Spec_v1.0
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-gold/40 tracking-wider">
              GOLDEN_RATIO_O_1.618
            </div>
          </motion.div>

          {/* Layer 2: Mid-level Elegant Gold Intersecting Monogram Circles */}
          <motion.div
            style={{
              z: depthLevel2,
              rotate: hovered ? 15 : 0,
              transformStyle: "preserve-3d",
            }}
            className="absolute w-[200px] h-[200px] flex items-center justify-center pointer-events-none transition-all duration-700 ease-out"
          >
            {/* Outlined Crescent geometry & Monogram "M" and "A" */}
            <svg viewBox="0 0 200 200" className="w-full h-full text-brand-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              {/* Golden Ratio Ring */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-40" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-20" />
              
              {/* Elegant Vector Crescent Silhouette */}
              <path 
                d="M 100 30 A 70 70 0 1 0 170 100 A 55 55 0 1 1 100 30" 
                fill="url(#goldGradient)" 
                className="opacity-90"
              />

              {/* Absolute Elegant Stylized 'M' inside */}
              <path 
                d="M 75 130 L 75 80 L 100 115 L 125 80 L 125 130" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Accent Circle Dot */}
              <circle cx="100" cy="70" r="5" fill="#FDFBF7" />

              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FAF6F0" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA7C11" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Layer 3: Top-level Floating Neon Electric Blue Glass Accent Star */}
          <motion.div
            style={{
              z: depthLevel3,
              rotate: hovered ? -25 : 0,
              transformStyle: "preserve-3d",
            }}
            className="absolute top-[20%] right-[20%] w-[55px] h-[55px] pointer-events-none transition-all duration-700 ease-out flex items-center justify-center"
          >
            {/* Floating Luxury Sparks (4-point star) */}
            <div className="absolute inset-0 bg-brand-blue/30 blur-md rounded-full" />
            <svg viewBox="0 0 64 64" className="w-full h-full text-brand-cream drop-shadow-[0_0_20px_rgba(0,71,255,0.9)]">
              <path 
                d="M32 0 L37 25 L64 32 L37 39 L32 64 L27 39 L0 32 L27 25 Z" 
                fill="currentColor"
              />
            </svg>
          </motion.div>

          {/* Small Ambient Spark in opposite corner */}
          <motion.div
            style={{
              z: depthLevel2,
              transformStyle: "preserve-3d",
            }}
            className="absolute bottom-[20%] left-[20%] w-[24px] h-[24px] pointer-events-none"
          >
            <svg viewBox="0 0 64 64" className="w-full h-full text-brand-gold">
              <path 
                d="M32 0 L36 28 L64 32 L36 36 L32 64 L28 36 L0 32 L28 28 Z" 
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Meta tags around visual */}
      <div className="absolute top-[10%] left-[5%] px-3 py-1 bg-brand-charcoal/80 border border-white/[0.05] rounded-full backdrop-blur-md font-mono text-[10px] text-brand-cream/70 tracking-tight flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
        <span>CRAFTING IDENTITY</span>
      </div>
      <div className="absolute bottom-[8%] right-[5%] px-3 py-1 bg-brand-charcoal/80 border border-white/[0.05] rounded-full backdrop-blur-md font-mono text-[10px] text-brand-cream/70 tracking-tight flex items-center gap-2">
        <span>PREMIUM RATIO OK</span>
      </div>
    </div>
  );
}
