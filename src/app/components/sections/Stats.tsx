"use client";

import React, { useEffect, useState, useRef } from "react";

// 1. Reusable Animated Counter (Kept from previous, as the math is solid)
const AnimatedCounter = ({ end, duration = 2000, suffix = "+" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutExpo = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOutExpo));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// 2. The Data
const statsData = [
  { id: 1, label: "Orders Delivered", value: 5000, description: "Successfully shipped across India." },
  { id: 2, label: "Locations", value: 5, description: "Major distribution hubs active." },
  { id: 3, label: "Product Variants", value: 10, description: "Colors and materials available." },
  { id: 4, label: "Wholesale Clients", value: 100, description: "Trusted by farms & markets." },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-white border-y border-neutral-200 overflow-hidden">
      
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-red-600 tracking-widest uppercase mb-3">
              By The Numbers
            </h2>
            <p className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight">
              Proven reliability at <br className="hidden sm:block"/> an industrial scale.
            </p>
          </div>
          <div className="md:text-right text-neutral-500 max-w-sm">
            <p>Our infrastructure is built to handle massive agricultural demands with zero compromise on quality.</p>
          </div>
        </div>

        {/* Modern Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="group relative bg-white border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-900 transition-colors duration-300"
            >
              {/* Red Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <h3 className="text-5xl md:text-6xl font-black text-red-600 tracking-tighter mb-4">
                  <AnimatedCounter end={stat.value} />
                </h3>
                <p className="text-lg font-bold text-neutral-900 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-neutral-500">
                  {stat.description}
                </p>
              </div>

              {/* Bottom Right Arrow icon (pure CSS/SVG for modern feel) */}
              <div className="mt-8 flex justify-end">
                <svg 
                  className="w-6 h-6 text-neutral-300 group-hover:text-red-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 19L20 5M20 5v10M20 5H10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}