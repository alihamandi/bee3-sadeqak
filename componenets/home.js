import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Context from "../context";

let file = require("../test.json");
let obj = file.obj;

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <Container className="shit" fluid style={{ lineHeight: "32px" }}>
              <Row style={{ marginBottom: 100 }}>
                <Col>
                  <div className="header">
                    <h1 style={{ padding: 30 }}>الرئيسية</h1>
                    <div style={{ fontSize: "1rem" }}>
                      قائمة الأصدقاء المعروضين للبيع
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ display: "flex", alignContent: "space-around" }}>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <Link to="sell" className="button">
                      <button>اعرض صديقك للبيع</button>
                    </Link>
                  </div>
                </Col>
              </Row>
              {/* {console.log(document.documentElement.clientWidth)} */}
              <div style={{ margin: "auto" }}>
                <Row className="cards">
                  {/* debug sm={this.CheckDepth.bind(this)} */}

                  {obj.map((item, i) => {
                    return (
                      <Col
                        key={i}
                        className={item.status + "-home"}
                        onClick={() => {
                          ctx.actions.setstate({
                            status: item.status,
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            price: item.price,
                            description: item.description
                          });
                        }}
                      >
                        <Link
                          className="card"
                          to={{
                            pathname: "/buy",
                            search: `${item.id}`
                          }}
                        >
                          <div className="name">{item.name}</div>
                          <div>
                            <div>
                              <img className="img" src={item.img} alt="photo" />
                            </div>
                            <div>
                              <div className="details">
                                <div style={{ fontFamily: "jannaB" }}>
                                  <div className="avail">د.ع {item.price}</div>
                                  <div className="sold">تم بيعه</div>
                                </div>
                                <p
                                  style={{
                                    width: "200px",
                                    height: "70px",
                                    whiteSpace: "wrap",
                                    overflow: "hidden",
                                    paddingTop: 15,
                                    fontFamily: "jannaR",
                                    margin: "auto",
                                    marginBottom: -25
                                  }}
                                >
                                  {item.description}
                                </p>
                                <p
                                  style={{
                                    color: "#8d97ad",
                                    paddingBottom: 25
                                  }}
                                >
                                  .....
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    );
                  })}

                  {/* <Col
                    className={ctx.state.status}
                    onClick={() => {
                      ctx.actions.setstate({
                        status: "soldout",
                        id: "a12",
                        name: "ali hamandi",
                        img: "https://picsum.photos/400/400",
                        price: 100000,
                        description: "something"
                      });
                    }}
                  >
                    <Link className="card" to="/buy">
                      <div className="name">محمد ضياء الدين</div>
                      <div>
                        <div>
                          <img
                            className="img"
                            src="https://picsum.photos/300/300"
                            alt="wrapkit"
                          />
                        </div>
                        <div>
                          <div className="details">
                            <p style={{ fontFamily: "jannaB" }}>د.ع 1000</p>
                            <p
                              style={{
                                width: "200px",
                                height: "70px",
                                whiteSpace: "wrap",
                                overflow: "hidden",
                                paddingTop: 15,
                                fontFamily: "jannaR"
                              }}
                            >
                              حمدون كلش يحب الأكل الحار واني ما احبة سو اريد
                              ابيعة
                            </p>
                            <p
                              style={{
                                color: "#8d97ad"
                              }}
                            >
                              .....
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col> */}
                </Row>
              </div>

              <div style={{ margin: 100 }} />
            </Container>
          );
        }}
      </Context.Consumer>
    );
  }
}
