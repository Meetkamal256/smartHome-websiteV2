import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Testimonials from "./components/Testimonials/Testimonials";
import Faqs from "./components/FAQS/Faqs";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </React.Fragment>
  );
};

export default App;
