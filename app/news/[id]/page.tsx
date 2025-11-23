import { Metadata } from "next";
import { SingleNewsPageContent } from "@/features/news/ui/SingleNewsPageContent";
import { NEWS_ITEMS } from "@/features/news/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const newsItem = NEWS_ITEMS.find((item) => item.id === Number(id));

  if (!newsItem) {
    return {
      title: "News Not Found",
    };
  }

  return {
    title: `${newsItem.title} | REAPER Architecture`,
    description: newsItem.description,
  };
}

export async function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function SingleNewsPage({ params }: PageProps) {
  const { id } = await params;
  const newsItem = NEWS_ITEMS.find((item) => item.id === Number(id));

  if (!newsItem) {
    notFound();
  }

  return <SingleNewsPageContent newsItem={newsItem} />;
}
