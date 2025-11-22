import { Header } from "@/features/home/ui/Header";
import { Hero } from "@/features/home/ui/Hero";
import { FeaturedProjects } from "@/features/home/ui/FeaturedProjects";
import { StudioPreview } from "@/features/home/ui/StudioPreview";
import { Testimonials } from "@/features/home/ui/Testimonials";
import { Awards } from "@/features/home/ui/Awards";
import { Process } from "@/features/home/ui/Process";
import { LatestNews } from "@/features/home/ui/LatestNews";
import { Press } from "@/features/home/ui/Press";
import { Footer } from "@/features/home/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <FeaturedProjects />
      <StudioPreview />
      <Testimonials />
      <Awards />
      <Process />
      <LatestNews />
      <Press />
      <Footer />
    </main>
  );
}
