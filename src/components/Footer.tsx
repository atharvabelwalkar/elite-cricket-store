import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-black tracking-tighter uppercase mb-6">Elite Cricket</h3>
            <p className="text-xs text-stone-500 leading-relaxed max-w-[200px]">
              Crafting technical excellence for the modern cricketer since 1924.
            </p>
          </div>
          
          <div>
            <h4 className="label-sm mb-6 text-black">Company</h4>
            <ul className="space-y-4 text-[11px] text-stone-400 uppercase tracking-widest font-medium">
              <li><a href="#" className="hover:text-primary-red transition-colors">Our Heritage</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Artisans</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Journal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="label-sm mb-6 text-black">Support</h4>
            <ul className="space-y-4 text-[11px] text-stone-400 uppercase tracking-widest font-medium">
              <li><a href="#" className="hover:text-primary-red transition-colors">Bespoke Fit</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="label-sm mb-6 text-black">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-stone-300 py-3 text-[10px] uppercase tracking-widest focus:border-stone-900 outline-none transition-all placeholder:text-stone-300"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 label-sm text-stone-900 hover:text-primary-red">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <Instagram className="w-4 h-4 text-stone-400 hover:text-black cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-stone-400 hover:text-black cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-stone-400 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-100 gap-4">
          <p className="text-[9px] text-stone-300 uppercase tracking-widest">
            © 2026 Elite Cricket Performance Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[9px] text-stone-300 uppercase tracking-widest">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
