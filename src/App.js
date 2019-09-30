import React from 'react';
import './App.scss';
import { Header } from './components/layout/Header';
import { Projects } from './components/layout/Projects';
// import { Officers } from './components/layout/Officers';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
