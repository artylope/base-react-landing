import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Faq.scss";

class Faq extends Component {
  render() {
    return (
      <div className="faq-page-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Faq</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
