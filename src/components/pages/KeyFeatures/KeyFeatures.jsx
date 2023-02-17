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
import post4 from "../../../assets/img/key-features.png";
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

const KeyFeatures = (props) => {
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
                Key Features of a Board Portal
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Boost productivity and improve collaboration in your
                organization with KaziTalk. Administrators and directors can
                securely access documents and collaborate wherever and whenever.
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
                For Directors and Executives
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                With KaziTalk, directors and executives can easily collaborate in
                real-time and make informed decisions anytime, anywhere.
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
                For Administrators and Secretaries{" "}
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                KaziTalk reduces the time and effort spent by administrators and
                secretaries in preparing for meetings, allocating resources to
                more value-adding projects instead.
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
                Security at a Glance{" "}
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                As a premier board management software, we implement the highest
                security standards for your organization.
              </Text>
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
                      SSAE16- and ISO 27001-Compliant Hosting
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Hosting facilities are certified
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
                      AES-256 Network and Document Encryption{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Documents are always encrypted
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
                      Multiple-factor Authentication{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Use only registered devices
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
                      On-the-fly Decryption Model{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Security for mobile devices
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
                      Fine-grained Access Control{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Grant access to groups or individuals
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
                      Automatic Purge for Lost Devices{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Temporary files are deleted{" "}
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
                      Audit Trail{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Track all activities your environment{" "}
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
                      Password Policy{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Password is protected using AES 256-bit{" "}
                    </Title>
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
                Make all your meetings smart, simple, and secure{" "}
              </Title>
              <Title align="center" level={4} style={{ color: "white" }}>
                Learn how KaziTalk can give your boards a superior meeting
                experience. Enquire for a free demo with no cost or obligation..
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

KeyFeatures.propTypes = {};

export default KeyFeatures;
