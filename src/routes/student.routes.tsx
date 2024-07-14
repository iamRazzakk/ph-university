import OfferedCourse from "../pages/facultys/OfferedCourse";
import StudentsDashboard from "../pages/Students/StudentsDashboard";

const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentsDashboard />,
  },
  {
    name: "Offered-course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
export default studentPaths;
