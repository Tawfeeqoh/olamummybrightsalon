import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Scissors, Briefcase, Zap, Droplet, Wind, Sparkles } from 'lucide-react';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Services | Ola Mummy Bright Barber Shop',
  description: 'Explore our full grooming menu including haircuts, fades, locs, tinting, and clipper repair — with clear pricing.',
};

const servicesList = [
  {
    id: "haircuts",
    title: "Haircuts & Fades",
    description: "From clean bald and skin fades to classic low cuts, we deliver precision grooming tailored to your head shape.",
    icon: Scissors,
    pricing: [
      { name: "Low Cut", price: "₦5,000" },
      { name: "Skin Fade", price: "₦6,000" },
      { name: "Bald Shave", price: "₦5,500" },
      { name: "Line-up / Edge-up only", price: "₦2,500" },
    ],
    includes: ["Consultation", "Precision Cut", "Hot Towel", "Line-up"],
    message: "Hello, I'd like to book a haircut / fade at Ola Mummy Bright."
  },
  {
    id: "home-service",
    title: "Home Service",
    description: "Can't make it to the shop? We bring the full barbershop experience directly to your home or office.",
    icon: Briefcase,
    pricing: [
      { name: "Standard Home Visit", price: "₦8,000+" },
      { name: "Event / Group Booking", price: "Call for quote" },
    ],
    includes: ["Full Mobile Kit", "Flexible Scheduling", "Premium Convenience"],
    message: "Hello, I'd like to book a home service with Ola Mummy Bright Barber Shop. Please let me know your availability."
  },
  {
    id: "locs",
    title: "Locs (Start & Retwist)",
    description: "Professional care for locs at all stages — starter locs, regular retwists, and full styling.",
    icon: Wind,
    pricing: [
      { name: "Starter Locs", price: "₦15,000+" },
      { name: "Retwist (short)", price: "₦10,000" },
      { name: "Retwist (long)", price: "₦15,000+" },
      { name: "Styling only", price: "₦5,000" },
    ],
    includes: ["Wash & Condition", "Neat Retwist", "Styling"],
    message: "Hello, I'd like to book a locs appointment (retwist / starter) at Ola Mummy Bright."
  },
  {
    id: "tinting",
    title: "Hair Tinting & Coloring",
    description: "Expert color application — natural black dye, blonde tips, or bold fashion colors. The tinting work you've seen is real.",
    icon: Droplet,
    pricing: [
      { name: "Single Color Tint", price: "₦8,000" },
      { name: "Two-Tone / Highlight", price: "₦12,000" },
      { name: "Full Fashion Color", price: "₦15,000+" },
    ],
    includes: ["Color Consultation", "Even Application", "Color-safe Wash"],
    message: "Hello, I'd like to book a hair tinting / coloring appointment at Ola Mummy Bright."
  },
  {
    id: "treatments",
    title: "Hair & Scalp Treatments",
    description: "Revitalize your hair with deep conditioning and scalp care treatments that promote healthy growth.",
    icon: Sparkles,
    pricing: [
      { name: "Scalp Treatment", price: "₦6,000" },
      { name: "Deep Conditioning", price: "₦7,000" },
    ],
    includes: ["Deep Cleansing", "Nourishing Oils", "Scalp Massage"],
    message: "Hello, I'd like to book a hair treatment at Ola Mummy Bright Barber Shop."
  },
  {
    id: "clipper-repair",
    title: "Clipper Servicing & Repair",
    description: "Keep your tools sharp. Professional blade sharpening, motor checks, and deep cleaning for all clipper brands.",
    icon: Zap,
    pricing: [
      { name: "Standard Service", price: "₦4,000" },
      { name: "Blade Replacement", price: "₦5,000+" },
      { name: "Full Repair (motor)", price: "₦8,000+" },
    ],
    includes: ["Blade Sharpening", "Motor Alignment", "Deep Clean"],
    link: "/clipper-service",
    message: "Hello, I need my clippers serviced / repaired at Ola Mummy Bright."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="pt-48 pb-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-6 font-semibold">What We Offer</p>
          <h1 className="text-6xl md:text-8xl font-playfair font-bold tracking-tighter leading-[0.9] text-white">
            Services &<br/>
            <span className="italic font-light text-white/50">Pricing.</span>
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-2">
        <div className="border-t border-l border-white/10">
          {servicesList.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-3 border-r border-b border-white/10 group"
            >
              {/* Left: Title + Description */}
              <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-8 group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <service.icon size={18} strokeWidth={1.5} className="text-white group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-white tracking-tight mb-4">{service.title}</h2>
                  <p className="text-white/50 font-light text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-10">
                  {service.link ? (
                    <Link href={service.link} className="group/link inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs font-semibold text-white hover:text-white/60 transition-colors duration-300">
                      <span className="w-8 h-[1px] bg-white/40 group-hover/link:w-14 transition-all duration-500"></span>
                      View 3D Model
                    </Link>
                  ) : (
                    <WhatsAppCTA
                      text="Book This Service"
                      message={service.message}
                    />
                  )}
                </div>
              </div>

              {/* Middle: Pricing */}
              <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-10 lg:p-14">
                <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-8 font-semibold">Pricing</p>
                <div className="flex flex-col gap-0">
                  {service.pricing.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-b-0">
                      <span className="text-white/70 font-light text-sm">{item.name}</span>
                      <span className="text-white font-playfair font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Includes */}
              <div className="p-10 lg:p-14">
                <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-8 font-semibold">Includes</p>
                <ul className="flex flex-col gap-4">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white/70 font-light text-sm">
                      <span className="w-1.5 h-1.5 bg-white shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note on pricing */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-white/30 text-sm font-light text-center max-w-xl mx-auto leading-relaxed">
            Prices are subject to hair length, complexity, and any additional treatments. 
            Home service incurs a travel surcharge. Contact us on WhatsApp for a custom quote.
          </p>
        </div>
      </section>

    </div>
  );
}
