import React, { useState } from "react";
import "../Style/Services.css";
import "../Style/Global.css";
import blog1 from "../assets/img/b1.svg";
import blog2 from "../assets/img/b2.svg";
import blog3 from "../assets/img/b3.svg";
import blog4 from "../assets/img/blog1.svg";

const Blog = () => {
  return (
    <div>
      <div className="product serv  blogs">
        <h3>/ Our Blog /</h3>
        <h1>Blog</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>

        <div className="service-box blog">
          <div className="blog-img">
            <img src={blog1} alt="" />
          </div>
          <div className="blog-detail">
            <h2>The most Popular Business Of the Year</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="blog-name">
            <div className="name-img">
              <div className="blog-p-img">
                <img src={blog4} alt="" />
              </div>
              <div className="blog-p-name">
                <h3>Dulce Korsgaard</h3>
                <h5>UI/UX Designer</h5>
              </div>
            </div>
            <h2>July 20, 2020</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
