"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Footer } from "@/features/home/ui/Footer";
import { TEAM_MEMBERS, STUDIO_VALUES } from "@/features/studio/data";
import { ArrowUpRight, Plus } from "lucide-react";

export function StudioPageContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section - Redesigned */}
        <section className="pt-20 min-h-screen flex items-center bg-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
                backgroundSize: "100px 100px",
              }}
            />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8 text-xs font-mono uppercase tracking-widest text-gray-500">
                  <span className="font-bold">(01)</span>
                  <div className="w-20 h-[1px] bg-black"></div>
                  <span>About Us</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[0.95] mb-8">
                  We are a collective of{" "}
                  <span className="italic text-gray-500">architects,</span>
                  <br />
                  designers, and thinkers.
                </h1>

                <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-xl mb-12">
                  Founded in 2010, our studio has been at the forefront of
                  contemporary architecture, creating spaces that inspire,
                  challenge, and endure.
                </p>

                {/* Stats - Horizontal */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-serif font-light mb-2">
                      150+
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      Projects
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-3xl md:text-4xl font-serif font-light mb-2">
                      25
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      Awards
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-3xl md:text-4xl font-serif font-light mb-2">
                      12
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      Team
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-[4/5] relative">
                  {/* Main Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                      alt="Architecture"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                  </div>

                  {/* Floating card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl"
                  >
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                      Since
                    </div>
                    <div className="text-5xl font-serif font-light">2010</div>
                  </motion.div>

                  {/* Corner brackets */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-white opacity-50" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-white opacity-50" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-32 left-8 text-gray-200"
          >
            <Plus size={14} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-32 right-8 text-gray-200"
          >
            <Plus size={14} />
          </motion.div>
        </section>

        {/* Philosophy Section - Redesigned */}
        <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Floating decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-32 left-24 w-2 h-2 bg-white/30 rounded-full"
          />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-4 mb-12 text-xs font-mono uppercase tracking-widest text-gray-500">
                  <div className="w-12 h-[1px] bg-white/30"></div>
                  <span className="font-bold">(02)</span>
                  <span>Philosophy</span>
                  <div className="w-12 h-[1px] bg-white/30"></div>
                </div>

                {/* Large centered quote */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
                  "Design with{" "}
                  <span className="italic text-gray-500">Purpose,</span>
                  <br />
                  Build for{" "}
                  <span className="italic text-gray-500">Eternity</span>"
                </h2>

                <p className="text-lg md:text-xl font-light text-gray-500 max-w-3xl mx-auto">
                  Our guiding principle in every project we undertake
                </p>
              </motion.div>

              {/* Three column content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center md:text-left"
                >
                  <div className="text-5xl font-serif text-white/10 mb-4">
                    01
                  </div>
                  <h3 className="text-xl font-medium mb-4">Human-Centered</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed">
                    We believe architecture should elevate the human experience,
                    creating spaces that inspire and nurture.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center md:text-left"
                >
                  <div className="text-5xl font-serif text-white/10 mb-4">
                    02
                  </div>
                  <h3 className="text-xl font-medium mb-4">Sustainable</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed">
                    Environmental responsibility is at the core of every design
                    decision we make.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center md:text-left"
                >
                  <div className="text-5xl font-serif text-white/10 mb-4">
                    03
                  </div>
                  <h3 className="text-xl font-medium mb-4">Timeless</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed">
                    We create solutions that are both forward-thinking and
                    enduring for generations.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Image Section - NEW */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Image */}
                <div className="aspect-[3/4] md:aspect-[21/9] overflow-hidden bg-gray-200 relative">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Studio workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Floating label */}
                  <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-sm text-xs font-mono uppercase tracking-widest">
                      Our Studio — Copenhagen
                    </div>
                  </div>
                </div>

                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-black opacity-20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-black opacity-20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-black opacity-20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-black opacity-20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section - Enhanced */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-gray-500">
                  <span className="font-bold">(03)</span>
                  <div className="w-20 h-[1px] bg-black"></div>
                  <span>Core Values</span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {STUDIO_VALUES.map((value, index) => (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="group relative"
                  >
                    {/* Number */}
                    <div className="text-8xl font-serif text-gray-100 absolute -top-6 -left-4 -z-10 select-none group-hover:text-gray-200 transition-colors duration-500">
                      0{value.id}
                    </div>

                    <div className="border-t border-gray-200 pt-8 group-hover:border-black transition-colors duration-300">
                      <h3 className="text-3xl md:text-4xl font-serif font-light mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {value.title}
                      </h3>
                      <p className="text-base md:text-lg font-light text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced */}
        <section className="py-24 md:py-32 bg-gray-50 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 md:mb-24"
              >
                <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-gray-500">
                  <span className="font-bold">(04)</span>
                  <div className="w-20 h-[1px] bg-black"></div>
                  <span>The Team</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-light">
                  Meet the <span className="italic text-gray-500">People</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {TEAM_MEMBERS.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Corner Brackets */}
                    <svg
                      className="absolute top-0 right-0 w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M8 4H20V16" />
                    </svg>

                    {/* Image */}
                    <div className="aspect-[3/4] overflow-hidden bg-gray-200 mb-6 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm md:text-base font-light text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-black text-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif font-light mb-8">
                  Let's create something{" "}
                  <span className="italic text-gray-500">extraordinary</span>
                </h2>
                <p className="text-lg md:text-xl font-light text-gray-500 mb-12">
                  We're always excited to discuss new projects and
                  collaborations.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors duration-300 group"
                >
                  Get in Touch
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
