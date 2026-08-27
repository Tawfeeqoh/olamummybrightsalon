import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppCTAProps {
  text?: string;
  className?: string;
  message?: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  text = "Book Appointment",
  className = "",
  message = "Hello Ola Mummy Bright Barber Shop, I would like to make an inquiry."
}) => {
  const phoneNumber = "2348075421230";
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 bg-white text-black uppercase tracking-[0.2em] text-xs font-semibold py-5 px-10 hover:bg-black hover:text-white border border-white transition-all duration-500 ${className}`}
    >
      <MessageCircle size={16} className="group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
      <span>{text}</span>
    </a>
  );
};
