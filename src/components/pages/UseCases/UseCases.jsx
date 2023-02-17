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
import post4 from "../../../assets/img/post4.png";
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
  "Streamlined meeting, governance, and collaboration for the board, senate, and committees.",
  "Elevated experience for hybrid meetings. Seamless integration with Zoom, Teams, Webex, and other video conferencing platform.",
  "Productive and effective workflows for topic, agenda, and document preparation, minutes sign-off, action tracking and for all other university governance processes.",
  "Efficient Review, Approval, and Signing process for documents and resolutions using the built-in voting and Signature tools.",
  "A flexible and scalable solution built to adapt to the organizational structure of the institution.",
];

const UseCases = (props) => {
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
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                align="center"
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Solutions to Fit Your Team’s Every Need{" "}
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
                align="center"
              >
                KaziTalk is an enterprise-wide collaboration solution that allows
                for versatile use across organizations.
              </Title>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col xs={20} sm={20} md={16} lg={16} style={{ margin: "30px" }}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title align="center" type="secondary" level={3}>
                    Use Cases
                  </Title>
                  <Title align="center" level={5} type="secondary">
                    Discover the ways you can incorporate KaziTalk into your
                    meeting processes.
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={18} lg={18}>
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
                      Business Sessions
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Annotate schematics and diagrams with freehand drawings
                      and notes with real-time synchronization.
                      <br />
                      Distribute annotated documents for optimal communication
                      with our annotated PDF exporting.
                      <br />
                      Lessen turnaround delays by authorizing documents with
                      e-signatures.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={18} lg={18}>
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
                      Committee Meetings
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Monitor assignments for each committee member with
                      KaziTalk’s action item tracking.
                      <br />
                      Control who can access your documents should there be any
                      third-party consultants present in the meeting through
                      KaziTalk’s permissions-based settings.
                      <br />
                      Gather and cast votes on a specific agenda item through
                      the attendees’ preferred method.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={18} lg={18}>
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
                      Lectures, Presentations, and Workshops
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Save time on preparing materials and let your audience see
                      your presentation on their devices.
                      <br />
                      Facilitate better collaboration and interaction with
                      annotations that allows both presenters and participants
                      share them in real-time.
                      <br />
                      Keep the audience focused with presenter features such as
                      page lock and laser pointer.
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
          >
            <Col xs={20} sm={20} md={16} lg={16} style={{ margin: "30px" }}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title align="center" type="secondary" level={3}>
                    KaziTalk in the Boardroom
                  </Title>
                  <Title align="center" type="secondary" level={4}>
                    KaziTalk provides numerous intuitive tools that benefit every
                    professional within the boardroom and helps them with their
                    tasks and responsibilities.
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={5} lg={5}>
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
                      Board Directors
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      KaziTalk, as a board meeting app, allows directors to
                      receive board packs digitally, while enabling features for
                      remote collaboration.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
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
                      C-Suite Executive
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      As decisions get more crucial and time-bound, KaziTalk
                      equips executives with the proper management tools that
                      allow for quick decision-making.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
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
                      Corporate Secretary
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Quickly build meeting agendas and prepare for board
                      meetings more efficiently, by reducing time-consuming ad
                      hoc tasks with KaziTalk.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
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
                      IT Personnel
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Have security in place, while maintaining full system
                      ownership. KaziTalk integrates seamlessly with the
                      organization’s existing IT systems.
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
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
            }}
          >
            <Col xs={20} sm={20} md={16} lg={16} style={{ margin: "30px" }}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title align="center" type="secondary" level={3}>
                    KaziTalk Is The Leading Collaboration Solution
                  </Title>
                  <Title align="center" type="secondary" level={4}>
                    Discover more on why KaziTalk is the best boardroom and
                    enterprise-wide collaboration solution for your
                    organization.
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={5} lg={5}>
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
                      Why Choose KaziTalk
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      KaziTalk is designed to fit all types of organization, be
                      user-friendly, and provide greater benefits to clients
                      going paperless compared to other board portal providers
                      in the market.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
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
                      Security Features of KaziTalk
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      KaziTalk is internationally certified and recognized for
                      its enterprise-grade security features that protects
                      confidential data and allows for a secure meeting
                      environment.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
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
                      FAQs About KaziTalk
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Read answers to frequently asked questions about KaziTalk
                      including features, security, implementation, and support.
                    </Title>
                  </Card>
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

UseCases.propTypes = {};

export default UseCases;
