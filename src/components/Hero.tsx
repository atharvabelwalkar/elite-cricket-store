import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-deep-charcoal flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaqsuTG6ieePvJfccxnNYWPqXYThbk7Zx9z0lRyNQyf72F1MssFJ3RcwrjDkrRiSlBZs9NsUzpLG2Wr_7DU1-k50ykMqibkPOErSrJK5kVJE2P5JspOtdL90ODYbQw-8MHNa0EH8bb9-CeMxTGd04hoHSkYspBeLTvWI2BRnFvQm0mwktmuj78cgkyP7MQiFzoM6pxwyY32slIjuF-SAOvycp-ZK78tc1ljHBd1m8l9BE1CUYOdKtLLAKm9ztB0XrbnG2WLdYgA6Y"
          alt="Cricket Action"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="label-sm text-stone-300 mb-6 block">Season 2026</span>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-8 leading-[0.9] italic">
            Precision in <br />
            <span className="not-italic font-bold">Every Stroke</span>
          </h1>
          <p className="body-md text-stone-400 mb-12 max-w-lg leading-relaxed">
            Engineering excellence into every fiber. Discover the pinnacle of cricket performance through our heritage-driven craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="sharp-button primary-btn">
              Shop Collection
            </button>
            <button className="sharp-button border border-white text-white hover:bg-white hover:text-deep-charcoal">
              Our Legacy
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Detail */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="label-sm text-stone-500 mb-2">Technical Specification</div>
        <div className="text-white text-xs font-mono">51.4883° N, 0.3348° W — THE OVAL, LONDON</div>
      </div>
    </section>
  );
}
