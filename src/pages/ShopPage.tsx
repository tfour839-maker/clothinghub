import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X, Grid3X3, LayoutGrid } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const sizeOptions = ['S', 'M', 'L', 'XL'];
const colorOptions = ['White', 'Black', 'Grey', 'Navy', 'Beige', 'Olive', 'Burgundy', 'Cream', 'Charcoal'];

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedSizes: string[];
  toggleSize: (size: string) => void;
  selectedColors: string[];
  toggleColor: (color: string) => void;
  priceRange: number;
  setPriceRange: (value: number) => void;
  activeFilterCount: number;
  clearFilters: () => void;
}

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedSizes,
  toggleSize,
  selectedColors,
  toggleColor,
  priceRange,
  setPriceRange,
  activeFilterCount,
  clearFilters,
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-3">Category</h3>
        <div className="space-y-2">
          {['all', 'men', 'women', 'accessories'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors capitalize ${
                selectedCategory === cat
                  ? 'bg-charcoal text-white font-medium'
                  : 'text-charcoal-muted hover:bg-offwhite'
              }`}
              id={`filter-category-${cat}`}
            >
              {cat === 'all' ? 'All Products' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizeOptions.map(size => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3.5 py-1.5 text-sm rounded-lg border transition-all ${
                selectedSizes.includes(size)
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'border-border text-charcoal-muted hover:border-charcoal'
              }`}
              id={`filter-size-${size.toLowerCase()}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-3">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map(color => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                selectedColors.includes(color)
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'border-border text-charcoal-muted hover:border-charcoal'
              }`}
              id={`filter-color-${color.toLowerCase()}`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-3">
          Price Range
        </h3>
        <input
          type="range"
          min={0}
          max={10000}
          step={100}
          value={priceRange}
          onChange={e => setPriceRange(Number(e.target.value))}
          className="w-full"
          id="filter-price-range"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>₹0</span>
          <span className="font-medium text-charcoal">Up to ₹{priceRange.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Clear Filters */}
      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="w-full text-sm text-muted hover:text-error transition-colors py-2 border-t border-border"
          id="clear-filters"
        >
          Clear all filters ({activeFilterCount})
        </button>
      )}
    </div>
  );
}

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Customer Rating', value: 'rating' },
  { label: 'Newest First', value: 'newest' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(10000);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  // Sync category from URL
  useState(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  });

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange(10000);
  };

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) + selectedSizes.length + selectedColors.length + (priceRange < 10000 ? 1 : 0);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    if (selectedColors.length > 0) {
      result = result.filter(p => p.colors.some(c => selectedColors.includes(c)));
    }

    result = result.filter(p => p.price <= priceRange);

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedSizes, selectedColors, priceRange, sortBy]);

  const filterProps = {
    selectedCategory,
    setSelectedCategory,
    selectedSizes,
    toggleSize,
    selectedColors,
    toggleColor,
    priceRange,
    setPriceRange,
    activeFilterCount,
    clearFilters,
  };

  return (
    <main className="pt-20 lg:pt-24">
      {/* Page Header */}
      <div className="bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Collection</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-2">
            {selectedCategory === 'all' ? 'All Products' :
              selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p className="text-muted mt-2 max-w-lg">
            Explore our curated collection of premium clothing and accessories. Each piece is carefully selected for quality and style.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <FilterSidebar {...filterProps} />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium px-3 py-2 border border-border rounded-lg hover:bg-offwhite transition-colors"
                  id="mobile-filter-toggle"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-gold text-charcoal text-xs font-bold px-1.5 py-0.5 rounded-full">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <p className="text-sm text-muted">
                  <span className="font-medium text-charcoal">{filteredProducts.length}</span> products
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Grid toggle (desktop) */}
                <div className="hidden lg:flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-1.5 ${gridCols === 3 ? 'bg-charcoal text-white' : 'text-muted hover:text-charcoal'}`}
                    aria-label="3 column grid"
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`p-1.5 ${gridCols === 4 ? 'bg-charcoal text-white' : 'text-muted hover:text-charcoal'}`}
                    aria-label="4 column grid"
                  >
                    <Grid3X3 size={16} />
                  </button>
                </div>

                {/* Sort */}
                <div className="relative">
                  <div className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 border border-border rounded-lg cursor-pointer hover:bg-offwhite transition-colors">
                    <span className="hidden sm:inline text-muted">Sort:</span>
                    <select
                      value={sortBy}
                      onChange={e => setSortBy(e.target.value)}
                      className="bg-transparent outline-none cursor-pointer text-charcoal text-sm"
                      id="sort-select"
                    >
                      {sortOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="text-muted" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid grid-cols-2 md:grid-cols-3 ${gridCols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 sm:gap-6`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-display text-xl font-semibold text-charcoal mb-2">No products found</p>
                <p className="text-muted text-sm mb-4">Try adjusting your filters to find what you&apos;re looking for.</p>
                <button
                  onClick={clearFilters}
                  className="bg-charcoal text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-charcoal-light transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 animate-fade-in max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-offwhite rounded-lg"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterSidebar {...filterProps} />
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-charcoal text-white font-semibold py-3 rounded-lg mt-6"
              id="apply-filters"
            >
              Apply Filters ({filteredProducts.length} products)
            </button>
          </div>
        </>
      )}
    </main>
  );
}
