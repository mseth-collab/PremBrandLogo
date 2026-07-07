import { ComponentType } from 'react';
import { SERVICES_DATA } from '../data';
import { Compass, Briefcase, Instagram, Globe, Package, BookOpen, Layers, Sparkles, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

// Simple map to render Lucide icons dynamically
const iconMap: Record<string, ComponentType<any>> = {
  Compass,
  Briefcase,
  Instagram,
  Globe,
  Package,
  BookOpen,
  Layers,
  Sparkles
};

interface ServicesProps {
  onStartProjectClick: (serviceTitle?: string) => void;
}

export default function Services({ onStartProjectClick }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative border-t border-white/[0.03] bg-brand-charcoal overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
              DESIGN SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none">
              Logo, Brand Identity & <span className="text-brand-gold">Web Design Services</span>
            </h2>
          </div>
          <p className="text-brand-cream/60 font-light max-w-sm mt-4 md:mt-0 text-sm md:text-base border-l border-brand-gold/30 pl-4">
            We don’t just design assets; we build complete visual systems that help your brand look premium, credible, and ready to convert.
          </p>
        </motion.div>

        {/* Services Grid (8 cards) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_DATA.map(service => {
            const IconComponent = iconMap[service.iconName] || Compass;
            return (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="bg-brand-dark-gray/20 hover:bg-brand-dark-gray/45 border border-white/[0.04] hover:border-brand-gold/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative"
              >
                {/* Subtle Hover Ambient Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />

                <div>
                  {/* Service Icon Banner */}
                  <div className="w-12 h-12 bg-white/[0.03] group-hover:bg-brand-gold/10 group-hover:text-brand-gold rounded-xl flex items-center justify-center border border-white/[0.04] text-brand-cream/80 transition-all duration-300 mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-200 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-brand-cream/70 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Scope breakdown details */}
                <div className="border-t border-white/[0.04] pt-4 mt-4">
                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-white/40 block mb-2 tracking-wider uppercase">
                      What’s Included
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-[11px] text-brand-cream/80 flex items-center gap-1.5 font-light">
                          <Check className="w-3 h-3 text-brand-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-brand-gold/60 block tracking-wider uppercase">
                      Best For
                    </span>
                    <p className="text-[11px] text-brand-cream/60 leading-snug font-light italic mt-1">
                      "{service.idealClient}"
                    </p>
                  </div>

                  {/* Tiny Interactive Trigger */}
                  <button 
                    onClick={() => onStartProjectClick(service.title)}
                    className="mt-6 w-full py-2 bg-white/[0.02] group-hover:bg-brand-gold/10 border border-white/[0.04] group-hover:border-brand-gold/30 text-brand-cream/80 group-hover:text-brand-gold rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
