"use client";

import { motion } from "framer-motion";
import { AWARDS } from "../data";

export function Awards() {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-6">
            Recognition
          </h2>
          <h3 className="italic text-4xl md:text-6xl font-serif font-light leading-[1.1]">
            Awards & Honors
          </h3>
        </div>

        {/* Awards Grid - Card Style */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {AWARDS.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0,  }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 group"
            >
              {/* Year Badge */}
              <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/50 text-amber-400 text-sm font-mono uppercase tracking-widest mb-6">
                {award.year}
              </div>

              {/* Award Title */}
              <h4 className="text-2xl md:text-3xl font-serif font-light mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                {award.title}
              </h4>

              {/* Project */}
              <p className="text-gray-400 text-sm uppercase tracking-widest">
                {award.project}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
