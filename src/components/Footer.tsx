import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  function handleSubscribe() {
    if (!newsletterEmail.trim()) return;
    window.location.href = `mailto:support@clothinghub.com?subject=Newsletter Subscription&body=Please add me to the Clothing Hub newsletter.%0A%0AEmail: ${encodeURIComponent(newsletterEmail)}`;
    setNewsletterDone(true);
    setNewsletterEmail('');
  }

  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-2">Join the Clothing Hub Community</h3>
              <p className="text-white/60 text-sm">Subscribe for exclusive offers, early access to new arrivals, and style inspiration delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              {newsletterDone ? (
                <p className="text-sm text-gold font-medium py-3">Thank you for subscribing!</p>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={e => setNewsletterEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                    className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-sm w-full lg:w-72 outline-none focus:border-gold transition-colors placeholder:text-white/40"
                    id="newsletter-email"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-6 py-3 rounded-r-lg text-sm transition-colors whitespace-nowrap btn-premium"
                  >
                    Subscribe
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Clothing Hub</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Clothing Hub is a premium fashion brand dedicated to curating modern essentials for the contemporary individual. We believe in quality craftsmanship, sustainable practices, and timeless style.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>Clothing Hub Pvt. Ltd., 102, Fashion Enclave, Manesar, Gurugram, Haryana — 122508, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                <span>support@clothinghub.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop All', path: '/shop' },
                { name: 'Men', path: '/shop?category=men' },
                { name: 'Women', path: '/shop?category=women' },
                { name: 'Accessories', path: '/shop?category=accessories' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-gold text-sm transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal / Compliance */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Legal & Policies</h4>
            <ul className="space-y-3">
              {[
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Refund & Cancellation Policy', path: '/refund-policy' },
                { name: 'Shipping & Delivery Policy', path: '/shipping-policy' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-gold text-sm transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact & Support</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-gold" />
                <span>+91 98135 62070</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-gold" />
                <span>support@clothinghub.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 text-gold mt-1" />
                <span>102, Fashion Enclave, Manesar, Gurugram, Haryana — 122508, India</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-white/40 mb-2">Customer support available</p>
              <p className="text-sm text-white/70 font-medium">Mon–Sat, 10:00 AM – 7:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Clothing Hub Pvt. Ltd. All rights reserved. GSTIN: 06GFWPB8226N1ZP
            </p>

            {/* Payment Badges */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-white/30 uppercase tracking-wider mr-1">We Accept</span>
              {['Visa', 'Mastercard', 'UPI', 'Razorpay'].map(badge => (
                <span
                  key={badge}
                  className="bg-white/10 text-white/60 text-[10px] font-semibold px-2.5 py-1 rounded border border-white/10"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
