import { ComponentType } from 'react';
import { INDUSTRIES_SERVED } from '../data';
import { Shirt, Sparkles, Cpu, Bot, Coffee, Home, UserCheck, Rocket } from 'lucide-react';

const iconMap: Record<string, ComponentType<any>> = {
  Shirt,
  Sparkles,
  Cpu,
  Bot,
  Coffee,
  Home,
  UserCheck,
  Rocket
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 relative border-t border-white/[0.03] bg-brand-charcoal">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            VERSATILITY & FIT
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Industries We <span className="text-brand-gold font-sans not-italic font-bold">Elevate & Serve</span>
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light">
            We adapt our strategic visual approach to fit niche business goals. From quiet-luxury cosmetics to state-of-the-art enterprise cybersecurity portals.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => {
            const IconComponent = iconMap[ind.iconName] || Rocket;
            return (
              <div 
                key={idx}
                className="bg-brand-dark-gray/20 border border-white/[0.04] p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-brand-gold/20 hover:bg-brand-dark-gray/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.04] text-brand-cream/60 group-hover:bg-brand-gold/10 group-hover:text-brand-gold flex items-center justify-center transition-all duration-300 mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-sm md:text-base font-display font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-200">
                  {ind.name}
                </h3>
                
                <p className="text-[10px] font-mono text-white/40 uppercase mt-2">
                  {ind.count} Completed Cases
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
