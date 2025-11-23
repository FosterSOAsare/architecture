import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Style Guide | REAPER Architecture",
  description: "Design system and style guide for REAPER Architecture, featuring typography, color palette, and component library.",
};

export default function PalettePage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-20 font-sans">
      <header className="mb-20">
        <h1 className="text-6xl font-medium md:text-9xl tracking-tighter mb-4 font-sans">
          Style Guide
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl">
          A collection of design tokens, typography, and components that define
          the visual language of the architecture firm. Minimalist, structural,
          and timeless.
        </p>
      </header>

      <section className="mb-24">
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-200 pb-4">
          01. Typography
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-2 text-sm text-gray-400">Display / Headlines</div>
            <div className="font-medium text-5xl md:text-7xl leading-[0.9]">
              Architecture is frozen music.
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Font: Manrope
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <div className="mb-2 text-sm text-gray-400">Body Large</div>
              <p className="text-2xl leading-relaxed font-light font-sans">
                We believe in the power of space to influence emotion. Our
                designs are rooted in a deep understanding of context, material,
                and light.
              </p>
              <div className="mt-2 text-xs text-gray-400">Font: Manrope</div>
            </div>
            <div>
              <div className="mb-2 text-sm text-gray-400">Body Regular</div>
              <p className="text-base text-gray-600 leading-relaxed max-w-md font-sans">
                Every project is a dialogue between the site and the client. We
                approach each commission with a fresh perspective, avoiding
                preconceived notions to arrive at unique, tailored solutions.
              </p>
            </div>
            <div>
              <div className="mb-2 text-sm text-gray-400">Monospace / Tech</div>
              <p className="font-mono text-sm text-gray-500">
                34.0522° N, 118.2437° W — PROJECT ID: 2024-001
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-200 pb-4">
          02. Color Palette
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Primary Background */}
          <div className="group">
            <div className="h-40 w-full bg-background border border-gray-200 rounded-sm mb-3 shadow-sm"></div>
            <div className="flex justify-between items-baseline">
              <span className="font-medium">White / Paper</span>
              <span className="font-mono text-xs text-gray-400">#FFFFFF</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Main background color.</p>
          </div>

          {/* Foreground */}
          <div className="group">
            <div className="h-40 w-full bg-foreground rounded-sm mb-3 shadow-sm"></div>
            <div className="flex justify-between items-baseline">
              <span className="font-medium">Charcoal</span>
              <span className="font-mono text-xs text-gray-400">#171717</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Primary text color.</p>
          </div>

          {/* Secondary / Brand */}
          <div className="group">
            <div className="h-40 w-full bg-[#5c3328] rounded-sm mb-3 shadow-sm"></div>
            <div className="flex justify-between items-baseline">
              <span className="font-medium">Clay</span>
              <span className="font-mono text-xs text-gray-400">#5C3328</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Accent for key interactions.
            </p>
          </div>

          {/* Neutral / Concrete */}
          <div className="group">
            <div className="h-40 w-full bg-gray-200 rounded-sm mb-3 shadow-sm"></div>
            <div className="flex justify-between items-baseline">
              <span className="font-medium">Concrete</span>
              <span className="font-mono text-xs text-gray-400">#E5E7EB</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Secondary backgrounds & borders.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-200 pb-4">
          03. Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Buttons */}
          <div>
            <h3 className="text-lg font-medium mb-6">Buttons</h3>
            <div className="flex flex-col items-start gap-4">
              <button className="bg-foreground text-background px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#5c3328] transition-colors duration-300">
                Primary Action
              </button>
              <button className="border border-foreground text-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                Secondary Action
              </button>
              <button className="text-foreground border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-[#5c3328] hover:border-[#5c3328] transition-colors duration-300">
                Text Link
              </button>
            </div>
          </div>

          {/* Cards / Imagery */}
          <div>
            <h3 className="text-lg font-medium mb-6">Project Card</h3>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-200 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-400 font-mono text-xs">
                  [ IMAGE PLACEHOLDER ]
                </div>
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-stack-headline leading-none mb-1 group-hover:text-[#5c3328] transition-colors">
                    Brutalist Villa
                  </h4>
                  <p className="text-sm text-gray-500">Kyoto, Japan</p>
                </div>
                <span className="font-mono text-xs text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-200 pb-4">
          04. Grid & Layout
        </h2>
        <div className="grid grid-cols-12 gap-4 h-32 bg-gray-50 border border-gray-100 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-200/50 h-full flex items-end justify-center pb-2 text-[10px] text-gray-400 font-mono"
            >
              {i + 1}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 max-w-md">
          We use a flexible 12-column grid system. Margins and gutters adjust
          fluidly based on the viewport size to maintain structural integrity.
        </p>
      </section>
    </div>
  );
}
