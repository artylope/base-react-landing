import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Home</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
