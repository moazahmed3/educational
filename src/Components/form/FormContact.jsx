import React from "react";
import './FormContact.css'
function FormContact() {
  return (
    <div className="formContact">
      <div className="container py-4">
        <div className="row  align-items-center">
          <div className="col-lg-6">
            <h2 className="text-light">Newsletter - Stay tune and get the latest update</h2>
            <p className="text-light mt-3 fw-bolder">Far far away, behind the word mountains</p>
          </div>
          <div className="col-lg-6">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-100 p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
