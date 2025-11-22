"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "../data";

interface ProjectHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectHeader({ activeCategory, onCategoryChange }: ProjectHeaderProps) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white text-black border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-gray-400">
              <span>(01)</span>
              <div className="w-16 h-[1px] bg-black"></div>
              <span>Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-none tracking-tight">
              Selected <span className="italic text-gray-400">Works</span>
            </h1>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6 md:gap-8 border-t border-gray-200 pt-6"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className="relative group"
              >
                <span
                  className={`text-sm md:text-base uppercase tracking-[0.2em] transition-colors duration-300 ${
                    activeCategory === category
                      ? "text-black font-medium"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {category}
                </span>
                
                {/* Active indicator */}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                
                {/* Hover line animation */}
                {activeCategory !== category && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gray-300 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
