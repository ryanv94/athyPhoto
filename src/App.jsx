import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Competitions from './pages/Competitions';
import Blog from './pages/Blog';
import Sponsors from './pages/Sponsors';
import Membership from './pages/Membership';
import LocationMap from './pages/LocationMap';
import UsefulLinks from './pages/UsefulLinks';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-zinc-300 flex flex-col font-sans selection:bg-gold selection:text-obsidian">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/map" element={<LocationMap />} />
          <Route path="/links" element={<UsefulLinks />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
