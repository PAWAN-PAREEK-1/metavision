import React, { lazy, Suspense } from "react";
import "../Style/Global.css";
import bigline from "../assets/img/bigline.svg";
import herobg from "../assets/img/herobg.svg";
const Loading = lazy(() => import("../Components/Loading"));

const Blog = lazy(() => import("../Components/Blog"));
const MetaVision = lazy(() => import("../Components/MetaVision"));
const Testimonial = lazy(() => import("../Components/Testimonial"));
const Header = lazy(() => import('../Components/Header.js'));


const Review = () => {
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
        <div className="hero-all">
          <h4>
            {" "}
            <img src={bigline} alt="" />
            REVIEWS
          </h4>
          <img src={herobg} alt="" id="hero-bg" />
        </div>

        <Testimonial/>
        <Blog/>
        <MetaVision/>

      </div>
    </Suspense>
  );
};

export default Review;
