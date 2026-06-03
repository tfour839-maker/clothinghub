import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones, ChevronRight } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const trustSignals = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over ₹999' },
  { icon: ShieldCheck, title: 'Secure Payments', desc: 'Powered by Razorpay' },
  { icon: RotateCcw, title: '7-Day Returns', desc: 'Easy return policy' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Mon–Sat, 10 AM–7 PM IST' },
];

export default function HomePage() {
  const trendingProducts = products.slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop"
            alt="Curated Modern Essentials — Premium clothing collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block text-gold text-xs font-semibold uppercase tracking-[3px] mb-4">
              New Season Collection
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Curated Modern
              <br />
              <span className="text-gold">Essentials</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              Discover handpicked fashion that blends timeless elegance with contemporary design. Every piece tells a story of quality and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 btn-premium group"
                id="hero-cta-shop"
              >
                Shop New Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
                id="hero-cta-about"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[2px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-offwhite border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{title}</p>
                  <p className="text-xs text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Explore</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-2">Shop by Category</h2>
          <p className="text-muted mt-3 max-w-md mx-auto">Discover our carefully curated collections designed for every style and occasion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden img-zoom-container"
              id={`category-${cat.slug}`}
            >
              <img
                src={cat.image}
                alt={`Shop ${cat.name} — ${cat.description}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-white/60 text-sm mb-4">{cat.description}</p>
                <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Explore Collection <ChevronRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="bg-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">What&apos;s Hot</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-2">Trending Now</h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-charcoal-muted hover:text-gold transition-colors group"
            >
              View All
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex sm:hidden justify-center mt-8">
            <Link
              to="/shop"
              className="bg-charcoal text-white text-sm font-medium px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-charcoal-light transition-colors"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=800&fit=crop"
            alt="Premium quality fabrics and craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Our Promise</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">Crafted for Quality</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Every garment is made from responsibly sourced materials, designed to last season after season. We believe fashion should be an investment, not a compromise.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/20 transition-all"
          >
            Learn About Our Process <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
