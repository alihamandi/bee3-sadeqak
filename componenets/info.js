import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

export default class Info extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ margin: 70 }}>
        <Row className="cards">
          <Col style={{ maxWidth: "25%" }}>
            <div className="infocard">
              <div className="name">محمد ضياء الدين</div>
              <div>
                <div>
                  <img
                    className="img"
                    src="https://picsum.photos/300/300"
                    alt="wrapkit"
                    style={{ paddingBottom: 20 }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "jannaB",
                      paddingBottom: 40,
                      paddingTop: 20
                    }}
                  >
                    د.ع 1000
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#316ce8" }} className="infocard">
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
                  حمدون كلش يحب الأكل الحار واني ما احبة سو اريد ابيعة حمدون كلش
                  يحب الأكل الحار واني ما احبة سو اريد ابيعة حمدون كلش يحب الأكل
                  الحار واني ما احبة سو اريد ابيعة حمدون كلش يحب الأكل الحار
                  واني ما احبة سو اريد ابيعة حمدون كلش يحب الأكل الحار واني ما
                  احبة سو اريد ابيعة حمدون كلش يحب الأكل الحار واني ما احبة سو
                  اريد ابيعة
                </p>
              </div>
            </div>

            <div className="infobutton">
              <button>
                <Link
                  to="sell"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  تريد تبيع صديقك؟ دوس هنا هسه
                </Link>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
