import { Layout, Menu } from "antd";
import { sidebarGenaretors } from "../../utils/SidebarItemsGenaretors";
import { adminPaths } from "../../routes/admin.routes";
import facultyPaths from "../../routes/faculty.routes";
import studentPaths from "../../routes/student.routes";
const { Sider } = Layout;

const UserRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = "faculty";
  let sidebarItems;
  switch (role) {
    case UserRole.ADMIN:
      sidebarItems = sidebarGenaretors(adminPaths, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sidebarItems = sidebarGenaretors(facultyPaths, UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
      sidebarItems = sidebarGenaretors(studentPaths, UserRole.STUDENT);
      break;

    default:
      break;
  }

  return (
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
