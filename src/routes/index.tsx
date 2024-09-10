import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "../pages/Introduction";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { AuthRoute } from "./AuthRoute";
import { PrivateRoute } from "./PrivateRoute";
import MainLayout from "../pages/MainLayout";
import CreateProject from "../pages/CreateProject";
import ProjectDetails from "../pages/ProjectDetails";
import Configurations from "../pages/Configurations";

export interface CustomRouteProps {
  Item: React.ComponentType;
}

function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout type="auth" />}>
          <Route path="/" element={<Introduction />} />
          <Route path="/login" element={<AuthRoute Item={Login} />} />
          <Route path="/cadastro" element={<AuthRoute Item={SignUp} />} />
        </Route>
        <Route element={<MainLayout type="private" />}>
          <Route path="/cadastrarProjeto" element={<PrivateRoute Item={CreateProject} />} />
          <Route path="/perfil" element={<PrivateRoute Item={Profile} />} />
          <Route path="/projeto/:id" element={<PrivateRoute Item={ProjectDetails} />} />
          <Route path="/configuracoes" element={<PrivateRoute Item={Configurations} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
