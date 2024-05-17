import React from "react";
import Hero from "../Components/Hero/Hero";
import FormContact from "../Components/form/FormContact"
import dataBlog from "../Data/DataBlog";
import CardBlog from "../Components/CardBlog/CardBlog";
import Footer from "../Components/Footer/Footer";
function Journal() {
  return (
    <div className="journal">
      <Hero Title={"Blog Posts"} subTitle={"journal"} />
      <div className="container py-5">
        <div className="row">
         {
          dataBlog.map((data)=>(
            <div className="col-lg-4 col-md-6 mt-5" key={data.key}>
            <CardBlog data={data}/>
          </div>
          ))
         }
        </div>
      </div>
      <FormContact/>
      <Footer/>
    </div>
  );
}

export default Journal;
