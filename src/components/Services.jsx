import React from 'react';
import { ShieldCheck, Zap, Coins, Users } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Secure Escrow (Midman)',
    desc: 'We hold the asset until both sides confirm. No scams, no stress.'
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    desc: 'Fast checks on proof, ownership, and delivery to keep trades moving.'
  },
  {
    icon: Coins,
    title: 'Roblox Items & Credits',
    desc: 'Curated inventory and sourcing for limiteds, game passes, and currency.'
  },
  {
    icon: Users,
    title: 'Community Reputation',
    desc: 'Transparent logs and ratings so you always know who you are trading with.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
        <p className="mt-2 max-w-2xl text-white/70">Purpose-built for digital trades with a focus on Roblox marketplace safety and speed.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-red-500/50 hover:bg-white/10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-400 ring-1 ring-red-500/30">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
