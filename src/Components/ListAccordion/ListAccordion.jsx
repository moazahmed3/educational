import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./ListAccordion.css";
const ListAccordion=(prop)=> {
    const {data}=prop
    return (
    <div className="listAccordion ">
        <Accordion.Item eventKey={data.id}>
          <Accordion.Header>{data.question}</Accordion.Header>
          <Accordion.Body>
           {data.Answer}
          </Accordion.Body>
        </Accordion.Item>
      
    </div>
  );
}

export default ListAccordion;
