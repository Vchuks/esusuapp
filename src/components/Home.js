import React from "react";
import { Link } from "react-router-dom";
import play from "../images/play.svg";
import icon from "../images/default.gif";
import Features from "./Features";
import Review from "./Review";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <>
      <section className="hero px-8 md:px-20 pt-32 md:pt-56 pb-20 md:flex gap-4">
        <div className="w-full text-white">
          <p className="text-3xl md:text-5xl">Save with Ease</p>
          <p className="text-justify md:w-3/4 mt-8 md:mt-10 md:text-xl font-sans md:mb-8 leading-8 md:leading-10">
            Automated platform for savings and easy access to credit for MSMEs.
          </p>
          <div className="flex flex-wrap gap-6 md:gap-10 mt-10 md:mt-16 items-center">
            <div className="flex items-center gap-4 border-2 p-2 md:p-4">
              <img src={play} alt="playstore" />
              <div>
                <p>Available on</p>
                <Link to="#" className="text-xl">
                  Play Store
                </Link>
              </div>
            </div>
            <div>
              <button className="bg-slate-200 font-bold text-xl text-blue-900 py-3 px-4 md:py-4 md:px-8 rounded-full hover:bg-inherit hover:text-white hover:border-2">
                <a href="#videosection">Get Started</a>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full">
          <img
            src={icon}
            alt="esusu.online gadget"
            className="animate-bounceslow m-auto rounded-large"
          />
        </div>
      </section>

      <section className="bg-slate-100 py-10 " id="feature">
        <Features />
      </section>

      <section id="videosection">
        <VideoSection />
      </section>

      <section className="hero2 py-10 md:py-20" id="review">
        <Review />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section className="foot">
        <Footer />
      </section>
    </>
  );
};

export default Home;
