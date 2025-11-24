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
          <h3 className="text-sm font-mono text-gray-500 uppercase tracking-[0.2em]">
            As Featured In
          </h3>
        </motion.div>

        {/* Press Mentions - Premium Text Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 border-t border-l border-gray-100">
          {PRESS_MENTIONS.map((press, index) => (
            <motion.div
              key={press.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center hover:cursor-pointer justify-center h-32 border-r border-b border-gray-100 p-8 group hover:bg-gray-50 transition-colors duration-300 cursor-default"
            >
              <span className="text-xl font-serif italic text-gray-500 group-hover:text-secondary transition-colors duration-500 text-center leading-tight">
                {press.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
