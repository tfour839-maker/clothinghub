import { useState } from 'react';
import { X, Shield, Smartphone, CreditCard, Building2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RazorpayModal({ isOpen, onClose }: RazorpayModalProps) {
  const navigate = useNavigate();
  const { items, subtotal, shipping, tax, total, clearCart, closeCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [orderId] = useState(
    () => `#VC-2026-${Math.floor(1000 + Math.random() * 9000)}`
  );

  if (!isOpen) return null;

  const paymentMethods = [
    { id: 'upi', icon: Smartphone, label: 'UPI', desc: 'Google Pay, PhonePe, Paytm & more' },
    { id: 'card', icon: CreditCard, label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
    { id: 'netbanking', icon: Building2, label: 'Net Banking', desc: 'All major Indian banks' },
  ];

  const handleSimulatePayment = () => {
    const orderSnapshot = { orderId, items: [...items], subtotal, shipping, tax, total };
    clearCart();
    closeCart();
    onClose();
    navigate('/order-success', { state: orderSnapshot });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]" onClick={onClose} />

      <div className="fixed inset-0 flex items-center justify-center z-[110] p-4">
        <div
          className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Razorpay Header */}
          <div className="bg-[#072654] px-5 py-4 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="text-white font-black text-xl tracking-tight">razorpay</span>
                <span className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full mb-0.5" />
              </div>
              <p className="text-white/50 text-[11px] uppercase tracking-wider">Secure Payment Gateway</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Amount Band */}
          <div className="bg-[#0a2d6e] px-5 py-3.5 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-[11px] uppercase tracking-wider mb-0.5">CLOTHING HUB</p>
              <p className="text-white font-black text-2xl tracking-tight">
                ₹{total.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#2DD4BF] bg-white/10 px-2.5 py-1.5 rounded-full">
              <Shield size={10} />
              <span className="font-medium">SSL Secured</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="px-5 pt-5 pb-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Choose Payment Method
            </p>
            <div className="space-y-2">
              {paymentMethods.map(({ id, icon: Icon, label, desc }) => (
                <button
                  key={id}
                  onClick={() => setSelectedMethod(id)}
                  className={`w-full flex items-center gap-3 p-3 border rounded-xl transition-all text-left group ${
                    selectedMethod === id
                      ? 'border-[#072654] bg-[#072654]/5 ring-1 ring-[#072654]/20'
                      : 'border-gray-100 hover:border-[#072654]/30 hover:bg-gray-50/50'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      selectedMethod === id ? 'bg-[#072654]/10' : 'bg-gray-100 group-hover:bg-[#072654]/5'
                    }`}
                  >
                    <Icon size={17} className={selectedMethod === id ? 'text-[#072654]' : 'text-gray-500'} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${selectedMethod === id ? 'text-[#072654]' : 'text-gray-800'}`}>
                      {label}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{desc}</p>
                  </div>
                  <ChevronRight size={15} className={selectedMethod === id ? 'text-[#072654]' : 'text-gray-300'} />
                </button>
              ))}
            </div>
          </div>

          {/* Simulate Payment */}
          <div className="px-5 pt-4 pb-5">
            <div className="relative flex items-center mb-4">
              <div className="flex-1 border-t border-gray-100" />
              <span className="mx-3 text-[10px] text-gray-300 font-medium uppercase tracking-widest whitespace-nowrap">
                Test Mode
              </span>
              <div className="flex-1 border-t border-gray-100" />
            </div>

            <button
              onClick={handleSimulatePayment}
              className="w-full bg-[#072654] hover:bg-[#0a2d6e] active:scale-[0.98] text-white font-bold py-3.5 rounded-xl transition-all text-sm tracking-wide shadow-lg shadow-[#072654]/20"
            >
              Simulate Successful Payment
            </button>

            <div className="flex items-center justify-center gap-1.5 mt-4">
              <Shield size={11} className="text-gray-300" />
              <span className="text-[10px] text-gray-300">
                Secured by Razorpay · PCI DSS Level 1 Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
