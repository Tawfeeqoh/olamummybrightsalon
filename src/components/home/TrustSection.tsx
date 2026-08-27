import React from 'react';

const reasons = [
  { title: "Craftsmanship", desc: "Decades of combined experience delivering flawless fades and sharp line-ups." },
  { title: "Hygiene", desc: "Sterilized equipment and a pristine environment for every client." },
  { title: "Efficiency", desc: "Respecting your time without compromising on the quality of the cut." },
  { title: "Products", desc: "Using only top-tier grooming products that nourish your skin and hair." }
];

export const TrustSection = () => {
  return (
    <section className="py-40 bg-black">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tighter leading-tight mb-8">
              More than<br/>just a cut.
            </h2>
            <p className="text-white/50 text-lg font-light max-w-md leading-relaxed">
              We elevate your confidence through meticulous attention to detail and an unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {reasons.map((reason, idx) => (
              <div key={idx} className="border-t border-white/20 pt-6">
                <h3 className="text-xl font-playfair font-bold text-white mb-4 tracking-tight">{reason.title}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
