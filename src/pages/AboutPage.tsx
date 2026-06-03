import { Heart, Award, Leaf, Users } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Quality First', desc: 'Every piece undergoes rigorous quality checks to ensure it meets our exacting standards. We source only the finest fabrics and materials.' },
  { icon: Award, title: 'Timeless Design', desc: 'Our design philosophy focuses on creating pieces that transcend seasonal trends, offering enduring style season after season.' },
  { icon: Leaf, title: 'Sustainable Practices', desc: 'We are committed to reducing our environmental footprint through responsible sourcing, ethical manufacturing, and sustainable packaging.' },
  { icon: Users, title: 'Community Driven', desc: 'We believe in building a community that values conscious consumption and supports artisans and craftspeople across India.' },
];

export default function AboutPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop"
            alt="About Clothing Hub — Our story and values"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-[3px]">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">About Clothing Hub</h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-6">Redefining Modern Fashion</h2>
          <p className="text-charcoal-muted leading-relaxed text-base">
            Founded in Gurugram in 2024, Clothing Hub was born from a passion for bridging the gap between high fashion and everyday wearability. 
            We believe that premium clothing should be accessible, sustainable, and designed to make you feel confident in every moment.
          </p>
          <p className="text-charcoal-muted leading-relaxed text-base mt-4">
            Our team of designers and sourcing experts work closely with skilled artisans across India to create collections that honour traditional craftsmanship 
            while embracing contemporary aesthetics. From the organic cotton fields of Gujarat to the silk looms of Varanasi, every Clothing Hub piece carries a story of dedication and artistry.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-offwhite border border-border hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Details */}
      <section className="bg-offwhite border-t border-border py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Company Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-charcoal-muted">
            <div>
              <p className="font-medium text-charcoal">Registered Name</p>
              <p>Clothing Hub Pvt. Ltd.</p>
            </div>
            <div>
              <p className="font-medium text-charcoal">CIN / GSTIN</p>
              <p>U74999HR2024PTC123456 / 06GFWPB8226N1ZP</p>
            </div>
            <div>
              <p className="font-medium text-charcoal">Registered Address</p>
              <p>102, Fashion Enclave, Sector 43, Gurugram, Haryana — 122508, India</p>
            </div>
            <div>
              <p className="font-medium text-charcoal">Contact</p>
              <p>Email: Tfour839@gmail.com</p>
              <p>Phone: +91 98135 62070</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
