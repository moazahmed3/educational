import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IconName } from "react-icons/fa6";
import img1 from "../../img/heroAll.webp";
import img2 from "../../img/b2.webp";
import img3 from "../../img/b3.webp";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer pt-5">
      <div className="container py-5">
        <div className="row gap-4  py-5">
          <div className="col-lg-2 col-md-5 mt-lg-0  mt-md-0 mt-sm-5 mb-sm-5">
            <h3 className="fw-bold fs-1">ACADEMIA</h3>
            <h5>ONLINE EDUCATION & LEARNING</h5>
            <p className=" text-black-50 py-2 lh-base fs-5">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="footer-media">
              <span className="rounded-pill">
                <FaFacebookF />
              </span>
              <span className="rounded-pill">
                <FaInstagram />
              </span>
              <span className="rounded-pill">
                <FaTwitter />
              </span>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 mt-lg-0  mt-md-0 mt-sm-5">
            <h4>Explore</h4>
            <ul className="px-0">
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>
                <Link to="/educational">About as</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>

                <Link to="/">Services</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>

                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>

                <Link to="/journal">Blog</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-5  mt-lg-0 mt-sm-5">
            <h4>Quick Links</h4>
            <ul className="px-0">
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>

                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>
                <Link to="/team"> Terms & Conditions</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>
                <Link to="/"> Privacy</Link>
              </li>
              <li>
                <span className="me-1 icon-footer">
                  <FaArrowRightLong />
                </span>

                <Link to="/pricing">Feedbacks</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-5 mt-lg-0 mt-sm-5">
            <h4 className="mb-4">Recent Post</h4>
            <div className="d-flex gap-2">
              <span>
                <img src={img1} alt="" className="img-footer rounded" />
              </span>
              <div className="text-footer-list">
                <h5>
                  <span className="pe-2 d-inline-block">
                    <FaCalendarAlt />
                  </span>
                  JAN 18, 2021
                  <span className="px-2 d-inline-block">
                    <FaUserLarge />
                  </span>
                  Admin
                </h5>
                <p className="fs-6 text-black-50">
                  Build your Dream Software & Engineering ...
                </p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <span>
                <img src={img2} alt="" className="img-footer rounded" />
              </span>
              <div className="text-footer-list">
                <h5>
                  <span className="pe-2 d-inline-block">
                    <FaCalendarAlt />
                  </span>
                  JAN 18, 2021
                  <span className="px-2 d-inline-block">
                    <FaUserLarge />
                  </span>
                  Admin
                </h5>
                <p className="fs-6 text-black-50">
                  Build your Dream Software & Engineering ...
                </p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <span>
                <img src={img3} alt="" className="img-footer rounded" />
              </span>
              <div className="text-footer-list">
                <h5>
                  <span className="pe-2 d-inline-block">
                    <FaCalendarAlt />
                  </span>
                  JAN 18, 2021
                  <span className="px-2 d-inline-block">
                    <FaUserLarge />
                  </span>
                  Admin
                </h5>
                <p className="fs-6 text-black-50">
                  Build your Dream Software & Engineering ...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5  mt-lg-0 mt-sm-5">
            <h4 className="fs-5">Have a Questions?</h4>
            <ul className="p-0">
              <li className="questions d-flex gap-2 text-black-50 align-items-start ">
                <span>
                  <IoBook />
                </span>
                203 Fake St. Mountain View, San Francisco, California, USA
                <p></p>
              </li>
              <li className="questions d-flex gap-2    mt-4 text-black-50">
                <span>
                  <IoCallSharp />
                </span>
                +2 392 3929 210
              </li>
              <li className="questions d-flex gap-2 text-black-50">
                <span>
                  <FaTelegramPlane />
                </span>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="developer py-5 text-center ">
        <div className="container">
          <p className="text-black-50 fw-bolder">
            Copyright ©2022 All rights reserved | This template is made with by{" "}
            <span className="maoz">
              <FaHeart />
            </span>
            <span className="maoz"> Moaz El Sabagh</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
