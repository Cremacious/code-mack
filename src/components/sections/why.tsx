import { Check, X, Minus } from 'lucide-react';

const COMPARISON = [
  {
    feature: 'Custom design',
    codeMack: true,
    squarespace: false,
    wix: false,
  },
  {
    feature: 'You own the code',
    codeMack: true,
    squarespace: false,
    wix: false,
  },
  {
    feature: 'No monthly platform fee',
    codeMack: true,
    squarespace: false,
    wix: false,
  },
  {
    feature: 'Mobile-first build',
    codeMack: true,
    squarespace: 'sometimes',
    wix: 'sometimes',
  },
  {
    feature: 'Custom web app support',
    codeMack: true,
    squarespace: false,
    wix: false,
  },
  {
    feature: 'Affordable pricing',
    codeMack: true,
    squarespace: 'medium',
    wix: 'medium',
  },
  {
    feature: 'Direct developer access',
    codeMack: true,
    squarespace: false,
    wix: false,
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="w-6 h-6 text-emerald-400 mx-auto" />;
  if (value === false) return <X className="w-6 h-6 text-red-400/90 mx-auto" />;
  return <Minus className="w-6 h-6 text-white/80 mx-auto" />;
}

export function Why() {
  return (
    <section id="why" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Code Mack
          </p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-(family-name:--font-outfit)">
            Stop renting your website.
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Platforms like Squarespace and Wix charge you every month forever
            for a site you never truly own. Here&apos;s how Code Mack compares.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block rounded-3xl overflow-hidden bg-black/20 border border-white/10">
          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-white/10">
            <div className="p-5 col-span-1" />
            <div className="p-5 text-center border-l border-white/10">
              <p className="text-emerald-300 font-bold ">Code Mack</p>
            </div>
            <div className="p-5 text-center border-l border-white/10">
              <p className="text-white/90 font-medium ">Squarespace</p>
            </div>
            <div className="p-5 text-center border-l border-white/10">
              <p className="text-white/90 font-medium ">Wix</p>
            </div>
          </div>

          {/* Rows */}
          {COMPARISON.map(({ feature, codeMack, squarespace, wix }, i) => (
            <div
              key={feature}
              className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? 'bg-white/0' : 'bg-black/15'
              }`}
            >
              <div className="p-4 pl-6 flex items-center">
                <p className=" text-white/90">{feature}</p>
              </div>
              <div className="p-4 flex items-center justify-center border-l border-white/10 bg-emerald-400/10">
                <Cell value={codeMack} />
              </div>
              <div className="p-4 flex items-center justify-center border-l border-white/10">
                <Cell value={squarespace} />
              </div>
              <div className="p-4 flex items-center justify-center border-l border-white/10">
                <Cell value={wix} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile card stack */}
        <div className="md:hidden space-y-3">
          {COMPARISON.map(({ feature, codeMack, squarespace, wix }) => (
            <div key={feature} className="rounded-2xl p-5 bg-black/25 border border-white/10">
              <p className="text-sm font-semibold text-white mb-4">{feature}</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center gap-1.5 bg-emerald-400/10 rounded-xl px-2 py-3">
                  <Cell value={codeMack} />
                  <span className="text-sm font-semibold text-emerald-300 text-center">Code Mack</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 bg-black/20 rounded-xl px-2 py-3">
                  <Cell value={squarespace} />
                  <span className="text-sm text-white/90 text-center">Squarespace</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 bg-black/20 rounded-xl px-2 py-3">
                  <Cell value={wix} />
                  <span className="text-sm text-white/90 text-center">Wix</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below table */}
        <div className="mt-10 text-center">
          <p className="text-white/90 mb-6 text-lg">
            Ready to own your website?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-sky-700 font-bold text-base hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
