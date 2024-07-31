import { Navigate } from "react-router-dom";
import { CustomRouteProps } from ".";
import { useAuth } from "../contexts/AuthContext";
import Message from "../pages/Message";

function AuthRoute({ Item }: CustomRouteProps): JSX.Element {
  const { user, loading } = useAuth();

  return loading ? <Message /> : !user ? <Item /> : <Navigate to="/perfil" />;
}

export { AuthRoute };
