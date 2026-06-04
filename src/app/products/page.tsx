"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productsData } from "../data/products";

// Mock Data: Updated with actual prices


export default function ProductList() {
  // Framer Motion variants matching your Navbar's easing curve
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase">
              Our Products<span className="text-red-600">.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-xl font-medium">
              Explore our comprehensive range of high-quality materials and
              components designed for scale and durability.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group flex flex-col bg-gray-100 rounded-3xl overflow-hidden border border-gray-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-500"
            >
              {/* Product Image Area */}
              <div className="relative w-full aspect-square overflow-hidden bg-white p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-[0.76,0,0.24,1]"
                />
                <div className="absolute top-4 left-4 bg-gray-100 border backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                  {product.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-black mb-1 group-hover:text-red-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  {/* Price updated to stand out with font-black */}
                  <p className="text-xl font-black text-black mb-6">
                    ₹{product.price}
                  </p>
                </div>

                {/* Call to Action matching Navbar styling */}
                <Link
                  href={`/products/${product.slug}`}
                  className="group/btn relative overflow-hidden bg-black px-6 py-4 text-sm font-medium rounded-xl shadow-lg flex items-center justify-between w-full"
                >
                  {/* Hover background to red-600 */}
                  <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />

                  <span className="relative z-10 text-white transition-colors duration-500 font-bold uppercase tracking-wide">
                    View Details
                  </span>

                  <ArrowUpRight className="relative z-10 w-5 h-5 text-white transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
