import { Navigate } from "react-router-dom";
import { CustomRouteProps } from ".";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "../components/Loader";

function PrivateRoute({ Item }: CustomRouteProps): JSX.Element {
  const { user, loading } = useAuth();

  return loading ? <Loader /> : user ? <Item /> : <Navigate to="/login" />;
}

export { PrivateRoute };
