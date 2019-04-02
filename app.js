import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./componenets/home";
import Info from "./componenets/info";
import Sell from "./componenets/sell";
import Buy from "./componenets/buy";
import Context from "./context";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "available",
      id: "",
      name: "",
      img: "",
      price: 0,
      description: ""
    };
  }
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setstate: x => {
              this.setState({
                status: x.status,
                id: x.id,
                name: x.name,
                img: x.img,
                price: x.price,
                description: x.description
              });
            }
          }
        }}
      >
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
      </Context.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
