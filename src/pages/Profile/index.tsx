import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Paper, Screen, Title } from "../../styles/global";
import { Loader } from "../../components/Loader";

function Profile(): JSX.Element {
  const { user, logout, loading } = useAuth();

  return (
    <Screen>
      <Paper>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title>Bem-vindo, {user.name}</Title>
            <Link to="/login" onClick={logout}>
              Sair
            </Link>
          </>
        )}
      </Paper>
    </Screen>
  );
}

export default Profile;
