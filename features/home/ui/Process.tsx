"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-gray-400">
            <span>(05)</span>
            <div className="w-12 h-[1px] bg-gray-300"></div>
            <span>Methodology</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-light">
            Design <span className="italic text-gray-400">Process</span>
          </h3>
        </motion.div>

        {/* Process Steps - Horizontal Timeline */}
        <div className="relative mt-24">
          
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-gray-300" style={{ width: 'calc(100% - 120px)', left: '60px' }}>
            <motion.div 
              className="h-[1px] bg-black origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-start text-left group pt-8 lg:pt-12"
              >
                {/* Timeline Node (Desktop) */}
                <div className="hidden lg:block absolute top-[-5px] left-0 w-2.5 h-2.5 bg-white border border-black rounded-full z-10 group-hover:bg-black transition-colors duration-300" />

                {/* Large Background Number */}
                <div className="text-8xl font-serif text-gray-100 absolute -top-10 -left-4 -z-10 select-none group-hover:text-gray-200 transition-colors duration-500">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 pl-4 lg:pl-0">
                  <h4 className="text-2xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
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
