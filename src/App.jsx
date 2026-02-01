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
import Career from "./Components/Career";
import LoSEO from "./Components/Services/LoSEO";
import Content from "./Components/Services/Content";
import Performance from "./Components/Services/Performance";
import CRO from "./Components/Services/CRO";
import Social from "./Components/Services/Social";
import Video from "./Components/Services/Video";
import WebDev from "./Components/Services/WebDev";
import ECOM from "./Components/Services/ECOM";
import Graphic from "./Components/Services/Graphic";
import Email from "./Components/Services/Email";
import Thanks from "./Components/Thanks";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>  

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent Route */}
        <Route path="digital-marketing-services" element={<Digital />}>
          <Route index element={<DigitalLanding />} />
          <Route path="seo" element={<SEO />} />
          <Route path="local-seo" element={<LoSEO/>} />
          <Route path="content" element={<Content/>} />
          <Route path="performance" element={<Performance/>} />
          <Route path="cro" element={<CRO/>} />
          <Route path="social-media" element={<Social/>} />
          <Route path="video-prod" element={<Video/>} />
          <Route path="webd" element={<WebDev/>} />
          <Route path="e-commerce" element={<ECOM/>} />
          <Route path="graphic" element={<Graphic />} />
          <Route path="email-sms" element={<Email />} />
        </Route>

        <Route path="/who-we-are" element={<About/>} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/success" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Term/>} />
        <Route path="/career" element={<Career />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


