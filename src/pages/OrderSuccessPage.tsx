import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Mail, Truck } from 'lucide-react';
import type { CartItem } from '../context/CartContext';

interface OrderState {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export default function OrderSuccessPage() {
  const location = useLocation();
  const state = location.state as OrderState | null;

  if (!state) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-offwhite">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-charcoal mb-3">No order found</h1>
          <p className="text-muted text-sm mb-6">This page is only accessible after completing a purchase.</p>
          <Link to="/shop" className="bg-charcoal text-white font-semibold px-6 py-3 rounded-xl hover:bg-charcoal-light transition-colors btn-premium">
            Browse the Shop
          </Link>
        </div>
      </main>
    );
  }

  const { orderId, items, subtotal, shipping, tax, total } = state;
  const orderDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
  const estimatedDelivery = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <main className="pt-20 lg:pt-24 min-h-screen bg-offwhite">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Success Hero */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={46} className="text-green-500" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Thank You for Your Purchase!
          </h1>
          <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
            Your order has been placed and payment received. Our team will process and ship your order within 24–48 hours.
          </p>
        </div>

        {/* Order ID Card */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 mb-5">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[11px] text-muted uppercase tracking-widest mb-1.5">Order ID</p>
              <p className="font-display text-2xl font-black text-charcoal tracking-tight">{orderId}</p>
            </div>
            <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full border border-green-100">
              Payment Successful
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-offwhite rounded-lg flex items-center justify-center shrink-0">
                <Package size={15} className="text-charcoal" />
              </div>
              <div>
                <p className="text-[11px] text-muted uppercase tracking-wider mb-0.5">Order Date</p>
                <p className="text-sm font-semibold text-charcoal">{orderDate}</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-offwhite rounded-lg flex items-center justify-center shrink-0">
                <Truck size={15} className="text-charcoal" />
              </div>
              <div>
                <p className="text-[11px] text-muted uppercase tracking-wider mb-0.5">Est. Delivery</p>
                <p className="text-sm font-semibold text-charcoal">{estimatedDelivery}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Itemized Receipt */}
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-5">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
            <Package size={17} className="text-charcoal" />
            <h2 className="font-display text-base font-semibold text-charcoal">Itemized Receipt</h2>
            <span className="ml-auto text-xs text-muted">{items.length} item{items.length !== 1 ? 's' : ''}</span>
          </div>

          <div className="divide-y divide-border">
            {items.map(item => (
              <div key={item.product.id} className="flex items-center gap-4 px-6 py-4">
                <div className="w-14 h-16 rounded-xl overflow-hidden bg-offwhite shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-charcoal truncate">{item.product.name}</p>
                  <p className="text-xs text-muted mt-0.5">
                    Size: {item.size} &middot; {item.color} &middot; Qty: {item.quantity}
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    ₹{item.product.price.toLocaleString('en-IN')} &times; {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-bold text-charcoal shrink-0">
                  ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="px-6 py-4 bg-offwhite/60 border-t border-border space-y-2.5">
            <div className="flex justify-between text-sm text-charcoal-muted">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm text-charcoal-muted">
              <span>Shipping</span>
              <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                {shipping === 0 ? 'Free' : `₹${shipping}`}
              </span>
            </div>
            <div className="flex justify-between text-sm text-charcoal-muted">
              <span>GST (18%)</span>
              <span>₹{tax.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-base font-black text-charcoal pt-2.5 border-t border-border">
              <span>Total Paid</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Mail size={17} className="text-charcoal" />
            <h3 className="font-display text-base font-semibold text-charcoal">What Happens Next?</h3>
          </div>
          <ol className="space-y-3">
            {[
              'Your order is confirmed and being prepared by our team.',
              'Our team will process and pack your order within 24–48 hours.',
              'Once shipped, a tracking link will be sent to your registered email.',
              'Estimated delivery across India is 3–5 business days.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-charcoal-muted leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-gold/15 text-gold text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/shop"
            className="flex-1 bg-charcoal text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors btn-premium group"
          >
            Continue Shopping
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/"
            className="flex-1 border border-border text-charcoal font-semibold py-3.5 rounded-xl flex items-center justify-center hover:bg-offwhite transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
