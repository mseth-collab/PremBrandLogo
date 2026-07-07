import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative border-t border-white/[0.03]">
      <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            CLIENT PRAISE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Endorsed by <span className="text-brand-gold font-sans not-italic font-bold">Fast-Growing</span> Brands
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light">
            Read how we have helped startup founders, luxury creators, and software enterprises rebrand to capture major industry market share.
          </p>
        </div>

        {/* Testimonials 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testi) => (
            <div 
              key={testi.id}
              className="bg-brand-dark-gray/20 border border-white/[0.04] p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-brand-gold/20 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-brand-gold/10 pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-brand-cream/85 text-sm md:text-base leading-relaxed font-light italic mb-8 relative z-10">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/[0.04] pt-6">
                <img 
                  src={testi.avatarUrl} 
                  alt={testi.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/[0.1] shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-brand-cream text-sm">
                    {testi.author}
                  </h4>
                  <p className="text-xs text-brand-gold mt-0.5">
                    {testi.role}
                  </p>
                  <p className="text-[10px] font-mono text-white/40 uppercase mt-0.5">
                    {testi.company}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
