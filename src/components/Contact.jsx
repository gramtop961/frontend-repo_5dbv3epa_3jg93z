import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — we\'ll get back to you shortly.');
  };

  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let\'s build your next breakthrough</h2>
          <p className="mt-2 text-gray-400">Tell us about your brand and goals. We\'ll craft a tailored plan.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <input
            required
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-red-500/60 focus:outline-none"
            placeholder="Your name"
          />
          <input
            type="email"
            required
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-red-500/60 focus:outline-none"
            placeholder="Email address"
          />
          <input
            className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-red-500/60 focus:outline-none"
            placeholder="Company / Brand"
          />
          <textarea
            rows="4"
            className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-red-500/60 focus:outline-none"
            placeholder="What are you trying to achieve?"
          />
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-gray-400">We typically respond within 24 hours.</p>
            <button
              type="submit"
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(220,38,38,0.35)] transition hover:bg-red-500"
            >
              Request Proposal
            </button>
          </div>
          {status && (
            <div className="sm:col-span-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
