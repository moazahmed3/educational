import React from "react";
import "../Styles/Home.css";
import Head from "../Components/Head/Head";
import Header from "../Components/Header/Header";
import Abouthome from "../Components/Abouthome/Abouthome";
import Barend from "../Components/baren/Barend";
import Title from "../Components/Title/Title";
import TESTIMONIAL from "../Components/TESTIMONIAL/TESTIMONIAL";
import datatest from "../Data/DataTESTIMONIAL";
import datasCourse from "../Data/DataCourses";
import CardCourse from "../Components/CardCourse/CardCourse";
import dataOnline from "../Data/DataCourseOnline";
import CardCourseOnline from "../Components/CardCourseOnline/CardCourseOnline";
import dataBlog from "../Data/DataBlog";
import CardBlog from "../Components/CardBlog/CardBlog";
import dataCardPricing from "../Data/DataCardPricing";
import Cardpricing from "../Components/CardPricing/CardPricing";
import FormContact from "../Components/form/FormContact";
import Footer from "../Components/Footer/Footer";
function Home() {
  return (
    <div className="homeall">
      <div className="home">
        <Head />
        <Header />
        <div className="container mt-5 pt-4">
          <div className="row w-75">
            <div className="col-lg-12">
              <h5 className=" text-light">WELCOME TO ACADEMIA</h5>
              <h1 className=" text-light">Best Online Education Expertise</h1>
              <p className=" text-light  lh-lg">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="btns row mt-0 mt-lg-5  ">
              <div className="col-lg-4 col-md-9">
                <button className="btn btn-primary rounded fs-5 py-2 px-4 main-btn ">
                  GET STARTED NOW
                </button>
              </div>
              <div className="col-lg-3 col-md-9 mt-lg-0 mt-md-4 mt-sm-3 mt-xl-0  ">
                <button className="btn btn-primary rounded fs-5 py-2 px-4 sec-btn ms-5 btn-none d-block ">
                  View Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card home */}
      <Abouthome />
      <div className="mb-5 pb-4">
        {" "}
        <Barend />
      </div>
      <Title
        title={"OUR COURSES"}
        titleSub={"Explore Our Popular Online Courses"}
      />

      <div className="container mb-5 pb-5">
        <div className="row ">
          {datasCourse.slice(0, 3).map((data) => (
            <div className="col-lg-4 col-md-6 mt-5" key={data.id}>
              <CardCourse data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* card course */}
      <Title title={"COURSES"} titleSub={"Browse Our Online Courses"} />
      <div className="container mb-5 pb-5">
        <div className="row ">
          {dataOnline.map((data) => (
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3 " key={data.id}>
              <CardCourseOnline data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* card online */}

      <Title title={"TESTIMONIAL"} titleSub={"Our Successful Students"} />
      <div className="container mb-5 pb-5">
        <div className="row">
          {datatest.map((data) => (
            <div className="col-lg-4 col-md-6 mt-5" key={data.id}>
              <TESTIMONIAL data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* test TESTIMONIAL */}

      <Title title={"OUR BLOG"} titleSub={"Recent From Blog"} />
      <div className="container pb-5 mb-5">
        <div className="row">
          {dataBlog.slice(0, 3).map((data) => (
            <div className="col-lg-4 col-md-6 mt-5" key={data.key}>
              <CardBlog data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* card Blog */}
      <Title title={"OUR PRICING"} titleSub={"Pricing & Packages"} />
      <div className="container ">
        <div className="row pb-5 mb-5">
          {dataCardPricing.map((data) => (
            <div className="col-lg-3 col-md-6 mt-5" key={data.id}>
              <Cardpricing data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* card Pricing */}
      <FormContact />
      <Footer />
    </div>
  );
}

export default Home;
