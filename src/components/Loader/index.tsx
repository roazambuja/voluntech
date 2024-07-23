import { BeatLoader } from "react-spinners";
import { theme } from "../../styles/theme";

function Loader(): JSX.Element {
  return <BeatLoader color={theme.colors.PRIMARY_DARK} />;
}

export { Loader };
