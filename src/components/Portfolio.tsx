import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [isMobile, setIsMobile] = useState(true);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="portfolio" className="py-20 md:py-28 relative border-t border-white/[0.03] overflow-hidden">
      {/* Dynamic Background Grid Mesh */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20"
        >
          <div>
            <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
              FEATURED CASES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none">
              <span className="text-brand-gold">Premium Brand Case Studies</span>
            </h2>
          </div>
          <p className="text-brand-cream/60 font-light max-w-sm mt-4 md:mt-0 text-sm md:text-base border-l border-brand-gold/30 pl-4">
            Browse our curated portfolio concepts. Click any project to open a complete, highly-detailed deep dive of creative direction, color metrics, and outcomes.
          </p>
        </motion.div>

        {/* 6 Grid Cases Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => !isMobile && setHoveredCardId(project.id)}
              onMouseLeave={() => !isMobile && setHoveredCardId(null)}
              onFocus={() => !isMobile && setHoveredCardId(project.id)}
              onBlur={() => !isMobile && setHoveredCardId(null)}
              className="group bg-brand-charcoal border border-white/[0.04] hover:border-brand-gold/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/5 flex flex-col justify-between cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-gold relative z-10"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              aria-label={`View case study for ${project.title}`}
            >
              <div>
                {/* Image Wrap */}
                <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-white/[0.04]">
                  {/* Category Pill tag */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-brand-charcoal/80 border border-white/[0.05] rounded-full text-[10px] font-mono tracking-wider text-brand-cream backdrop-blur-md">
                    {project.category}
                  </div>

                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      !isMobile && project.videoUrl && hoveredCardId === project.id ? 'opacity-0 scale-95' : 'opacity-100'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {!isMobile && project.videoUrl && hoveredCardId === project.id && (
                    <video 
                      src={project.videoUrl} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 pointer-events-none z-0" 
                    />
                  )}

                  {/* Dark overlay revealing on hover */}
                  <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="px-5 py-2.5 bg-brand-gold text-brand-charcoal text-xs font-mono font-bold rounded-full tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 md:p-8">
                  <span className="text-[10px] font-mono text-brand-gold tracking-widest uppercase block mb-1">
                    {project.industry}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-brand-cream mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Deliverable tags (first 3) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.deliverables.slice(0, 3).map((del, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-0.5 bg-white/[0.03] text-white/50 border border-white/[0.04] rounded-md font-mono text-[9px]"
                      >
                        {del}
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="px-2 py-0.5 bg-brand-gold/5 text-brand-gold rounded-md font-mono text-[9px]">
                        +{project.deliverables.length - 3} MORE
                      </span>
                    )}
                  </div>

                  {/* Short result statement in callout box */}
                  <div className="bg-white/[0.02] border border-white/[0.03] rounded-xl p-4 flex gap-3 items-start">
                    <div className="p-1.5 bg-brand-gold/10 rounded-md text-brand-gold mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">BUSINESS IMPACT</span>
                      <p className="text-xs text-brand-cream/90 font-light leading-relaxed mt-0.5 italic">
                        "{project.resultStatement}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Trigger Action button */}
              <div className="p-6 md:px-8 md:pb-8 pt-0">
                <div 
                  className="w-full py-3.5 bg-white/[0.02] group-hover:bg-brand-gold text-brand-cream group-hover:text-brand-charcoal border border-white/[0.05] group-hover:border-brand-gold rounded-xl font-display font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
