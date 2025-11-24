"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterSchema } from "../schemas/newsletter";
import { toast } from "react-toastify";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-black text-white pt-32 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Large CTA */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-8">
              Ready to Begin?
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] mb-12">
              Let's create something{" "}
              <span className="italic text-gray-500">remarkable</span> together
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-all duration-300 group"
            >
              Start a Conversation
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-16"></div>

        {/* Middle Section: Navigation + Newsletter */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className={`transition-colors ${
                    pathname === "/"
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`transition-colors ${
                    pathname.startsWith("/projects")
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className={`transition-colors ${
                    pathname.startsWith("/studio")
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`transition-colors ${
                    pathname.startsWith("/news")
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-colors ${
                    pathname.startsWith("/contact")
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
              Connect
            </h3>
            <div className="space-y-3 text-gray-500">
              <div>London, United Kingdom</div>
              <div>Tokyo, Japan</div>
              <div className="pt-4">
                <a
                  href="mailto:hello@architecture.studio"
                  className="hover:text-white transition-colors"
                >
                  hello@architecture.studio
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
              Newsletter
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Subscribe to receive updates on our latest projects and news.
            </p>
            <NewsletterForm />
          </div>
        </motion.div>

        {/* Large Typographic Text */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="text-[12vw] md:text-[12vw] leading-none font-bold tracking-tighter text-white/5 select-none"
            role="presentation"
            aria-hidden="true"
          >
            ARCHITECTURE.
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Bar: Copyright + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright & Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-mono text-gray-400">
            <div suppressHydrationWarning>
              © {new Date().getFullYear()} REAPER Architecture
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>LON 51.5074° N, 0.1278° W</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterSchema) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter subscription:", data);
    toast.success("Subscribed to newsletter!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Your email"
          className={`w-full bg-white/5 border px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none transition-colors ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-white/30"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-black px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting
          ? "Subscribing..."
          : isSubmitSuccessful
          ? "Subscribed!"
          : "Subscribe"}
      </button>
    </form>
  );
}
