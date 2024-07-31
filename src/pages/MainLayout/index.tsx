import { Outlet } from "react-router-dom";
import { Screen } from "../../styles/global";

function MainLayout(): JSX.Element {
  return (
    <Screen>
      <Outlet />
    </Screen>
  );
}

export default MainLayout;
