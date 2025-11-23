"use client";

import { useState } from "react";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Footer } from "@/features/home/ui/Footer";
import { ProjectHeader } from "@/features/projects/ui/ProjectHeader";
import { ProjectGrid } from "@/features/projects/ui/ProjectGrid";

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeader 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <ProjectGrid activeCategory={activeCategory} />
      <Footer />
    </main>
  );
}
