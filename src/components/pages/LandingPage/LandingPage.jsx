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
import '../LandingPage/LandingPage.css'
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

const LandingPage = (props) => {
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
              backgroundImage: `url(${bg5})`,
              backgroundSize: "cover",
            }}
            justify="center"
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title style={{ padding: "0px", margin: "0px", color: "white" }}>
                Board Governance Solutions that are:
              </Title>
              <TypeAnimation
                sequence={["Smart.", 1000, "Simple.", 1000, "Secure.", 1000]}
                //  Replacing previous Text
                style={{
                  fontSize: "3em",
                  padding: "0px",
                  margin: "0px",
                  color: "#fff",
                }}
                wrapper="h1"
                repeat={Infinity}
              />
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px", color: "white" }}
                type="secondary"
              >
                KaziTalk is the multi-awarded board management and portal
                solution that simplifies the board meeting process and empowers
                thousands of organizations worldwide to foster better
                governance.
              </Title>
              <Space style={{ marginTop: "10px" }}>
                <Button
                  style={{ backgroundColor: "#1890ff", color: "white" }}
                  type="primary"
                >
                  Try KaziTalk
                </Button>
                <Button>Learn about Board Portals</Button>
              </Space>
            </Col>
            <Col
              xs={0}
              sm={0}
              md={6}
              lg={6}
              style={{ display: "grid", gap: "10px" }}
            >
              <Col md={20} lg={20} offset={4}>
                <Card
                  align="center"
                  hoverable
                  bordered={false}
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                  }}
                >
                  <Text>Board Meeting Management System</Text>
                </Card>
              </Col>
              <Col md={20} lg={20}>
                <Card
                  align="center"
                  hoverable
                  bordered={false}
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                  }}
                >
                  <Text>End-to-End AGM Solution</Text>
                </Card>
              </Col>
              <Col md={20} lg={20} offset={4}>
                <Card
                  align="center"
                  hoverable
                  bordered={false}
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                  }}
                >
                  <Text>Board and Leadership Meeting on Teams</Text>
                </Card>
              </Col>
              <Col md={20} lg={20}>
                <Card
                  align="center"
                  hoverable
                  bordered={false}
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                  }}
                >
                  <Text>Your Partner in ESG Governance</Text>
                </Card>
              </Col>
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
              <Title level={2} type="secondary">
                The Latest with KaziTalk
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
            justify="center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              backgroundImage: `url(${bg4})`,
              backgroundSize: "cover",
            }}
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={16} lg={16}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title
                    align="center"
                    level={2}
                    type="secondary"
                    style={{ color: "white" }}
                  >
                    Top organizations worldwide have KaziTalkd and experienced
                    the difference.
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
               
                      <img
                        style={{ height: "80px"}}
                        alt="example"
                        src={afcu}
                      />
                  
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
              
                      <img
                        style={{ height: "80px" }}
                        alt="example"
                        src={tesco}
                      />
                  
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
             
                      <img style={{ height: "80px" }} alt="example" src={afe} />
                 
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
             
                      <img
                        style={{ height: "80px" }}
                        alt="example"
                        src={cbtt}
                      />
                 
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
             
                      <img
                        style={{ height: "80px" }}
                        alt="example"
                        src={fidelity}
                      />
                
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
              
                      <img style={{ height: "80px" }} alt="example" src={icd} />
                 
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
               
                      <img
                        style={{ height: "80px", width:"100%" }}
                        alt="example"
                        src={kenya}
                      />
                 
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
                
                      <img
                        style={{ height: "80px" }}
                        alt="example"
                        src={lafarge}
                      />
                  
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
               
                      <img
                        style={{ height: "80px" }}
                        alt="example"
                        src={mizuho}
                      />
                  
                </Col>
                <Col align="center" xs={24} sm={24} md={7} lg={7}>
               
                      <img
                        style={{ height: "80px" }}
                        alt="example"
                        src={queen}
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
                Other Solutions
              </Title>
              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                    }}
                    cover={
                      <img
                        style={{ padding: "10px" }}
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
                      KaziTalkAGM
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Transforming the Landscape for Shareholder Meetings
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
                        style={{ padding: "10px" }}
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
                      KaziTalk in Teams
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Microsoft-integrated Board Portal Built in Teams
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
                        style={{ padding: "10px" }}
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
                      KaziTalk ESG
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      The Right Digital Platform for your ESG Journey
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
                    Next Level Governance
                  </Title>
                  <Title align="center" level={3} type="secondary">
                    KaziTalk’s full suite of features enables executives to
                    collaborate in real-time and make informed decisions
                    anytime, anywhere.
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
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
            }}
            justify="center"
            className="responsiveHeight"
          >
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                type="secondary"
                style={{ padding: "0px", margin: "0px", color: "#1890ff" }}
              >
                Engineered by a company with strong industry experience
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                KaziTalk is developed by Azeus Systems, a CMMI Level 5 company
                with internal and external processes and practices that have
                AICPA SOC ⅔, ISO 27017, and 27018 certifications. KaziTalk is an
                accredited supplier that has met the requirements of several
                governments around the world such as the Queensland Government,
                NSW Government, and the Digital Transformation Agency.
              </Title>
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
                Discover More at KaziTalk
              </Title>
              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <Card
                    bordered={false}
                    hoverable
                    style={{
                      width: "100%",
                    }}
                    cover={
                      <img
                        style={{ padding: "10px" }}
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
                      KaziTalkAGM
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Transforming the Landscape for Shareholder Meetings
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
                        style={{ padding: "10px" }}
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
                      KaziTalk in Teams
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Microsoft-integrated Board Portal Built in Teams
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
                        style={{ padding: "10px" }}
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
                      KaziTalk ESG
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      The Right Digital Platform for your ESG Journey
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
                Make your meeting process digital and efficient
              </Title>
              <Title align="center" level={4} style={{ color: "white" }}>
                Learn how KaziTalk can give your boards a superior meeting
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

LandingPage.propTypes = {};

export default LandingPage;
