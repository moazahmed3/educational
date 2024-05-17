import React from "react";
import CardCourse from "../Components/CardCourse/CardCourse";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import FormContact from "../Components/form/FormContact";
import "./../Styles/Courses.css";
import datasCourse from "./../Data/DataCourses";
import Title from "../Components/Title/Title";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { FaBluesky } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaDropletSlash } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEyeDropper } from "react-icons/fa6";
import dataOnline from "../Data/DataCourseOnline";
import CardCourseOnline from "../Components/CardCourseOnline/CardCourseOnline";
function Courses() {
  return (
    <div className="courses">
      <Hero Title={"Explore Courses"} subTitle={"Courses"} />
      <div className="container">
        <div className="row py-5">
          {datasCourse.map((data) => (
            <div className="col-lg-4 col-md-6 mt-5 ">
              <CardCourse data={data} key={data.id} />
            </div>
          ))}
        </div>
      </div>
      <Title title={"COURSES"} titleSub={"Browse Our Online Courses"} />
      <div className="container">
        <div className="row ">
          {dataOnline.map((data) => (
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3 " key={data.id}>
             <CardCourseOnline data={data} />
            </div>
          ))}
        </div>
      </div>
      <FormContact />
      <Footer />
    </div>
  );
}

export default Courses;
