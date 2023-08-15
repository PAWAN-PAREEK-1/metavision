import React from "react";
import "../Style/Services.css";
import "../Style/Global.css";
import services1 from "../assets/img/s1.svg";
import arrow from "../assets/img/rightDoubleArrow.svg";

const serviceData = [
  {
    serimg: services1,
    name: "MIS Consultation",
    points: [
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",

    ],
  },
  {
    serimg: services1,
    name: "MIS Consultation",
    points: [
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",

    ],
  },
  {
    serimg: services1,
    name: "MIS Consultation",
    points: [
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",
      "Real time Data from Tally ERP9",

    ],
  },


];

const Services = () => {
  return (
    <div>
      <div className="product serv">
        <h3>/ Our Services /</h3>
        <h1>Services</h1>
        <p>
          Now look no further as Metavision has extensive modules that cater to
          diverse business software needs start-to-finish. We provide
          customizations to fulfill each and every client’s requirement.
        </p>

        <div className="service-box">
          {serviceData.map((service, index) => (
            <div className="sevices" key={index}>
              <img src={service.serimg} alt="" id="serimg" />
              <div className="serv-detail">
                <h4>{service.name}</h4>
                {service.points.map((point, pointIndex) => (
                  <h5 key={pointIndex}>
                    <img src={arrow} alt="" />
                    {point}
                  </h5>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Services;
