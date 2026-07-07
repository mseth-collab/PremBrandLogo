import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Sparkles, Smartphone, Award, Film, PlayCircle } from 'lucide-react';

export default function MotionBranding() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAdSlide, setActiveAdSlide] = useState(0);

  // Auto loop the ad slideshow
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveAdSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const adSlides = [
    {
      title: "Maison Aura Cellular",
      subtitle: "Silent luxury skincare",
      tag: "ESTABLISHED IN NY",
      color: "#FCFAF7",
      textColor: "#1E231F",
      bgGradient: "from-[#F5F2ED] to-[#E6DCD0]"
    },
    {
      title: "Novatech Systems",
      subtitle: "Continuous enterprise audit",
      tag: "SYS_LOAD: 0.04ms",
      color: "#0A0A0A",
      textColor: "#FFFFFF",
      bgGradient: "from-[#111115] to-[#1a1a24]"
    },
    {
      title: "Luna Accessories",
      subtitle: "Gold-foiled moon jewelry",
      tag: "EST. PARIS",
      color: "#D4AF37",
      textColor: "#0A0A0A",
      bgGradient: "from-[#C5A059] via-[#E8D9C0] to-[#A6803C]"
    }
  ];

  return (
    <section id="motion-branding" className="py-20 md:py-28 relative border-t border-white/[0.03] overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            KINETIC BRAND REVEALS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Interactive <span className="text-brand-gold font-sans not-italic font-bold">Motion Branding</span> System
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light">
            We animate static marks into responsive motion systems for high-impact social media, mobile scroll mockups, and corporate video signatures.
          </p>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/[0.05] hover:border-brand-gold/30 rounded-full text-xs font-mono text-brand-gold hover:text-brand-cream transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>PAUSE KINETIC LOOPS</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 animate-pulse" />
                <span>PLAY KINETIC LOOPS</span>
              </>
            )}
          </button>
        </div>

        {/* 4 Loop Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          {/* Loop 1: Custom SVG Logo Animation Trace */}
          <div className="bg-brand-dark-gray/20 rounded-3xl border border-white/[0.04] p-6 flex flex-col justify-between h-[480px]">
            <div>
              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block mb-2">LOOP_01 // KINETIC VECTOR LOGO</span>
              <h3 className="text-lg font-display font-semibold text-brand-cream">Logo Animation Signature</h3>
              <p className="text-xs text-brand-cream/60 font-light mt-1"> Timeless tracer lines forming the custom Maison Aura and Luna marks dynamically.</p>
            </div>

            {/* Animation Box */}
            <div className="flex-1 my-6 bg-brand-charcoal rounded-2xl border border-white/[0.03] relative overflow-hidden flex items-center justify-center">
              {/* Specs grid backdrop */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* Tracer Circle */}
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-brand-gold/30"
                />

                {/* Animated Logo Tracer SVG */}
                <svg viewBox="0 0 100 100" className="w-28 h-28 text-brand-gold">
                  <motion.path
                    d="M 50 10 C 70 30, 70 70, 50 90 C 30 70, 30 30, 50 10 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    animate={isPlaying ? {
                      strokeDasharray: ["0, 400", "150, 400", "0, 400"],
                      strokeDashoffset: [0, -100, -200],
                    } : {}}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M 50 20 L 50 80 M 35 50 L 65 50"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-40"
                  />
                  <motion.text
                    x="50"
                    y="55"
                    fontFamily="var(--font-serif)"
                    fontSize="18"
                    textAnchor="middle"
                    fill="#F5F2ED"
                    animate={isPlaying ? {
                      opacity: [0.1, 1, 0.1],
                      scale: [0.95, 1.05, 0.95]
                    } : {}}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    AURA
                  </motion.text>
                </svg>
              </div>

              <div className="absolute bottom-3 left-3 font-mono text-[8px] text-white/30">
                RENDER STATE: KINETIC_VECTOR_VECTOR_M
              </div>
            </div>

            <div className="text-left">
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">USED IN</p>
              <p className="text-xs text-brand-cream/80">Website Hero Headers, Brand Intro reels.</p>
            </div>
          </div>

          {/* Loop 2: Social Media Ads Live Showcase */}
          <div className="bg-brand-dark-gray/20 rounded-3xl border border-white/[0.04] p-6 flex flex-col justify-between h-[480px]">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block mb-2">LOOP_02 // KINETIC SOCIALS</span>
                  <h3 className="text-lg font-display font-semibold text-brand-cream">Social Media Launch Ads</h3>
                </div>
                <div className="px-2 py-0.5 bg-brand-gold/10 border border-brand-gold/20 text-[9px] font-mono text-brand-gold uppercase tracking-wider rounded">
                  STORY SCALE
                </div>
              </div>
              <p className="text-xs text-brand-cream/60 font-light mt-1">Simulated responsive Instagram/LinkedIn slide ad loop with auto-changing content typography.</p>
            </div>

            {/* Simulated Smartphone Screen */}
            <div className="flex-1 my-6 bg-[#000000] border-4 border-[#1A1A1A] rounded-2xl relative overflow-hidden flex flex-col justify-between p-4 shadow-2xl">
              {/* Dynamic slide backdrop */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAdSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 bg-gradient-to-tr ${adSlides[activeAdSlide].bgGradient} z-0 opacity-90`}
                />
              </AnimatePresence>

              {/* Status Indicator */}
              <div className="relative z-10 flex justify-between items-center text-[8px] font-mono mix-blend-difference text-white">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
                  <span>LAUNCH_CAMPAIGN</span>
                </div>
                <span>{adSlides[activeAdSlide].tag}</span>
              </div>

              {/* Center Content Typography */}
              <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAdSlide}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                  >
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold mix-blend-difference text-white">
                      PREMIUM EDITION
                    </span>
                    <h4 className="text-xl font-serif italic leading-tight mix-blend-difference text-white">
                      {adSlides[activeAdSlide].title}
                    </h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-70 mix-blend-difference text-white">
                      {adSlides[activeAdSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Indicators */}
              <div className="relative z-10 flex justify-center gap-1.5 pb-1">
                {adSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveAdSlide(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeAdSlide === i ? 'w-5 bg-brand-gold' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-left">
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">USED IN</p>
              <p className="text-xs text-brand-cream/80">Paid ads campaigns, Pinterest, and TikTok frames.</p>
            </div>
          </div>

          {/* Loop 3: Modern Website Mockup Auto Scroll */}
          <div className="bg-brand-dark-gray/20 rounded-3xl border border-white/[0.04] p-6 flex flex-col justify-between h-[480px]">
            <div>
              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block mb-2">LOOP_03 // RESPONSIVE SCROLL</span>
              <h3 className="text-lg font-display font-semibold text-brand-cream">Sleek Web Scroll Experience</h3>
              <p className="text-xs text-brand-cream/60 font-light mt-1">Self-scrolling device frame demonstrating premium typography, custom spacing and grid layouts.</p>
            </div>

            {/* Desktop Web Frame simulated */}
            <div className="flex-1 my-6 bg-brand-charcoal rounded-2xl border border-white/[0.05] overflow-hidden relative flex flex-col">
              {/* Window Header */}
              <div className="h-6 bg-white/[0.02] border-b border-white/[0.05] px-3 flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="ml-2 text-[7px] font-mono text-white/30">maison-aura.com/preview</div>
              </div>

              {/* Scrolling Content */}
              <div className="flex-1 overflow-hidden relative">
                <motion.div
                  animate={isPlaying ? { y: ["0%", "-55%", "0%"] } : {}}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-x-0 top-0 p-4 space-y-6 text-left"
                >
                  {/* Web Hero mockup section */}
                  <div className="border border-brand-gold/10 p-3 bg-brand-gold/[0.01] rounded-lg">
                    <span className="text-[7px] font-mono text-brand-gold uppercase block">MAISON AURA</span>
                    <h5 className="text-sm font-serif italic text-brand-cream mt-1">Ethereal Skin Cellular Marine Serums</h5>
                    <div className="w-10 h-[1px] bg-brand-gold my-2" />
                    <p className="text-[8px] text-white/40 leading-snug">Designed for absolute biological cellular skin repair. Silent organic luxury.</p>
                  </div>

                  {/* Image banner block */}
                  <div className="aspect-[16/9] bg-neutral-900 rounded-lg overflow-hidden relative border border-white/[0.04]">
                    <img 
                      src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=400&q=80" 
                      alt="Cosmetic Bottle" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Core stats grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/[0.02] p-2 rounded-md border border-white/[0.03]">
                      <p className="text-[10px] font-serif italic text-brand-gold">100%</p>
                      <p className="text-[6px] font-mono text-white/40 uppercase">Botanical Extracts</p>
                    </div>
                    <div className="bg-white/[0.02] p-2 rounded-md border border-white/[0.03]">
                      <p className="text-[10px] font-serif italic text-brand-gold">Sephora</p>
                      <p className="text-[6px] font-mono text-white/40 uppercase">Featured Brand</p>
                    </div>
                  </div>

                  {/* Physical bottle mockup */}
                  <div className="p-3 bg-brand-gold/5 rounded-lg border border-brand-gold/10 text-center">
                    <p className="text-[8px] font-serif italic text-brand-cream">"The ultimate organic unboxing."</p>
                    <span className="text-[6px] font-mono text-brand-gold block mt-1">— VOGUE ESSENTIALS</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-2 right-2 text-[7px] font-mono text-white/20">
                SCROLL_INDICATOR // AUTO
              </div>
            </div>

            <div className="text-left">
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">USED IN</p>
              <p className="text-xs text-brand-cream/80">Premium Web launch platforms, Figma interaction proofs.</p>
            </div>
          </div>

          {/* Loop 4: Before / After Brand Transformation */}
          <div className="bg-brand-dark-gray/20 rounded-3xl border border-white/[0.04] p-6 flex flex-col justify-between h-[480px]">
            <div>
              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block mb-2">LOOP_04 // BRAND EVOLUTION</span>
              <h3 className="text-lg font-display font-semibold text-brand-cream">Before & After Redesign</h3>
              <p className="text-xs text-brand-cream/60 font-light mt-1">Self-sweeping division line showing rebranding evolution from plain unaligned text to premium balanced serif layout.</p>
            </div>

            {/* Simulated split screen box */}
            <div className="flex-1 my-6 bg-[#09090B] rounded-2xl border border-white/[0.03] relative overflow-hidden flex items-center justify-center">
              {/* Grid backdrop */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* BEFORE STATE (Underneath layer) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-neutral-950/40">
                <span className="text-xs font-sans font-normal line-through text-red-500/80 tracking-wide uppercase">
                  Aura Cosmetics Inc.
                </span>
                <span className="text-[8px] font-mono text-red-400/50 mt-1.5 uppercase tracking-widest">
                  Arial Regular // Saturated Squeeze
                </span>
              </div>

              {/* AFTER STATE (Sliding top layer) */}
              <motion.div
                className="absolute inset-y-0 left-0 overflow-hidden bg-brand-charcoal border-r border-brand-gold z-10 flex items-center"
                animate={isPlaying ? { width: ["15%", "85%", "15%"] } : { width: "50%" }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
              >
                {/* Fixed size inner box to prevent compression distortion when width changes */}
                <div className="w-[180px] h-[150px] absolute left-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-base font-serif italic text-brand-gold tracking-wider block whitespace-nowrap">
                    Maison Aura
                  </span>
                  <div className="w-8 h-[1px] bg-brand-gold/30 my-2" />
                  <span className="text-[7px] font-mono text-brand-cream/90 tracking-[0.3em] uppercase block whitespace-nowrap">
                    SILENT LUXURY
                  </span>
                </div>

                {/* Vertical Slider Bar Indicator */}
                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.7)]">
                  <div className="absolute top-1/2 -right-[5px] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-gold border border-brand-charcoal flex items-center justify-center">
                    <div className="w-1 h-1 bg-brand-charcoal rounded-full" />
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-3 right-3 font-mono text-[8px] text-white/30">
                SWEEPING: ACTIVE
              </div>
            </div>

            <div className="text-left">
              <p className="text-[10px] font-mono text-white/30 tracking-widest mb-1 uppercase">USED IN</p>
              <p className="text-xs text-brand-cream/80">Premium Case studies, pitching redesign prospects.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
