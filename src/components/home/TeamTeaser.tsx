import React from 'react';
import Link from 'next/link';

export const TeamTeaser = () => {
  return (
    <section className="py-32 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Owner Portrait */}
          <div className="relative">
            {/* Main portrait */}
            <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop')] bg-cover bg-top"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              {/* Est. badge */}
              <div className="absolute top-6 left-6 border border-white/30 bg-black/60 backdrop-blur-sm px-5 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold">Est. 2012</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-8 font-semibold">The Craftsman</p>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6 tracking-tighter leading-tight">
              Mr. Taofeek.
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-10 font-semibold">Owner & Master Barber</p>
            <p className="text-white/60 font-light leading-relaxed max-w-md mb-8 text-sm md:text-base">
              Since 2012, Mr. Taofeek has been defining what premium grooming looks like in Ibadan. 
              His precision is unmatched. His reputation is built one client at a time.
            </p>
            <p className="text-white/60 font-light leading-relaxed max-w-md mb-14 text-sm md:text-base">
              Whether you&apos;re in the chair or learning the craft under his wing through the apprenticeship 
              programme — you are in the hands of a master.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/apprenticeship"
                className="inline-block border border-white/40 px-10 py-5 uppercase tracking-[0.2em] text-xs font-semibold text-white hover:bg-white hover:text-black transition-all duration-500 text-center"
              >
                Train Under Him
              </Link>
              <Link 
                href="/contact"
                className="inline-block px-10 py-5 uppercase tracking-[0.2em] text-xs font-semibold text-white/50 hover:text-white transition-all duration-500 text-center border border-white/10 hover:border-white/40"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
