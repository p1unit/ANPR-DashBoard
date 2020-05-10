import React from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
  
    <div>
      <Router>
      <Header />
      <Footer />
      </Router>
    </div>

  );
}

export default App;
