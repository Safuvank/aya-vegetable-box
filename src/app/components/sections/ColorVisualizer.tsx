"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

// The complete color palette based on the AYA Catalog
const variants = [
  {
    id: "red",
    name: "Red Crate",
    category: "Heavy Duty 1st Grade",
    colorClass: "bg-red-600",
    ringClass: "ring-red-600",
    image: "/images/products/red.png", // Ensure you have transparent PNGs
    description: "Our flagship heavy-duty red crate. Highly visible, engineered for maximum load capacity and rough handling in agricultural environments.",
  },
  {
    id: "blue",
    name: "Blue Crate",
    category: "Standard Sorting",
    colorClass: "bg-blue-600",
    ringClass: "ring-blue-600",
    image: "/images/products/blue.png",
    description: "Versatile and highly recognizable. Perfect for organizing different harvest yields, distribution centers, and retail display.",
  },
  {
    id: "green",
    name: "Green Crate",
    category: "Eco Series",
    colorClass: "bg-green-600",
    ringClass: "ring-green-600",
    image: "/images/products/green.png",
    description: "Blending seamlessly with agricultural products. Reliable secondary grade crates offering excellent value without compromising structural integrity.",
  },
  {
    id: "black",
    name: "Orange Crate",
    category: "High Visibility",
    colorClass: "bg-orange-500",
    ringClass: "ring-orange-500",
    image: "/images/products/black.png",
    description: "Bright and impossible to miss. Ideal for custom sorting workflows and ensuring crates are easily tracked across massive warehouse floors.",
  },
  
];

export default function ColorVisualizer() {
  const [activeColor, setActiveColor] = useState(variants[0]);

  return (
    <section className="py-24 bg-white border-t border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">
            Interactive Viewer
          </h2>
          <p className="text-4xl md:text-5xl font-black text-black tracking-tight">
            Explore the Palette.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT: Image Stage (Animated) */}
          <div className="w-full lg:w-1/2 relative">
            {/* The Stage Background */}
            <div className="aspect-square w-full bg-white rounded-3xl relative flex items-center justify-center p-8 overflow-hidden shadow-inner border border-neutral-200">
              
              {/* Subtle background grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Framer Motion AnimatePresence for smooth mounting/unmounting */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeColor.id}
                  src={activeColor.image}
                  alt={activeColor.name}
                  // Animation properties
                  initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                />
              </AnimatePresence>

              {/* Dynamic subtle glow behind the image based on selected color */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeColor.id}-glow`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 blur-3xl ${activeColor.colorClass} rounded-full transform scale-50 z-0`}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Controls & Details */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeColor.id + "-text"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                  {activeColor.category}
                </h3>
                <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
                  {activeColor.name}
                </h2>
                {/* <p className="text-lg text-neutral-500 leading-relaxed max-w-lg mb-10">
                  {activeColor.description}
                </p> */}
              </motion.div>
            </AnimatePresence>

            {/* Color Selectors */}
            <div className="mb-12 w-full">
              <p className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                Select Color Variant
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {variants.map((variant) => {
                  const isActive = activeColor.id === variant.id;
                  
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setActiveColor(variant)}
                      className={`relative w-12 h-12 rounded-full focus:outline-none transition-all duration-300 transform hover:scale-110 ${variant.colorClass} ${
                        isActive ? `ring-4 ring-offset-4 ${variant.ringClass}` : "ring-0 shadow-md"
                      }`}
                      aria-label={`Select ${variant.name}`}
                    >
                      {/* Inner dot for extra polish when active */}
                      {isActive && (
                        <span className="absolute inset-0 m-auto w-4 h-4 bg-white/30 rounded-full animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <Button size="lg" variant="primary" className="w-full sm:w-auto px-10">
              Request {activeColor.name} Quote
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}