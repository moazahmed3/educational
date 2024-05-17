import React from "react";
import brand1 from "../../img/brand1.png";
import brand2 from "../../img/barend-2.png";
import brand3 from "../../img/barend-3.png";
import brand4 from "../../img/barend-4.png";
import "./Barend.css";
function Barend() {
  return (
    <div className="barends p-5 mt-1">
      <div className="container">
        <div className="row j justify-content-around align-items-center">
          <div className="col-lg-2 col-md-5">
            <div className="barend d-flex ju justify-content-between align-items-center gap-3">
              <img src={brand1} alt="" />
              <div className="brend-text">
                <h4 className="text-light text-uppercase fs-3 fw-bold">3000</h4>
                <p className="text-light text-uppercase fs-4 fw-bold">
                  SUCCESS STORIES
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 d-none d-lg-block d-md-block gap-3 ">
            <div className="barend d-flex ju justify-content-between align-items-center gap-3">
              <img src={brand2} alt="" />
              <div className="brend-text">
                <h4 className="text-light text-uppercase fs-3 fw-bold">1536</h4>
                <p className="text-light text-uppercase fs-3 fw-bold">TRUSTED TUTORS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 d-none  d-lg-block">
            <div className="barend d-flex ju justify-content-between align-items-center gap-3">
              <img src={brand3} alt="" />
              <div className="brend-text">
                <h4 className="text-light text-uppercase fs-3 fw-bold">200</h4>
                <p className="text-light text-uppercase fs-3 fw-bold">
                SCHEDULES
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 d-lg-block d-md-none d-sm-none">
            <div className="barend d-flex ju justify-content-between align-items-center gap-3">
              <img src={brand4} alt="" />
              <div className="brend-text">
                <h4 className="text-light text-uppercase fs-3 fw-bold">500</h4>
                <p className="text-light text-uppercase fs-3 fw-bold">
                COURSES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barend;
