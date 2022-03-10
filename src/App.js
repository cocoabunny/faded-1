import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Products from './components/products/Products';
import Book from './components/book/Book';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Products />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
