import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="relative w-24 h-24 mb-6 bg-white rounded-lg p-2 inline-flex items-center justify-center">
              <Image 
                src="/logo.jpg" 
                alt="Ola Mummy Bright Logo" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-sm font-light">
              Elevating the standard of grooming in Ibadan. Where classic techniques meet modern luxury.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8 font-semibold">Location</h4>
            <div className="text-sm text-white/80 font-light space-y-2">
              <p>9VW9+XWQ, Aba-ela junction</p>
              <p>along idi-shin north, Jericho St</p>
              <p>Ibadan 200210, Oyo, Nigeria</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8 font-semibold">Connect</h4>
            <div className="text-sm text-white/80 font-light space-y-4">
              <p>
                <a href="tel:08075421230" className="hover:text-white transition-colors block border-b border-white/20 pb-1 inline-block">0807 542 1230</a>
              </p>
              <p className="text-white/50 mt-4">
                Mon - Sat: 9:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-[0.1em] border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Ola Mummy Bright. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
