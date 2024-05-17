import React from 'react'
import './CardCourseOnline.css'
const CardCourseOnline =(prop)=> {
    const {data} =prop
  return (
    <div className="cardOnline bg-white text-center rounded p-3">
    <span className="main-color my-3 d-inline-block">
      {data.icon}
    </span>
    <h5 className="fs-4">{data.title}</h5>
    <p className="p-1 rounded main-color bg-body-secondary mt-4">
      {data.course} Course
    </p>
  </div>
  )
}

export default CardCourseOnline
