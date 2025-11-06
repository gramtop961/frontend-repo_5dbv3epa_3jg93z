import React from 'react';
import Spline from '@splinetool/react-spline';
import { Share2, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D background - red futuristic cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* overlays - ensure interactions pass through */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,0,0,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          BERLIN’S STORE
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Futuristic midman service for safe, fast transactions and Roblox in‑game items. We stand in the middle so your trades are secure.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#services" className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500">Explore Services</a>
          <a href="#contact" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Start an Escrow</a>
        </div>

        {/* Socials under primary CTAs */}
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
            <Share2 className="h-4 w-4 text-red-400" />
            <span>Connect on Socials</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/berlins_idn/"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-red-500/40 hover:bg-red-600/10"
              aria-label="Open Instagram"
            >
              <span className="font-medium">Instagram</span>
              <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
            </a>
            <a
              href="https://www.facebook.com/groups/853473660350076/?ref=share&mibextid=NSMWBT"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-red-500/40 hover:bg-red-600/10"
              aria-label="Open Facebook Group"
            >
              <span className="font-medium">Facebook</span>
              <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
            </a>
            <a
              href="https://discord.com/channels/970944887035924480/1431855293024964659/1431935183971422271"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-red-500/40 hover:bg-red-600/10"
              aria-label="Open Discord Channel"
            >
              <span className="font-medium">Discord</span>
              <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
