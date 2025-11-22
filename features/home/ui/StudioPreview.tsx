"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Users } from "lucide-react";

export function StudioPreview() {
  return (
    <section className="py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em] mb-6">
              The Studio
            </h2>
            <h3 className="text-5xl italic md:text-6xl font-serif font-light leading-[1.1]">
              We are a collective of architects, designers, and thinkers building the future.
            </h3>
          </div>
          <div className="hidden md:block pb-2">
            <Link 
              href="/studio" 
              className="group flex items-center gap-3 text-sm uppercase tracking-widest font-medium bg-white border border-gray-200 px-6 py-3 hover:border-black transition-colors"
            >
              Meet The Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Block 1: Main Image (Culture) */}
          <motion.div 
            className="md:col-span-8 relative group overflow-hidden h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=2500&auto=format&fit=crop" 
              alt="Architects working on a model" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="text-white">
                <h4 className="text-2xl font-serif italic mb-2">Process & Craft</h4>
                <p className="text-gray-200 max-w-md font-light">
                  Our studio is a workshop. We test, we prototype, and we refine. Every project begins with a physical model, grounding our ideas in reality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Block 2: Stats / Credibility */}
          <motion.div 
            className="md:col-span-4 bg-white p-8 md:p-12 flex flex-col justify-between border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div>
              <h4 className="text-lg font-medium mb-6">At a Glance</h4>
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-light text-secondary mb-1">15+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-secondary mb-1">42</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">International Awards</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-secondary mb-1">£250M</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Construction Value</div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Block 3: Services / Capabilities */}
          <motion.div 
            className="md:col-span-5 bg-[#f5f1ed] text-black p-8 md:p-12 flex flex-col justify-center border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-8">Capabilities</h4>
            
            <div className="space-y-6">
              {/* Architecture */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-medium mb-1">Architecture</h5>
                  <p className="text-sm text-gray-600">
                    Residential · Cultural · Commercial
                  </p>
                </div>
              </div>

              {/* Interior Design */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-medium mb-1">Interior Design</h5>
                  <p className="text-sm text-gray-600">
                    Bespoke Furniture · Spatial Planning
                  </p>
                </div>
              </div>

              {/* Masterplanning */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-medium mb-1">Masterplanning</h5>
                  <p className="text-sm text-gray-600">
                    Urban Regeneration · Landscaping
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Block 4: Philosophy / Approach */}
          <motion.div 
            className="md:col-span-7 bg-white p-8 md:p-12 border border-gray-100 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Our Approach</h4>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              "We don't just design buildings; we design <span className="text-black font-medium">ecosystems</span>. Our approach is holistic, considering the environmental impact, the social context, and the economic viability of every intervention."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Founder" />
              </div>
              <div>
                <div className="text-sm font-bold">James Sterling</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Principal Architect</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link 
            href="/studio" 
            className="flex items-center justify-center gap-3 text-sm uppercase tracking-widest font-medium bg-black text-white w-full py-4"
          >
            Meet The Team <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
