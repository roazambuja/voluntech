import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "../pages/Introduction";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { AuthRoute } from "./AuthRoute";
import { PrivateRoute } from "./PrivateRoute";

export interface CustomRouteProps {
  Item: React.ComponentType;
}

function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/login" element={<AuthRoute Item={Login} />} />
        <Route path="/cadastro" element={<AuthRoute Item={SignUp} />} />
        <Route path="/perfil" element={<PrivateRoute Item={Profile} />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
