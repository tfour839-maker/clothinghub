import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQPage() {
  return (
    <main className="pt-20 lg:pt-24">

      {/* ── Hero ── */}
      <div className="bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Help Center</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-muted mt-2 max-w-xl leading-relaxed">
            Everything you need to know about orders, payments, shipping, and returns at CLOTHES HUB
            Can't find your answer? Our team is one message away.
          </p>
        </div>
      </div>

      {/* ── FAQ Accordion ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <FAQAccordion />
      </div>

      {/* ── Still have questions CTA ── */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="bg-offwhite rounded-3xl border border-border p-8 lg:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <MessageSquare size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                Didn't find your answer?
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Our dedicated support team is available Monday to Saturday, 10:00 AM – 7:00 PM IST.
                We respond to every query within 24 business hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact-us"
                  className="bg-charcoal text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-charcoal-light transition-colors btn-premium flex items-center justify-center gap-2 group"
                >
                  Contact Support
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:support@clothshub.online"
                  className="border border-border text-charcoal font-semibold px-8 py-3.5 rounded-xl hover:bg-white hover:border-gold/40 transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={16} className="text-gold" />
                  support@clothshub.online
                </a>
              </div>

              {/* Quick contact info strip */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted">
                <a
                  href="tel:+919813562070"
                  className="flex items-center gap-2 hover:text-charcoal transition-colors"
                >
                  <Phone size={15} className="text-gold" />
                  +91 98135 62070
                </a>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  Mon – Sat, 10 AM – 7 PM IST
                </span>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <Link
                  to="/refund-policy"
                  className="hover:text-charcoal transition-colors"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
