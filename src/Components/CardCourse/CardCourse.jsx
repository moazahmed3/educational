import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import img from "../../img/about.webp";
import "./CardCourse.css";
const CardCourse = (prop)=> {
  const {data}=prop;
  return (
    
    <div className="cardCourse rounded ">
      <div className="card-icon-text d-flex ">
        <div className="left-icon me-3">
          <span className="icon-course rounded-pill p-2">
            {data.icon}
          </span>
        </div>
        <div className="text-course ">
          <h2 className="w-50">{data.title}</h2>
          <div className="stars gap-2 ">
            <span className="star">
              <FaStar />
            </span>
            <span className="star">
              <FaStar />
            </span>
            <span className="star">
              <FaStar />
            </span>
            <span className="star">
              <FaStar />
            </span>
            <span className="star">
              <FaStar />
            </span>
            <span className="star">(5.0)</span>
          </div>
          <div className="img-instructor mt-3 d-flex flex-column">
            <div className="box ">
              <img src={img} alt="" className="img-fluid rounded-pill" />
              <span className="name-instructor fw-bold text-black-50 ms-4 fw-bolder">
                {data.engineer}
              </span>
            </div>
            <p className="hours mt-3 fs-6 fw-bolder d-inline-block">
            {data.lectures} lectures ({data.hours} hrs)
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="content-course p-1 fs-5 fw-bolder d-inline-block">
          {data.price}
        </p>
      </div>
        <button className="btn-course btn-outline-primary btn p-3 w-100  ">
          ENROLL NOW !
        </button>
    </div>
  );
}

export default CardCourse;
