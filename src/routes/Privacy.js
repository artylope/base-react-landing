import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Privacy.scss";

class Privacy extends Component {
  render() {
    return (
      <div className="privacy-page-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Privacy</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;
