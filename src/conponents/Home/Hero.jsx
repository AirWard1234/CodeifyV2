import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="header">
          <h1>Make Your Wildest Dreams Come True!</h1>
          <h2>
            <span>With Codeify</span>
          </h2>
          <h4>
            Specialized AI Web-broweser set on making developers lives easier!
          </h4>
          <Link to={"/code"}>
            <button class="cssbuttons-io">
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                    fill="currentColor"
                  ></path>
                </svg>
                Code
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
