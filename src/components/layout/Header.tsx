"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ClipperMenuIcon } from '@/components/ui/ClipperMenuIcon';
import { ScissorCloseIcon } from '@/components/ui/ScissorCloseIcon';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll(); // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Apprenticeship', href: '/apprenticeship' },
  ];

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-md border-b border-gray-200 py-2'
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo — white bg badge that pops on both dark and light headers */}
          <Link href="/" className="relative w-[72px] h-[72px] shrink-0 bg-white rounded-lg border border-gray-200 shadow flex items-center justify-center -my-1 z-10">
            <Image
              src="/logo.jpg"
              alt="Ola Mummy Bright Barbering Salon"
              fill
              className="object-contain p-1.5"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className={`text-xs uppercase tracking-[0.2em] font-bold border-b-2 pb-0.5 transition-colors duration-300 ${
                isScrolled
                  ? 'text-black border-black hover:opacity-60'
                  : 'text-white border-white hover:opacity-60'
              }`}
            >
              Contact
            </Link>
          </div>

          <button
            className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <ClipperMenuIcon />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <Link href="/" className="relative w-[72px] h-[72px] bg-white" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo.jpg" alt="Ola Mummy Bright" fill className="object-contain" />
            </Link>
            <button className="text-black" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <ScissorCloseIcon />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-playfair text-5xl font-bold text-black hover:text-black/40 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-playfair text-5xl font-bold text-black hover:text-black/40 transition-colors duration-300 mt-6 pt-8 border-t border-black/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
