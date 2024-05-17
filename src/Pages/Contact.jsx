import React from "react";
import Hero from "../Components/Hero/Hero";
import '../Styles/Contact.css'
import FormContact from "../Components/form/FormContact"
import Footer from "../Components/Footer/Footer"
function Contact() {
  const map ="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d894745.2088900702!2d30.832357950000002!3d28.83592815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1715686774354!5m2!1sar!2seg"
  return (
    <div className="contact">
      <Hero Title={"contact us"} subTitle={"contact"} />
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-6 mt-5 p-0">
            <iframe
              src ={map}
              className="w-100 h-100 p-0"
            ></iframe>
          </div>
          <div className="col-lg-6 p-0">
            <div className="contact-text p-5 bg-white">
              <h4>Contact us</h4>
              <p className=" text-black-50 fs-5">We're open for any suggestion or just to have a chat</p>
              <div className="contact-lists d-flex gap-4">
                <div className="contact-list ">
                  <h4 className="fs-6 text-uppercase">ADDRESS:</h4>
                  <p className=" text-black-50">198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="contact-list">
                  <h4 className="fs-6 text-uppercase">EMAIL:</h4>
                  <p className=" text-black-50">info@yoursite.com</p>
                </div>
                <div className="contact-list">
                  <h4 className="fs-6 text-uppercase">PHONE:</h4>
                  <p className=" text-black-50">+1235235598</p>
                </div>
              </div>
              <div className="inputs">
                <div className="input d-flex  justify-content-between gap-2 my-4">
                <input type="text" placeholder="Name" className="w-100 p-2" />
                <input type="email" placeholder="Email" className="w-100 p-2" />
                </div>
                <input type="text" placeholder="Subject" className="w-100 p-2 mb-4"  />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="w-100 h-100 p-2"
                  placeholder="Create a message here..."
                ></textarea>
                <button className="btn main-btn text-white my-2">Send message</button>
                <h4 className="fw-bold">Follow us here</h4>
                <h5 className="main-color fs-6">FACEBOOK TWITTER INSTAGRAM DRIBBBLE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormContact/>
      <Footer/>
    </div>
  );
}

export default Contact;
