import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Context from "../context";

export default class Info extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <Row className="cards">
          <Col style={{ maxWidth: "25%" }}>
            <div className="infocard">
              <div className="name">تم عرضه للبيع</div>
              <div>
                <div>
                  <img
                    className="img"
                    src="https://picsum.photos/300/300"
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
                    محمد ضياء الدين
                  </p>
                  <p
                    style={{
                      fontFamily: "jannaR",
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
              <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                <button style={{ minWidth: 300 }}>شارك على الفيسبوك</button>
              </Link>
            </div>
            <div className="infobuttonx">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <button style={{ minWidth: 300 }}>
                  شوف الاصدقاء المعروضين هسة
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
