import type { Metadata } from "next";
import { NewsPageContent } from "@/features/news/ui/NewsPageContent";

export const metadata: Metadata = {
  title: "News | REAPER Architecture",
  description: "Stay updated with the latest news, awards, and events from REAPER Architecture.",
};

export default function NewsPage() {
  return <NewsPageContent />;
}
