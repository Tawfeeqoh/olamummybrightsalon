import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8">
        <Scissors className="text-white w-24 h-24 mx-auto" strokeWidth={1} />
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-2 tracking-tighter">404</h1>
      <h2 className="text-2xl md:text-3xl font-playfair italic text-white/50 mb-6">
        This page don comot.
      </h2>
      
      <p className="text-white/40 max-w-md mx-auto mb-10 leading-relaxed font-light">
        The style you&apos;re looking for doesn&apos;t exist in our catalog. It might have been moved or deleted.
      </p>

      <Link 
        href="/"
        className="group inline-flex items-center justify-center gap-3 bg-white text-black uppercase tracking-[0.2em] text-xs font-semibold py-4 px-10 hover:bg-black hover:text-white border border-white transition-all duration-500"
      >
        <span>Return to Shop</span>
      </Link>
    </div>
  );
}
