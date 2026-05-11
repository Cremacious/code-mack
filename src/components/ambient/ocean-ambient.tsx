'use client';

import { useEffect, useRef, useMemo } from 'react';

function seeded(i: number, salt = 1) {
  const x = Math.sin(i * 9301 + salt * 49297) * 233280;
  return x - Math.floor(x);
}

export function Bubbles({ count = 28 }: { count?: number }) {
  const bubbles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      left:  seeded(i, 3) * 100,
      size:  4 + seeded(i, 2) * 18,
      delay: -seeded(i, 4) * 18,
      dur:   12 + seeded(i, 5) * 14,
      op:    0.25 + seeded(i, 6) * 0.45,
      top:   10 + seeded(i, 7) * 90,
    })), [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            '--b-delay': `${b.delay}s`,
            '--b-dur':   `${b.dur}s`,
            '--b-op':    b.op,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export function Plankton({ count = 60 }: { count?: number }) {
  const items = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      left:  seeded(i, 11) * 100,
      top:   seeded(i, 12) * 100,
      dx:    (seeded(i, 13) - 0.5) * 80,
      dy:    -(20 + seeded(i, 14) * 200),
      dur:   12 + seeded(i, 15) * 28,
      delay: -seeded(i, 16) * 30,
      size:  2 + seeded(i, 17) * 2.5,
      op:    0.3 + seeded(i, 18) * 0.5,
    })), [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {items.map((p, i) => (
        <span
          key={i}
          className="plankton"
          style={{
            left:           `${p.left}%`,
            top:            `${p.top}%`,
            width:          `${p.size}px`,
            height:         `${p.size}px`,
            opacity:        p.op,
            animationDelay: `${p.delay}s`,
            '--dx':    `${p.dx}px`,
            '--dy':    `${p.dy}px`,
            '--p-dur': `${p.dur}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export function LightRays() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const fade = Math.max(0, 1 - window.scrollY / 1800);
        if (ref.current) ref.current.style.opacity = fade.toFixed(3);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <span className="ray" style={{ left: '8%',  animationDelay: '0s' }} />
      <span className="ray" style={{ left: '28%', animationDelay: '-2.5s', width: '8vw' }} />
      <span className="ray" style={{ left: '52%', animationDelay: '-1s',   width: '14vw' }} />
      <span className="ray" style={{ left: '74%', animationDelay: '-3.5s', width: '10vw' }} />
      <span className="ray" style={{ left: '90%', animationDelay: '-0.5s', width: '7vw' }} />
    </div>
  );
}

function FishSVG({ color = 'rgba(255,255,255,0.5)' }: { color?: string }) {
  return (
    <svg width="64" height="28" viewBox="0 0 64 28" fill="none">
      <path d="M2 14 C 10 4, 30 4, 44 14 C 30 24, 10 24, 2 14 Z" fill={color} />
      <path d="M44 14 L60 4 L56 14 L60 24 Z" fill={color} />
      <circle cx="12" cy="13" r="1.2" fill="rgba(0,0,0,0.5)" />
    </svg>
  );
}

export function FishLayer() {
  const fish = [
    { top: '14%', dur: 75,  delay: -5,  scale: 0.7,  flip: false, color: 'rgba(200,255,240,0.45)' },
    { top: '42%', dur: 95,  delay: -30, scale: 1,    flip: true,  color: 'rgba(255,180,140,0.32)' },
    { top: '63%', dur: 110, delay: -60, scale: 0.55, flip: false, color: 'rgba(154,240,208,0.4)'  },
    { top: '78%', dur: 130, delay: -20, scale: 0.85, flip: true,  color: 'rgba(150,220,235,0.28)' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {fish.map((f, i) => (
        <div
          key={i}
          className="fish"
          style={{
            top: f.top,
            '--f-dur':   `${f.dur}s`,
            '--f-delay': `${f.delay}s`,
            transform: `scale(${f.scale}) ${f.flip ? 'scaleX(-1)' : ''}`,
          } as React.CSSProperties}
        >
          <FishSVG color={f.color} />
        </div>
      ))}
    </div>
  );
}

export function WaveDivider({
  from   = 'transparent',
  to     = 'rgba(255,255,255,0.04)',
  flip   = false,
  height = 90,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
  height?: number;
}) {
  const id = `wg-${flip ? 'f' : 'u'}`;
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      style={{ height, transform: flip ? 'scaleY(-1)' : 'none' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C240,100 480,20 720,55 C960,90 1200,30 1440,65 L1440,120 L0,120 Z"
        fill={`url(#${id})`}
        opacity="0.6"
      />
      <path
        d="M0,80 C240,40 480,110 720,75 C960,40 1200,100 1440,70 L1440,120 L0,120 Z"
        fill={`url(#${id})`}
        opacity="0.4"
      />
    </svg>
  );
}

export function FrondSVG({ tone = 'reef' }: { tone?: 'reef' | 'coral' | 'kelp' }) {
  const fills: Record<string, string[]> = {
    reef:  ['#0c5d68', '#16a89e', '#9af0d0'],
    coral: ['#7a3a2c', '#ff8a6b', '#ffd28a'],
    kelp:  ['#053640', '#0a7780', '#5fdcd0'],
  };
  const [base, stem, leaf] = fills[tone];

  return (
    <svg width="120" height="260" viewBox="0 0 120 260" fill="none">
      <path
        d="M60 260 C 70 200, 50 160, 65 110 C 75 70, 50 40, 60 0"
        stroke={stem} strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.55"
      />
      {[0, 1, 2, 3, 4, 5].map(i => {
        const y    = 240 - i * 38;
        const side = i % 2 === 0 ? -1 : 1;
        return (
          <ellipse
            key={i}
            cx={60 + side * 18}
            cy={y}
            rx="22" ry="9"
            fill={leaf}
            opacity={0.4 + i * 0.05}
            transform={`rotate(${side * 30} ${60 + side * 18} ${y})`}
          />
        );
      })}
      <ellipse cx="60" cy="258" rx="28" ry="6" fill={base} opacity="0.6" />
    </svg>
  );
}

export function SurfaceRipple() {
  return (
    <div className="absolute top-0 inset-x-0 pointer-events-none" style={{ height: 140 }}>
      <div className="surface-shimmer" style={{ top: 14 }} />
      <div className="surface-shimmer" style={{ top: 34, animationDelay: '-1.5s' }} />
      <div className="surface-shimmer" style={{ top: 58, animationDelay: '-2.8s' }} />
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 w-full"
        style={{ height: 140 }}
      >
        <path d="M0,30 C240,60 480,0 720,25 C960,50 1200,5 1440,30 L1440,0 L0,0 Z"
              fill="rgba(255, 250, 210, 0.18)" />
        <path d="M0,70 C240,40 480,90 720,65 C960,40 1200,90 1440,60 L1440,0 L0,0 Z"
              fill="rgba(255, 250, 210, 0.08)" />
      </svg>
    </div>
  );
}
