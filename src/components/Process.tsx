import { PROCESS_DATA } from '../data';
import { ArrowRight, CheckSquare, Layers, ShieldCheck } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative border-t border-white/[0.03] bg-brand-charcoal">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Our <span className="text-brand-gold font-sans not-italic font-bold">5-Step</span> Brand Framework
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light">
            We operate an elite, structured collaborative workflow. No guesswork—just pure strategic research, precision geometric sketching, and professional mockups.
          </p>
        </div>

        {/* Steps Horizontal/Vertical Stack */}
        <div className="relative border-l border-white/[0.05] md:border-l-0 md:grid md:grid-cols-5 gap-8 pl-6 md:pl-0">
          {PROCESS_DATA.map((step, idx) => (
            <div 
              key={step.stepNumber}
              className="relative mb-12 md:mb-0 group"
            >
              {/* Stepper Bullet Node (desktop floating / mobile left-aligned) */}
              <div className="absolute -left-[35px] md:left-0 top-0 md:-top-[21px] w-10 h-10 rounded-full bg-brand-charcoal border border-white/[0.08] group-hover:border-brand-gold text-brand-cream/80 group-hover:text-brand-gold font-mono text-xs font-bold flex items-center justify-center transition-all duration-300 z-10 shadow-lg">
                0{step.stepNumber}
              </div>

              {/* Connecting line (desktop only) */}
              {idx < PROCESS_DATA.length - 1 && (
                <div className="hidden md:block absolute left-[40px] top-[-2px] w-[calc(100%-8px)] h-[1px] bg-gradient-to-r from-white/[0.08] via-brand-gold/10 to-transparent z-0" />
              )}

              {/* Content Card */}
              <div className="bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-brand-gold/20 rounded-2xl p-6 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider block mb-2">
                    PHASE {step.stepNumber}
                  </span>
                  
                  <h3 className="text-lg font-display font-bold text-brand-cream mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-brand-cream/70 leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Scope list */}
                <div className="border-t border-white/[0.04] pt-4">
                  <span className="text-[9px] font-mono text-white/40 block mb-2.5 tracking-wider uppercase">Key Output</span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, idy) => (
                      <li key={idy} className="text-[10px] text-brand-cream/90 flex items-start gap-1.5 font-light leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
