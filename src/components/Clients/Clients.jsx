import React from "react";
import "./clients.css";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";
import client7 from "../../assets/client7.png";
import client8 from "../../assets/client8.png";

const Clients = () => {
  return (
    <section id="clients">
      <h1>Our Clients</h1>
      <p className="lead">
        Trusted by leading companies worldwide, our Smart Home Application has
        revolutionized the way businesses and individuals manage their homes.
        Join our growing community and experience the power of smart living
        today.
      </p>
      <div className="container clients__container">
        <div>
          <img src={client1} alt="" />
        </div>
        <div>
          <img src={client2} alt="" />
        </div>
        <div>
          <img src={client2} alt="" />
        </div>
        <div>
          <img src={client3} alt="" />
        </div>
        <div>
          <img src={client4} alt="" />
        </div>
        <div>
          <img src={client5} alt="" />
        </div>
        <div>
          <img src={client6} alt="" />
        </div>
        <div>
          <img src={client7} alt="" />
        </div>
        <div>
          <img src={client8} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
