'use client';

import React, { useState, useTransition } from 'react';
// Make sure this path matches where your server action is actually located
import { sendEnquiry } from './contact'; 

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: null, message: '' });

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await sendEnquiry(formData);
      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-red-50 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">
            Get in Touch
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-tight max-w-2xl">
            Let's build your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              logistics network.
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl font-light">
            Need a bulk order, custom colors, or wholesale pricing? Reach out to our distribution team directly for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="space-y-8">
            
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100">
              <h3 className="text-2xl font-black text-black mb-8">Direct Contact</h3>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-5 group">
                  <div className="p-4 bg-neutral-50 group-hover:bg-red-50 transition-colors duration-300 rounded-xl text-neutral-400 group-hover:text-red-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-lg font-bold text-black">+919446903829</p> {/*[cite: 2] */}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-5 group">
                  <div className="p-4 bg-neutral-50 group-hover:bg-red-50 transition-colors duration-300 rounded-xl text-neutral-400 group-hover:text-red-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 002 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-lg font-bold text-black">sales@ayavegetablebox.com</p>
                  </div>
                </div>

                {/* Locations */}
                <div className="flex items-start space-x-5 group">
                  <div className="p-4 bg-neutral-50 group-hover:bg-red-50 transition-colors duration-300 rounded-xl text-neutral-400 group-hover:text-red-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Service Areas</h4>
                    <p className="text-base font-semibold text-neutral-600 leading-relaxed max-w-xs">
                      Bangalore, Gundelpet, Kerala, Delhi, Andhra Pradesh {/*[cite: 2] */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-black p-8 rounded-2xl border border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Fastest Response</h3>
                <p className="text-sm text-neutral-400 group-hover:text-red-100 transition-colors">Chat directly with our wholesale team.</p>
              </div>
              <a
                href="https://wa.me/919446903829?text=Hello,%20I%20have%20an%20enquiry%20about%20AYA%20Vegetable%20Boxes!" // Integrated actual number
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center justify-center px-6 py-3 border-2 border-white text-sm font-bold uppercase tracking-widest rounded-full text-white hover:bg-white hover:text-black transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Enquiry Form */}
          <div className="bg-neutral-50 p-8 sm:p-10 rounded-2xl border border-neutral-200">
            <h2 className="text-2xl font-black text-black mb-8">Send an Enquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full rounded-xl border-neutral-200 bg-white text-black shadow-sm focus:border-red-600 focus:ring-4 focus:ring-red-600/10 sm:text-base p-4 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-xl border-neutral-200 bg-white text-black shadow-sm focus:border-red-600 focus:ring-4 focus:ring-red-600/10 sm:text-base p-4 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="block w-full rounded-xl border-neutral-200 bg-white text-black shadow-sm focus:border-red-600 focus:ring-4 focus:ring-red-600/10 sm:text-base p-4 transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600/50 disabled:opacity-50 transition-all active:scale-[0.98]"
              >
                {isPending ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>

            {status.type && (
              <div className={`mt-6 p-4 rounded-xl text-sm font-bold border ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-700 border-green-200' 
                  : 'bg-red-50 text-red-700 border-red-200'
              }`}>
                {status.message}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}