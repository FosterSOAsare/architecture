"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-md text-black border-b border-gray-100"
            : "bg-transparent text-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter z-50">
            ARC.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <Link href="/projects" className="hover:text-secondary transition-colors">
              Projects
            </Link>
            <Link href="/studio" className="hover:text-secondary transition-colors">
              Studio
            </Link>
            <Link href="/news" className="hover:text-secondary transition-colors">
              News
            </Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-light tracking-widest uppercase text-black">
          <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/studio" onClick={() => setIsMobileMenuOpen(false)}>
            Studio
          </Link>
          <Link href="/news" onClick={() => setIsMobileMenuOpen(false)}>
            News
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
