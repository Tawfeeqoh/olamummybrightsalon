import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const StyleTeaser = () => {
  return (
    <section className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-8">Virtual Studio</p>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tighter leading-[1.1] mb-8">
              Visualize<br/>
              <span className="italic font-light">Perfection.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-md">
              Step into our interactive 3D studio. Preview premium fades, locs, and custom tints in real-time before you ever take a seat in the chair.
            </p>
            <Link 
              href="/style-try-on"
              className="group inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs font-semibold py-4 text-white hover:text-white/70 transition-colors duration-500"
            >
              Enter Studio
              <ArrowRight size={20} className="transform group-hover:translate-x-4 transition-transform duration-500" strokeWidth={1} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
