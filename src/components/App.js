import React from 'react';
import './App.css';  // Import the CSS file
import Navbar from './Navbar';
import Home from './Home';
import About from './About';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
