import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from "react";
import './App.css';
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';

function App() {
  return (
    
    <ParallaxProvider>
    <Router>
      <div className="App">
      <ScrollToTop />
      <Routes>
            {/* Layout as a parent route */}
            <Route path="/" element={<Layout />}>
              {/* Nested routes (these will be placed inside <Outlet />) */}
              <Route index element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </div>
    </Router> 
    </ParallaxProvider>
  );
}

export default App;
