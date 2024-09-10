import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Screen, PrivateScreen } from "./styles";

interface MainLayoutProps {
  type: "auth" | "private";
}

function MainLayout({ type }: MainLayoutProps): JSX.Element {
  return type === "auth" ? (
    <Screen>
      <Outlet />
    </Screen>
  ) : (
    <>
      <Header />
      <PrivateScreen>
        <Outlet />
      </PrivateScreen>
    </>
  );
}

export default MainLayout;
