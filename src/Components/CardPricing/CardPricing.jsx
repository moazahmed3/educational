import React from 'react'
import './CardPricing.css'
function Cardpricing(prop) {
  const {data} =prop
  return (
    <div className="card-pricing p-4  bg-white text-center rounded">
      <h5 className="lh-base fw-bolder fs-6"> {data.title}</h5>
      <h1 className="main-color text-black">
        <span className="fs-5 fw-bold text-black">$</span> {data.price}K
      </h1>
      <p className="text-black-50 mt-5 fs-5 ">
       {data.subParagraph}
      </p>
      <button className="btn btn-pricing p-2 fs-6 fw-bold w-100 mt-4 rounded">GET STARTED</button>
    </div>
  )
}

export default Cardpricing
