import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Paper, Title } from "../../styles/global";

function Profile(): JSX.Element {
  const { user, logout } = useAuth();

  return (
    <Paper>
      <Title>Olá, {user?.name}</Title>
      <Link to="/login" onClick={logout}>
        Sair
      </Link>
    </Paper>
  );
}

export default Profile;
