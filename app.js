import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./componenets/home";
import Info from "./componenets/info";
import Sell from "./componenets/sell";
import Buy from "./componenets/buy";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          // component={localStorage.getItem("token") ? Logged : Main}
          component={Home}
        />
        <Route
          exact
          path="/info"
          // component={localStorage.getItem("token") ? Logged : Main}
          component={Info}
        />
        <Route
          exact
          path="/sell"
          // component={localStorage.getItem("token") ? Logged : Main}
          component={Sell}
        />
        <Route
          exact
          path="/buy"
          // component={localStorage.getItem("token") ? Logged : Main}
          component={Buy}
        />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
