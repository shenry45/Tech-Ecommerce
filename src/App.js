import React from 'react';

import Header from './components/Header';
import Hero from './components/index/Hero';
import IndexPage from './pages/IndexPage';

import './css/combined.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <IndexPage />
    </div>
  );
}

export default App;
