import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [showBrand, setShowBrand] = useState(true);

  const handleToggle = () => {
    setShowBrand(!showBrand);
  };

  return (
    <div className="header">
      <div className="">
        <Navbar expand="lg" className="  mt-3 p-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  text-md-center text-sm-center text-xl-center pb-lg-0 pb-sm-3">
              <NavLink
                className=" mt-lg-0  ms-4 mt-md-3 mt-sm-3  text-decoration-none text-light"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className=" mt-lg-0  ms-4 mt-md-3 mt-sm-3  text-decoration-none text-light"
                to="/courses"
              >
                All Courses
              </NavLink>
              <NavLink
                className=" mt-lg-0  ms-4 mt-md-3 mt-sm-3  text-decoration-none text-light"
                to="/educational"
              >
                About
              </NavLink>
              <NavLink
                className="f mt-lg-0  ms-4 mt-md-3 mt-sm-3  text-decoration-none text-light"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className=" mt-lg-0  ms-4 mt-md-3 mt-sm-3  text-decoration-none text-light"
                to="/pricing"
              >
                Pricing
              </NavLink>
              <NavLink
                className=" mt-lg-0  ms-4 mt-md-3 mt-sm-3  text-decoration-none text-light"
                to="/journal"
              >
                Journal
              </NavLink>
              <NavLink
                className=" mt-lg-0  ms-4 mt-md-3 mt-sm-3  text-decoration-none text-light"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          {showBrand && (
            <Navbar.Brand className="px-5 py-3 m-0">
              <Link className="text-light fs-2   text-decoration-none " to="/">
                GET CERTIFICATE
              </Link>
            </Navbar.Brand>
          )}
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
