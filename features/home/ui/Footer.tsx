"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section: CTA & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* CTA */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
              Have a project in mind?
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 text-xl md:text-2xl border-b border-white/30 pb-2 hover:text-secondary hover:border-secondary transition-colors"
            >
              Let's talk about it <ArrowUpRight size={24} />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="flex gap-12 md:gap-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Sitemap</h4>
              <ul className="space-y-4">
                <li><Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
                <li><Link href="/studio" className="hover:text-secondary transition-colors">Studio</Link></li>
                <li><Link href="/news" className="hover:text-secondary transition-colors">News</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-secondary transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors">Twitter</Link></li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-16"></div>

        {/* Bottom Section: Newsletter & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-6">Stay Updated</h4>
            <form className="flex gap-0 border-b border-white/30 pb-2 max-w-md group focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-white placeholder:text-gray-500 w-full py-2"
              />
              <button type="button" className="text-sm uppercase tracking-widest hover:text-secondary transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col md:items-end justify-between gap-8">
            <div className="flex gap-6">
              <Link href="#" className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </Link>
            </div>
            
            {/* Technical Footer Info */}
            <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-gray-600">
              <div className="flex items-center gap-4">
                <span>LON 51.5074° N, 0.1278° W</span>
                <span>/// SYSTEM.ONLINE</span>
              </div>
              <div suppressHydrationWarning>
                © {new Date().getFullYear()} Architecture Studio. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Large Typographic Logo & End Marker */}
        <motion.div 
          className="border-t border-white/10 pt-8 flex justify-between items-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white/5 select-none">
            ARCHITECTURE.
          </h1>
         
        </motion.div>

      </div>
    </footer>
  );
}
