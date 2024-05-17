import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Header from "./../Components/Header/Header";
import Head from "./../Components/Head/Head";
import Hero from "./../Components/Hero/Hero";
import Cardpricing from "../Components/CardPricing/CardPricing";
import Title from "./../Components/Title/Title";
import dataCardPricing from "./../Data/DataCardPricing";
import ListAccordion from "../Components/ListAccordion/ListAccordion";
import FormContact from "../Components/form/FormContact"
import Footer from "../Components/Footer/Footer"
import dataFAQS from "../Data/FAQS";
function Pricing() {
  return (
    <div className="pricing">
      <Hero Title={"Choose the right plan"} subTitle={"pricing"} />
      <div className="container">
        <div className="row py-5">
          {dataCardPricing.map((data) => (
            <div className="col-lg-3 col-md-6 mt-5" key={data.id}>
              <Cardpricing data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* card pricing */}
      <Title title={"FAQS"} titleSub={"Frequesntly Ask Question"} />
      {/* title */}
      <div className="container py-5">
        <Accordion defaultActiveKey="0">
          {dataFAQS.map((data) => (
            <ListAccordion data={data} key={data.id} />
          ))}
        </Accordion>
      </div>
      {/* Accordion */}
      <FormContact/>
      <Footer/>
    </div>
  );
}

export default Pricing;
