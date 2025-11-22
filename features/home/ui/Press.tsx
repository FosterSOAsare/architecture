"use client";

import { motion } from "framer-motion";
import { PRESS_MENTIONS } from "../data";

export function Press() {
  return (
    <section className="py-20 md:py-24 bg-white text-black border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-mono text-gray-400 uppercase tracking-[0.2em]">
            As Featured In
          </h3>
        </motion.div>

        {/* Press Logos - Larger Size */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 items-center">
          {PRESS_MENTIONS.map((press, index) => (
            <motion.div
              key={press.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <img 
                src={press.logo} 
                alt={press.name}
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-lg md:text-xl font-medium text-gray-600">${press.name}</span>`;
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
