import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./ProductHeader.scss";
import productLogo from "img/logo.svg";

class ProductHeader extends Component {
  render() {
    return (
      <div className="product-header-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 header-left">
              <div className="product-logo">
                <Link to="/">
                  <img src={productLogo} />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 header-right">
              <nav>
                <ul>
                  <li>
                    <NavLink to="/faq" activeClassName="active">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/privacy" activeClassName="active">
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tou" activeClassName="active">
                      Terms of Use
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mailto:test@email.com">Contact Us</NavLink>
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

export default ProductHeader;
