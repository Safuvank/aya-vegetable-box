import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { productsData } from "../../data/products";

// Define the expected params for Next.js
interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = productsData.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }

  // 3. Render the UI if the product is found
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm font-bold text-neutral-400 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-red-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        {/* Main Product Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: Product Image Stage (Sticky on desktop) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
            <div className="relative aspect-square w-full bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center justify-center p-8 overflow-hidden group">
              {/* Subtle grid background */}
              <div className="absolute inset-0 bg-[size:24px_24px]" />
              
              {/* Product Image */}
              <img 
                src={product.image} 
                alt={product.name}
                className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {/* Title & Category */}
            <div className="mb-8 border-b border-neutral-200 pb-8">
              <span className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-2 block">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className={`w-4 h-4 rounded-full shadow-inner ${product.colorHex}`} />
                <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">
                  {product.colorLabel} Variant
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p className="text-lg text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-600 font-medium">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications Table */}
            <div className="mb-12">
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-4">Technical Specs</h3>
              <div className="border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-neutral-200">
                    <tr className="hover:bg-white transition-colors">
                      <th className="px-6 py-4 font-bold text-neutral-900 w-1/3">Material</th>
                      <td className="px-6 py-4 text-neutral-600 font-medium">{product.specs.material}</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <th className="px-6 py-4 font-bold text-neutral-900">Load Capacity</th>
                      <td className="px-6 py-4 text-neutral-600 font-medium">{product.specs.loadCapacity}</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <th className="px-6 py-4 font-bold text-neutral-900">Dimensions</th>
                      <td className="px-6 py-4 text-neutral-600 font-medium">{product.specs.dimensions}</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <th className="px-6 py-4 font-bold text-neutral-900">Weight</th>
                      <td className="px-6 py-4 text-neutral-600 font-medium">{product.specs.weight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Call to Action Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/contact?product=${product.slug}`}
                className="flex-1 flex justify-center py-4 px-8 bg-red-600 text-white text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
              >
                Request Bulk Quote
              </Link>
              <a 
                href="https://wa.me/919446903829"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center py-4 px-8 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}