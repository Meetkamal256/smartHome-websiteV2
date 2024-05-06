import React from "react";
import "./faqs.css";
import { FaPlus } from "react-icons/fa";

const Faqs = () => {
  return (
    <section id="faqs">
      <h1>FAQs</h1>
      <div className="container faqs__container">
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How do I get started?</h4>
            <p className="faq__answer">
              Getting started with our Smart Home Application is easy! Simply
              download the app from the App Store or Google Play, sign up for an
              account, and follow the on-screen instructions to set up your
              smart devices.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">Is my data secure?</h4>
            <p className="faq__answer">
              Yes, we take the security and privacy of your data seriously. Our
              Smart Home Application uses advanced encryption protocols to
              ensure that your personal information remains safe and secure at
              all times.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">Can I control my home remotely?</h4>
            <p className="faq__answer">
              Absolutely! Our Smart Home Application allows you to control your
              smart devices from anywhere in the world using your smartphone or
              tablet. Whether you're at work, on vacation, or simply out and
              about, you can always stay connected to your home.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">What devices are compatible?</h4>
            <p className="faq__answer">
              Our Smart Home Application is compatible with a wide range of
              smart devices, including lights, thermostats, locks, cameras, and
              more. If you're unsure whether your devices are compatible, feel
              free to reach out to our support team for assistance.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How can I contact support?</h4>
            <p className="faq__answer">
              If you have any questions or need assistance, our support team is
              here to help! You can reach us via email, phone, or live chat
              through the app. We're available 24/7 to provide you with the
              assistance you need.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">Is there a mobile app?</h4>
            <p className="faq__answer">
              Yes, we offer a mobile app for both iOS and Android devices. You
              can download the app for free from the App Store or Google Play
              and access all the features of our Smart Home Application on the
              go.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Faqs;
