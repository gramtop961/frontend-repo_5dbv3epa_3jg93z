import React from 'react';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-white text-lg font-black tracking-widest">
          BERLIN'S <span className="text-red-500">STORE</span>
        </a>
        <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#cases" className="hover:text-white transition">Case Studies</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.35)] transition hover:bg-red-500"
        >
          Start a Project
        </a>
      </div>
    </header>
  );
}

export default Navbar;
