import type { Metadata } from "next";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Hero } from "@/features/home/ui/Hero";
import { FeaturedProjects } from "@/features/home/ui/FeaturedProjects";
import { StudioPreview } from "@/features/home/ui/StudioPreview";
import { Testimonials } from "@/features/home/ui/Testimonials";
import { Awards } from "@/features/home/ui/Awards";
import { Process } from "@/features/home/ui/Process";
import { LatestNews } from "@/features/home/ui/LatestNews";
import { Press } from "@/features/home/ui/Press";
import { Footer } from "@/features/home/ui/Footer";

export const metadata: Metadata = {
  title: "REAPER Architecture | Modern Sustainable Design",
  description:
    "Award-winning architecture studio based in London and Tokyo. We create timeless, sustainable spaces that elevate the human experience.",
};

export default function Home() {
  return (
    <>
      <Navbar transparentOnTop={true} />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <FeaturedProjects />
        <StudioPreview />
        <Testimonials />
        <Awards />
        <Process />
        <LatestNews />
        <Press />
      </main>
      <Footer />
    </>
  );
}
