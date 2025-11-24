"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  transparentOnTop?: boolean;
}

const NAV_ITEMS = [
  { label: "Projects", href: "/projects" },
  { label: "Studio", href: "/studio" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ transparentOnTop = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Determine styles based on state and props
  const isTransparent = transparentOnTop && !isScrolled && !isMobileMenuOpen;

  const headerClass = isTransparent
    ? "bg-transparent text-white"
    : "bg-white/90 backdrop-blur-md text-black border-b border-gray-100";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClass}`}
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
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group py-2"
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-60 group-hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-current"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover Indicator (if not active) */}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full opacity-50" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        id="mobile-menu"
        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Menu"
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-light tracking-widest uppercase text-black">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative ${
                  isActive ? "font-medium" : "text-gray-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-black"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
}
