import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import Contact from './components/Contact.jsx';
import Details from './components/Details.jsx';
import Navbar from './components/navbar.jsx';

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Details />} />
          {/* <Route path='/navbar' element={<Navbar />} /> */}
          {/* <Route path='*' element={<div>404 Not Found</div>} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App