import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Clients from "../components/Clients/Clients";
import Testimonials from "../components/Testimonials/Testimonials";
import Faqs from "../components/FAQS/Faqs";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import Subscribe from "../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="header">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
      <section id="downloadapp">
        <DownloadApp />
      </section>
      <section id="subscribe">
        <Subscribe />
      </section>
    </>
  );
};

export default Home;
