import { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock,
  CheckCircle, X, AlertCircle, ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';

// ─── helpers ────────────────────────────────────────────────────────────────

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

type ValidatedField = 'name' | 'email' | 'message';

function getFieldError(field: ValidatedField, value: string): string {
  if (field === 'name') {
    if (!value.trim()) return 'Full name is required.';
    if (value.trim().length < 2) return 'Name must be at least 2 characters.';
  }
  if (field === 'email') {
    if (!value.trim()) return 'Email address is required.';
    if (!isValidEmail(value)) return 'Please enter a valid email address.';
  }
  if (field === 'message') {
    if (!value.trim()) return 'Message is required.';
    if (value.trim().length < 10) return 'Message must be at least 10 characters long.';
  }
  return '';
}

// ─── sub-components ─────────────────────────────────────────────────────────

function SuccessToast({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] animate-fade-in w-[calc(100%-2rem)] max-w-sm">
      <div className="flex items-start gap-3.5 bg-charcoal text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/10">
        <div className="w-9 h-9 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
          <CheckCircle size={18} className="text-green-400" />
        </div>
        <div className="flex-1 pt-0.5">
          <p className="text-sm font-semibold">Message Sent Successfully!</p>
          <p className="text-xs text-white/55 mt-0.5 leading-relaxed">
            Thank you! Our support team will respond within 24 hours.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-white/30 hover:text-white/80 transition-colors mt-0.5"
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

function FieldError({ message }: { message: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1.5 text-xs text-error mt-2">
      <AlertCircle size={12} className="shrink-0" />
      {message}
    </p>
  );
}

function InputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 border rounded-xl text-sm outline-none transition-all duration-150 bg-white placeholder:text-muted ${
    hasError
      ? 'border-error/60 focus:border-error ring-1 ring-error/20 bg-red-50/30'
      : 'border-border focus:border-gold focus:ring-1 focus:ring-gold/20'
  }`;
}

// ─── credential card data ────────────────────────────────────────────────────

const credentials = [
  {
    icon: Mail,
    label: 'Customer Support Email',
    content: (
      <a
        href="mailto:support@clothshub.online"
        className="text-charcoal font-semibold text-sm hover:text-gold transition-colors flex items-center gap-1.5 group"
      >
        support@clothshub.online
        <ExternalLink size={12} className="text-muted group-hover:text-gold transition-colors" />
      </a>
    ),
    sub: 'Responses within 24 hours — available every day',
  },
  {
    icon: Phone,
    label: 'Dedicated Support Helpline',
    content: (
      <a
        href="tel:+919813562070"
        className="text-charcoal font-semibold text-sm hover:text-gold transition-colors flex items-center gap-1.5 group"
      >
        +91 98135 62070
        <ExternalLink size={12} className="text-muted group-hover:text-gold transition-colors" />
      </a>
    ),
    sub: 'Monday – Saturday, 10:00 AM – 7:00 PM IST',
  },
  {
    icon: MapPin,
    label: 'Physical Operating Address',
    content: (
      <address className="not-italic text-charcoal font-semibold text-sm leading-relaxed">
        CLOTHS HUB Pvt. Ltd.<br />
        238, Hodal Punhana Road<br />
        Punahana, Nuh, Haryana — 122508, India<br />
        GSTIN: 06GFWPB8226N1ZP
      </address>
    ),
    sub: '',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    content: (
      <p className="text-charcoal font-semibold text-sm leading-relaxed">
        Monday to Saturday<br />
        10:00 AM – 7:00 PM IST
      </p>
    ),
    sub: 'Sunday & public holidays: Closed',
  },
];

// ─── main page ───────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', orderId: '', message: '' });
  const [errors, setErrors] = useState<Record<ValidatedField, string>>({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<Record<ValidatedField, boolean>>({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (field !== 'orderId' && touched[field as ValidatedField]) {
      setErrors(prev => ({ ...prev, [field]: getFieldError(field as ValidatedField, value) }));
    }
  };

  const handleBlur = (field: ValidatedField) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: getFieldError(field, form[field]) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = getFieldError('name', form.name);
    const emailErr = getFieldError('email', form.email);
    const messageErr = getFieldError('message', form.message);

    setErrors({ name: nameErr, email: emailErr, message: messageErr });
    setTouched({ name: true, email: true, message: true });

    if (nameErr || emailErr || messageErr) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      form.orderId ? `Support Request — Order ${form.orderId}` : `Support Request from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}${form.orderId ? `\nOrder ID: ${form.orderId}` : ''}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:support@clothshub.online?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setForm({ name: '', email: '', orderId: '', message: '' });
    setTouched({ name: false, email: false, message: false });
    setErrors({ name: '', email: '', message: '' });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5500);
  };

  return (
    <main className="pt-20 lg:pt-24">
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}

      {/* ── Hero ── */}
      <div className="bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Get in Touch</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-2">Contact Us</h1>
          <p className="text-muted mt-2 max-w-xl leading-relaxed">
            We're here to help with your orders, returns, or any product queries. Our team responds within 24 business hours.
          </p>
        </div>
      </div>

      {/* ── Main two-column grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Left: Business Credentials ── */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-charcoal mb-2">
              Official Support &amp; Corporate Office
            </h2>
            <p className="text-sm text-muted mb-8 leading-relaxed">
              All support is handled directly by CLOTHS HUB Pvt. Ltd. We are a registered Indian business
              committed to transparent customer service.
            </p>

            <div className="space-y-3">
              {credentials.map(({ icon: Icon, label, content, sub }) => (
                <div
                  key={label}
                  className="flex gap-4 p-5 rounded-2xl bg-offwhite border border-border hover:border-gold/40 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon size={19} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-muted uppercase tracking-widest mb-1.5">
                      {label}
                    </p>
                    {content}
                    <p className="text-xs text-muted mt-1">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-6 flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-border bg-offwhite/50">
              <div className="w-8 h-8 bg-[#072654]/8 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-[#072654] font-black text-[10px] leading-none">R</span>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Payments are secured by <strong className="text-charcoal">Razorpay</strong> — PCI DSS Level 1 Certified.
                We do not store card or banking details on our servers.
              </p>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="bg-white border border-border rounded-3xl p-7 lg:p-8 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-charcoal mb-1">Send Us a Message</h2>
            <p className="text-sm text-muted mb-7 leading-relaxed">
              Fill in the form and a member of our support team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Full Name */}
              <div>
                <label htmlFor="f-name" className="block text-sm font-medium text-charcoal mb-1.5">
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  id="f-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="e.g. Rahul Sharma"
                  className={InputClass(!!(errors.name && touched.name))}
                />
                <FieldError message={touched.name ? errors.name : ''} />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="f-email" className="block text-sm font-medium text-charcoal mb-1.5">
                  Email Address <span className="text-error">*</span>
                </label>
                <input
                  id="f-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="your@email.com"
                  className={InputClass(!!(errors.email && touched.email))}
                />
                <FieldError message={touched.email ? errors.email : ''} />
              </div>

              {/* Order ID (Optional) */}
              <div>
                <label htmlFor="f-orderid" className="block text-sm font-medium text-charcoal mb-1.5">
                  Order ID{' '}
                  <span className="text-muted font-normal text-xs">(Optional — helps us resolve your query faster)</span>
                </label>
                <input
                  id="f-orderid"
                  type="text"
                  value={form.orderId}
                  onChange={e => handleChange('orderId', e.target.value)}
                  placeholder="e.g. #CH-2026-8941"
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all bg-white placeholder:text-muted"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="f-message" className="block text-sm font-medium text-charcoal">
                    Message <span className="text-error">*</span>
                  </label>
                  <span className={`text-xs transition-colors ${form.message.length > 0 ? 'text-muted' : 'text-transparent'}`}>
                    {form.message.length} chars
                  </span>
                </div>
                <textarea
                  id="f-message"
                  rows={5}
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Describe your query in detail — include product name, order ID, or issue..."
                  className={`${InputClass(!!(errors.message && touched.message))} resize-none`}
                />
                <FieldError message={touched.message ? errors.message : ''} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-charcoal text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors btn-premium disabled:opacity-60 disabled:cursor-not-allowed group mt-1"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-xs text-muted text-center pt-1">
                By submitting you agree to our{' '}
                <Link to="/privacy-policy" className="text-gold hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ── FAQ Preview ── */}
      <div className="bg-offwhite border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Help Center</span>
              <h2 className="font-display text-2xl font-bold text-charcoal mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted mt-1">Quick answers to our most common customer queries.</p>
            </div>
            <Link
              to="/faqs"
              className="text-sm font-semibold text-charcoal hover:text-gold transition-colors flex items-center gap-1.5 shrink-0"
            >
              View all FAQs
              <ArrowRight size={14} />
            </Link>
          </div>

          <FAQAccordion limit={3} />
        </div>
      </div>
    </main>
  );
}
