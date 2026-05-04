import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { setIsOpen, totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="md:hidden">
            <Menu className="w-5 h-5" />
          </button>
          <div className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">
            Elite Cricket
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Bats', 'Protective', 'Accessories', 'Heritage'].map((item) => (
              <a
                key={item}
                href="#"
                className="label-sm text-stone-400 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hover:text-primary-red transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsOpen(true)}
            className="hover:text-primary-red transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-red text-white text-[8px] font-bold w-4 h-4 rounded-none flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
