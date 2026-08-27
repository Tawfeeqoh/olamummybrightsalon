import React from 'react';
import Link from 'next/link';

const services = [
  { id: 'haircut', num: '01', title: 'Haircut', desc: 'Precision cuts tailored to your head shape and personal style.', price: 'From ₦5,000' },
  { id: 'locs', num: '02', title: 'Locs', desc: 'Expert retwist, starting, and styling for all hair textures.', price: 'From ₦10,000' },
  { id: 'tinting', num: '03', title: 'Tinting', desc: 'Professional coloring for beard and hair for any occasion.', price: 'From ₦8,000' },
  { id: 'clipper', num: '04', title: 'Servicing', desc: 'Deep cleaning, motor checks, and precise blade sharpening.', price: 'From ₦4,000' },
];

export const ServicesGrid = () => {
  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-24 text-center md:text-left">
          <p className="text-black/50 uppercase tracking-[0.2em] text-xs mb-4 font-semibold">Our Services</p>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold tracking-tighter">What We Offer</h2>
        </div>
        
        {/* Minimalist Grid inspired by Salon Studio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10 max-w-7xl mx-auto">
          {services.map((svc) => (
            <Link 
              key={svc.id} 
              href={`/services#${svc.id}`}
              className="group border-r border-b border-black/10 p-10 lg:p-12 flex flex-col h-full hover:bg-black hover:text-white transition-colors duration-500"
            >
              <span className="text-black/20 group-hover:text-white/20 font-playfair text-5xl mb-12 block transition-colors duration-500">{svc.num}</span>
              <h3 className="text-2xl font-playfair font-bold mb-4">{svc.title}</h3>
              <p className="text-sm text-black/60 group-hover:text-white/60 font-light mb-16 flex-grow leading-relaxed transition-colors duration-500">{svc.desc}</p>
              <p className="text-xs font-bold uppercase tracking-widest border-t border-black/10 group-hover:border-white/20 pt-6 transition-colors duration-500">{svc.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
