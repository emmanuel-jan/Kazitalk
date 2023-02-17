import React from "react";
import PropTypes from "prop-types";
import afcu from "../../../assets/img/AFCU.png";
import afe from "../../../assets/img/AFE.png";
import cbtt from "../../../assets/img/CBTT.png";
import fidelity from "../../../assets/img/Fidelity.png";
import icd from "../../../assets/img/icd.png";
import kenya from "../../../assets/img/KENYA.png";
import lafarge from "../../../assets/img/LAFARGE.png";
import mizuho from "../../../assets/img/MIZUHO.png";
import queen from "../../../assets/img/queen.png";
import azeus from "../../../assets/img/azeus.png";
import tesco from "../../../assets/img/tesco.png";
import post3 from "../../../assets/img/post3.png";
import post2 from "../../../assets/img/post2.svg";
import bg1 from "../../../assets/img/bg1.svg";
import bg2 from "../../../assets/img/bg2.svg";
import bg3 from "../../../assets/img/bg3.svg";
import bg4 from "../../../assets/img/bg4.svg";
import bg5 from "../../../assets/img/bg5.svg";
import bg6 from "../../../assets/img/bg6.svg";
import "../LandingPage/LandingPage.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  AccountBookOutlined,
  RocketOutlined,
  UserSwitchOutlined,
  DownloadOutlined,
  DollarCircleOutlined,
  FileProtectOutlined,
  BankOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Col,
  Row,
  Card,
  Typography,
  Button,
  Space,
  Collapse,
  Carousel,
  List,
} from "antd";
import Navbar from "../../layouts/Navbar/Navbar";
import { TypeAnimation } from "react-type-animation";

const { Panel } = Collapse;
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;
const contentStyle = {
  padding: "80px",
  height: "260px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "10px",
};
const data = [
  "Board packets needed for meetings are received digitally and instantly.",
  "Business can reduce expenses such as travel, printing, and accommodations costs.",
  "Board meeting software provides a way for board members to attend board meetings remotely without any inconvenience.",
  "Committee and board meetings are more structured, conducive, and engaging.",
  "Using it as an online board management app allows for a more flexible approach in conducting and holding meetings for top-level operations in general.",
];

const BoardMeeting = (props) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <>
      <Layout className="thefont">
        <Header style={{ backgroundColor: "#1890ff" }}>
          <Navbar />
        </Header>
        <Content>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
            justify="center"
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={7} lg={7}>
              <Title style={{ padding: "0px", margin: "0px" }} type="secondary">
                KaziTalk as a Board Meeting App
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Enjoy an excellent and secure board meeting experience across
                any device.
              </Title>
            </Col>
            <Col xs={20} sm={20} md={6} lg={6}>
              <Card
                bordered={false}
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    style={{ padding: "50px", height: 600, width: 600 }}
                    alt="example"
                    src={post3}
                  />
                }
              ></Card>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
            }}
          >
            <Col xs={20} sm={20} md={16} lg={16} style={{ margin: "30px" }}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title align="center" type="secondary" level={3}>
                    Elevate the Standards of Meetings
                  </Title>
                  <Title align="center" level={5} type="secondary">
                    As the premier board meeting application, KaziTalk is
                    designed to empower and provide benefits for mobile
                    directors all around the world.
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                      type="secondary"
                    >
                      Improve Productivity
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Mobile directors no longer have to worry about backlogs
                      and can do their work – anytime and anywhere with KaziTalk.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                      type="secondary"
                    >
                      Better Collaboration
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Boards can easily use KaziTalk’s comprehensive
                      collaborative tools to work together remotely and securely
                      send confidential information to other members.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                      type="secondary"
                    >
                      Streamlined Distribution
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Secretaries can quickly send board materials via the
                      KaziTalk portal which will be instantly received by
                      directors in the KaziTalk meeting app.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                      type="secondary"
                    >
                      Promote Note-Taking
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Directors can readily edit board materials, share notes,
                      and assign and track action items, in a secure app in any
                      of their preferred devices whether its Apple, Android, or
                      Windows.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                      type="secondary"
                    >
                      Improved Data Security
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Data is kept safe with upgraded security features such as
                      KaziTalk’s 256-bit AES encryption, secure access rights,
                      and remote wipe for lost devices.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                      type="secondary"
                    >
                      Faster Navigation
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Board members no longer have to shuffle through hundreds
                      of papers and can quickly go to the right section of a
                      page with just the touch of their fingertips.
                    </Title>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={16} lg={16}>
              <Row justify="center">
                <Col xs={24} sm={24} md={20} lg={20}>
                  <Title align="center" level={2} type="secondary">
                    A Testament to Our Dedication
                  </Title>
                  <Title align="center" level={3} type="secondary">
                    Satisfied clients including FTSE 100 companies, Fortune 500
                    companies, banks, nonprofits, and governments in over 100
                    countries worldwide trust KaziTalk as their board portal
                    solution.
                  </Title>
                </Col>
              </Row>

              <Row
                justify="center"
                style={{ display: "flex", gap: "16px", marginBottom: "50px" }}
              >
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Carousel autoplay afterChange={onChange}>
                    <div>
                      <h3 style={contentStyle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam assumenda vitae amet, perferendis animi,
                        iste blanditiis doloribus accusamus molestiae nulla
                        pariatur aut a laborum sint veritatis rem laudantium
                        maxime sunt?
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam assumenda vitae amet, perferendis animi,
                        iste blanditiis doloribus accusamus molestiae nulla
                        pariatur aut a laborum sint veritatis rem laudantium
                        maxime sunt?
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam assumenda vitae amet, perferendis animi,
                        iste blanditiis doloribus accusamus molestiae nulla
                        pariatur aut a laborum sint veritatis rem laudantium
                        maxime sunt?
                      </h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam assumenda vitae amet, perferendis animi,
                        iste blanditiis doloribus accusamus molestiae nulla
                        pariatur aut a laborum sint veritatis rem laudantium
                        maxime sunt?
                      </h3>
                    </div>
                  </Carousel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Kazitalk ©2022 Created by Kazitalk IT Team
        </Footer>
      </Layout>
    </>
  );
};

BoardMeeting.propTypes = {};

export default BoardMeeting;
