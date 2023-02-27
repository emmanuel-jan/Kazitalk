import React from "react";
import PropTypes from "prop-types";
import {
  Layout,
  Row,
  Col,
  Avatar,
  List,
  message,
  Typography,
  Space,
  Input,
  Menu,
  Button
} from "antd";
import VirtualList from "rc-virtual-list";
import { useEffect, useState } from "react";
import {
  UserOutlined,
  WechatOutlined,
  PhoneOutlined,
  ContactsOutlined,
  BellOutlined,
  SendOutlined
} from "@ant-design/icons";

const { Search } = Input;
const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 530;
const onSearch = (value) => console.log(value);
const items = [
  {
    key: "chats",
    icon: <WechatOutlined />,
  },
  {
    key: "calls",
    icon: <PhoneOutlined />,
  },
  {
    key: "contacts",
    icon: <ContactsOutlined />,
  },
  {
    key: "notifications",
    icon: <BellOutlined />,
  },
];
const data2 = [
  {
    title: "John Doe",
  },
  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },  {
      title: "John Doe",
    },
];

const MessagingPage = (props) => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };
  useEffect(() => {
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
    <Layout style={{ height: "100vh" }}>
      {/* <Header style={{ backgroundColor: "#1890ff" }}></Header> */}
      <Content>
        <Row>
          <Col xs={0} sm={0} md={5} lg={5}>
            <Col xs={0} sm={0} md={24} lg={24} style={{ padding: "10px" }}>
              <Space>
                <Avatar size="large" icon={<UserOutlined />} />
                <h1>John Doe</h1>
              </Space>
              <Row align="center">
                <Col align="center" xs={0} sm={0} md={24} lg={24}>
                  <Search placeholder="Search people..." onSearch={onSearch} />
                </Col>
                <Menu
                  style={{ background: "transparent" }}
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                />
              </Row>
            </Col>
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
                    <Space>
                      <Avatar src={item.picture.large} />
                      <h4>{item.name.last}</h4>
                    </Space>

                    <div>Thur</div>
                  </List.Item>
                )}
              </VirtualList>
            </List>
          </Col>
          <Col xs={0} sm={0} md={19} lg={19}>
            <Layout style={{height:"100%"}}>
              <Header style={{backgroundColor: "#1890ff"}}>
              <Avatar size="large" icon={<UserOutlined />} /> &nbsp;
                <Text style={{color:"white"}}>John Doe</Text>
              </Header>
              <Content style={{ backgroundColor: "white" }}>
              <List>
                <VirtualList
                  data={data2}
                  height={ContainerHeight}
                  itemHeight={47}
                  itemKey="email"
                  onScroll={onScroll}
                >
                  {(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        description="Hello..."
                      />
                    </List.Item>
                  )}
                </VirtualList>
              </List>
              </Content>
              <Footer
                  style={{
                    background:'#FFFFFF'
                  }}
            >
              <Input.Group compact>
                <Input
                  style={{
                    width: "calc(100% - 200px)",
                    borderRadius: "10px",
                    margin:0,
                  }}
                />
                <Button type="primary"><SendOutlined />Send</Button>
              </Input.Group>
            </Footer>
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

MessagingPage.propTypes = {};

export default MessagingPage;
