import React from 'react';
import { HeroScene } from '@/components/home/HeroScene';
import { Marquee } from '@/components/home/Marquee';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { GalleryTeaser } from '@/components/home/GalleryTeaser';
import { ChairScrollSection } from '@/components/home/ChairScrollSection';
import { Testimonials } from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <HeroScene />
      <Marquee />
      <div id="services">
        <ServicesGrid />
      </div>
      <GalleryTeaser />
      <ChairScrollSection />
      <Testimonials />
    </>
  );
}
