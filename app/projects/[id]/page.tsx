import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_PROJECTS } from "@/features/projects/data";
import { SingleProjectPageContent } from "@/features/projects/ui/SingleProjectPageContent";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = ALL_PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | REAPER Architecture`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = ALL_PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return <SingleProjectPageContent project={project} />;
}
