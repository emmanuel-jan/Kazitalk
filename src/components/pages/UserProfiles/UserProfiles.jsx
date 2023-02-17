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

const UserProfiles = (props) => {
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
                Profiles of Board Management Solution Users
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
                align="center"
              >
                Profiles of Board Management Solution Users
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
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Board Directors
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Board Directors are an external party that looks out for the
                financial well being of the company and makes decisions on the
                shareholders’ behalf. They are tasked with ensuring all efforts
                made are aligned with the company’s missions and vision. These
                members are also usually extremely busy with their own
                organizations. As such, board directors need a tool to
                collaborate and manage their important tasks and
                responsibilities for the company.
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            justify="center"
            className="responsiveHeight"
          >
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
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                C-Suite Executives
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                C-Suite Executives are tasked with the overall direction,
                strategy, and success while managing the day-to-day activities
                of the organization. They offer a holistic view and
                understanding of the firm and report to the board when making
                decisions. As decisions become more crucial and time-bound, it
                is important that these executives are equipped with the proper
                meeting tools that allow them to do what they need to do — lead.
              </Text>
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
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Corporate Secretaries
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Tasked on responsibilities related to regulatory, fiduciary, and
                compliance — Corporate Secretaries are crucial in any
                organization. They play a leading role in a company’s corporate
                governance and therefore must have an in-depth understanding of
                the organization. With the pressure to constantly stay on top of
                everything, finding a solution to aid corporate secretaries in
                their tasks is a must.
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            justify="center"
            className="responsiveHeight"
          >
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
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Executive Assistants
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                While it seems that administrative work plays little to no role
                in an organization’s corporate governance, the Executive
                Administrator (EA) proves this otherwise. They focus on business
                operations and ensure that all information is updated and
                delivered in a timely manner. They also need to ensure that all
                tasks are followed up on and followed through. A one-stop tool
                is needed to keep the EA on top of everything and anything.
              </Text>
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
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                IT Personnel
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                IT Personnel are tasked with monitoring, managing, and
                maintaining organization systems and networks. Aside from
                handling various IT projects, they are also constantly on the
                lookout for the latest technology that could better their
                company’s internal operations. With all the technicalities that
                come with the job, digitizing the meeting process should bring
                about innovative solutions.
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
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
            }}
          >
            <Col xs={20} sm={20} md={16} lg={16} style={{ margin: "30px" }}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title align="center" type="secondary" level={3}>
                  KaziTalk is the Leading Board Management Solution
                  </Title>
                  <Title align="center" type="secondary" level={4}>
                  Discover more on why KaziTalk is the best board management solution for your organization.
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

UserProfiles.propTypes = {};

export default UserProfiles;
