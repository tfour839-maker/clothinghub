export default function RefundPolicyPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <div className="bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Policy</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-2">Refund & Cancellation Policy</h1>
          <p className="text-muted mt-2">Last updated: 1st June 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal-muted text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">1. Return Policy Overview</h2>
            <p>
              At CLOTHS HUB, we want you to be completely satisfied with your purchase. If you are not happy with your 
              order, we offer a <strong>7-day return policy</strong> from the date of delivery. You may request a return 
              or exchange within 7 calendar days of receiving your order.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">2. Eligibility for Returns</h2>
            <p>To be eligible for a return, the following conditions must be met:</p>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li>The item must be unused, unwashed, and in its original condition with all tags attached.</li>
              <li>The item must be in its original packaging, including any dust bags, boxes, or protective covers.</li>
              <li>The return request must be initiated within 7 days of delivery.</li>
              <li>Proof of purchase (order confirmation email or invoice) is required.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">3. Non-Returnable Items</h2>
            <p>The following items are not eligible for returns or exchanges:</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Innerwear, lingerie, and swimwear (for hygiene reasons).</li>
              <li>Items purchased during final clearance sales or marked as "Non-Returnable".</li>
              <li>Personalised or customised items.</li>
              <li>Gift cards and vouchers.</li>
              <li>Items showing signs of wear, alteration, washing, or damage caused by the customer.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">4. How to Initiate a Return</h2>
            <p>To initiate a return, please follow these steps:</p>
            <ol className="mt-2 space-y-2 list-decimal pl-5">
              <li>Email our support team at <strong>support@clothshub.online</strong> with your order number, the item(s) you wish to return, and the reason for the return.</li>
              <li>Our team will review your request and respond within 24–48 hours with a return authorisation and instructions.</li>
              <li>Pack the item(s) securely in the original packaging and ship them to the return address provided.</li>
              <li>Once we receive and inspect the returned item(s), we will process your refund or exchange.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">5. Refund Process</h2>
            <p>Once your return is approved and received at our warehouse:</p>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li>Refunds will be processed within <strong>5–7 business days</strong> from the date of receiving the returned item(s).</li>
              <li>Refunds will be credited to the <strong>original payment method</strong> used at the time of purchase.</li>
              <li>For credit/debit card payments, it may take an additional 5–10 business days for the refund to reflect in your bank statement, depending on your bank.</li>
              <li>For UPI and wallet payments, refunds typically reflect within 3–5 business days.</li>
              <li>Shipping charges paid at the time of purchase are <strong>non-refundable</strong>, unless the return is due to a defect or error on our part.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">6. Order Cancellation</h2>
            <p>
              You may cancel your order free of charge, provided it has <strong>not yet been shipped</strong>. To cancel an order:
            </p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Contact us at <strong>support@clothshub.online</strong> or call <strong>+91 98135 62070</strong> as soon as possible after placing the order.</li>
              <li>If the order has already been dispatched, you will need to wait for delivery and then initiate a return as per our return policy.</li>
              <li>Cancellation refunds are processed within <strong>3–5 business days</strong> to the original payment method.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">7. Exchanges</h2>
            <p>
              We offer exchanges for size or colour on eligible items. Exchange requests follow the same process as returns. 
              If the desired size or colour is unavailable, a full refund will be issued instead. Exchange shipments are 
              dispatched within 2–3 business days after receiving the original item.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">8. Damaged or Defective Items</h2>
            <p>
              If you receive a damaged, defective, or incorrect item, please contact us within <strong>48 hours of delivery</strong> 
              with photographs of the item and packaging. We will arrange a free return pickup and provide a full refund or 
              replacement at no additional cost.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">9. Contact Us</h2>
            <p>For any return, refund, or cancellation inquiries:</p>
            <ul className="mt-2 space-y-1">
              <li><strong>Email:</strong> support@clothshub.online</li>
              <li><strong>Phone:</strong> +91 98135 62070</li>
              <li><strong>Address:</strong> 238, Hodal Punhana Road, Punahana, Nuh, Haryana — 122508, India</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
