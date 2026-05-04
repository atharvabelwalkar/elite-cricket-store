import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-[90] cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[100] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-stone-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Shopping Bag</h3>
                <p className="label-sm text-stone-400 mt-1">{items.length} Unique Items</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-stone-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="p-6 bg-stone-50 mb-6 transition-transform hover:scale-110">
                    <ShoppingBag className="w-12 h-12 text-stone-200" />
                  </div>
                  <h4 className="font-display text-xl italic mb-2">Your bag is empty</h4>
                  <p className="text-sm text-stone-400 mb-8">Ready to define your game?</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="label-sm border-b border-black pb-1 hover:text-primary-red transition-all"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-24 h-32 bg-stone-50 border border-stone-100 flex items-center justify-center p-4">
                      <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-tight">{item.name}</h4>
                          <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">{item.category}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-300 hover:text-primary-red transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border border-stone-200">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-stone-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-stone-50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-primary-red">
                          £{(parseFloat(item.price.replace('£', '').replace(',', '')) * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 bg-stone-50 border-t border-stone-200 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="label-sm text-stone-400">Total Selection</span>
                  <span className="text-2xl font-display font-bold italic">£{totalPrice.toLocaleString()}</span>
                </div>
                <button className="sharp-button primary-btn w-full py-5 flex items-center justify-center gap-4">
                  Checkout
                </button>
                <div className="flex items-center justify-center gap-2 opacity-40">
                   <div className="h-px w-8 bg-stone-300" />
                   <span className="text-[8px] uppercase tracking-[0.3em]">Secure Heritage Payment</span>
                   <div className="h-px w-8 bg-stone-300" />
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
