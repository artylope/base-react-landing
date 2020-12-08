import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Tou.scss";

class Tou extends Component {
  render() {
    return (
      <div className="tou-page-container">
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

export default Tou;
