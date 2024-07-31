import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Introduction from "../pages/Introduction";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
// import { AppRoutes } from "./appRoutes";
// import { AuthRoutes } from "./authRoutes";

function Routes() {
  const { user } = useAuth();

  // return <BrowserRouter> {user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Introduction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/perfil" element={<Profile />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}

export { Routes };
