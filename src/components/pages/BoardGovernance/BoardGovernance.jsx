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
  "Developing the purpose and direction of the organization.",
  "Monitoring and evaluating the CEO’s performance",
  "Securing the assets and resources of the company",
  "Setting policies and providing oversight",
  "Assessing board’s internal and external performance.",
  "Collaborating on company-related matters during board meetings",
  "Researching on company development",
];

const BoardGovernance = (props) => {
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
                What is board governance?
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Board governance is a framework composed of structures,
                processes, rules, and practices from which the board operates
                and is directed. Effective board governance involves competent
                board leadership, efficient management processes, and strategies
                to attain the enterprise’s goals.
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
                    src={post4}
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
            }}
          >
            <Col xs={20} sm={20} md={16} lg={16} style={{ margin: "30px" }}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title align="center" type="secondary" level={3}>
                    What elements determine board governance?
                  </Title>
                  <Title align="center" level={5} type="secondary">
                    Since board governance provides a system for managing the
                    board and the organization, it encompasses various
                    principles designed to empower the interests of the
                    stakeholders.
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
                      Board Members
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Boards are composed of high-quality individuals within
                      their respective fields. Truly effective boards must have
                      members with the right knowledge, skills, focus, and
                      dedication to commit to their responsibilities.
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
                      Structure and Process
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      The board’s composition must be assessed regularly to
                      determine what best fits your organization’s goals.
                      Well-designed processes strengthen internal and external
                      communication, enabling boards for efficient assessments
                      of risks and opportunities.
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
                      Information Architecture
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      A well-elaborated information architecture must prioritize
                      how information is conveyed from the management to the
                      employees and vice-versa. Board briefings, reports,
                      meetings, and informal channels are fundamental to ensure
                      an effective information pillar.
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
                      Transparency & Accountability
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Boards are expected to uphold governance by being a
                      trusted and accountable entity for stakeholders — open and
                      responsible for the company activities, plans, decisions
                      failures, and successes in the company’s performance.
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
                      Efficiency
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      The fast-paced world has taught boards to act swiftly.
                      However, the quality and assessment of the decisions must
                      not be compromised. Effective board governance manifests
                      in continuously seeking ways to make collaboration more
                      efficient.
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
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={16} lg={16}>
              <Row justify="center">
                <Col xs={24} sm={24} md={16} lg={16}>
                  <Title align="center" level={2} type="secondary">
                    Board Responsibilities
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
              <Title align="center" level={2} type="secondary">
                For-Profit and Nonprofit Governance
              </Title>
              <Row style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={11} lg={11}>
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
                      For-Profit Boards
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      For-profit boards serve the interests and are accountable
                      to the shareholders. They create business strategies based
                      on profit and capitalistic market determinants.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">
                        Learn More...
                      </Button>
                    </Space>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={11} lg={11}>
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
                      Nonprofit Boards
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Nonprofit boards perform their business duties to serve
                      the organization’s members, their advocacies, or the
                      state. They ensure value based on policy determinants.
                    </Title>
                    <Space style={{ marginTop: "10px" }}>
                      <Button ghost type="primary">
                        Learn More...
                      </Button>
                    </Space>
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
                <Col xs={24} sm={24} md={16} lg={16}>
                  <Title align="center" level={2} type="secondary">
                    Essential Features of Board Governance Software
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

BoardGovernance.propTypes = {};

export default BoardGovernance;
