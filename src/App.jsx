import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Testimonials from "./components/Testimonials/Testimonials";
import Faqs from "./components/FAQS/Faqs";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <About />
      <Clients />
      <Testimonials />
      <Faqs />
      <DownloadApp />
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
};

export default App;
