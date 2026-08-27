import React from 'react';
import { Metadata } from 'next';
import { MapPin, Phone, Clock } from 'lucide-react';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Contact | Ola Mummy Bright Barber Shop',
  description: 'Get in touch with Ola Mummy Bright Barber Shop in Ibadan. Find our address, phone number, and opening hours.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="pt-48 pb-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-6 font-semibold">We&apos;re Here For You</p>
          <h1 className="text-6xl md:text-8xl font-playfair font-bold tracking-tighter leading-[0.9] text-white">
            Get In<br/>
            <span className="italic font-light text-white/50">Touch.</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-l border-white/10 max-w-6xl mx-auto">

            {/* Contact Info */}
            <div className="border-r border-b border-white/10 p-12 lg:p-16">
              <h2 className="font-playfair text-3xl font-bold text-white mb-12 tracking-tight">Contact Information</h2>
              <div className="flex flex-col gap-12">

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                    <Phone size={18} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 uppercase tracking-widest text-xs mb-3 font-semibold">WhatsApp &amp; Phone</p>
                    <a href="tel:08075421230" className="text-2xl font-playfair font-bold text-white hover:text-white/60 transition-colors">0807 542 1230</a>
                    <div className="mt-6">
                      <WhatsAppCTA text="Chat with us" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-t border-white/10 pt-12">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 uppercase tracking-widest text-xs mb-3 font-semibold">Address</p>
                    <p className="text-white font-light leading-relaxed">
                      9VW9+XWQ, Aba-ela junction<br />
                      along idi-shin north, Jericho St<br />
                      Ibadan 200210, Oyo, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-t border-white/10 pt-12">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                    <Clock size={18} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 uppercase tracking-widest text-xs mb-3 font-semibold">Opening Hours</p>
                    <p className="text-white font-light">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-white/40 font-light mt-1">Sunday: Closed</p>
                    <p className="text-white/50 text-sm font-light mt-4 italic">Home service available by appointment.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Map */}
            <div className="border-r border-b border-white/10 min-h-[500px] relative overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4025066974127!2d3.8569566147758364!3d7.420658494646736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d5c4dc602bf%3A0xbcc0e193e2b203a3!2sOla%20Mummy%20Bright%20Barber%20Shop!5e0!3m2!1sen!2sng!4v1689252345000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-24 bg-white text-black border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-playfair text-4xl font-bold tracking-tighter mb-2">Ready for your cut?</h2>
            <p className="text-black/50 font-light">Message us on WhatsApp and we&apos;ll confirm your slot within minutes.</p>
          </div>
          <WhatsAppCTA text="Book Now on WhatsApp" message="Hello, I'd like to book an appointment at Ola Mummy Bright Barber Shop." />
        </div>
      </section>

    </div>
  );
}
