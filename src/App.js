import React from 'react';

import Header from './components/Header';
import Process from './components/Process';

import './css/combined.css';

function App() {
  return (
    <div className="App">
      <section id="top">
        <Header />
        <h1>Our Recycling</h1>
        <p>Let’s make the world a better place with less old hardware.</p>
        <svg version="1.2" baseProfile="tiny" id="header-round" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1000px" height="34.16px" viewBox="0 0 1000 34.16">
          <path fill="#FFFFFF" d="M500,25.191C312.88,25.191,139.982,14.386,0,0v34.16h1000V0C860.018,14.386,687.12,25.191,500,25.191z"/>
        </svg>
      </section>
      <Process />

    </div>
  );
}

export default App;
