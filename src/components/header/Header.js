import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logomaincopy.png";
import classes from "./Header.module.css";
import SubHeader from "./subHeader";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Navbar className={classes.bgDarkblue} expand="lg" sticky="top">
            <Navbar.Brand
              href="#home"
              className="ml-md-5 ml-lg-5 text-md-center p-lg-0 p-1 p-xl-0"
            >
              <img
                src={logo}
                className={`p-3 ${classes.imageClass}`}
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className = "mr-4 justify-content-end" style={{ width: "95%" }}>
                <Nav.Link className="text-white mr-4 text-bold">
                  <Link to="/" className="text-white text-decoration-none mr-4">
                    Registration
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link" className="text-white mr-4 ml-4">
                  Contact us
                </Nav.Link>
                <Nav.Link className="text-white mr-4 text-decoration-none">
                  <Link to="/booklist" className="text-white text-decoration-none">
                    Browse Books
                  </Link>
                </Nav.Link>

                <Nav.Link className="text-white mr-4 text-decoration-none">
                  <Link to="/managebooks" className="text-white text-decoration-none">
                    Manage Books
                  </Link>
                </Nav.Link>

                <Nav.Link className="text-white mr-4 text-decoration-none">
                  <Link to="/Login" className="text-white text-decoration-none">
                    About Us
                  </Link>
                </Nav.Link>

                <Nav.Link href="#link" className="text-white mr-4 text-decoration-none">
                  Terms and Conditions
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <SubHeader />
      </Fragment>
    );
  }
}
