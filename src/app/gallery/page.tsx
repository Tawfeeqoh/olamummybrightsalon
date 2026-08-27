"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const galleryItems = [
  { id: 1,  category: "Line-up",  src: "/gallery/client-1.jpg",  alt: "Precise curved line design on low cut" },
  { id: 2,  category: "Fade",     src: "/gallery/client-2.png",  alt: "Clean curly top fade" },
  { id: 3,  category: "Tinting",  src: "/gallery/client-3.jpg",  alt: "Golden tint bald fade with lightning bolt design" },
  { id: 4,  category: "Tinting",  src: "/gallery/client-4.png",  alt: "Bold blue tint curly fade with lightning bolt line-up" },
  { id: 5,  category: "Tinting",  src: "/gallery/client-5.jpg",  alt: "Blonde curly mohawk fade with curved line design" },
  { id: 6,  category: "Tinting",  src: "/gallery/client-6.jpg",  alt: "Green tint curly top fade with hard part" },
  { id: 7,  category: "Fade",     src: "/gallery/client-7.png",  alt: "Bantu knots style with fade and carved line design" },
  { id: 8,  category: "Locs",     src: "/gallery/client-8.jpg",  alt: "Braids updo with intricate shaved undercut design and lightning bolt" },
  { id: 9,  category: "Line-up",  src: "/gallery/client-9.jpg",  alt: "Short curly cut with elaborate cross star line design" },
  { id: 10, category: "Locs",     src: "/gallery/client-10.jpg", alt: "Starter locs with clean high fade and hard part" },
];

const categories = ["All", "Fade", "Tinting", "Line-up", "Locs"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="pt-48 pb-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-6 font-semibold">Real Work. Real Clients.</p>
          <h1 className="text-6xl md:text-8xl font-playfair font-bold tracking-tighter leading-[0.9] text-white">
            Our Work.
          </h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-black border-b border-white/10 py-5">
        <div className="container mx-auto px-4 sm:px-8 flex gap-8 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase tracking-widest text-xs font-semibold whitespace-nowrap pb-1 transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {filtered.map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] overflow-hidden bg-white/5">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="inline-block border border-white/60 px-3 py-1.5 text-white uppercase tracking-widest text-[10px] font-semibold">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
