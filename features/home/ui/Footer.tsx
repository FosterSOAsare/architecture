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
        <div className="border-t border-white/10 mb-12"></div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          
          {/* Logo */}
          <div className="text-2xl font-medium tracking-tighter">ARC.</div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Architecture Studio. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Twitter size={20} />
            </Link>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}
