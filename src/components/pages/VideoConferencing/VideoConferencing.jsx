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

const VideoConferencing = (props) => {
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
            <Col xs={20} sm={20} md={10} lg={10}>
              <Title
                style={{ padding: "0px", margin: "0px" }}
                align="center"
                type="secondary"
              >
                Board Portal Meets Video Conferencing
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
                align="center"
              >
                KaziTalk adds video conferencing into its list of comprehensive
                features to power highly productive and efficient remote
                meetings without compromising security.
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
                Transcription and Recording Playback{" "}
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Always keep complete and accurate meeting records. With
                KaziTalk’s post-meeting transcription, administrators can view,
                edit, and download the transcript along with the meeting
                recording for record-keeping.
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
                    Complete the Virtual Meeting Experience{" "}
                  </Title>
                  <Title align="center" level={5} type="secondary">
                    No need to think about how the meeting is being run, just
                    what the meeting is about.
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
                      All-in-One Integrated Platform{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      No need to use and download multiple applications to view
                      meeting documents and conduct video calls.
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
                      Conduct Engaging Conversations{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      See everyone on the video call, kick-off the meeting with
                      greetings, discuss the agenda, and wrap-up effectively.
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
                      Present with Live Meeting Tools{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Make real-time shared annotations or use the virtual laser
                      pointer to illustrate important parts.
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
                      Review Documents with Ease
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Keep up with discussions while browsing through documents
                      and making private or shared annotations.
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
                      Ensure Confidentiality
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Secure your virtual boardroom’s video and audio data with
                      AWS.
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
                      Easy Video Meeting Setup{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Start audio-video conferencing for your meetings with no
                      additional setup needed.
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
                Seamless Video Meeting Preparation
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Most board portals can now be set up to go hand-in-hand with
                video conferencing solutions but even then the experience can
                still be a frustrating one.
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
                Complete the Virtual Boardroom{" "}
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Meeting participants of the boardroom should stay on the same
                page, not having to use different platforms. KaziTalk allows you
                to improve director engagement and expedite decision-making with
                live meeting tools and integrated video conferencing.
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
                Maximum Security and Confidentiality
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Simulate a secure virtual meeting environment where your
                discussions and documents are kept safe within the same room.
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

VideoConferencing.propTypes = {};

export default VideoConferencing;
