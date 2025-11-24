"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Footer } from "@/features/home/ui/Footer";
import { NEWS_ITEMS } from "@/features/news/data";
import Link from "next/link";

const CATEGORIES = ["All", "Awards", "Events", "Studio", "Thoughts"];

export function NewsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews =
    activeCategory === "All"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-black/80">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span className="">Journal & Updates</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-light mb-8">
              Latest <span className="italic text-black/80">News</span>
            </h1>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-8 mb-16 border-b border-gray-100 pb-6"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase tracking-widest transition-colors relative pb-2 ${
                  activeCategory === category
                    ? "text-black"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredNews.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <Link
                    href={`/news/${item.id}`}
                    className="flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="overflow-hidden mb-6 bg-gray-100 aspect-[4/3] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-mono uppercase tracking-widest">
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-black/80 mb-3">
                        <span className="flex items-center gap-2">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight mb-4 group-hover:text-black/80 transition-colors">
                        {item.title}
                      </h2>

                      <p className="text-black/80 font-light leading-relaxed mb-6 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm uppercase tracking-widest font-medium group-hover:underline decoration-1 underline-offset-4">
                          Read Article
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-black/80 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
