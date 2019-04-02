import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Context from "../context";

export default class Buy extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <div style={{ margin: "auto" }}>
              <Row className="cards">
                <Col style={{ maxWidth: "25%" }}>
                  <div className={ctx.state.status}>
                    <div className="infocard">
                      <div className="status">
                        <div className="avail">معروض للبيع حالياً</div>
                        <div className="sold">تم بيعه</div>
                      </div>
                      <div>
                        <div>
                          <img
                            className="img"
                            src={ctx.state.img}
                            alt="wrapkit"
                            style={{ paddingBottom: 20 }}
                          />
                        </div>
                        <div className="details">
                          <p
                            style={{
                              fontFamily: "jannaR",
                              paddingTop: 20,
                              fontSize: "1.5rem"
                            }}
                          >
                            {ctx.state.name}
                          </p>
                          <p
                            style={{
                              fontFamily: "jannaR",
                              paddingBottom: 40,
                              paddingTop: 20
                            }}
                          >
                            د.ع {ctx.state.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{ backgroundColor: "#316ce8" }}
                      className="infocard"
                    >
                      <div className="details">
                        <p
                          style={{
                            color: "white",
                            width: "200px",
                            whiteSpace: "wrap",
                            padding: 15,
                            fontFamily: "jannaR"
                          }}
                        >
                          {ctx.state.description}
                        </p>
                      </div>
                    </div>

                    <div className="infobutton">
                      <Link
                        to="#"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <button style={{ minWidth: 300 }}>
                          اشتري هسة و شاركه على الفيس بوك
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="infobuttonx">
                    <Link
                      to="/sell"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button style={{ minWidth: 300 }}>
                        تريد تبيع صديقك ؟ دوس هنا
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
