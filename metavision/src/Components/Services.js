



import React, { useState } from "react";
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
  const itemsPerGroup = 3;
  const totalGroups = Math.ceil(serviceData.length / itemsPerGroup);

  const [activeGroup, setActiveGroup] = useState(0);

  const visibleServices = serviceData.slice(
    activeGroup * itemsPerGroup,
    (activeGroup + 1) * itemsPerGroup
  );

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
          {visibleServices.map((service, index) => (
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
  );
};

export default Services;

