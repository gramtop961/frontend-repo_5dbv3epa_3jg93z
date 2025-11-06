import React from 'react';

const cases = [
  {
    brand: 'NeonTech',
    result: '+312% ROAS',
    desc: 'Scaled paid acquisition with red‑hot creative testing and LTV‑driven bidding.',
  },
  {
    brand: 'UrbanWear',
    result: '7.5x CAC Efficiency',
    desc: 'Built a modular ad system and UGC pipeline to dominate seasonal drops.',
  },
  {
    brand: 'Vortex Audio',
    result: '2.1M Views',
    desc: 'Cinematic short‑form spots that converted attention directly to checkouts.',
  },
];

function CaseStudies() {
  return (
    <section id="cases" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Case Studies</h2>
            <p className="mt-2 max-w-2xl text-gray-400">Proof that aesthetics and performance can coexist.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 md:block">
            Work With Us
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.brand} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition hover:border-red-500/40">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{c.brand}</h3>
                <span className="rounded-full bg-red-600/20 px-3 py-1 text-xs text-red-300">{c.result}</span>
              </div>
              <p className="mt-3 text-sm text-gray-300">{c.desc}</p>
              <div className="mt-6 h-36 rounded-xl bg-[linear-gradient(135deg,rgba(220,38,38,0.25),transparent_40%)] ring-1 ring-inset ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
