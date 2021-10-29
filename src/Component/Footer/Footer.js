import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Travel-Hype</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  
                </p>

                <p className="mt-5">
                  <small>Travel-Hype © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                
                  <Link className="footer-menu text-decoration-none text-white pb-4" to="/home">Home</Link>
                  <br />
                  <Link className="footer-menu text-decoration-none text-white" to="/services">Services</Link>
                  <br />
                  <Link className="footer-menu text-decoration-none text-white pb-4" to="/doctors">Login</Link>
                  <br />
                  <Link className="footer-menu text-decoration-none text-white pb-4" to="/about">About Us</Link>
                  <br />
                  <Link className="footer-menu text-decoration-none text-white pb-4" to="/contact">Contact Us</Link>
                  <br />
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for <br /> the Travel-Hype</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center mt-4">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+0123456789</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      Banani,
                      <br /> 102 1st Avenue, Dhaka,Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;