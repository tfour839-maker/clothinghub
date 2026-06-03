import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How can I track my order?',
    a: 'Once your order is shipped, a tracking link from our delivery partner (Delhivery / BlueDart) will be sent to your registered email address and phone number. You can use this link to monitor your shipment status in real-time. Tracking typically activates within 24 hours of dispatch.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major Credit / Debit Cards (Visa, Mastercard, RuPay), Net Banking across all major Indian banks, Mobile Wallets (Paytm, PhonePe, Amazon Pay), and UPI transactions — all securely processed via our authorised payment partner, Razorpay. Your card details are never stored on our servers.',
  },
  {
    q: 'How do I initiate a return or exchange?',
    a: 'You can initiate a return within 7 days of delivery by emailing support@clothinghub.com with your Order ID and reason for return. Our team will respond within 24–48 hours with a return authorisation and free pickup instructions. Refunds are processed within 5–7 business days to the original payment method.',
  },
  {
    q: 'What is the estimated delivery time?',
    a: 'Orders are processed and dispatched within 24–48 hours of confirmation. Estimated delivery time across India is 3–5 business days for metro cities and 5–7 business days for Tier 2 / Tier 3 cities. Tracking updates will be shared via email at every stage of delivery.',
  },
  {
    q: 'Is my payment information secure?',
    a: 'Absolutely. All payments are processed exclusively by Razorpay, which holds PCI DSS Level 1 compliance — the highest certification standard in the payments industry. Clothing Hub does not store, access, or log any card or banking credentials. All transactions are protected by 256-bit SSL encryption.',
  },
  {
    q: 'Can I modify or cancel my order after it is placed?',
    a: 'Order modifications or cancellations are possible only before the order is dispatched from our warehouse, typically within 12 hours of placement. Please contact our support team immediately at support@clothinghub.com or call +91 98135 62070 to request a change. Once dispatched, please follow our standard return process.',
  },
];

interface FAQAccordionProps {
  limit?: number;
}

export default function FAQAccordion({ limit }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const visibleFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="space-y-3">
      {visibleFaqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen
                ? 'border-gold/50 shadow-sm shadow-gold/10'
                : 'border-border bg-white hover:border-warm-gray'
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span
                className={`text-sm font-semibold pr-6 leading-snug transition-colors ${
                  isOpen ? 'text-charcoal' : 'text-charcoal-muted'
                }`}
              >
                {faq.q}
              </span>
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                  isOpen
                    ? 'bg-gold text-white rotate-180'
                    : 'bg-offwhite text-charcoal-muted'
                }`}
              >
                <ChevronDown size={16} />
              </div>
            </button>

            {/* CSS grid trick for smooth height animation */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pt-0 pb-5 text-sm text-charcoal-muted leading-relaxed border-t border-border/60">
                  <span className="block pt-4">{faq.a}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
