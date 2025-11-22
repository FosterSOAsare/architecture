"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data";

export function Testimonials() {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Technical Grid Background (Tiny Element) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-gray-500">
            <span>(03)</span>
            <div className="w-12 h-[1px] bg-gray-700"></div>
            <span>Client Voices</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-light">
            Trusted by <span className="italic text-gray-500">Visionaries</span>
          </h2>
        </motion.div>

        {/* Testimonials - Large Format with Small Images */}
        <div className="space-y-16 md:space-y-24">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative">
                {/* Decorative Quote Mark */}
                <div className="absolute -top-8 -left-8 md:-left-16 text-9xl font-serif text-white/10 opacity-50 select-none">
                  "
                </div>
                
                {/* Quote */}
                <blockquote className="relative z-10 mb-10">
                  <p className="text-2xl md:text-4xl md:leading-tight font-serif font-light text-gray-200">
                    {testimonial.quote}
                  </p>
                </blockquote>

                {/* Author Info with Image */}
                <div className="flex items-center gap-5">
                  {/* Small Circular Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
                    />
                  </div>
                  
                  {/* Text Info */}
                  <div>
                    <div className="text-lg font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, <span className="text-secondary">{testimonial.project}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
