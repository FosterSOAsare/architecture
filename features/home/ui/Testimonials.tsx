"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em] mb-6">
            Client Testimonials
          </h2>
          <h3 className="text-4xl italic md:text-6xl font-serif font-light leading-[1.1]">
            What our clients say
          </h3>
        </div>

        {/* Testimonials - Large Format with Small Images */}
        <div className="space-y-16 md:space-y-20">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="max-w-5xl mx-auto"
            >
              {/* Quote */}
              <blockquote className="mb-8">
                <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed text-gray-800 italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author Info with Image */}
              <div className="flex items-center gap-6 border-l-2 border-secondary pl-6">
                {/* Small Circular Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-secondary"
                  />
                </div>
                
                {/* Text Info */}
                <div>
                  <div className="text-lg font-bold mb-1">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">
                    {testimonial.project}
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
