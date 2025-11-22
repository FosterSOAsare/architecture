"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MapPin, Calendar, Layers } from "lucide-react";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
  tagline?: string;
  description?: string;
  size?: string;
  status?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.98 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div className="bg-white w-full max-w-6xl h-[90vh] md:h-[85vh] overflow-hidden rounded-sm shadow-2xl pointer-events-auto flex flex-col md:flex-row relative">
              
              {/* Close Button (Mobile) */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden z-20 bg-white/90 p-2 rounded-full text-black shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-1/3 md:h-full relative bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 h-2/3 md:h-full overflow-y-auto bg-white p-8 md:p-16 flex flex-col">
                {/* Close Button (Desktop) */}
                <button
                  onClick={onClose}
                  className="absolute top-8 right-8 hidden md:block text-gray-400 hover:text-black transition-colors"
                >
                  <X size={32} strokeWidth={1} />
                </button>

                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 border border-gray-200 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 border border-gray-200 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {project.status || "Completed"}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[0.9] mb-6">
                    {project.title}
                  </h2>
                  
                  {project.tagline && (
                    <p className="text-xl md:text-2xl font-light text-gray-800 leading-tight border-l-2 border-secondary pl-6 py-2 font-serif italic">
                      {project.tagline}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12 border-y border-gray-100 py-8">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                      <MapPin size={14} /> Location
                    </div>
                    <div className="text-sm md:text-base">{project.location}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                      <Calendar size={14} /> Year
                    </div>
                    <div className="text-sm md:text-base">{project.year}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                      <Layers size={14} /> Size
                    </div>
                    <div className="text-sm md:text-base">{project.size || "N/A"}</div>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600 leading-relaxed mb-12 font-light">
                  <p>{project.description || "No description available."}</p>
                </div>

                <div className="mt-auto pt-8">
                  <button className="w-full md:w-auto bg-black text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-4 group">
                    View Full Project
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
