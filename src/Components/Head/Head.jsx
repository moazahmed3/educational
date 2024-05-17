import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import "./Head.css";
function Head() {
  return (
    <>
      <div className="head">
        <div className="container ">
          <div className="row d-flex justify-content-lg-between align-items-baseline  ">
            <div className="col-lg-6">
              <div className="heading  text-lg-start text-md-center">
                <h1 className="fs-3 fw-bold">ACADEMIA</h1>
                <h5 className="fs-5 fw-bold">ONLINE EDUCATION & LEARNING</h5>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-md-4 mt-sm-4 mt-xl-4 pb-4">
              <div className="social-media text-lg-end mt-lg-0">
                <span className="m   rounded-pill">
                  <FaFacebookF />
                </span>
                <span className="m ms-3  rounded-pill">
                  <FaInstagram />
                </span>
                <span className="m ms-3  rounded-pill">
                  <FaTwitter />
                </span>
                <span className="m ms-3  rounded-pill">
                  <FaYoutube />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
