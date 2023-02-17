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

const KazitalkFaqs = (props) => {
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
                align="center"
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
              >
                Frequently Asked Questions
              </Title>
              <Title
                level={4}
                style={{ padding: "0px", margin: "0px" }}
                type="secondary"
                align="center"
              >
                Look for quick answers for questions you have on KaziTalk’s
                features, security, and customer support.
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
                    FAQ Highlights{" "}
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
                      How does KaziTalk make meeting processes more efficient?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      KaziTalk digitizes and streamlines the entire meeting
                      process, effectively cutting down 90% of the time spent on
                      pre-meeting agenda preparation all the way up to
                      post-meeting minute distribution. With just a few clicks,
                      meeting organizers can easily build meeting packs and
                      instantly send them out to participants, while
                      participants can conveniently and securely view and access
                      their meeting documents wherever they are.
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
                      How does KaziTalk save money for organizations?
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      By digitizing and automating meeting processes, KaziTalk
                      saves organizations thousands of dollars in paper,
                      printing, and delivery costs. At the same time, using
                      KaziTalk saves as much as 90% of the effort and dedicated
                      staff required to facilitate meetings. KaziTalk has saved
                      its clients 90,000 sheets of paper and upwards of $10,000
                      annually in administrative expenses while still
                      maintaining a very competitive price point.
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
                      Does KaziTalk have a feature to record minutes?
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Yes, KaziTalk has a handy Minute Taker tool which allows
                      secretaries to take minutes while a meeting is ongoing.
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
                      Can we control document access on KaziTalk?
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Yes, KaziTalk lets administrators define user roles and
                      permissions with fine-grained access controls.
                      Administrators can choose to allow access to entire
                      meetings or folders, or they can choose to restrict access
                      to individual agenda topics or files.
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
                      What are your hosting options?
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Depending on client needs, KaziTalk can be hosted on the
                      cloud or on-premise. For cloud hosting, we host the system
                      on the AWS data center while managing the IT
                      infrastructure — software and hardware — necessary to run
                      KaziTalk. For on-premise hosting, we install KaziTalk on
                      your own IT infrastructure using your own hardware,
                      network, and other IT resources.
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
                      Where are your cloud servers located?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Our cloud infrastructure is hosted in Amazon Web Services
                      (AWS) data centres, particularly located in Singapore,
                      Australia, USA, Africa, Canada, and Ireland.
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
                      Can I access documents or meetings offline?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      In the KaziTalk app, you can log in offline. All previously
                      downloaded documents and meeting files can be accessed.
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
                      How secure is KaziTalk?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      KaziTalk employs industry — leading security measures —
                      from our data hosting down to our application’s security
                      features and security governance. To ensure that client
                      data is protected at all times on all levels, our cloud
                      offering is hosted in AWS enterprise-grade data centers
                      with the following certifications: SOC 1/SSAE 16/ISAE 3402
                      (formerly SAS 70), ISO (27001, ISO27002, ISO27017 and ISO
                      27018). At the same time, the KaziTalk portal and
                      application make use of AES-256 network and document
                      encryption, multi-factor authentication, on-the-fly
                      decryption, fine-grained access control, and have security
                      features such as automatic purge for lost devices and an
                      audit trail. KaziTalk is a highly secure SOC 2 accredited
                      enterprise solution trusted by central banks, governments,
                      and Fortune 500 companies.
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
                      How many languages does KaziTalk support?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      The KaziTalk application is available in English, Spanish,
                      Arabic, French, German, Greek, Italian, Russian, Japanese,
                      Portuguese, and Simplified and Traditional Chinese. The
                      KaziTalk administrator portal can also be configured to
                      allow administrators their preferred language.
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
                      How soon can KaziTalk be implemented?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Depending on your hosting choice, KaziTalk can be set up in
                      as quickly as 24 hours for cloud-based installations, and
                      10 business days for on-premise installations.
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
                      What is your pricing model?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Our pricing model is on a per user license, per year
                      basis. We can also customize pricing based on your budget.
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
                      What kind of support does KaziTalk provide?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Our Global Support Desk is up 24/7, 365 days a year where
                      we provide support through training, troubleshooting, and
                      general system queries. Get in touch with our support
                      specialists here.
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
                      I’m interested in KaziTalk. What’s the next step?{" "}
                    </Title>
                    <Title
                      type="secondary"
                      level={5}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      Contact us at sales@azeusKaziTalk.com get in touch with one
                      of our local sales teams. Alternatively, click here to
                      request for a demo, price quotation, or free trial.
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
                Take your organizations’ meetings to the next level{" "}
              </Title>
              <Title align="center" level={4} style={{ color: "white" }}>
                Learn how KaziTalk can give your boards a great meeting
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

KazitalkFaqs.propTypes = {};

export default KazitalkFaqs;
