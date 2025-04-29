// src/App.js
import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Element name="home">
        <Hero />
      </Element>

      <Element name="nosotros">
        <Nosotros />
      </Element>

      <Element name="features">
        <Features />
      </Element>

      <Element name="contacto">
        <Contacto />
      </Element>

    </div>
  );
}

export default App;