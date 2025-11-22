"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LATEST_NEWS } from "../data";

export function LatestNews() {
  return (
    <section className="py-24 md:py-32 bg-white text-black border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div>
            <h2 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em] mb-6">
              Latest News
            </h2>
            <h3 className="text-4xl italic md:text-6xl font-serif font-light leading-[1.1] max-w-2xl">
              What we've been up to
            </h3>
          </div>
          <Link 
            href="/news" 
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-secondary hover:border-secondary transition-colors"
          >
            All News <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {LATEST_NEWS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-100 border border-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                {/* Meta */}
                <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest">
                  <span className="px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-400">{item.date}</span>
                </div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-medium leading-tight group-hover:text-secondary transition-colors">
                  {item.title}
                </h4>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 group-hover:text-secondary transition-colors">
                  Read More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-12 md:hidden">
          <Link 
            href="/news" 
            className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 w-fit"
          >
            All News <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
