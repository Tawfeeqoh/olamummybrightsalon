"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { CustomChair3D } from '@/components/3d/AbstractChair';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ChairScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chairWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const chairWrap = chairWrapRef.current;
    const text = textRef.current;
    if (!section || !chairWrap || !text) return;

    // Chair: swirls (rotates its container) + rises up as user scrolls in
    gsap.fromTo(chairWrap,
      { y: 120, rotate: -12, opacity: 0, scale: 0.85 },
      {
        y: 0, rotate: 0, opacity: 1, scale: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'center center',
          scrub: 1.5,
        }
      }
    );

    // As user scrolls PAST the section, chair slowly spins and drifts upward (swirl exit)
    gsap.to(chairWrap, {
      y: -80,
      rotate: 10,
      scale: 0.9,
      opacity: 0.3,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end: 'bottom top',
        scrub: 2,
      }
    });

    // Text fades in from the left
    gsap.fromTo(text,
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden flex items-center border-t border-white/5 py-32">
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text — left */}
        <div ref={textRef} className="order-2 lg:order-1 opacity-0">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-8 font-semibold">Premium Comfort</p>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 tracking-tighter leading-tight">
            Every cut<br/>
            <span className="italic font-light text-white/60">starts here.</span>
          </h2>
          <p className="text-white/50 font-light leading-relaxed max-w-md mb-12 text-sm md:text-base">
            From the moment you take your seat, you are in the hands of a master. 
            Our abstract geometric seating represents precision meeting comfort — where every client is treated like royalty.
          </p>
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs font-semibold text-white hover:text-white/60 transition-colors duration-500"
          >
            <span className="w-10 h-[1px] bg-white/40 group-hover:w-16 transition-all duration-500"></span>
            View All Services
          </Link>
        </div>

        {/* Custom 3D — right, with scroll-driven swirl */}
        <div ref={chairWrapRef} className="order-1 lg:order-2 flex flex-col opacity-0 will-change-transform z-10">
          <div className="h-[500px] lg:h-[700px]">
            <CustomChair3D />
          </div>
          <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.3em] mt-3 font-semibold select-none">
            ↻ Drag to rotate · Scroll to zoom
          </p>
        </div>

      </div>
    </section>
  );
};
