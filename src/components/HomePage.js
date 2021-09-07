import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainContent from "./mainContent/MainContent";

export default class HomePage extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { data } = this.props.location;
    console.log(data);
    return (
      <Fragment>
        <div className="main-div">
          {/* Navbar */}
          <Header />

          {/* Main Data from API component */}
          <MainContent data={data} />

          {/* Footer */}
          <Footer />
        </div>
      </Fragment>
    );
  }
}
