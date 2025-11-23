import type { Metadata } from "next";
import { ProjectsPageContent } from "@/features/projects/ui/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects | REAPER Architecture",
  description: "Explore our portfolio of residential, cultural, and commercial projects from around the world.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
