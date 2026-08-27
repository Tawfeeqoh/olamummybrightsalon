import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featured = [
  { src: "/gallery/client-3.jpg", alt: "Golden tint bald fade with lightning bolt", tag: "Tinting" },
  { src: "/gallery/client-6.jpg", alt: "Bold green tint curly fade", tag: "Tinting" },
  { src: "/gallery/client-9.jpg", alt: "Precision cross star line design", tag: "Line-up" },
  { src: "/gallery/client-8.jpg", alt: "Braids updo with undercut design", tag: "Locs" },
];

export const GalleryTeaser = () => {
  return (
    <section className="bg-white text-black border-t border-black/10">
      {/* Header row */}
      <div className="container mx-auto px-4 sm:px-8 py-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <p className="text-black/40 uppercase tracking-[0.3em] text-xs mb-4 font-semibold">Real Work. Real Clients.</p>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold tracking-tighter">From the Chair.</h2>
        </div>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs font-semibold text-black hover:text-black/50 transition-colors duration-500"
        >
          <span className="w-8 h-[1px] bg-black/40 group-hover:w-14 transition-all duration-500"></span>
          View All Work
        </Link>
      </div>

      {/* 4-photo full-bleed strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 pb-1">
        {featured.map((item, idx) => (
          <Link key={idx} href="/gallery" className="group relative aspect-[3/4] overflow-hidden bg-black/5">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white text-[10px] uppercase tracking-[0.25em] font-semibold border border-white/60 px-3 py-1.5">
                {item.tag}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
