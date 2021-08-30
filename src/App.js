import React from 'react';
import Topbar from './components/topbar/Topbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Topbar />
    <Header />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
