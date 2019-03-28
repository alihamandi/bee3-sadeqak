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
              <h6>قائمة الأصدقاء المعروضين للبيع</h6>
            </div>
          </Col>
        </Row>

        <div style={{ margin: 70 }}>
          <Row className="cards">
            <Col style={{ maxWidth: "25%" }}>
              <div className="card">
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
                      <p>د.ع 1000</p>
                      <p>
                        حمدون كلش يحب الأكل الحار واني ما احبة سو اريد ابيعة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div style={{ margin: 100 }}>
          <Row style={{ display: "flex", alignContent: "space-around" }}>
            <Col>
              <div className="button">
                <button>اعرض صديقك للبيع</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
