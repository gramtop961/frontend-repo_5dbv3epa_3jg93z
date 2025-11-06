import React from 'react';
import { Rocket, BarChart3, Video, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Growth Strategy',
    desc: 'Full‑funnel plans that turn attention into revenue with precise targeting and iteration.',
  },
  {
    icon: BarChart3,
    title: 'Performance Ads',
    desc: 'ROI‑focused media buying on Meta, Google, and TikTok backed by live dashboards.',
  },
  {
    icon: Video,
    title: 'Content & Video',
    desc: 'Cinematic product stories and UGC engines optimized for conversion and scale.',
  },
  {
    icon: Megaphone,
    title: 'Brand Activation',
    desc: 'Launch campaigns that blend culture, community, and commerce for lasting impact.',
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Redefining Digital Marketing
        </h2>
        <p className="mt-2 max-w-2xl text-gray-400">
          We build futuristic growth engines powered by data, creativity, and velocity.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-red-500/40 hover:bg-red-500/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
