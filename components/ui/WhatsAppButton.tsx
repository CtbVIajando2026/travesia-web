import React from 'react';

interface WhatsAppButtonProps {
  className?: string;
  variant?: 'floating' | 'inline';
  text?: string;
}

export default function WhatsAppButton({ className = '', variant = 'inline', text = 'Reserva ahora' }: WhatsAppButtonProps) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '593990136060';
  const url = `https://wa.me/${number}`;

  const baseStyles = "inline-flex items-center justify-center bg-gold text-forest-dark font-sans font-bold transition-colors hover:bg-gold-light";
  
  if (variant === 'floating') {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 rounded-full px-6 py-3 shadow-lg ${baseStyles} ${className}`}
        aria-label={text}
      >
        {text}
      </a>
    );
  }

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`rounded px-6 py-3 ${baseStyles} ${className}`}
    >
      {text}
    </a>
  );
}
