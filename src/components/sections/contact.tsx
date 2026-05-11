'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';


function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/90 mb-2">{label}</label>
      {children}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
    <section id="contact" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 relative">

        <Reveal>
          <div className="text-center mb-16">
            <p className="font-display text-xs font-bold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--seafoam)' }}>
              Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let&rsquo;s build something.
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              Tell me about your project and I&rsquo;ll get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="space-y-4">
            <Reveal variant="left">
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(154, 240, 208, 0.16)', color: 'var(--seafoam)' }}
                >
                  <MapIcon />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Based in</p>
                  <p className="text-white/90 text-sm mt-0.5">Sarasota, Florida</p>
                  <p className="text-white/70 text-xs mt-0.5">Available for local and remote work</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={120}>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255, 210, 138, 0.16)', color: 'var(--sand)' }}
                >
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Response time</p>
                  <p className="text-white/90 text-sm mt-0.5">Within 24 hours</p>
                  <p className="text-white/70 text-xs mt-0.5">Or 1 business day</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={240}>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-white/85 text-xs uppercase tracking-[0.2em] font-bold mb-3 font-display">
                  Free quote includes
                </p>
                <ul className="space-y-2.5 text-sm text-white/90">
                  {['Project timeline estimate', 'Itemized pricing breakdown', 'Tech stack recommendation', 'No obligation, no pressure'].map(s => (
                    <li key={s} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'var(--seafoam)', boxShadow: '0 0 6px var(--seafoam)' }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal variant="right">
              {status === 'sent' ? (
                <div className="glass-card rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[420px]">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'rgba(154, 240, 208, 0.2)', color: 'var(--seafoam)' }}
                  >
                    <SendIcon />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-white/90">Thanks for reaching out. I&rsquo;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-3xl p-7 sm:p-8 space-y-5"
                  style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.5)' }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name">
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-white/15 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-white/60 transition-all text-sm"
                        style={{ background: '#ffffff' }}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/15 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-white/60 transition-all text-sm"
                        style={{ background: '#ffffff' }}
                      />
                    </Field>
                  </div>

                  <Field label="Message">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project! What you need, your timeline, and any other details. The more info you can provide, the better I can understand your needs and provide an accurate quote."
                      className="w-full px-4 py-3 rounded-xl border border-white/15 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-white/60 transition-all resize-none text-sm leading-relaxed"
                      style={{ background: '#ffffff' }}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #ffd28a, #ff8a6b)',
                      color: '#3a1a0f',
                      boxShadow: '0 14px 36px -10px rgba(255,138,107,0.55)',
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 rounded-full animate-spin"
                          style={{ borderColor: 'rgba(58,26,15,0.25)', borderTopColor: '#3a1a0f' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <><SendIcon /> Send Message</>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                </form>
              )}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
