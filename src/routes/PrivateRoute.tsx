import { Navigate } from "react-router-dom";
import { CustomRouteProps } from ".";
import { useAuth } from "../contexts/AuthContext";
import Message from "../pages/Message";

function PrivateRoute({ Item }: CustomRouteProps): JSX.Element {
  const { user, loading } = useAuth();

  return loading ? <Message /> : user ? <Item /> : <Navigate to="/login" />;
}

export { PrivateRoute };
