import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black text-white" id="home">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle rain + red glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.18),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(220,38,38,0.12),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient( to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 4px )',
            maskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-red-400">
          Digital • Futuristic • Berlin
        </span>
        <h1 className="font-extrabold tracking-tight">
          <span className="block text-4xl sm:text-6xl md:text-7xl">
            BERLIN'S <span className="text-red-500">STORE</span>
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-gray-300 sm:text-base md:text-lg">
          A next‑gen digital marketing studio crafting growth systems for ambitious brands.
          Data‑driven strategy. Cinematic visuals. Real impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(220,38,38,0.35)] transition hover:bg-red-500"
          >
            Explore Services
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Bottom gradient lift to improve text contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}

export default Hero;
