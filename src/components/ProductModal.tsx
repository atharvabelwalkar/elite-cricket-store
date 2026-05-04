import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none p-4 md:p-8">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm pointer-events-auto cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-white rounded-none flex flex-col md:flex-row overflow-hidden pointer-events-auto"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 text-stone-400 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image */}
          <div className="w-full md:w-1/2 bg-stone-50 p-12 flex items-center justify-center border-r border-stone-100">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[400px] object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <span className="label-sm text-stone-400 mb-2">{product.category}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{product.name}</h2>
            <p className="text-xl font-light text-primary-red mb-8">{product.price}</p>
            
            <p className="text-stone-500 text-sm leading-relaxed mb-12">
              {product.description}
            </p>

            <div className="space-y-6 mb-12">
              <h4 className="label-sm text-black">Specifications</h4>
              <div className="grid grid-cols-2 gap-y-4 border-t border-stone-100 py-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="contents italic">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 self-center">
                      {key}
                    </span>
                    <span className="text-xs font-semibold text-stone-900 text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="sharp-button primary-btn w-full flex items-center justify-center gap-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Collection
            </button>
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-stone-400 text-center">
              Complimentary heritage storage cover included
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
