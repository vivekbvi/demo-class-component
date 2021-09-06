import React from "react";
import classes from "./Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarker,
} from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.bgDarkBlue}>
        <div className={`container ${classes.bgDarkBlue}`}>
          <div className="row pt-5 pb-5 ml-lg-5">
            <div
              className={`col-xl-3 col-lg-3 col-md-6 col-12 text-center text-lg-left text-xl-left ${classes.listing}`}
            >
              <h5 className="mt-4">FAQ's</h5>
              <p className={`pt-4 ${classes.links}`}>How To Return Book</p>
              <p className={classes.links}>Trouble In Login</p>
              <p className={classes.links}>Privacy Policy</p>
              <p className={classes.links}>Terms Of Use</p>
            </div>
            <div
              className={`col-xl-3 col-lg-3 col-md-6 col-12 text-center text-lg-left text-xl-left ${classes.listing}`}
            >
              <h5 className="mt-4">About Us</h5>
              <p className={`pt-4 ${classes.links}`}>About Us</p>
              <p className={classes.links}>BookClub Awards</p>
              <p className={classes.links}>Contact Us</p>
              <p className={classes.links}>Feedback</p>
            </div>
            <div
              className={`col-xl-3 col-lg-3 col-md-6 col-12 text-center text-lg-left text-xl-left ${classes.listing}`}
            >
              <h5 className="mt-4">Follow Us On</h5>
              <ul className={`pt-4 pl-0 ${classes.icons}`}>
                <li>
                  <FaFacebook size="2em" className={classes.icon} />
                </li>
                <li>
                  <FaTwitter size="2em" className={classes.icon} />
                </li>
                <li>
                  <FaInstagram size="2em" className={classes.icon} />
                </li>
              </ul>
            </div>
            <div
              className={`col-xl-3 col-lg-3 col-md-6 col-12 text-center text-lg-left text-xl-left ${classes.listing}`}
            >
              <h5 className="mt-4">Our Locations</h5>
              <ul className={`pt-4 pl-0 ${classes.icons}`}>
                <li>
                  <FaMapMarker className="mt-1 mr-2" /> Titanuim Heights II{" "}
                  <br /> GH-0, InfoCity, Gandhinagar, Gujarat, INDIA
                </li>
                <li>
                  <FaMapMarker className="mt-1 mr-2" /> Silver Heights I <br />
                  XY-0, Borivalli, Mumbai, Maharastra, INDIA
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`pt-2 ${classes.rights}`}>
          <p>2010-2021 BookClub Bookstores Ltd. All Rights Reserved.</p>
          <p>Powered By BookClub</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
