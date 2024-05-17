import React, { useState } from "react";
import img from "../../img/about.webp";
import "./Abouthome.css";
import Course from "../Course/Course";
import datas from '../../Data/DataAbouthome'
function Abouthome() {
  return (
    <div className="abouthome">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-6">
            <img src={img} alt="" className="cover-img" />
          </div>
          <div className="col-lg-6">
            <h5 className="mt-4">LEARN ANYTHING</h5>
            <h2 className="fs-1 mt-3">
              Benefits About Online Learning Expertise
            </h2>
            {
              datas.map( (data)=>(
                <Course data={data} key={data.id} />
              ))
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouthome;
