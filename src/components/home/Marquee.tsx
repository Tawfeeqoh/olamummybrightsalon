import React from 'react';

const items = [
  "Perfect Cut", "Premium Fades", "Beard Vibes",
  "Tinting Specialists", "50+ Apprentices Trained", "Est. 2012",
  "Precision Line-ups", "Ibadan's Finest", "Locs & Retwists",
];

export const Marquee = () => {
  return (
    <div className="w-full bg-black text-white py-5 overflow-hidden flex whitespace-nowrap border-y border-white/10">
      <div className="flex animate-marquee items-center text-lg md:text-2xl font-playfair uppercase tracking-widest w-max">
        {[...Array(3)].map((_, outer) => (
          items.map((item, i) => (
            <React.Fragment key={`${outer}-${i}`}>
              <span className={`mx-10 ${i % 2 === 0 ? 'italic text-white' : 'text-white/40 font-light not-italic'}`}>{item}</span>
              <span className="mx-6 opacity-20 text-xs">✦</span>
            </React.Fragment>
          ))
        ))}
      </div>
    </div>
  );
};
