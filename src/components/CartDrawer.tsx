import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import RazorpayModal from './RazorpayModal';

export default function CartDrawer() {
  const [showRazorpay, setShowRazorpay] = useState(false);
  const {
    items, isCartOpen, closeCart,
    updateQuantity, removeFromCart,
    totalItems, subtotal, shipping, tax, total,
  } = useCart();

  return (
    <>
      <RazorpayModal isOpen={showRazorpay} onClose={() => setShowRazorpay(false)} />

      {isCartOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
            onClick={closeCart}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl animate-slide-in-right flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-charcoal" />
                <h2 className="font-display text-lg font-semibold">Your Cart</h2>
                <span className="bg-gold text-charcoal text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-offwhite rounded-lg transition-colors"
                id="close-cart"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <ShoppingBag size={48} className="text-border mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-sm text-muted mb-6">Looks like you haven't added anything to your cart yet. Explore our collection and find something you love.</p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="bg-charcoal text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-charcoal-light transition-colors btn-premium"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4 py-3 border-b border-border last:border-0 animate-fade-in">
                      <div className="w-20 h-24 rounded-lg overflow-hidden bg-offwhite shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-charcoal truncate">{item.product.name}</h4>
                        <p className="text-xs text-muted mt-0.5">Size: {item.size} &middot; {item.color}</p>
                        <p className="text-sm font-semibold text-charcoal mt-1">₹{item.product.price.toLocaleString('en-IN')}</p>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-offwhite transition-colors rounded-l-lg"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm font-medium min-w-[32px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-offwhite transition-colors rounded-r-lg"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1.5 text-muted hover:text-error transition-colors"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Order Summary */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4 bg-offwhite/50 space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-success font-medium' : ''}>
                      {shipping === 0 ? 'Free' : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-charcoal-muted">
                    <span>GST (18%)</span>
                    <span>₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-charcoal font-semibold text-base pt-2 border-t border-border">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-muted text-center">
                    Add ₹{(999 - subtotal).toLocaleString('en-IN')} more for free shipping
                  </p>
                )}

                <button
                  onClick={() => setShowRazorpay(true)}
                  className="w-full bg-charcoal text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors btn-premium group"
                  id="proceed-to-pay"
                >
                  Proceed to Pay via Razorpay
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-muted">
                  <ShieldCheck size={14} className="text-success" />
                  <span>Secure checkout powered by Razorpay</span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
