import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuDetail from './pages/MenuDetail';
import About from './pages/About';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          
          {/* Nested Route - Menu Detail */}
          <Route path="/menu/:category" element={<MenuDetail />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Not Found Route - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
