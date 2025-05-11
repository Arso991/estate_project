import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/commons/Header'
import Footer from './components/commons/Footer';
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import Login from './pages/Login';
import Register from './pages/Register';
import Properties from './pages/Properties';

const App = () => {
  return <div className='max-w-[1440px] mx-auto bg-white' >
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/properties' element={<Properties />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    <Footer />
  </div>;
};

export default App;
