import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Timeline from './components/Timeline';
import Realisations from './components/Realisations';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-white container-responsive">
      <Header />
      <main className="mobile-padding">
        <Hero />
        <Expertise />
        <Timeline />
        <Realisations />
        <Competences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
