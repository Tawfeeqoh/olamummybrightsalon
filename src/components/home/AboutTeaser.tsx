import React from 'react';
import Link from 'next/link';

export const AboutTeaser = () => {
  return (
    <section className="py-32 bg-black text-white border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-[url('/gallery/client-1.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Stat overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-8 w-52 text-left">
              <p className="text-5xl font-playfair font-bold tracking-tighter leading-none">50<span className="text-3xl">+</span></p>
              <p className="text-xs uppercase tracking-widest mt-2 text-black/60 font-semibold">Apprentices Trained</p>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pl-12 pt-12 lg:pt-0">
            <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-6 font-semibold">The Man Behind the Chair</p>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight tracking-tighter">
              Meet<br/>Mr. Taofeek.
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-6 max-w-md text-sm md:text-base">
              Since 2012, Mr. Taofeek has been redefining the standard of grooming in Ibadan. A craft refined over 
              more than a decade, built on patience, precision, and a genuine love for the art.
            </p>
            <p className="text-white/60 font-light leading-relaxed mb-10 max-w-md text-sm md:text-base">
              Beyond the chair, he has poured that same passion into the next generation — personally training over 
              50 apprentices who are now skilled barbers in their own right.
            </p>

            {/* Stats row */}
            <div className="flex gap-12 mb-12 border-t border-white/10 pt-10">
              <div>
                <p className="text-4xl font-playfair font-bold text-white">12+</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Years in Business</p>
              </div>
              <div className="border-l border-white/10 pl-12">
                <p className="text-4xl font-playfair font-bold text-white">50+</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Apprentices Trained</p>
              </div>
            </div>

            <div>
              <Link 
                href="/apprenticeship"
                className="inline-block border border-white/40 px-10 py-5 uppercase tracking-[0.2em] text-xs font-semibold text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Train with Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
