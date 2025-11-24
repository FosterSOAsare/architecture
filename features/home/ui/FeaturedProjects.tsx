"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";
import { FEATURED_PROJECTS } from "../data";
import { ProjectModal } from "@/components/ui/ProjectModal";

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  index: number;
  onClick: (p: any) => void;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      ref={ref}
      className={`group cursor-pointer ${project.colSpan}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden mb-6 aspect-[4/3] md:aspect-[16/10]">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
        <motion.div
          style={{ y }}
          className="w-full h-[120%] -mt-[10%] relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
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
          <span className="block text-xs font-mono text-gray-500 mb-1">
            {project.category}
          </span>
          <span className="block text-xs font-mono text-gray-500">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof FEATURED_PROJECTS)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof FEATURED_PROJECTS)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header with Technical Detail */}
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-black font-bold">
              <span>(01)</span>
              <div className="w-16 h-[1px] bg-black"></div>
              <span className="text-gray-500 font-normal">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
              Featured <span className="italic text-gray-500">Projects</span>
            </h2>
          </motion.div>

          <div className="hidden md:block mb-2">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              View All{" "}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={handleProjectClick}
            />
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
