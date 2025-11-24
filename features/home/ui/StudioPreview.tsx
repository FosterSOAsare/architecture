"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Users } from "lucide-react";

export function StudioPreview() {
  return (
    <section className="py-32 bg-gray-50 text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-gray-500">
              <span>(02)</span>
              <div className="w-12 h-[1px] bg-gray-300"></div>
              <span>The Studio</span>
            </div>
            <h3 className="text-5xl italic md:text-6xl font-serif font-light leading-[1.1]">
              We are a collective of architects, designers, and thinkers
              building the future.
            </h3>
          </div>
          <div className="hidden md:block pb-2">
            <Link
              href="/studio"
              className="group flex items-center gap-3 text-sm uppercase tracking-widest font-medium bg-white border border-gray-200 px-6 py-3 hover:border-black transition-colors"
            >
              Meet The Team{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Card 1: Main Image (Large) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=2500&auto=format&fit=crop"
              alt="Architects working on a model"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-3xl font-serif italic mb-4">
                  Process & Craft
                </h4>
                <p className="text-gray-200 max-w-md font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Our studio is a workshop. We test, we prototype, and we
                  refine. Every project begins with a physical model, grounding
                  our ideas in reality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Impact (Dark) - Enhanced Design */}
          <motion.div
            className="bg-[#1a1a1a] text-white p-8 flex flex-col justify-between rounded-sm relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Corner Brackets (Tiny Elements) */}
            <svg
              className="absolute top-4 right-4 w-4 h-4 text-white/20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 4H20V16" />
            </svg>
            <svg
              className="absolute bottom-4 left-4 w-4 h-4 text-white/20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 20H4V8" />
            </svg>

            {/* Subtle Gradient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity duration-500 group-hover:opacity-70" />

            <div className="flex justify-between items-start relative z-10 mb-8">
              <h4 className="text-lg font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Impact
              </h4>
              <Users className="text-gray-500" size={20} />
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div>
                <div className="text-4xl font-light text-white mb-1">15+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Years
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-1">42</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Awards
                </div>
              </div>
              <div className="col-span-2 pt-6 border-t border-white/10">
                <div className="text-4xl font-light text-white mb-1">£250M</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Construction Value
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Services (Light) - Enhanced Design */}
          <motion.div
            className="bg-white p-8 border border-gray-100 flex flex-col justify-between rounded-sm group hover:border-secondary/30 transition-colors duration-300 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Corner Brackets (Tiny Elements) */}
            <svg
              className="absolute top-4 right-4 w-4 h-4 text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 4H20V16" />
            </svg>
            <svg
              className="absolute bottom-4 left-4 w-4 h-4 text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 20H4V8" />
            </svg>

            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-serif">Capabilities</h4>
              <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <Layers className="text-secondary" size={20} />
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Architecture",
                "Interior Design",
                "Masterplanning",
                "Landscape",
                "Sustainability",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-black transition-colors"
                >
                  <div className="w-1 h-1 rounded-full bg-secondary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            href="/studio"
            className="flex items-center justify-center gap-3 text-sm uppercase tracking-widest font-medium bg-black text-white w-full py-4"
          >
            Meet The Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
