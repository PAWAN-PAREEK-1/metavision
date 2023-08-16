import React, { lazy, Suspense } from "react";
import "../Style/Global.css";
import bigline from "../assets/img/bigline.svg";
import herobg from "../assets/img/herobg.svg";
import line from "../assets/img/breakline.svg";
const Loading = lazy(() => import("../Components/Loading"));
const MetaVision = lazy(() => import("../Components/MetaVision"));

const Product = () => {
  const aboutData = [
    {
      heading:"F-1 MIS",
      shortDec: "F1 MIS Business Support System is Value Driven ",
      fullDec: "If this question is raised by a CEO or a senior business manager you can easily assume that the enterprise is slated for a dismal failure. Factually, in this information technology age, information and data have to be on the fingertip or on a lightening quick mode on smartphone storage and retrieval system. At the touch of the screen, business information or reports should begin to emerge or flow down into your hard drive.",
  },
    {
      heading: "TallyPrime",
      shortDec: "Emergence of Tally from Simple Accounting Software to Enterprise Solutions",
      fullDec: "Accounting has come a long way in this decade. Earlier businesses depended upon barely educated munim who was a familiar figure painted in a loin cloth with a pen tucked away behind earlobes and the conical native hat. The business was not a scientifically organized group of activities then. Manufacturing & trades were conducted less methodically with few insights backing a move. Lady luck, and answer to the prayers were the success paradigm in old days.",
    },
    {
      heading: "Spine Hr Suite",
      shortDec: "Payroll & Asset Management Solutions",
      fullDec: "It is application software that is used to manage various aspects of employees in an organization. The functions include employee salary management, tax considerations, leave, attendance, and labor regulations that may impact the whole workforce. The HR and higher staff are responsible for overseeing workforce performance, and compliance with the regulations. An HRMS integrates with the accounting system delivering valuable insights into the financial matters that are most impacted by a large workforce.",
    },
    {
      heading: "Spine Assets",
      shortDec: "Payroll Software System Payment on Finger Tips",
      fullDec: "In this contemporary IT age, IT infrastructures and services are flourishing globally. Hence, it is not surprising that a large number of businesses are integrating payroll software. Businesses no longer prefer to employ accountants for bookkeeping and maintenance, tedious time-consuming tasks. Almost all functions are now being carried out with the push of the keys or buttons thanks to advanced computerization applications.",
    },
    {
      heading: "Biz Analyst",
      shortDec: "Analyze and increase sales with Biz Analyst",
      fullDec: "Biz Analyst is your very own business growth app – Tally on the go. Now download Tally on your mobile through Biz analyst and stay connected with your business anywhere and anytime. No more dependency on your accountants or office to access Tally. Data entry to following up with customers can all be done easily on the go.",
    },
    {
      heading: "Other",
      shortDec: "Customer is King!",
      fullDec: "Metavision takes great pride in understanding client requirements and the need to customize as per their unique requirements. We understand the importance of customization as it increases perceived service quality in the eyes of your customers and will help you surge ahead of your competitors.",
    },
  ];
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
            PRODUCTS & SERVICES
          </h4>
          <img src={herobg} alt=""id="hero-bg" />
        </div>

        <div className="aboutus-news">

        {aboutData.map((news) => (
          <div className="aboutnews">
            <div className="about-up">
              <div className="about-up-head">
                <h3>{news.heading}</h3>
                <img src={line} alt="" />
              </div>

              <h2>{news.shortDec}</h2>
            </div>
            <div className="about-down">
              <p>{news.fullDec}</p>
            </div>
          </div>
        ))}
        </div>

        <MetaVision />
      </div>
    </Suspense>
  );
};

export default Product;
