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

const BoardPortal = (props) => {
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
              <Title
                align="center"
                style={{ padding: "0px", margin: "0px", color: "white" }}
              >
                What is a Board Portal?
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px", color: "white" }}
                type="secondary"
                align="center"
              >
                A board portal enables digital board meetings between board of
                directors. Board portal software facilitates secured environment
                for sharing confidential documents and information. It enables
                them to exercise governance and decision-making responsibilities
                despite working in remote workplaces.
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
                Choosing to use a board portal, also known as a board management
                software, provides directors and administrators with the
                necessary communication and collaboration tools that simplify
                board pack preparation and document sharing, among many other
                board meeting-related tasks.
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Designed to elevate transparency, practice corporate compliance,
                and work efficiency, a board portal software collapses the
                entire board meeting process — removing the need for grueling
                tasks like printing documents, sending emails manually, and
                physically compiling annotations.
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
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title align="center" type="secondary" level={3}>
                    The Meeting Process in Board Portal Software
                  </Title>
                  <Title align="center" level={5} type="secondary">
                    Every board portal’s core functionality is to solve
                    bottlenecks and redundancies in the board meeting process
                    while providing a layer of additional security. It provides
                    a streamlined experience for the three segments of a board
                    meeting — pre-meeting, during meeting, and post-meeting.
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
                      Pre-Meeting
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      A board portal enables secretaries and administrators to
                      instantly create and organize agenda packs for board
                      meetings. It also allows for quicker workflows in
                      circulating the digital board packs to the board members,
                      while automatically notifying them of the latest document
                      revisions.{" "}
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
                      During-Meeting{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Board members can conduct interactive presentations during
                      board meetings while accessing and annotating documents
                      using only a single platform — a board portal. At the same
                      time, secretaries can take meeting minutes and record
                      action items and resolutions.{" "}
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
                      Post-Meeting{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      After meetings, board portal software allows secretaries
                      to instantly generate draft minutes, archive meeting
                      information, and store documents within the portal’s
                      repository — ensuring the security of corporate data{" "}
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
              backgroundImage: `url(${bg4})`,
              backgroundSize: "cover",
            }}
          >
            <Col xs={20} sm={20} md={16} lg={16} style={{ margin: "30px" }}>
              <Row justify="center">
                <Col xs={24} sm={24} md={14} lg={14}>
                  <Title
                    align="center"
                    style={{ color: "white" }}
                    type="secondary"
                    level={3}
                  >
                    Board Portals are Needed by Boards of Organizations{" "}
                  </Title>
                  <Title
                    align="center"
                    style={{ color: "white" }}
                    level={5}
                    type="secondary"
                  >
                    A board portal software helps organizations uphold good
                    governance and facilitate information exchange among leaders
                    by providing secure and efficient workflows in the
                    boardroom. It delivers benefits to boards and committees by
                    improving their management and decision-making processes in
                    overseeing their enterprise.
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Efficiency
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      After meetings, board portal software allows secretaries
                      to instantly generate draft minutes, archive meeting
                      information, and store documents within the portal’s
                      repository — ensuring the security of corporate data{" "}
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Governance
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      Board directors and stakeholders can make more informed
                      and data-driven decisions with collaboration and
                      presentation tools within a board portal.
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Centralization
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      A board portal is an all-in-one software that centralizes
                      all the tools for the entire board meeting process. Using
                      only a single platform ensures the efficiency and security
                      of processes and documents.
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Compliance
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      A board portal solution guarantees adherence of board
                      members to governance requirements by storing confidential
                      data following compliant policies and guidelines.
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Transparency
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      The smart and secure board portal grants access to the
                      board members by setting permission controls and
                      generating audit trails that uphold transparency on
                      activities and revisions.
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Accountability
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      Empowering accountability within boards is possible with a
                      board portal that allows tracking and auditing all the
                      activities done within meetings and documents.
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Productivity
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      Board portals help users be more productive by eliminating
                      the unnecessary tasks in the meeting cycle — freeing up
                      their time for more demanding tasks. The board portal app
                      also allows board members to work anywhere and on the go.
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
                      background: "transparent",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        color: "white",
                      }}
                    >
                      Security
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      Boards and organizations can ensure the safekeeping of
                      their corporate data while having full ownership of the
                      system using a board portal. Several security measures are
                      also provided such as multi-factor authentication and
                      password policies.
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
                level={2}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Using a Board Portal Solution
              </Title>{" "}
              <Title
                level={3}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                The board portal reduces the room for errors when organizing and
                conducting board meetings to prevent unproductive tasks.
                Organizations could use a board portal as it provides security
                features optimal for storing, accessing, and reviewing
                confidential information.
              </Title>{" "}
              <br />
              <Text style={{ fontSize: "16px" }} type="secondary">
                Conducting board meetings requires close collaboration and
                accurate information exchange among the executive management,
                secretaries, and administrators. Organizing meetings manually is
                prone to counterintuitive labor and possible data breaches, when
                human error is at fault.
                <br />
                Using a board portal can escalate the productivity and
                efficiency of the users with tools that digitize and streamline
                the meeting cycle
                <br />
                Board directors, executives, and the management can ensure that
                the board meeting processes are simpler and smarter with a board
                management and portal solution. These processes include holding
                remote meetings, instant circulation of board packs, and
                addressing resolutions, in just one platform.
                <br />
                Board portal technology itself has been utilized by boardrooms
                worldwide as it makes boards equipped with tools to exercise
                better decision-making and corporate governance.
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

BoardPortal.propTypes = {};

export default BoardPortal;
