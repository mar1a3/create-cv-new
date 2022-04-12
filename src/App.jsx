import React from 'react';
import { Header } from './sections/Header/Header';
import { Showcase } from './sections/Showcase/Showcase';
import { Features } from './sections/Features/Features';
import { Plans } from './sections/Plans/Plans';
import { Faq } from './sections/FAQ/Faq';
import { Regions } from './sections/Regions/Regions';
import { Footer } from './sections/Footer/Footer';
import './reset.css';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Showcase />
      <Plans />
      <Features />
      <Faq />
      <Regions />
      <Footer />
    </main>
  );
}

export default App;
