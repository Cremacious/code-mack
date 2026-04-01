'use client';

import { useState } from 'react';
import { Send, MapPin, Clock } from 'lucide-react';

const PROJECT_TYPES = [
  'Landing Page',
  'Business Site',
  'Custom Web App',
  'Website Redesign',
  'Other',
];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Tell me about your project and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info sidebar */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Based in</p>
                <p className="text-white/90 text-sm mt-0.5">Sarasota, Florida</p>
                <p className="text-white/80 text-xs mt-0.5">Available for local and remote work</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Response time</p>
                <p className="text-white/90 text-sm mt-0.5">Within 24 hours</p>
                <p className="text-white/80 text-xs mt-0.5">Or 1 Business Day</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-white/90 text-xs uppercase tracking-widest font-medium mb-3">Free quote includes</p>
              <ul className="space-y-2 text-sm text-white/90">
                {[
                  'Project timeline estimate',
                  'Itemized pricing breakdown',
                  'Tech stack recommendation',
                  'No obligation, no pressure',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'sent' ? (
              <div className="glass-card rounded-3xl p-12 flex flex-col items-center justify-center text-center h-full min-h-80">
                <div className="w-16 h-16 rounded-full bg-emerald-400/20 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-emerald-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-white/90">Thanks for reaching out. I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Project Type</label>
                  <select
                    required
                    value={form.projectType}
                    onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:border-white/40 transition-colors text-sm appearance-none"
                  >
                    <option value="" disabled className="bg-sky-900">Select a project type</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-sky-900">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project! What you need, your timeline, and any other details. The more info you can provide, the better I can understand your needs and provide an accurate quote."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/80 focus:outline-none focus:border-white/40 transition-colors resize-none text-sm md:text-md"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-2xl bg-white text-sky-700 font-bold text-base hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl shadow-black/20"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-sky-700/30 border-t-sky-700 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
