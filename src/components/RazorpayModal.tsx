import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

declare global {
  interface Window { Razorpay: any; }
}

// Replace with your live key before going live: rzp_live_XXXXXXXXXX
const RAZORPAY_KEY = 'rzp_test_YOUR_KEY_HERE';

function loadRazorpayScript(): Promise<boolean> {
  return new Promise(resolve => {
    if (window.Razorpay) { resolve(true); return; }
    const existing = document.getElementById('rzp-checkout-script');
    if (existing) {
      existing.addEventListener('load', () => resolve(true));
      return;
    }
    const script = document.createElement('script');
    script.id = 'rzp-checkout-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RazorpayModal({ isOpen, onClose }: RazorpayModalProps) {
  const navigate = useNavigate();
  const { items, subtotal, shipping, tax, total, clearCart, closeCart } = useCart();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const hasOpened = useRef(false);

  const orderIdRef = useRef(`#CH-2026-${Math.floor(1000 + Math.random() * 9000)}`);

  useEffect(() => {
    if (!isOpen || hasOpened.current) return;
    hasOpened.current = true;

    setStatus('loading');

    loadRazorpayScript().then(loaded => {
      if (!loaded) {
        setStatus('error');
        setErrorMsg('Payment gateway could not be loaded. Please check your internet connection and try again.');
        return;
      }

      const orderId = orderIdRef.current;
      const orderSnapshot = { orderId, items: [...items], subtotal, shipping, tax, total };

      const options = {
        key: RAZORPAY_KEY,
        amount: total * 100,
        currency: 'INR',
        name: 'Clothing Hub',
        description: `Order ${orderId}`,
        handler: (response: { razorpay_payment_id: string }) => {
          clearCart();
          closeCart();
          onClose();
          navigate('/order-success', {
            state: { ...orderSnapshot, paymentId: response.razorpay_payment_id },
          });
        },
        prefill: { name: '', email: '', contact: '' },
        notes: { order_id: orderId },
        theme: { color: '#072654' },
        modal: {
          ondismiss: () => {
            hasOpened.current = false;
            setStatus('idle');
            onClose();
          },
        },
      };

      setStatus('idle');
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => {
        setStatus('error');
        setErrorMsg('Payment failed. Please try a different payment method or contact your bank.');
      });
      rzp.open();
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      hasOpened.current = false;
      setStatus('idle');
      setErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  if (status === 'loading') {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="w-10 h-10 border-4 border-[#072654] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-semibold text-charcoal">Loading secure payment gateway…</p>
          <p className="text-xs text-muted mt-1.5">Powered by Razorpay · PCI DSS Level 1</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center max-w-xs w-full shadow-2xl">
          <p className="text-sm font-semibold text-charcoal mb-2">Payment Unsuccessful</p>
          <p className="text-xs text-muted mb-6 leading-relaxed">{errorMsg}</p>
          <button
            onClick={() => { hasOpened.current = false; setStatus('idle'); onClose(); }}
            className="bg-charcoal text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-charcoal-light transition-colors w-full"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return null;
}
