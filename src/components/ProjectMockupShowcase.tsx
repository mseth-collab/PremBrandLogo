import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Briefcase, Instagram, Globe, BookOpen, Layers, CreditCard, Box, Sparkles, Image, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';

interface ProjectMockupShowcaseProps {
  projectId: string;
  colors: { name: string; hex: string }[];
  title: string;
}

export default function ProjectMockupShowcase({ projectId, colors, title }: ProjectMockupShowcaseProps) {
  const [activeMockupTab, setActiveMockupTab] = useState<'cards' | 'packaging' | 'instagram' | 'linkedin' | 'website' | 'guidelines'>('cards');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [instaSlide, setInstaSlide] = useState(0);

  const primaryColor = colors[1]?.hex || '#C5A059';
  const darkColor = colors[0]?.hex || '#0A0A0A';
  const creamColor = colors[2]?.hex || '#F5F2ED';

  return (
    <div className="my-16 border-t border-white/[0.05] pt-16">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10">
        <div>
          <span className="text-xs font-mono text-brand-gold uppercase tracking-widest block mb-2">AGENCY_DELIVERABLES_VISUALIZER</span>
          <h4 className="text-2xl md:text-3xl font-display font-bold text-brand-cream text-left">
            Interactive High-Fidelity Mockups
          </h4>
          <p className="text-xs md:text-sm text-brand-cream/60 mt-1 max-w-xl text-left">
            Select any deliverable channel tab below to view our simulated photorealistic asset mockups for <span className="text-brand-gold font-semibold">{title}</span>.
          </p>
        </div>
      </div>

      {/* Elegant Nav Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8 border-b border-white/[0.04] pb-6 justify-start">
        <button
          onClick={() => setActiveMockupTab('cards')}
          className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeMockupTab === 'cards'
              ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md shadow-brand-gold/10'
              : 'bg-white/[0.02] text-white/60 hover:text-brand-cream hover:bg-white/[0.05]'
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>BUSINESS CARDS</span>
        </button>

        <button
          onClick={() => setActiveMockupTab('packaging')}
          className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeMockupTab === 'packaging'
              ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md shadow-brand-gold/10'
              : 'bg-white/[0.02] text-white/60 hover:text-brand-cream hover:bg-white/[0.05]'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          <span>PREMIUM PACKAGING</span>
        </button>

        <button
          onClick={() => setActiveMockupTab('instagram')}
          className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeMockupTab === 'instagram'
              ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md shadow-brand-gold/10'
              : 'bg-white/[0.02] text-white/60 hover:text-brand-cream hover:bg-white/[0.05]'
          }`}
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>INSTAGRAM SLIDES</span>
        </button>

        <button
          onClick={() => setActiveMockupTab('linkedin')}
          className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeMockupTab === 'linkedin'
              ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md shadow-brand-gold/10'
              : 'bg-white/[0.02] text-white/60 hover:text-brand-cream hover:bg-white/[0.05]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>LINKEDIN BANNER</span>
        </button>

        <button
          onClick={() => setActiveMockupTab('website')}
          className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeMockupTab === 'website'
              ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md shadow-brand-gold/10'
              : 'bg-white/[0.02] text-white/60 hover:text-brand-cream hover:bg-white/[0.05]'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>WEBSITE HERO</span>
        </button>

        <button
          onClick={() => setActiveMockupTab('guidelines')}
          className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeMockupTab === 'guidelines'
              ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md shadow-brand-gold/10'
              : 'bg-white/[0.02] text-white/60 hover:text-brand-cream hover:bg-white/[0.05]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>BRAND MANUAL</span>
        </button>
      </div>

      {/* Main Mockup Stage */}
      <div className="bg-brand-charcoal border border-white/[0.04] rounded-3xl p-6 md:p-10 min-h-[400px] flex items-center justify-center relative overflow-hidden">
        {/* Subtle grid decoration */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <AnimatePresence mode="wait">
          {/* TAB 1: Business Cards */}
          {activeMockupTab === 'cards' && (
            <motion.div
              key="cards"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="flex flex-col items-center gap-6 w-full max-w-xl"
            >
              <p className="text-xs font-mono text-white/40 uppercase">Hover card or click to flip the 3D matte business card</p>
              
              <div 
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className="w-80 md:w-96 aspect-[1.75] cursor-pointer relative perspective"
              >
                <div className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${isCardFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* FRONT SIDE */}
                  <div 
                    style={{ backgroundColor: darkColor, borderColor: primaryColor }}
                    className="absolute inset-0 rounded-2xl p-8 border flex flex-col justify-between text-left backface-hidden shadow-2xl overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-radial-gradient from-white to-transparent pointer-events-none" />
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                        <span style={{ color: primaryColor }} className="text-xl font-serif italic">M</span>
                      </div>
                      <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase">COTTON MATTE 450GSM</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-serif italic text-brand-cream">{title}</h4>
                      <p className="text-[9px] uppercase tracking-[0.2em] opacity-40 mt-1">ESTABLISHED BRAND PARTNER</p>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div 
                    style={{ backgroundColor: creamColor, borderColor: primaryColor }}
                    className="absolute inset-0 rounded-2xl p-8 border flex flex-col justify-between text-left rotate-y-180 backface-hidden shadow-2xl text-brand-charcoal overflow-hidden"
                  >
                    <div className="flex justify-between items-start">
                      <span style={{ color: primaryColor }} className="text-xl font-serif italic font-bold">M</span>
                      <div className="text-right">
                        <p className="text-xs font-bold font-display">hello@aura-brand.com</p>
                        <p className="text-[8px] font-mono opacity-60">NY OFFICE // SOHO</p>
                      </div>
                    </div>
                    <div className="border-t border-brand-charcoal/10 pt-4 flex justify-between items-end">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider">CREATIVE PRINCIPAL</p>
                        <p className="text-[8px] font-mono opacity-50">PARTNERSHIP TEAM</p>
                      </div>
                      <span className="text-[7px] font-mono opacity-30">©2026 BRANDMAURA</span>
                    </div>
                  </div>

                </div>
              </div>

              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider mt-4">
                TEXTURE SPEC: GILDED FOILED CHAMFER EDGES
              </span>
            </motion.div>
          )}

          {/* TAB 2: Premium Packaging */}
          {activeMockupTab === 'packaging' && (
            <motion.div
              key="packaging"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="w-full max-w-xl flex flex-col md:flex-row gap-8 items-center justify-center"
            >
              {/* Product Box rendering */}
              <div 
                style={{ backgroundColor: darkColor, borderColor: `${primaryColor}20` }}
                className="w-56 aspect-[3/4] rounded-2xl border-2 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left"
              >
                {/* Gold Foil seal block */}
                <div 
                  style={{ backgroundColor: primaryColor }} 
                  className="absolute top-0 right-6 w-8 h-16 rounded-b-md flex items-end justify-center pb-2 shadow"
                >
                  <span className="text-[8px] font-mono text-brand-charcoal font-bold">100%</span>
                </div>

                <div className="pt-8">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-4">
                    <span style={{ color: primaryColor }} className="text-base font-serif italic">M</span>
                  </div>
                  <h4 className="text-base font-serif italic text-brand-cream">{title}</h4>
                  <p className="text-[8px] uppercase tracking-widest text-white/40">Organic Artisan Series</p>
                </div>

                <div className="border-t border-white/[0.05] pt-4 mt-4">
                  <p className="text-[7px] font-mono text-white/30 tracking-widest">NET WT 2.4FL OZ // 70ML</p>
                  <p className="text-[9px] text-brand-cream/80 font-light mt-1">Premium cellular restorative formula.</p>
                </div>
              </div>

              {/* Accompanying Jar/Bottle rendering */}
              <div 
                className="w-40 aspect-[1/2] bg-white/5 backdrop-blur-md rounded-full border border-white/10 p-4 flex flex-col justify-between items-center text-center shadow-xl relative"
              >
                <div className="w-10 h-6 bg-brand-charcoal rounded-t-lg border-b border-white/20" />
                
                <div className="py-6">
                  <span style={{ color: primaryColor }} className="text-xl font-serif italic block">M</span>
                  <h5 className="text-[9px] uppercase tracking-widest font-bold text-white mt-1">{title}</h5>
                  <p className="text-[7px] text-white/40 mt-1">MARINE AMBER OIL</p>
                </div>

                <div className="w-8 h-8 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                  <span className="text-[7px] font-mono text-white/30">OK</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Instagram Slides */}
          {activeMockupTab === 'instagram' && (
            <motion.div
              key="instagram"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="flex flex-col items-center gap-6 w-full max-w-md"
            >
              <p className="text-xs font-mono text-white/40 uppercase">Interactive Brand Carousel Slide Feed</p>
              
              <div className="w-80 aspect-square bg-[#0D0D0D] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between text-left relative overflow-hidden shadow-2xl">
                {/* Instagram Header simulation */}
                <div className="flex justify-between items-center border-b border-white/[0.05] pb-3 mb-2 shrink-0">
                  <div className="flex items-center gap-2">
                    <div style={{ backgroundColor: primaryColor }} className="w-6 h-6 rounded-full flex items-center justify-center text-brand-charcoal font-bold text-[8px] font-serif">M</div>
                    <span className="text-[10px] font-bold text-brand-cream tracking-tight">@aura_agency</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-gold font-bold">SPONSORED</span>
                </div>

                {/* Sliding Card Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
                  {instaSlide === 0 && (
                    <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-3">
                      <span className="text-[8px] font-mono text-brand-gold tracking-[0.3em] uppercase block">SLIDE 01 // PRINCIPLE</span>
                      <h4 className="text-xl font-serif italic text-brand-cream">"Aesthetic is the ultimate business parameter."</h4>
                      <p className="text-[10px] text-white/50 leading-relaxed font-light">We re-architect generic layouts into high-margin luxury platforms.</p>
                    </motion.div>
                  )}
                  {instaSlide === 1 && (
                    <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-3">
                      <span className="text-[8px] font-mono text-brand-gold tracking-[0.3em] uppercase block">SLIDE 02 // METHODOLOGY</span>
                      <h4 className="text-xl font-serif italic text-brand-cream">Exact Golden Ratio Geometric Forms</h4>
                      <p className="text-[10px] text-white/50 leading-relaxed font-light">Timeless curves calculated to look perfect from tiny app icons to billboards.</p>
                    </motion.div>
                  )}
                  {instaSlide === 2 && (
                    <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-3">
                      <span className="text-[8px] font-mono text-brand-gold tracking-[0.3em] uppercase block">SLIDE 03 // OUTCOME</span>
                      <h4 className="text-xl font-serif italic text-brand-cream">Increase Margin, Secure Authority</h4>
                      <p className="text-[10px] text-white/50 leading-relaxed font-light">Join the top 1% of brands commanding premium, market-leading fees.</p>
                    </motion.div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="flex justify-between items-center mt-4 border-t border-white/[0.05] pt-3 shrink-0">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${instaSlide === i ? 'w-4 bg-brand-gold' : 'w-1.5 bg-white/20'}`} 
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => setInstaSlide((prev) => (prev - 1 + 3) % 3)}
                      className="p-1 bg-white/[0.03] hover:bg-white/[0.1] rounded-full text-brand-cream"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setInstaSlide((prev) => (prev + 1) % 3)}
                      className="p-1 bg-white/[0.03] hover:bg-white/[0.1] rounded-full text-brand-cream"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: LinkedIn Banner */}
          {activeMockupTab === 'linkedin' && (
            <motion.div
              key="linkedin"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="w-full max-w-2xl flex flex-col items-center gap-4"
            >
              <p className="text-xs font-mono text-white/40 uppercase">LinkedIn Executive Profile Hero Banner Cover</p>
              
              <div 
                style={{ backgroundColor: darkColor, borderColor: `${primaryColor}20` }}
                className="w-full aspect-[4/1] rounded-xl border p-6 flex flex-col justify-between text-left relative overflow-hidden shadow-2xl"
              >
                {/* Background graphic abstraction */}
                <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 border border-white/[0.02] rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 border border-dashed border-white/[0.04] rounded-full" />
                </div>

                <div className="flex justify-between items-start relative z-10">
                  <div className="flex items-center gap-3">
                    <div style={{ backgroundColor: primaryColor }} className="w-10 h-10 rounded-full flex items-center justify-center text-brand-charcoal font-bold font-serif text-sm">M</div>
                    <div>
                      <h4 className="text-base font-serif italic text-brand-cream">{title}</h4>
                      <p className="text-[8px] font-mono text-brand-gold tracking-widest uppercase">STRATEGIC BRANDING ARCHITECTURE</p>
                    </div>
                  </div>
                  <span className="text-[7px] font-mono text-white/30 uppercase tracking-widest">©2026 BRANDMAURA STUDIO</span>
                </div>

                <div className="flex justify-between items-end relative z-10">
                  <p className="text-[10px] text-white/50 max-w-sm leading-relaxed font-light">
                    Engineering quiet luxury visual systems and digital web portals for market leaders.
                  </p>
                  <div className="text-right text-[8px] font-mono text-white/30">
                    SOHO // NYC // PARIS // LONDON
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: Website Hero */}
          {activeMockupTab === 'website' && (
            <motion.div
              key="website"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="w-full max-w-2xl flex flex-col items-center gap-4"
            >
              <p className="text-xs font-mono text-white/40 uppercase">High-Fidelity Desktop Browser Viewport</p>
              
              <div className="w-full aspect-[16/10] bg-brand-charcoal rounded-xl border border-white/[0.08] overflow-hidden flex flex-col shadow-2xl relative text-left">
                {/* Browser Controls */}
                <div className="h-6 bg-white/[0.02] border-b border-white/[0.05] px-3 flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
                  <div className="ml-4 text-[7px] font-mono text-white/30 truncate max-w-xs">{title.toLowerCase().replace(/\s+/g, '')}.com</div>
                </div>

                {/* Web Landing Preview */}
                <div className="flex-1 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Web Header */}
                  <div className="flex justify-between items-center border-b border-white/[0.03] pb-3 shrink-0">
                    <span className="text-xs font-serif italic text-brand-cream">{title}</span>
                    <nav className="flex gap-4 text-[8px] uppercase tracking-widest font-medium opacity-60 text-brand-cream">
                      <span>Collections</span>
                      <span>Concept</span>
                      <span>Press</span>
                    </nav>
                    <div style={{ borderColor: primaryColor, color: primaryColor }} className="px-3 py-1 border rounded-full text-[7px] font-mono uppercase tracking-widest">
                      Inquire
                    </div>
                  </div>

                  {/* Web Hero Core */}
                  <div className="my-auto grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-7 space-y-2">
                      <span style={{ color: primaryColor }} className="text-[7px] font-mono uppercase tracking-widest block">LUXURY SKIN FORMULA</span>
                      <h3 className="text-2xl font-serif italic text-brand-cream leading-none">Cellular Marine Skin Infusions</h3>
                      <p className="text-[9px] text-white/50 max-w-xs leading-relaxed font-light">Crafted with pristine deep-sea kelp, gold-foiled oils and silent organic materials.</p>
                      
                      <button style={{ backgroundColor: primaryColor }} className="px-3.5 py-1.5 text-brand-charcoal rounded-full text-[8px] font-bold font-mono tracking-widest uppercase shadow">
                        DISCOVER THE ESSENCE
                      </button>
                    </div>
                    
                    <div className="col-span-5 flex justify-center">
                      <div className="w-28 aspect-square rounded-xl bg-neutral-900 border border-white/[0.04] flex items-center justify-center p-3 relative">
                        <div className="w-full h-full border border-dashed border-white/10 rounded-lg flex flex-col items-center justify-center p-2 text-center">
                          <span style={{ color: primaryColor }} className="text-xl font-serif italic">M</span>
                          <span className="text-[5px] uppercase tracking-[0.2em] text-white/30 block mt-1">AURA PACKAGING</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="border-t border-white/[0.03] pt-3 flex justify-between text-[7px] font-mono text-white/40 shrink-0">
                    <span>DESIGNED BY BRAND’M’AURA</span>
                    <span>ORGANIC INGREDIENT REGULATORY MATRIX // OK</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 6: Brand Manual */}
          {activeMockupTab === 'guidelines' && (
            <motion.div
              key="guidelines"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="w-full max-w-xl flex flex-col items-center gap-4 text-left"
            >
              <p className="text-xs font-mono text-white/40 uppercase">Corporate Brand Guidelines Manual Spread (Page 12-13)</p>
              
              <div className="w-full aspect-[1.8] bg-[#F5F2ED] rounded-xl border border-brand-gold/30 p-8 flex gap-8 text-brand-charcoal shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                {/* Left Page: Logo Spec */}
                <div className="w-1/2 flex flex-col justify-between border-r border-brand-charcoal/10 pr-6">
                  <div>
                    <span className="text-[7px] font-mono opacity-50 block uppercase tracking-widest">CHAPTER 02 // LOGOMARK MANUAL</span>
                    <h5 className="text-sm font-bold font-display tracking-tight mt-1">Primary Logo Margins & Placement</h5>
                    <p className="text-[9px] opacity-60 leading-relaxed font-light mt-2">
                      Always maintain a minimum safe-zone around the primary monogram equivalent to 50% of the core letter's width.
                    </p>
                  </div>

                  <div className="aspect-square w-24 bg-brand-charcoal rounded-lg flex items-center justify-center p-3 relative mx-auto my-4">
                    <div className="absolute inset-2 border border-dashed border-white/20 rounded flex items-center justify-center">
                      <span style={{ color: primaryColor }} className="text-2xl font-serif italic">M</span>
                    </div>
                    <span className="absolute bottom-1 right-1 text-[5px] font-mono text-white/40">50% SAFE_ZONE</span>
                  </div>

                  <span className="text-[6px] font-mono opacity-40">MAISON AURA BRAND GUIDELINES V1.0</span>
                </div>

                {/* Right Page: Typographic Hierarchy */}
                <div className="w-1/2 flex flex-col justify-between pl-2">
                  <div>
                    <span className="text-[7px] font-mono opacity-50 block uppercase tracking-widest">CHAPTER 03 // TYPOGRAPHY MATRIX</span>
                    <h5 className="text-sm font-bold font-display tracking-tight mt-1">Corporate Typography System</h5>
                    <p className="text-[9px] opacity-60 leading-relaxed font-light mt-2">
                      Our default headings utilize custom high-stroke editorial serifs to manifest quiet corporate authority.
                    </p>
                  </div>

                  <div className="space-y-3 my-4">
                    <div className="border-l border-brand-charcoal/20 pl-2">
                      <p className="text-[6px] font-mono opacity-40">PRIMARY HEADLINE</p>
                      <p className="text-xs font-serif font-bold italic leading-tight">Maison Aura. Elegance.</p>
                    </div>
                    <div className="border-l border-brand-charcoal/20 pl-2">
                      <p className="text-[6px] font-mono opacity-40">BODY COPY TYPE</p>
                      <p className="text-[8px] font-sans opacity-70">Plus Jakarta Sans — modern geometric</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[6px] font-mono opacity-40">
                    <span>PAGE 13 // TYPOGRAPHY</span>
                    <span>CONFIDENTIAL</span>
                  </div>
                </div>

                {/* Book Spine separator */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-brand-charcoal/10" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Security note / Trust badge */}
      <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-mono text-white/40">
        <ShieldCheck className="w-4 h-4 text-brand-gold" />
        <span>EACH CASE STUDY CONTAINS CORRESPONDING VECTOR ASSETS AND BRAND EXPORTS DIRECTLY COMPATIBLE FOR WEB AND PRINT</span>
      </div>
    </div>
  );
}
