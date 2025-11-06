import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Contact />
      <footer className="bg-black py-10 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} BERLIN'S STORE — Digital Marketing in Red. Built for the future.
        </p>
      </footer>
    </div>
  );
}

export default App;
