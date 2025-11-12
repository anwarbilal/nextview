import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import HeroVideo from './components/sections/HeroVideo';
import Hero2 from './components/sections/Hero2';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App w-full min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <HeroVideo/>
      <Services />
      <Portfolio />
      <About />
      <Team />7
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
