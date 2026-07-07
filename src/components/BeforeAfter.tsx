import React, { useState, useRef, useEffect } from 'react';
import { BEFORE_AFTER_DATA } from '../data';
import { Sparkles, Eye, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(BEFORE_AFTER_DATA[0].id);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_DATA.find(item => item.id === activeTab) || BEFORE_AFTER_DATA[0];

  // Window-level dragging listener that captures pointer events flawlessly
  // even if the user drifts their finger or mouse outside the container box.
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only drag with primary click/touch
    if (e.button !== 0) return;
    setIsDragging(true);
    
    // Jump position immediately on click/touch anywhere inside the box
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="before-after" className="py-20 md:py-28 relative border-t border-white/[0.03] overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            STRATEGIC IMPACT
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            The Power of <span className="text-brand-gold font-sans not-italic font-bold">Premium</span> Positioning
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light">
            Compare how we re-architect generic, flat visual layouts into premium, strategic brand platforms that capture higher customer margins.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {BEFORE_AFTER_DATA.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSliderPosition(50); // Reset position on tab change
              }}
              className={`px-5 py-3 rounded-full font-mono text-xs border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === item.id
                  ? 'bg-brand-gold/10 text-brand-gold border-brand-gold/30 shadow-md shadow-brand-gold/5'
                  : 'bg-white/[0.02] text-white/60 border-white/[0.05] hover:text-brand-cream hover:bg-white/[0.04]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {item.type === 'logo' && 'Logo System'}
                {item.type === 'social' && 'Ad Campaign'}
                {item.type === 'web' && 'Landing Page'}
                {item.type === 'packaging' && 'Luxury Packaging'}
                {item.type === 'banner' && 'Brand Banner'}
              </span>
            </button>
          ))}
        </div>

        {/* Main Transformation Dashboard */}
        <div className="bg-brand-dark-gray/20 rounded-3xl border border-white/[0.05] p-6 md:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Slider Container */}
            <div className="lg:col-span-7 flex flex-col items-center">
              
              <div 
                ref={containerRef}
                onPointerDown={handlePointerDown}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06] bg-brand-charcoal select-none cursor-ew-resize touch-none"
              >
                {/* BEFORE IMAGE (Bottom layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={activeItem.before.image}
                    alt="Generic Original State"
                    className="w-full h-full object-cover filter brightness-[0.7] grayscale"
                    draggable="false"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle red overlay grid */}
                  <div className="absolute inset-0 bg-red-500/5 mix-blend-color pointer-events-none" />
                </div>

                {/* AFTER IMAGE (Top layer, clipped) */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                  }}
                >
                  <img
                    src={activeItem.after.image}
                    alt="BrandM’Aura Premium Rebrand"
                    className="w-full h-full object-cover filter brightness-[0.95]"
                    draggable="false"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gold overlay grid */}
                  <div className="absolute inset-0 bg-brand-gold/5 mix-blend-color pointer-events-none" />
                </div>

                {/* SLIDER CONTROL LINE */}
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-brand-gold z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Knob */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-lg border border-brand-cream/20 z-30 pointer-events-auto">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Floating Indicators */}
                <div className="absolute bottom-4 left-4 z-10 px-2.5 py-1 rounded bg-brand-charcoal/80 backdrop-blur-md text-[9px] font-mono border border-white/[0.05] text-white/50">
                  GENERIC BEFORE
                </div>
                <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded bg-brand-gold/90 backdrop-blur-md text-[9px] font-mono text-brand-charcoal font-bold shadow-md">
                  AURA PREMIUM AFTER
                </div>
              </div>

              {/* Slider instruction help */}
              <div className="w-full mt-4 flex justify-between items-center bg-white/[0.02] border border-white/[0.04] px-4 py-2.5 rounded-xl text-left">
                <span className="text-[10px] font-mono text-white/40">INTERACTIVE MULTI-TOUCH SLIDER:</span>
                <span className="text-[10px] font-mono text-brand-gold animate-pulse">DRAG THE CENTER KNOB BACK AND FORTH</span>
              </div>
            </div>

            {/* Right Column: Explanatory Breakdown of transformation */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full text-left">
              <div>
                <span className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-1">
                  CASE TRANSFORMATION LOG
                </span>
                <h3 className="text-2xl font-display font-bold text-brand-cream mb-6">
                  {activeItem.title}
                </h3>

                {/* Grid Comparison descriptions */}
                <div className="space-y-6">
                  <div className="border-l-2 border-red-500/30 pl-4 py-1">
                    <p className="text-xs font-mono text-red-400 uppercase tracking-tight mb-1">THE OLD BARRIER</p>
                    <p className="text-sm font-light text-brand-cream/70">
                      {activeItem.before.description}
                    </p>
                  </div>

                  <div className="border-l-2 border-brand-gold pl-4 py-1">
                    <p className="text-xs font-mono text-brand-gold uppercase tracking-tight mb-1">THE PREMIUM SOLUTION</p>
                    <p className="text-sm font-light text-brand-cream/90">
                      {activeItem.after.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-gold/10 rounded-full text-brand-gold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40">BRAND VALUE METRIC</p>
                    <p className="text-sm font-medium text-brand-cream">Instantly projects higher financial value.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
