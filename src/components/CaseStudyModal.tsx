import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, ArrowRight, Sparkles, Paintbrush, Compass, Award, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import ProjectMockupShowcase from './ProjectMockupShowcase';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onStartProjectClick: (serviceTitle?: string) => void;
}

export default function CaseStudyModal({ project, isOpen, onClose, onStartProjectClick }: CaseStudyModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!project) return null;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const { caseStudy } = project;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemWithBlur = {
    hidden: { opacity: 0, y: 35, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const bannerVariants = {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(15px)" },
    show: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1
      } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/95 backdrop-blur-xl flex justify-center"
        >
          {/* Main Scroll Container with stagger-orchestrated animations */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-5xl px-4 py-8 md:py-16 relative"
          >
            
            {/* Top Sticky Bar */}
            <motion.div 
              variants={itemWithBlur}
              className="sticky top-4 z-10 flex justify-between items-center mb-12 bg-brand-charcoal/80 backdrop-blur-md p-4 rounded-2xl border border-white/[0.04]"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-brand-gold tracking-widest uppercase">CASE STUDY</span>
                <span className="text-white/20">|</span>
                <span className="text-xs text-white/70 font-mono tracking-tight">{project.industry}</span>
              </div>
              <button 
                onClick={onClose}
                className="p-3 bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.05] hover:border-brand-gold/40 text-brand-cream rounded-full transition-all duration-300"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Immersive Header */}
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <motion.div 
                variants={itemWithBlur}
              >
                <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold font-mono text-xs rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-cream mt-4 tracking-tight leading-none">
                  {project.title}
                </h2>
                <p className="text-lg md:text-xl text-brand-gold font-serif italic mt-3">
                  "{project.resultStatement}"
                </p>
              </motion.div>
            </div>

            {/* Main Immersive Banner Image with majestic zoom and blur dissolve */}
            <motion.div 
              variants={bannerVariants}
              className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/[0.05] shadow-2xl"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Core Split Meta (Overview & Problem) */}
            <motion.div 
              variants={itemWithBlur}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-b border-white/[0.05] pb-16"
            >
              <div>
                <h3 className="text-xl font-display font-semibold text-brand-cream flex items-center gap-2 mb-4">
                  <Compass className="w-5 h-5 text-brand-gold" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-brand-cream/80 text-base md:text-lg leading-relaxed font-light">
                  {caseStudy.overview}
                </p>

                <div className="mt-8">
                  <h4 className="text-xs font-mono text-brand-gold uppercase tracking-widest mb-3">Key Deliverables</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((del, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/[0.03] text-white/70 text-xs font-mono rounded-md border border-white/[0.04]">
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-brand-dark-gray/40 rounded-3xl p-8 border border-white/[0.03] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-semibold text-brand-cream flex items-center gap-2 mb-4">
                    <X className="w-5 h-5 text-red-500" />
                    <span>The Client Problem</span>
                  </h3>
                  <p className="text-brand-cream/70 text-base md:text-lg leading-relaxed font-light">
                    {caseStudy.problem}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-3">
                  <div className="p-3 bg-red-500/10 rounded-full">
                    <Award className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40">PRE-REBRAND PERCEPTION</p>
                    <p className="text-sm font-light text-brand-cream/90">Amateur templates, inconsistent branding, flat conversions.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Creative Direction & Moodboard */}
            <div className="mb-20">
              <span className="text-xs font-mono text-brand-gold tracking-widest uppercase block mb-2">THE SOLUTION</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-cream mb-6">
                Creative Direction: {caseStudy.creativeDirection.split('—')[0]}
              </h3>
              
              <p className="text-brand-cream/80 text-lg leading-relaxed mb-8 font-light max-w-4xl">
                {caseStudy.creativeDirection}
              </p>

              {/* Moodboard Keywords */}
              <div className="bg-white/[0.02] border border-white/[0.04] p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-white/40 uppercase">Moodboard Essence:</span>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.moodboardKeywords.map((word, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-1.5 bg-brand-gold/5 text-brand-gold text-xs font-mono rounded-full border border-brand-gold/10 uppercase tracking-widest"
                    >
                      # {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Logo System & Exploration */}
            <motion.div 
              variants={itemWithBlur}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
            >
              <div className="flex flex-col justify-center">
                <span className="text-xs font-mono text-brand-gold tracking-widest uppercase block mb-2">VISUAL SYSTEM</span>
                <h3 className="text-2xl font-display font-bold text-brand-cream mb-4">
                  Logo Design & Form Exploration
                </h3>
                <p className="text-brand-cream/70 leading-relaxed font-light mb-6">
                  {caseStudy.logoExploration}
                </p>
                <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/[0.04]">
                  <p className="text-sm font-mono text-brand-gold uppercase tracking-wider flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4" /> Final Selected Mark
                  </p>
                  <p className="text-sm text-brand-cream/90 font-light leading-relaxed">
                    {caseStudy.finalLogoDescription}
                  </p>
                </div>
              </div>

              {/* Vector Grid Visual / Logo representation */}
              <div className="aspect-square bg-brand-charcoal border border-white/[0.04] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden group">
                {/* Background specs grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-8 rounded-full border border-white/[0.02] flex items-center justify-center">
                  <div className="w-[80%] h-[80%] rounded-full border border-brand-gold/5 flex items-center justify-center">
                    <div className="w-[60%] h-[60%] rounded-full border border-dashed border-white/[0.03]" />
                  </div>
                </div>

                {/* SVG Mockup */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  {project.id === 'luna-accessories' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
                      <path d="M 50 15 A 35 35 0 1 0 85 50 A 28 28 0 1 1 50 15" fill="currentColor" />
                      <text x="44" y="58" fontFamily="var(--font-serif)" fontSize="20" fill="#FAF6F0" fontWeight="bold">L</text>
                    </svg>
                  )}
                  {project.id === 'novatech-consulting' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue">
                      <rect x="15" y="15" width="70" height="70" rx="12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
                      <path d="M 25 75 L 25 25 L 50 65 L 75 25 L 75 75" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="50" cy="25" r="5" fill="#FAF6F0" />
                    </svg>
                  )}
                  {project.id === 'bloom-bean-cafe' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-20" />
                      <path d="M 50 20 C 60 20, 70 30, 70 45 C 70 65, 50 85, 50 85 C 50 85, 30 65, 30 45 C 30 30, 40 20, 50 20 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                      <text x="38" y="52" fontFamily="var(--font-serif)" fontSize="15" fill="currentColor" fontWeight="bold">B&B</text>
                    </svg>
                  )}
                  {project.id === 'urbanfit-studio' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full text-red-500">
                      <path d="M 15 20 L 85 20 L 75 80 L 25 80 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" className="opacity-30" />
                      <path d="M 25 35 L 50 25 L 75 35 L 75 65 L 50 75 L 25 65 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path d="M 40 45 L 60 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  )}
                  {project.id === 'ai-automation-audit' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
                      <path d="M 50 15 L 85 30 L 85 65 L 50 85 L 15 65 L 15 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M 30 45 C 30 35, 70 35, 70 45 C 70 55, 30 55, 30 65 C 30 75, 70 75, 70 65" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  )}
                  {project.id === 'maison-aura' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30" />
                      <text x="25" y="55" fontFamily="var(--font-serif)" fontSize="14" fill="#FAF6F0" letterSpacing="4">AURA</text>
                      <path d="M 50 10 C 70 30, 70 70, 50 90 C 30 70, 30 30, 50 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white/30">
                  GEOMETRIC_PRECISION_MESH
                </div>
              </div>
            </motion.div>

            {/* Colors & Typography Dynamic Suite */}
            <motion.div 
              variants={itemWithBlur}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-t border-white/[0.05] pt-16"
            >
              
              {/* Color System */}
              <div>
                <h4 className="text-sm font-mono text-brand-gold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Paintbrush className="w-4 h-4" /> Dynamic Color Palette
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.colorPalette.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="bg-brand-dark-gray/30 border border-white/[0.04] rounded-2xl p-4 flex flex-col items-center justify-center text-center group relative overflow-hidden"
                    >
                      <div 
                        style={{ backgroundColor: color.hex }}
                        className="w-14 h-14 rounded-xl mb-3 shadow-md border border-white/[0.05] transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="text-xs font-medium text-brand-cream block truncate max-w-full">{color.name}</span>
                      <button 
                        onClick={() => handleCopyHex(color.hex)}
                        className="mt-2 text-[10px] font-mono text-white/40 hover:text-brand-gold flex items-center gap-1 transition-colors duration-200"
                      >
                        {copiedHex === color.hex ? (
                          <>
                            <Check className="w-3 h-3 text-brand-gold" />
                            <span>COPIED!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{color.hex}</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Suite */}
              <div>
                <h4 className="text-sm font-mono text-brand-gold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Compass className="w-4 h-4" /> Typography System
                </h4>
                <div className="space-y-6">
                  {caseStudy.typography.map((type, idx) => (
                    <div key={idx} className="p-5 bg-white/[0.02] rounded-2xl border border-white/[0.04]">
                      <span className="text-[10px] font-mono text-white/40 block uppercase tracking-wider mb-2">
                        {type.role} — {type.fontName}
                      </span>
                      <p className={`text-2xl text-brand-cream leading-tight ${type.role.toLowerCase().includes('headings') || type.role.toLowerCase().includes('titles') || type.role.toLowerCase().includes('branding') ? 'font-serif' : 'font-sans'}`}>
                        {type.sample}
                      </p>
                      <div className="mt-2 flex gap-1">
                        <span className="text-[10px] font-mono text-brand-gold">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* Immersive Applications & Mockups Section */}
            <div className="mb-20">
              <span className="text-xs font-mono text-brand-gold tracking-widest uppercase block mb-2">THE OUTCOME AT SCALE</span>
              <h3 className="text-3xl font-display font-bold text-brand-cream mb-12">
                Brand Applications & Interactive Mockups
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Application item 1 */}
                <div className="rounded-2xl overflow-hidden border border-white/[0.05] group bg-brand-dark-gray/20">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={caseStudy.socialMediaMockupUrl} 
                      alt="Social Campaign Mockup"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-charcoal/80 backdrop-blur-md rounded-full text-xs font-mono text-brand-gold border border-white/[0.05]">
                      SOCIAL MEDIA ECOSYSTEM
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-mono text-white/40 mb-1">APPLICATION 01</p>
                    <h5 className="text-lg font-display font-semibold text-brand-cream mb-2">Social Grid & Campaigns</h5>
                    <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
                      Custom content layouts configured to maintain absolute visual style and type tracking while scaling content weekly.
                    </p>
                  </div>
                </div>

                {/* Application item 2 */}
                <div className="rounded-2xl overflow-hidden border border-white/[0.05] group bg-brand-dark-gray/20">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={caseStudy.websiteMockupUrl} 
                      alt="Web Portal Mockup"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-charcoal/80 backdrop-blur-md rounded-full text-xs font-mono text-brand-gold border border-white/[0.05]">
                      DIGITAL WORKSHOP
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-mono text-white/40 mb-1">APPLICATION 02</p>
                    <h5 className="text-lg font-display font-semibold text-brand-cream mb-2">High-Converting Web Portal</h5>
                    <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
                      A modern, responsive design framework combining custom-curated editorial assets with performance-driven landing pages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comprehensive Checklists of other applications */}
              <div className="bg-white/[0.02] border border-white/[0.04] rounded-3xl p-8">
                <h4 className="text-sm font-mono text-brand-gold uppercase tracking-widest mb-6">
                  Physical Touchpoints & Technical Delivery Specs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.brandApplications.map((app, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="p-1 bg-brand-gold/15 rounded-md mt-0.5 text-brand-gold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-sm text-brand-cream/80 font-light leading-snug">
                        {app}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive High-Fidelity Showcase */}
              <ProjectMockupShowcase 
                projectId={project.id}
                colors={caseStudy.colorPalette}
                title={project.title}
              />
            </div>

            {/* Final Outcome Results */}
            <div className="bg-gradient-to-br from-brand-charcoal via-brand-dark-gray/50 to-brand-charcoal rounded-3xl p-8 md:p-12 border border-brand-gold/20 mb-16 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-brand-gold" />
                  <span className="text-xs font-mono text-brand-gold tracking-widest uppercase">THE END RESULT</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-cream mb-6">
                  Business Impact & Strategic Repositioning
                </h3>
                
                <p className="text-brand-cream/90 text-lg leading-relaxed font-light mb-8 max-w-3xl">
                  {caseStudy.outcome}
                </p>

                <div className="inline-flex gap-2 items-center px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-mono text-sm rounded-lg">
                  <Check className="w-4 h-4" />
                  <span>Success Verified by Chief Creative Architect</span>
                </div>
              </div>
            </div>

            {/* Bottom Project Closer CTA */}
            <div className="text-center py-12 border-t border-white/[0.05]">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-cream mb-4">
                Want to build a memorable identity like this?
              </h3>
              <p className="text-brand-cream/60 max-w-lg mx-auto mb-8 font-light text-sm md:text-base">
                Let's construct an iconic visual system that fits your business objectives, establishes instant authority, and sells premium products.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    onClose();
                    onStartProjectClick();
                  }}
                  className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20 hover:scale-[1.02]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={onClose}
                  className="px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] text-brand-cream font-display font-semibold border border-white/[0.06] hover:border-brand-gold/30 rounded-full transition-all duration-300"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
