import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle, ShieldCheck } from 'lucide-react';

type Tab = 'login' | 'register';

function FieldError({ message }: { message: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1.5 text-xs text-error mt-1.5">
      <AlertCircle size={12} className="shrink-0" />
      {message}
    </p>
  );
}

export default function LoginPage() {
  const [tab, setTab] = useState<Tab>('login');
  const [showPassword, setShowPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({ email: '', password: '' });

  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '' });
  const [registerErrors, setRegisterErrors] = useState({ name: '', email: '', password: '' });

  const [submitted, setSubmitted] = useState(false);

  function validateEmail(v: string) {
    if (!v.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address.';
    return '';
  }
  function validatePassword(v: string) {
    if (!v) return 'Password is required.';
    if (v.length < 6) return 'Password must be at least 6 characters.';
    return '';
  }
  function validateName(v: string) {
    if (!v.trim()) return 'Full name is required.';
    if (v.trim().length < 2) return 'Name must be at least 2 characters.';
    return '';
  }

  const inputClass = (hasError: boolean) =>
    `w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm outline-none transition-all duration-150 bg-white placeholder:text-muted ${
      hasError
        ? 'border-error/60 focus:border-error ring-1 ring-error/20 bg-red-50/30'
        : 'border-border focus:border-gold focus:ring-1 focus:ring-gold/20'
    }`;

  function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailErr = validateEmail(loginForm.email);
    const passwordErr = validatePassword(loginForm.password);
    setLoginErrors({ email: emailErr, password: passwordErr });
    if (emailErr || passwordErr) return;
    setSubmitted(true);
  }

  function handleRegisterSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nameErr = validateName(registerForm.name);
    const emailErr = validateEmail(registerForm.email);
    const passwordErr = validatePassword(registerForm.password);
    setRegisterErrors({ name: nameErr, email: emailErr, password: passwordErr });
    if (nameErr || emailErr || passwordErr) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="pt-20 lg:pt-24 min-h-screen bg-offwhite flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-8 max-w-sm w-full text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={32} className="text-gold" />
          </div>
          <h2 className="font-display text-xl font-bold text-charcoal mb-2">
            {tab === 'login' ? 'Welcome Back!' : 'Account Created!'}
          </h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            {tab === 'login'
              ? 'You have successfully signed in to your CLOTHES HUB account.'
              : 'Your account has been created. You can now track orders and manage your profile.'}
          </p>
          <Link
            to="/shop"
            className="block w-full bg-charcoal text-white font-semibold py-3 rounded-xl hover:bg-charcoal-light transition-colors btn-premium text-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 lg:pt-24 min-h-screen bg-offwhite flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-2xl font-semibold text-charcoal hover:text-gold transition-colors">
            CLOTHES HUB
          </Link>
          <p className="text-sm text-muted mt-2">
            {tab === 'login' ? 'Sign in to track orders and manage your profile' : 'Create an account to get started'}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">

          {/* Tabs */}
          <div className="grid grid-cols-2 border-b border-border">
            {(['login', 'register'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => { setTab(t); setSubmitted(false); }}
                className={`py-3.5 text-sm font-semibold transition-colors ${
                  tab === t
                    ? 'text-charcoal border-b-2 border-gold bg-white'
                    : 'text-muted hover:text-charcoal bg-offwhite/60'
                }`}
              >
                {t === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          <div className="p-7">

            {/* Login Form */}
            {tab === 'login' && (
              <form onSubmit={handleLoginSubmit} noValidate className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Email Address <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={loginForm.email}
                      onChange={e => setLoginForm(p => ({ ...p, email: e.target.value }))}
                      className={inputClass(!!loginErrors.email)}
                    />
                  </div>
                  <FieldError message={loginErrors.email} />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium text-charcoal">
                      Password <span className="text-error">*</span>
                    </label>
                    <button type="button" className="text-xs text-gold hover:underline">
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={e => setLoginForm(p => ({ ...p, password: e.target.value }))}
                      className={`${inputClass(!!loginErrors.password)} pr-10`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(p => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <FieldError message={loginErrors.password} />
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-white font-semibold py-3 rounded-xl hover:bg-charcoal-light transition-colors btn-premium text-sm mt-2"
                >
                  Sign In
                </button>
              </form>
            )}

            {/* Register Form */}
            {tab === 'register' && (
              <form onSubmit={handleRegisterSubmit} noValidate className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Full Name <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={registerForm.name}
                      onChange={e => setRegisterForm(p => ({ ...p, name: e.target.value }))}
                      className={inputClass(!!registerErrors.name)}
                    />
                  </div>
                  <FieldError message={registerErrors.name} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Email Address <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={registerForm.email}
                      onChange={e => setRegisterForm(p => ({ ...p, email: e.target.value }))}
                      className={inputClass(!!registerErrors.email)}
                    />
                  </div>
                  <FieldError message={registerErrors.email} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Password <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Minimum 6 characters"
                      value={registerForm.password}
                      onChange={e => setRegisterForm(p => ({ ...p, password: e.target.value }))}
                      className={`${inputClass(!!registerErrors.password)} pr-10`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(p => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <FieldError message={registerErrors.password} />
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-white font-semibold py-3 rounded-xl hover:bg-charcoal-light transition-colors btn-premium text-sm mt-2"
                >
                  Create Account
                </button>
              </form>
            )}

            {/* Trust */}
            <div className="flex items-center gap-2 mt-5 pt-5 border-t border-border">
              <ShieldCheck size={14} className="text-success shrink-0" />
              <p className="text-xs text-muted">
                Your data is secure. Payments processed by Razorpay — PCI DSS Level 1.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-6">
          By continuing you agree to our{' '}
          <Link to="/terms" className="text-gold hover:underline">Terms & Conditions</Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
