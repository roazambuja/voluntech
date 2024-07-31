import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Screen, Text, Title } from "../../styles/global";

function Profile(): JSX.Element {
  const { user, logout } = useAuth();

  return (
    <Screen>
      {user ? (
        <>
          <Title>Bem-vindo, {user.name}</Title>
          <Link to="/login" onClick={logout}>
            Sair
          </Link>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </Screen>
  );
}

export default Profile;
