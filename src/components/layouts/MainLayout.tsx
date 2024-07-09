import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  //   UserOutlined,
  //   VideoCameraOutlined,
  //   UploadOutlined,
  //   UserOutlined,
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "Profile",
  },
  {
    key: "3",
    label: "User Management",
  },
];
// .map((icon, index) => ({
//     key: String(index + 1),
//     icon: createElement(icon),
//     label: `nav ${index + 1}`,
//   }));
const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              color: "white",
              height: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>PH University</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
