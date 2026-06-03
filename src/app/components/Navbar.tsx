"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
// Removed: import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // --- Cleaned Up Navigation Links ---
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at right top)",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at right top)",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i + 0.2,
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1] as const,
      },
    }),
  };

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 bg-white/30 backdrop-blur-lg border border-white shadow-[0_5px_30px_rgba(0,0,0,0.15)] text-black rounded-2xl">
        <div className="flex items-center justify-between py-4 px-6 md:px-8">
          
          {/* --- TEXT LOGO ADDED HERE --- */}
          <div className="flex items-center justify-between py-1">
            <Link 
              href="/" 
              className="text-2xl md:text-3xl font-black tracking-tighter text-black uppercase"
            >
              AYA<span className="text-red-600">.</span>
            </Link>
          </div>

          {/* Desktop Links (Centered) */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="group flex items-center gap-1 py-2"
                >
                  {/* The Rolling Text Container */}
                  <div className="relative overflow-hidden inline-flex">
                    <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-full">
                      {link.name}
                    </span>
                    {/* Changed hover color to red-600 for the AYA brand theme */}
                    <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-red-600">
                      {link.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Side Call to Action */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-black px-6 py-2 text-sm font-medium rounded-xl shadow-lg"
            >
              {/* Changed hover background to red-600 */}
              <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />
              <span className="relative z-10 text-white transition-colors duration-500">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden group relative flex items-center justify-center w-10 h-10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                >
                  <X className="w-8 h-8 text-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu (Glass Effect) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-white/70 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden overflow-y-auto"
          >
            <nav className="w-full px-8 py-20">
              <ul className="flex flex-col gap-3 items-center w-full">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="overflow-visible">
                    <motion.li
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group relative inline-block text-4xl font-bold text-black tracking-tight py-2"
                      >
                        {/* Mobile Rolling Text */}
                        <div className="relative overflow-hidden inline-flex">
                          <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-full">
                            {link.name}
                          </span>
                          <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-red-600">
                            {link.name}
                          </span>
                        </div>

                        {/* Absolutely positioned arrow */}
                        <ArrowUpRight className="absolute -right-10 top-2 w-8 h-8 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-red-600" />
                      </Link>
                    </motion.li>
                  </div>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}