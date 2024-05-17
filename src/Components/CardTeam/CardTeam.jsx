import React from "react";
import "./CardTeam.css";
import img1 from "./../../img/Team/t1.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const CardTeam = (prop) => {
  const { data } = prop;
  return (
    <div className="cardTeam bg-white text-center  rounded position-relative">
      <div className="img-team position-relative" >     
        <img src={data.img} alt="" className=" img-fluid" />
        <div className="social-media-team position-absolute">
        <span className="rounded-pill bg-black d-block">
          <FaFacebookF />
        </span>
        <span className="rounded-pill bg-black d-block">
          <FaInstagram />
        </span>
        <span className="rounded-pill bg-black d-block">
          <FaTwitter />
        </span>
        <span className="rounded-pill bg-black d-block">
          <FaYoutube />
        </span>
      </div>
      </div>
      <div className="content-team py-4">
        <h4 className="fs-5 mb-3">{data.name}</h4>
        <h5 className=" text-black-50 fs-6">{data.jop}</h5>
        <h6 className=" text-black-50">{data.work}</h6>
      </div>
      
    </div>
  );
};

export default CardTeam;
