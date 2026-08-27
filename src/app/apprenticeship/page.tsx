import { Metadata } from 'next';
import { CheckCircle, Users, Clock, Scissors } from 'lucide-react';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Apprenticeship | Ola Mummy Bright Barber Shop',
  description: 'Learn the craft under Mr. Taofeek. Join the Ola Mummy Bright apprenticeship programme in Ibadan.',
};

const benefits = [
  { icon: Scissors, title: 'Hands-On Training', desc: 'Learn by doing — real clients, real cuts, real feedback from day one.' },
  { icon: Users, title: 'Mentorship by Mr. Taofeek', desc: 'Direct, personal mentorship from a master barber with over a decade of experience.' },
  { icon: Clock, title: 'Flexible Duration', desc: 'Programme durations tailored to your starting skill level and learning pace.' },
  { icon: CheckCircle, title: 'Certification', desc: 'Graduate with a certificate of completion and a portfolio of your best work.' },
];

export default function ApprenticeshipPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="pt-48 pb-32 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-8 font-semibold">Shape Your Future</p>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-playfair font-bold tracking-tighter leading-[0.9] text-white mb-12">
            Train With<br/>
            <span className="italic font-light text-white/70">the Best.</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-xl leading-relaxed">
            Join a lineage of over 50 trained barbers. Learn the craft from Mr. Taofeek — one of Ibadan&apos;s most respected masters of the chair.
          </p>
        </div>
      </section>

      {/* Founder Quote / Story */}
      <section className="py-32 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            <div>
              <div className="relative aspect-[3/4] max-w-sm">
                <div className="absolute inset-0 bg-[url('/gallery/client-10.jpg')] bg-cover bg-top"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Floating year badge */}
                <div className="absolute top-6 left-6 bg-white text-black px-4 py-2">
                  <p className="text-xs uppercase tracking-widest font-bold">Est. 2012</p>
                </div>
              </div>
            </div>

            <div>
              <blockquote className="text-3xl md:text-4xl font-playfair italic text-white/90 leading-snug mb-10 border-l-2 border-white/30 pl-8">
                &ldquo;I didn&apos;t just want to cut hair. I wanted to build something that would outlast me — a standard that my students would carry forward.&rdquo;
              </blockquote>
              <p className="text-white/50 uppercase tracking-widest text-xs mb-4 font-semibold">— Mr. Taofeek</p>
              <p className="text-white/60 font-light leading-relaxed max-w-lg mt-8 text-sm md:text-base">
                Starting in 2012 with nothing but raw skill and determination, Mr. Taofeek built Ola Mummy Bright into 
                one of Ibadan&apos;s most trusted names in grooming. His true pride? The 50+ barbers he has personally 
                mentored — each one now thriving in their own career.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-white text-black border-b border-black/10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-24">
            <p className="text-black/40 uppercase tracking-[0.3em] text-xs mb-6 font-semibold">What You&apos;ll Gain</p>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold tracking-tighter">
              The Programme
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
            {benefits.map((item, idx) => (
              <div key={idx} className="border-r border-b border-black/10 p-10 flex flex-col gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-black/20">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-playfair font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-white/10 max-w-4xl mx-auto">
            {[
              { num: '12+', label: 'Years of Experience' },
              { num: '50+', label: 'Apprentices Trained' },
              { num: '100%', label: 'Hands-On Learning' },
            ].map((stat, idx) => (
              <div key={idx} className="border-r border-b border-white/10 p-12 text-center">
                <p className="text-6xl md:text-7xl font-playfair font-bold text-white tracking-tighter">{stat.num}</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-4 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-5xl md:text-7xl font-playfair font-bold tracking-tighter text-white mb-8 leading-tight">
            Ready to start<br/>
            <span className="italic font-light text-white/60">your journey?</span>
          </h2>
          <p className="text-white/50 font-light max-w-md mx-auto mb-16 leading-relaxed">
            Reach out to us on WhatsApp to ask about our current intake, fees, and duration. 
            Spots are limited — only serious applicants need apply.
          </p>
          <WhatsAppCTA 
            text="Enquire About Apprenticeship" 
            message="Hello Mr. Taofeek, I am interested in joining the Ola Mummy Bright apprenticeship programme. Please let me know more about the requirements."
            className="text-base px-12 py-6"
          />
        </div>
      </section>

    </div>
  );
}
