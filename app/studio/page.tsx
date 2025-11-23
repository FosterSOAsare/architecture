import type { Metadata } from "next";
import { StudioPageContent } from "@/features/studio/ui/StudioPageContent";

export const metadata: Metadata = {
  title: "Studio | REAPER Architecture",
  description: "Learn about our philosophy, our team, and our commitment to sustainable and timeless design.",
};

export default function StudioPage() {
  return <StudioPageContent />;
}
