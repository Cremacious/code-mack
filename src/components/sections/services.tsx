import { Globe, Layers, Code2, Server, Check } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Landing Page',
    price: '$XXX',
    description: 'A fast, beautiful single-page site to establish your online presence.',
    features: [
      'Custom design — no templates',
      'Mobile-first, fully responsive',
      'Contact form',
      'SEO optimized',
      'Fast load times',
      'Custom domain name',
    ],
    accent: 'text-sky-300',
    highlight: false,
  },
  {
    icon: Layers,
    title: 'Business Site',
    price: '$XXX',
    description: 'A full multi-page website built for businesses that need more than a landing page.',
    features: [
      'Everything in Landing Page',
      'Multiple pages and sections',
      'Blog or news section',
      'Google Analytics integration',
      'Content management',
    ],
    accent: 'text-emerald-300',
    highlight: true,
  },
  {
    icon: Code2,
    title: 'Custom App',
    price: 'From $XXX',
    description: 'A fully custom web application built to your exact specifications.',
    features: [
      'Everything in Business Site',
      'User accounts and authentication',
      'Database and API integration',
      'Payment processing with Stripe',
      'Ongoing support available',
    ],
    accent: 'text-purple-300',
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-3">Services</p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Every project is built from scratch, designed to perform, and handed over to you. No ongoing platform fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map(({ icon: Icon, title, price, description, features, accent, highlight }) => (
            <div
              key={title}
              className={`relative rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-1 ${
                highlight
                  ? 'bg-white/15 border border-white/30 shadow-2xl shadow-black/20'
                  : 'glass-card'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-400 text-black text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6`}>
                <Icon className={`w-6 h-6 ${accent}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className={`text-3xl font-bold mb-3 ${accent}`}>{price}</p>
              <p className="text-white/90 text-sm leading-relaxed mb-6">{description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 rounded-2xl text-sm font-bold text-center transition-all ${
                  highlight
                    ? 'bg-emerald-400 text-black hover:bg-emerald-300'
                    : 'glass hover:bg-white/15 text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Hosting add-on */}
        <div className="glass-card rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Server className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Hosting and Maintenance</p>
              <p className="text-white/90 text-sm mt-0.5">I host and maintain your site so you never have to think about it. Includes updates, backups, and support.</p>
            </div>
          </div>
          <div className="text-center shrink-0">
            <p className="text-3xl font-bold text-sky-300">$25<span className="text-lg text-white/90">/mo</span></p>
            <p className="text-white/90 text-xs mt-1">Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
