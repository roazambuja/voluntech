import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Introduction from "../pages/Introduction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Introduction />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <SignUp />,
  },
]);

export { router };
