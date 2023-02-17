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
import "../WebcamPage/WebcamPage.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  AccountBookOutlined,
  RocketOutlined,
  UserSwitchOutlined,
  DownloadOutlined,
  DollarCircleOutlined,
  FileProtectOutlined,
  BankOutlined,
  SendOutlined,
  UserOutlined,
  PhoneOutlined,
  MinusCircleOutlined,
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
  Avatar,
  List,
  message,
  Input,
} from "antd";
import Navbar from "../../layouts/Navbar/Navbar";
import { TypeAnimation } from "react-type-animation";
import VirtualList from "rc-virtual-list";
import Webcam from "react-webcam";

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 550;
const { Panel } = Collapse;
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;
const data1 = [
  {
    title: "John Doe",
  },
];

const WebcamPage = (props) => {
  const [data, setData] = React.useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };
  React.useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
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
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
            }}
            justify="center"
            className="responsiveHeights"
          >
            <Col
              style={{
                margin: "15px",
                background: "#FFFFFF",
              }}
              xs={24}
              sm={24}
              md={6}
              lg={6}
            >
              <List>
                <VirtualList
                  data={data}
                  height={ContainerHeight}
                  itemHeight={47}
                  itemKey="email"
                  onScroll={onScroll}
                >
                  {(item) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={
                          <a href="https://ant.design">{item.name.last}</a>
                        }
                        description={item.email}
                      />
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </Col>
            <Col xs={0} sm={0} md={10} lg={10}>
              <Layout>
                <Header style={{ background: "#FFFFFF" }}>
                  <Avatar icon={<UserOutlined />} />
                  &nbsp;
                  <Text> John Doe</Text>
                </Header>
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    height: 400,
                    borderRadius: "10px",
                  }}
                >
                    < Webcam style={{height:"100%", width:"100%"}} />
                </Content>
                <Footer
                  style={{
                    background: "#FFFFFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Space wrap>
                    <Button
                      style={{ color: "white", background: "green" }}
                      shape="circle"
                      icon={<PhoneOutlined />}
                    />
                    <Button
                      danger
                      type="primary"
                      shape="circle"
                      icon={<MinusCircleOutlined />}
                    />
                  </Space>
                </Footer>
              </Layout>
            </Col>
          </Row>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          Kazitalk ©2022 Created by Kazitalk IT Team
        </Footer>
      </Layout>
    </>
  );
};

WebcamPage.propTypes = {};

export default WebcamPage;
