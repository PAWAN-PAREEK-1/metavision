import React, { lazy, Suspense } from "react";
import "../Style/Global.css";
import bigline from "../assets/img/bigline.svg";
import herobg from "../assets/img/herobg.svg";
const Loading = lazy(() => import("../Components/Loading"));
const AboutUs = lazy(() => import("../Components/AboutUs"));
const Product = lazy(() => import("../Components/Product"));
const Services = lazy(() => import("../Components/Services"));
const Blog = lazy(() => import("../Components/Blog"));
const MetaVision = lazy(() => import("../Components/MetaVision"));
const Testimonial = lazy(() => import("../Components/Testimonial"));
const Contact = lazy(() => import("../Components/Contact"));

const Review = () => {
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
            REVIEWS
          </h4>
          <img src={herobg} alt="" />
        </div>

        <Testimonial/>
        <Blog/>
        <MetaVision/>
        
      </div>
    </Suspense>
  );
};

export default Review;
