import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MousePointer, 
  Grid, 
  PenTool, 
  Type, 
  Move, 
  MessageSquare, 
  Layers, 
  Sliders, 
  Download, 
  Eye, 
  EyeOff, 
  Sparkles, 
  RefreshCw, 
  ShieldCheck, 
  Check, 
  Maximize2 
} from 'lucide-react';

interface LayerItem {
  id: string;
  name: string;
  type: 'grid' | 'vector' | 'text' | 'group' | 'guide';
  visible: boolean;
}

export default function FigmaSandbox() {
  // Figma Toolbar Tools
  const [activeTool, setActiveTool] = useState<'select' | 'pen' | 'text' | 'grid' | 'comment'>('select');
  
  // Simulated Figma Layers State
  const [layers, setLayers] = useState<LayerItem[]>([
    { id: 'layer-specs', name: 'Coordinate Specs & Tooltips', type: 'guide', visible: true },
    { id: 'layer-spiral', name: 'Golden Ratio Spiral', type: 'vector', visible: true },
    { id: 'layer-orbit', name: 'Curved Geometry Orbits', type: 'vector', visible: true },
    { id: 'layer-monogram', name: 'Primary Luxury Monogram M', type: 'vector', visible: true },
    { id: 'layer-grid', name: 'Figma Layout Blueprint Grid', type: 'grid', visible: true },
  ]);

  // Design Canvas Inspectors Controls
  const [rotX, setRotX] = useState<number>(15);
  const [rotY, setRotY] = useState<number>(-18);
  const [layerSep, setLayerSep] = useState<number>(60);
  const [gridSpacing, setGridSpacing] = useState<number>(16);
  const [scaleFactor, setScaleFactor] = useState<number>(1.0);
  const [brandColor, setBrandColor] = useState<string>('#C5A059'); // Default gold
  const [isAutoOrbit, setIsAutoOrbit] = useState<boolean>(true);
  const [isExported, setIsExported] = useState<boolean>(false);
  const [canvasHoverPos, setCanvasHoverPos] = useState({ x: 180, y: 150 });
  const [isHoveringCanvas, setIsHoveringCanvas] = useState<boolean>(false);

  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Auto rotation timer logic
  useEffect(() => {
    if (!isAutoOrbit) return;
    const interval = setInterval(() => {
      setRotY(prev => {
        let next = prev + 0.4;
        if (next > 180) return -180;
        return next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoOrbit]);

  // Handle layer toggle visibility
  const toggleLayerVisibility = (id: string) => {
    setLayers(prev => prev.map(layer => 
      layer.id === id ? { ...layer, visible: !layer.visible } : layer
    ));
  };

  // Helper getters for layers state
  const isLayerVisible = (id: string) => {
    return layers.find(l => l.id === id)?.visible ?? false;
  };

  // Tracking mouse over canvas for coordinate specs HUD
  const handleCanvasMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!canvasContainerRef.current) return;
    const rect = canvasContainerRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCanvasHoverPos({ x, y });
  };

  // Simulating vector export flow
  const handleExportAsset = () => {
    setIsExported(true);
    setTimeout(() => {
      setIsExported(false);
    }, 3500);
  };

  // Preset Color Palettes for the Figma Inspector
  const COLOR_PRESETS = [
    { name: 'Aura Gold', hex: '#C5A059' },
    { name: 'Marine Emerald', hex: '#1C5B42' },
    { name: 'Platin Silver', hex: '#A8B1C0' },
    { name: 'Lunar Rose', hex: '#D1A39E' },
    { name: 'Soleil Yellow', hex: '#D4AF37' }
  ];

  const resetCanvasValues = () => {
    setRotX(15);
    setRotY(-18);
    setLayerSep(60);
    setGridSpacing(16);
    setScaleFactor(1.0);
    setBrandColor('#C5A059');
    setIsAutoOrbit(false);
  };

  return (
    <section id="figma-sandbox" className="py-20 md:py-28 relative border-t border-white/[0.03] overflow-hidden bg-brand-charcoal/30">
      
      {/* Absolute visual backdrops */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            INTERACTIVE BRAND SANDBOX
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Maison Aura <span className="text-brand-gold font-sans not-italic font-bold">Brand System Preview</span>
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light max-w-xl mx-auto">
            Interact with our active Brand System Preview workspace. Play with 3D layers, align vector anchor points, toggle design templates, and export custom geometric structures.
          </p>
        </div>

        {/* Figma Editor Shell */}
        <div className="bg-[#1E1E1E] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[700px] max-w-6xl mx-auto">
          
          {/* 1. Figma Header Menu Bar */}
          <div className="bg-[#2C2C2C] border-b border-black/40 h-12 px-4 flex items-center justify-between shrink-0 select-none text-white/90">
            <div className="flex items-center gap-4">
              {/* Figma-style colorful logo block */}
              <div className="flex flex-col gap-[1px] w-5 h-5 bg-[#F24E1E] rounded-l-md rounded-tr-md overflow-hidden relative p-[1px] justify-center items-center">
                <div className="text-[10px] font-black font-sans text-white leading-none">F</div>
              </div>

              <div className="hidden md:flex items-center gap-1.5 text-xs font-mono opacity-80">
                <span className="text-white/40">Drafts</span>
                <span>/</span>
                <span className="text-brand-gold font-bold">Maison Aura Premium Assets System</span>
                <span className="px-1.5 py-0.5 bg-white/5 border border-white/15 rounded text-[8px] text-white/50">V1.618</span>
              </div>
            </div>

            {/* Simulated Live status and Zoom controls */}
            <div className="flex items-center gap-3 text-xs font-mono text-white/60">
              <div className="flex items-center gap-1.5 bg-black/25 px-2.5 py-1 rounded border border-white/[0.04]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-bold uppercase">CAD_LIVE</span>
              </div>
              <span className="opacity-80">100% Zoom</span>
            </div>
          </div>

          {/* 2. Figma Design Tools Secondary Bar */}
          <div className="bg-[#2C2C2C] border-b border-black/40 h-10 px-4 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              {/* Tool 1: Pointer */}
              <button 
                onClick={() => setActiveTool('select')}
                className={`p-1.5 rounded transition-all cursor-pointer ${
                  activeTool === 'select' 
                    ? 'bg-brand-gold text-brand-charcoal font-bold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Select Tool (V)"
              >
                <MousePointer className="w-4 h-4" />
              </button>

              {/* Tool 2: Pen Tool */}
              <button 
                onClick={() => setActiveTool('pen')}
                className={`p-1.5 rounded transition-all cursor-pointer ${
                  activeTool === 'pen' 
                    ? 'bg-brand-gold text-brand-charcoal font-bold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Vector Curve Pen Tool (P)"
              >
                <PenTool className="w-4 h-4" />
              </button>

              {/* Tool 3: Text Tool */}
              <button 
                onClick={() => setActiveTool('text')}
                className={`p-1.5 rounded transition-all cursor-pointer ${
                  activeTool === 'text' 
                    ? 'bg-brand-gold text-brand-charcoal font-bold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Text Label Tool (T)"
              >
                <Type className="w-4 h-4" />
              </button>

              {/* Tool 4: Grid Layout Tool */}
              <button 
                onClick={() => setActiveTool('grid')}
                className={`p-1.5 rounded transition-all cursor-pointer ${
                  activeTool === 'grid' 
                    ? 'bg-brand-gold text-brand-charcoal font-bold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Design Grid (G)"
              >
                <Grid className="w-4 h-4" />
              </button>

              {/* Tool 5: Commentary / Notes Tool */}
              <button 
                onClick={() => setActiveTool('comment')}
                className={`p-1.5 rounded transition-all cursor-pointer ${
                  activeTool === 'comment' 
                    ? 'bg-brand-gold text-brand-charcoal font-bold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title="Add Collab Note (C)"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive play controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsAutoOrbit(!isAutoOrbit)}
                className={`px-3 py-1 rounded text-[10px] font-mono border transition-all flex items-center gap-1.5 cursor-pointer ${
                  isAutoOrbit 
                    ? 'bg-brand-gold/15 border-brand-gold/40 text-brand-gold' 
                    : 'bg-white/5 border-white/10 text-white/50 hover:text-white/90'
                }`}
              >
                <RefreshCw className={`w-3 h-3 ${isAutoOrbit ? 'animate-spin' : ''}`} />
                <span>{isAutoOrbit ? 'AUTO_ROTATION_ON' : 'ROTATION_PAUSED'}</span>
              </button>

              <button 
                onClick={resetCanvasValues}
                className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-[10px] font-mono text-white/70 transition-all cursor-pointer"
              >
                Reset Specs
              </button>
            </div>
          </div>

          {/* 3. Editor Workspace Splitter */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* LEFT COLUMN: FIGMA LAYERS PANEL */}
            <div className="w-60 bg-[#2C2C2C] border-r border-black/40 flex flex-col justify-between shrink-0 select-none text-left p-4">
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                  <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5 text-brand-gold" /> Layers Tree</span>
                  <span>{layers.length} Total</span>
                </div>

                {/* Layer Items Grid */}
                <div className="space-y-1.5">
                  {layers.map(layer => (
                    <div 
                      key={layer.id}
                      className={`flex items-center justify-between p-2 rounded transition-all ${
                        layer.visible ? 'bg-white/[0.01] hover:bg-white/[0.04]' : 'opacity-40 hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[10px] font-mono opacity-30">
                          {layer.type === 'grid' && '[#]'}
                          {layer.type === 'vector' && '[V]'}
                          {layer.type === 'guide' && '[G]'}
                        </span>
                        <span className="text-xs font-sans text-white/80 tracking-wide truncate">
                          {layer.name}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleLayerVisibility(layer.id)}
                        className="text-white/40 hover:text-brand-gold p-0.5"
                        title={layer.visible ? 'Hide Layer' : 'Show Layer'}
                      >
                        {layer.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core System metadata */}
              <div className="border-t border-white/5 pt-4">
                <div className="bg-black/35 rounded-xl p-3 border border-white/5 space-y-1">
                  <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase block">CAD RESOLVER STATE</span>
                  <p className="text-[10px] text-white/80 font-mono">GRID_ALIGN // EXACT</p>
                  <p className="text-[8px] text-white/40 font-mono">COORD_CALCULATION: GOLDEN_RATIO</p>
                </div>
              </div>
            </div>

            {/* CENTER PANEL: INTERACTIVE DESIGN STAGE CANVAS */}
            <div 
              ref={canvasContainerRef}
              onMouseMove={handleCanvasMouseMove}
              onMouseEnter={() => setIsHoveringCanvas(true)}
              onMouseLeave={() => setIsHoveringCanvas(false)}
              className="flex-1 bg-[#121212] relative overflow-hidden flex items-center justify-center cursor-crosshair"
            >
              
              {/* Absolute Blueprint Canvas grid coordinates */}
              {isLayerVisible('layer-grid') && (
                <div 
                  style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `${gridSpacing}px ${gridSpacing}px` }}
                  className="absolute inset-0 pointer-events-none"
                />
              )}

              {/* 3D Model Stage Container */}
              <div 
                style={{
                  perspective: '1200px',
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-[340px] h-[340px] flex items-center justify-center"
              >
                
                {/* 3D Spatial Arts Layer Stack */}
                <motion.div
                  style={{
                    rotateX: rotX,
                    rotateY: rotY,
                    transformStyle: 'preserve-3d',
                    scale: scaleFactor
                  }}
                  className="relative w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
                >
                  
                  {/* LAYER BOTTOM (GRID DECK Blueprint Layer) */}
                  {isLayerVisible('layer-grid') && (
                    <div 
                      style={{ 
                        transform: `translateZ(-${layerSep}px)`,
                        transformStyle: 'preserve-3d'
                      }}
                      className="absolute inset-0 border border-white/10 rounded-2xl bg-black/40 flex items-center justify-center select-none"
                    >
                      {/* Grid blueprints visual lines */}
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-35 text-brand-gold">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
                        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.2" />
                        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.2" />
                      </svg>
                      <div className="absolute top-2 left-3 text-[7px] font-mono text-white/40">GRID BASE STACK // LAYER_0</div>
                    </div>
                  )}

                  {/* LAYER MID 1 (Curved Geometry Orbits and Golden Spiral) */}
                  {isLayerVisible('layer-orbit') && (
                    <div 
                      style={{ 
                        transform: `translateZ(0px)`,
                        transformStyle: 'preserve-3d'
                      }}
                      className="absolute inset-4 rounded-2xl border border-dashed border-brand-gold/15 flex items-center justify-center pointer-events-none"
                    >
                      <svg viewBox="0 0 100 100" className="w-5/6 h-5/6 text-brand-gold opacity-50">
                        {/* Orbit Circles */}
                        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.3" />
                        <circle cx="50" cy="50" r="23" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
                        {/* Rotating focal dot */}
                        <circle cx="50" cy="12" r="1.5" fill="currentColor" className="animate-pulse" />
                      </svg>
                      <div className="absolute top-2 left-3 text-[7px] font-mono text-white/40">ORBIT GEOMETRY // LAYER_1</div>
                    </div>
                  )}

                  {/* LAYER MID 2 (Golden Ratio Spiral Trace) */}
                  {isLayerVisible('layer-spiral') && (
                    <div 
                      style={{ 
                        transform: `translateZ(${layerSep / 2}px)`,
                        transformStyle: 'preserve-3d'
                      }}
                      className="absolute inset-8 rounded-2xl flex items-center justify-center pointer-events-none"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold/40">
                        {/* Fibonacci Golden Spiral path */}
                        <path 
                          d="M 50,50 A 5,5 0 0,1 50,55 A 8,8 0 0,1 42,50 A 13,13 0 0,1 50,37 A 21,21 0 0,1 71,50 A 34,34 0 0,1 50,84 A 55,55 0 0,1 -5,50" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="0.5" 
                          strokeDasharray="3 2"
                        />
                      </svg>
                      <div className="absolute top-2 left-3 text-[7px] font-mono text-white/40">FIBONACCI SPIRAL // LAYER_2</div>
                    </div>
                  )}

                  {/* LAYER TOP (The actual glowing 3D Solid Monogram Mark) */}
                  {isLayerVisible('layer-monogram') && (
                    <div 
                      style={{ 
                        transform: `translateZ(${layerSep}px)`,
                        transformStyle: 'preserve-3d'
                      }}
                      className="absolute w-56 h-56 flex items-center justify-center"
                    >
                      {/* Monogram Monolith SVG */}
                      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_20px_rgba(197,160,89,0.35)]">
                        <defs>
                          <linearGradient id="glograd" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={brandColor} />
                            <stop offset="50%" stopColor="#FFF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor={brandColor} />
                          </linearGradient>
                        </defs>
                        
                        {/* Master vector shape "M" monogram */}
                        <path 
                          d="M 45 155 L 75 55 L 100 125 L 125 55 L 155 155"
                          fill="none"
                          stroke="url(#glograd)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Overlapping premium A cross line forming structural harmony */}
                        <line 
                          x1="65" 
                          y1="120" 
                          x2="135" 
                          y2="120" 
                          stroke={brandColor} 
                          strokeWidth="2.5" 
                        />

                        {/* Anchor point handle simulators (making it look like a Figma Vector Pen path!) */}
                        {activeTool === 'pen' && (
                          <>
                            {/* Blue vector handles */}
                            <circle cx="75" cy="55" r="4" fill="#00B2FF" stroke="#FFF" strokeWidth="1" />
                            <line x1="75" y1="55" x2="75" y2="25" stroke="#00B2FF" strokeWidth="1" />
                            <circle cx="75" cy="25" r="2.5" fill="#00B2FF" />

                            <circle cx="125" cy="55" r="4" fill="#00B2FF" stroke="#FFF" strokeWidth="1" />
                            <line x1="125" y1="55" x2="125" y2="25" stroke="#00B2FF" strokeWidth="1" />
                            <circle cx="125" cy="25" r="2.5" fill="#00B2FF" />

                            <circle cx="100" cy="125" r="4" fill="#00B2FF" stroke="#FFF" strokeWidth="1" />
                            <circle cx="45" cy="155" r="4" fill="#00B2FF" stroke="#FFF" strokeWidth="1" />
                            <circle cx="155" cy="155" r="4" fill="#00B2FF" stroke="#FFF" strokeWidth="1" />
                          </>
                        )}
                      </svg>
                      <div className="absolute -top-3 left-3 text-[7px] font-mono text-white/50 tracking-widest">3D VECTOR PATHS // TOP</div>
                    </div>
                  )}

                </motion.div>
              </div>

              {/* Figma Coordinates Tooltip overlay */}
              {isLayerVisible('layer-specs') && isHoveringCanvas && (
                <div 
                  className="absolute z-20 pointer-events-none bg-brand-charcoal/90 text-[10px] font-mono border border-brand-gold/30 p-2.5 rounded-lg text-left text-brand-cream flex flex-col gap-1 shadow-lg"
                  style={{ left: `${canvasHoverPos.x + 15}px`, top: `${canvasHoverPos.y + 15}px` }}
                >
                  <p className="text-brand-gold font-bold">Brand System Focus</p>
                  <p className="text-white/50">Point X: {canvasHoverPos.x}px</p>
                  <p className="text-white/50">Point Y: {canvasHoverPos.y}px</p>
                  <p className="text-white/50">Canvas Zoom: 100%</p>
                  <div className="flex gap-1.5 items-center text-[8px] uppercase tracking-wider bg-white/5 px-1.5 py-0.5 rounded mt-1 border border-white/5">
                    <span className="w-1 h-1 rounded-full bg-brand-gold" />
                    <span>GOLDEN_RATIO_ALIGNED</span>
                  </div>
                </div>
              )}

              {/* Collaborative Comment bubble simulation */}
              {activeTool === 'comment' && (
                <div className="absolute top-1/4 right-1/4 bg-brand-gold text-brand-charcoal text-xs font-sans font-semibold p-3.5 rounded-2xl shadow-xl flex flex-col gap-1 text-left max-w-[200px] border border-white/30 z-30">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-brand-charcoal/60">
                    <span className="font-black text-brand-charcoal">@BEHANCE_PRINCIPAL</span>
                    <span>1h ago</span>
                  </div>
                  <p className="leading-tight text-brand-charcoal">"Let's stick with the gold extrusion, it commands much higher perceived value."</p>
                  <div className="absolute bottom-[-6px] left-4 w-3 h-3 bg-brand-gold rotate-45" />
                </div>
              )}

              {/* Status helper info overlay */}
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white/35 text-left bg-black/45 p-2 rounded-lg border border-white/5 space-y-0.5 pointer-events-none">
                <p>3D CAMERA ANGLE: X_ROT: {Math.round(rotX)}° // Y_ROT: {Math.round(rotY)}°</p>
                <p>LAYERS DISPLACEMENT: {layerSep}px // GRID: {gridSpacing}px</p>
              </div>

            </div>

            {/* RIGHT COLUMN: PROPERTIES INSPECTOR PANEL */}
            <div className="w-72 bg-[#2C2C2C] border-l border-black/40 p-5 flex flex-col justify-between shrink-0 select-none text-left overflow-y-auto">
              <div>
                
                {/* Properties Header */}
                <div className="flex justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-wider mb-6 border-b border-white/5 pb-2">
                  <span className="flex items-center gap-1"><Sliders className="w-3.5 h-3.5 text-brand-gold" /> Properties Inspector</span>
                  <span>Align</span>
                </div>

                {/* SLIDER 1: X Camera angle */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/60">SPATIAL X ROTATION</span>
                    <span className="text-brand-gold font-bold">{Math.round(rotX)}°</span>
                  </div>
                  <input 
                    type="range" 
                    min="-45" 
                    max="45" 
                    value={rotX} 
                    onChange={(e) => { setRotX(Number(e.target.value)); setIsAutoOrbit(false); }}
                    className="w-full accent-brand-gold"
                  />
                </div>

                {/* SLIDER 2: Y Camera angle */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/60">SPATIAL Y ROTATION</span>
                    <span className="text-brand-gold font-bold">{Math.round(rotY)}°</span>
                  </div>
                  <input 
                    type="range" 
                    min="-180" 
                    max="180" 
                    value={rotY} 
                    onChange={(e) => { setRotY(Number(e.target.value)); setIsAutoOrbit(false); }}
                    className="w-full accent-brand-gold"
                  />
                </div>

                {/* SLIDER 3: Layer Sep */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/60">LAYER EXTRUSION SPACE</span>
                    <span className="text-brand-gold font-bold">{layerSep}px</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="150" 
                    value={layerSep} 
                    onChange={(e) => setLayerSep(Number(e.target.value))}
                    className="w-full accent-brand-gold"
                  />
                </div>

                {/* SLIDER 4: Scale factor */}
                <div className="space-y-1.5 mb-6">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/60">MARK SCALE LEVEL</span>
                    <span className="text-brand-gold font-bold">{Math.round(scaleFactor * 100)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="1.5" 
                    step="0.05"
                    value={scaleFactor} 
                    onChange={(e) => setScaleFactor(Number(e.target.value))}
                    className="w-full accent-brand-gold"
                  />
                </div>

                {/* COLOR PALETTE SWITCHER */}
                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  <span className="text-[10px] font-mono text-white/40 uppercase block">Vector Swatch Color</span>
                  <div className="flex flex-wrap gap-2">
                    {COLOR_PRESETS.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setBrandColor(color.hex)}
                        style={{ backgroundColor: color.hex }}
                        className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                          brandColor === color.hex ? 'border-white scale-110' : 'border-black/40 hover:scale-105'
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* EXPORT OPTIONS BOX */}
              <div className="border-t border-white/5 pt-4">
                <button
                  onClick={handleExportAsset}
                  className="w-full py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-brand-gold/5"
                >
                  <Download className="w-4 h-4" />
                  <span>EXPORT DESIGN VECTOR</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Security check / Trust banners */}
        <div className="mt-12 pt-8 border-t border-white/[0.03] flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-mono text-white/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Figma Canvas Assets trace to 100% compliant .SVG / .AI / .FIG vectors</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Exact golden spiral vectors configured according to layout specifications</span>
          </div>
        </div>

      </div>

      {/* SUCCESS TOAST FOR VECTOR EXPORT */}
      <AnimatePresence>
        {isExported && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-[#1A1A1A] border-2 border-brand-gold/40 text-brand-cream px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 text-left max-w-sm"
          >
            <div className="p-2 bg-brand-gold/15 rounded-full text-brand-gold">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-display font-semibold">Export Successful</p>
              <p className="text-[10px] text-white/60 font-mono mt-0.5">maison_aura_grid_vector.svg compiled in background.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
