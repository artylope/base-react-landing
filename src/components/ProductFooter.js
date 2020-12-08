import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductFooter.scss";
import productLogo from "img/logo-white.svg";

class ProductFooter extends Component {
  render() {
    return (
      <div className="product-footer-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-logo">
                <img src={productLogo} />
                <p className="tagline">Make something great again!</p>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="">FAQ</Link>
                  </li>
                  <li>
                    <Link to="">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductFooter;
