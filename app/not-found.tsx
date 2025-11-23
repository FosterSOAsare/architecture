import Link from "next/link";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Footer } from "@/features/home/ui/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-40">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Error 404
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-serif font-light mb-8">
            Page Not <span className="italic text-gray-400">Found</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Return Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
