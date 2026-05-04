/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Product } from './types';
import productsData from './data/products.json';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Load products from JSON
    setProducts(productsData as unknown as Product[]);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <Hero />
          
          {/* Brand Section */}
          <section className="py-section-gap px-6 md:px-12 bg-white flex items-center justify-center text-center">
            <div className="max-w-4xl">
              <span className="label-sm text-primary-red mb-6 block">The Heritage of Craftsmanship</span>
              <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
                Crafted for those who <br />
                <span className="italic font-light">define the game.</span>
              </h2>
              <p className="body-md text-stone-500 max-w-2xl mx-auto leading-relaxed">
                For generations, Elite Cricket has been synonymous with the soul of the sport. We source only the finest Grade 1 English Willow, hand-selecting each cleft for its grain and weight.
              </p>
              <div className="mt-12 h-px w-24 bg-stone-200 mx-auto"></div>
            </div>
          </section>

          <ProductGrid 
            products={products} 
            onProductClick={handleProductClick} 
          />

          {/* Technical Detail Section */}
          <section className="bg-deep-charcoal py-section-gap px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <span className="label-sm text-stone-500 mb-6 block">Structural Integrity</span>
                <h2 className="font-display text-3xl md:text-5xl text-white mb-8 italic">
                  Beyond the <br />
                  <span className="not-italic font-bold">Boundary</span>
                </h2>
                <div className="space-y-8">
                  <div className="border-l border-primary-red pl-6 py-2">
                    <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Aero-Flow Grille</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">Optimized titanium alloy structure for peripheral vision and impact dispersion.</p>
                  </div>
                  <div className="border-l border-white/20 pl-6 py-2">
                    <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Hand-Pressed Willow</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">Slow-pressed under 2000psi to ensure maximum recoil and longevity.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRqCO7poIuOnw76jSysYkQ2JEmWaaHwPQkIzjwdjXeQxYdrBbAxZyppFrf4gO5iYHVbDaSNHO--avm8FdEMX1mK3m6KmMYCke0KAfCnJk0a-aC739n0u82JkRRN1rlV-4jCS30yuubZjZPc955ehMrzIz5Dqf0BQcGvkFahI5FGJLI2Q2LfZiOPdjgw6mdbxMXnrVf1NaD5_krbO6YYxpfFXKkhE-jaWGHUIU-1o-PqJyZukq3LxH34nrbkRiSJ918NX566ownQ6E" 
                  alt="Technical Detail" 
                  className="w-full h-full object-cover transition-all duration-1000 cursor-crosshair"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>

          <ContactSection />
        </main>

        <Footer />

        <WhatsAppButton />
        <CartDrawer />

        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
        />
      </div>
    </CartProvider>
  );
}
