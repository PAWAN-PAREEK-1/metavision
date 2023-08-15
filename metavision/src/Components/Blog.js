import React, { useState } from "react";
import "../Style/Services.css";
import "../Style/Global.css";
import blog1 from "../assets/img/b1.svg";
import blog2 from "../assets/img/b2.svg";
import blog3 from "../assets/img/b3.svg";
import blog4 from "../assets/img/blog1.svg";

const blogData = [
    {
      image: blog1,
      title: "The Most Popular Business Of the Year",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      authorImage: blog4,
      authorName: "Dulce Korsgaard",
      authorRole: "UI/UX Designer",
      date: "July 20, 2020",
    },
    {
        image: blog2,
        title: "The Most Popular Business Of the Year",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorImage: blog4,
        authorName: "Martin Donin",
        authorRole: "Consulting",
        date: "July 20, 2020",
      },
      {
        image: blog3,
        title: "The Most Popular Business Of the Year",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorImage: blog4,
        authorName: "Rayna Korsgaard",
        authorRole: "User Research",
        date: "July 20, 2020",
      },
      {
        image: blog1,
        title: "The Most Popular Business Of the Year",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorImage: blog4,
        authorName: "Dulce Korsgaard",
        authorRole: "UI/UX Designer",
        date: "July 20, 2020",
      },


  ];
const Blog = () => {
  const itemsPerGroup = 3;
  const totalGroups = Math.ceil(blogData.length / itemsPerGroup);

  const [activeGroup, setActiveGroup] = useState(0);

  const visibleBlogs = blogData.slice(
    activeGroup * itemsPerGroup,
    (activeGroup + 1) * itemsPerGroup
  );

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

        <div className="blog-box">
          {visibleBlogs.map((blog, index) => (
            <div className="service-box blog" key={index}>
              <div className="blog-img">
                <img src={blog.image} alt="" />
              </div>
              <div className="blog-detail">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
              </div>
              <div className="blog-name">
                <div className="name-img">
                  <div className="blog-p-img">
                    <img src={blog.authorImage} alt="" />
                  </div>
                  <div className="blog-p-name">
                    <h3>{blog.authorName}</h3>
                    <h5>{blog.authorRole}</h5>
                  </div>
                </div>
                <h2>{blog.date}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="circel">
          {Array.from({ length: totalGroups }, (_, i) => (
            <span
              className={activeGroup === i ? "active" : ""}
              onClick={() => setActiveGroup(i)}
              key={i}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

