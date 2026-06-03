import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group animate-fade-in">
      {/* Image */}
      <div className="relative img-zoom-container rounded-xl overflow-hidden bg-offwhite aspect-[3/4] mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Tag */}
        {product.tag && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            product.tag === 'Bestseller' ? 'bg-charcoal text-white' :
            product.tag === 'New' ? 'bg-gold text-charcoal' :
            product.tag === 'Trending' ? 'bg-white text-charcoal' :
            'bg-charcoal-light text-gold'
          }`}>
            {product.tag}
          </span>
        )}

        {/* Discount Badge */}
        <span className="absolute top-3 right-3 bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          -{product.discount}%
        </span>

        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={() => addToCart(product)}
            id={`add-to-cart-${product.id}`}
            className="w-full bg-white text-charcoal text-sm font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-gold hover:text-white transition-colors duration-200 btn-premium"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className="text-sm font-medium text-charcoal line-clamp-2 mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-star text-star' : 'text-border fill-border'}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-charcoal">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-muted line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          <span className="text-xs font-semibold text-success">({product.discount}% off)</span>
        </div>
      </div>
    </div>
  );
}
