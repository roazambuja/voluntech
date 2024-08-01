import { Navigate } from "react-router-dom";
import { CustomRouteProps } from ".";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "../components/Loader";

function AuthRoute({ Item }: CustomRouteProps): JSX.Element {
  const { user, loading } = useAuth();

  return loading ? <Loader /> : !user ? <Item /> : <Navigate to="/perfil" />;
}

export { AuthRoute };
