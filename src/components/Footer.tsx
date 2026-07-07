import { ArrowUp, Instagram, Linkedin, Globe, Sparkles, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-white/[0.04] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Orbital Background lines */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-dashed border-white/[0.02] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Main Logo & Description info column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-display font-bold text-brand-cream tracking-tight">
                Brand’M’Aura <span className="text-brand-gold font-serif italic">Studio</span>
              </span>
            </div>
            
            <p className="text-xs text-brand-cream/60 leading-relaxed font-light mb-8 max-w-sm">
              We construct premium visual identities, vector monograms, packaging, and high-converting landing pages for startups, creators, boutique cafés, and enterprise consulting firms looking to scale authority.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/[0.02] hover:bg-brand-gold/10 border border-white/[0.04] hover:border-brand-gold/30 text-white/50 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/[0.02] hover:bg-brand-gold/10 border border-white/[0.04] hover:border-brand-gold/30 text-white/50 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300"
                title="Behance Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href="https://contra.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/[0.02] hover:bg-brand-gold/10 border border-white/[0.04] hover:border-brand-gold/30 text-white/50 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300"
                title="Contra Services"
              >
                <Sparkles className="w-4 h-4" />
              </a>
              <a 
                href="mailto:design@brandmaura.studio" 
                className="w-10 h-10 bg-white/[0.02] hover:bg-brand-gold/10 border border-white/[0.04] hover:border-brand-gold/30 text-white/50 hover:text-brand-gold rounded-full flex items-center justify-center transition-all duration-300"
                title="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links column 1: Creative Pillars */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-xs font-mono text-brand-gold uppercase tracking-widest mb-6">
              CREATIVE PILLARS
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-brand-cream/70 font-light hover:text-brand-gold transition-colors duration-200">
                Logo Design | Monogram Sketching
              </li>
              <li className="text-xs text-brand-cream/70 font-light hover:text-brand-gold transition-colors duration-200">
                Complete Brand Guidelines PDF
              </li>
              <li className="text-xs text-brand-cream/70 font-light hover:text-brand-gold transition-colors duration-200">
                Tactile Packaging & Labels
              </li>
              <li className="text-xs text-brand-cream/70 font-light hover:text-brand-gold transition-colors duration-200">
                Responsive Landing Pages UX UI
              </li>
              <li className="text-xs text-brand-cream/70 font-light hover:text-brand-gold transition-colors duration-200">
                Scroll-Stopping Campaign Ads
              </li>
            </ul>
          </div>

          {/* Links column 2: Studio Information */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-brand-gold uppercase tracking-widest mb-6">
              STUDIO METADATA
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">AESTHETIC LEAD</p>
                <p className="text-xs text-brand-cream/80 font-light mt-0.5">Mansi Creative Studio</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">WORK MODEL</p>
                <p className="text-xs text-brand-cream/80 font-light mt-0.5">Premium Boutique Consulting</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">AVAILABILITY Status</p>
                <p className="text-xs text-brand-gold font-light mt-0.5 flex items-center gap-1.5 font-mono text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
                  <span>BOOKING Q3 PARTNERSHIPS</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/40 uppercase tracking-tight">
            © {currentYear} BRAND’M’AURA STUDIO. CO-DEVELOPED IN BRAND PARTNERSHIP WITH MANSI CREATIVE. ALL RIGHTS RESERVED.
          </p>

          <button 
            onClick={scrollToTop}
            className="group px-4 py-2 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-brand-gold/30 rounded-lg flex items-center gap-2 text-[10px] font-mono text-white/60 hover:text-brand-cream transition-all duration-300"
          >
            <span>SCROLL TO ZENITH</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
