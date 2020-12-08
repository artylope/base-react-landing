import React, { Component } from "react";
import "./App.scss";

import Masthead from "components/Masthead";
import OgpFooter from "components/OgpFooter";

import ProductHeader from "components/ProductHeader";
import ProductFooter from "components/ProductFooter";

import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Home from "routes/Home";
import Faq from "routes/Faq";
import Tou from "routes/Tou";
import Privacy from "routes/Privacy";

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Masthead />
        <ProductHeader />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/tou">
            <Tou />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <ProductFooter />
        <OgpFooter />
      </HashRouter>
    );
  }
}

export default App;
