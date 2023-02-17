import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  Menu,
  Input,
  Col,
  Row,
  Typography,
  Dropdown,
  Space,
} from "antd";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const items = [
  {
    key: "1",
    type: "group",
    label: "What is KaziTalk",
    children: [
      {
        key: "board-portal",
        label: <Link to="/board-portal">Board Portal</Link>,
      },
      {
        key: "board-management",
        label: <Link to="/board-management">Board Management Software</Link>,
      },
      {
        key: "board-meeting",
        label: <Link to="/board-meeting">KaziTalk as a Board Meeting App</Link>,
      },
      {
        key: "board-governance",
        label: <Link to="/board-governance">What is Board Governance</Link>,
      },
      {
        key: "kazitalk-uni",
        label: <Link to="/kazitalk-uni">KaziTalk for Universities</Link>,
      },
      {
        key: "use-cases",
        label: <Link to="/use-cases">Use Cases</Link>,
      },
      {
        key: "user-profiles",
        label: <Link to="/user-profiles">User Profiles</Link>,
      },
    ],
  },
  {
    key: "2",
    type: "group",
    label: "Why KaziTalk",
    children: [
      {
        key: "benefits",
        label: <Link to="/benefits">Benefits of KaziTalk</Link>,
      },
      {
        key: "paperless",
        label: <Link to="/paperless">Why Paperless</Link>,
      },
      {
        key: "paperless-calculator",
        label: <Link to="/paperless-calculator">Paperless Calculator</Link>,
      },
    ],
  },
  {
    key: "3",
    type: "group",
    label: "Features",
    children: [
      {
        key: "video-conferencing",
        label: <Link to="/video-conferencing">Video Conferencing</Link>,
      },
      {
        key: "key-features",
        label: <Link to="/key-features">Key Features</Link>,
      },
      {
        key: "security-features",
        label: <Link to="/security-features">Security Features</Link>,
      },
      {
        key: "kazitalk-faqs",
        label: <Link to="/kazitalk-faqs">KaziTalk FAQs</Link>,
      },
    ],
  },
];

const items2 = [
  {
    label: "Board Management",
    key: "board-management",
    children: [
      {
        key: "1",
        type: "group",
        label: "What is KaziTalk",
        children: [
          {
            key: "board-portal",
            label: <Link to="/board-portal">Board Portal</Link>,
          },
          {
            key: "board-management",
            label: (
              <Link to="/board-management">Board Management Software</Link>
            ),
          },
          {
            key: "board-meeting",
            label: (
              <Link to="/board-meeting">KaziTalk as a Board Meeting App</Link>
            ),
          },
          {
            key: "board-governance",
            label: <Link to="/board-governance">What is Board Governance</Link>,
          },
          {
            key: "kazitalk-uni",
            label: <Link to="/kazitalk-uni">KaziTalk for Universities</Link>,
          },
          {
            key: "use-cases",
            label: <Link to="/use-cases">Use Cases</Link>,
          },
          {
            key: "user-profiles",
            label: <Link to="/user-profiles">User Profiles</Link>,
          },
        ],
      },
      {
        key: "2",
        type: "group",
        label: "Why KaziTalk",
        children: [
          {
            key: "benefits",
            label: <Link to="/benefits">Benefits of KaziTalk</Link>,
          },
          {
            key: "paperless",
            label: <Link to="/paperless">Why Paperless</Link>,
          },
        ],
      },
      {
        key: "3",
        type: "group",
        label: "Features",
        children: [
          {
            key: "video-conferencing",
            label: <Link to="/video-conferencing">Video Conferencing</Link>,
          },
          {
            key: "key-features",
            label: <Link to="/key-features">Key Features</Link>,
          },
          {
            key: "security-features",
            label: <Link to="/security-features">Security Features</Link>,
          },
          {
            key: "kazitalk-faqs",
            label: <Link to="/kazitalk-faqs">KaziTalk FAQs</Link>,
          },
        ],
      },
    ],
  },
  {
    label: <Link to="/resources">Resources</Link>,
    key: "resources",
  },
  {
    label: <Link to="/about-us">About Us</Link>,
    key: "about-us",
  },
  {
    label: <Link to="/contact-us">Contact Us</Link>,
    key: "contact-us",
  },
];

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
      <Col xs={24} sm={24} md={0} lg={0}>
        <Row>
          <Col xs={12} sm={12} md={0} lg={0}>
            <Link to="/">
              <Title
                className="thefont"
                style={{ margin: "0", paddingTop: "10px", color: "white" }}
                type="secondary"
                level={2}
              >
                KaziTalk
              </Title>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={0} lg={0}>
            <div style={{ height: "60", float: "right" }} className="menuIcon">
              <MenuOutlined
                onClick={() => {
                  setOpenMenu(true);
                }}
              />
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={0} sm={0} md={24} lg={24}>
        <span className="headerMenu">
          <AppMenu />
        </span>
      </Col>

      <Drawer
        style={{ backgroundColor: "#1890ff" }}
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <AppMenu isInLine />
      </Drawer>
    </>
  );
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function AppMenu({ isInLine = false }) {
  const [current, setCurrent] = React.useState("");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={5} lg={5}>
        <Link to="/">
          <Title
            className="thefont"
            style={{ margin: "0", paddingTop: "10px", color: "white" }}
            type="secondary"
            level={2}
          >
            KaziTalk
          </Title>
        </Link>
      </Col>
      <Col align="center" xs={24} sm={24} md={12} lg={12}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          style={{ backgroundColor: "#1890ff", color: "white" }}
          mode={isInLine ? "inline" : "horizontal"}
          items={items2}
        />
        {/* <Menu
          style={{ backgroundColor: "#1890ff", color: "white" }}
          mode={isInLine ? "inline" : "horizontal"}
          items={[
            getItem(
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Board Management
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>,
              "boardmanagement"
            ),
            getItem(
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Other Solutions
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>,
              "othersolutions"
            ),
            getItem(
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Resources
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>,
              "resources"
            ),
            getItem(
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    About Us
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>,
              "aboutus"
            ),
            getItem(
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Contact Us
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>,
              "contactus"
            ),
          ]}
        ></Menu>{" "} */}
      </Col>
    </Row>
  );
}

Navbar.propTypes = {};

export default Navbar;
