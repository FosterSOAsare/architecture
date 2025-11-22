"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Layers, ArrowLeft } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Footer } from "@/features/home/ui/Footer";
import { ALL_PROJECTS } from "@/features/projects/data";

export default function ProjectPage() {
  const params = useParams();
  const project = ALL_PROJECTS.find(p => p.id === Number(params.id));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  // Create 3 slides with different scaling and positioning
  const slides = project ? [
    {
      image: project.image,
      title: "Exterior View",
      imageClass: "object-cover object-center scale-100",
      containerClass: ""
    },
    {
      image: project.image,
      title: "Detail Shot",
      imageClass: "object-cover object-top scale-150",
      containerClass: ""
    },
    {
      image: project.image,
      title: "Context View",
      imageClass: "object-cover object-bottom scale-125",
      containerClass: ""
    },
  ] : [];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-secondary underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Embla Carousel */}
      <section className="pt-20 h-screen flex flex-col relative overflow-hidden bg-black">
        {/* Embla Carousel */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className={`relative h-full w-full flex-[0_0_100%] overflow-hidden ${slide.containerClass}`}>
                <img
                  src={slide.image}
                  alt={`${project.title} - ${slide.title}`}
                  className={`w-full h-full transition-transform duration-700 ${slide.imageClass}`}
                />
                {/* Base gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Slide Label */}
                <div className="absolute top-24 right-8 md:right-12">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-widest text-white">
                    {slide.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="w-full mx-auto px-6 md:px-12 relative z-10 text-white mt-auto pb-24 md:pb-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest mb-8 hover:text-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-widest">
                {project.category}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-widest">
                {project.status}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] mb-6 md:mb-8 max-w-5xl">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl leading-relaxed opacity-90">
              {project.description}
            </p>
          </motion.div>

          {/* Slider Controls & Indicators - Bottom Row */}
          <div className="flex items-center justify-between mt-20 md:mt-28">
            {/* Left Arrow */}
            <button
              onClick={scrollPrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "bg-white w-12" : "bg-white/40 w-8"
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
              {/* Info Grid - Slide in from left */}
              <div className="lg:col-span-1 space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                    <MapPin size={14} /> Location
                  </div>
                  <div className="text-2xl md:text-3xl font-light">{project.location}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                    <Calendar size={14} /> Year
                  </div>
                  <div className="text-2xl md:text-3xl font-light">{project.year}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                    <Layers size={14} /> Size
                  </div>
                  <div className="text-2xl md:text-3xl font-light">{project.size}</div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-8">
                  About This Project
                </h2>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                    {project.description}
                  </p>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600">
                    This project represents a unique approach to {project.category.toLowerCase()} architecture, 
                    combining innovative design principles with sustainable practices. Located in {project.location}, 
                    the structure seamlessly integrates with its surroundings while making a bold architectural statement.
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-gray-500">
                    Completed in {project.year}, this {project.size} development showcases our commitment to 
                    creating spaces that are both functional and inspiring. Every detail has been carefully 
                    considered to enhance the user experience while respecting the local context and environment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
