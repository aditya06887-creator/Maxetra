import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact";
import CaseStudy from "./Components/CaseStudy";
import SEO from "./Components/Services/SEO";
import Digital from "./Components/Services/Digital"
import DigitalLanding from "./Components/Services/DigitalLanding"
import ScrollToTop from "./Components/ScrollToTop";
import Privacy from "./Components/Footer/Privacy";
import Term from "./Components/Footer/Term";
import About from "./Components/About";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>  

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent Route */}
        <Route path="digital-marketing" element={<Digital />}>
          <Route index element={<DigitalLanding />} />
          <Route path="seo" element={<SEO />} />
        </Route>
        <Route path="/who-we-are" element={<About/>} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/success" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Term/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


