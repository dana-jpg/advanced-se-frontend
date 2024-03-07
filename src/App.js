import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import './styles/App.css';


const App = () => {
  return (
  <div className = 'custom-container'>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/property/:id' element={<PropertyDetails/>} />
    </Routes>
    <Footer />

  </div>
  );
};

export default App;
