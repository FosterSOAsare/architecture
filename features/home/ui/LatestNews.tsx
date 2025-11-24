"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LATEST_NEWS } from "../data";

export function LatestNews() {
  return (
    <section className="py-24 md:py-32 bg-white text-black border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-gray-500">
              <span>(06)</span>
              <div className="w-12 h-[1px] bg-gray-300"></div>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Journal
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-light">
              Latest <span className="italic text-gray-500">News</span>
            </h3>
          </div>
          <div className="hidden md:block pb-2">
            <Link
              href="/news"
              className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              Read All{" "}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>

        {/* News Grid - Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {LATEST_NEWS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer flex flex-col ${
                index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
              }`}
            >
              <Link href={`/news/${item.id}`} className="flex flex-col h-full">
                {/* Image */}
                <div
                  className={`overflow-hidden mb-6 bg-gray-100 border border-gray-200 ${
                    index === 0 ? "aspect-[3/2]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 flex-1">
                  {/* Meta */}
                  <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest border-b border-gray-100 pb-3">
                    <span className="text-secondary font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-500">{item.date}</span>
                  </div>

                  {/* Title */}
                  <h4
                    className={`font-medium leading-tight group-hover:text-secondary transition-colors ${
                      index === 0
                        ? "text-3xl md:text-4xl font-serif"
                        : "text-xl md:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {/* Description (Only for featured item if available, or generic text) */}
                  {index === 0 && (
                    <div className="text-gray-500 text-base leading-relaxed mt-4 space-y-4">
                      <p>
                        We are thrilled to announce that our studio has been
                        recognized for its commitment to sustainable innovation
                        and community-driven design. This award reflects our
                        ongoing dedication to creating spaces that not only
                        serve their function but also enhance the well-being of
                        those who inhabit them.
                      </p>
                      <p>
                        It is a testament to the hard work of our entire team
                        and our visionary clients who dare to dream big. As we
                        look to the future, we remain focused on pushing the
                        boundaries of what is possible in modern architecture,
                        ensuring every project leaves a lasting positive impact
                        on the built environment.
                      </p>
                    </div>
                  )}

                  {/* Read More Link */}
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-secondary transition-colors">
                    Read Article{" "}
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-12 md:hidden">
          <Link
            href="/news"
            className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 w-fit"
          >
            All News <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
