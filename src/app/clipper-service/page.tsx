import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { CustomClipper3D } from '@/components/3d/AbstractClipper';

export default function ClipperServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="pt-48 pb-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-6 font-semibold">Professional Equipment Care</p>
          <h1 className="text-6xl md:text-8xl font-playfair font-bold tracking-tighter leading-[0.9] text-white">
            Clipper<br/>
            <span className="italic font-light text-white/50">Servicing.</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">

            {/* 3D Clipper Embed */}
            <div className="h-[500px] lg:h-[700px] border border-white/10 overflow-hidden bg-white/5">
              <CustomClipper3D />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-16 pt-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 tracking-tighter">
                  What Servicing<br/>Includes
                </h2>
                <p className="text-white/50 font-light leading-relaxed mb-10 max-w-md">
                  Our comprehensive servicing extends the life of your clippers and ensures precision 
                  cuts every time. We handle the technical details so you can focus on the fade.
                </p>

                <ul className="space-y-6 border-t border-white/10 pt-10">
                  {[
                    "Precision Blade Sharpening",
                    "Motor Alignment & Tuning",
                    "Deep Cleaning & Sanitization",
                    "Guard Replacement & Calibration",
                    "Power Cord & Switch Diagnostics"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <CheckCircle className="text-white shrink-0" size={18} strokeWidth={1.5} />
                      <span className="text-white/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-white/10 p-8 flex items-start gap-5">
                <ShieldCheck className="text-white shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <div>
                  <h3 className="font-playfair font-bold text-white text-xl mb-3">Fast Turnaround</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    Most standard servicing is completed within 24–48 hours. Drop-off and 
                    home-pickup options are available upon request.
                  </p>
                </div>
              </div>

              <WhatsAppCTA
                text="Book a Clipper Service"
                message="Hello, I need my clippers serviced/repaired. Please let me know the next steps."
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
