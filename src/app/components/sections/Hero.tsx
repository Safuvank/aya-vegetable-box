import React from "react";
// import { Button } from "../ui/Button"; // (Commented out as in your snippet)
import { siteConfig } from "../../constants/site.";

export default function Hero() {
  return (
    <section className="relative w-full h-dvh flex items-center justify-center overflow-hidden bg-black">
      
      {/* 🟢 FULL-SCREEN VIDEO BACKGROUND 🟢 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Red Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

      {/* Content Container - Added pt-28 (padding top) for mobile, resets on md screens */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-28 md:pt-0">
        
        {/* Brand Badge */}
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-red-600/30 bg-red-950/30 text-red-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
          {siteConfig.brandName} VEGETABLE BOX
        </div>

        {/* Main Headline - Ultra Bold, Larger, Stacking on Mobile */}
        <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-none">
          {/* Stacks on mobile (block), stays inline on tablet+ (sm:inline) */}
          <span className="block sm:inline">Durable</span>{" "}
          <span className="block sm:inline">Crates</span>{" "}
          <br className="hidden sm:block" />
          <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
           for Every
          </span>{" "}
          <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            Harvest.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl text-lg md:text-xl text-neutral-300 mb-10 font-light">
          Providing high-grade, heavy-duty vegetable boxes across{" "}
          {siteConfig.locations.slice(0, 3).join(", ")} and beyond. Built tough
          in vibrant colors.
        </p>

      </div>
    </section>
  );
}