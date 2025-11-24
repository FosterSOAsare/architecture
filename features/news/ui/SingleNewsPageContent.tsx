"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Footer } from "@/features/home/ui/Footer";

interface SingleNewsPageContentProps {
  newsItem: {
    id: number;
    title: string;
    date: string;
    category: string;
    image: string;
    description: string;
    content?: string;
  };
}

export function SingleNewsPageContent({ newsItem }: SingleNewsPageContentProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to News
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
              <span className="text-black font-medium">{newsItem.category}</span>
              <span className="w-px h-3 bg-gray-300" />
              <span className="flex items-center gap-2">
                <Calendar size={12} />
                {newsItem.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-8">
              {newsItem.title}
            </h1>
          </motion.header>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[21/9] overflow-hidden bg-gray-100 mb-16 md:mb-24"
          >
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Meta */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">Share</h3>
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Link copied to clipboard");
                    }}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                    aria-label="Copy link"
                  >
                    <Share2 size={16} />
                  </button>
                  {/* Add more social icons if needed */}
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Architecture', 'Design', 'Innovation'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-xs uppercase tracking-wider text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-8 lg:col-start-5"
            >
              <div className="prose prose-lg prose-gray max-w-none font-light">
                <p className="lead text-xl md:text-2xl font-serif text-black mb-8">
                  {newsItem.description}
                </p>
                
                {/* Render HTML content safely */}
                <div dangerouslySetInnerHTML={{ __html: newsItem.content || "" }} />
              </div>
            </motion.div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
