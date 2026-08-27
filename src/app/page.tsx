import React from 'react';
import dynamic from 'next/dynamic';
import { Marquee } from '@/components/home/Marquee';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { GalleryTeaser } from '@/components/home/GalleryTeaser';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { Testimonials } from '@/components/home/Testimonials';

// Lazy-load the hero (GSAP + photo columns) so initial HTML shell is fast
const HeroScene = dynamic(
  () => import('@/components/home/HeroScene').then(m => ({ default: m.HeroScene })),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <HeroScene />
      <Marquee />
      <div id="services">
        <ServicesGrid />
      </div>
      <GalleryTeaser />
      <AboutTeaser />
      <Testimonials />
    </>
  );
}
