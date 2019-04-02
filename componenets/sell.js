import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Context from "../context";
import AOS from "aos";
AOS.init();

export default class Sell extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container className="shit" fluid style={{ lineHeight: "32px" }}>
        <Row style={{ marginBottom: 100 }}>
          <Col>
            <div className="header">
              <h1 style={{ padding: 30 }}>خطوة وحدة بس</h1>
              <div style={{ fontSize: "1rem" }}>
                بيع صديقك بخطوة وحدة بس، املي بياناته هسه
              </div>
            </div>
          </Col>
        </Row>

        <Row className="shit-2">
          <Col
            sm={4.5}
            style={{
              minWidth: "35%",
              maxWidth: "35%",
              padding: 20
            }}
          >
            <div
              className="how-to"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              شلون تبيع صديقك؟
            </div>
            <div
              className="how-to-card"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div style={{ padding: 10 }}>
                <img
                  style={{ width: 66, paddingLeft: 10 }}
                  src={require("../assets/a1.svg")}
                />
              </div>
              <div>
                <h6
                  style={{
                    color: "#3e4555",
                    fontSize: "1rem",
                    fontFamily: "jannaB"
                  }}
                >
                  طك صورة لصديقك
                </h6>
                <div
                  style={{
                    color: "#8d97ad",
                    fontSize: "1rem",
                    fontFamily: "jannaR"
                  }}
                >
                  ويمكن تحتاج فوتوشوب علمود تخليها احلى شوية الا اذا جنت ناوي
                  تحطله صورة مو حلوة :)
                </div>
              </div>
            </div>
            <div
              className="how-to-card"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div style={{ padding: 10 }}>
                <img
                  style={{ width: 66, paddingLeft: 10 }}
                  src={require("../assets/a2.svg")}
                />
              </div>
              <div>
                <h6
                  style={{
                    color: "#3e4555",
                    fontSize: "1rem",
                    fontFamily: "jannaB"
                  }}
                >
                  حط بيانات صديقك
                </h6>
                <div
                  style={{
                    color: "#8d97ad",
                    fontSize: "1rem",
                    fontFamily: "jannaR"
                  }}
                >
                  املي بيانات صديقك مثلا اكتب شنو المميزات الي بيه؟ وليش تريد
                  تبيعه؟ خلي الناس يقتنعون علمود تبيعه بسرعة
                </div>
              </div>
            </div>
            <div
              className="how-to-card"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div style={{ padding: 10 }}>
                <img
                  style={{ width: 66, paddingLeft: 10 }}
                  src={require("../assets/a3.svg")}
                />
              </div>
              <div>
                <h6
                  style={{
                    color: "#3e4555",
                    fontSize: "1rem",
                    fontFamily: "jannaB"
                  }}
                >
                  سوي شير
                </h6>
                <div
                  style={{
                    color: "#8d97ad",
                    fontSize: "1rem",
                    fontFamily: "jannaR"
                  }}
                >
                  شير البوست على الفيس بوك حتى تلكى احد يشتريه
                </div>
              </div>
            </div>
            <div
              className="how-to-card"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div style={{ padding: 10 }}>
                <img
                  style={{ width: 66, paddingLeft: 10 }}
                  src={require("../assets/a4.svg")}
                />
              </div>
              <div>
                <h6
                  style={{
                    color: "#3e4555",
                    fontSize: "1rem",
                    fontFamily: "jannaB"
                  }}
                >
                  اشتري واحد جديد
                </h6>
                <div
                  style={{
                    color: "#8d97ad",
                    fontSize: "1rem",
                    fontFamily: "jannaR"
                  }}
                >
                  دورلك على صديق جديد حتى تشتريه
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm={7.5}
            style={{
              minWidth: "60%",
              maxWidth: "60%",
              paddingRight: 50,
              marginTop: 10
            }}
          >
            <div
              className="input-container"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <label className="label" style={{ display: "block" }}>
                أرفع صورة صديقك
              </label>
              <input className="input" type="file" />
            </div>
            <div
              className="input-container"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <label className="label" style={{ display: "block" }}>
                شنو اسم صديقك؟
              </label>
              <input
                className="input"
                type="text"
                placeholder="مثال : مصطفى علوان"
              />
            </div>
            <div
              className="input-container"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <label className="label" style={{ display: "block" }}>
                ببيش تريد تبيعه؟
              </label>
              <input
                className="input"
                type="text"
                placeholder="مثال : ١٠٠٠ دينار "
              />
            </div>
            <div
              className="input-container"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <label className="label" style={{ display: "block" }}>
                ليش تريد تبيعه؟
              </label>
              <textarea
                className="input"
                rows="5"
                placeholder="اذكرلنا مميزاته، او اذا يعجبك عيوبه "
              />
            </div>

            <div
              className="div-of-form-button"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Link
                className="form-button"
                to="/info"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button>بيعه هسة</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
