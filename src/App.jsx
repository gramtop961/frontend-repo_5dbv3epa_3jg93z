import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-sm text-white/60 backdrop-blur">
        © {new Date().getFullYear()} BERLIN’S STORE • Secure Midman Escrow for Digital Trades
      </footer>
    </div>
  );
}
