"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FEATURED_PROJECTS } from "../data";
import { ProjectModal } from "./ProjectModal";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof FEATURED_PROJECTS[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof FEATURED_PROJECTS[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <div>
            <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">
              Selected Works
            </h2>
            <div className="text-5xl italic md:text-7xl font-serif font-light tracking-tight max-w-xl leading-[0.9]">
              Creating spaces that resonate with the human spirit.
            </div>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-secondary hover:border-secondary transition-colors mt-8 md:mt-0"
          >
            All Projects <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group cursor-pointer ${project.colSpan}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3] md:aspect-[16/10]">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-start border-t border-gray-200 pt-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-1 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    {project.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-mono text-gray-400 mb-1">
                    {project.category}
                  </span>
                  <span className="block text-xs font-mono text-gray-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-16 md:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 w-fit"
          >
            All Projects <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
