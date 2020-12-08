import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./TermsOfUse.scss";

class TermsOfUse extends Component {
  render() {
    return (
      <div className="terms-of-use-page-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Terms of Use</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsOfUse;
