import React from 'react';
import { Shield, BarChart3, ThumbsUp } from 'lucide-react';

const cases = [
  {
    title: '1,200+ Safe Roblox Trades',
    metric: '99.6% success rate',
    icon: Shield,
    blurb: 'Escrowed limiteds, game passes, and cross-platform items with near-perfect completion.'
  },
  {
    title: 'Faster Closings',
    metric: 'under 7 minutes avg',
    icon: BarChart3,
    blurb: 'We streamline verification so both sides finish the deal quickly and confidently.'
  },
  {
    title: 'Community Trust',
    metric: '4.9/5 rating',
    icon: ThumbsUp,
    blurb: 'Reputation built on transparency and responsive support throughout the trade.'
  }
];

export default function CaseStudies() {
  return (
    <section id="cases" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 text-white">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proof of Work</h2>
        <p className="mt-2 max-w-2xl text-white/70">Highlights from recent midman operations and Roblox item deals.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cases.map(({ title, metric, icon: Icon, blurb }) => (
          <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-red-500/50">
            <div className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
              <div className="h-full w-full bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent" />
            </div>
            <div className="relative z-10">
              <div className="mb-3 inline-flex items-center gap-2 text-red-400">
                <Icon className="h-5 w-5" />
                <span className="text-xs uppercase tracking-wider">Case Study</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{blurb}</p>
              <div className="mt-4 inline-flex rounded-lg border border-red-500/30 bg-red-600/10 px-3 py-1 text-sm text-red-300">
                {metric}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
