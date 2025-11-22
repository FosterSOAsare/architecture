"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { AWARDS } from "../data";

export function Awards() {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-gray-400">
              <span>(04)</span>
              <div className="w-12 h-[1px] bg-gray-300"></div>
              <span>Recognition</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-light">
              Award <span className="italic text-gray-400">Winning</span>
            </h3>
          </div>
          <div className="hidden md:block text-right max-w-xs text-sm text-gray-500 font-light">
            Celebrating excellence in design and our commitment to pushing architectural boundaries.
          </div>
        </motion.div>

        {/* Awards List - Premium Table Layout */}
        <div className="flex flex-col border-t border-gray-200">
          {AWARDS.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-gray-200 hover:bg-white transition-colors duration-300 cursor-default relative"
            >
              {/* Hover Reveal Background (Optional subtle effect) */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Year & Organization */}
              <div className="flex items-center gap-8 md:w-1/4 mb-4 md:mb-0">
                <span className="text-sm font-mono text-gray-400 group-hover:text-black transition-colors">
                  {award.year}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-gray-500 hidden md:block">
                  {award.organization}
                </span>
              </div>

              {/* Title */}
              <div className="md:w-1/2">
                <h4 className="text-2xl md:text-3xl font-serif font-light group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {award.title}
                </h4>
                <span className="md:hidden text-xs font-medium uppercase tracking-widest text-gray-500 mt-2 block">
                  {award.organization}
                </span>
              </div>

              {/* Project & Action */}
              <div className="flex items-center justify-between md:justify-end md:w-1/4 gap-4 mt-4 md:mt-0">
                <span className="text-sm text-gray-500 group-hover:text-black transition-colors">
                  {award.project}
                </span>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
