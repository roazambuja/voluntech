import { DefaultTheme } from "styled-components";
import { colors as colorsCode } from "./colors";
import { breakpoints } from "./breakpoints";

const theme: DefaultTheme = {
  colors: {
    ...colorsCode,
  },
  breakpoints: {
    ...breakpoints,
  },
};

export { theme };
