import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routerGenaretor } from "../utils/routerGenerator";
import facultyPaths from "./faculty.routes";
import studentPaths from "./student.routes";
// import { routerGenaretor(adminPaths) } from './admin.routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routerGenaretor(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routerGenaretor(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routerGenaretor(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
