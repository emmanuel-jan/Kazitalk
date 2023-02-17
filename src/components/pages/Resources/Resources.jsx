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
import post1 from "../../../assets/img/post1.svg";
import post3 from "../../../assets/img/post3.png";
import post4 from "../../../assets/img/security.png";
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

const Resources = (props) => {
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
              height:"70vh"
            }}
            justify="center"
          >
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                align="center"
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Delivering Articles and Insights from Experts{" "}
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
                align="center"
              >
                Read the latest insights on topics related to governance,
                leadership, business, cybersecurity, digitalization, board
                portals, and the boardroom.
              </Title>
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
          >
            <Col xs={20} sm={20} md={16} lg={16}>
              <Row style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                    }}
                    cover={
                      <img
                        style={{ padding: "50px" }}
                        alt="example"
                        src={post2}
                      />
                    }
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#1890ff",
                      }}
                    >
                      What's New With KaziTalk?
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Never miss important points in your next meeting with our
                      latest features.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">Learn More...</Button>
                    </Space>
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
                    cover={
                      <img
                        style={{ padding: "50px" }}
                        alt="example"
                        src={post1}
                      />
                    }
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#1890ff",
                      }}
                    >
                      Events
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      View our upcoming events across the globe such as
                      conferences and webinars.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">Learn More...</Button>
                    </Space>
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
                    cover={
                      <img
                        style={{ padding: "50px" }}
                        alt="example"
                        src={post1}
                      />
                    }
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#1890ff",
                      }}
                    >
                      Events
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      View our upcoming events across the globe such as
                      conferences and webinars.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">Learn More...</Button>
                    </Space>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                    }}
                    cover={
                      <img
                        style={{ padding: "50px" }}
                        alt="example"
                        src={post2}
                      />
                    }
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#1890ff",
                      }}
                    >
                      What's New With KaziTalk?
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Never miss important points in your next meeting with our
                      latest features.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">Learn More...</Button>
                    </Space>
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
                    cover={
                      <img
                        style={{ padding: "50px" }}
                        alt="example"
                        src={post1}
                      />
                    }
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#1890ff",
                      }}
                    >
                      Events
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      View our upcoming events across the globe such as
                      conferences and webinars.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">Learn More...</Button>
                    </Space>
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
                    cover={
                      <img
                        style={{ padding: "50px" }}
                        alt="example"
                        src={post1}
                      />
                    }
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#1890ff",
                      }}
                    >
                      Events
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      View our upcoming events across the globe such as
                      conferences and webinars.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">Learn More...</Button>
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row
            style={{
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
            }}
            justify="center"
          >
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                align="center"
                style={{ padding: "0px", margin: "0px", color: "white" }}
              >
                Take your organizations’ meetings to the next level{" "}
              </Title>
              <Title align="center" level={4} style={{ color: "white" }}>
                Learn how Convene can give your boards a great meeting
                experience. Enquire for a free demo with no cost or obligation.
              </Title>
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

Resources.propTypes = {};

export default Resources;
