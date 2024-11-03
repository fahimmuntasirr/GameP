import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import TimeGame from "./timeGame";
import About from "./about";
import Luck from "./luck";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
    getItem("Picking Game", "1", <DesktopOutlined />),
  getItem("Timer Game", "2", <PieChartOutlined />),
  //   getItem("User", "sub1", <UserOutlined />, [
  //     getItem("Tom", "3"),
  //     getItem("Bill", "4"),
  //     getItem("Alex", "5"),
  //   ]),
  //   getItem("Team", "sub2", <TeamOutlined />, [
  //     getItem("Team 1", "6"),
  //     getItem("Team 2", "8"),
  //   ]),
  getItem("About us", "3", <TeamOutlined />),
];

const Game = () => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedKey) {
      case "2":
        return <TimeGame />;
      case "1":
        return <Luck />;
      case "3":
        return <About />;
      default:
        return <div>Select an option from the menu.</div>;
    }
  };

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update selected key
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="text-4xl text-center pt-3 font-sans font-semibold">
            <h1>GameP</h1>
          </div>
        </Header>
        <Content>
          {/* <TimeGame/> */}
          {renderContent()}
          {/* {content || 'Select an option from the menu.'} */}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©{new Date().getFullYear()} Created by Fahim Muntasir
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Game;
