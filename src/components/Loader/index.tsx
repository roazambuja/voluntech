import { BeatLoader } from "react-spinners";
import { theme } from "../../styles/theme";

interface SpinnerInterface {
  color?: string;
}

function Loader({ color }: SpinnerInterface): JSX.Element {
  return <BeatLoader color={color || theme.colors.PRIMARY_DARK} />;
}

export { Loader };
