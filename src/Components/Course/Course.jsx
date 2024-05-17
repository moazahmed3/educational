import React from "react";
import "./Course.css";
const cardAbout =(prop) => {
    const {data}=prop;
  return (
    <div className="course d-flex bg-white p-4 gap-4 mt-5 rounded">
      <div className="icon">
         <img src={data.icon} alt="" />
      </div>
      <div className="course-text">
        <h4 className="text-black fs-4">{data.heading}</h4>
        <p className="text-black-50 fs-5 lh-base">
         {data.text}
        </p>
      </div>
    </div>
  );
}

export default cardAbout;
