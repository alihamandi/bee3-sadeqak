import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Context from "../context";
import AOS from "aos";
import { Autocomplete, TextInput } from "evergreen-ui";
import styled from "styled-components";

AOS.init();
let specs = require("../specs.json");

let Button = styled.button`
  padding: 2px 15px;
  display: inline;
  margin:20px
  font-size: 1rem;
  font-family: jannaB;
  border: none;
  color: white;
  border-radius: 5px;
  background: linear-gradient(to right, #ff4d7e 0%, #ff6a5b 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    transition: 750ms;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: linear-gradient(to right, #ff6a5b 0%, #ff4d7e 100%);}
  
 
`;

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
            style={{
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
            className="shit-3"
            style={{
              paddingRight: 50,
              marginTop: 10
            }}
          >
            <Context.Consumer>
              {ctx => {
                return (
                  <div>
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
                        حط صفات صديقك حتى نحدد السعر{" "}
                      </label>
                      <div className="input">
                        <Autocomplete
                          className="input"
                          title="Fruits"
                          onChange={changedItem => console.log(changedItem)}
                          items={specs}
                        >
                          {props => {
                            const { getInputProps, getRef, inputValue } = props;
                            return (
                              <div className="specs-div">
                                <TextInput
                                  className="specs-input"
                                  placeholder="صفات صديقك"
                                  value={inputValue}
                                  innerRef={getRef}
                                  {...getInputProps()}
                                />

                                <Button>ضيفها</Button>
                              </div>
                            );
                          }}
                        </Autocomplete>
                      </div>
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

                      <div className="div-of-form-button">
                        <Link
                          className="form-button"
                          to="/info"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <button>بيعه هسة</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Context.Consumer>
          </Col>
        </Row>
      </Container>
    );
  }
}
