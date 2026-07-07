import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Layers, 
  Activity, 
  Scissors, 
  Cpu, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  Video, 
  PenTool, 
  RefreshCw, 
  Eye, 
  Monitor, 
  Sliders 
} from 'lucide-react';

interface ReelTrack {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  commentary: string[];
}

const REELS: ReelTrack[] = [
  {
    id: 'vector-geometry',
    title: 'Precision Vector Bezier Curve Outlining',
    category: 'Illustrator Craft',
    duration: '0:12',
    description: 'Constructing high-contrast corporate identity monograms with custom mathematical path coordinates.',
    commentary: [
      'Initializing Adobe Illustrator master bezier grid...',
      'Plotting core quadrant anchors at coordinates X:110, Y:45.',
      'Drawing left stem curved geometry with a 1.618 golden ratio ratio...',
      'Adjusting anchor control handles to stabilize stroke weight.',
      'Applying 3px master luxury champagne stroke fill.',
      'Vector shape validated. Ready for export.'
    ]
  },
  {
    id: 'kinetic-motion',
    title: 'Kinetic Bezier Motion Keyframing',
    category: 'Motion Design Highlight',
    duration: '0:15',
    description: 'Configuring custom easing curves and frame-by-frame logo reveal acceleration in after-effects sandbox.',
    commentary: [
      'Opening motion editor keyframe layer deck...',
      'Setting initial opacity: 0%, scale: 75% at timestamp 00:00.',
      'Configuring cubic-bezier(0.16, 1, 0.3, 1) ultra-premium ease-out...',
      'Simulating momentum spring bounce for the central monogram.',
      'Pulsing radial glow highlights behind vector structures.',
      'Render sequence complete: 60fps cinematic flow compiled.'
    ]
  },
  {
    id: 'packaging-diecut',
    title: 'Luxury Product Packaging 3D Die-Cuts',
    category: 'Packaging Design Craft',
    duration: '0:10',
    description: 'Plotting complex folding bleed guides, embossing vectors, and paper texture stamp layers.',
    commentary: [
      'Mapping premium rigid box die-cut blueprints...',
      'Generating 3mm safe folding bleed margin guides.',
      'Adding gold foil hot-stamp embossing vectors for logo crest.',
      'Simulating tactile matte paper card stock micro-texture overlays.',
      'Adjusting 3D spatial box fold angle controls (90 degrees).',
      'Production mechanical file approved for luxury print.'
    ]
  }
];

export default function CraftsVideoShowcase() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30); // Percentage
  const [speed, setSpeed] = useState<0.5 | 1 | 1.5 | 2>(1);
  const [showOverlays, setShowOverlays] = useState(true);
  const [subtitleText, setSubtitleText] = useState('');
  
  const activeReel = REELS[activeReelIndex];

  // Map progress to active subtitle based on commentary length
  useEffect(() => {
    const totalSubs = activeReel.commentary.length;
    const subIndex = Math.min(
      Math.floor((progress / 100) * totalSubs),
      totalSubs - 1
    );
    setSubtitleText(activeReel.commentary[subIndex]);
  }, [progress, activeReel]);

  // Automated progress timer
  useEffect(() => {
    if (!isPlaying) return;
    
    const intervalTime = 100 * (1 / speed);
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Loop back
          return 0;
        }
        return prev + 0.8;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, speed]);

  const handleTimelineScrub = (e: ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <section id="crafts-showcase" className="py-20 md:py-28 relative border-t border-b border-white/[0.03] overflow-hidden bg-gradient-to-b from-brand-charcoal to-[#0A0A0A]">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            CRAFTS & PROCESS SHOWCASE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Production Highlights <span className="text-brand-gold font-sans not-italic font-bold">& Creative Reel</span>
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light max-w-xl mx-auto">
            Witness how we build premium digital identity, tactile package graphics, and custom bezier curve illustrations. Interact with our live production timeline console.
          </p>
        </div>

        {/* Master Editor Console Shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT SIDE: CREATIVE TRACK LIST (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Video className="w-4 h-4 text-brand-gold" />
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">SELECT PRODUCTION REEL</span>
              </div>

              <div className="space-y-3">
                {REELS.map((reel, index) => {
                  const isActive = index === activeReelIndex;
                  return (
                    <button
                      key={reel.id}
                      onClick={() => {
                        setActiveReelIndex(index);
                        setProgress(0);
                        setIsPlaying(true);
                      }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-2 relative overflow-hidden ${
                        isActive 
                          ? 'bg-brand-gold/10 border-brand-gold/40 text-white' 
                          : 'bg-white/[0.01] hover:bg-white/[0.03] border-white/[0.04] text-white/60'
                      }`}
                    >
                      {/* Active pill bar */}
                      {isActive && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
                      )}

                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider">
                          {reel.category}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-mono opacity-50">
                          <Clock className="w-3 h-3" />
                          <span>{reel.duration}</span>
                        </div>
                      </div>

                      <h4 className={`text-sm font-display font-semibold ${isActive ? 'text-brand-cream' : 'text-brand-cream/80'}`}>
                        {reel.title}
                      </h4>

                      <p className="text-[11px] text-brand-cream/50 leading-relaxed font-light line-clamp-2">
                        {reel.description}
                      </p>

                      {isActive && (
                        <div className="flex items-center gap-1 text-[10px] text-brand-gold font-mono mt-1 font-semibold uppercase">
                          <span>ACTIVE CONSOLE STREAM</span>
                          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Tips panel */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-left">
              <span className="text-[9px] font-mono text-brand-gold uppercase tracking-wider block mb-1">
                DESIGN DIRECTOR ADVICE
              </span>
              <p className="text-xs text-brand-cream/60 leading-relaxed font-light italic">
                "Our designs look luxury because we obsess over micro-details in bezier speed vectors, geometric line weight contrast, and tactical print margins. Amateur files lead to amateur conversion rates."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE VIDEO / ANIMATED PROCESS MONITOR (8 cols) */}
          <div className="lg:col-span-8 flex flex-col bg-[#161616] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Top Bar */}
            <div className="bg-[#222222] border-b border-black/40 px-5 py-3 flex items-center justify-between text-white/80 select-none">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
                </div>
                <span className="text-[10px] font-mono opacity-40 ml-2">|</span>
                <span className="text-[10px] font-mono text-brand-gold tracking-wider flex items-center gap-1.5 uppercase">
                  <Monitor className="w-3.5 h-3.5 text-brand-gold" />
                  REEL_RENDERER // {activeReel.id}.mov ({Math.round(progress)}%)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowOverlays(!showOverlays)}
                  className={`px-2 py-0.5 rounded text-[9px] font-mono border transition-all cursor-pointer ${
                    showOverlays 
                      ? 'bg-brand-gold/15 border-brand-gold/30 text-brand-gold' 
                      : 'bg-white/5 border-white/10 text-white/40'
                  }`}
                >
                  {showOverlays ? 'OVERLAYS_ON' : 'OVERLAYS_MUTED'}
                </button>
              </div>
            </div>

            {/* Simulated Rendering Screen Container */}
            <div className="flex-1 min-h-[360px] md:min-h-[420px] bg-[#0E0E0E] relative flex items-center justify-center overflow-hidden">
              
              {/* Grid backdrop */}
              {showOverlays && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
              )}

              {/* Crosshair grids */}
              {showOverlays && (
                <>
                  <div className="absolute inset-x-0 top-1/2 border-t border-white/[0.04] pointer-events-none" />
                  <div className="absolute inset-y-0 left-1/2 border-l border-white/[0.04] pointer-events-none" />
                </>
              )}

              {/* LIVE CAD ANIMATIONS MATCHING SELECTED TRACK */}
              <div className="absolute inset-0 flex items-center justify-center p-8 select-none">
                <AnimatePresence mode="wait">
                  {/* TRACK 1: VECTOR Bezier Tracing */}
                  {activeReel.id === 'vector-geometry' && (
                    <motion.div 
                      key="vector-geometry"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative w-full h-full max-w-[360px] max-h-[360px] flex items-center justify-center"
                    >
                      {/* Master compass circle base guides */}
                      {showOverlays && (
                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/[0.02] animate-spin" style={{ animationDuration: '30s' }}>
                          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                        </svg>
                      )}

                      {/* Tracing SVG Logo Monogram with active node drawing */}
                      <svg viewBox="0 0 200 200" className="w-5/6 h-5/6 text-brand-gold">
                        {/* Static grey guide path of what is being traced */}
                        <path 
                          d="M 40 160 L 70 50 L 100 120 L 130 50 L 160 160"
                          fill="none"
                          stroke="#ffffff10"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line x1="60" y1="110" x2="140" y2="110" stroke="#ffffff10" strokeWidth="1.5" />

                        {/* Animated Traced Path driven by timeline progress */}
                        <motion.path 
                          d="M 40 160 L 70 50 L 100 120 L 130 50 L 160 160"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            pathLength: progress / 100
                          }}
                        />

                        {/* Animated Crossbar */}
                        {progress > 50 && (
                          <motion.line 
                            x1="60" 
                            y1="110" 
                            x2="140" 
                            y2="110" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: (progress - 50) / 50 }}
                          />
                        )}

                        {/* Vector Pen and Node Tooltip Simulation following the trace */}
                        {showOverlays && (
                          <>
                            {/* Interactive Pen Tip Indicator */}
                            <g className="transition-transform duration-150">
                              {/* Position based on approximate math segments */}
                              {(() => {
                                let x = 40;
                                let y = 160;
                                const p = progress / 100;
                                
                                if (p <= 0.25) {
                                  const factor = p / 0.25;
                                  x = 40 + (70 - 40) * factor;
                                  y = 160 + (50 - 160) * factor;
                                } else if (p <= 0.5) {
                                  const factor = (p - 0.25) / 0.25;
                                  x = 70 + (100 - 70) * factor;
                                  y = 50 + (120 - 50) * factor;
                                } else if (p <= 0.75) {
                                  const factor = (p - 0.5) / 0.25;
                                  x = 100 + (130 - 100) * factor;
                                  y = 120 + (50 - 120) * factor;
                                } else {
                                  const factor = (p - 0.75) / 0.25;
                                  x = 130 + (160 - 130) * factor;
                                  y = 50 + (160 - 50) * factor;
                                }

                                return (
                                  <g transform={`translate(${x}, ${y})`}>
                                    <circle cx="0" cy="0" r="5" fill="#00B2FF" className="animate-ping" />
                                    <circle cx="0" cy="0" r="3.5" fill="#00B2FF" stroke="#FFF" strokeWidth="1" />
                                    
                                    {/* Handle indicators */}
                                    <line x1="0" y1="0" x2="-20" y2="10" stroke="#00B2FF" strokeWidth="0.8" />
                                    <circle cx="-20" cy="10" r="1.5" fill="#00B2FF" />

                                    <line x1="0" y1="0" x2="20" y2="-10" stroke="#00B2FF" strokeWidth="0.8" />
                                    <circle cx="20" cy="-10" r="1.5" fill="#00B2FF" />

                                    {/* Mouse cursor icon mimicking pen tip */}
                                    <g transform="translate(4, 4) scale(0.65)">
                                      <PenTool className="w-5 h-5 text-brand-gold stroke-[2.5]" />
                                    </g>
                                  </g>
                                );
                              })()}
                            </g>
                          </>
                        )}
                      </svg>
                    </motion.div>
                  )}

                  {/* TRACK 2: KINETIC Bezier Motion Keyframing */}
                  {activeReel.id === 'kinetic-motion' && (
                    <motion.div 
                      key="kinetic-motion"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative w-full h-full max-w-[360px] max-h-[360px] flex flex-col items-center justify-center"
                    >
                      {/* Easing Graph curves behind */}
                      {showOverlays && (
                        <div className="absolute inset-x-8 bottom-12 top-12 border border-white/[0.03] rounded bg-white/[0.01]">
                          {/* Grid line */}
                          <div className="absolute bottom-1/2 left-0 right-0 border-t border-dashed border-white/[0.05]" />
                          {/* Bezier cubic curve trace */}
                          <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold opacity-10" preserveAspectRatio="none">
                            <path d="M 0,100 C 16,100 30,0 100,0" fill="none" stroke="currentColor" strokeWidth="1" />
                          </svg>
                        </div>
                      )}

                      {/* Expanding, snapping, rotating geometric star elements */}
                      <motion.div 
                        style={{
                          scale: 0.5 + (progress / 200) + (Math.sin(progress * 0.15) * 0.05),
                          rotate: progress * 3.6,
                          opacity: progress < 10 ? progress / 10 : progress > 90 ? (100 - progress) / 10 : 1
                        }}
                        className="w-32 h-32 relative flex items-center justify-center"
                      >
                        {/* Overlapping gold rings */}
                        <div className="absolute inset-0 border-2 border-brand-gold rounded-full opacity-30 animate-pulse" />
                        <div className="absolute inset-3 border border-brand-gold/40 rounded-full" />
                        
                        {/* Solid design mark */}
                        <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-gold drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]">
                          <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" fill="currentColor" />
                        </svg>
                      </motion.div>

                      {/* Easing analytics overlay */}
                      {showOverlays && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/75 border border-white/5 rounded-xl p-3 flex justify-between items-center text-[10px] font-mono">
                          <div className="flex items-center gap-2">
                            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                            <span className="text-white/60">ACCEL_EASE: </span>
                            <span className="text-emerald-400 font-bold">CUBIC_BEZIER</span>
                          </div>
                          <span className="text-white/40">VELOCITY: {Math.round(Math.abs(Math.cos(progress * 0.06) * 120))} fps</span>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* TRACK 3: LUXURY PACKAGING DIE-CUTS */}
                  {activeReel.id === 'packaging-diecut' && (
                    <motion.div 
                      key="packaging-diecut"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative w-full h-full max-w-[360px] max-h-[360px] flex items-center justify-center"
                    >
                      {/* Blueprint construction guides */}
                      {showOverlays && (
                        <div className="absolute inset-4 border border-dashed border-red-500/20 rounded-2xl flex items-center justify-center">
                          <div className="absolute top-2 left-2 text-[8px] font-mono text-red-500/60 uppercase">Bleed Limit (3mm)</div>
                          <div className="absolute bottom-2 right-2 text-[8px] font-mono text-emerald-400/60 uppercase">Emboss Guide</div>
                        </div>
                      )}

                      {/* 3D simulated box folding perspective */}
                      <div 
                        style={{ perspective: '400px' }}
                        className="w-48 h-48 relative flex items-center justify-center"
                      >
                        <motion.div
                          style={{
                            rotateX: 25 + Math.sin(progress * 0.05) * 15,
                            rotateY: -20 + progress * 0.8,
                            transformStyle: 'preserve-3d'
                          }}
                          className="w-32 h-32 bg-brand-charcoal border-2 border-brand-gold rounded-xl flex flex-col justify-between p-4 shadow-2xl relative"
                        >
                          {/* Inner 3D panels */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal to-brand-dark-gray opacity-80 rounded-xl pointer-events-none" />
                          
                          {/* Premium embossed insignia in gold foil */}
                          <div className="relative z-10 mx-auto text-center mt-3">
                            <Sparkles className="w-8 h-8 text-brand-gold mx-auto drop-shadow-[0_0_10px_rgba(197,160,89,0.4)] animate-pulse" />
                            <p className="font-sans text-[8px] uppercase tracking-widest text-brand-gold/85 mt-2 font-black">AURA FLUIDE</p>
                            <p className="font-mono text-[6px] text-white/40 uppercase tracking-wider">EAU DE PARFUM</p>
                          </div>

                          <div className="relative z-10 flex justify-between text-[6px] font-mono text-white/30 border-t border-white/5 pt-2">
                            <span>100ML 3.4 FL.OZ</span>
                            <span>FRANCE</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Mechanical parameters HUD */}
                      {showOverlays && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/75 border border-white/5 rounded-xl p-3 flex justify-between items-center text-[10px] font-mono">
                          <div className="flex items-center gap-1.5">
                            <Scissors className="w-3.5 h-3.5 text-red-400" />
                            <span className="text-white/60">DIE_CUT CUT_PLANE: </span>
                            <span className="text-red-400 font-bold">100% COMPLETE</span>
                          </div>
                          <span className="text-white/40">FOLD_GAP: 0.15mm</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* LIVE Subtitle Voiceover Bar (Bottom 1/5 of Screen) */}
              <div className="absolute bottom-16 left-6 right-6 z-20 text-center select-none pointer-events-none">
                <div className="bg-black/85 border border-white/10 px-4 py-2.5 rounded-xl inline-block max-w-[90%] shadow-xl backdrop-blur-md">
                  <p className="text-xs md:text-sm font-sans font-medium text-brand-cream/95 leading-relaxed tracking-wide">
                    {subtitleText}
                  </p>
                </div>
              </div>

              {/* Watermark brand tag */}
              <div className="absolute top-4 right-4 opacity-30 select-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5">MAISON_AURA_REEL_v2</span>
              </div>

            </div>

            {/* 4. Timeline Controller Deck (Bottom Row Controls) */}
            <div className="bg-[#1E1E1E] border-t border-black/40 p-4 shrink-0 flex flex-col md:flex-row gap-4 justify-between items-center">
              
              {/* Playback Controls Left */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md shadow-brand-gold/10"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-brand-charcoal" /> : <Play className="w-4 h-4 fill-brand-charcoal ml-0.5" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer"
                    title={isMuted ? 'Unmute voiceover' : 'Mute voiceover'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-xs font-mono text-white/50 flex gap-2">
                  <span className="text-white/80 font-bold">{activeReel.duration}</span>
                  <span>/</span>
                  <span className="text-brand-gold font-bold">100% COMPLETE</span>
                </div>
              </div>

              {/* Timeline Scrubber Center (4/6 wide) */}
              <div className="flex-1 w-full flex items-center gap-3">
                <span className="text-[10px] font-mono text-white/30 shrink-0">0:00</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress} 
                  onChange={handleTimelineScrub}
                  className="flex-1 accent-brand-gold bg-black/50 rounded-lg h-1 cursor-pointer"
                />
                <span className="text-[10px] font-mono text-white/30 shrink-0">{activeReel.duration}</span>
              </div>

              {/* Render Speed controls Right */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-mono text-white/40">SPEED:</span>
                <div className="flex bg-black/40 border border-white/5 p-0.5 rounded-lg">
                  {([0.5, 1, 1.5, 2] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setSpeed(s)}
                      className={`px-2.5 py-1 rounded text-[9px] font-mono transition-all cursor-pointer ${
                        speed === s 
                          ? 'bg-brand-gold text-brand-charcoal font-black' 
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
