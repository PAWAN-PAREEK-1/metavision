import React from "react";
import { lazy, Suspense } from "react";
import line from "../assets/img/line.svg";
import play from "../assets/img/play.svg";
import hero from "../assets/img/hero.svg";
import "../Style/Home.css";
import chart from "../assets/img/chart.svg";
import com from "../assets/img/com.svg";
const Loading = lazy(() => import("../Components/Loading"));
const AboutUs = lazy(() => import("../Components/AboutUs"));
const Product = lazy(() => import("../Components/Product"));
const Services = lazy(() => import("../Components/Services"));
const Blog = lazy(() => import("../Components/Blog"));
const MetaVision = lazy(() => import("../Components/MetaVision"));
const Testimonial = lazy(() => import("../Components/Testimonial"));
const Contact = lazy(() => import("../Components/Contact"));
const Header = lazy(() => import('../Components/Header.js'));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Header/>
      <div>
        <div className="main">
          <section className="hero">
            <div className="hero-detail">
              <h2>
                Welcome To Metavision <img src={line} alt="" />
              </h2>
              <h1>Data will talk to you if you're willing to listen.</h1>
              <h3>
                Easy, Dynamic, Flexible, Accurate, and Quick reporting with F-1
                MIS.
              </h3>
              <div className="hero-work">
                <a href="">
                  <div className="btn hero-btn">Explore Now</div>
                </a>

                <div className="hero-work-2">
                  <a href="">
                    {" "}
                    <img src={play} alt="" />
                  </a>
                  <h4>See How It works</h4>
                  <img src={line} alt="" />
                </div>
              </div>
            </div>
            <div className="heroimg">
              <img src={hero} alt="" />
              <div className="monthly">
                <div className="monthly-detail">
                  <h4>Monthly Stats</h4>
                  <h3>+25%</h3>
                </div>
                <div className="montly-img">
                <img src={chart} alt="" />
                </div>
                <img src={com} alt="" id="com" />

              </div>
            </div>
          </section>
          <div className="exp">
            <div className="exp-box">
              <h1>11+</h1>
              <h2>YEARS OF EXPERIENCE</h2>
            </div>
            <div className="exp-box">
              <h1>2000+</h1>
              <h2>SATISFIED CLIENTS</h2>
            </div>
            <div className="exp-box">
              <h1>25000+</h1>
              <h2>TOTAL USERS</h2>
            </div>
            <div className="exp-box">
              <h1>1+</h1>
              <h2>COUNTRIES</h2>
            </div>
          </div>
        </div>

        <AboutUs />
        <Product />
        <Services />
        <Blog />
        <MetaVision />
        <Testimonial />
        <Contact />
      </div>
    </Suspense>
  );
};

export default Home;
