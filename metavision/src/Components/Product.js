import React from 'react'
import "../Style/Product.css";
import "../Style/Global.css";
import product1 from "../assets/img/p1.svg";
import product2 from "../assets/img/p2.svg";
import product3 from "../assets/img/p3.svg";
import product4 from "../assets/img/p4.svg";
import product5 from "../assets/img/p5.svg";
import product6 from "../assets/img/p6.svg";
import line from "../assets/img/breakline.svg";

const productData = [
    {
        id:"01",
        name:"F-1 MIS",
        proimg:product1,
        decription:"Management Information System (MIS) is extremely crucial as it helps with management and operational control, strategic planning, as well as in goal setting. Now, analyze multiple companies and financial year data with quick, accurate and flexible and customized F1-MIS reporting."
    }
    ,
    {
        id:"02",
        name:"TallyPrime",
        proimg:product2,
        decription:"A whole new experience for business owners with Tally Prime. New simple, easy to operate, actionable customized reports with anytime secured access. You can even personalize reports and make multiple views of the same report with Tally Add ons."
    }
    ,   {
        id:"03",
        name:"Spine Hr Suite",
        proimg:product3,
        decription:"Human Resources is the most valuable resource of the organization. Make Optimum utilization of Human resources with the help of Spine HRMS to increase productivity and performance of the Human resources as well as of the organization."
    },
    {
        id:"04",
        name:"Spine Assets",
        proimg:product4,
        decription:"Better tracking of assets, compliance, maintenance, insurance policies and service contracts with Spine Fixed Asset Management. With Asset Auditing, accurate tracking and timely help reduce your overheads and see your Returns grow."
    },
    {
        id:"05",
        name:"Biz Analyst",
        proimg:product5,
        decription:"Always stay on top of your business no matter where you are. Enjoy detailed sales analysis, save time, and finish data entry with help of the app, and increase productivity with easy follow ups with customers. All of this at your fingertips with the Biz Analyst App."
    }
    ,
    {
        id:"06",
        name:"Other",
        proimg:product6,
        decription:"Metavision takes great pride in understanding client requirements and the need to customize as per their unique requirements. We understand the importance of customization as it increases perceived service quality in the eyes of your customers."
    }
]

const Product = () => {

  return (
    <div>
        <div className="product">

            <h3>/ Products /</h3>
            <h1>Our Products</h1>
            <p>Now eliminate all barriers to success with Optimum business solutions as per your business requirements from our products range.</p>

            <div className="product-range">
                {productData.map(product=>(
                <div className="pro-box">
                    <div className="pro-head">
                        <img src={product.proimg} alt="" />
                        <h1>{product.id}</h1>
                    </div>
                    <h2>{product.name}</h2>
                    <img src={line} alt="" id='line' />
                    <p>{product.decription}</p>
                </div>
                ))}

            </div>



        </div>
    </div>
  )
}

export default Product