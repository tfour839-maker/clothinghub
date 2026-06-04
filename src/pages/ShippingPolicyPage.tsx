export default function ShippingPolicyPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <div className="bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Policy</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-2">Shipping & Delivery Policy</h1>
          <p className="text-muted mt-2">Last updated: 1st June 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal-muted text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">1. Shipping Coverage</h2>
            <p>
              CLOTHES HUB currently ships to all serviceable pin codes across India. We partner with leading logistics 
              providers to ensure safe and timely delivery of your orders. We do not offer international shipping at this time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">2. Shipping Charges</h2>
            <div className="mt-2">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-charcoal">Order Value</th>
                    <th className="text-left py-3 font-semibold text-charcoal">Shipping Charge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Orders above ₹999</td>
                    <td className="py-3 font-medium text-success">Free Shipping</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Orders below ₹999</td>
                    <td className="py-3">₹99 flat rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">3. Estimated Delivery Timelines</h2>
            <div className="mt-2">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-charcoal">Region</th>
                    <th className="text-left py-3 font-semibold text-charcoal">Estimated Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Metro Cities (Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad)</td>
                    <td className="py-3">3–5 business days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Tier 2 & Tier 3 Cities</td>
                    <td className="py-3">5–7 business days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Remote / Rural Areas</td>
                    <td className="py-3">7–10 business days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Northeast India & Islands (Andaman, Lakshadweep)</td>
                    <td className="py-3">10–14 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              * Business days exclude Sundays and public holidays. Delivery timelines are estimates and may vary due to 
              unforeseen circumstances such as weather conditions, natural disasters, or courier service disruptions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">4. Order Processing</h2>
            <p>
              Orders are typically processed and dispatched within <strong>1–2 business days</strong> of order confirmation and 
              successful payment. Orders placed after 5:00 PM IST or on weekends/holidays will be processed on the next 
              business day.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">5. Order Tracking</h2>
            <p>
              Once your order has been dispatched, you will receive a confirmation email with a tracking number
              and a link to track your shipment in real-time. You can also track your order by{' '}
              <a href="/login" className="text-gold hover:underline">logging into your account</a> on our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">6. Failed Delivery Attempts</h2>
            <p>
              Our logistics partners will make up to <strong>3 delivery attempts</strong>. If all attempts fail due to the 
              recipient being unavailable, the package will be returned to our warehouse. In such cases:
            </p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>We will contact you to arrange reshipment at an additional shipping charge.</li>
              <li>Alternatively, you may request a refund. The original shipping charges (if any) will be deducted from the refund amount.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">7. Shipping Damage</h2>
            <p>
              If your package arrives damaged, please do not accept the delivery. If the damage is noticed after accepting, 
              please contact us within <strong>48 hours</strong> at <strong>support@clothshub.online</strong> with photographs 
              of the damaged packaging and product. We will arrange a replacement or refund free of charge.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">8. Cash on Delivery (COD)</h2>
            <p>
              Cash on Delivery is available for select pin codes on orders up to ₹5,000. An additional COD handling fee 
              of ₹49 applies per order. COD availability is determined at checkout based on your delivery pin code.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">9. Contact Us</h2>
            <p>For any shipping or delivery-related queries:</p>
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
