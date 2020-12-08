import React, { Component } from "react";
import "./App.scss";

import Masthead from "components/Masthead";

import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  Link,
} from "react-router-dom";

class App extends Component {
  render() {
    function Home() {
      return <h2>Home</h2>;
    }

    function About() {
      return <h2>About</h2>;
    }

    function Users() {
      return <h2>Users</h2>;
    }

    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Masthead />
        <div className="box">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
