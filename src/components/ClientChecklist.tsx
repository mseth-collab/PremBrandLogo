import { WHAT_CLIENTS_GET_ITEMS } from '../data';
import { Check, ShieldCheck, Download, Award } from 'lucide-react';

export default function ClientChecklist() {
  return (
    <section id="checklist" className="py-20 md:py-28 relative border-t border-white/[0.03]">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
              THE FULL PACKAGE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none">
              What You Receive Upon <span className="text-brand-gold">Ultimate Sign-Off</span>
            </h2>
            <p className="text-brand-cream/60 font-light mt-4 text-sm md:text-base max-w-2xl">
              We do not leave you with a loose folder of disjointed shapes. You receive a fully-operational visual system, organized in logical folders with easy-to-use vector exports.
            </p>
          </div>

          <div className="lg:col-span-5 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl p-6 flex items-center gap-4">
            <div className="p-3 bg-brand-gold/15 rounded-full text-brand-gold shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-mono text-brand-gold font-bold uppercase tracking-wider">ALL SOURCE FILES INCLUDED</p>
              <p className="text-xs text-brand-cream/80 font-light mt-0.5">Editable vector formats (.AI, .SVG, .PDF) included by default, alongside clean web-optimized exports.</p>
            </div>
          </div>
        </div>

        {/* Deliverables Grid (Bento Style Checklist) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHAT_CLIENTS_GET_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-brand-dark-gray/20 border border-white/[0.04] p-6 rounded-2xl flex flex-col justify-between group hover:border-brand-gold/20 transition-all duration-300"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-display font-bold text-brand-cream mb-2 group-hover:text-brand-gold transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.02] flex items-center gap-2 text-[10px] font-mono text-white/40 group-hover:text-brand-gold transition-colors duration-300">
                <Check className="w-3.5 h-3.5 text-brand-gold" />
                <span>PREMIUM EXPORT</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
