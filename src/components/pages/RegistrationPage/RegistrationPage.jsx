import React from "react";
import PropTypes from "prop-types";
import bg1 from "../../../assets/img/bg1.svg";
import bg2 from "../../../assets/img/bg2.svg";
import bg3 from "../../../assets/img/bg3.svg";
import bg4 from "../../../assets/img/bg4.svg";
import bg5 from "../../../assets/img/bg5.svg";
import bg6 from "../../../assets/img/bg6.svg";
import "../WebcamPage/WebcamPage.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
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
  Form,
} from "antd";
import Navbar from "../../layouts/Navbar/Navbar";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;

const RegistrationPage = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              md={12}
              lg={12}
              align="center"
            >
              <Card bordered={false} hoverable>
                <Meta
                  className="thefont"
                  style={{ marginTop: "30px", marginBottom: "10px" }}
                  title="Secure - Online Members Portal"
                  description="Register to our app"
                />
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 12,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    align="center"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name",
                      },
                    ]}
                  >
                    <Input className="thefont" placeholder="John" />
                  </Form.Item>
                  <Form.Item
                    align="center"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input className="thefont" placeholder="Doe" />
                  </Form.Item>
                  <Form.Item
                    align="center"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      className="thefont"
                      placeholder="johndoe@gmail.com"
                    />
                  </Form.Item>
                  <Form.Item
                    align="center"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="thefont"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item align="center" wrapperCol={{ span: 12 }}>
                    <Link to="/dashboard">
                      <Button
                        className="thefont"
                        shape="round"
                        block
                        type="primary"
                        htmlType="submit"
                      >
                        Submit
                      </Button>
                    </Link>
                  </Form.Item>
                </Form>
                <Link to="/forgot-password">
                  <Button
                    className="thefont"
                    type="link"
                    style={{ color: "#1890ff" }}
                  >
                    Forgot Password?
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    className="thefont"
                    type="link"
                    style={{ color: "#1890ff" }}
                  >
                    Login Here
                  </Button>
                </Link>
              </Card>
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

RegistrationPage.propTypes = {};

export default RegistrationPage;
