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

const paperless = (props) => {
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
                Transition to a Paperless Meeting Environment
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Be part of the digital revolution and use KaziTalk as your
                paperless meeting solution.
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
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
                Benefits of Holding Paperless Meetings
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Going paperless with KaziTalk can enable your organization to
                have more efficient, productive, and sustainable meetings.
              </Text>
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
                    Advantages of Paperless Meeting Environment
                  </Title>
                  <Title align="center" level={5} type="secondary">
                    Aside from the money, paper, and time that you will save
                    from paperless meetings, make your whole meeting process
                    more eco-friendly and efficient.
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
                      Fast and Secure Document Distribution{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Companies no longer have to deal with delays when it comes
                      to disseminating information across the board. Through a
                      paperless meeting solution, organizations can distribute
                      meeting materials to all participants and allow them to
                      review files with a single tap or click.
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
                      Dynamic Meeting Discussions
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Organizations can increase engagement, participation and
                      collaboration in the boardroom by using a paperless
                      meeting environment powered by intuitive and interactive
                      meeting tools.
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
                      Sustainable Paperless Solution
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      The UN’s Sustainability Development Goals provide
                      businesses with a powerful aspiration in improving our
                      world and gives companies an opportunity to protect our
                      planet. With KaziTalk, organizations can achieve
                      sustainability targets by using an eco-friendly solution
                      in the entire workplace.
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
                      Varied Information Representation
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Printed materials can only accommodate a number of media
                      types. With paperless meeting solutions, the possibilities
                      are endless. Non-text/graphic information such as audio
                      and video can be easily incorporated into board materials
                      in order to enhance and elevate board discussions.
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
                    Checklist for Paperless Meetings
                  </Title>
                  <Title align="center" level={5} type="secondary">
                    As an organization shifts to a paperless meeting
                    environment, it needs to prepare the following to make the
                    transition as smooth as possible. By carrying out these
                    action steps, a company can reduce risks and achieve its
                    business goals.
                  </Title>
                </Col>
              </Row>

              <Row justify="center" style={{ display: "flex", gap: "16px" }}>
                <Col xs={24} sm={24} md={9} lg={9}>
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
                      Check Interface Usability
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Making the change to rely on technology to run your
                      meetings can be intimidating, but with the right paperless
                      meeting software with easy-to-use features, and intuitive
                      user interface, the shift to these type of meetings will
                      be effortless.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={9} lg={9}>
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
                      Prioritize Security
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Shifting to paperless meetings means that your
                      organization will be using a software to store and
                      distribute confidential files. Ensure document protection
                      by checking that your software of choice has robust
                      security features, such as Document Encryption, Secure
                      Document Signing, Multi-Factor Authentication, Role-Based
                      Access Controls, and Audit Trail.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={9} lg={9}>
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
                      Choose a Proven Paperless Meeting Solution
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      You will need a software to digitize the whole meeting
                      process, so this is where the paperless meeting solution
                      comes in. It’s important to carefully pick a paperless
                      software that your organization can trust.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={9} lg={9}>
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
                      Ensure Compatibility
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      The goal of digitizing boardroom meetings is to make your
                      organization’s current process more effective and
                      efficient. This is why it’s essential to ensure that the
                      software matches your infrastructure. Accessibility on any
                      device, flexibility of hosting options, and availability
                      of integrations on tools that you are currently using are
                      some of the things that you need to consider.
                    </Title>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={9} lg={9}>
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
                      Verify Support Availability
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Transitioning to a paperless meeting platform and
                      environment requires for the users to learn its features,
                      so it’s key for the software to be able to provide local
                      support, 24/7/365 live phone, email and chat support, and
                      unlimited training to make the switch seamless.
                    </Title>
                  </Card>
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
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                KaziTalk is the Multi-Awarded Paperless Meeting Solution{" "}
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                KaziTalk helps organizations transition towards more sustainable
                practices by enabling paperless meetings and presentations,
                creating a more collaborative and productive paperless
                workspace.
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

paperless.propTypes = {};

export default paperless;
