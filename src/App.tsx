import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import FAQPage from './pages/FAQPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<ContactPage />} />

          {/* Compliance — canonical + alias routes */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />

          {/* FAQ */}
          <Route path="/faqs" element={<FAQPage />} />

          {/* Checkout */}
          <Route path="/order-success" element={<OrderSuccessPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
