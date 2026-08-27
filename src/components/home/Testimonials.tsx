import React from 'react';

const testimonials = [
  {
    quote: "Mr. Taofeek blessed me with a fresh cut and it was as if I was a new person! Ola Mummy Bright always goes above and beyond.",
    name: "Sabri",
    location: "Ibadan",
    img: "/gallery/client-2.png"
  },
  {
    quote: "The attention to detail is something else. I've been coming here since 2019 and the quality never drops. Taofeek is a legend.",
    name: "Chukwuemeka",
    location: "Ibadan",
    img: "/gallery/client-5.jpg"
  },
  {
    quote: "They brought the barbershop to my house for my son's naming ceremony. Professional, fast, and the finish was perfect. Highly recommend.",
    name: "Mrs. Adekoya",
    location: "Jericho, Ibadan",
    img: "/gallery/client-8.jpg"
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-white text-black border-t border-black/5">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-20">
          <p className="text-black/40 uppercase tracking-[0.3em] text-xs mb-4 font-semibold">Client Stories</p>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold tracking-tighter">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black/10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border-r border-b border-black/10 p-10 lg:p-12 flex flex-col gap-8">
              {/* Client photo - using actual gallery images without grayscale */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${t.img})` }}
                  ></div>
                </div>
                <div>
                  <p className="font-playfair font-bold text-lg">{t.name}</p>
                  <p className="text-xs text-black/40 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-black text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-playfair italic text-xl text-black/80 leading-relaxed flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
