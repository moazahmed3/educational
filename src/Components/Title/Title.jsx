import React from "react";

const Title = ({title,titleSub})=> {
  
  return (
    <div className="title text-center py-2">
      <h4 className="main-color">{title}</h4>
      <h4 className="fs-1 fw-bold">{titleSub}</h4>
    </div>
  );
}

export default Title;
