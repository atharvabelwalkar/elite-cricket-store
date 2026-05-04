import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <section className="py-section-gap px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="label-sm text-stone-400 mb-4 block">Curated Selection</span>
          <h2 className="font-display text-4xl md:text-5xl italic border-l-4 border-primary-red pl-6">
            The Heritage <br />
            <span className="not-italic font-bold">Collection</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="label-sm border-b border-black pb-1 hover:text-primary-red hover:border-primary-red transition-all">
            See All Items
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onProductClick} 
          />
        ))}
      </div>
    </section>
  );
}
