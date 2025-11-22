"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { HERO_SLIDES } from "../data";

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Carousel */}
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          {HERO_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full w-full flex-[0_0_100%]"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/35" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-4xl"
                >
                  <div className="flex items-center gap-4 mb-4 overflow-hidden">
                    <span className="text-sm md:text-base tracking-[0.2em] uppercase text-gray-300">
                      {slide.location}
                    </span>
                    <div className="h-[1px] w-12 bg-gray-300/50" />
                    <span className="text-sm md:text-base font-mono text-gray-300">
                      {slide.year}
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight text-white mb-8 leading-[0.9]">
                    {slide.title}
                  </h1>
                  <button className="group flex items-center gap-3 text-sm md:text-base tracking-widest uppercase border-b border-white/30 pb-2 hover:border-white transition-colors">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-6 md:right-20 flex items-center gap-8 z-10">
        {/* Pagination Indicators */}
        <div className="flex gap-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-[2px] transition-all duration-300 ${
                index === selectedIndex ? "w-12 bg-white" : "w-6 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
