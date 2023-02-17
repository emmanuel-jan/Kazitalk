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

const BoardManagement = (props) => {
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
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
            }}
            justify="center"
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                align="center"
                style={{ padding: "0px", margin: "0px", color: "white" }}
              >
                The Board Management Software for Boards and Executives
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px", color: "white" }}
                type="secondary"
                align="center"
              >
                Manage and streamline your board meetings into one
                collaborative, user-friendly, and secure platform with KaziTalk.
              </Title>
            </Col>
          </Row>
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
            <Row justify="center">
              <Col xs={20} sm={20} md={18} lg={18}>
                <Title
                  level={2}
                  style={{ padding: "0px", margin: "0px" }}
                  type="secondary"
                  align="center"
                >
                  What is a Board Management Software?
                </Title>
                <Title
                  level={4}
                  style={{ padding: "0px", margin: "0px" }}
                  type="secondary"
                  align="center"
                >
                  Board management software is a straightforward and
                  technologically advanced solution that addresses the
                  deficiencies, redundancies, and flaws of holding paper-based
                  board meetings. It allows for effective management of a board
                  director’s workflow and processes.
                </Title>
              </Col>
            </Row>
            <Row justify="center">
              <Col
                xs={20}
                sm={20}
                md={6}
                lg={6}
                style={{ display: "grid", gap: "10px" }}
              >
                <Card
                  bordered={false}
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
                ></Card>
              </Col>
              <Col xs={20} sm={20} md={10} lg={10}>
                <Title
                  level={4}
                  style={{ padding: "0px", margin: "0px" }}
                  type="secondary"
                >
                  The benefits of a board management software include real-time
                  dissemination of information, automated meeting preparation,
                  digitized documentation, and clearer communication channels.
                  <br />
                  Most organizations opt for a vendor-provided board management
                  solution that can be easily implemented within a company’s
                  existing IT systems and already have the necessary security
                  standards required.
                </Title>
              </Col>
            </Row>
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
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={16} lg={16}>
              <Row justify="center">
                <Col xs={24} sm={24} md={16} lg={16}>
                  <Title align="center" level={2} type="secondary">
                    Benefits of a Board Management Software
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={18} lg={18}>
                  <List
                    bordered
                    dataSource={data}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

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
                level={2}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                The KaziTalk Board Management Solution
              </Title>{" "}
              <Title
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Among the many available vendors in the market today, KaziTalk is
                the most usable and versatile board software solution.
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                KaziTalk can be used in multiple platforms and has capabilities
                that can be easily used by board secretaries and directors. Our
                board of directors software also has a smooth navigational
                system that helps create a robust process and cultivate good
                governance that makes boards more effective in the long run.
                <br />
                Knowing as well that each organization has different
                requirements and compliance concerns, KaziTalk is flexible to
                cater to each client’s needs.
              </Text>
            </Col>
            <Col
              xs={20}
              sm={20}
              md={6}
              lg={6}
              style={{ display: "grid", gap: "10px" }}
            >
              <Card
                bordered={false}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                cover={
                  <img style={{ padding: "50px" }} alt="example" src={azeus} />
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
            }}
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={16} lg={16}>
              <Row justify="center">
                <Col xs={24} sm={24} md={16} lg={16}>
                  <Title align="center" level={2} type="secondary">
                    Made for Boardroom Level Collaboration
                  </Title>
                  <Title align="center" level={3} type="secondary">
                    Using KaziTalk’s comprehensive board management and meeting
                    tool, executives can easily collaborate in real-time and
                    make informed decisions anytime, anywhere.
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={18} lg={18}>
                  <Collapse bordered={false} defaultActiveKey={["1"]}>
                    <Panel
                      header={
                        <span style={{ color: "#1890ff" }}>
                          Powerful Meeting and presentation Tools
                        </span>
                      }
                      key="1"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span style={{ color: "#8c8c8c" }}>
                        KaziTalk’s live presentation and meeting tools empowers
                        directors to hold remote meetings easily, while
                        collaborating with each other directly.
                      </span>
                    </Panel>
                    <Panel
                      header={
                        <span style={{ color: "#1890ff" }}>
                          Intergrated Video Conferencing
                        </span>
                      }
                      key="2"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span style={{ color: "#8c8c8c" }}>
                        Complete the virtual meeting experience by conducting
                        video calls with no additional setup needed.
                      </span>
                    </Panel>
                    <Panel
                      header={
                        <span style={{ color: "#1890ff" }}>
                          Voting and Resolutions
                        </span>
                      }
                      key="3"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span style={{ color: "#8c8c8c" }}>
                        Expedite approval and decision making with tools such as
                        E-Signature and Review Rooms, all in one integrated
                        secure application.
                      </span>
                    </Panel>
                    <Panel
                      header={
                        <span style={{ color: "#1890ff" }}>
                          Multi-Platform Capability
                        </span>
                      }
                      key="4"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span style={{ color: "#8c8c8c" }}>
                        Access KaziTalk anytime, anywhere, using your device of
                        choice — may it be iOS, Android, Mac, or Windows.
                      </span>
                    </Panel>
                    <Panel
                      header={
                        <span style={{ color: "#1890ff" }}>
                          Enterprise-Grade Security
                        </span>
                      }
                      key="5"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span style={{ color: "#8c8c8c" }}>
                        Protect data with state-of-the-art security measures,
                        such as Biometric Authentication, Remote Data Wipe and
                        Auto-Purge.
                      </span>
                    </Panel>
                    <Panel
                      header={
                        <span style={{ color: "#1890ff" }}>
                          Full System Ownership
                        </span>
                      }
                      key="6"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span style={{ color: "#8c8c8c" }}>
                        Have full control of your system and settings, and
                        manage users, groups, roles and permissions.
                      </span>
                    </Panel>
                  </Collapse>
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

BoardManagement.propTypes = {};

export default BoardManagement;
