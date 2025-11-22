"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ALL_PROJECTS } from "../data";
import { ProjectModal, Project } from "@/components/ui/ProjectModal";

interface ProjectGridProps {
  activeCategory: string;
}

export function ProjectGrid({ activeCategory }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeCategory);

  const handleProjectClick = (project: any) => {
    // Open modal instead of navigating
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-white text-black min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-32 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`group cursor-pointer ${index % 3 === 0 ? "md:col-span-2" : ""}`}
                onClick={() => handleProjectClick(project)}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden mb-6 bg-gray-100 ${
                  index % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                }`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700 z-10" />
                  
                  {/* Hover Overlay Info */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="flex justify-end">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <ArrowUpRight size={24} />
                      </motion.div>
                    </div>
                    <div className="text-white">
                      <p className="text-lg md:text-xl font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </div>

                {/* Project Info */}
                <motion.div 
                  className="flex justify-between items-start border-t border-gray-200 pt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-2xl md:text-4xl font-serif font-light tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base font-light">
                      {project.location}
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <span className="block text-xs font-mono text-gray-400 mb-1 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
