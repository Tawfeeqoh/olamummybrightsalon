import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { id: 'haircuts', title: 'Premium Fades', num: '01' },
  { id: 'locs', title: 'Dreadlocks', num: '02' },
  { id: 'tinting', title: 'Color & Tint', num: '03' },
  { id: 'clipper-repair', title: 'Clipper Servicing', num: '04' },
];

export const ServicesStrip = () => {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-20">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">Our Expertise</p>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white tracking-tighter">Masterful Services</h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((svc) => (
            <Link 
              key={svc.id} 
              href={`/services#${svc.id}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:bg-white/5 transition-all duration-500 px-4 -mx-4"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-white/20 font-playfair text-2xl italic">{svc.num}</span>
                <h3 className="text-3xl md:text-5xl font-playfair text-white tracking-tight group-hover:italic transition-all duration-500">{svc.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-white/40 group-hover:text-white transition-colors duration-500">
                <span className="uppercase tracking-widest text-xs font-semibold">Discover</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-4 transition-transform duration-500" strokeWidth={1} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
