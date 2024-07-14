import FacultyDashboard from "../pages/facultys/FacultyDashboard";
import OfferedCourse from "../pages/facultys/OfferedCourse";

const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered-course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
export default facultyPaths;
