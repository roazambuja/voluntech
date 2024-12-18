import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "../pages/Introduction";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { AuthRoute } from "./AuthRoute";
import { PrivateRoute } from "./PrivateRoute";
import MainLayout from "../pages/MainLayout";
import CreateProject from "../pages/Organizations/CreateProject";
import ProjectDetails from "../pages/ProjectDetails";
import Configurations from "../pages/Organizations/Configurations";
import Pix from "../pages/Organizations/Pix";
import SocialMedia from "../pages/Organizations/SocialMedia";
import CreateVolunteering from "../pages/Organizations/CreateVolunteering";
import Home from "../pages/Home";
import VolunteeringDetails from "../pages/VolunteeringDetails";
import Post from "../pages/Post";
import Chat from "../pages/Chat";
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
          <Route
            path="/cadastrarVoluntariado/:id"
            element={<PrivateRoute Item={CreateVolunteering} />}
          />
          <Route path="/voluntariado/:id" element={<PrivateRoute Item={VolunteeringDetails} />} />
          <Route path="/perfil/:id" element={<PrivateRoute Item={Profile} />} />
          <Route path="/projeto/:id" element={<PrivateRoute Item={ProjectDetails} />} />
          <Route path="/configuracoes" element={<PrivateRoute Item={Configurations} />} />
          <Route path="/cadastrarPix" element={<PrivateRoute Item={Pix} />} />
          <Route path="/cadastrarPix/:id" element={<PrivateRoute Item={Pix} />} />
          <Route path="/cadastrarRedesSociais" element={<PrivateRoute Item={SocialMedia} />} />
          <Route path="/cadastrarRedesSociais/:id" element={<PrivateRoute Item={SocialMedia} />} />
          <Route path="/home" element={<PrivateRoute Item={Home} />} />
          <Route path="/publicacao/:id" element={<PrivateRoute Item={Post} />} />
          <Route path="/chat/:id" element={<PrivateRoute Item={Chat} />} />
          <Route path="/chat" element={<PrivateRoute Item={Chat} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
