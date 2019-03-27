import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./componenets/home";

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
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
