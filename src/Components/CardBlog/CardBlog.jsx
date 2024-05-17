import React from "react";
import "./CardBlog.css";
import { FaCalendarDays } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
const CardBlog = (prop) => {
  const { data } = prop;
  return (
    <div className="cardBlog bg-white rounded">
      <img src={data.img} alt="" className="img-fluid" />
      <div className="cardBlogContent  p-4 mt-4">
        <div className="iconsBlog d-flex  py-1">
          <div className="iconBlog">
            <span className="d-flex align-items-center gap-2">
              <FaUserAlt className="main-color" />
              <label className="text-uppercase text-black-50 fw-bold">
                {data.type}
              </label>
            </span>
          </div>
          <div className="iconBlog mx-3">
            <span className="d-flex align-items-center gap-2">
              <FaCalendarDays className="main-color" />
              <label className="text-uppercase text-black-50 fw-bold">
                {data.date}
              </label>
            </span>
          </div>
          <div className="iconBlog">
            <span className="d-flex align-items-center gap-1">
              <FaComments className="main-color" />
              <label className="text-uppercase text-black-50 fw-bold">
                {data.comments} COMMENTS
              </label>
            </span>
          </div>
        </div>
        <h3 className="mt-3">{data.title}</h3>
        <p className="text-black-50 mt-3 fs-5">
         {data.subject}
        </p>
      </div>
    </div>
  );
};

export default CardBlog;
