import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
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

        <div style={{ margin: 70 }}>
          <Row className="cards">
            <Col style={{ minWidth: "25%", maxWidth: "25%" }}>
              <Link className="card" to="/info">
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
                        حمدون كلش يحب الأكل الحار واني ما احبة سو اريد ابيعة
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
            </Col>
          </Row>
        </div>

        <div style={{ margin: 100 }}>
          <Row style={{ display: "flex", alignContent: "space-around" }}>
            <Col>
              <div className="button">
                <button>
                  <Link
                    to="sell"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    اعرض صديقك للبيع
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
