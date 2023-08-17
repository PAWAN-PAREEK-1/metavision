import React, { lazy, Suspense } from "react";
import "../Style/Global.css";
import bigline from "../assets/img/bigline.svg";
import herobg from "../assets/img/herobg.svg";
const Loading = lazy(() => import("../Components/Loading"));
const AboutUs2 = lazy(() => import("../Components/AboutUs2"));

const Blog = lazy(() => import("../Components/Blog"));
const MetaVision = lazy(() => import("../Components/MetaVision"));
const Testimonial = lazy(() => import("../Components/Testimonial"));
const Contact = lazy(() => import("../Components/Contact"));

const About = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div>
        <div className="hero-all">
          <h4>
            {" "}
            <img src={bigline} alt="" />
            About Us
          </h4>
          <img src={herobg} alt=""id="hero-bg" />
        </div>

        <AboutUs2/>
        <Blog/>
        <MetaVision/>
        <Testimonial/>
        <Contact/>
      </div>
    </Suspense>
  );
};

export default About;
