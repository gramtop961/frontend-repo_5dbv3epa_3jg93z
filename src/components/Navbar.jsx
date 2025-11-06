import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <nav className="flex items-center justify-between px-4 py-3 text-white">
            <a href="#hero" className="font-semibold tracking-wide text-white hover:text-red-400 transition-colors">
              BERLIN’S STORE
            </a>
            <ul className="hidden gap-6 md:flex">
              <li><a href="#services" className="text-sm text-white/80 hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#cases" className="text-sm text-white/80 hover:text-red-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-sm text-white/80 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-500 transition-colors">
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
