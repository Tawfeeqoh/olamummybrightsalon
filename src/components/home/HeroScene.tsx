"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

// Real client photos — duplicated for seamless infinite scroll loop
const col1 = [
  { src: "/gallery/client-3.jpg",  alt: "Golden tint bald fade" },
  { src: "/gallery/client-6.jpg",  alt: "Green tint curly fade" },
  { src: "/gallery/client-1.jpg",  alt: "Wave line design low cut" },
  { src: "/gallery/client-9.jpg",  alt: "Cross star line design" },
  // Duplicate for seamless loop
  { src: "/gallery/client-3.jpg",  alt: "Golden tint bald fade" },
  { src: "/gallery/client-6.jpg",  alt: "Green tint curly fade" },
  { src: "/gallery/client-1.jpg",  alt: "Wave line design low cut" },
  { src: "/gallery/client-9.jpg",  alt: "Cross star line design" },
];

const col2 = [
  { src: "/gallery/client-4.png",  alt: "Blue tint curly fade" },
  { src: "/gallery/client-8.jpg",  alt: "Braids updo undercut" },
  { src: "/gallery/client-5.jpg",  alt: "Blonde mohawk fade" },
  { src: "/gallery/client-10.jpg", alt: "Starter locs fade" },
  // Duplicate
  { src: "/gallery/client-4.png",  alt: "Blue tint curly fade" },
  { src: "/gallery/client-8.jpg",  alt: "Braids updo undercut" },
  { src: "/gallery/client-5.jpg",  alt: "Blonde mohawk fade" },
  { src: "/gallery/client-10.jpg", alt: "Starter locs fade" },
];

const col3 = [
  { src: "/gallery/client-2.png",  alt: "Curly top fade" },
  { src: "/gallery/client-7.png",  alt: "Bantu knots fade" },
  { src: "/gallery/client-2.png",  alt: "Curly top fade" },
  { src: "/gallery/client-7.png",  alt: "Bantu knots fade" },
];

export const HeroScene = () => {
  const badgeRef  = useRef<HTMLDivElement>(null);
  const line1Ref  = useRef<HTMLDivElement>(null);
  const line2Ref  = useRef<HTMLDivElement>(null);
  const line3Ref  = useRef<HTMLDivElement>(null);
  const ruleRef   = useRef<HTMLDivElement>(null);
  const ctasRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl
      .fromTo(badgeRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
      .fromTo(line1Ref.current,
        { opacity: 0, y: 80, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, ease: 'power4.out' }, '-=0.3')
      .fromTo(line2Ref.current,
        { opacity: 0, y: 80, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, ease: 'power4.out' }, '-=0.8')
      .fromTo(line3Ref.current,
        { opacity: 0, y: 80, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, ease: 'power4.out' }, '-=0.8')
      .fromTo(ruleRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, '-=0.4')
      .fromTo(ctasRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4');
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden flex items-stretch">

      {/* ── LEFT: Typography ────────────────────── */}
      <div className="relative z-20 flex flex-col justify-center w-full md:w-[54%] px-8 sm:px-12 lg:px-20 pt-24 shrink-0">

        {/* Badge */}
        <div ref={badgeRef} style={{ opacity: 0 }} className="mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-white/30"></span>
          <span className="text-white/40 uppercase tracking-[0.35em] text-[10px] font-semibold">
            Ibadan&apos;s Finest Chair · Est. 2012
          </span>
        </div>

        {/* Headline — overflow-hidden per line creates the "slide up" reveal */}
        <div className="overflow-hidden leading-none">
          <div ref={line1Ref} style={{ opacity: 0 }}>
            <span className="block font-playfair font-bold tracking-[-0.04em] leading-[0.85] text-white"
                  style={{ fontSize: 'clamp(4rem, 13vw, 10rem)' }}>
              OLA
            </span>
          </div>
        </div>
        <div className="overflow-hidden leading-none">
          <div ref={line2Ref} style={{ opacity: 0 }}>
            <span className="block font-playfair font-bold tracking-[-0.04em] leading-[0.85] text-white"
                  style={{ fontSize: 'clamp(4rem, 13vw, 10rem)' }}>
              MUMMY
            </span>
          </div>
        </div>
        <div className="overflow-hidden leading-none mb-8">
          <div ref={line3Ref} style={{ opacity: 0 }}>
            <span className="block font-playfair font-light italic tracking-[-0.04em] leading-[0.85] text-white/40"
                  style={{ fontSize: 'clamp(4rem, 13vw, 10rem)' }}>
              BRIGHT.
            </span>
          </div>
        </div>

        {/* Animated rule */}
        <div ref={ruleRef} className="h-[1px] bg-white/15 w-full mb-8 origin-left" style={{ transform: 'scaleX(0)' }}></div>

        {/* CTAs + Tagline */}
        <div ref={ctasRef} style={{ opacity: 0 }}>
          {/* Copywriter tagline */}
          <p className="font-playfair italic text-white/60 text-lg md:text-xl mb-2 leading-snug">
            Your cut says everything.
          </p>
          <p className="text-white/30 text-xs font-light tracking-wide mb-8 max-w-xs">
            Precision fades, bold tints &amp; 13 years of mastery — all under one roof in Ibadan.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <WhatsAppCTA text="Book Your Cut" />
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-semibold text-white/40 hover:text-white transition-colors duration-500"
            >
              <span className="w-8 h-[1px] bg-white/30 group-hover:w-14 group-hover:bg-white transition-all duration-500"></span>
              See The Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 sm:left-12 lg:left-20 flex items-center gap-4 opacity-25">
          <div className="w-[1px] h-12 bg-white overflow-hidden relative">
            <div className="w-full bg-white/60 absolute top-0 h-1/2 animate-[scroll_2s_ease-in-out_infinite]"></div>
          </div>
          <span className="text-white text-[9px] uppercase tracking-[0.3em] vertical-rl">Scroll</span>
        </div>
      </div>

      {/* ── RIGHT: Scrolling photo columns ──────── */}
      <div className="hidden md:flex absolute right-0 top-0 w-[48%] h-full gap-1.5 overflow-hidden">

        {/* Edge fades */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

        {/* Column 1 - scrolls UP */}
        <div className="flex-1 flex flex-col gap-1.5 animate-photo-up will-change-transform">
          {col1.map((img, i) => (
            <div key={i} className="relative w-full aspect-[3/4] shrink-0 overflow-hidden bg-white/5">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
                sizes="12vw"
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Column 2 - scrolls DOWN */}
        <div className="flex-1 flex flex-col gap-1.5 -mt-[50%] animate-photo-down will-change-transform">
          {col2.map((img, i) => (
            <div key={i} className="relative w-full aspect-[3/4] shrink-0 overflow-hidden bg-white/5">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
                sizes="12vw"
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Column 3 - scrolls UP, slower */}
        <div className="flex-1 flex flex-col gap-1.5 -mt-[20%] animate-photo-up will-change-transform" style={{ animationDuration: '50s' }}>
          {col3.map((img, i) => (
            <div key={i} className="relative w-full aspect-[3/4] shrink-0 overflow-hidden bg-white/5">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
                sizes="12vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
