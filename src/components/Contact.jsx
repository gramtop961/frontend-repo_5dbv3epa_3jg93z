import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We will get back to you shortly.');
  }

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-white">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start an Escrow</h2>
        <p className="mt-2 text-white/70">Tell us about the trade. We’ll guide both sides through a safe, quick process.</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-white/70">Your Discord / Email</label>
            <input required type="text" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-red-500/40 placeholder:text-white/40 focus:ring-2" placeholder="@username or name@mail.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Counterparty Contact</label>
            <input required type="text" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-red-500/40 placeholder:text-white/40 focus:ring-2" placeholder="Their Discord / Email" />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm text-white/70">Item / Deal Details</label>
          <textarea required rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-red-500/40 placeholder:text-white/40 focus:ring-2" placeholder="Roblox item, value, terms, and any proof links"></textarea>
        </div>
        <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500 transition-colors">
          <Send className="h-4 w-4" /> Submit Request
        </button>
        {status && <p className="mt-3 text-sm text-green-400">{status}</p>}
      </form>
    </section>
  );
}
