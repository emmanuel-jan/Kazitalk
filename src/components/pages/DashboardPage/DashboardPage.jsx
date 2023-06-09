import React from "react";
import PropTypes from "prop-types";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Col,
  Row,
  Card,
  Form,
  Checkbox,
  Input,
  Typography,
  Avatar
} from "antd";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const DashboardPage = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: "#1890ff" }} className="header">
        <div className="logo" />
        <Menu
          style={{ backgroundColor: "#1890ff", color: "white" }}
          theme="dark"
          mode="horizontal"
          items={items1}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Row
              style={{
                marginTop: "20px",
              }}
            >
              <Col
                xs={24}
                sm={24}
                md={{ span: 12, offset: 6 }}
                lg={{ span: 12, offset: 6 }}
                xl={{ span: 12, offset: 6 }}
              >
                <Card bordered={false}>
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Row gutter={16}>
                      <Col
                        xs={24}
                        sm={24}
                        md={{ span: 12, offset: 10 }}
                        lg={{ span: 12, offset: 10 }}
                      >
                        <Avatar
                          size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                          }}
                          icon={<UserOutlined />}
                        />
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24}>
                        <Title level={5}>Personal Details</Title>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #30C1B9",
                            }}
                            placeholder="Full Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                          name="nationality"
                          rules={[
                            {
                              required: true,
                              message: "Please input your nationality!",
                            },
                          ]}
                        >
                          <Input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #30C1B9",
                            }}
                            placeholder="Nationality"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                          name="idnumber"
                          rules={[
                            {
                              required: true,
                              message:
                                "Please input your National ID/Passport/Alien No!",
                            },
                          ]}
                        >
                          <Input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #30C1B9",
                            }}
                            placeholder="National ID/Passort/Alien No"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                          name="dob"
                          rules={[
                            {
                              required: true,
                              message: "Please input your date of birth!",
                            },
                          ]}
                        >
                          <Input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #30C1B9",
                            }}
                            placeholder="Date Of Birth"
                          />
                        </Form.Item>
                      </Col>
                      
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                          name="bankname"
                          rules={[
                            {
                              required: true,
                              message: "Please input your bank name!",
                            },
                          ]}
                        >
                          <Input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #30C1B9",
                            }}
                            placeholder="Bank Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                          name="branch"
                          rules={[
                            {
                              required: true,
                              message: "Please input your bank branch!",
                            },
                          ]}
                        >
                          <Input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #30C1B9",
                            }}
                            placeholder="Branch"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={16} lg={16}>
                        <Form.Item
                          name="accountNumber"
                          rules={[
                            {
                              required: true,
                              message: "Please input your account number!",
                            },
                          ]}
                        >
                          <Input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #30C1B9",
                            }}
                            placeholder="Account Number"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
                      <Button
                        type="primary"
                        shape="round"
                        style={{ backgroundColor: "#30C1B9", border: "none" }}
                        block
                        htmlType="submit"
                      >
                        Save Info
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
