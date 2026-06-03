"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // --- Desktop Navigation Links ---
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Company",
      href: "#",
      subLinks: [
        { name: "About Us", href: "/about" },
        { name: "Clients", href: "/clients" },
        { name: "Careers", href: "/careers" },
        { name: "Our Curators", href: "/ourcurators" },
      ],
    },
    { name: "Portfolio", href: "/works" },
    { name: "Services", href: "/services" },
  ];

  // --- Specific Mobile Menu Links ---
  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Our Curators", href: "/ourcurators" },
    { name: "Contact Us", href: "/contact" },
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
      {/* 
        FLOATING GLASSMORPHISM NAVBAR: 
        - top-4 md:top-6 (Gap from the top)
        - left-1/2 -translate-x-1/2 (Perfectly centers the fixed element)
        - w-[92%] max-w-7xl (Not full width)
        - rounded-2xl (Curved corners for the floating look)
      */}

      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 bg-white/20 backdrop-blur-lg border border-white shadow-[0_5px_30px_rgba(0,0,0,0.15)] text-black rounded-2xl">
        <div className="flex items-center justify-between py-4 px-6 md:px-8">
          {/* Logo */}
          <div className="flex items-center justify-between py-1">
            <Image
              src="/images/seabrand_logo.png"
              alt="Seabrand Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Desktop Links (Centered) */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.subLinks && setActiveDropdown(link.name)
                }
                onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-1 py-2"
                >
                  {/* The Rolling Text Container */}
                  <div className="relative overflow-hidden inline-flex">
                    <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-full">
                      {link.name}
                    </span>
                    <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-[#6748FE]">
                      {link.name}
                    </span>
                  </div>

                  {link.subLinks && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-[#6748FE]" : "text-black group-hover:text-[#6748FE]"}`}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown Menu (Glass Effect) */}
                {link.subLinks && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-48 z-50"
                      >
                        {/* Glass Dropdown Container */}
                        <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 overflow-hidden flex flex-col p-2">
                          <ul className="flex flex-col w-full">
                            {link.subLinks.map((subItem) => (
                              <li key={subItem.name} className="w-full">
                                <Link
                                  href={subItem.href}
                                  className="group/sub block w-full px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-white/50 rounded-lg transition-colors"
                                >
                                  {/* Sub-link Rolling Text */}
                                  <div className="relative overflow-hidden inline-flex">
                                    <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover/sub:translate-y-full">
                                      {subItem.name}
                                    </span>
                                    <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover/sub:translate-y-0 text-[#6748FE]">
                                      {subItem.name}
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side (Language & Contact) */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-[#6748FE] transition-colors">
              <Globe className="w-4 h-4" />
              <span>En</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <Link
              href="/contact"
              className="group relative overflow-hidden bg-black px-6 py-2 text-sm font-medium rounded-xl shadow-lg"
            >
              <span className="absolute inset-0 bg-[#6748FE] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />
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
                {mobileNavLinks.map((link, i) => (
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
                          <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-[#6748FE]">
                            {link.name}
                          </span>
                        </div>

                        {/* Absolutely positioned arrow so it doesn't break alignment */}
                        <ArrowUpRight className="absolute -right-10 top-2 w-8 h-8 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#6748FE]" />
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
