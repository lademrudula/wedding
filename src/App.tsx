import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Story from './components/Story';
import Events from './components/Events';
import People from './components/People';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Couple />
      <Story />
      <Events />
      <People />
      <Footer />
    </div>
  );
}

export default App;