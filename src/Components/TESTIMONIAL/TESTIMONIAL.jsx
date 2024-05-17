import React from "react";
import img from "../../Components/TESTIMONIAL/img/t1.webp";
import { FaQuoteLeft } from "react-icons/fa";
import "./Style/testTimonial.css"
const TESTIMONIAL=(prop)=> {
  const {data} =prop
    return (
    <div className="testTimonial p-5 bg-white">
      <div className="top d-flex align-content-center align-items-center">
        <div className="img-test position-relative">
          <img src={data.img} alt="" className="rounded-pill" />
          <span className="quote position-absolute"><FaQuoteLeft /></span>
        </div>
        <div className="text-top ms-4">
          <h4>{data.name}</h4>
          <h6 className="main-color">{data.job}</h6>
        </div>
      </div>
      <p className=" text-black-50 mt-3 fs-5">
      {data.about}
      </p>
    </div>
  );
}

export default TESTIMONIAL;
