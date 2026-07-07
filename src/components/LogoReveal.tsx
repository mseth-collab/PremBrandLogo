import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Layers, Sliders, Eye, EyeOff, Activity, Info } from 'lucide-react';
import { playClickVoiceEffect } from '../lib/audio';

export default function LogoReveal() {
  const [revealKey, setRevealKey] = useState(0);
  
  // Custom interactive motion and blur parameters
  const [traceDuration, setTraceDuration] = useState(2.2);
  const [blurIntensity, setBlurIntensity] = useState(12); // drop-shadow blur value
  const [glowColor, setGlowColor] = useState<'gold' | 'cyan' | 'rose' | 'cream'>('gold');
  const [orbitSpeed, setOrbitSpeed] = useState(25);
  const [showGrid, setShowGrid] = useState(true);
  const [showSpiral, setShowSpiral] = useState(false);
  const [vectorScale, setVectorScale] = useState(1.0);
  const [autoLoop, setAutoLoop] = useState(true);

  const triggerReplay = () => {
    setRevealKey(prev => prev + 1);
  };

  // Automatic looping reveal timeline (runs on a 5.5 second sequence)
  useEffect(() => {
    if (!autoLoop) return;
    
    const interval = setInterval(() => {
      setRevealKey(prev => prev + 1);
    }, 5500); // 5.5 seconds: 2.2 seconds tracing + 3.3 seconds final locked state

    return () => clearInterval(interval);
  }, [autoLoop]);

  // Retrigger automatic replay when parameters change significantly to show live feedback
  useEffect(() => {
    setRevealKey(prev => prev + 1);
  }, [traceDuration, glowColor, showGrid, showSpiral]);

  // Color mapper for our dynamic glow effects
  const glowColorMap = {
    gold: 'rgba(197, 160, 89, 0.45)',
    cyan: 'rgba(0, 229, 255, 0.45)',
    rose: 'rgba(255, 42, 60, 0.45)',
    cream: 'rgba(253, 251, 247, 0.35)',
  };

  const glowStrokeMap = {
    gold: 'text-brand-gold',
    cyan: 'text-cyan-400',
    rose: 'text-red-400',
    cream: 'text-brand-cream',
  };

  const activeGlowColor = glowColorMap[glowColor];
  const activeStrokeClass = glowStrokeMap[glowColor];

  return (
    <section id="logo-reveal" className="py-20 md:py-28 relative border-t border-white/[0.03] overflow-hidden bg-brand-charcoal/40">
      {/* Dynamic backdrop shadows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            STUDIO TRADEMARK KINETICS & BLUR LAB
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Interactive <span className="text-brand-gold font-sans not-italic font-bold">Logo Motion</span> Lab
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light max-w-xl mx-auto">
            Design isn't static. Adjust kinetic parameters, vector traces, glow colors, and real-time motion blur overlays using our spatial control console.
          </p>
        </div>

        {/* Dynamic Studio Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Live Stage Canvas (7 Cols) */}
          <div className="lg:col-span-7 bg-brand-charcoal border border-white/[0.05] rounded-3xl p-6 md:p-10 shadow-2xl relative flex flex-col items-center justify-center min-h-[480px]">
            
            {/* Tech specs backplate */}
            <div className="absolute top-6 left-6 font-mono text-[9px] text-white/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span>ORBIT_SCALE: 1.618 // GLOW_BLUR: {blurIntensity}px // TRACE: {traceDuration}s</span>
            </div>

            <div className="absolute top-5 right-5 flex items-center gap-2 flex-wrap justify-end">
              <button
                onClick={() => setAutoLoop(!autoLoop)}
                className={`p-2 px-3 border rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[10px] font-mono ${
                  autoLoop 
                    ? 'bg-brand-gold/15 border-brand-gold/30 text-brand-gold' 
                    : 'bg-white/[0.02] border-white/[0.05] text-white/40 hover:text-white/60 hover:border-white/10'
                }`}
                title="Toggle continuous 3-5s looping logo reveal preview"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${autoLoop ? 'bg-brand-gold animate-pulse' : 'bg-white/30'}`} />
                <span>AUTO-LOOP: {autoLoop ? 'ON' : 'OFF'}</span>
              </button>

              <button 
                onClick={triggerReplay}
                className="p-2 px-3 bg-white/[0.02] border border-white/[0.05] hover:border-brand-gold/40 text-white/50 hover:text-brand-gold rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[10px] font-mono"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RE-RUN</span>
              </button>
            </div>

            {/* Core Animated SVG Canvas with Interactive Variables */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={revealKey} 
                whileHover={{ scale: 1.04 * vectorScale, y: -4 }}
                whileTap={{ scale: 0.98 * vectorScale }}
                onClick={() => {
                  playClickVoiceEffect();
                  triggerReplay();
                }}
                className="relative w-76 h-76 flex items-center justify-center transition-all duration-300 cursor-pointer group select-none"
                style={{ transform: `scale(${vectorScale})` }}
              >
                {/* Ambient backdrop glow that expands and brightens on hover */}
                <div className="absolute inset-4 rounded-full bg-brand-gold/0 group-hover:bg-brand-gold/5 blur-2xl transition-all duration-500 scale-75 group-hover:scale-110 pointer-events-none" />
                
                {/* SVG Canvas */}
                <svg viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full ${activeStrokeClass} transition-colors duration-500`}>
                  
                  {/* Golden Spiral Geometry Option */}
                  {showSpiral && (
                    <motion.path
                      d="M 100 100 A 6 6 0 0 1 106 100 A 12 12 0 0 1 94 100 A 22 22 0 0 1 116 100 A 36 36 0 0 1 80 100 A 58 58 0 0 1 138 100 A 94 94 0 0 1 44 100 A 150 150 0 0 1 194 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.4"
                      strokeDasharray="2 4"
                      className="opacity-40"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeOut" }}
                    />
                  )}

                  {/* 1. Orbit Ring 1 (Speed controlled) */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                    className="opacity-25"
                    animate={{ rotate: 360 }}
                    transition={{ duration: orbitSpeed, repeat: Infinity, ease: "linear" }}
                  />

                  {/* 2. Orbit Ring 2 */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="52.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray={showGrid ? "none" : "3 3"}
                    className="opacity-30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
                  />

                  {/* 3. Mathematical Axis Guidelines */}
                  {showGrid && (
                    <>
                      <motion.line
                        x1="100" y1="10" x2="100" y2="190"
                        stroke="currentColor"
                        strokeWidth="0.25"
                        strokeDasharray="3 3"
                        className="opacity-20"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                      <motion.line
                        x1="10" y1="100" x2="190" y2="100"
                        stroke="currentColor"
                        strokeWidth="0.25"
                        strokeDasharray="3 3"
                        className="opacity-20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                      {/* Technical diagonal grid bounds */}
                      <motion.line
                        x1="30" y1="30" x2="170" y2="170"
                        stroke="currentColor"
                        strokeWidth="0.15"
                        strokeDasharray="1 5"
                        className="opacity-20"
                      />
                    </>
                  )}

                  {/* 4. The main glowing Brand mark path "M" with interactive Blur drop-shadow */}
                  <motion.path
                    d="M 50 140 L 75 60 L 100 120 L 125 60 L 150 140"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ 
                      pathLength: 0, 
                      filter: `drop-shadow(0 0 0px ${activeGlowColor})` 
                    }}
                    animate={{ 
                      pathLength: 1, 
                      filter: `drop-shadow(0 0 ${blurIntensity}px ${activeGlowColor})` 
                    }}
                    transition={{ duration: traceDuration, ease: "easeInOut" }}
                  />

                  {/* Secondary cross bar for "A" form */}
                  <motion.line
                    x1="70"
                    y1="110"
                    x2="130"
                    y2="110"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: traceDuration * 0.6, duration: traceDuration * 0.4, ease: "easeOut" }}
                  />

                  {/* Tiny geometric dot accents at vertex coordinates */}
                  <motion.circle
                    cx="75"
                    cy="60"
                    r="3.5"
                    fill="#FDFBF7"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: traceDuration * 0.8, type: "spring", stiffness: 150 }}
                  />
                  <motion.circle
                    cx="125"
                    cy="60"
                    r="3.5"
                    fill="#FDFBF7"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: traceDuration * 0.9, type: "spring", stiffness: 150 }}
                  />
                </svg>

                {/* Central Lettering text fade-in */}
                <div className="absolute inset-0 flex flex-col justify-end items-center pb-6 select-none pointer-events-none">
                  <motion.div
                    initial={{ y: 15, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: traceDuration * 0.8, duration: 0.8 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-display font-black tracking-[0.25em] text-brand-cream">
                      BRAND’M’AURA
                    </h3>
                    <span className="text-[8px] font-mono tracking-[0.4em] text-brand-gold uppercase block mt-1">
                      KINETIC INTERACTION
                    </span>
                  </motion.div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Bottom Realtime Telemetry Logging */}
            <div className="mt-8 border-t border-white/[0.04] pt-5 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-[9px] font-mono text-white/30 text-left">
              <div>
                <span className="block text-white/15">STAGE_STATE:</span>
                <span className="text-brand-gold font-medium">RENDERING_ACTIVE</span>
              </div>
              <div>
                <span className="block text-white/15">RENDER_ALGORITHM:</span>
                <span className="text-brand-cream">BEZIER_INTERPOL</span>
              </div>
              <div>
                <span className="block text-white/15">DYNAMIC_BLUR:</span>
                <span className="text-brand-gold">{blurIntensity}PX</span>
              </div>
              <div>
                <span className="block text-white/15">FPS_TELEMETRY:</span>
                <span className="text-green-400">60.00 FPS</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Lab Controls Center (5 Cols) */}
          <div className="lg:col-span-5 bg-brand-dark-gray/20 border border-white/[0.03] hover:border-brand-gold/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.05]">
                <Sliders className="w-4 h-4 text-brand-gold" />
                <h4 className="font-mono text-xs text-brand-cream uppercase tracking-wider">
                  MOTION & GLOW COEFFICIENTS
                </h4>
              </div>

              {/* Slider 1: Vector Trace Speed */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-mono text-white/50">TRACE DURATION</span>
                  <span className="font-mono text-brand-gold">{traceDuration.toFixed(1)} seconds</span>
                </div>
                <input 
                  type="range"
                  min="0.8"
                  max="5.0"
                  step="0.2"
                  value={traceDuration}
                  onChange={(e) => setTraceDuration(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <span className="text-[10px] text-white/30 font-light block mt-1">Controls the speed of the vector pencil drawing the Brand 'M' monogram.</span>
              </div>

              {/* Slider 2: Glow & Blur Intensity */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-mono text-white/50">GLOW BLUR RADIUS</span>
                  <span className="font-mono text-brand-gold">{blurIntensity} pixels</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="24"
                  step="1"
                  value={blurIntensity}
                  onChange={(e) => setBlurIntensity(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <span className="text-[10px] text-white/30 font-light block mt-1">Adjusts the Gaussian blur intensity of the ambient drop-shadow glow behind the mark.</span>
              </div>

              {/* Slider 3: Outer Orbit Speed */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-mono text-white/50">ORBIT SPEED</span>
                  <span className="font-mono text-brand-gold">{orbitSpeed}s / loop</span>
                </div>
                <input 
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={orbitSpeed}
                  onChange={(e) => setOrbitSpeed(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <span className="text-[10px] text-white/30 font-light block mt-1">Changes the rotational rotation period of the dashed golden ratio compass circles.</span>
              </div>

              {/* Slider 4: Vector Canvas Scale */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-mono text-white/50">VECTOR SCALE</span>
                  <span className="font-mono text-brand-gold">{(vectorScale * 100).toFixed(0)}%</span>
                </div>
                <input 
                  type="range"
                  min="0.8"
                  max="1.3"
                  step="0.05"
                  value={vectorScale}
                  onChange={(e) => setVectorScale(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
              </div>

              {/* Selection: Aura Glow Color */}
              <div className="mb-6">
                <span className="font-mono text-xs text-white/50 block mb-2">GLOW SPECTRUM COLOR</span>
                <div className="grid grid-cols-4 gap-2">
                  {(['gold', 'cyan', 'rose', 'cream'] as const).map((color) => (
                    <button
                      key={color}
                      onClick={() => setGlowColor(color)}
                      className={`py-2 rounded-xl text-[10px] font-mono border transition-all uppercase ${
                        glowColor === color 
                          ? 'bg-brand-gold/15 border-brand-gold text-brand-gold' 
                          : 'bg-white/[0.01] border-white/[0.04] text-white/50 hover:border-white/20'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Switches: Show grid & show spiral */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`flex items-center justify-between p-3 rounded-2xl border text-xs font-mono transition-all ${
                    showGrid 
                      ? 'bg-white/[0.04] border-brand-gold/30 text-brand-cream' 
                      : 'bg-white/[0.01] border-white/[0.03] text-white/35'
                  }`}
                >
                  <span>GRID CONSTRAINTS</span>
                  {showGrid ? <Eye className="w-4 h-4 text-brand-gold" /> : <EyeOff className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setShowSpiral(!showSpiral)}
                  className={`flex items-center justify-between p-3 rounded-2xl border text-xs font-mono transition-all ${
                    showSpiral 
                      ? 'bg-white/[0.04] border-brand-gold/30 text-brand-cream' 
                      : 'bg-white/[0.01] border-white/[0.03] text-white/35'
                  }`}
                >
                  <span>GOLDEN SPIRAL</span>
                  {showSpiral ? <Eye className="w-4 h-4 text-brand-gold" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Bottom mini card */}
            <div className="mt-8 p-4 bg-brand-gold/5 rounded-2xl border border-brand-gold/10 flex gap-3 items-start">
              <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <p className="text-[11px] text-brand-cream/70 font-light leading-relaxed">
                <strong>Studio Architect Tip:</strong> For quiet luxury, use <em>Cream / Gold Glow</em> with a longer 3-second trace duration. For modern software and startups, select <em>Cyan Glow</em> with a rapid trace duration.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
