import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Introduction from "../pages/Introduction";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

interface PrivateProps {
  Item: React.ComponentType;
}
const Private = ({ Item }: PrivateProps) => {
  const { user, loading } = useAuth();

  return loading ? <h1>Voce precisa estar autenticado p acessar essa pagina</h1> : user && <Item />;
};

const Auth = ({ Item }: PrivateProps) => {
  const { user, loading } = useAuth();

  return loading ? (
    <h1>Voce precisa estar autenticado p acessar essa pagina</h1>
  ) : !user ? (
    <Item />
  ) : (
    <h1> ops! vc ja esta autenticado</h1>
  );
};

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Introduction />} />
        <Route path="/login" element={<Auth Item={Login} />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/perfil" element={<Private Item={Profile} />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}

export { Routes };
