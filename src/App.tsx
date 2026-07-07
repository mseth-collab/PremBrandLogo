import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Compass } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

// Import our custom-crafted modular sub-components
import InteractiveLogo3D from './components/InteractiveLogo3D';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudyModal from './components/CaseStudyModal';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import ClientChecklist from './components/ClientChecklist';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// New premium agency sub-components
import Packages from './components/Packages';
import MotionBranding from './components/MotionBranding';
import LogoReveal from './components/LogoReveal';
import FigmaSandbox from './components/FigmaSandbox';
import CraftsVideoShowcase from './components/CraftsVideoShowcase';

// Import our shared type declarations
import { Project } from './types';

// Import premium synthesized click audio effect
import { playClickVoiceEffect } from './lib/audio';


export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [selectedPackageForInquiry, setSelectedPackageForInquiry] = useState<string | undefined>(undefined);

  // Framer-motion useScroll for luxury lightweight parallax effects
  const { scrollY } = useScroll();

  // Create smooth scroll transforms for depth
  const yBackground1 = useTransform(scrollY, [0, 1000], [0, 140]);
  const yBackground2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const yHeroLeft = useTransform(scrollY, [0, 1000], [0, 50]);
  const yHeroRight = useTransform(scrollY, [0, 1000], [0, -70]);
  const opacityHero = useTransform(scrollY, [0, 700], [1, 0.45]);

  // Handle sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Play premium synthesized click voice feedback effect whenever any interactive item is selected or clicked
  useEffect(() => {
    const handleElementSelectionClick = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement;
        if (!target) return;

        let isInteractive = false;
        let curr: HTMLElement | null = target;
        
        while (curr && curr !== document.body) {
          const tag = curr.tagName ? curr.tagName.toLowerCase() : '';
          const role = curr.getAttribute ? curr.getAttribute('role') : null;
          
          if (
            tag === 'button' ||
            tag === 'a' ||
            tag === 'input' ||
            tag === 'select' ||
            tag === 'textarea' ||
            role === 'button' ||
            role === 'checkbox' ||
            role === 'radio' ||
            (curr.classList && (
              curr.classList.contains('cursor-pointer') ||
              curr.classList.contains('interactive-cta') ||
              curr.classList.contains('group')
            ))
          ) {
            isInteractive = true;
            break;
          }
          curr = curr.parentElement;
        }

        if (isInteractive) {
          playClickVoiceEffect();
        }
      } catch (err) {
        // Safe fail-safe
      }
    };

    document.addEventListener('click', handleElementSelectionClick, { capture: true, passive: true });
    return () => {
      document.removeEventListener('click', handleElementSelectionClick, { capture: true });
    };
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setIsCaseStudyOpen(true);
  };

  const handleStartProjectClick = (serviceTitle?: string) => {
    setSelectedPackageForInquiry(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-cream selection:bg-brand-gold selection:text-brand-charcoal overflow-x-hidden">
      
      {/* Immersive Top Navigation Bar */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isHeaderScrolled 
          ? 'bg-brand-charcoal/85 border-b border-white/[0.04] py-4 backdrop-blur-md' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Studio Wordmark Logo */}
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              playClickVoiceEffect();
            }}
            className="flex items-center gap-2 cursor-pointer group text-left relative shrink-0"
          >
            {/* Ambient background hover glow aura for the logo */}
            <div className="absolute -inset-2 bg-brand-gold/0 group-hover:bg-brand-gold/10 rounded-xl blur-md transition-all duration-300 scale-75 group-hover:scale-105 pointer-events-none" />

            <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:border-brand-gold/60 transition-all duration-300 relative z-10">
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className="text-sm sm:text-base md:text-lg font-display font-bold text-brand-cream tracking-tight group-hover:text-brand-gold transition-colors duration-300 relative z-10 whitespace-nowrap">
              Brand’M’Aura <span className="text-brand-gold font-serif italic font-medium group-hover:text-brand-cream transition-colors duration-300">Studio</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 bg-white/[0.01] border border-white/[0.03] px-5 py-2 rounded-full backdrop-blur-sm">
            <button 
              onClick={() => handleScrollToSection('services')} 
              className="text-xs font-mono text-white/70 hover:text-brand-gold transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleScrollToSection('portfolio')} 
              className="text-xs font-mono text-white/70 hover:text-brand-gold transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            >
              Portfolio
            </button>
            <button 
              onClick={() => handleScrollToSection('before-after')} 
              className="text-xs font-mono text-white/70 hover:text-brand-gold transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            >
              Before & After
            </button>
            <button 
              onClick={() => handleScrollToSection('figma-sandbox')} 
              className="text-xs font-mono text-brand-gold hover:text-white transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            >
              Brand System
            </button>
            <button 
              onClick={() => handleScrollToSection('crafts-showcase')} 
              className="text-xs font-mono text-brand-gold hover:text-white transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            >
              Reel
            </button>
            <button 
              onClick={() => handleScrollToSection('process')} 
              className="text-xs font-mono text-white/70 hover:text-brand-gold transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            >
              Process
            </button>
            <button 
              onClick={() => handleScrollToSection('testimonials')} 
              className="text-xs font-mono text-white/70 hover:text-brand-gold transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            >
              Testimonials
            </button>
          </nav>

          {/* Nav CTA Action */}
          <div className="hidden lg:block">
            <button 
              onClick={handleStartProjectClick}
              className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display text-xs font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-brand-gold/5 hover:scale-[1.02] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-cream hover:text-brand-gold transition-colors duration-200"
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu Overlays */}
      <div className={`fixed inset-0 z-30 bg-brand-charcoal/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-300 lg:hidden ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <button 
          onClick={() => handleScrollToSection('services')} 
          className="text-xl font-display font-semibold text-brand-cream hover:text-brand-gold transition-colors duration-200 uppercase tracking-widest"
        >
          Services
        </button>
        <button 
          onClick={() => handleScrollToSection('portfolio')} 
          className="text-xl font-display font-semibold text-brand-cream hover:text-brand-gold transition-colors duration-200 uppercase tracking-widest"
        >
          Portfolio
        </button>
        <button 
          onClick={() => handleScrollToSection('before-after')} 
          className="text-xl font-display font-semibold text-brand-cream hover:text-brand-gold transition-colors duration-200 uppercase tracking-widest"
        >
          Before & After
        </button>
        <button 
          onClick={() => handleScrollToSection('figma-sandbox')} 
          className="text-xl font-display font-semibold text-brand-gold hover:text-white transition-colors duration-200 uppercase tracking-widest"
        >
          Brand System
        </button>
        <button 
          onClick={() => handleScrollToSection('crafts-showcase')} 
          className="text-xl font-display font-semibold text-brand-gold hover:text-white transition-colors duration-200 uppercase tracking-widest"
        >
          Reel
        </button>
        <button 
          onClick={() => handleScrollToSection('process')} 
          className="text-xl font-display font-semibold text-brand-cream hover:text-brand-gold transition-colors duration-200 uppercase tracking-widest"
        >
          Process
        </button>
        <button 
          onClick={() => handleScrollToSection('testimonials')} 
          className="text-xl font-display font-semibold text-brand-cream hover:text-brand-gold transition-colors duration-200 uppercase tracking-widest"
        >
          Testimonials
        </button>
        
        <button 
          onClick={handleStartProjectClick}
          className="mt-6 px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display font-bold rounded-full transition-all duration-300 flex items-center gap-2 text-sm shadow-lg shadow-brand-gold/20"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content Layout */}
      <main className="pt-24">
        
        {/* 1. Hero Section */}
        <section id="hero" className="py-12 md:py-24 relative overflow-hidden">
          {/* Parallax Backlight Blurs */}
          <motion.div 
            style={{ y: yBackground1, opacity: opacityHero }}
            className="absolute top-10 left-10 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" 
          />
          <motion.div 
            style={{ y: yBackground2, opacity: opacityHero }}
            className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" 
          />

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Creative copy with parallax translation */}
              <motion.div 
                style={{ y: yHeroLeft, opacity: opacityHero }}
                className="lg:col-span-7 flex flex-col items-start text-left relative z-10"
              >
                
                {/* Micro branding tagline indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/[0.06] rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-gold mb-6 md:mb-8 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse shrink-0" />
                  <span>LOGO • BRAND IDENTITY • WEB DESIGN</span>
                </div>

                {/* Highlighted Portal Website Name with Premium Interactive Aura effects */}
                <motion.div 
                  className="mb-4 relative group/brand cursor-pointer inline-block text-left"
                  whileHover="hover"
                  initial="initial"
                  onClick={() => playClickVoiceEffect()}
                >
                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] text-brand-gold/50 uppercase block mb-1 group-hover/brand:text-brand-gold transition-colors duration-300">
                    PREMIUM BRAND STUDIO
                  </span>
                  
                  {/* High fidelity dynamic aura glow under the logo */}
                  <div className="absolute -inset-x-8 -inset-y-6 bg-brand-gold/0 group-hover/brand:bg-brand-gold/[0.08] rounded-full blur-2xl transition-all duration-500 pointer-events-none scale-90 group-hover/brand:scale-110" />

                  <motion.h2 
                    variants={{
                      initial: { letterSpacing: "0.15em" },
                      hover: { letterSpacing: "0.18em", scale: 1.02 }
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                    className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cream via-brand-gold to-brand-cream uppercase drop-shadow-[0_2px_15px_rgba(197,160,89,0.18)] select-none transition-all duration-300 group-hover/brand:drop-shadow-[0_4px_25px_rgba(197,160,89,0.35)]"
                  >
                    BRAND’M’AURA
                  </motion.h2>

                  {/* Elegant gold line transition beneath */}
                  <motion.div 
                    className="h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent mt-2 mx-auto"
                    variants={{
                      initial: { width: "35%", opacity: 0.3 },
                      hover: { width: "100%", opacity: 0.9 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Primary Large Display Header */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-none text-brand-cream mb-6">
                  I design brands that look <span className="text-gradient font-serif italic font-normal">premium</span>, memorable, and ready to sell.
                </h1>

                {/* Dynamic Supporting Subheadline */}
                <p className="text-sm md:text-base text-brand-cream/75 leading-relaxed font-light mb-8 md:mb-10 max-w-2xl border-l-2 border-brand-gold/30 pl-4">
                  I create logo systems, brand kits, social media creatives, and modern websites that help businesses build trust, stand out, and convert better.
                </p>

                {/* Dynamic CTA Button Triggers */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button 
                    onClick={() => handleScrollToSection('portfolio')}
                    className="px-8 py-4 bg-white/[0.02] hover:bg-white/[0.06] text-brand-cream font-display font-bold rounded-full border border-white/[0.06] hover:border-brand-gold/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer shadow-md"
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 text-white/50" />
                  </button>
                  <button 
                    onClick={handleStartProjectClick}
                    className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/30 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                 {/* Trust Signals banner */}
                <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-wrap gap-x-8 gap-y-4 text-white/40 font-mono text-[10px]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-gold" />
                    <span>BOUTIQUE STUDIO QUALITY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-gold" />
                    <span>BEHANCE-STYLE CASE STUDIES</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-gold" />
                    <span>CONVERSION-FOCUSED DESIGN</span>
                  </div>
                </div>

              </motion.div>

              {/* Right Column: Abstract Interactive Logo Mark Mockup with inverse parallax */}
              <motion.div 
                style={{ y: yHeroRight }}
                className="lg:col-span-5 flex flex-col justify-center items-center relative gap-6 z-10"
              >
                <InteractiveLogo3D />
                <div className="text-center px-4 py-2 bg-white/[0.02] border border-white/[0.04] rounded-full shadow-inner">
                  <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
                    Logo reveals • animated brand assets • social media motion graphics
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. Services Section */}
        <Services onStartProjectClick={handleStartProjectClick} />

        {/* 2b. Strategic Service Packages */}
        <Packages onSelectPackage={(packageName) => {
          setSelectedPackageForInquiry(packageName);
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }} />

        {/* 2c. Studio Logo Reveal Section */}
        <LogoReveal />

        {/* 3. Featured Projects Portfolio Section */}
        <Portfolio onSelectProject={handleSelectProject} />

        {/* 3b. Kinetic Motion Branding Showcase */}
        <MotionBranding />

        {/* 4. Figma & 3D Spatial Arts Sandbox Console */}
        <FigmaSandbox />

        {/* 4b. Crafts & Design Highlights Process Video Reel Console */}
        <CraftsVideoShowcase />

        {/* 5. Before / After Brand Transformation Showcase */}
        <BeforeAfter />

        {/* 6. Creative Methodology Process Section */}
        <Process />

        {/* 7. What Clients Get Section */}
        <ClientChecklist />

        {/* 8. Industries Section */}
        <Industries />

        {/* 9. Client Praise Testimonials Section */}
        <Testimonials />

        {/* Strategic Conversion CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-charcoal via-brand-dark-gray/40 to-brand-charcoal border-t border-b border-white/[0.04] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif italic text-brand-cream tracking-tight mb-4 leading-tight">
              Ready to Command <span className="text-brand-gold font-sans not-italic font-bold">Premium Value</span> & Capture High-Margin Conversions?
            </h3>
            <p className="text-xs md:text-sm text-brand-cream/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Do not let misaligned visuals compromise your firm's market value. Partner with us to scale your category leadership with custom-engineered aesthetic systems.
            </p>
            <button 
              onClick={handleStartProjectClick}
              className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg shadow-brand-gold/15 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Secure Your Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 10. Contact / Creative Project Inquiry Form Section */}
        <ContactForm selectedService={selectedPackageForInquiry} />

      </main>

      {/* 11. Footer Section */}
      <Footer />

      {/* 4. Interactive Case Study Page Modal Overlay */}
      <CaseStudyModal 
        project={selectedProject}
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onStartProjectClick={handleStartProjectClick}
      />

    </div>
  );
}

// Simple internal checkmark helper icon for signals
function Check({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
