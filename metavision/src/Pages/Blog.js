import React, { lazy, Suspense, useState } from "react";
import "../Style/Services.css";
import "../Style/Global.css";
import blog1 from "../assets/img/b1.svg";
import blog2 from "../assets/img/b2.svg";
import blog3 from "../assets/img/b3.svg";
import blog4 from "../assets/img/blog1.svg";
import bigline from "../assets/img/bigline.svg";
import herobg from "../assets/img/herobg.svg";
const Loading = lazy(() => import("../Components/Loading"));
const MetaVision = lazy(() => import("../Components/MetaVision"));
const Header = lazy(() => import('../Components/Header.js'));

const Blogs = () => {
  const blogData = [ {
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
  const itemsPerGroup = 9;
  const [visibleBlogs, setVisibleBlogs] = useState(blogData.slice(0, itemsPerGroup));
  const [activeGroup, setActiveGroup] = useState(0);

  const totalGroups = Math.ceil(blogData.length / itemsPerGroup);

  const handleLoadMore = () => {
    const newActiveGroup = activeGroup + 1;
    const newVisibleBlogs = blogData.slice(
      newActiveGroup * itemsPerGroup,
      (newActiveGroup + 1) * itemsPerGroup
    );
    const maxItemsToAdd = Math.min(newVisibleBlogs.length, 3);
    setVisibleBlogs([...visibleBlogs, ...newVisibleBlogs.slice(0, maxItemsToAdd)]);
    setActiveGroup(newActiveGroup);
  };

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
            <img src={bigline} alt="" />
            BLOG
          </h4>
          <img src={herobg} alt="" id="hero-bg" />
        </div>

        <div className="product serv  blogs">
          <h3>/ Our Blog /</h3>
          <h1>Blog</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>

          <div className="blog-box blog-box2">
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
                 </div>                  <div className="blog-p-name">
                   <h3>{blog.authorName}</h3>
                   <h5>{blog.authorRole}</h5>
                 </div>
               </div>
               <h2>{blog.date}</h2>
             </div>
              </div>
            ))}
              {activeGroup < totalGroups - 1 && (
            <button className="load-more-button" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
          </div>



        <MetaVision />
      </div>
    </Suspense>
  );
};

export default Blogs;


