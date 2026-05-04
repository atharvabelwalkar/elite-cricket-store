import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group cursor-pointer flex flex-col"
      onClick={() => onClick(product)}
    >
      <div className="aspect-[4/5] bg-stone-100 border border-stone-200 p-8 flex items-center justify-center overflow-hidden relative hover:bg-stone-50 transition-all duration-700">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="label-sm text-[8px] bg-white border border-stone-200 px-2 py-1">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h4 className="text-sm font-semibold text-stone-900 group-hover:text-primary-red transition-colors">
          {product.name}
        </h4>
        <p className="label-sm text-stone-400 mt-2">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
