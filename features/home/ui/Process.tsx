"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em] mb-6">
            Our Process
          </h2>
          <h3 className="italic text-4xl md:text-6xl font-serif font-light leading-[1.1] mb-6">
            How we work
          </h3>
          <p className="text-lg text-gray-600 font-light">
            A collaborative approach that transforms vision into reality through four distinct phases.
          </p>
        </div>

        {/* Process Steps - Horizontal Timeline */}
        <div className="relative">
          
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200" style={{ width: 'calc(100% - 120px)', left: '60px' }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-secondary border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-serif font-light text-white">
                    {step.number}
                  </span>
                </div>

                {/* Arrow (Desktop Only) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-12 -right-4 w-6 h-6 text-secondary transform -translate-y-1/2 z-20" />
                )}

                {/* Content */}
                <div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
