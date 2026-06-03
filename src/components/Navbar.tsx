import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop now', path: '/shop' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact-us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  function handleSearch() {
    if (!searchQuery.trim()) return;
    navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
    setIsSearchOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const closeMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-border shadow-sm'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="font-display text-xl sm:text-2xl font-semibold tracking-wide text-charcoal hover:text-gold transition-colors duration-300"
          >
            CLOTHS HUB
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-gold relative group ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-charcoal-muted'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* Search */}
            <div className="relative">
              <button
                id="search-toggle"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-charcoal-muted hover:text-charcoal transition-colors"
                aria-label="Search products"
              >
                <Search size={20} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-72 sm:w-80 animate-scale-in">
                  <div className="bg-white rounded-xl shadow-xl border border-border p-3">
                    <div className="flex items-center gap-2 bg-offwhite rounded-lg px-3 py-2">
                      <Search size={16} className="text-muted" />
                      <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search for products..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSearch()}
                        className="bg-transparent text-sm w-full outline-none placeholder:text-muted"
                        id="search-input"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <Link
              to="/login"
              id="user-profile"
              className="p-2 text-charcoal-muted hover:text-charcoal transition-colors hidden sm:block"
              aria-label="Sign in to your account"
            >
              <User size={20} />
            </Link>

            {/* Cart */}
            <button
              id="cart-toggle"
              onClick={toggleCart}
              className="p-2 text-charcoal-muted hover:text-charcoal transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenus}
                className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-offwhite text-gold'
                    : 'text-charcoal-muted hover:bg-offwhite hover:text-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
