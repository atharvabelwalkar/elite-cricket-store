import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/442079460123"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[80] group flex items-center gap-3 bg-white border border-stone-200 shadow-xl px-6 py-4 cursor-pointer"
    >
      <div className="flex flex-col items-end">
        <span className="label-sm text-[8px] text-stone-400 leading-none mb-1">EXPERT ADVICE</span>
        <span className="text-[10px] font-bold tracking-widest text-black">WHATSAPP</span>
      </div>
      <div className="bg-[#25D366] p-2 rounded-none text-white transition-colors group-hover:bg-[#128C7E]">
        <MessageCircle className="w-5 h-5 fill-current" />
      </div>
      
      {/* Tooltip hint */}
      <div className="absolute -top-12 right-0 bg-stone-900 text-white text-[8px] tracking-widest px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        CHAT WITH A MASTER CRAFTSMAN
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
