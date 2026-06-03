import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Work", href: "#" },
        { name: "Industries", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Business Branding", href: "#" },
        { name: "Personal Branding", href: "#" },
        { name: "Startup Branding", href: "#" },
        { name: "Entertainment Branding", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Instagram", href: "#" },
        { name: "X", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Insights Blog", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#050505] text-white relative overflow-hidden pt-24 md:pt-32 min-h-[600px] flex flex-col justify-between">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6748FE] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        {/* Middle Section: Contact & Link Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-zinc-400 text-[15px] leading-relaxed">
            <div>
              <p className="text-white font-semibold mb-2 tracking-wide uppercase text-xs">
                Headquarters
              </p>
              <p>
                Kottakkal, Kerala,
                <br />
                India
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white font-semibold mb-1 tracking-wide uppercase text-xs">
                Contact
              </p>
              <a
                href="mailto:info@seabrand.com"
                className="hover:text-white transition-colors w-fit"
              >
                info@seabrand.com
              </a>
              <a
                href="tel:+918081301190"
                className="hover:text-white transition-colors w-fit"
              >
                (+91) 808 130 1190
              </a>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col gap-6">
                <h4 className="text-white font-semibold text-xs tracking-widest uppercase">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-white transition-colors text-[15px] group relative flex items-center w-fit"
                      >
                        <span className="absolute left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-3" />
                        <span className="transition-transform duration-300 group-hover:translate-x-5">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Divider & Legal */}
        <div className="relative w-full pt-8 pb-16 md:pb-24 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
          <p className="text-zinc-500 text-sm">
            ©2026 - {new Date().getFullYear()} SeaBrand. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-widest uppercase text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* FIXED Edge-to-Edge Watermark with Font Family Injection
          If your project uses next/font/google to load Inter, applying `font-sans` 
          here will force the SVG text to inherit it. We also explicitly set fontFamily 
          in the style object as a fallback.
      */}
    </footer>
  );
}
