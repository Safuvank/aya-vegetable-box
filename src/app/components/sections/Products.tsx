import React from "react";
import { Button } from "../ui/Button";

// Centralized product data based on the AYA catalog
const featuredProducts = [
  {
    id: 1,
    name: "Red 1st",
    category: "Heavy Duty",
    colorLabel: "Red",
    colorCode: "bg-red-600",
    image: "/images/products/red.png", // Replace with your cropped image path
    description: "Maximum durability for heavy harvests. Built to withstand extreme agricultural conditions.",
  },
  {
    id: 2,
    name: "Blue 1st",
    category: "Standard",
    colorLabel: "Blue",
    colorCode: "bg-blue-600",
    image: "/images/products/blue.png", 
    description: "Versatile and highly visible. Perfect for organized sorting and distribution.",
  },
  {
    id: 3,
    name: "Green 2nd",
    category: "Eco Series",
    colorLabel: "Green",
    colorCode: "bg-green-600",
    image: "/images/products/green.png",
    description: "Reliable secondary grade crates offering excellent value without compromising strength.",
  },
  {
    id: 4,
    name: "PP Black",
    category: "Industrial",
    colorLabel: "Black",
    colorCode: "bg-black",
    image: "/images/products/black.png",
    description: "The ultimate industrial standard. UV resistant and designed for longevity.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">
              Featured Showcase
            </h2>
            <p className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight">
              Engineered for the <br className="hidden sm:block"/> toughest harvests.
            </p>
          </div>
        </div>

        {/* Product Grid - 1 Col on Mobile, 2 Cols on Large Desktop */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-neutral-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.25)] hover:border-red-500/50 cursor-pointer"
            >
              {/* Image Container with Overflow Hidden for Zoom */}
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto bg-white flex-shrink-0 overflow-hidden">
                {/* Fallback pattern in case image is missing */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0" />
                
                <img 
                  src={product.image} 
                  alt={`${product.name} crate`} 
                  className="absolute inset-0 w-full h-full object-contain p-6 z-10 transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Product Details (Horizontal on sm+) */}
              <div className="p-6 sm:p-8 flex flex-col justify-center flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                    {product.category}
                  </span>
                  {/* Color Label */}
                  <div className="flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
                    <span className={`w-2 h-2 rounded-full ${product.colorCode}`} />
                    <span className="text-xs font-semibold text-neutral-700">
                      {product.colorLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-black mb-3">
                  {product.name}
                </h3>
                
                <p className="text-neutral-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                {/* View Details Link */}
                <div className="flex items-center text-black font-bold text-sm group-hover:text-red-600 transition-colors duration-300">
                  View Details
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="flex justify-center mt-12">
          {/* Note: In Next.js, wrap this button in a <Link href="/products"> tag */}
          <Button size="lg" variant="primary" className="px-12 py-6 text-lg rounded-full">
            Explore Full Catalog
          </Button>
        </div>

      </div>
    </section>
  );
}