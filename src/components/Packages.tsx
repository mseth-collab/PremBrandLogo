import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Briefcase, Instagram, Globe, Check, ArrowRight, Sparkles, ShieldCheck, Clock } from 'lucide-react';

interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  icon: any;
  deliveryTime: string;
  deliverables: string[];
  popular?: boolean;
}

const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pkg-logo',
    name: 'Logo Design',
    tagline: 'Timeless geometric vector foundations.',
    price: '$1,800',
    icon: Compass,
    deliveryTime: '2 weeks',
    deliverables: [
      'Primary, Secondary & Submark Logos',
      'Custom Geometric Grid Guidelines',
      'Full Vector Source Assets (.AI, .SVG, .PDF)',
      'High-Resolution Raster Formats',
      'Standard safe-zone and sizing rules'
    ]
  },
  {
    id: 'pkg-identity',
    name: 'Brand Identity Kit',
    tagline: 'A cohesive luxury visual ecosystem.',
    price: '$3,500',
    icon: Briefcase,
    deliveryTime: '3-4 weeks',
    popular: true,
    deliverables: [
      'Everything in Logo Design Package',
      'Complete Color Formulas (Hex, CMYK, Pantone)',
      'Editorial Typography Pairing Suite',
      'Bespoke Brand Texture / Geometric Patterns',
      'Premium Business Card & Letterhead Assets',
      'Brand Presentation Pitch Deck template'
    ]
  },
  {
    id: 'pkg-social',
    name: 'Social Media Creatives',
    tagline: 'High-converting scroll-stopping assets.',
    price: '$2,200',
    icon: Instagram,
    deliveryTime: '2 weeks',
    deliverables: [
      '9-Grid Instagram launch templates',
      'Fully editable Canva Pro brand templates',
      'LinkedIn Banner & Profile styling direction',
      'Interactive Story layout designs',
      'Standard content composition formulas'
    ]
  },
  {
    id: 'pkg-web',
    name: 'Website Landing Page',
    tagline: 'Premium high-converting digital portal.',
    price: '$4,800',
    icon: Globe,
    deliveryTime: '4-5 weeks',
    deliverables: [
      'High-Fidelity UI UX Mobile-first Designs',
      'Production-Ready Clean Tailwind layout',
      'Subtle motion micro-animations',
      'Form integrations & automated email setup',
      'SEO audit and speed-optimized layouts'
    ]
  }
];

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  const [billingCycle, setBillingCycle] = useState<'flat' | 'retainer'>('flat');

  return (
    <section id="packages" className="py-20 md:py-28 relative border-t border-white/[0.03] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl text-left">
            <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
              CLIENT SERVICES & INVESTMENT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none">
              Strategic Packages <span className="text-brand-gold font-sans not-italic font-bold">Built to Convert</span>
            </h2>
          </div>
          
          {/* Toggle investment mode */}
          <div className="mt-6 md:mt-0 flex bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-full">
            <button
              onClick={() => setBillingCycle('flat')}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                billingCycle === 'flat' 
                  ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md' 
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              FLAT INVESTMENT
            </button>
            <button
              onClick={() => setBillingCycle('retainer')}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                billingCycle === 'retainer' 
                  ? 'bg-brand-gold text-brand-charcoal font-bold shadow-md' 
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              STUDIO RETAINER
            </button>
          </div>
        </div>

        {/* Retainer Intro */}
        {billingCycle === 'retainer' && (
          <div className="mb-12 bg-white/[0.02] border border-brand-gold/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold mt-1">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-display font-bold text-brand-cream">Elite Partnership Retainer</h3>
                <p className="text-sm text-brand-cream/70 font-light mt-1 max-w-2xl">
                  Keep our studio on speed dial. For high-growth firms requiring ongoing creative assets, packaging, digital ad campaigns, and monthly design sprints. Starting at <span className="text-brand-gold font-semibold">$4,500/month</span> (minimum 3-month commitment).
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectPackage('Ongoing Monthly Retainer')}
              className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display text-xs font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
            >
              <span>Apply for Retainer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES_DATA.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={pkg.id}
                className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 border group ${
                  pkg.popular 
                    ? 'bg-gradient-to-b from-brand-gold/[0.04] to-brand-charcoal border-brand-gold/30 shadow-xl shadow-brand-gold/5' 
                    : 'bg-brand-dark-gray/20 border-white/[0.04] hover:border-white/[0.1]'
                }`}
              >
                {/* Popular Badge overlay */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-brand-gold text-brand-charcoal font-mono text-[9px] font-bold tracking-widest rounded-full uppercase shadow-lg shadow-brand-gold/15">
                    MOST POPULAR CHANNELS
                  </div>
                )}

                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-2xl group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 text-brand-gold transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-white/50">
                      <Clock className="w-3 h-3 text-brand-gold" />
                      <span>{pkg.deliveryTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-brand-cream mb-1 text-left">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-white/40 font-mono tracking-tight uppercase mb-4 text-left">
                    {pkg.tagline}
                  </p>

                  <div className="border-b border-white/[0.04] pb-5 mb-5 flex items-baseline gap-1">
                    <span className="text-3xl font-display font-black text-brand-cream">
                      {billingCycle === 'retainer' ? `${pkg.price}/mo` : pkg.price}
                    </span>
                    <span className="text-[10px] font-mono text-white/30">
                      {billingCycle === 'retainer' ? 'on retainer' : 'one-time'}
                    </span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8 text-left">
                    <p className="text-[10px] font-mono text-brand-gold uppercase tracking-wider mb-2">DELIVERABLES INCLUDED:</p>
                    {pkg.deliverables.map((item, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <div className="p-0.5 bg-brand-gold/10 rounded-md text-brand-gold mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-[11px] text-brand-cream/80 leading-snug font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Package button */}
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-full font-display text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    pkg.popular 
                      ? 'bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal shadow-md shadow-brand-gold/10' 
                      : 'bg-white/[0.02] hover:bg-white/[0.06] text-brand-cream border border-white/[0.06] hover:border-brand-gold/30'
                  }`}
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Security / Quality Check banners */}
        <div className="mt-12 pt-8 border-t border-white/[0.03] flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-mono text-white/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>BEHANCE-GRADE QUALITY GUARANTEED</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>FULLY SECURED IP TRANSFER ON SIGN-OFF</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>INDUSTRY-STANDARD VECTOR EXPORTS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
