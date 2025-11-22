"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-secondary text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-8">
              Have a project in mind?
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. We're always excited to discuss new opportunities.
            </p>
            
            {/* CTA Button */}
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-300 group"
            >
              Start a Conversation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
