import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Calendar, DollarSign, Briefcase, Mail, User, Building, Sparkles } from 'lucide-react';

interface ContactFormProps {
  selectedService?: string;
}

export default function ContactForm({ selectedService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceNeeded: 'brand-identity',
    budgetRange: '5k-10k',
    deadline: '1-2-months',
    message: ''
  });

  useEffect(() => {
    if (selectedService) {
      let mappedValue = 'brand-identity';
      const cleanService = selectedService.toLowerCase();
      if (cleanService.includes('logo')) {
        mappedValue = 'logo-design';
      } else if (cleanService.includes('identity') || cleanService.includes('kit') || cleanService.includes('brand')) {
        mappedValue = 'brand-identity';
      } else if (cleanService.includes('social') || cleanService.includes('ad') || cleanService.includes('creative')) {
        mappedValue = 'social-creatives';
      } else if (cleanService.includes('website') || cleanService.includes('landing') || cleanService.includes('page')) {
        mappedValue = 'web-landing';
      } else if (cleanService.includes('packaging')) {
        mappedValue = 'packaging-label';
      } else if (cleanService.includes('guidelines') || cleanService.includes('manual')) {
        mappedValue = 'brand-guidelines';
      } else if (cleanService.includes('canva') || cleanService.includes('template')) {
        mappedValue = 'canva-templates';
      } else if (cleanService.includes('motion')) {
        mappedValue = 'motion-brand';
      }
      setFormData(prev => ({ ...prev, serviceNeeded: mappedValue }));
    }
  }, [selectedService]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      businessName: '',
      serviceNeeded: 'brand-identity',
      budgetRange: '5k-10k',
      deadline: '1-2-months',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-white/[0.03] bg-brand-charcoal">
      {/* Decorative Blur glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/2 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-3">
            START YOUR LEGACY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-brand-cream tracking-tight leading-none mb-4">
            Inquire About a <span className="text-brand-gold font-sans not-italic font-bold">Brand Partnership</span>
          </h2>
          <p className="text-sm md:text-base text-brand-cream/60 font-light">
            Ready to upgrade your positioning and attract high-end, high-paying clients? Complete our short creative brief below, and we will get back to you with a direct design proposal within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-brand-dark-gray/20 border border-white/[0.05] rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-8"
              >
                {/* Dual Input Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" />
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Mercer"
                        className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/[0.06] focus:border-brand-gold rounded-xl py-3.5 pl-11 pr-4 text-sm text-brand-cream placeholder-white/25 focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                      Corporate Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" />
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alexander@company.com"
                        className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/[0.06] focus:border-brand-gold rounded-xl py-3.5 pl-11 pr-4 text-sm text-brand-cream placeholder-white/25 focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Name */}
                <div className="relative">
                  <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                    Company / Brand Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" />
                    <input 
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Mercer & Co."
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/[0.06] focus:border-brand-gold rounded-xl py-3.5 pl-11 pr-4 text-sm text-brand-cream placeholder-white/25 focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Scope Selection Tri-Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Service needed */}
                  <div>
                    <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                      Service Scope
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35 pointer-events-none" />
                      <select 
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full bg-brand-charcoal border border-white/[0.06] focus:border-brand-gold rounded-xl py-3.5 pl-11 pr-4 text-xs text-brand-cream outline-none focus:ring-1 focus:ring-brand-gold transition-all duration-300 appearance-none"
                      >
                        <option value="logo-design">Logo Design from Scratch</option>
                        <option value="brand-identity">Brand Identity Kit</option>
                        <option value="social-creatives">Social Ad Creatives</option>
                        <option value="web-landing">Website / Landing Page</option>
                        <option value="packaging-label">Packaging & Label Design</option>
                        <option value="brand-guidelines">Brand Guidelines PDF</option>
                        <option value="canva-templates">Canva / Express Templates</option>
                        <option value="motion-brand">Motion Graphics / Launches</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                      Investment Budget
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35 pointer-events-none" />
                      <select 
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full bg-brand-charcoal border border-white/[0.06] focus:border-brand-gold rounded-xl py-3.5 pl-11 pr-4 text-xs text-brand-cream outline-none focus:ring-1 focus:ring-brand-gold transition-all duration-300 appearance-none"
                      >
                        <option value="1k-3k">$1,000 – $3,000</option>
                        <option value="3k-5k">$3,000 – $5,000</option>
                        <option value="5k-10k">$5,000 – $10,000</option>
                        <option value="10k-plus">$10,000+ (Custom Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Deadline Selector */}
                  <div>
                    <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                      Launch Timeline
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35 pointer-events-none" />
                      <select 
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full bg-brand-charcoal border border-white/[0.06] focus:border-brand-gold rounded-xl py-3.5 pl-11 pr-4 text-xs text-brand-cream outline-none focus:ring-1 focus:ring-brand-gold transition-all duration-300 appearance-none"
                      >
                        <option value="urgent">Urgent (&lt; 2 weeks)</option>
                        <option value="3-4-weeks">3 – 4 Weeks</option>
                        <option value="1-2-months">1 – 2 Months</option>
                        <option value="flexible">Flexible / Long-term</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message TextArea */}
                <div>
                  <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                    Creative Brief Summary & Target Market
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand vision, target demographic, product pricing, and what look you want to achieve..."
                    className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/[0.06] focus:border-brand-gold rounded-2xl py-3.5 px-4 text-sm text-brand-cream placeholder-white/25 focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col items-center">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-display font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'SECURELY TRANSMITTING...' : 'Let’s build a brand that clients remember.'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono text-white/30 uppercase mt-4 block">
                    Secured SSL Workspace Integration // No Spam Promised
                  </span>
                </div>

              </motion.form>
            ) : (
              <motion.div 
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 md:py-20 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-brand-gold/15 border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold mb-8 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-3xl font-display font-bold text-brand-cream mb-4">
                  Inquiry Successfully Received
                </h3>
                
                <p className="text-brand-cream/70 max-w-md mx-auto mb-8 font-light text-sm md:text-base leading-relaxed">
                  Thank you, <span className="text-brand-gold font-medium">{formData.name}</span>. Your creative brief for <span className="text-brand-gold font-medium">{formData.businessName || 'your brand'}</span> has been successfully logged into our studio database.
                </p>

                <div className="p-6 bg-white/[0.02] border border-white/[0.04] rounded-2xl max-w-sm mx-auto text-left mb-10">
                  <p className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-2">NEXT ACTION PLAN</p>
                  <ul className="space-y-2 text-xs text-brand-cream/80 font-light leading-snug">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1 shrink-0" />
                      <span>We will review your target audience within 4 hours.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1 shrink-0" />
                      <span>We will assemble a personalized interactive moodboard.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1 shrink-0" />
                      <span>We schedule a custom video briefing to align parameters.</span>
                    </li>
                  </ul>
                </div>

                <button 
                  onClick={resetForm}
                  className="px-6 py-3 bg-white/[0.04] hover:bg-white/[0.1] text-brand-cream font-mono text-xs rounded-full border border-white/[0.06] hover:border-brand-gold/30 transition-all duration-300"
                >
                  Submit Another Brief
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
